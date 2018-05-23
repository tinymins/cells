// +build gofuzz

package grpc

// Simple PoC to experiment with go-fuzz library.
// Does not seem very appropriate here: we were ending testing protobuf and sqlite driver...
// Stored in the X branch for the time being.

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	cache "github.com/patrickmn/go-cache"
	"github.com/pydio/cells/common/config"
	"github.com/pydio/cells/common/dao"
	"github.com/pydio/cells/common/proto/idm"
	"github.com/pydio/cells/common/service/context"
	"github.com/pydio/cells/common/sql"
	"github.com/pydio/cells/idm/user"
)

func doInit() (dao.DAO, error) {
	autoAppliesCache = cache.New(3600*time.Second, 7200*time.Second)
	autoAppliesCache.Set("autoApplies", map[string][]*idm.Role{}, 0)

	sqlDao := sql.NewDAO("sqlite3", "file::memory:?mode=memory&cache=shared", "idm_user")
	if sqlDao == nil {
		return nil, fmt.Errorf("unable to open sqlite3 DB file, could not start test")
	}

	mockDAO := user.NewDAO(sqlDao)
	var options config.Map
	if err := mockDAO.Init(options); err != nil {
		// log.Fatal("could not start fuzzing test: unable to initialise DAO, error: ", err)
		return nil, err
	}

	return mockDAO, nil
}

func Fuzz(data []byte) int {

	req := idm.CreateUserRequest{}
	err := json.Unmarshal(data, &req)
	if err != nil {
		// log.Fatal(err)
		return 0
	}

	mockDAO, err := doInit()
	if err != nil {
		return 0
	}

	ctx := servicecontext.WithDAO(context.Background(), mockDAO)
	resp := new(idm.CreateUserResponse)
	h := new(Handler)

	err = h.CreateUser(ctx, &req, resp)
	if err != nil {
		return 0
	}

	return 1
}
