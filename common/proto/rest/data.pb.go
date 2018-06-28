// Code generated by protoc-gen-go. DO NOT EDIT.
// source: data.proto

package rest

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import tree "github.com/pydio/cells/common/proto/tree"
import docstore "github.com/pydio/cells/common/proto/docstore"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

type SearchResults struct {
	Results []*tree.Node `protobuf:"bytes,1,rep,name=Results" json:"Results,omitempty"`
	Total   int32        `protobuf:"varint,2,opt,name=Total" json:"Total,omitempty"`
}

func (m *SearchResults) Reset()                    { *m = SearchResults{} }
func (m *SearchResults) String() string            { return proto.CompactTextString(m) }
func (*SearchResults) ProtoMessage()               {}
func (*SearchResults) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{0} }

func (m *SearchResults) GetResults() []*tree.Node {
	if m != nil {
		return m.Results
	}
	return nil
}

func (m *SearchResults) GetTotal() int32 {
	if m != nil {
		return m.Total
	}
	return 0
}

type Metadata struct {
	Namespace string `protobuf:"bytes,1,opt,name=Namespace" json:"Namespace,omitempty"`
	JsonMeta  string `protobuf:"bytes,2,opt,name=JsonMeta" json:"JsonMeta,omitempty"`
}

func (m *Metadata) Reset()                    { *m = Metadata{} }
func (m *Metadata) String() string            { return proto.CompactTextString(m) }
func (*Metadata) ProtoMessage()               {}
func (*Metadata) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{1} }

func (m *Metadata) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *Metadata) GetJsonMeta() string {
	if m != nil {
		return m.JsonMeta
	}
	return ""
}

type MetaCollection struct {
	NodePath  string      `protobuf:"bytes,1,opt,name=NodePath" json:"NodePath,omitempty"`
	Metadatas []*Metadata `protobuf:"bytes,2,rep,name=Metadatas" json:"Metadatas,omitempty"`
}

func (m *MetaCollection) Reset()                    { *m = MetaCollection{} }
func (m *MetaCollection) String() string            { return proto.CompactTextString(m) }
func (*MetaCollection) ProtoMessage()               {}
func (*MetaCollection) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{2} }

func (m *MetaCollection) GetNodePath() string {
	if m != nil {
		return m.NodePath
	}
	return ""
}

func (m *MetaCollection) GetMetadatas() []*Metadata {
	if m != nil {
		return m.Metadatas
	}
	return nil
}

type MetaNamespaceRequest struct {
	NodePath  string   `protobuf:"bytes,1,opt,name=NodePath" json:"NodePath,omitempty"`
	Namespace []string `protobuf:"bytes,2,rep,name=Namespace" json:"Namespace,omitempty"`
}

func (m *MetaNamespaceRequest) Reset()                    { *m = MetaNamespaceRequest{} }
func (m *MetaNamespaceRequest) String() string            { return proto.CompactTextString(m) }
func (*MetaNamespaceRequest) ProtoMessage()               {}
func (*MetaNamespaceRequest) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{3} }

func (m *MetaNamespaceRequest) GetNodePath() string {
	if m != nil {
		return m.NodePath
	}
	return ""
}

func (m *MetaNamespaceRequest) GetNamespace() []string {
	if m != nil {
		return m.Namespace
	}
	return nil
}

type GetBulkMetaRequest struct {
	NodePaths        []string `protobuf:"bytes,1,rep,name=NodePaths" json:"NodePaths,omitempty"`
	NodeUuids        []string `protobuf:"bytes,2,rep,name=NodeUuids" json:"NodeUuids,omitempty"`
	AllMetaProviders bool     `protobuf:"varint,3,opt,name=AllMetaProviders" json:"AllMetaProviders,omitempty"`
	Versions         bool     `protobuf:"varint,4,opt,name=Versions" json:"Versions,omitempty"`
}

func (m *GetBulkMetaRequest) Reset()                    { *m = GetBulkMetaRequest{} }
func (m *GetBulkMetaRequest) String() string            { return proto.CompactTextString(m) }
func (*GetBulkMetaRequest) ProtoMessage()               {}
func (*GetBulkMetaRequest) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{4} }

func (m *GetBulkMetaRequest) GetNodePaths() []string {
	if m != nil {
		return m.NodePaths
	}
	return nil
}

func (m *GetBulkMetaRequest) GetNodeUuids() []string {
	if m != nil {
		return m.NodeUuids
	}
	return nil
}

func (m *GetBulkMetaRequest) GetAllMetaProviders() bool {
	if m != nil {
		return m.AllMetaProviders
	}
	return false
}

