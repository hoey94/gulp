"use strict";var collision={isIntersectionAABBPlane:function(t,e){var r=(new THREE.Vector3).addVectors(t.max,t.min).multiplyScalar(.5),a=(new THREE.Vector3).subVectors(t.max,r),o=a.x*Math.abs(e.normal.x)+a.y*Math.abs(e.normal.y)+a.z*Math.abs(e.normal.z),n=e.normal.dot(r)-e.constant;return Math.abs(n)<=o},isIntersectionTriangleAABB:function(t,e,r,a){var o,n,c,s,E=(new THREE.Vector3).addVectors(a.max,a.min).multiplyScalar(.5),i=(new THREE.Vector3).subVectors(a.max,E),u=(new THREE.Vector3).subVectors(t,E),V=(new THREE.Vector3).subVectors(e,E),m=(new THREE.Vector3).subVectors(r,E),d=(new THREE.Vector3).subVectors(V,u),x=(new THREE.Vector3).subVectors(m,V),h=(new THREE.Vector3).subVectors(u,m),M=new THREE.Vector3(0,-d.z,d.y),l=new THREE.Vector3(0,-x.z,x.y),y=new THREE.Vector3(0,-h.z,h.y),T=new THREE.Vector3(d.z,0,-d.x),b=new THREE.Vector3(x.z,0,-x.x),w=new THREE.Vector3(h.z,0,-h.x),H=new THREE.Vector3(-d.y,d.x,0),R=new THREE.Vector3(-x.y,x.x,0),z=new THREE.Vector3(-h.y,h.x,0);if(o=u.dot(M),n=V.dot(M),c=m.dot(M),s=i.y*Math.abs(d.z)+i.z*Math.abs(d.y),Math.max(-Math.max(o,n,c),Math.min(o,n,c))>s)return!1;if(o=u.dot(l),n=V.dot(l),c=m.dot(l),s=i.y*Math.abs(x.z)+i.z*Math.abs(x.y),Math.max(-Math.max(o,n,c),Math.min(o,n,c))>s)return!1;if(o=u.dot(y),n=V.dot(y),c=m.dot(y),s=i.y*Math.abs(h.z)+i.z*Math.abs(h.y),Math.max(-Math.max(o,n,c),Math.min(o,n,c))>s)return!1;if(o=u.dot(T),n=V.dot(T),c=m.dot(T),s=i.x*Math.abs(d.z)+i.z*Math.abs(d.x),Math.max(-Math.max(o,n,c),Math.min(o,n,c))>s)return!1;if(o=u.dot(b),n=V.dot(b),c=m.dot(b),s=i.x*Math.abs(x.z)+i.z*Math.abs(x.x),Math.max(-Math.max(o,n,c),Math.min(o,n,c))>s)return!1;if(o=u.dot(w),n=V.dot(w),c=m.dot(w),s=i.x*Math.abs(h.z)+i.z*Math.abs(h.x),Math.max(-Math.max(o,n,c),Math.min(o,n,c))>s)return!1;if(o=u.dot(H),n=V.dot(H),c=m.dot(H),s=i.x*Math.abs(d.y)+i.y*Math.abs(d.x),Math.max(-Math.max(o,n,c),Math.min(o,n,c))>s)return!1;if(o=u.dot(R),n=V.dot(R),c=m.dot(R),s=i.x*Math.abs(x.y)+i.y*Math.abs(x.x),Math.max(-Math.max(o,n,c),Math.min(o,n,c))>s)return!1;if(o=u.dot(z),n=V.dot(z),c=m.dot(z),s=i.x*Math.abs(h.y)+i.y*Math.abs(h.x),Math.max(-Math.max(o,n,c),Math.min(o,n,c))>s)return!1;if(Math.max(u.x,V.x,m.x)<-i.x||Math.min(u.x,V.x,m.x)>i.x)return!1;if(Math.max(u.y,V.y,m.y)<-i.y||Math.min(u.y,V.y,m.y)>i.y)return!1;if(Math.max(u.z,V.z,m.z)<-i.z||Math.min(u.z,V.z,m.z)>i.z)return!1;var f=new THREE.Plane;return f.normal=(new THREE.Vector3).copy(x).cross(d).normalize(),f.constant=f.normal.dot(t),collision.isIntersectionAABBPlane(a,f)},isIntersectionSphereSphere:function(t,e){var r=t.radius+e.radius;return t.center.distanceToSquared(e.center)<=r*r},isIntersectionSphereAABB:function(t,e){var r=t.radius*t.radius,a=0;return t.center.x<e.min.x?a+=Math.sqrt(t.center.x-e.min.x):t.center.x>e.max.x&&(a+=Math.sqrt(t.center.x-e.max.x)),t.center.y<e.min.y?a+=Math.sqrt(t.center.y-e.min.y):t.center.y>e.max.y&&(a+=Math.sqrt(t.center.y-e.max.y)),t.center.z<e.min.z?a+=Math.sqrt(t.center.z-e.min.z):t.center.z>e.max.z&&(a+=Math.sqrt(t.center.z-e.max.z)),a<=r},isIntersectionSphereTriangle:function(t,e,r,a,o){var n,c,s,E,i,u,V,m,d,x=new THREE.Vector3,h=new THREE.Vector3,M=new THREE.Vector3,l=new THREE.Vector3;if(x.subVectors(e,t.center),h.subVectors(r,t.center),M.subVectors(a,t.center),n=t.radius*t.radius,l.crossVectors(h.clone().sub(x),M.clone().sub(x)),c=x.dot(l),n*(s=l.dot(l))<c*c)return!1;if(E=x.dot(x),i=x.dot(h),u=x.dot(M),V=h.dot(h),m=h.dot(M),d=M.dot(M),n<E&E<i&E<u||n<V&V<i&V<m||n<d&d<u&d<m)return!1;var y,T,b,w,H,R,z=new THREE.Vector3,f=new THREE.Vector3,p=new THREE.Vector3,S=new THREE.Vector3,v=new THREE.Vector3,q=new THREE.Vector3,A=new THREE.Vector3,B=new THREE.Vector3,I=new THREE.Vector3;if(z.subVectors(h,x),f.subVectors(M,h),p.subVectors(x,M),y=i-E,T=m-V,b=u-d,w=z.dot(z),H=f.dot(f),R=p.dot(p),S.subVectors(x.multiplyScalar(w),z.multiplyScalar(y)),v.subVectors(h.multiplyScalar(H),f.multiplyScalar(T)),q.subVectors(M.multiplyScalar(R),p.multiplyScalar(b)),A.subVectors(M.multiplyScalar(w),S),B.subVectors(x.multiplyScalar(H),v),I.subVectors(h.multiplyScalar(R),q),S.dot(S)>n*w*w&&0<=S.dot(A)||v.dot(v)>n*H*H&&0<=v.dot(B)||q.dot(q)>n*R*R&&0<=q.dot(I))return!1;var g=Math.sqrt(c*c/s)-t.radius,P=new THREE.Vector3,j=new THREE.Vector3(-o.x,-o.y,-o.z);return P.copy(t.center).add(j.multiplyScalar(g)),{distance:g,contactPoint:P}},isIntersectionSegmentTriangle:function(t,e,r,a,o,n){var c=(new THREE.Vector3).subVectors(a,r),s=(new THREE.Vector3).subVectors(o,r),E=(new THREE.Vector3).subVectors(t,e);n||(n=(new THREE.Vector3).copy(c).cross(s));var i=E.dot(n);if(i<=0)return!1;var u=(new THREE.Vector3).subVectors(t,r),V=u.dot(n);if(V<0)return!1;if(i<V)return!1;var m=(new THREE.Vector3).copy(E).cross(u),d=s.dot(m);if(d<0||i<d)return!1;var x=-c.dot(m);if(x<0||i<d+x)return!1;var h,M=1/i;return V*=M,h=1-(d*=M)-(x*=M),new THREE.Vector3(h,d,x)},isPointInTriangle:function(t,e,r,a){var o=new THREE.Vector3,n=new THREE.Vector3,c=new THREE.Vector3,s=new THREE.Vector3,E=new THREE.Vector3,i=new THREE.Vector3;return o.subVectors(e,t),n.subVectors(r,t),c.subVectors(a,t),s.copy(n).cross(c),E.copy(c).cross(o),!(s.dot(E)<0)&&(i.copy(o).cross(n),!(s.dot(i)<0))}};