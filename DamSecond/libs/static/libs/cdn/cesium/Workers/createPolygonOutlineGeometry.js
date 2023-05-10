define(["./when-ae2e0b60","./Cartesian2-38b35910","./ArcType-1275a14e","./GeometryOffsetAttribute-b02d5bb9","./Transforms-ce97037a","./Check-f996273c","./ComponentDatatype-e44126e4","./EllipsoidTangentPlane-d3bb82f1","./GeometryAttribute-f82de479","./GeometryAttributes-5ce4955a","./GeometryInstance-ed6965ba","./GeometryPipeline-2e63b615","./IndexDatatype-516320ea","./Math-5bbcea10","./PolygonGeometryLibrary-edec67a0","./PolygonPipeline-7b19eef3","./combine-276652d0","./RuntimeError-ac2797b4","./WebGLConstants-35626ea2","./AxisAlignedBoundingBox-26346796","./IntersectionTests-ce427234","./Plane-ee0aa150","./AttributeCompression-25f42564","./EncodedCartesian3-d40e98d6","./arrayRemoveDuplicates-bdf50aa0","./EllipsoidRhumbLine-af7b5ebe"],function(m,d,E,b,P,e,A,_,G,v,L,T,H,C,O,x,t,i,r,o,n,a,l,s,y,u){"use strict";var D=[],I=[];function g(e){var t,i=e.polygonHierarchy,r=m.defaultValue(e.ellipsoid,d.Ellipsoid.WGS84),o=m.defaultValue(e.granularity,C.CesiumMath.RADIANS_PER_DEGREE),n=m.defaultValue(e.perPositionHeight,!1),a=n&&m.defined(e.extrudedHeight),l=m.defaultValue(e.arcType,E.ArcType.GEODESIC),s=m.defaultValue(e.height,0),y=m.defaultValue(e.extrudedHeight,s);a||(t=Math.max(s,y),y=Math.min(s,y),s=t),this._ellipsoid=d.Ellipsoid.clone(r),this._granularity=o,this._height=s,this._extrudedHeight=y,this._arcType=l,this._polygonHierarchy=i,this._perPositionHeight=n,this._perPositionHeightExtrude=a,this._offsetAttribute=e.offsetAttribute,this._workerName="createPolygonOutlineGeometry",this.packedLength=O.PolygonGeometryLibrary.computeHierarchyPackedLength(i)+d.Ellipsoid.packedLength+8}g.pack=function(e,t,i){return i=m.defaultValue(i,0),i=O.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,i),d.Ellipsoid.pack(e._ellipsoid,t,i),i+=d.Ellipsoid.packedLength,t[i++]=e._height,t[i++]=e._extrudedHeight,t[i++]=e._granularity,t[i++]=e._perPositionHeightExtrude?1:0,t[i++]=e._perPositionHeight?1:0,t[i++]=e._arcType,t[i++]=m.defaultValue(e._offsetAttribute,-1),t[i]=e.packedLength,t};var c=d.Ellipsoid.clone(d.Ellipsoid.UNIT_SPHERE),f={polygonHierarchy:{}};return g.unpack=function(e,t,i){t=m.defaultValue(t,0);var r=O.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t),o=(t=r.startingIndex,delete r.startingIndex,d.Ellipsoid.unpack(e,t,c)),n=(t+=d.Ellipsoid.packedLength,e[t++]),a=e[t++],l=e[t++],s=1===e[t++],y=1===e[t++],u=e[t++],p=e[t++],e=e[t];return(i=m.defined(i)?i:new g(f))._polygonHierarchy=r,i._ellipsoid=d.Ellipsoid.clone(o,i._ellipsoid),i._height=n,i._extrudedHeight=a,i._granularity=l,i._perPositionHeight=y,i._perPositionHeightExtrude=s,i._arcType=u,i._offsetAttribute=-1===p?void 0:p,i.packedLength=e,i},g.fromPositions=function(e){return new g({polygonHierarchy:{positions:(e=m.defaultValue(e,m.defaultValue.EMPTY_OBJECT)).positions},height:e.height,extrudedHeight:e.extrudedHeight,ellipsoid:e.ellipsoid,granularity:e.granularity,perPositionHeight:e.perPositionHeight,arcType:e.arcType,offsetAttribute:e.offsetAttribute})},g.createGeometry=function(e){var t=e._ellipsoid,i=e._granularity,r=e._polygonHierarchy,o=e._perPositionHeight,n=e._arcType,a=O.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(r,!o,t);if(0!==a.length){var l,s,y,u,p,d,g=[],c=C.CesiumMath.chordLength(i,t.maximumRadius),f=e._height,h=e._extrudedHeight;if(e._perPositionHeightExtrude||!C.CesiumMath.equalsEpsilon(f,h,0,C.CesiumMath.EPSILON2))for(l=0;l<a.length;l++)(u=function(e,t,i,r,o){var n,a=_.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,D),l=(x.PolygonPipeline.computeWindingOrder2D(a)===x.WindingOrder.CLOCKWISE&&(a.reverse(),t=t.slice().reverse()),t.length),s=new Array(l),y=0;if(r)for(n=new Float64Array(2*l*3*2),b=0;b<l;++b){s[b]=y/3;var u=t[b],p=t[(b+1)%l];n[y++]=u.x,n[y++]=u.y,n[y++]=u.z,n[y++]=p.x,n[y++]=p.y,n[y++]=p.z}else{var d=0;if(o===E.ArcType.GEODESIC)for(b=0;b<l;b++)d+=O.PolygonGeometryLibrary.subdivideLineCount(t[b],t[(b+1)%l],i);else if(o===E.ArcType.RHUMB)for(b=0;b<l;b++)d+=O.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[b],t[(b+1)%l],i);for(n=new Float64Array(3*d*2),b=0;b<l;++b){s[b]=y/3,o===E.ArcType.GEODESIC?g=O.PolygonGeometryLibrary.subdivideLine(t[b],t[(b+1)%l],i,I):o===E.ArcType.RHUMB&&(g=O.PolygonGeometryLibrary.subdivideRhumbLine(e,t[b],t[(b+1)%l],i,I));for(var g,c=g.length,f=0;f<c;++f)n[y++]=g[f]}}for(var l=n.length/6,h=s.length,m=H.IndexDatatype.createTypedArray(l+h,2*(2*l+h)),y=0,b=0;b<l;++b)m[y++]=b,m[y++]=(b+1)%l,m[y++]=b+l,m[y++]=(b+1)%l+l;for(b=0;b<h;b++){var P=s[b];m[y++]=P,m[y++]=P+l}return new L.GeometryInstance({geometry:new G.Geometry({attributes:new v.GeometryAttributes({position:new G.GeometryAttribute({componentDatatype:A.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})}),indices:m,primitiveType:G.PrimitiveType.LINES})})}(t,a[l],c,o,n)).geometry=O.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(u.geometry,f,h,t,o),m.defined(e._offsetAttribute)&&(s=u.geometry.attributes.position.values.length/3,y=new Uint8Array(s),y=e._offsetAttribute===b.GeometryOffsetAttribute.TOP?b.arrayFill(y,1,0,s/2):(d=e._offsetAttribute===b.GeometryOffsetAttribute.NONE?0:1,b.arrayFill(y,d)),u.geometry.attributes.applyOffset=new G.GeometryAttribute({componentDatatype:A.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:y})),g.push(u);else for(l=0;l<a.length;l++)(u=function(e,t,i,r,o){var n,a=_.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,D),l=(x.PolygonPipeline.computeWindingOrder2D(a)===x.WindingOrder.CLOCKWISE&&(a.reverse(),t=t.slice().reverse()),t.length),s=0;if(r)for(n=new Float64Array(2*l*3),h=0;h<l;h++){var y=t[h],u=t[(h+1)%l];n[s++]=y.x,n[s++]=y.y,n[s++]=y.z,n[s++]=u.x,n[s++]=u.y,n[s++]=u.z}else{var p=0;if(o===E.ArcType.GEODESIC)for(h=0;h<l;h++)p+=O.PolygonGeometryLibrary.subdivideLineCount(t[h],t[(h+1)%l],i);else if(o===E.ArcType.RHUMB)for(h=0;h<l;h++)p+=O.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[h],t[(h+1)%l],i);for(n=new Float64Array(3*p),h=0;h<l;h++){o===E.ArcType.GEODESIC?d=O.PolygonGeometryLibrary.subdivideLine(t[h],t[(h+1)%l],i,I):o===E.ArcType.RHUMB&&(d=O.PolygonGeometryLibrary.subdivideRhumbLine(e,t[h],t[(h+1)%l],i,I));for(var d,g=d.length,c=0;c<g;++c)n[s++]=d[c]}}for(var l=n.length/3,f=H.IndexDatatype.createTypedArray(l,2*l),s=0,h=0;h<l-1;h++)f[s++]=h,f[s++]=h+1;return f[s++]=l-1,f[s++]=0,new L.GeometryInstance({geometry:new G.Geometry({attributes:new v.GeometryAttributes({position:new G.GeometryAttribute({componentDatatype:A.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})}),indices:f,primitiveType:G.PrimitiveType.LINES})})}(t,a[l],c,o,n)).geometry.attributes.position.values=x.PolygonPipeline.scaleToGeodeticHeight(u.geometry.attributes.position.values,f,t,!o),m.defined(e._offsetAttribute)&&(p=u.geometry.attributes.position.values.length,p=new Uint8Array(p/3),d=e._offsetAttribute===b.GeometryOffsetAttribute.NONE?0:1,b.arrayFill(p,d),u.geometry.attributes.applyOffset=new G.GeometryAttribute({componentDatatype:A.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:p})),g.push(u);r=T.GeometryPipeline.combineInstances(g)[0],i=P.BoundingSphere.fromVertices(r.attributes.position.values);return new G.Geometry({attributes:r.attributes,indices:r.indices,primitiveType:r.primitiveType,boundingSphere:i,offsetAttribute:e._offsetAttribute})}},function(e,t){return(e=m.defined(t)?g.unpack(e,t):e)._ellipsoid=d.Ellipsoid.clone(e._ellipsoid),g.createGeometry(e)}});