func (m *GetBulkMetaRequest) GetVersions() bool {
	if m != nil {
		return m.Versions
	}
	return false
}

type BulkMetaResponse struct {
	Nodes []*tree.Node `protobuf:"bytes,1,rep,name=Nodes" json:"Nodes,omitempty"`
}

func (m *BulkMetaResponse) Reset()                    { *m = BulkMetaResponse{} }
func (m *BulkMetaResponse) String() string            { return proto.CompactTextString(m) }
func (*BulkMetaResponse) ProtoMessage()               {}
func (*BulkMetaResponse) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{5} }

func (m *BulkMetaResponse) GetNodes() []*tree.Node {
	if m != nil {
		return m.Nodes
	}
	return nil
}

type CreateNodesRequest struct {
	Nodes     []*tree.Node `protobuf:"bytes,1,rep,name=Nodes" json:"Nodes,omitempty"`
	Recursive bool         `protobuf:"varint,2,opt,name=Recursive" json:"Recursive,omitempty"`
}

func (m *CreateNodesRequest) Reset()                    { *m = CreateNodesRequest{} }
func (m *CreateNodesRequest) String() string            { return proto.CompactTextString(m) }
func (*CreateNodesRequest) ProtoMessage()               {}
func (*CreateNodesRequest) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{6} }

func (m *CreateNodesRequest) GetNodes() []*tree.Node {
	if m != nil {
		return m.Nodes
	}
	return nil
}

func (m *CreateNodesRequest) GetRecursive() bool {
	if m != nil {
		return m.Recursive
	}
	return false
}

type SetBulkMetaRequest struct {
	Metas []*MetaCollection `protobuf:"bytes,1,rep,name=Metas" json:"Metas,omitempty"`
}

func (m *SetBulkMetaRequest) Reset()                    { *m = SetBulkMetaRequest{} }
func (m *SetBulkMetaRequest) String() string            { return proto.CompactTextString(m) }
func (*SetBulkMetaRequest) ProtoMessage()               {}
func (*SetBulkMetaRequest) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{7} }

func (m *SetBulkMetaRequest) GetMetas() []*MetaCollection {
	if m != nil {
		return m.Metas
	}
	return nil
}

type DeleteBulkMetaRequest struct {
	MetaNamespaceRequests []*MetaNamespaceRequest `protobuf:"bytes,1,rep,name=MetaNamespaceRequests" json:"MetaNamespaceRequests,omitempty"`
}

func (m *DeleteBulkMetaRequest) Reset()                    { *m = DeleteBulkMetaRequest{} }
func (m *DeleteBulkMetaRequest) String() string            { return proto.CompactTextString(m) }
func (*DeleteBulkMetaRequest) ProtoMessage()               {}
func (*DeleteBulkMetaRequest) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{8} }

func (m *DeleteBulkMetaRequest) GetMetaNamespaceRequests() []*MetaNamespaceRequest {
	if m != nil {
		return m.MetaNamespaceRequests
	}
	return nil
}

type NodesCollection struct {
	Parent   *tree.Node   `protobuf:"bytes,1,opt,name=Parent" json:"Parent,omitempty"`
	Children []*tree.Node `protobuf:"bytes,2,rep,name=Children" json:"Children,omitempty"`
}

func (m *NodesCollection) Reset()                    { *m = NodesCollection{} }
func (m *NodesCollection) String() string            { return proto.CompactTextString(m) }
func (*NodesCollection) ProtoMessage()               {}
func (*NodesCollection) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{9} }

func (m *NodesCollection) GetParent() *tree.Node {
	if m != nil {
		return m.Parent
	}
	return nil
}

func (m *NodesCollection) GetChildren() []*tree.Node {
	if m != nil {
		return m.Children
	}
	return nil
}

type ListDocstoreRequest struct {
	StoreID   string                  `protobuf:"bytes,1,opt,name=StoreID" json:"StoreID,omitempty"`
	Query     *docstore.DocumentQuery `protobuf:"bytes,2,opt,name=Query" json:"Query,omitempty"`
	CountOnly bool                    `protobuf:"varint,3,opt,name=CountOnly" json:"CountOnly,omitempty"`
}

func (m *ListDocstoreRequest) Reset()                    { *m = ListDocstoreRequest{} }
func (m *ListDocstoreRequest) String() string            { return proto.CompactTextString(m) }
func (*ListDocstoreRequest) ProtoMessage()               {}
func (*ListDocstoreRequest) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{10} }

func (m *ListDocstoreRequest) GetStoreID() string {
	if m != nil {
		return m.StoreID
	}
	return ""
}

