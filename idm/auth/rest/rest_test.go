package rest

import (
	"fmt"
	"net/http"
	"testing"

	restful "github.com/emicklei/go-restful"
	. "github.com/smartystreets/goconvey/convey"
)

type mockResponseWriter struct{}

func (m *mockResponseWriter) Header() http.Header {
	return nil
}

func (m *mockResponseWriter) Write(b []byte) (int, error) {
	fmt.Printf("%s\n", b)

	return 200, nil
}

func (m *mockResponseWriter) WriteHeader(statusCode int) {
	fmt.Println(statusCode)
}

func TestRest(t *testing.T) {

	Convey("Callback", t, func() {
		a := new(TokenHandler)
		r, err := http.NewRequest("GET", "http://172.17.2.104:8080/a/auth/callback?code=yw543aqzx5k5ouxkqr53zgad2&state=5ef1e040f8a04ecc954d083b9c8ccffc", nil)
		So(err, ShouldBeNil)
		req := restful.NewRequest(r)

		w := new(mockResponseWriter)
		resp := restful.NewResponse(w)

		a.Callback(req, resp)
	})
}
