define(["exports","./Transforms-c842a68c","./Matrix3-b2351961","./ComponentDatatype-ab629b88","./defaultValue-f6d5e6da","./GeometryAttribute-0e790d82","./GeometryAttributes-1e4ddcd2","./GeometryOffsetAttribute-2579b8d2","./VertexFormat-fbdec922"],(function(t,e,n,a,r,i,o,m,u){"use strict";const s=new n.Cartesian3;function y(t){const e=(t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT)).minimum,a=t.maximum,i=r.defaultValue(t.vertexFormat,u.VertexFormat.DEFAULT);this._minimum=n.Cartesian3.clone(e),this._maximum=n.Cartesian3.clone(a),this._vertexFormat=i,this._offsetAttribute=t.offsetAttribute,this._workerName="createBoxGeometry"}y.fromDimensions=function(t){const e=(t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT)).dimensions,a=n.Cartesian3.multiplyByScalar(e,.5,new n.Cartesian3);return new y({minimum:n.Cartesian3.negate(a,new n.Cartesian3),maximum:a,vertexFormat:t.vertexFormat,offsetAttribute:t.offsetAttribute})},y.fromAxisAlignedBoundingBox=function(t){return new y({minimum:t.minimum,maximum:t.maximum})},y.packedLength=2*n.Cartesian3.packedLength+u.VertexFormat.packedLength+1,y.pack=function(t,e,a){return a=r.defaultValue(a,0),n.Cartesian3.pack(t._minimum,e,a),n.Cartesian3.pack(t._maximum,e,a+n.Cartesian3.packedLength),u.VertexFormat.pack(t._vertexFormat,e,a+2*n.Cartesian3.packedLength),e[a+2*n.Cartesian3.packedLength+u.VertexFormat.packedLength]=r.defaultValue(t._offsetAttribute,-1),e};const p=new n.Cartesian3,x=new n.Cartesian3,c=new u.VertexFormat,f={minimum:p,maximum:x,vertexFormat:c,offsetAttribute:void 0};let l;y.unpack=function(t,e,a){e=r.defaultValue(e,0);const i=n.Cartesian3.unpack(t,e,p),o=n.Cartesian3.unpack(t,e+n.Cartesian3.packedLength,x),m=u.VertexFormat.unpack(t,e+2*n.Cartesian3.packedLength,c),s=t[e+2*n.Cartesian3.packedLength+u.VertexFormat.packedLength];return r.defined(a)?(a._minimum=n.Cartesian3.clone(i,a._minimum),a._maximum=n.Cartesian3.clone(o,a._maximum),a._vertexFormat=u.VertexFormat.clone(m,a._vertexFormat),a._offsetAttribute=-1===s?void 0:s,a):(f.offsetAttribute=-1===s?void 0:s,new y(f))},y.createGeometry=function(t){const u=t._minimum,y=t._maximum,p=t._vertexFormat;if(n.Cartesian3.equals(u,y))return;const x=new o.GeometryAttributes;let c,f;if(p.position&&(p.st||p.normal||p.tangent||p.bitangent)){if(p.position&&(f=new Float64Array(72),f[0]=u.x,f[1]=u.y,f[2]=y.z,f[3]=y.x,f[4]=u.y,f[5]=y.z,f[6]=y.x,f[7]=y.y,f[8]=y.z,f[9]=u.x,f[10]=y.y,f[11]=y.z,f[12]=u.x,f[13]=u.y,f[14]=u.z,f[15]=y.x,f[16]=u.y,f[17]=u.z,f[18]=y.x,f[19]=y.y,f[20]=u.z,f[21]=u.x,f[22]=y.y,f[23]=u.z,f[24]=y.x,f[25]=u.y,f[26]=u.z,f[27]=y.x,f[28]=y.y,f[29]=u.z,f[30]=y.x,f[31]=y.y,f[32]=y.z,f[33]=y.x,f[34]=u.y,f[35]=y.z,f[36]=u.x,f[37]=u.y,f[38]=u.z,f[39]=u.x,f[40]=y.y,f[41]=u.z,f[42]=u.x,f[43]=y.y,f[44]=y.z,f[45]=u.x,f[46]=u.y,f[47]=y.z,f[48]=u.x,f[49]=y.y,f[50]=u.z,f[51]=y.x,f[52]=y.y,f[53]=u.z,f[54]=y.x,f[55]=y.y,f[56]=y.z,f[57]=u.x,f[58]=y.y,f[59]=y.z,f[60]=u.x,f[61]=u.y,f[62]=u.z,f[63]=y.x,f[64]=u.y,f[65]=u.z,f[66]=y.x,f[67]=u.y,f[68]=y.z,f[69]=u.x,f[70]=u.y,f[71]=y.z,x.position=new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f})),p.normal){const t=new Float32Array(72);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=1,t[9]=0,t[10]=0,t[11]=1,t[12]=0,t[13]=0,t[14]=-1,t[15]=0,t[16]=0,t[17]=-1,t[18]=0,t[19]=0,t[20]=-1,t[21]=0,t[22]=0,t[23]=-1,t[24]=1,t[25]=0,t[26]=0,t[27]=1,t[28]=0,t[29]=0,t[30]=1,t[31]=0,t[32]=0,t[33]=1,t[34]=0,t[35]=0,t[36]=-1,t[37]=0,t[38]=0,t[39]=-1,t[40]=0,t[41]=0,t[42]=-1,t[43]=0,t[44]=0,t[45]=-1,t[46]=0,t[47]=0,t[48]=0,t[49]=1,t[50]=0,t[51]=0,t[52]=1,t[53]=0,t[54]=0,t[55]=1,t[56]=0,t[57]=0,t[58]=1,t[59]=0,t[60]=0,t[61]=-1,t[62]=0,t[63]=0,t[64]=-1,t[65]=0,t[66]=0,t[67]=-1,t[68]=0,t[69]=0,t[70]=-1,t[71]=0,x.normal=new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}if(p.st){const t=new Float32Array(48);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=1,t[5]=1,t[6]=0,t[7]=1,t[8]=1,t[9]=0,t[10]=0,t[11]=0,t[12]=0,t[13]=1,t[14]=1,t[15]=1,t[16]=0,t[17]=0,t[18]=1,t[19]=0,t[20]=1,t[21]=1,t[22]=0,t[23]=1,t[24]=1,t[25]=0,t[26]=0,t[27]=0,t[28]=0,t[29]=1,t[30]=1,t[31]=1,t[32]=1,t[33]=0,t[34]=0,t[35]=0,t[36]=0,t[37]=1,t[38]=1,t[39]=1,t[40]=0,t[41]=0,t[42]=1,t[43]=0,t[44]=1,t[45]=1,t[46]=0,t[47]=1,x.st=new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:t})}if(p.tangent){const t=new Float32Array(72);t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=1,t[7]=0,t[8]=0,t[9]=1,t[10]=0,t[11]=0,t[12]=-1,t[13]=0,t[14]=0,t[15]=-1,t[16]=0,t[17]=0,t[18]=-1,t[19]=0,t[20]=0,t[21]=-1,t[22]=0,t[23]=0,t[24]=0,t[25]=1,t[26]=0,t[27]=0,t[28]=1,t[29]=0,t[30]=0,t[31]=1,t[32]=0,t[33]=0,t[34]=1,t[35]=0,t[36]=0,t[37]=-1,t[38]=0,t[39]=0,t[40]=-1,t[41]=0,t[42]=0,t[43]=-1,t[44]=0,t[45]=0,t[46]=-1,t[47]=0,t[48]=-1,t[49]=0,t[50]=0,t[51]=-1,t[52]=0,t[53]=0,t[54]=-1,t[55]=0,t[56]=0,t[57]=-1,t[58]=0,t[59]=0,t[60]=1,t[61]=0,t[62]=0,t[63]=1,t[64]=0,t[65]=0,t[66]=1,t[67]=0,t[68]=0,t[69]=1,t[70]=0,t[71]=0,x.tangent=new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}if(p.bitangent){const t=new Float32Array(72);t[0]=0,t[1]=1,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=1,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=1,t[14]=0,t[15]=0,t[16]=1,t[17]=0,t[18]=0,t[19]=1,t[20]=0,t[21]=0,t[22]=1,t[23]=0,t[24]=0,t[25]=0,t[26]=1,t[27]=0,t[28]=0,t[29]=1,t[30]=0,t[31]=0,t[32]=1,t[33]=0,t[34]=0,t[35]=1,t[36]=0,t[37]=0,t[38]=1,t[39]=0,t[40]=0,t[41]=1,t[42]=0,t[43]=0,t[44]=1,t[45]=0,t[46]=0,t[47]=1,t[48]=0,t[49]=0,t[50]=1,t[51]=0,t[52]=0,t[53]=1,t[54]=0,t[55]=0,t[56]=1,t[57]=0,t[58]=0,t[59]=1,t[60]=0,t[61]=0,t[62]=1,t[63]=0,t[64]=0,t[65]=1,t[66]=0,t[67]=0,t[68]=1,t[69]=0,t[70]=0,t[71]=1,x.bitangent=new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}c=new Uint16Array(36),c[0]=0,c[1]=1,c[2]=2,c[3]=0,c[4]=2,c[5]=3,c[6]=6,c[7]=5,c[8]=4,c[9]=7,c[10]=6,c[11]=4,c[12]=8,c[13]=9,c[14]=10,c[15]=8,c[16]=10,c[17]=11,c[18]=14,c[19]=13,c[20]=12,c[21]=15,c[22]=14,c[23]=12,c[24]=18,c[25]=17,c[26]=16,c[27]=19,c[28]=18,c[29]=16,c[30]=20,c[31]=21,c[32]=22,c[33]=20,c[34]=22,c[35]=23}else f=new Float64Array(24),f[0]=u.x,f[1]=u.y,f[2]=u.z,f[3]=y.x,f[4]=u.y,f[5]=u.z,f[6]=y.x,f[7]=y.y,f[8]=u.z,f[9]=u.x,f[10]=y.y,f[11]=u.z,f[12]=u.x,f[13]=u.y,f[14]=y.z,f[15]=y.x,f[16]=u.y,f[17]=y.z,f[18]=y.x,f[19]=y.y,f[20]=y.z,f[21]=u.x,f[22]=y.y,f[23]=y.z,x.position=new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f}),c=new Uint16Array(36),c[0]=4,c[1]=5,c[2]=6,c[3]=4,c[4]=6,c[5]=7,c[6]=1,c[7]=0,c[8]=3,c[9]=1,c[10]=3,c[11]=2,c[12]=1,c[13]=6,c[14]=5,c[15]=1,c[16]=2,c[17]=6,c[18]=2,c[19]=3,c[20]=7,c[21]=2,c[22]=7,c[23]=6,c[24]=3,c[25]=0,c[26]=4,c[27]=3,c[28]=4,c[29]=7,c[30]=0,c[31]=1,c[32]=5,c[33]=0,c[34]=5,c[35]=4;const l=n.Cartesian3.subtract(y,u,s),A=.5*n.Cartesian3.magnitude(l);if(r.defined(t._offsetAttribute)){const e=f.length,n=t._offsetAttribute===m.GeometryOffsetAttribute.NONE?0:1,r=new Uint8Array(e/3).fill(n);x.applyOffset=new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:r})}return new i.Geometry({attributes:x,indices:c,primitiveType:i.PrimitiveType.TRIANGLES,boundingSphere:new e.BoundingSphere(n.Cartesian3.ZERO,A),offsetAttribute:t._offsetAttribute})},y.getUnitBox=function(){return r.defined(l)||(l=y.createGeometry(y.fromDimensions({dimensions:new n.Cartesian3(1,1,1),vertexFormat:u.VertexFormat.POSITION_ONLY}))),l},t.BoxGeometry=y}));