func (m *ListDocstoreRequest) GetQuery() *docstore.DocumentQuery {
	if m != nil {
		return m.Query
	}
	return nil
}

func (m *ListDocstoreRequest) GetCountOnly() bool {
	if m != nil {
		return m.CountOnly
	}
	return false
}

type DocstoreCollection struct {
	Docs  []*docstore.Document `protobuf:"bytes,1,rep,name=Docs" json:"Docs,omitempty"`
	Total int64                `protobuf:"varint,2,opt,name=Total" json:"Total,omitempty"`
}

func (m *DocstoreCollection) Reset()                    { *m = DocstoreCollection{} }
func (m *DocstoreCollection) String() string            { return proto.CompactTextString(m) }
func (*DocstoreCollection) ProtoMessage()               {}
func (*DocstoreCollection) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{11} }

func (m *DocstoreCollection) GetDocs() []*docstore.Document {
	if m != nil {
		return m.Docs
	}
	return nil
}

func (m *DocstoreCollection) GetTotal() int64 {
	if m != nil {
		return m.Total
	}
	return 0
}

type ChangeRequest struct {
	SeqID   int64  `protobuf:"varint,1,opt,name=SeqID" json:"SeqID,omitempty"`
	Filter  string `protobuf:"bytes,2,opt,name=filter" json:"filter,omitempty"`
	Flatten bool   `protobuf:"varint,3,opt,name=flatten" json:"flatten,omitempty"`
	Stream  bool   `protobuf:"varint,4,opt,name=stream" json:"stream,omitempty"`
}

func (m *ChangeRequest) Reset()                    { *m = ChangeRequest{} }
func (m *ChangeRequest) String() string            { return proto.CompactTextString(m) }
func (*ChangeRequest) ProtoMessage()               {}
func (*ChangeRequest) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{12} }

func (m *ChangeRequest) GetSeqID() int64 {
	if m != nil {
		return m.SeqID
	}
	return 0
}

func (m *ChangeRequest) GetFilter() string {
	if m != nil {
		return m.Filter
	}
	return ""
}

func (m *ChangeRequest) GetFlatten() bool {
	if m != nil {
		return m.Flatten
	}
	return false
}

func (m *ChangeRequest) GetStream() bool {
	if m != nil {
		return m.Stream
	}
	return false
}

type ChangeCollection struct {
	Changes   []*tree.SyncChange `protobuf:"bytes,1,rep,name=Changes,json=changes" json:"Changes,omitempty"`
	LastSeqId int64              `protobuf:"varint,2,opt,name=LastSeqId,json=last_seq" json:"LastSeqId,omitempty"`
}

func (m *ChangeCollection) Reset()                    { *m = ChangeCollection{} }
func (m *ChangeCollection) String() string            { return proto.CompactTextString(m) }
func (*ChangeCollection) ProtoMessage()               {}
func (*ChangeCollection) Descriptor() ([]byte, []int) { return fileDescriptor3, []int{13} }

func (m *ChangeCollection) GetChanges() []*tree.SyncChange {
	if m != nil {
		return m.Changes
	}
	return nil
}

func (m *ChangeCollection) GetLastSeqId() int64 {
	if m != nil {
		return m.LastSeqId
	}
	return 0
}

func init() {
	proto.RegisterType((*SearchResults)(nil), "rest.SearchResults")
	proto.RegisterType((*Metadata)(nil), "rest.Metadata")
	proto.RegisterType((*MetaCollection)(nil), "rest.MetaCollection")
	proto.RegisterType((*MetaNamespaceRequest)(nil), "rest.MetaNamespaceRequest")
	proto.RegisterType((*GetBulkMetaRequest)(nil), "rest.GetBulkMetaRequest")
	proto.RegisterType((*BulkMetaResponse)(nil), "rest.BulkMetaResponse")
	proto.RegisterType((*CreateNodesRequest)(nil), "rest.CreateNodesRequest")
	proto.RegisterType((*SetBulkMetaRequest)(nil), "rest.SetBulkMetaRequest")
	proto.RegisterType((*DeleteBulkMetaRequest)(nil), "rest.DeleteBulkMetaRequest")
	proto.RegisterType((*NodesCollection)(nil), "rest.NodesCollection")
	proto.RegisterType((*ListDocstoreRequest)(nil), "rest.ListDocstoreRequest")
	proto.RegisterType((*DocstoreCollection)(nil), "rest.DocstoreCollection")
	proto.RegisterType((*ChangeRequest)(nil), "rest.ChangeRequest")
	proto.RegisterType((*ChangeCollection)(nil), "rest.ChangeCollection")
}

