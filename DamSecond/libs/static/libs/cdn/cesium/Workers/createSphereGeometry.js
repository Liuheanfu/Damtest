define(["./when-ae2e0b60","./Cartesian2-38b35910","./Check-f996273c","./EllipsoidGeometry-8844cb55","./VertexFormat-90d15264","./Math-5bbcea10","./GeometryOffsetAttribute-b02d5bb9","./Transforms-ce97037a","./combine-276652d0","./RuntimeError-ac2797b4","./ComponentDatatype-e44126e4","./WebGLConstants-35626ea2","./GeometryAttribute-f82de479","./GeometryAttributes-5ce4955a","./IndexDatatype-516320ea"],function(i,a,e,o,n,t,r,s,c,d,l,m,u,p,y){"use strict";function G(e){var t=i.defaultValue(e.radius,1),t={radii:new a.Cartesian3(t,t,t),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,vertexFormat:e.vertexFormat};this._ellipsoidGeometry=new o.EllipsoidGeometry(t),this._workerName="createSphereGeometry"}G.packedLength=o.EllipsoidGeometry.packedLength,G.pack=function(e,t,r){return o.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,r)};var f=new o.EllipsoidGeometry,b={radius:void 0,radii:new a.Cartesian3,vertexFormat:new n.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return G.unpack=function(e,t,r){e=o.EllipsoidGeometry.unpack(e,t,f);return b.vertexFormat=n.VertexFormat.clone(e._vertexFormat,b.vertexFormat),b.stackPartitions=e._stackPartitions,b.slicePartitions=e._slicePartitions,i.defined(r)?(a.Cartesian3.clone(e._radii,b.radii),r._ellipsoidGeometry=new o.EllipsoidGeometry(b),r):(b.radius=e._radii.x,new G(b))},G.createGeometry=function(e){return o.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(e,t){return i.defined(t)&&(e=G.unpack(e,t)),G.createGeometry(e)}});