func init() { proto.RegisterFile("data.proto", fileDescriptor3) }

var fileDescriptor3 = []byte{
	// 648 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x54, 0x4d, 0x6f, 0x13, 0x31,
	0x10, 0x55, 0x9a, 0xa6, 0x49, 0xa6, 0x6a, 0x89, 0x4c, 0x0a, 0xab, 0xc0, 0x21, 0xb2, 0x50, 0x15,
	0x55, 0x90, 0x48, 0x2d, 0x37, 0x2e, 0x40, 0x22, 0x21, 0xa0, 0x94, 0xe0, 0x14, 0x0e, 0x20, 0x84,
	0xdc, 0xdd, 0x69, 0xb3, 0xc2, 0x59, 0xa7, 0xb6, 0xb7, 0x52, 0x24, 0x7e, 0x08, 0x3f, 0x17, 0xd9,
	0x6b, 0xef, 0xa6, 0x1f, 0x02, 0x2e, 0xed, 0xbe, 0xf9, 0x78, 0x33, 0x6f, 0x66, 0x1c, 0x80, 0x84,
	0x1b, 0x3e, 0x5c, 0x2a, 0x69, 0x24, 0xd9, 0x54, 0xa8, 0x4d, 0xef, 0xe8, 0x22, 0x35, 0xf3, 0xfc,
	0x6c, 0x18, 0xcb, 0xc5, 0x68, 0xb9, 0x4a, 0x52, 0x39, 0x8a, 0x51, 0x08, 0x3d, 0x8a, 0xe5, 0x62,
	0x21, 0xb3, 0x91, 0x0b, 0x1d, 0x19, 0x85, 0xe8, 0xfe, 0x14, 0xa9, 0xbd, 0x17, 0xff, 0x93, 0x94,
	0xc8, 0x58, 0x1b, 0xa9, 0xb0, 0xfc, 0x28, 0x92, 0xe9, 0x7b, 0xd8, 0x99, 0x21, 0x57, 0xf1, 0x9c,
	0xa1, 0xce, 0x85, 0xd1, 0xe4, 0x09, 0x34, 0xfd, 0x67, 0x54, 0xeb, 0xd7, 0x07, 0xdb, 0x87, 0x30,
	0x74, 0xb5, 0x4e, 0x64, 0x82, 0x2c, 0xb8, 0x48, 0x17, 0x1a, 0xa7, 0xd2, 0x70, 0x11, 0x6d, 0xf4,
	0x6b, 0x83, 0x06, 0x2b, 0x00, 0x9d, 0x40, 0xeb, 0x03, 0x1a, 0x6e, 0x65, 0x91, 0xc7, 0xd0, 0x3e,
	0xe1, 0x0b, 0xd4, 0x4b, 0x1e, 0x63, 0x54, 0xeb, 0xd7, 0x06, 0x6d, 0x56, 0x19, 0x48, 0x0f, 0x5a,
	0xef, 0xb4, 0xcc, 0x6c, 0xb4, 0xa3, 0x68, 0xb3, 0x12, 0xd3, 0xaf, 0xb0, 0x6b, 0xff, 0x8f, 0xa5,
	0x10, 0x18, 0x9b, 0x54, 0x66, 0x36, 0xda, 0x96, 0x9f, 0x72, 0x33, 0xf7, 0x54, 0x25, 0x26, 0x4f,
	0xa1, 0x1d, 0x6a, 0xea, 0x68, 0xc3, 0x75, 0xbc, 0x3b, 0xb4, 0xc3, 0x1c, 0x06, 0x33, 0xab, 0x02,
	0xe8, 0x14, 0xba, 0x16, 0x94, 0x8d, 0x30, 0xbc, 0xcc, 0x51, 0x9b, 0xbf, 0x56, 0xb8, 0xa6, 0xc4,
	0x56, 0x58, 0x57, 0x42, 0x7f, 0xd7, 0x80, 0xbc, 0x41, 0xf3, 0x3a, 0x17, 0x3f, 0x2d, 0x73, 0x20,
	0xb4, 0x49, 0x9e, 0xa0, 0x18, 0xa4, 0x4d, 0x0a, 0x86, 0xe0, 0xfd, 0x9c, 0xa7, 0x89, 0x2e, 0x29,
	0x83, 0x81, 0x1c, 0x40, 0xe7, 0x95, 0x10, 0x96, 0x6d, 0xaa, 0xe4, 0x55, 0x9a, 0xa0, 0xd2, 0x51,
	0xbd, 0x5f, 0x1b, 0xb4, 0xd8, 0x2d, 0xbb, 0x6d, 0xfc, 0x0b, 0x2a, 0x9d, 0xca, 0x4c, 0x47, 0x9b,
	0x2e, 0xa6, 0xc4, 0xf4, 0x39, 0x74, 0xaa, 0xb6, 0xf4, 0x52, 0x66, 0x1a, 0x49, 0x1f, 0x1a, 0xb6,
	0xd0, 0x5d, 0xcb, 0x2d, 0x1c, 0xf4, 0x14, 0xc8, 0x58, 0x21, 0x37, 0xe8, 0x60, 0xd0, 0xf3, 0xcf,
	0x3c, 0xab, 0x89, 0x61, 0x9c, 0x2b, 0x9d, 0x5e, 0xa1, 0xdb, 0x69, 0x8b, 0x55, 0x06, 0xfa, 0x12,
	0xc8, 0xec, 0xf6, 0x94, 0x0e, 0xa0, 0x61, 0x61, 0x60, 0xed, 0x56, 0x8b, 0xab, 0xb6, 0xcf, 0x8a,
	0x10, 0x9a, 0xc2, 0xde, 0x04, 0x05, 0x1a, 0xbc, 0x49, 0x32, 0x85, 0xbd, 0xbb, 0x76, 0x1a, 0x48,
	0x7b, 0x15, 0xe9, 0xcd, 0x10, 0x76, 0x77, 0x22, 0xfd, 0x0e, 0xf7, 0x9c, 0xa6, 0xb5, 0x13, 0xa4,
	0xb0, 0x35, 0xe5, 0x0a, 0x33, 0xe3, 0xce, 0xe3, 0xfa, 0x00, 0xbc, 0x87, 0xec, 0x43, 0x6b, 0x3c,
	0x4f, 0x45, 0xa2, 0x30, 0xf3, 0x97, 0xb8, 0x1e, 0x55, 0xfa, 0xe8, 0x2f, 0xb8, 0x7f, 0x9c, 0x6a,
	0x33, 0xf1, 0x2f, 0x31, 0xe8, 0x88, 0xa0, 0x39, 0xb3, 0xf8, 0xed, 0xc4, 0x9f, 0x60, 0x80, 0xe4,
	0x19, 0x34, 0x3e, 0xe5, 0xa8, 0x56, 0x6e, 0xac, 0xdb, 0x87, 0x0f, 0x87, 0xe5, 0x23, 0x9e, 0xc8,
	0x38, 0x5f, 0x60, 0x66, 0x9c, 0x9b, 0x15, 0x51, 0x76, 0x13, 0x63, 0x99, 0x67, 0xe6, 0x63, 0x26,
	0x56, 0xfe, 0x70, 0x2a, 0x03, 0x65, 0x40, 0x42, 0xe5, 0x35, 0x7d, 0xfb, 0xb0, 0x69, 0xad, 0x7e,
	0x66, 0xe4, 0x76, 0x05, 0xe6, 0xfc, 0xd7, 0x1f, 0x7e, 0x3d, 0x3c, 0x7c, 0x09, 0x3b, 0xe3, 0x39,
	0xcf, 0x2e, 0x4a, 0x2d, 0x5d, 0x68, 0xcc, 0xf0, 0xd2, 0x2b, 0xa9, 0xb3, 0x02, 0x90, 0x07, 0xb0,
	0x75, 0x9e, 0x0a, 0x83, 0xca, 0xbf, 0x79, 0x8f, 0xac, 0xf2, 0x73, 0xc1, 0x8d, 0xc1, 0xcc, 0xb7,
	0x1b, 0xa0, 0xcd, 0xd0, 0x46, 0x21, 0x5f, 0xf8, 0xe3, 0xf6, 0x88, 0x7e, 0x83, 0x4e, 0x51, 0x70,
	0x4d, 0xc2, 0x01, 0x34, 0x0b, 0x5b, 0x50, 0xd1, 0x29, 0xa6, 0x3f, 0x5b, 0x65, 0xb1, 0xef, 0xae,
	0x19, 0x17, 0x01, 0xe4, 0x11, 0xb4, 0x8f, 0xb9, 0x36, 0xb6, 0xad, 0xc4, 0x4b, 0x69, 0x09, 0xae,
	0xcd, 0x0f, 0x8d, 0x97, 0x67, 0x5b, 0xee, 0xa7, 0xf1, 0xe8, 0x4f, 0x00, 0x00, 0x00, 0xff, 0xff,
	0xf4, 0x7f, 0xa0, 0x30, 0xa0, 0x05, 0x00, 0x00,
}
