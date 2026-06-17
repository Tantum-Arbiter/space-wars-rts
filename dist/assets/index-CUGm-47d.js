var ac=Object.defineProperty;var oc=(s,t,e)=>t in s?ac(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var st=(s,t,e)=>oc(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="177",lc=0,Ya=1,cc=2,pl=1,hc=2,un=3,Tn=0,Re=1,qe=2,bn=0,di=1,ja=2,Za=3,Ja=4,uc=5,Fn=100,dc=101,fc=102,pc=103,mc=104,gc=200,vc=201,_c=202,xc=203,Pr=204,Dr=205,yc=206,Sc=207,Mc=208,bc=209,Ec=210,Tc=211,wc=212,Ac=213,Cc=214,Lr=0,Ir=1,Ur=2,mi=3,Nr=4,Fr=5,Or=6,Br=7,ml=0,Rc=1,Pc=2,En=0,Dc=1,Lc=2,Ic=3,Uc=4,Nc=5,Fc=6,Oc=7,gl=300,gi=301,vi=302,zr=303,Hr=304,ks=306,kr=1e3,Bn=1001,Vr=1002,je=1003,Bc=1004,Qi=1005,Qe=1006,Ys=1007,zn=1008,tn=1009,vl=1010,_l=1011,Bi=1012,Ma=1013,Hn=1014,dn=1015,$i=1016,ba=1017,Ea=1018,zi=1020,xl=35902,yl=1021,Sl=1022,Ye=1023,Hi=1026,ki=1027,Ml=1028,Ta=1029,bl=1030,wa=1031,Aa=1033,Rs=33776,Ps=33777,Ds=33778,Ls=33779,Gr=35840,Wr=35841,Xr=35842,qr=35843,$r=36196,Yr=37492,jr=37496,Zr=37808,Jr=37809,Kr=37810,Qr=37811,ta=37812,ea=37813,na=37814,ia=37815,sa=37816,ra=37817,aa=37818,oa=37819,la=37820,ca=37821,Is=36492,ha=36494,ua=36495,El=36283,da=36284,fa=36285,pa=36286,zc=3200,Hc=3201,Tl=0,kc=1,Mn="",ze="srgb",_i="srgb-linear",Ns="linear",se="srgb",qn=7680,Ka=519,Vc=512,Gc=513,Wc=514,wl=515,Xc=516,qc=517,$c=518,Yc=519,Qa=35044,to="300 es",fn=2e3,Fs=2001;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eo=1234567;const Ui=Math.PI/180,Vi=180/Math.PI;function Gn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[s&255]+Me[s>>8&255]+Me[s>>16&255]+Me[s>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function qt(s,t,e){return Math.max(t,Math.min(e,s))}function Ca(s,t){return(s%t+t)%t}function jc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Zc(s,t,e){return s!==t?(e-s)/(t-s):0}function Ni(s,t,e){return(1-e)*s+e*t}function Jc(s,t,e,n){return Ni(s,t,1-Math.exp(-e*n))}function Kc(s,t=1){return t-Math.abs(Ca(s,t*2)-t)}function Qc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function th(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function eh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function nh(s,t){return s+Math.random()*(t-s)}function ih(s){return s*(.5-Math.random())}function sh(s){s!==void 0&&(eo=s);let t=eo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rh(s){return s*Ui}function ah(s){return s*Vi}function oh(s){return(s&s-1)===0&&s!==0}function lh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ch(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hh(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function oi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Qt={DEG2RAD:Ui,RAD2DEG:Vi,generateUUID:Gn,clamp:qt,euclideanModulo:Ca,mapLinear:jc,inverseLerp:Zc,lerp:Ni,damp:Jc,pingpong:Kc,smoothstep:Qc,smootherstep:th,randInt:eh,randFloat:nh,randFloatSpread:ih,seededRandom:sh,degToRad:rh,radToDeg:ah,isPowerOfTwo:oh,ceilPowerOfTwo:lh,floorPowerOfTwo:ch,setQuaternionFromProperEuler:hh,normalize:Te,denormalize:oi};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*y,T=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const L=Math.sqrt(b),R=Math.atan2(L,f*T);m=Math.sin(m*R)/L,o=Math.sin(o*R)/L}const x=o*T;if(l=l*m+d*x,c=c*m+p*x,h=h*m+g*x,u=u*m+y*x,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(no.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(no.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return js.copy(this).projectOnVector(t),this.sub(js)}reflect(t){return this.sub(js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new A,no=new Yi;class Wt{constructor(t,e,n,i,r,a,o,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],y=i[0],m=i[3],f=i[6],T=i[1],b=i[4],x=i[7],L=i[2],R=i[5],C=i[8];return r[0]=a*y+o*T+l*L,r[3]=a*m+o*b+l*R,r[6]=a*f+o*x+l*C,r[1]=c*y+h*T+u*L,r[4]=c*m+h*b+u*R,r[7]=c*f+h*x+u*C,r[2]=d*y+p*T+g*L,r[5]=d*m+p*b+g*R,r[8]=d*f+p*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=u*y,t[1]=(i*c-h*n)*y,t[2]=(o*n-i*a)*y,t[3]=d*y,t[4]=(h*e-i*l)*y,t[5]=(i*r-o*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Zs.makeScale(t,e)),this}rotate(t){return this.premultiply(Zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new Wt;function Al(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Os(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uh(){const s=Os("canvas");return s.style.display="block",s}const io={};function fi(s){s in io||(io[s]=!0,console.warn(s))}function dh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function fh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ph(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const so=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ro=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mh(){const s={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===se&&(i.r=pn(i.r),i.g=pn(i.g),i.b=pn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mn?Ns:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return fi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return fi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[_i]:{primaries:t,whitePoint:n,transfer:Ns,toXYZ:so,fromXYZ:ro,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:se,toXYZ:so,fromXYZ:ro,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),s}const te=mh();function pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $n;class gh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$n===void 0&&($n=Os("canvas")),$n.width=t.width,$n.height=t.height;const i=$n.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=$n}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Os("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=pn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pn(e[n]/255)*255):e[n]=pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vh=0;class Ra{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Js(i[a].image)):r.push(Js(i[a]))}else r=Js(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Js(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _h=0;const Ks=new A;class Pe extends Si{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=Bn,i=Bn,r=Qe,a=zn,o=Ye,l=tn,c=Pe.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Gn(),this.name="",this.source=new Ra(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ks).x}get height(){return this.source.getSize(Ks).y}get depth(){return this.source.getSize(Ks).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kr:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case Vr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kr:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case Vr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=gl;Pe.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,i=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,x=(p+1)/2,L=(f+1)/2,R=(h+d)/4,C=(u+y)/4,D=(g+m)/4;return b>x&&b>L?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=R/n,r=C/n):x>L?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=R/i,r=D/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=C/r,i=D/r),this.set(n,i,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-y)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xh extends Si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Pe(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ra(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends xh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cl extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yh extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ge):Ge.fromBufferAttribute(r,a),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(t.matrixWorld),this.union(ts)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ti),es.subVectors(this.max,Ti),Yn.subVectors(t.a,Ti),jn.subVectors(t.b,Ti),Zn.subVectors(t.c,Ti),mn.subVectors(jn,Yn),gn.subVectors(Zn,jn),Rn.subVectors(Yn,Zn);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Rn.z,Rn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Rn.z,0,-Rn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Rn.y,Rn.x,0];return!Qs(e,Yn,jn,Zn,es)||(e=[1,0,0,0,1,0,0,0,1],!Qs(e,Yn,jn,Zn,es))?!1:(ns.crossVectors(mn,gn),e=[ns.x,ns.y,ns.z],Qs(e,Yn,jn,Zn,es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const rn=[new A,new A,new A,new A,new A,new A,new A,new A],Ge=new A,ts=new ji,Yn=new A,jn=new A,Zn=new A,mn=new A,gn=new A,Rn=new A,Ti=new A,es=new A,ns=new A,Pn=new A;function Qs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Pn.fromArray(s,r);const o=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),l=t.dot(Pn),c=e.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Sh=new ji,wi=new A,tr=new A;class Zi{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wi.subVectors(t,this.center);const e=wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(wi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wi.copy(t.center).add(tr)),this.expandByPoint(wi.copy(t.center).sub(tr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const an=new A,er=new A,is=new A,vn=new A,nr=new A,ss=new A,ir=new A;class Vs{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){er.copy(t).add(e).multiplyScalar(.5),is.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(er);const r=t.distanceTo(e)*.5,a=-this.direction.dot(is),o=vn.dot(this.direction),l=-vn.dot(is),c=vn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(er).addScaledVector(is,d),p}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,i,r){nr.subVectors(e,t),ss.subVectors(n,t),ir.crossVectors(nr,ss);let a=this.direction.dot(ir),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,t);const l=o*this.direction.dot(ss.crossVectors(vn,ss));if(l<0)return null;const c=o*this.direction.dot(nr.cross(vn));if(c<0||l+c>a)return null;const h=-o*vn.dot(ir);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,i,r,a,o,l,c,h,u,d,p,g,y,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,y,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,y,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Jn.setFromMatrixColumn(t,0).length(),r=1/Jn.setFromMatrixColumn(t,1).length(),a=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d+y*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-y*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mh,t,bh)}lookAt(t,e,n){const i=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),_n.crossVectors(n,Le),_n.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),_n.crossVectors(n,Le)),_n.normalize(),rs.crossVectors(Le,_n),i[0]=_n.x,i[4]=rs.x,i[8]=Le.x,i[1]=_n.y,i[5]=rs.y,i[9]=Le.y,i[2]=_n.z,i[6]=rs.z,i[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],T=n[3],b=n[7],x=n[11],L=n[15],R=i[0],C=i[4],D=i[8],M=i[12],_=i[1],P=i[5],B=i[9],O=i[13],X=i[2],q=i[6],W=i[10],Z=i[14],k=i[3],ct=i[7],gt=i[11],Mt=i[15];return r[0]=a*R+o*_+l*X+c*k,r[4]=a*C+o*P+l*q+c*ct,r[8]=a*D+o*B+l*W+c*gt,r[12]=a*M+o*O+l*Z+c*Mt,r[1]=h*R+u*_+d*X+p*k,r[5]=h*C+u*P+d*q+p*ct,r[9]=h*D+u*B+d*W+p*gt,r[13]=h*M+u*O+d*Z+p*Mt,r[2]=g*R+y*_+m*X+f*k,r[6]=g*C+y*P+m*q+f*ct,r[10]=g*D+y*B+m*W+f*gt,r[14]=g*M+y*O+m*Z+f*Mt,r[3]=T*R+b*_+x*X+L*k,r[7]=T*C+b*P+x*q+L*ct,r[11]=T*D+b*B+x*W+L*gt,r[15]=T*M+b*O+x*Z+L*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+y*(+e*l*p-e*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],T=u*m*c-y*d*c+y*l*p-o*m*p-u*l*f+o*d*f,b=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,x=h*y*c-g*u*c+g*o*p-a*y*p-h*o*f+a*u*f,L=g*u*l-h*y*l-g*o*d+a*y*d+h*o*m-a*u*m,R=e*T+n*b+i*x+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=T*C,t[1]=(y*d*r-u*m*r-y*i*p+n*m*p+u*i*f-n*d*f)*C,t[2]=(o*m*r-y*l*r+y*i*c-n*m*c-o*i*f+n*l*f)*C,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*C,t[4]=b*C,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*C,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*f-e*l*f)*C,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*p+e*l*p)*C,t[8]=x*C,t[9]=(g*u*r-h*y*r-g*n*p+e*y*p+h*n*f-e*u*f)*C,t[10]=(a*y*r-g*o*r+g*n*c-e*y*c-a*n*f+e*o*f)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*C,t[12]=L*C,t[13]=(h*y*i-g*u*i+g*n*d-e*y*d-h*n*m+e*u*m)*C,t[14]=(g*o*i-a*y*i-g*n*l+e*y*l+a*n*m-e*o*m)*C,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,y=a*h,m=a*u,f=o*u,T=l*c,b=l*h,x=l*u,L=n.x,R=n.y,C=n.z;return i[0]=(1-(y+f))*L,i[1]=(p+x)*L,i[2]=(g-b)*L,i[3]=0,i[4]=(p-x)*R,i[5]=(1-(d+f))*R,i[6]=(m+T)*R,i[7]=0,i[8]=(g+b)*C,i[9]=(m-T)*C,i[10]=(1-(d+y))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Jn.set(i[0],i[1],i[2]).length();const a=Jn.set(i[4],i[5],i[6]).length(),o=Jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],We.copy(this);const c=1/r,h=1/a,u=1/o;return We.elements[0]*=c,We.elements[1]*=c,We.elements[2]*=c,We.elements[4]*=h,We.elements[5]*=h,We.elements[6]*=h,We.elements[8]*=u,We.elements[9]*=u,We.elements[10]*=u,e.setFromRotationMatrix(We),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=fn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(o===fn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=fn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,p=(n+i)*h;let g,y;if(o===fn)g=(a+r)*u,y=-2*u;else if(o===Fs)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jn=new A,We=new ae,Mh=new A(0,0,0),bh=new A(1,1,1),_n=new A,rs=new A,Le=new A,ao=new ae,oo=new Yi;class en{constructor(t=0,e=0,n=0,i=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ao.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ao,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oo.setFromEuler(this),this.setFromQuaternion(oo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class Pa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Eh=0;const lo=new A,Kn=new Yi,on=new ae,as=new A,Ai=new A,Th=new A,wh=new Yi,co=new A(1,0,0),ho=new A(0,1,0),uo=new A(0,0,1),fo={type:"added"},Ah={type:"removed"},Qn={type:"childadded",child:null},sr={type:"childremoved",child:null};class ye extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new A,e=new en,n=new Yi,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Wt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(co,t)}rotateY(t){return this.rotateOnAxis(ho,t)}rotateZ(t){return this.rotateOnAxis(uo,t)}translateOnAxis(t,e){return lo.copy(t).applyQuaternion(this.quaternion),this.position.add(lo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(co,t)}translateY(t){return this.translateOnAxis(ho,t)}translateZ(t){return this.translateOnAxis(uo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?as.copy(t):as.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ai,as,this.up):on.lookAt(as,Ai,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(on),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fo),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ah),sr.child=t,this.dispatchEvent(sr),sr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fo),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,t,Th),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new A(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new A,ln=new A,rr=new A,cn=new A,ti=new A,ei=new A,po=new A,ar=new A,or=new A,lr=new A,cr=new re,hr=new re,ur=new re;class $e{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Xe.subVectors(t,e),i.cross(Xe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Xe.subVectors(i,e),ln.subVectors(n,e),rr.subVectors(t,e);const a=Xe.dot(Xe),o=Xe.dot(ln),l=Xe.dot(rr),c=ln.dot(ln),h=ln.dot(rr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return cr.setScalar(0),hr.setScalar(0),ur.setScalar(0),cr.fromBufferAttribute(t,e),hr.fromBufferAttribute(t,n),ur.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(cr,r.x),a.addScaledVector(hr,r.y),a.addScaledVector(ur,r.z),a}static isFrontFacing(t,e,n,i){return Xe.subVectors(n,e),ln.subVectors(t,e),Xe.cross(ln).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Xe.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ti.subVectors(i,n),ei.subVectors(r,n),ar.subVectors(t,n);const l=ti.dot(ar),c=ei.dot(ar);if(l<=0&&c<=0)return e.copy(n);or.subVectors(t,i);const h=ti.dot(or),u=ei.dot(or);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ti,a);lr.subVectors(t,r);const p=ti.dot(lr),g=ei.dot(lr);if(g>=0&&p<=g)return e.copy(r);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ei,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return po.subVectors(r,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(po,o);const f=1/(m+y+d);return a=y*f,o=d*f,e.copy(n).addScaledVector(ti,a).addScaledVector(ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},os={h:0,s:0,l:0};function dr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=Ca(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=dr(a,r,t+1/3),this.g=dr(a,r,t),this.b=dr(a,r,t-1/3)}return te.colorSpaceToWorking(this,i),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=Rl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pn(t.r),this.g=pn(t.g),this.b=pn(t.b),this}copyLinearToSRGB(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return te.workingToColorSpace(be.copy(this),t),Math.round(qt(be.r*255,0,255))*65536+Math.round(qt(be.g*255,0,255))*256+Math.round(qt(be.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(be.copy(this),e);const n=be.r,i=be.g,r=be.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ze){te.workingToColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(os);const n=Ni(xn.h,os.h,e),i=Ni(xn.s,os.s,e),r=Ni(xn.l,os.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new $t;$t.NAMES=Rl;let Ch=0;class Wn extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=di,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pr,this.blendDst=Dr,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pr&&(n.blendSrc=this.blendSrc),this.blendDst!==Dr&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ce extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new A,ls=new lt;let Rh=0;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qa,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ls.fromBufferAttribute(this,e),ls.applyMatrix3(t),this.setXY(e,ls.x,ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qa&&(t.usage=this.usage),t}}class Pl extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Dl extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ph=0;const Oe=new ae,fr=new ye,ni=new A,Ie=new ji,Ci=new ji,xe=new A;class me extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Al(t)?Dl:Pl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return fr.lookAt(t),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Ie.min,Ci.min),Ie.expandByPoint(xe),xe.addVectors(Ie.max,Ci.max),Ie.expandByPoint(xe)):(Ie.expandByPoint(Ci.min),Ie.expandByPoint(Ci.max))}Ie.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xe.fromBufferAttribute(o,c),l&&(ni.fromBufferAttribute(t,c),xe.add(ni)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new A,l[D]=new A;const c=new A,h=new A,u=new A,d=new lt,p=new lt,g=new lt,y=new A,m=new A;function f(D,M,_){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[D].add(y),o[M].add(y),o[_].add(y),l[D].add(m),l[M].add(m),l[_].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let D=0,M=T.length;D<M;++D){const _=T[D],P=_.start,B=_.count;for(let O=P,X=P+B;O<X;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const b=new A,x=new A,L=new A,R=new A;function C(D){L.fromBufferAttribute(i,D),R.copy(L);const M=o[D];b.copy(M),b.sub(L.multiplyScalar(L.dot(M))).normalize(),x.crossVectors(R,M);const P=x.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,P)}for(let D=0,M=T.length;D<M;++D){const _=T[D],P=_.start,B=_.count;for(let O=P,X=P+B;O<X;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new He(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mo=new ae,Dn=new Vs,cs=new Zi,go=new A,hs=new A,us=new A,ds=new A,pr=new A,fs=new A,vo=new A,ps=new A;class ce extends ye{constructor(t=new me,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(pr.fromBufferAttribute(u,t),a?fs.addScaledVector(pr,h):fs.addScaledVector(pr.sub(e),h))}e.add(fs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(r),Dn.copy(t.ray).recast(t.near),!(cs.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(cs,go)===null||Dn.origin.distanceToSquared(go)>(t.far-t.near)**2))&&(mo.copy(r).invert(),Dn.copy(t.ray).applyMatrix4(mo),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,L=b;x<L;x+=3){const R=o.getX(x),C=o.getX(x+1),D=o.getX(x+2);i=ms(this,f,t,n,c,h,u,R,C,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const T=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);i=ms(this,a,t,n,c,h,u,T,b,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,L=b;x<L;x+=3){const R=x,C=x+1,D=x+2;i=ms(this,f,t,n,c,h,u,R,C,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const T=m,b=m+1,x=m+2;i=ms(this,a,t,n,c,h,u,T,b,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Dh(s,t,e,n,i,r,a,o){let l;if(t.side===Re?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Tn,o),l===null)return null;ps.copy(o),ps.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ps);return c<e.near||c>e.far?null:{distance:c,point:ps.clone(),object:s}}function ms(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,hs),s.getVertexPosition(l,us),s.getVertexPosition(c,ds);const h=Dh(s,t,e,n,hs,us,ds,vo);if(h){const u=new A;$e.getBarycoord(vo,hs,us,ds,u),i&&(h.uv=$e.getInterpolatedAttribute(i,o,l,c,u,new lt)),r&&(h.uv1=$e.getInterpolatedAttribute(r,o,l,c,u,new lt)),a&&(h.normal=$e.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new A,materialIndex:0};$e.getNormal(hs,us,ds,d.normal),h.face=d,h.barycoord=u}return h}class Mi extends me{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function g(y,m,f,T,b,x,L,R,C,D,M){const _=x/C,P=L/D,B=x/2,O=L/2,X=R/2,q=C+1,W=D+1;let Z=0,k=0;const ct=new A;for(let gt=0;gt<W;gt++){const Mt=gt*P-O;for(let kt=0;kt<q;kt++){const Yt=kt*_-B;ct[y]=Yt*T,ct[m]=Mt*b,ct[f]=X,c.push(ct.x,ct.y,ct.z),ct[y]=0,ct[m]=0,ct[f]=R>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(kt/C),u.push(1-gt/D),Z+=1}}for(let gt=0;gt<D;gt++)for(let Mt=0;Mt<C;Mt++){const kt=d+Mt+q*gt,Yt=d+Mt+q*(gt+1),$=d+(Mt+1)+q*(gt+1),rt=d+(Mt+1)+q*gt;l.push(kt,Yt,rt),l.push(Yt,$,rt),k+=6}o.addGroup(p,k,M),p+=k,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function we(s){const t={};for(let e=0;e<s.length;e++){const n=xi(s[e]);for(const i in n)t[i]=n[i]}return t}function Lh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ll(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Ih={clone:xi,merge:we};var Uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uh,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=Lh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Il extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yn=new A,_o=new lt,xo=new lt;class Ue extends Il{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ui*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(Ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yn.x,yn.y).multiplyScalar(-t/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yn.x,yn.y).multiplyScalar(-t/yn.z)}getViewSize(t,e){return this.getViewBounds(t,_o,xo),e.subVectors(xo,_o)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ui*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ii=-90,si=1;class Fh extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ue(ii,si,t,e);i.layers=this.layers,this.add(i);const r=new Ue(ii,si,t,e);r.layers=this.layers,this.add(r);const a=new Ue(ii,si,t,e);a.layers=this.layers,this.add(a);const o=new Ue(ii,si,t,e);o.layers=this.layers,this.add(o);const l=new Ue(ii,si,t,e);l.layers=this.layers,this.add(l);const c=new Ue(ii,si,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ul extends Pe{constructor(t=[],e=gi,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Oh extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ul(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Mi(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:bn});r.uniforms.tEquirect.value=e;const a=new ce(i,r),o=e.minFilter;return e.minFilter===zn&&(e.minFilter=Qe),new Fh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class li extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bh={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bh)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Bs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new Bs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zh extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gr=new A,Hh=new A,kh=new Wt;class Sn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=gr.subVectors(n,e).cross(Hh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(gr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kh.getNormalMatrix(t),i=this.coplanarPoint(gr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new Zi,gs=new A;class Da{constructor(t=new Sn,e=new Sn,n=new Sn,i=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],y=i[10],m=i[11],f=i[12],T=i[13],b=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,m-p,x-f).normalize(),n[1].setComponents(l+r,d+c,m+p,x+f).normalize(),n[2].setComponents(l+a,d+h,m+g,x+T).normalize(),n[3].setComponents(l-a,d-h,m-g,x-T).normalize(),n[4].setComponents(l-o,d-u,m-y,x-b).normalize(),e===fn)n[5].setComponents(l+o,d+u,m+y,x+b).normalize();else if(e===Fs)n[5].setComponents(o,u,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(gs.x=i.normal.x>0?t.max.x:t.min.x,gs.y=i.normal.y>0?t.max.y:t.min.y,gs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ci extends Wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zs=new A,Hs=new A,yo=new ae,Ri=new Vs,vs=new Zi,vr=new A,So=new A;class Di extends ye{constructor(t=new me,e=new ci){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)zs.fromBufferAttribute(e,i-1),Hs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=zs.distanceTo(Hs);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(i),vs.radius+=r,t.ray.intersectsSphere(vs)===!1)return;yo.copy(i).invert(),Ri.copy(t.ray).applyMatrix4(yo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){const f=h.getX(y),T=h.getX(y+1),b=_s(this,t,Ri,l,f,T,y);b&&e.push(b)}if(this.isLineLoop){const y=h.getX(g-1),m=h.getX(p),f=_s(this,t,Ri,l,y,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){const f=_s(this,t,Ri,l,y,y+1,y);f&&e.push(f)}if(this.isLineLoop){const y=_s(this,t,Ri,l,g-1,p,g-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _s(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(zs.fromBufferAttribute(o,i),Hs.fromBufferAttribute(o,r),e.distanceSqToSegment(zs,Hs,vr,So)>n)return;vr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(vr);if(!(c<t.near||c>t.far))return{distance:c,point:So.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Mo=new A,bo=new A;class Vh extends Di{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Mo.fromBufferAttribute(e,i),bo.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mo.distanceTo(bo);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nl extends Wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Eo=new ae,ma=new Vs,xs=new Zi,ys=new A;class Gh extends ye{constructor(t=new me,e=new Nl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=r,t.ray.intersectsSphere(xs)===!1)return;Eo.copy(i).invert(),ma.copy(t.ray).applyMatrix4(Eo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,y=p;g<y;g++){const m=c.getX(g);ys.fromBufferAttribute(u,m),To(ys,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,y=p;g<y;g++)ys.fromBufferAttribute(u,g),To(ys,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function To(s,t,e,n,i,r,a){const o=ma.distanceSqToPoint(s);if(o<e){const l=new A;ma.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Fl extends Pe{constructor(t,e,n=Hn,i,r,a,o=je,l=je,c,h=Hi,u=1){if(h!==Hi&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ra(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class La extends me{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,p=2*u+d,g=n*2+r,y=i+1,m=new A,f=new A;for(let T=0;T<=g;T++){let b=0,x=0,L=0,R=0;if(T<=n){const M=T/n,_=M*Math.PI/2;x=-h-t*Math.cos(_),L=t*Math.sin(_),R=-t*Math.cos(_),b=M*u}else if(T<=n+r){const M=(T-n)/r;x=-h+M*e,L=t,R=0,b=u+M*d}else{const M=(T-n-r)/n,_=M*Math.PI/2;x=h+t*Math.sin(_),L=t*Math.cos(_),R=t*Math.sin(_),b=u+d+M*u}const C=Math.max(0,Math.min(1,b/p));let D=0;T===0?D=.5/i:T===g&&(D=-.5/i);for(let M=0;M<=i;M++){const _=M/i,P=_*Math.PI*2,B=Math.sin(P),O=Math.cos(P);f.x=-L*O,f.y=x,f.z=L*B,o.push(f.x,f.y,f.z),m.set(-L*O,R,L*B),m.normalize(),l.push(m.x,m.y,m.z),c.push(_+D,C)}if(T>0){const M=(T-1)*y;for(let _=0;_<i;_++){const P=M+_,B=M+_+1,O=T*y+_,X=T*y+_+1;a.push(P,B,O),a.push(B,X,O)}}}this.setIndex(a),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Gi extends me{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const y=[],m=n/2;let f=0;T(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(p,2));function T(){const x=new A,L=new A;let R=0;const C=(e-t)/n;for(let D=0;D<=r;D++){const M=[],_=D/r,P=_*(e-t)+t;for(let B=0;B<=i;B++){const O=B/i,X=O*l+o,q=Math.sin(X),W=Math.cos(X);L.x=P*q,L.y=-_*n+m,L.z=P*W,u.push(L.x,L.y,L.z),x.set(q,C,W).normalize(),d.push(x.x,x.y,x.z),p.push(O,1-_),M.push(g++)}y.push(M)}for(let D=0;D<i;D++)for(let M=0;M<r;M++){const _=y[M][D],P=y[M+1][D],B=y[M+1][D+1],O=y[M][D+1];(t>0||M!==0)&&(h.push(_,P,O),R+=3),(e>0||M!==r-1)&&(h.push(P,B,O),R+=3)}c.addGroup(f,R,0),f+=R}function b(x){const L=g,R=new lt,C=new A;let D=0;const M=x===!0?t:e,_=x===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*_,0),d.push(0,_,0),p.push(.5,.5),g++;const P=g;for(let B=0;B<=i;B++){const X=B/i*l+o,q=Math.cos(X),W=Math.sin(X);C.x=M*W,C.y=m*_,C.z=M*q,u.push(C.x,C.y,C.z),d.push(0,_,0),R.x=q*.5+.5,R.y=W*.5*_+.5,p.push(R.x,R.y),g++}for(let B=0;B<i;B++){const O=L+B,X=P+B;x===!0?h.push(X,X+1,O):h.push(X+1,X,O),D+=3}c.addGroup(f,D,x===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ia extends Gi{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ia(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gs extends me{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const b=new A,x=new A,L=new A;for(let R=0;R<e.length;R+=3)p(e[R+0],b),p(e[R+1],x),p(e[R+2],L),l(b,x,L,T)}function l(T,b,x,L){const R=L+1,C=[];for(let D=0;D<=R;D++){C[D]=[];const M=T.clone().lerp(x,D/R),_=b.clone().lerp(x,D/R),P=R-D;for(let B=0;B<=P;B++)B===0&&D===R?C[D][B]=M:C[D][B]=M.clone().lerp(_,B/P)}for(let D=0;D<R;D++)for(let M=0;M<2*(R-D)-1;M++){const _=Math.floor(M/2);M%2===0?(d(C[D][_+1]),d(C[D+1][_]),d(C[D][_])):(d(C[D][_+1]),d(C[D+1][_+1]),d(C[D+1][_]))}}function c(T){const b=new A;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(T),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){const T=new A;for(let b=0;b<r.length;b+=3){T.x=r[b+0],T.y=r[b+1],T.z=r[b+2];const x=m(T)/2/Math.PI+.5,L=f(T)/Math.PI+.5;a.push(x,1-L)}g(),u()}function u(){for(let T=0;T<a.length;T+=6){const b=a[T+0],x=a[T+2],L=a[T+4],R=Math.max(b,x,L),C=Math.min(b,x,L);R>.9&&C<.1&&(b<.2&&(a[T+0]+=1),x<.2&&(a[T+2]+=1),L<.2&&(a[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function p(T,b){const x=T*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function g(){const T=new A,b=new A,x=new A,L=new A,R=new lt,C=new lt,D=new lt;for(let M=0,_=0;M<r.length;M+=9,_+=6){T.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),R.set(a[_+0],a[_+1]),C.set(a[_+2],a[_+3]),D.set(a[_+4],a[_+5]),L.copy(T).add(b).add(x).divideScalar(3);const P=m(L);y(R,_+0,T,P),y(C,_+2,b,P),y(D,_+4,x,P)}}function y(T,b,x,L){L<0&&T.x===1&&(a[b]=T.x-1),x.x===0&&x.z===0&&(a[b]=L/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.vertices,t.indices,t.radius,t.details)}}class nn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new lt:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new A,i=[],r=[],a=[],o=new A,l=new ae;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(qt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(qt(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ua extends nn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Wh extends Ua{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Na(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Ss=new A,_r=new Na,xr=new Na,yr=new Na;class Xh extends nn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Ss.subVectors(i[0],i[1]).add(i[0]),c=Ss);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ss.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ss),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),_r.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),xr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),yr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(_r.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),xr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),yr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(_r.calc(l),xr.calc(l),yr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wo(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function qh(s,t){const e=1-s;return e*e*t}function $h(s,t){return 2*(1-s)*s*t}function Yh(s,t){return s*s*t}function Fi(s,t,e,n){return qh(s,t)+$h(s,e)+Yh(s,n)}function jh(s,t){const e=1-s;return e*e*e*t}function Zh(s,t){const e=1-s;return 3*e*e*s*t}function Jh(s,t){return 3*(1-s)*s*s*t}function Kh(s,t){return s*s*s*t}function Oi(s,t,e,n,i){return jh(s,t)+Zh(s,e)+Jh(s,n)+Kh(s,i)}class Ol extends nn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Oi(t,i.x,r.x,a.x,o.x),Oi(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qh extends nn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Oi(t,i.x,r.x,a.x,o.x),Oi(t,i.y,r.y,a.y,o.y),Oi(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bl extends nn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tu extends nn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zl extends nn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Fi(t,i.x,r.x,a.x),Fi(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eu extends nn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Fi(t,i.x,r.x,a.x),Fi(t,i.y,r.y,a.y),Fi(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hl extends nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(wo(o,l.x,c.x,h.x,u.x),wo(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new lt().fromArray(i))}return this}}var ga=Object.freeze({__proto__:null,ArcCurve:Wh,CatmullRomCurve3:Xh,CubicBezierCurve:Ol,CubicBezierCurve3:Qh,EllipseCurve:Ua,LineCurve:Bl,LineCurve3:tu,QuadraticBezierCurve:zl,QuadraticBezierCurve3:eu,SplineCurve:Hl});class nu extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ga[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ga[i.type]().fromJSON(i))}return this}}class Ao extends nu{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Bl(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new zl(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Ol(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new Ua(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class kl extends Ao{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ao().fromJSON(i))}return this}}function iu(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Vl(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=lu(s,t,r,e)),s.length>80*e){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<i;d+=e){const p=s[d],g=s[d+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Wi(r,a,e,o,l,c,0),a}function Vl(s,t,e,n,i){let r;if(i===xu(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=Co(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Co(a/n|0,s[a],s[a+1],r);return r&&yi(r,r.next)&&(qi(r),r=r.next),r}function Vn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(yi(e,e.next)||fe(e.prev,e,e.next)===0)){if(qi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wi(s,t,e,n,i,r,a){if(!s)return;!a&&r&&fu(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?ru(s,n,i,r):su(s)){t.push(l.i,s.i,c.i),qi(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=au(Vn(s),t),Wi(s,t,e,n,i,r,2)):a===2&&ou(s,t,e,n,i,r):Wi(Vn(s),t,e,n,i,r,1);break}}}function su(s){const t=s.prev,e=s,n=s.next;if(fe(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),d=Math.max(i,r,a),p=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Li(i,o,r,l,a,c,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ru(s,t,e,n){const i=s.prev,r=s,a=s.next;if(fe(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,p=Math.min(o,l,c),g=Math.min(h,u,d),y=Math.max(o,l,c),m=Math.max(h,u,d),f=va(p,g,t,e,n),T=va(y,m,t,e,n);let b=s.prevZ,x=s.nextZ;for(;b&&b.z>=f&&x&&x.z<=T;){if(b.x>=p&&b.x<=y&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&Li(o,h,l,u,c,d,b.x,b.y)&&fe(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Li(o,h,l,u,c,d,x.x,x.y)&&fe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=y&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&Li(o,h,l,u,c,d,b.x,b.y)&&fe(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=T;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Li(o,h,l,u,c,d,x.x,x.y)&&fe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function au(s,t){let e=s;do{const n=e.prev,i=e.next.next;!yi(n,i)&&Wl(n,e,e.next,i)&&Xi(n,i)&&Xi(i,n)&&(t.push(n.i,e.i,i.i),qi(e),qi(e.next),e=s=i),e=e.next}while(e!==s);return Vn(e)}function ou(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&gu(a,o)){let l=Xl(a,o);a=Vn(a,a.next),l=Vn(l,l.next),Wi(a,t,e,n,i,r,0),Wi(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function lu(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Vl(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(mu(c))}i.sort(cu);for(let r=0;r<i.length;r++)e=hu(i[r],e);return e}function cu(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function hu(s,t){const e=uu(s,t);if(!e)return t;const n=Xl(e,s);return Vn(n,n.next),Vn(e,e.next)}function uu(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(yi(s,e))return e;do{if(yi(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Gl(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Xi(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&du(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function du(s,t){return fe(s.prev,s,t.prev)<0&&fe(t.next,s,s.next)<0}function fu(s,t,e,n){let i=s;do i.z===0&&(i.z=va(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,pu(i)}function pu(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function va(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function mu(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Gl(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Li(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Gl(s,t,e,n,i,r,a,o)}function gu(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!vu(s,t)&&(Xi(s,t)&&Xi(t,s)&&_u(s,t)&&(fe(s.prev,s,t.prev)||fe(s,t.prev,t))||yi(s,t)&&fe(s.prev,s,s.next)>0&&fe(t.prev,t,t.next)>0)}function fe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function yi(s,t){return s.x===t.x&&s.y===t.y}function Wl(s,t,e,n){const i=bs(fe(s,t,e)),r=bs(fe(s,t,n)),a=bs(fe(e,n,s)),o=bs(fe(e,n,t));return!!(i!==r&&a!==o||i===0&&Ms(s,e,t)||r===0&&Ms(s,n,t)||a===0&&Ms(e,s,n)||o===0&&Ms(e,t,n))}function Ms(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function bs(s){return s>0?1:s<0?-1:0}function vu(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Wl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Xi(s,t){return fe(s.prev,s,s.next)<0?fe(s,t,s.next)>=0&&fe(s,s.prev,t)>=0:fe(s,t,s.prev)<0||fe(s,s.next,t)<0}function _u(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Xl(s,t){const e=_a(s.i,s.x,s.y),n=_a(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Co(s,t,e,n){const i=_a(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function _a(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xu(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class yu{static triangulate(t,e,n=2){return iu(t,e,n)}}class hi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return hi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Ro(t),Po(n,t);let a=t.length;e.forEach(Ro);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Po(n,e[l]);const o=yu.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Ro(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Po(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Fa extends me{constructor(t=new kl([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new he(i,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Su;let b,x=!1,L,R,C,D;f&&(b=f.getSpacedPoints(h),x=!0,d=!1,L=f.computeFrenetFrames(h,!1),R=new A,C=new A,D=new A),d||(m=0,p=0,g=0,y=0);const M=o.extractPoints(c);let _=M.shape;const P=M.holes;if(!hi.isClockWise(_)){_=_.reverse();for(let E=0,at=P.length;E<at;E++){const Q=P[E];hi.isClockWise(Q)&&(P[E]=Q.reverse())}}function O(E){const Q=10000000000000001e-36;let ot=E[0];for(let Y=1;Y<=E.length;Y++){const vt=Y%E.length,et=E[vt],_t=et.x-ot.x,zt=et.y-ot.y,w=_t*_t+zt*zt,v=Math.max(Math.abs(et.x),Math.abs(et.y),Math.abs(ot.x),Math.abs(ot.y)),F=Q*v*v;if(w<=F){E.splice(vt,1),Y--;continue}ot=et}}O(_),P.forEach(O);const X=P.length,q=_;for(let E=0;E<X;E++){const at=P[E];_=_.concat(at)}function W(E,at,Q){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),E.clone().addScaledVector(at,Q)}const Z=_.length;function k(E,at,Q){let ot,Y,vt;const et=E.x-at.x,_t=E.y-at.y,zt=Q.x-E.x,w=Q.y-E.y,v=et*et+_t*_t,F=et*w-_t*zt;if(Math.abs(F)>Number.EPSILON){const V=Math.sqrt(v),J=Math.sqrt(zt*zt+w*w),G=at.x-_t/V,wt=at.y+et/V,ht=Q.x-w/J,bt=Q.y+zt/J,At=((ht-G)*w-(bt-wt)*zt)/(et*w-_t*zt);ot=G+et*At-E.x,Y=wt+_t*At-E.y;const K=ot*ot+Y*Y;if(K<=2)return new lt(ot,Y);vt=Math.sqrt(K/2)}else{let V=!1;et>Number.EPSILON?zt>Number.EPSILON&&(V=!0):et<-Number.EPSILON?zt<-Number.EPSILON&&(V=!0):Math.sign(_t)===Math.sign(w)&&(V=!0),V?(ot=-_t,Y=et,vt=Math.sqrt(v)):(ot=et,Y=_t,vt=Math.sqrt(v/2))}return new lt(ot/vt,Y/vt)}const ct=[];for(let E=0,at=q.length,Q=at-1,ot=E+1;E<at;E++,Q++,ot++)Q===at&&(Q=0),ot===at&&(ot=0),ct[E]=k(q[E],q[Q],q[ot]);const gt=[];let Mt,kt=ct.concat();for(let E=0,at=X;E<at;E++){const Q=P[E];Mt=[];for(let ot=0,Y=Q.length,vt=Y-1,et=ot+1;ot<Y;ot++,vt++,et++)vt===Y&&(vt=0),et===Y&&(et=0),Mt[ot]=k(Q[ot],Q[vt],Q[et]);gt.push(Mt),kt=kt.concat(Mt)}let Yt;if(m===0)Yt=hi.triangulateShape(q,P);else{const E=[],at=[];for(let Q=0;Q<m;Q++){const ot=Q/m,Y=p*Math.cos(ot*Math.PI/2),vt=g*Math.sin(ot*Math.PI/2)+y;for(let et=0,_t=q.length;et<_t;et++){const zt=W(q[et],ct[et],vt);Vt(zt.x,zt.y,-Y),ot===0&&E.push(zt)}for(let et=0,_t=X;et<_t;et++){const zt=P[et];Mt=gt[et];const w=[];for(let v=0,F=zt.length;v<F;v++){const V=W(zt[v],Mt[v],vt);Vt(V.x,V.y,-Y),ot===0&&w.push(V)}ot===0&&at.push(w)}}Yt=hi.triangulateShape(E,at)}const $=Yt.length,rt=g+y;for(let E=0;E<Z;E++){const at=d?W(_[E],kt[E],rt):_[E];x?(C.copy(L.normals[0]).multiplyScalar(at.x),R.copy(L.binormals[0]).multiplyScalar(at.y),D.copy(b[0]).add(C).add(R),Vt(D.x,D.y,D.z)):Vt(at.x,at.y,0)}for(let E=1;E<=h;E++)for(let at=0;at<Z;at++){const Q=d?W(_[at],kt[at],rt):_[at];x?(C.copy(L.normals[E]).multiplyScalar(Q.x),R.copy(L.binormals[E]).multiplyScalar(Q.y),D.copy(b[E]).add(C).add(R),Vt(D.x,D.y,D.z)):Vt(Q.x,Q.y,u/h*E)}for(let E=m-1;E>=0;E--){const at=E/m,Q=p*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+y;for(let Y=0,vt=q.length;Y<vt;Y++){const et=W(q[Y],ct[Y],ot);Vt(et.x,et.y,u+Q)}for(let Y=0,vt=P.length;Y<vt;Y++){const et=P[Y];Mt=gt[Y];for(let _t=0,zt=et.length;_t<zt;_t++){const w=W(et[_t],Mt[_t],ot);x?Vt(w.x,w.y+b[h-1].y,b[h-1].x+Q):Vt(w.x,w.y,u+Q)}}}Rt(),mt();function Rt(){const E=i.length/3;if(d){let at=0,Q=Z*at;for(let ot=0;ot<$;ot++){const Y=Yt[ot];Lt(Y[2]+Q,Y[1]+Q,Y[0]+Q)}at=h+m*2,Q=Z*at;for(let ot=0;ot<$;ot++){const Y=Yt[ot];Lt(Y[0]+Q,Y[1]+Q,Y[2]+Q)}}else{for(let at=0;at<$;at++){const Q=Yt[at];Lt(Q[2],Q[1],Q[0])}for(let at=0;at<$;at++){const Q=Yt[at];Lt(Q[0]+Z*h,Q[1]+Z*h,Q[2]+Z*h)}}n.addGroup(E,i.length/3-E,0)}function mt(){const E=i.length/3;let at=0;Pt(q,at),at+=q.length;for(let Q=0,ot=P.length;Q<ot;Q++){const Y=P[Q];Pt(Y,at),at+=Y.length}n.addGroup(E,i.length/3-E,1)}function Pt(E,at){let Q=E.length;for(;--Q>=0;){const ot=Q;let Y=Q-1;Y<0&&(Y=E.length-1);for(let vt=0,et=h+m*2;vt<et;vt++){const _t=Z*vt,zt=Z*(vt+1),w=at+ot+_t,v=at+Y+_t,F=at+Y+zt,V=at+ot+zt;oe(w,v,F,V)}}}function Vt(E,at,Q){l.push(E),l.push(at),l.push(Q)}function Lt(E,at,Q){Jt(E),Jt(at),Jt(Q);const ot=i.length/3,Y=T.generateTopUV(n,i,ot-3,ot-2,ot-1);Gt(Y[0]),Gt(Y[1]),Gt(Y[2])}function oe(E,at,Q,ot){Jt(E),Jt(at),Jt(ot),Jt(at),Jt(Q),Jt(ot);const Y=i.length/3,vt=T.generateSideWallUV(n,i,Y-6,Y-3,Y-2,Y-1);Gt(vt[0]),Gt(vt[1]),Gt(vt[3]),Gt(vt[1]),Gt(vt[2]),Gt(vt[3])}function Jt(E){i.push(l[E*3+0]),i.push(l[E*3+1]),i.push(l[E*3+2])}function Gt(E){r.push(E.x),r.push(E.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Mu(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ga[i.type]().fromJSON(i)),new Fa(n,t.options)}}const Su={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new lt(r,a),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],p=t[i*3+1],g=t[i*3+2],y=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-u),new lt(d,1-g),new lt(y,1-f)]:[new lt(o,1-l),new lt(h,1-u),new lt(p,1-g),new lt(m,1-f)]}};function Mu(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Oa extends Gs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oa(t.radius,t.detail)}}class Ba extends Gs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ba(t.radius,t.detail)}}class Ws extends me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){const T=f*d-a;for(let b=0;b<c;b++){const x=b*u-r;g.push(x,-T,0),y.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const b=T+c*f,x=T+c*(f+1),L=T+1+c*(f+1),R=T+1+c*f;p.push(b,x,R),p.push(x,L,R)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(y,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.widthSegments,t.heightSegments)}}class Be extends me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new A,d=new A,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){const T=[],b=f/n;let x=0;f===0&&a===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const R=L/e;u.x=-t*Math.cos(i+R*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(i+R*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(R+x,1-b),T.push(c++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<e;T++){const b=h[f][T+1],x=h[f][T],L=h[f+1][T],R=h[f+1][T+1];(f!==0||a>0)&&p.push(b,x,R),(f!==n-1||l<Math.PI)&&p.push(x,L,R)}this.setIndex(p),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(y,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Es extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bu extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Eu extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class za extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Sr=new ae,Do=new A,Lo=new A;class ql{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Do.setFromMatrixPosition(t.matrixWorld),e.position.copy(Do),Lo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lo),e.updateMatrixWorld(),Sr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Io=new ae,Pi=new A,Mr=new A;class Tu extends ql{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Pi),Mr.copy(n.position),Mr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Mr),n.updateMatrixWorld(),i.makeTranslation(-Pi.x,-Pi.y,-Pi.z),Io.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io)}}class Uo extends za{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $l extends Il{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class wu extends ql{constructor(){super(new $l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Au extends za{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new wu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cu extends za{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ru extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Pu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=No(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=No();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function No(){return performance.now()}const Fo=new ae;class Du{constructor(t,e,n=0,i=1/0){this.ray=new Vs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fo),this}intersectObject(t,e=!0,n=[]){return xa(t,this,n,e),n.sort(Oo),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)xa(t[i],this,n,e);return n.sort(Oo),n}}function Oo(s,t){return s.distance-t.distance}function xa(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)xa(r[a],t,e,!0)}}class Lu extends Vh{constructor(t=10,e=10,n=4473924,i=8947848){n=new $t(n),i=new $t(i);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=e;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const y=d===r?n:i;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const h=new me;h.setAttribute("position",new he(l,3)),h.setAttribute("color",new he(c,3));const u=new ci({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Bo(s,t,e,n){const i=Iu(n);switch(e){case yl:return s*t;case Ml:return s*t/i.components*i.byteLength;case Ta:return s*t/i.components*i.byteLength;case bl:return s*t*2/i.components*i.byteLength;case wa:return s*t*2/i.components*i.byteLength;case Sl:return s*t*3/i.components*i.byteLength;case Ye:return s*t*4/i.components*i.byteLength;case Aa:return s*t*4/i.components*i.byteLength;case Rs:case Ps:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ds:case Ls:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wr:case qr:return Math.max(s,16)*Math.max(t,8)/4;case Gr:case Xr:return Math.max(s,8)*Math.max(t,8)/2;case $r:case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ta:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ea:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case na:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ia:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case sa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ra:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case aa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case oa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case la:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ca:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Is:case ha:case ua:return Math.ceil(s/4)*Math.ceil(t/4)*16;case El:case da:return Math.ceil(s/4)*Math.ceil(t/4)*8;case fa:case pa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Iu(s){switch(s){case tn:case vl:return{byteLength:1,components:1};case Bi:case _l:case $i:return{byteLength:2,components:1};case ba:case Ea:return{byteLength:2,components:4};case Hn:case Ma:case dn:return{byteLength:4,components:1};case xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yl(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Uu(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const y=u[p];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ku=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$u=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ju=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ad=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Md=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ad=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ld=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Id=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ud=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Od=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ef=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ff=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,np=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ip=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ap=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,up=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Nu,alphahash_pars_fragment:Fu,alphamap_fragment:Ou,alphamap_pars_fragment:Bu,alphatest_fragment:zu,alphatest_pars_fragment:Hu,aomap_fragment:ku,aomap_pars_fragment:Vu,batching_pars_vertex:Gu,batching_vertex:Wu,begin_vertex:Xu,beginnormal_vertex:qu,bsdfs:$u,iridescence_fragment:Yu,bumpmap_pars_fragment:ju,clipping_planes_fragment:Zu,clipping_planes_pars_fragment:Ju,clipping_planes_pars_vertex:Ku,clipping_planes_vertex:Qu,color_fragment:td,color_pars_fragment:ed,color_pars_vertex:nd,color_vertex:id,common:sd,cube_uv_reflection_fragment:rd,defaultnormal_vertex:ad,displacementmap_pars_vertex:od,displacementmap_vertex:ld,emissivemap_fragment:cd,emissivemap_pars_fragment:hd,colorspace_fragment:ud,colorspace_pars_fragment:dd,envmap_fragment:fd,envmap_common_pars_fragment:pd,envmap_pars_fragment:md,envmap_pars_vertex:gd,envmap_physical_pars_fragment:Ad,envmap_vertex:vd,fog_vertex:_d,fog_pars_vertex:xd,fog_fragment:yd,fog_pars_fragment:Sd,gradientmap_pars_fragment:Md,lightmap_pars_fragment:bd,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:Td,lights_pars_begin:wd,lights_toon_fragment:Cd,lights_toon_pars_fragment:Rd,lights_phong_fragment:Pd,lights_phong_pars_fragment:Dd,lights_physical_fragment:Ld,lights_physical_pars_fragment:Id,lights_fragment_begin:Ud,lights_fragment_maps:Nd,lights_fragment_end:Fd,logdepthbuf_fragment:Od,logdepthbuf_pars_fragment:Bd,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:Hd,map_fragment:kd,map_pars_fragment:Vd,map_particle_fragment:Gd,map_particle_pars_fragment:Wd,metalnessmap_fragment:Xd,metalnessmap_pars_fragment:qd,morphinstance_vertex:$d,morphcolor_vertex:Yd,morphnormal_vertex:jd,morphtarget_pars_vertex:Zd,morphtarget_vertex:Jd,normal_fragment_begin:Kd,normal_fragment_maps:Qd,normal_pars_fragment:tf,normal_pars_vertex:ef,normal_vertex:nf,normalmap_pars_fragment:sf,clearcoat_normal_fragment_begin:rf,clearcoat_normal_fragment_maps:af,clearcoat_pars_fragment:of,iridescence_pars_fragment:lf,opaque_fragment:cf,packing:hf,premultiplied_alpha_fragment:uf,project_vertex:df,dithering_fragment:ff,dithering_pars_fragment:pf,roughnessmap_fragment:mf,roughnessmap_pars_fragment:gf,shadowmap_pars_fragment:vf,shadowmap_pars_vertex:_f,shadowmap_vertex:xf,shadowmask_pars_fragment:yf,skinbase_vertex:Sf,skinning_pars_vertex:Mf,skinning_vertex:bf,skinnormal_vertex:Ef,specularmap_fragment:Tf,specularmap_pars_fragment:wf,tonemapping_fragment:Af,tonemapping_pars_fragment:Cf,transmission_fragment:Rf,transmission_pars_fragment:Pf,uv_pars_fragment:Df,uv_pars_vertex:Lf,uv_vertex:If,worldpos_vertex:Uf,background_vert:Nf,background_frag:Ff,backgroundCube_vert:Of,backgroundCube_frag:Bf,cube_vert:zf,cube_frag:Hf,depth_vert:kf,depth_frag:Vf,distanceRGBA_vert:Gf,distanceRGBA_frag:Wf,equirect_vert:Xf,equirect_frag:qf,linedashed_vert:$f,linedashed_frag:Yf,meshbasic_vert:jf,meshbasic_frag:Zf,meshlambert_vert:Jf,meshlambert_frag:Kf,meshmatcap_vert:Qf,meshmatcap_frag:tp,meshnormal_vert:ep,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:sp,meshphysical_vert:rp,meshphysical_frag:ap,meshtoon_vert:op,meshtoon_frag:lp,points_vert:cp,points_frag:hp,shadow_vert:up,shadow_frag:dp,sprite_vert:fp,sprite_frag:pp},dt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Ke={basic:{uniforms:we([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:we([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:we([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:we([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:we([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:we([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:we([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:we([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:we([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:we([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:we([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:we([dt.common,dt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:we([dt.lights,dt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Ke.physical={uniforms:we([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Ts={r:0,b:0,g:0},In=new en,mp=new ae;function gp(s,t,e,n,i,r,a){const o=new $t(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function y(b){let x=!1;const L=g(b);L===null?f(o,l):L&&L.isColor&&(f(L,1),x=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,x){const L=g(x);L&&(L.isCubeTexture||L.mapping===ks)?(h===void 0&&(h=new ce(new Mi(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:xi(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),In.copy(x.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mp.makeRotationFromEuler(In)),h.material.toneMapped=te.getTransfer(L.colorSpace)!==se,(u!==L||d!==L.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new ce(new Ws(2,2),new wn({name:"BackgroundMaterial",uniforms:xi(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=te.getTransfer(L.colorSpace)!==se,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=L,d=L.version,p=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,x){b.getRGB(Ts,Ll(s)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,x,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:y,addToRenderList:m,dispose:T}}function vp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(_,P,B,O,X){let q=!1;const W=u(O,B,P);r!==W&&(r=W,c(r.object)),q=p(_,O,B,X),q&&g(_,O,B,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(_,P,B,O),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,P,B){const O=B.wireframe===!0;let X=n[_.id];X===void 0&&(X={},n[_.id]=X);let q=X[P.id];q===void 0&&(q={},X[P.id]=q);let W=q[O];return W===void 0&&(W=d(l()),q[O]=W),W}function d(_){const P=[],B=[],O=[];for(let X=0;X<e;X++)P[X]=0,B[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:O,object:_,attributes:{},index:null}}function p(_,P,B,O){const X=r.attributes,q=P.attributes;let W=0;const Z=B.getAttributes();for(const k in Z)if(Z[k].location>=0){const gt=X[k];let Mt=q[k];if(Mt===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(Mt=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(Mt=_.instanceColor)),gt===void 0||gt.attribute!==Mt||Mt&&gt.data!==Mt.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(_,P,B,O){const X={},q=P.attributes;let W=0;const Z=B.getAttributes();for(const k in Z)if(Z[k].location>=0){let gt=q[k];gt===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(gt=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(gt=_.instanceColor));const Mt={};Mt.attribute=gt,gt&&gt.data&&(Mt.data=gt.data),X[k]=Mt,W++}r.attributes=X,r.attributesNum=W,r.index=O}function y(){const _=r.newAttributes;for(let P=0,B=_.length;P<B;P++)_[P]=0}function m(_){f(_,0)}function f(_,P){const B=r.newAttributes,O=r.enabledAttributes,X=r.attributeDivisors;B[_]=1,O[_]===0&&(s.enableVertexAttribArray(_),O[_]=1),X[_]!==P&&(s.vertexAttribDivisor(_,P),X[_]=P)}function T(){const _=r.newAttributes,P=r.enabledAttributes;for(let B=0,O=P.length;B<O;B++)P[B]!==_[B]&&(s.disableVertexAttribArray(B),P[B]=0)}function b(_,P,B,O,X,q,W){W===!0?s.vertexAttribIPointer(_,P,B,X,q):s.vertexAttribPointer(_,P,B,O,X,q)}function x(_,P,B,O){y();const X=O.attributes,q=B.getAttributes(),W=P.defaultAttributeValues;for(const Z in q){const k=q[Z];if(k.location>=0){let ct=X[Z];if(ct===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(ct=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(ct=_.instanceColor)),ct!==void 0){const gt=ct.normalized,Mt=ct.itemSize,kt=t.get(ct);if(kt===void 0)continue;const Yt=kt.buffer,$=kt.type,rt=kt.bytesPerElement,Rt=$===s.INT||$===s.UNSIGNED_INT||ct.gpuType===Ma;if(ct.isInterleavedBufferAttribute){const mt=ct.data,Pt=mt.stride,Vt=ct.offset;if(mt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<k.locationSize;Lt++)f(k.location+Lt,mt.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Lt=0;Lt<k.locationSize;Lt++)m(k.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let Lt=0;Lt<k.locationSize;Lt++)b(k.location+Lt,Mt/k.locationSize,$,gt,Pt*rt,(Vt+Mt/k.locationSize*Lt)*rt,Rt)}else{if(ct.isInstancedBufferAttribute){for(let mt=0;mt<k.locationSize;mt++)f(k.location+mt,ct.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let mt=0;mt<k.locationSize;mt++)m(k.location+mt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let mt=0;mt<k.locationSize;mt++)b(k.location+mt,Mt/k.locationSize,$,gt,Mt*rt,Mt/k.locationSize*mt*rt,Rt)}}else if(W!==void 0){const gt=W[Z];if(gt!==void 0)switch(gt.length){case 2:s.vertexAttrib2fv(k.location,gt);break;case 3:s.vertexAttrib3fv(k.location,gt);break;case 4:s.vertexAttrib4fv(k.location,gt);break;default:s.vertexAttrib1fv(k.location,gt)}}}}T()}function L(){D();for(const _ in n){const P=n[_];for(const B in P){const O=P[B];for(const X in O)h(O[X].object),delete O[X];delete P[B]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;const P=n[_.id];for(const B in P){const O=P[B];for(const X in O)h(O[X].object),delete O[X];delete P[B]}delete n[_.id]}function C(_){for(const P in n){const B=n[P];if(B[_.id]===void 0)continue;const O=B[_.id];for(const X in O)h(O[X].object),delete O[X];delete B[_.id]}}function D(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:T}}function _p(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function xp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Ye&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==tn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==dn&&!D)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:L,maxSamples:R}}function yp(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Sn,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:n,b=T*4;let x=f.clippingState||null;l.value=x,x=h(g,d,b,p);for(let L=0;L!==b;++L)x[L]=e[L];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const y=u!==null?u.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const f=p+y*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,x=p;b!==y;++b,x+=4)a.copy(u[b]).applyMatrix4(T,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Sp(s){let t=new WeakMap;function e(a,o){return o===zr?a.mapping=gi:o===Hr&&(a.mapping=vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===zr||o===Hr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Oh(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ui=4,zo=[.125,.215,.35,.446,.526,.582],On=20,br=new $l,Ho=new $t;let Er=null,Tr=0,wr=0,Ar=!1;const Nn=(1+Math.sqrt(5))/2,ri=1/Nn,ko=[new A(-Nn,ri,0),new A(Nn,ri,0),new A(-ri,0,Nn),new A(ri,0,Nn),new A(0,Nn,-ri),new A(0,Nn,ri),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Mp=new A;class Vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=Mp}=r;Er=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Er,Tr,wr),this._renderer.xr.enabled=Ar,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Er=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:$i,format:Ye,colorSpace:_i,depthBuffer:!1},i=Go(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Go(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bp(r)),this._blurMaterial=Ep(r,t,e)}return i}_compileMaterial(t){const e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,br)}_sceneToCubeUV(t,e,n,i,r){const l=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ho),u.toneMapping=En,u.autoClear=!1;const g=new Ce({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),y=new ce(new Mi,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(Ho),m=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));const x=this._cubeSize;ws(i,b*x,T>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(y,l),u.render(t,l)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===gi||t.mapping===vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,br)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ko[(i-r-1)%ko.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ce(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*On-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):On;m>On&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${On}`);const f=[];let T=0;for(let C=0;C<On;++C){const D=C/y,M=Math.exp(-D*D/2);f.push(M),C===0?T+=M:C<m&&(T+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const x=this._sizeLods[i],L=3*x*(i>b-ui?i-b+ui:0),R=4*(this._cubeSize-x);ws(e,L,R,3*x,2*x),l.setRenderTarget(e),l.render(u,br)}}function bp(s){const t=[],e=[],n=[];let i=s;const r=s-ui+1+zo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ui?l=zo[a-s+ui-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,T=new Float32Array(y*g*p),b=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,D=R>2?0:-1,M=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];T.set(M,y*g*R),b.set(d,m*g*R);const _=[R,R,R,R,R,R];x.set(_,f*g*R)}const L=new me;L.setAttribute("position",new He(T,y)),L.setAttribute("uv",new He(b,m)),L.setAttribute("faceIndex",new He(x,f)),t.push(L),i>ui&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Go(s,t,e){const n=new kn(s,t,e);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ep(s,t,e){const n=new Float32Array(On),i=new A(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Wo(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Xo(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ha(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===zr||l===Hr,h=l===gi||l===vi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Vo(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Vo(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function wp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&fi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ap(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let y=0;if(p!==null){const T=p.array;y=p.version;for(let b=0,x=T.length;b<x;b+=3){const L=T[b+0],R=T[b+1],C=T[b+2];d.push(L,R,R,C,C,L)}}else if(g!==void 0){const T=g.array;y=g.version;for(let b=0,x=T.length/3-1;b<x;b+=3){const L=b+0,R=b+1,C=b+2;d.push(L,R,R,C,C,L)}}else return;const m=new(Al(d)?Dl:Pl)(d,1);m.version=y;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Cp(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,y){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*y[T];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Rp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Pp(s,t,e){const n=new WeakMap,i=new re;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let _=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var p=_;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let L=o.attributes.position.count*x,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const C=new Float32Array(L*R*4*u),D=new Cl(C,L,R,u);D.type=dn,D.needsUpdate=!0;const M=x*4;for(let P=0;P<u;P++){const B=f[P],O=T[P],X=b[P],q=L*R*4*P;for(let W=0;W<B.count;W++){const Z=W*M;g===!0&&(i.fromBufferAttribute(B,W),C[q+Z+0]=i.x,C[q+Z+1]=i.y,C[q+Z+2]=i.z,C[q+Z+3]=0),y===!0&&(i.fromBufferAttribute(O,W),C[q+Z+4]=i.x,C[q+Z+5]=i.y,C[q+Z+6]=i.z,C[q+Z+7]=0),m===!0&&(i.fromBufferAttribute(X,W),C[q+Z+8]=i.x,C[q+Z+9]=i.y,C[q+Z+10]=i.z,C[q+Z+11]=X.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new lt(L,R)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",y),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Dp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const jl=new Pe,qo=new Fl(1,1),Zl=new Cl,Jl=new yh,Kl=new Ul,$o=[],Yo=[],jo=new Float32Array(16),Zo=new Float32Array(9),Jo=new Float32Array(4);function bi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=$o[i];if(r===void 0&&(r=new Float32Array(i),$o[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Xs(s,t){let e=Yo[t];e===void 0&&(e=new Int32Array(t),Yo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Lp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function Fp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Jo.set(n),s.uniformMatrix2fv(this.addr,!1,Jo),_e(e,n)}}function Op(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Zo.set(n),s.uniformMatrix3fv(this.addr,!1,Zo),_e(e,n)}}function Bp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;jo.set(n),s.uniformMatrix4fv(this.addr,!1,jo),_e(e,n)}}function zp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function Vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function Gp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function Xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function $p(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(qo.compareFunction=wl,r=qo):r=jl,e.setTexture2D(t||r,i)}function Yp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Jl,i)}function jp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Kl,i)}function Zp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Zl,i)}function Jp(s){switch(s){case 5126:return Lp;case 35664:return Ip;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return kp;case 35669:case 35673:return Vp;case 5125:return Gp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Zp}}function Kp(s,t){s.uniform1fv(this.addr,t)}function Qp(s,t){const e=bi(t,this.size,2);s.uniform2fv(this.addr,e)}function tm(s,t){const e=bi(t,this.size,3);s.uniform3fv(this.addr,e)}function em(s,t){const e=bi(t,this.size,4);s.uniform4fv(this.addr,e)}function nm(s,t){const e=bi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function im(s,t){const e=bi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sm(s,t){const e=bi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function rm(s,t){s.uniform1iv(this.addr,t)}function am(s,t){s.uniform2iv(this.addr,t)}function om(s,t){s.uniform3iv(this.addr,t)}function lm(s,t){s.uniform4iv(this.addr,t)}function cm(s,t){s.uniform1uiv(this.addr,t)}function hm(s,t){s.uniform2uiv(this.addr,t)}function um(s,t){s.uniform3uiv(this.addr,t)}function dm(s,t){s.uniform4uiv(this.addr,t)}function fm(s,t,e){const n=this.cache,i=t.length,r=Xs(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||jl,r[a])}function pm(s,t,e){const n=this.cache,i=t.length,r=Xs(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Jl,r[a])}function mm(s,t,e){const n=this.cache,i=t.length,r=Xs(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Kl,r[a])}function gm(s,t,e){const n=this.cache,i=t.length,r=Xs(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Zl,r[a])}function vm(s){switch(s){case 5126:return Kp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class _m{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jp(e.type)}}class xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vm(e.type)}}class ym{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Cr=/(\w+)(\])?(\[|\.)?/g;function Ko(s,t){s.seq.push(t),s.map[t.id]=t}function Sm(s,t,e){const n=s.name,i=n.length;for(Cr.lastIndex=0;;){const r=Cr.exec(n),a=Cr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ko(e,c===void 0?new _m(o,s,t):new xm(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new ym(o),Ko(e,u)),e=u}}}class Us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Sm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Qo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Mm=37297;let bm=0;function Em(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const tl=new Wt;function Tm(s){te._getMatrix(tl,te.workingColorSpace,s);const t=`mat3( ${tl.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case Ns:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function el(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Em(s.getShaderSource(t),a)}else return i}function wm(s,t){const e=Tm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Am(s,t){let e;switch(t){case Dc:e="Linear";break;case Lc:e="Reinhard";break;case Ic:e="Cineon";break;case Uc:e="ACESFilmic";break;case Fc:e="AgX";break;case Oc:e="Neutral";break;case Nc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const As=new A;function Cm(){te.getLuminanceCoefficients(As);const s=As.x.toFixed(4),t=As.y.toFixed(4),e=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function Pm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ii(s){return s!==""}function nl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function il(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(s){return s.replace(Lm,Um)}const Im=new Map;function Um(s,t){let e=Xt[t];if(e===void 0){const n=Im.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ya(e)}const Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(s){return s.replace(Nm,Fm)}function Fm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function rl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Om(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===hc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function Bm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gi:case vi:t="ENVMAP_TYPE_CUBE";break;case ks:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vi:t="ENVMAP_MODE_REFRACTION";break}return t}function Hm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ml:t="ENVMAP_BLENDING_MULTIPLY";break;case Rc:t="ENVMAP_BLENDING_MIX";break;case Pc:t="ENVMAP_BLENDING_ADD";break}return t}function km(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Vm(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Om(e),c=Bm(e),h=zm(e),u=Hm(e),d=km(e),p=Rm(e),g=Pm(r),y=i.createProgram();let m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),f.length>0&&(f+=`
`)):(m=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),f=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Xt.tonemapping_pars_fragment:"",e.toneMapping!==En?Am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),Cm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),a=ya(a),a=nl(a,e),a=il(a,e),o=ya(o),o=nl(o,e),o=il(o,e),a=sl(a),o=sl(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===to?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===to?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=T+m+a,x=T+f+o,L=Qo(i,i.VERTEX_SHADER,b),R=Qo(i,i.FRAGMENT_SHADER,x);i.attachShader(y,L),i.attachShader(y,R),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function C(P){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(y).trim(),O=i.getShaderInfoLog(L).trim(),X=i.getShaderInfoLog(R).trim();let q=!0,W=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,L,R);else{const Z=el(i,L,"vertex"),k=el(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+Z+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||X==="")&&(W=!1);W&&(P.diagnostics={runnable:q,programLog:B,vertexShader:{log:O,prefix:m},fragmentShader:{log:X,prefix:f}})}i.deleteShader(L),i.deleteShader(R),D=new Us(i,y),M=Dm(i,y)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(y,Mm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bm++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=R,this}let Gm=0;class Wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xm(t),e.set(t,n)),n}}class Xm{constructor(t){this.id=Gm++,this.code=t,this.usedTimes=0}}function qm(s,t,e,n,i,r,a){const o=new Pa,l=new Wm,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,P,B,O){const X=B.fog,q=O.geometry,W=M.isMeshStandardMaterial?B.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),k=Z&&Z.mapping===ks?Z.image.height:null,ct=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Mt=gt!==void 0?gt.length:0;let kt=0;q.morphAttributes.position!==void 0&&(kt=1),q.morphAttributes.normal!==void 0&&(kt=2),q.morphAttributes.color!==void 0&&(kt=3);let Yt,$,rt,Rt;if(ct){const ne=Ke[ct];Yt=ne.vertexShader,$=ne.fragmentShader}else Yt=M.vertexShader,$=M.fragmentShader,l.update(M),rt=l.getVertexShaderID(M),Rt=l.getFragmentShaderID(M);const mt=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Vt=O.isInstancedMesh===!0,Lt=O.isBatchedMesh===!0,oe=!!M.map,Jt=!!M.matcap,Gt=!!Z,E=!!M.aoMap,at=!!M.lightMap,Q=!!M.bumpMap,ot=!!M.normalMap,Y=!!M.displacementMap,vt=!!M.emissiveMap,et=!!M.metalnessMap,_t=!!M.roughnessMap,zt=M.anisotropy>0,w=M.clearcoat>0,v=M.dispersion>0,F=M.iridescence>0,V=M.sheen>0,J=M.transmission>0,G=zt&&!!M.anisotropyMap,wt=w&&!!M.clearcoatMap,ht=w&&!!M.clearcoatNormalMap,bt=w&&!!M.clearcoatRoughnessMap,At=F&&!!M.iridescenceMap,K=F&&!!M.iridescenceThicknessMap,xt=V&&!!M.sheenColorMap,Nt=V&&!!M.sheenRoughnessMap,Ut=!!M.specularMap,ut=!!M.specularColorMap,Bt=!!M.specularIntensityMap,I=J&&!!M.transmissionMap,ft=J&&!!M.thicknessMap,tt=!!M.gradientMap,St=!!M.alphaMap,nt=M.alphaTest>0,j=!!M.alphaHash,Et=!!M.extensions;let Ht=En;M.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Ht=s.toneMapping);const le={shaderID:ct,shaderType:M.type,shaderName:M.name,vertexShader:Yt,fragmentShader:$,defines:M.defines,customVertexShaderID:rt,customFragmentShaderID:Rt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Lt,batchingColor:Lt&&O._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&O.instanceColor!==null,instancingMorph:Vt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:_i,alphaToCoverage:!!M.alphaToCoverage,map:oe,matcap:Jt,envMap:Gt,envMapMode:Gt&&Z.mapping,envMapCubeUVHeight:k,aoMap:E,lightMap:at,bumpMap:Q,normalMap:ot,displacementMap:d&&Y,emissiveMap:vt,normalMapObjectSpace:ot&&M.normalMapType===kc,normalMapTangentSpace:ot&&M.normalMapType===Tl,metalnessMap:et,roughnessMap:_t,anisotropy:zt,anisotropyMap:G,clearcoat:w,clearcoatMap:wt,clearcoatNormalMap:ht,clearcoatRoughnessMap:bt,dispersion:v,iridescence:F,iridescenceMap:At,iridescenceThicknessMap:K,sheen:V,sheenColorMap:xt,sheenRoughnessMap:Nt,specularMap:Ut,specularColorMap:ut,specularIntensityMap:Bt,transmission:J,transmissionMap:I,thicknessMap:ft,gradientMap:tt,opaque:M.transparent===!1&&M.blending===di&&M.alphaToCoverage===!1,alphaMap:St,alphaTest:nt,alphaHash:j,combine:M.combine,mapUv:oe&&y(M.map.channel),aoMapUv:E&&y(M.aoMap.channel),lightMapUv:at&&y(M.lightMap.channel),bumpMapUv:Q&&y(M.bumpMap.channel),normalMapUv:ot&&y(M.normalMap.channel),displacementMapUv:Y&&y(M.displacementMap.channel),emissiveMapUv:vt&&y(M.emissiveMap.channel),metalnessMapUv:et&&y(M.metalnessMap.channel),roughnessMapUv:_t&&y(M.roughnessMap.channel),anisotropyMapUv:G&&y(M.anisotropyMap.channel),clearcoatMapUv:wt&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ht&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:K&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&y(M.sheenRoughnessMap.channel),specularMapUv:Ut&&y(M.specularMap.channel),specularColorMapUv:ut&&y(M.specularColorMap.channel),specularIntensityMapUv:Bt&&y(M.specularIntensityMap.channel),transmissionMapUv:I&&y(M.transmissionMap.channel),thicknessMapUv:ft&&y(M.thicknessMap.channel),alphaMapUv:St&&y(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ot||zt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(oe||St),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:kt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ht,decodeVideoTexture:oe&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===se,decodeVideoTextureEmissive:vt&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qe,flipSided:M.side===Re,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Et&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&M.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function f(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)_.push(P),_.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(T(_,M),b(_,M),_.push(s.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function T(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function b(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const _=g[M.type];let P;if(_){const B=Ke[_];P=Ih.clone(B.uniforms)}else P=M.uniforms;return P}function L(M,_){let P;for(let B=0,O=h.length;B<O;B++){const X=h[B];if(X.cacheKey===_){P=X,++P.usedTimes;break}}return P===void 0&&(P=new Vm(s,_,M,r),h.push(P)),P}function R(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:D}}function $m(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ym(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function al(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ol(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,g,y,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function o(u,d,p,g,y,m){const f=a(u,d,p,g,y,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,y,m){const f=a(u,d,p,g,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Ym),n.length>1&&n.sort(d||al),i.length>1&&i.sort(d||al)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function jm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new ol,s.set(n,[a])):i>=r.length?(a=new ol,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Zm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new $t};break;case"SpotLight":e={position:new A,direction:new A,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function Jm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Km=0;function Qm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function tg(s){const t=new Zm,e=Jm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const i=new A,r=new ae,a=new ae;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,T=0,b=0,x=0,L=0,R=0,C=0;c.sort(Qm);for(let M=0,_=c.length;M<_;M++){const P=c[M],B=P.color,O=P.intensity,X=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*O,u+=B.g*O,d+=B.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],O);C++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,k=e.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=P.shadow.matrix,T++}n.directional[p]=W,p++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(B).multiplyScalar(O),W.distance=X,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[y]=W;const Z=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,Z.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[y]=Z.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.spotShadow[y]=k,n.spotShadowMap[y]=q,x++}y++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(B).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Z=P.shadow,k=e.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[f]=W,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==y||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==x||D.numSpotMaps!==L||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,D.directionalLength=p,D.pointLength=g,D.spotLength=y,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=x,D.numSpotMaps=L,D.numLightProbes=C,n.version=Km++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0;const m=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const b=c[f];if(b.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=n.hemi[y];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function ll(s){const t=new tg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function eg(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new ll(s),t.set(i,[o])):r>=a.length?(o=new ll(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sg(s,t,e){let n=new Da;const i=new lt,r=new lt,a=new re,o=new bu({depthPacking:Hc}),l=new Eu,c={},h=e.maxTextureSize,u={[Tn]:Re,[Re]:Tn,[qe]:qe},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new me;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ce(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let f=this.type;this.render=function(R,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=s.getRenderTarget(),_=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),B=s.state;B.setBlending(bn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=f!==un&&this.type===un,X=f===un&&this.type!==un;for(let q=0,W=R.length;q<W;q++){const Z=R[q],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const ct=k.getFrameExtents();if(i.multiply(ct),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ct.x),i.x=r.x*ct.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ct.y),i.y=r.y*ct.y,k.mapSize.y=r.y)),k.map===null||O===!0||X===!0){const Mt=this.type!==un?{minFilter:je,magFilter:je}:{};k.map!==null&&k.map.dispose(),k.map=new kn(i.x,i.y,Mt),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const gt=k.getViewportCount();for(let Mt=0;Mt<gt;Mt++){const kt=k.getViewport(Mt);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),B.viewport(a),k.updateMatrices(Z,Mt),n=k.getFrustum(),x(C,D,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===un&&T(k,D),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,_,P)};function T(R,C){const D=t.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new kn(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(C,null,D,d,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(C,null,D,p,y,null)}function b(R,C,D,M){let _=null;const P=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)_=P;else if(_=D.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=_.uuid,O=C.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let q=X[O];q===void 0&&(q=_.clone(),X[O]=q,C.addEventListener("dispose",L)),_=q}if(_.visible=C.visible,_.wireframe=C.wireframe,M===un?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:u[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const B=s.properties.get(_);B.light=D}return _}function x(R,C,D,M,_){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===un)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const O=t.update(R),X=R.material;if(Array.isArray(X)){const q=O.groups;for(let W=0,Z=q.length;W<Z;W++){const k=q[W],ct=X[k.materialIndex];if(ct&&ct.visible){const gt=b(R,ct,M,_);R.onBeforeShadow(s,R,C,D,O,gt,k),s.renderBufferDirect(D,null,O,gt,R,k),R.onAfterShadow(s,R,C,D,O,gt,k)}}}else if(X.visible){const q=b(R,X,M,_);R.onBeforeShadow(s,R,C,D,O,q,null),s.renderBufferDirect(D,null,O,q,R,null),R.onAfterShadow(s,R,C,D,O,q,null)}}const B=R.children;for(let O=0,X=B.length;O<X;O++)x(B[O],C,D,M,_)}function L(R){R.target.removeEventListener("dispose",L);for(const D in c){const M=c[D],_=R.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const rg={[Lr]:Ir,[Ur]:Or,[Nr]:Br,[mi]:Fr,[Ir]:Lr,[Or]:Ur,[Br]:Nr,[Fr]:mi};function ag(s,t){function e(){let I=!1;const ft=new re;let tt=null;const St=new re(0,0,0,0);return{setMask:function(nt){tt!==nt&&!I&&(s.colorMask(nt,nt,nt,nt),tt=nt)},setLocked:function(nt){I=nt},setClear:function(nt,j,Et,Ht,le){le===!0&&(nt*=Ht,j*=Ht,Et*=Ht),ft.set(nt,j,Et,Ht),St.equals(ft)===!1&&(s.clearColor(nt,j,Et,Ht),St.copy(ft))},reset:function(){I=!1,tt=null,St.set(-1,0,0,0)}}}function n(){let I=!1,ft=!1,tt=null,St=null,nt=null;return{setReversed:function(j){if(ft!==j){const Et=t.get("EXT_clip_control");j?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ft=j;const Ht=nt;nt=null,this.setClear(Ht)}},getReversed:function(){return ft},setTest:function(j){j?mt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(j){tt!==j&&!I&&(s.depthMask(j),tt=j)},setFunc:function(j){if(ft&&(j=rg[j]),St!==j){switch(j){case Lr:s.depthFunc(s.NEVER);break;case Ir:s.depthFunc(s.ALWAYS);break;case Ur:s.depthFunc(s.LESS);break;case mi:s.depthFunc(s.LEQUAL);break;case Nr:s.depthFunc(s.EQUAL);break;case Fr:s.depthFunc(s.GEQUAL);break;case Or:s.depthFunc(s.GREATER);break;case Br:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=j}},setLocked:function(j){I=j},setClear:function(j){nt!==j&&(ft&&(j=1-j),s.clearDepth(j),nt=j)},reset:function(){I=!1,tt=null,St=null,nt=null,ft=!1}}}function i(){let I=!1,ft=null,tt=null,St=null,nt=null,j=null,Et=null,Ht=null,le=null;return{setTest:function(ne){I||(ne?mt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(ne){ft!==ne&&!I&&(s.stencilMask(ne),ft=ne)},setFunc:function(ne,ke,sn){(tt!==ne||St!==ke||nt!==sn)&&(s.stencilFunc(ne,ke,sn),tt=ne,St=ke,nt=sn)},setOp:function(ne,ke,sn){(j!==ne||Et!==ke||Ht!==sn)&&(s.stencilOp(ne,ke,sn),j=ne,Et=ke,Ht=sn)},setLocked:function(ne){I=ne},setClear:function(ne){le!==ne&&(s.clearStencil(ne),le=ne)},reset:function(){I=!1,ft=null,tt=null,St=null,nt=null,j=null,Et=null,Ht=null,le=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,T=null,b=null,x=null,L=null,R=null,C=new $t(0,0,0),D=0,M=!1,_=null,P=null,B=null,O=null,X=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=Z>=2);let ct=null,gt={};const Mt=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),Yt=new re().fromArray(Mt),$=new re().fromArray(kt);function rt(I,ft,tt,St){const nt=new Uint8Array(4),j=s.createTexture();s.bindTexture(I,j),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Et=0;Et<tt;Et++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,nt):s.texImage2D(ft+Et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,nt);return j}const Rt={};Rt[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),mt(s.DEPTH_TEST),a.setFunc(mi),Q(!1),ot(Ya),mt(s.CULL_FACE),E(bn);function mt(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Pt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Vt(I,ft){return u[I]!==ft?(s.bindFramebuffer(I,ft),u[I]=ft,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function Lt(I,ft){let tt=p,St=!1;if(I){tt=d.get(ft),tt===void 0&&(tt=[],d.set(ft,tt));const nt=I.textures;if(tt.length!==nt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let j=0,Et=nt.length;j<Et;j++)tt[j]=s.COLOR_ATTACHMENT0+j;tt.length=nt.length,St=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,St=!0);St&&s.drawBuffers(tt)}function oe(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Jt={[Fn]:s.FUNC_ADD,[dc]:s.FUNC_SUBTRACT,[fc]:s.FUNC_REVERSE_SUBTRACT};Jt[pc]=s.MIN,Jt[mc]=s.MAX;const Gt={[gc]:s.ZERO,[vc]:s.ONE,[_c]:s.SRC_COLOR,[Pr]:s.SRC_ALPHA,[Ec]:s.SRC_ALPHA_SATURATE,[Mc]:s.DST_COLOR,[yc]:s.DST_ALPHA,[xc]:s.ONE_MINUS_SRC_COLOR,[Dr]:s.ONE_MINUS_SRC_ALPHA,[bc]:s.ONE_MINUS_DST_COLOR,[Sc]:s.ONE_MINUS_DST_ALPHA,[Tc]:s.CONSTANT_COLOR,[wc]:s.ONE_MINUS_CONSTANT_COLOR,[Ac]:s.CONSTANT_ALPHA,[Cc]:s.ONE_MINUS_CONSTANT_ALPHA};function E(I,ft,tt,St,nt,j,Et,Ht,le,ne){if(I===bn){y===!0&&(Pt(s.BLEND),y=!1);return}if(y===!1&&(mt(s.BLEND),y=!0),I!==uc){if(I!==m||ne!==M){if((f!==Fn||x!==Fn)&&(s.blendEquation(s.FUNC_ADD),f=Fn,x=Fn),ne)switch(I){case di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ja:s.blendFunc(s.ONE,s.ONE);break;case Za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ja:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ja:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ja:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,b=null,L=null,R=null,C.set(0,0,0),D=0,m=I,M=ne}return}nt=nt||ft,j=j||tt,Et=Et||St,(ft!==f||nt!==x)&&(s.blendEquationSeparate(Jt[ft],Jt[nt]),f=ft,x=nt),(tt!==T||St!==b||j!==L||Et!==R)&&(s.blendFuncSeparate(Gt[tt],Gt[St],Gt[j],Gt[Et]),T=tt,b=St,L=j,R=Et),(Ht.equals(C)===!1||le!==D)&&(s.blendColor(Ht.r,Ht.g,Ht.b,le),C.copy(Ht),D=le),m=I,M=!1}function at(I,ft){I.side===qe?Pt(s.CULL_FACE):mt(s.CULL_FACE);let tt=I.side===Re;ft&&(tt=!tt),Q(tt),I.blending===di&&I.transparent===!1?E(bn):E(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const St=I.stencilWrite;o.setTest(St),St&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Q(I){_!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),_=I)}function ot(I){I!==lc?(mt(s.CULL_FACE),I!==P&&(I===Ya?s.cullFace(s.BACK):I===cc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),P=I}function Y(I){I!==B&&(W&&s.lineWidth(I),B=I)}function vt(I,ft,tt){I?(mt(s.POLYGON_OFFSET_FILL),(O!==ft||X!==tt)&&(s.polygonOffset(ft,tt),O=ft,X=tt)):Pt(s.POLYGON_OFFSET_FILL)}function et(I){I?mt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function _t(I){I===void 0&&(I=s.TEXTURE0+q-1),ct!==I&&(s.activeTexture(I),ct=I)}function zt(I,ft,tt){tt===void 0&&(ct===null?tt=s.TEXTURE0+q-1:tt=ct);let St=gt[tt];St===void 0&&(St={type:void 0,texture:void 0},gt[tt]=St),(St.type!==I||St.texture!==ft)&&(ct!==tt&&(s.activeTexture(tt),ct=tt),s.bindTexture(I,ft||Rt[I]),St.type=I,St.texture=ft)}function w(){const I=gt[ct];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(I){Yt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Yt.copy(I))}function Nt(I){$.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Ut(I,ft){let tt=c.get(ft);tt===void 0&&(tt=new WeakMap,c.set(ft,tt));let St=tt.get(I);St===void 0&&(St=s.getUniformBlockIndex(ft,I.name),tt.set(I,St))}function ut(I,ft){const St=c.get(ft).get(I);l.get(ft)!==St&&(s.uniformBlockBinding(ft,St,I.__bindingPointIndex),l.set(ft,St))}function Bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ct=null,gt={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,T=null,b=null,x=null,L=null,R=null,C=new $t(0,0,0),D=0,M=!1,_=null,P=null,B=null,O=null,X=null,Yt.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:mt,disable:Pt,bindFramebuffer:Vt,drawBuffers:Lt,useProgram:oe,setBlending:E,setMaterial:at,setFlipSided:Q,setCullFace:ot,setLineWidth:Y,setPolygonOffset:vt,setScissorTest:et,activeTexture:_t,bindTexture:zt,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:At,texImage3D:K,updateUBOMapping:Ut,uniformBlockBinding:ut,texStorage2D:ht,texStorage3D:bt,texSubImage2D:V,texSubImage3D:J,compressedTexSubImage2D:G,compressedTexSubImage3D:wt,scissor:xt,viewport:Nt,reset:Bt}}function og(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):Os("canvas")}function y(w,v,F){let V=1;const J=zt(w);if((J.width>F||J.height>F)&&(V=F/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const G=Math.floor(V*J.width),wt=Math.floor(V*J.height);u===void 0&&(u=g(G,wt));const ht=v?g(G,wt):u;return ht.width=G,ht.height=wt,ht.getContext("2d").drawImage(w,0,0,G,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+G+"x"+wt+")."),ht}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){s.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(w,v,F,V,J=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let G=v;if(v===s.RED&&(F===s.FLOAT&&(G=s.R32F),F===s.HALF_FLOAT&&(G=s.R16F),F===s.UNSIGNED_BYTE&&(G=s.R8)),v===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(G=s.R8UI),F===s.UNSIGNED_SHORT&&(G=s.R16UI),F===s.UNSIGNED_INT&&(G=s.R32UI),F===s.BYTE&&(G=s.R8I),F===s.SHORT&&(G=s.R16I),F===s.INT&&(G=s.R32I)),v===s.RG&&(F===s.FLOAT&&(G=s.RG32F),F===s.HALF_FLOAT&&(G=s.RG16F),F===s.UNSIGNED_BYTE&&(G=s.RG8)),v===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(G=s.RG8UI),F===s.UNSIGNED_SHORT&&(G=s.RG16UI),F===s.UNSIGNED_INT&&(G=s.RG32UI),F===s.BYTE&&(G=s.RG8I),F===s.SHORT&&(G=s.RG16I),F===s.INT&&(G=s.RG32I)),v===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(G=s.RGB8UI),F===s.UNSIGNED_SHORT&&(G=s.RGB16UI),F===s.UNSIGNED_INT&&(G=s.RGB32UI),F===s.BYTE&&(G=s.RGB8I),F===s.SHORT&&(G=s.RGB16I),F===s.INT&&(G=s.RGB32I)),v===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),F===s.UNSIGNED_INT&&(G=s.RGBA32UI),F===s.BYTE&&(G=s.RGBA8I),F===s.SHORT&&(G=s.RGBA16I),F===s.INT&&(G=s.RGBA32I)),v===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),v===s.RGBA){const wt=J?Ns:te.getTransfer(V);F===s.FLOAT&&(G=s.RGBA32F),F===s.HALF_FLOAT&&(G=s.RGBA16F),F===s.UNSIGNED_BYTE&&(G=wt===se?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function x(w,v){let F;return w?v===null||v===Hn||v===zi?F=s.DEPTH24_STENCIL8:v===dn?F=s.DEPTH32F_STENCIL8:v===Bi&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hn||v===zi?F=s.DEPTH_COMPONENT24:v===dn?F=s.DEPTH_COMPONENT32F:v===Bi&&(F=s.DEPTH_COMPONENT16),F}function L(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==je&&w.minFilter!==Qe?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function R(w){const v=w.target;v.removeEventListener("dispose",R),D(v),v.isVideoTexture&&h.delete(v)}function C(w){const v=w.target;v.removeEventListener("dispose",C),_(v)}function D(w){const v=n.get(w);if(v.__webglInit===void 0)return;const F=w.source,V=d.get(F);if(V){const J=V[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(w),Object.keys(V).length===0&&d.delete(F)}n.remove(w)}function M(w){const v=n.get(w);s.deleteTexture(v.__webglTexture);const F=w.source,V=d.get(F);delete V[v.__cacheKey],a.memory.textures--}function _(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let J=0;J<v.__webglFramebuffer[V].length;J++)s.deleteFramebuffer(v.__webglFramebuffer[V][J]);else s.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)s.deleteFramebuffer(v.__webglFramebuffer[V]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=w.textures;for(let V=0,J=F.length;V<J;V++){const G=n.get(F[V]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(F[V])}n.remove(w)}let P=0;function B(){P=0}function O(){const w=P;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),P+=1,w}function X(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function q(w,v){const F=n.get(w);if(w.isVideoTexture&&et(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const V=w.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(F,w,v);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+v)}function W(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Rt(F,w,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+v)}function Z(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Rt(F,w,v);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+v)}function k(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){mt(F,w,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+v)}const ct={[kr]:s.REPEAT,[Bn]:s.CLAMP_TO_EDGE,[Vr]:s.MIRRORED_REPEAT},gt={[je]:s.NEAREST,[Bc]:s.NEAREST_MIPMAP_NEAREST,[Qi]:s.NEAREST_MIPMAP_LINEAR,[Qe]:s.LINEAR,[Ys]:s.LINEAR_MIPMAP_NEAREST,[zn]:s.LINEAR_MIPMAP_LINEAR},Mt={[Vc]:s.NEVER,[Yc]:s.ALWAYS,[Gc]:s.LESS,[wl]:s.LEQUAL,[Wc]:s.EQUAL,[$c]:s.GEQUAL,[Xc]:s.GREATER,[qc]:s.NOTEQUAL};function kt(w,v){if(v.type===dn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Qe||v.magFilter===Ys||v.magFilter===Qi||v.magFilter===zn||v.minFilter===Qe||v.minFilter===Ys||v.minFilter===Qi||v.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,ct[v.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,ct[v.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,ct[v.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,gt[v.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,gt[v.minFilter]),v.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==Qi&&v.minFilter!==zn||v.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Yt(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",R));const V=v.source;let J=d.get(V);J===void 0&&(J={},d.set(V,J));const G=X(v);if(G!==w.__cacheKey){J[G]===void 0&&(J[G]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[G].usedTimes++;const wt=J[w.__cacheKey];wt!==void 0&&(J[w.__cacheKey].usedTimes--,wt.usedTimes===0&&M(v)),w.__cacheKey=G,w.__webglTexture=J[G].texture}return F}function $(w,v,F){return Math.floor(Math.floor(w/F)/v)}function rt(w,v,F,V){const G=w.updateRanges;if(G.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,F,V,v.data);else{G.sort((K,xt)=>K.start-xt.start);let wt=0;for(let K=1;K<G.length;K++){const xt=G[wt],Nt=G[K],Ut=xt.start+xt.count,ut=$(Nt.start,v.width,4),Bt=$(xt.start,v.width,4);Nt.start<=Ut+1&&ut===Bt&&$(Nt.start+Nt.count-1,v.width,4)===ut?xt.count=Math.max(xt.count,Nt.start+Nt.count-xt.start):(++wt,G[wt]=Nt)}G.length=wt+1;const ht=s.getParameter(s.UNPACK_ROW_LENGTH),bt=s.getParameter(s.UNPACK_SKIP_PIXELS),At=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let K=0,xt=G.length;K<xt;K++){const Nt=G[K],Ut=Math.floor(Nt.start/4),ut=Math.ceil(Nt.count/4),Bt=Ut%v.width,I=Math.floor(Ut/v.width),ft=ut,tt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Bt),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,Bt,I,ft,tt,F,V,v.data)}w.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ht),s.pixelStorei(s.UNPACK_SKIP_PIXELS,bt),s.pixelStorei(s.UNPACK_SKIP_ROWS,At)}}function Rt(w,v,F){let V=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=s.TEXTURE_3D);const J=Yt(w,v),G=v.source;e.bindTexture(V,w.__webglTexture,s.TEXTURE0+F);const wt=n.get(G);if(G.version!==wt.__version||J===!0){e.activeTexture(s.TEXTURE0+F);const ht=te.getPrimaries(te.workingColorSpace),bt=v.colorSpace===Mn?null:te.getPrimaries(v.colorSpace),At=v.colorSpace===Mn||ht===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let K=y(v.image,!1,i.maxTextureSize);K=_t(v,K);const xt=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type);let Ut=b(v.internalFormat,xt,Nt,v.colorSpace,v.isVideoTexture);kt(V,v);let ut;const Bt=v.mipmaps,I=v.isVideoTexture!==!0,ft=wt.__version===void 0||J===!0,tt=G.dataReady,St=L(v,K);if(v.isDepthTexture)Ut=x(v.format===ki,v.type),ft&&(I?e.texStorage2D(s.TEXTURE_2D,1,Ut,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,Ut,K.width,K.height,0,xt,Nt,null));else if(v.isDataTexture)if(Bt.length>0){I&&ft&&e.texStorage2D(s.TEXTURE_2D,St,Ut,Bt[0].width,Bt[0].height);for(let nt=0,j=Bt.length;nt<j;nt++)ut=Bt[nt],I?tt&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,ut.width,ut.height,xt,Nt,ut.data):e.texImage2D(s.TEXTURE_2D,nt,Ut,ut.width,ut.height,0,xt,Nt,ut.data);v.generateMipmaps=!1}else I?(ft&&e.texStorage2D(s.TEXTURE_2D,St,Ut,K.width,K.height),tt&&rt(v,K,xt,Nt)):e.texImage2D(s.TEXTURE_2D,0,Ut,K.width,K.height,0,xt,Nt,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Ut,Bt[0].width,Bt[0].height,K.depth);for(let nt=0,j=Bt.length;nt<j;nt++)if(ut=Bt[nt],v.format!==Ye)if(xt!==null)if(I){if(tt)if(v.layerUpdates.size>0){const Et=Bo(ut.width,ut.height,v.format,v.type);for(const Ht of v.layerUpdates){const le=ut.data.subarray(Ht*Et/ut.data.BYTES_PER_ELEMENT,(Ht+1)*Et/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,Ht,ut.width,ut.height,1,xt,le)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,K.depth,xt,ut.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,Ut,ut.width,ut.height,K.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?tt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,K.depth,xt,Nt,ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,Ut,ut.width,ut.height,K.depth,0,xt,Nt,ut.data)}else{I&&ft&&e.texStorage2D(s.TEXTURE_2D,St,Ut,Bt[0].width,Bt[0].height);for(let nt=0,j=Bt.length;nt<j;nt++)ut=Bt[nt],v.format!==Ye?xt!==null?I?tt&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,ut.width,ut.height,xt,ut.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,Ut,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?tt&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,ut.width,ut.height,xt,Nt,ut.data):e.texImage2D(s.TEXTURE_2D,nt,Ut,ut.width,ut.height,0,xt,Nt,ut.data)}else if(v.isDataArrayTexture)if(I){if(ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Ut,K.width,K.height,K.depth),tt)if(v.layerUpdates.size>0){const nt=Bo(K.width,K.height,v.format,v.type);for(const j of v.layerUpdates){const Et=K.data.subarray(j*nt/K.data.BYTES_PER_ELEMENT,(j+1)*nt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,K.width,K.height,1,xt,Nt,Et)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,xt,Nt,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,K.width,K.height,K.depth,0,xt,Nt,K.data);else if(v.isData3DTexture)I?(ft&&e.texStorage3D(s.TEXTURE_3D,St,Ut,K.width,K.height,K.depth),tt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,xt,Nt,K.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,K.width,K.height,K.depth,0,xt,Nt,K.data);else if(v.isFramebufferTexture){if(ft)if(I)e.texStorage2D(s.TEXTURE_2D,St,Ut,K.width,K.height);else{let nt=K.width,j=K.height;for(let Et=0;Et<St;Et++)e.texImage2D(s.TEXTURE_2D,Et,Ut,nt,j,0,xt,Nt,null),nt>>=1,j>>=1}}else if(Bt.length>0){if(I&&ft){const nt=zt(Bt[0]);e.texStorage2D(s.TEXTURE_2D,St,Ut,nt.width,nt.height)}for(let nt=0,j=Bt.length;nt<j;nt++)ut=Bt[nt],I?tt&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,xt,Nt,ut):e.texImage2D(s.TEXTURE_2D,nt,Ut,xt,Nt,ut);v.generateMipmaps=!1}else if(I){if(ft){const nt=zt(K);e.texStorage2D(s.TEXTURE_2D,St,Ut,nt.width,nt.height)}tt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Nt,K)}else e.texImage2D(s.TEXTURE_2D,0,Ut,xt,Nt,K);m(v)&&f(V),wt.__version=G.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function mt(w,v,F){if(v.image.length!==6)return;const V=Yt(w,v),J=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+F);const G=n.get(J);if(J.version!==G.__version||V===!0){e.activeTexture(s.TEXTURE0+F);const wt=te.getPrimaries(te.workingColorSpace),ht=v.colorSpace===Mn?null:te.getPrimaries(v.colorSpace),bt=v.colorSpace===Mn||wt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const At=v.isCompressedTexture||v.image[0].isCompressedTexture,K=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let j=0;j<6;j++)!At&&!K?xt[j]=y(v.image[j],!0,i.maxCubemapSize):xt[j]=K?v.image[j].image:v.image[j],xt[j]=_t(v,xt[j]);const Nt=xt[0],Ut=r.convert(v.format,v.colorSpace),ut=r.convert(v.type),Bt=b(v.internalFormat,Ut,ut,v.colorSpace),I=v.isVideoTexture!==!0,ft=G.__version===void 0||V===!0,tt=J.dataReady;let St=L(v,Nt);kt(s.TEXTURE_CUBE_MAP,v);let nt;if(At){I&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,St,Bt,Nt.width,Nt.height);for(let j=0;j<6;j++){nt=xt[j].mipmaps;for(let Et=0;Et<nt.length;Et++){const Ht=nt[Et];v.format!==Ye?Ut!==null?I?tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et,0,0,Ht.width,Ht.height,Ut,Ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et,Bt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et,0,0,Ht.width,Ht.height,Ut,ut,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et,Bt,Ht.width,Ht.height,0,Ut,ut,Ht.data)}}}else{if(nt=v.mipmaps,I&&ft){nt.length>0&&St++;const j=zt(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,St,Bt,j.width,j.height)}for(let j=0;j<6;j++)if(K){I?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt[j].width,xt[j].height,Ut,ut,xt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,xt[j].width,xt[j].height,0,Ut,ut,xt[j].data);for(let Et=0;Et<nt.length;Et++){const le=nt[Et].image[j].image;I?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et+1,0,0,le.width,le.height,Ut,ut,le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et+1,Bt,le.width,le.height,0,Ut,ut,le.data)}}else{I?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ut,ut,xt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,Ut,ut,xt[j]);for(let Et=0;Et<nt.length;Et++){const Ht=nt[Et];I?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et+1,0,0,Ut,ut,Ht.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et+1,Bt,Ut,ut,Ht.image[j])}}}m(v)&&f(s.TEXTURE_CUBE_MAP),G.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Pt(w,v,F,V,J,G){const wt=r.convert(F.format,F.colorSpace),ht=r.convert(F.type),bt=b(F.internalFormat,wt,ht,F.colorSpace),At=n.get(v),K=n.get(F);if(K.__renderTarget=v,!At.__hasExternalTextures){const xt=Math.max(1,v.width>>G),Nt=Math.max(1,v.height>>G);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,G,bt,xt,Nt,v.depth,0,wt,ht,null):e.texImage2D(J,G,bt,xt,Nt,0,wt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),vt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,J,K.__webglTexture,0,Y(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,J,K.__webglTexture,G),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(w,v,F){if(s.bindRenderbuffer(s.RENDERBUFFER,w),v.depthBuffer){const V=v.depthTexture,J=V&&V.isDepthTexture?V.type:null,G=x(v.stencilBuffer,J),wt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=Y(v);vt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,G,v.width,v.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,G,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,G,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,w)}else{const V=v.textures;for(let J=0;J<V.length;J++){const G=V[J],wt=r.convert(G.format,G.colorSpace),ht=r.convert(G.type),bt=b(G.internalFormat,wt,ht,G.colorSpace),At=Y(v);F&&vt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,bt,v.width,v.height):vt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,bt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,bt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(v.depthTexture);V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const J=V.__webglTexture,G=Y(v);if(v.depthTexture.format===Hi)vt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(v.depthTexture.format===ki)vt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function oe(w){const v=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const V=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=V}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const V=w.texture.mipmaps;V&&V.length>0?Lt(v.__webglFramebuffer[0],w):Lt(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=s.createRenderbuffer(),Vt(v.__webglDepthbuffer[V],w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,G)}}else{const V=w.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Vt(v.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,G)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(w,v,F){const V=n.get(w);v!==void 0&&Pt(V.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&oe(w)}function Gt(w){const v=w.texture,F=n.get(w),V=n.get(v);w.addEventListener("dispose",C);const J=w.textures,G=w.isWebGLCubeRenderTarget===!0,wt=J.length>1;if(wt||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=v.version,a.memory.textures++),G){F.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ht]=[];for(let bt=0;bt<v.mipmaps.length;bt++)F.__webglFramebuffer[ht][bt]=s.createFramebuffer()}else F.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)F.__webglFramebuffer[ht]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ht=0,bt=J.length;ht<bt;ht++){const At=n.get(J[ht]);At.__webglTexture===void 0&&(At.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&vt(w)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ht=0;ht<J.length;ht++){const bt=J[ht];F.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ht]);const At=r.convert(bt.format,bt.colorSpace),K=r.convert(bt.type),xt=b(bt.internalFormat,At,K,bt.colorSpace,w.isXRRenderTarget===!0),Nt=Y(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,xt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,F.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),kt(s.TEXTURE_CUBE_MAP,v);for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0)for(let bt=0;bt<v.mipmaps.length;bt++)Pt(F.__webglFramebuffer[ht][bt],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,bt);else Pt(F.__webglFramebuffer[ht],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(v)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,bt=J.length;ht<bt;ht++){const At=J[ht],K=n.get(At);e.bindTexture(s.TEXTURE_2D,K.__webglTexture),kt(s.TEXTURE_2D,At),Pt(F.__webglFramebuffer,w,At,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),m(At)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,V.__webglTexture),kt(ht,v),v.mipmaps&&v.mipmaps.length>0)for(let bt=0;bt<v.mipmaps.length;bt++)Pt(F.__webglFramebuffer[bt],w,v,s.COLOR_ATTACHMENT0,ht,bt);else Pt(F.__webglFramebuffer,w,v,s.COLOR_ATTACHMENT0,ht,0);m(v)&&f(ht),e.unbindTexture()}w.depthBuffer&&oe(w)}function E(w){const v=w.textures;for(let F=0,V=v.length;F<V;F++){const J=v[F];if(m(J)){const G=T(w),wt=n.get(J).__webglTexture;e.bindTexture(G,wt),f(G),e.unbindTexture()}}}const at=[],Q=[];function ot(w){if(w.samples>0){if(vt(w)===!1){const v=w.textures,F=w.width,V=w.height;let J=s.COLOR_BUFFER_BIT;const G=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(w),ht=v.length>1;if(ht)for(let At=0;At<v.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const bt=w.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<v.length;At++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const K=n.get(v[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,F,V,0,0,F,V,J,s.NEAREST),l===!0&&(at.length=0,Q.length=0,at.push(s.COLOR_ATTACHMENT0+At),w.depthBuffer&&w.resolveDepthBuffer===!1&&(at.push(G),Q.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let At=0;At<v.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const K=n.get(v[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,K,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Y(w){return Math.min(i.maxSamples,w.samples)}function vt(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function et(w){const v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function _t(w,v){const F=w.colorSpace,V=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==_i&&F!==Mn&&(te.getTransfer(F)===se?(V!==Ye||J!==tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function zt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=Jt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=E,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=vt}function lg(s,t){function e(n,i=Mn){let r;const a=te.getTransfer(i);if(n===tn)return s.UNSIGNED_BYTE;if(n===ba)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ea)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===vl)return s.BYTE;if(n===_l)return s.SHORT;if(n===Bi)return s.UNSIGNED_SHORT;if(n===Ma)return s.INT;if(n===Hn)return s.UNSIGNED_INT;if(n===dn)return s.FLOAT;if(n===$i)return s.HALF_FLOAT;if(n===yl)return s.ALPHA;if(n===Sl)return s.RGB;if(n===Ye)return s.RGBA;if(n===Hi)return s.DEPTH_COMPONENT;if(n===ki)return s.DEPTH_STENCIL;if(n===Ml)return s.RED;if(n===Ta)return s.RED_INTEGER;if(n===bl)return s.RG;if(n===wa)return s.RG_INTEGER;if(n===Aa)return s.RGBA_INTEGER;if(n===Rs||n===Ps||n===Ds||n===Ls)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gr||n===Wr||n===Xr||n===qr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$r||n===Yr||n===jr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$r||n===Yr)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zr||n===Jr||n===Kr||n===Qr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ta)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ea)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===na)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ra)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===la)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Is||n===ha||n===ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Is)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===El||n===da||n===fa||n===pa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Is)return r.COMPRESSED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Pe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wn({vertexShader:cg,fragmentShader:hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new Ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dg extends Si{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const y=new ug,m=e.getContextAttributes();let f=null,T=null;const b=[],x=[],L=new lt;let R=null;const C=new Ue;C.viewport=new re;const D=new Ue;D.viewport=new re;const M=[C,D],_=new Ru;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=b[$];return rt===void 0&&(rt=new mr,b[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=b[$];return rt===void 0&&(rt=new mr,b[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=b[$];return rt===void 0&&(rt=new mr,b[$]=rt),rt.getHandSpace()};function O($){const rt=x.indexOf($.inputSource);if(rt===-1)return;const Rt=b[rt];Rt!==void 0&&(Rt.update($.inputSource,$.frame,c||a),Rt.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",q);for(let $=0;$<b.length;$++){const rt=x[$];rt!==null&&(x[$]=null,b[$].disconnect(rt))}P=null,B=null,y.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,T=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",X),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,mt=null,Pt=null;m.depth&&(Pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=m.stencil?ki:Hi,mt=m.stencil?zi:Hn);const Vt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Vt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new kn(d.textureWidth,d.textureHeight,{format:Ye,type:tn,depthTexture:new Fl(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,Rt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new kn(p.framebufferWidth,p.framebufferHeight,{format:Ye,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q($){for(let rt=0;rt<$.removed.length;rt++){const Rt=$.removed[rt],mt=x.indexOf(Rt);mt>=0&&(x[mt]=null,b[mt].disconnect(Rt))}for(let rt=0;rt<$.added.length;rt++){const Rt=$.added[rt];let mt=x.indexOf(Rt);if(mt===-1){for(let Vt=0;Vt<b.length;Vt++)if(Vt>=x.length){x.push(Rt),mt=Vt;break}else if(x[Vt]===null){x[Vt]=Rt,mt=Vt;break}if(mt===-1)break}const Pt=b[mt];Pt&&Pt.connect(Rt)}}const W=new A,Z=new A;function k($,rt,Rt){W.setFromMatrixPosition(rt.matrixWorld),Z.setFromMatrixPosition(Rt.matrixWorld);const mt=W.distanceTo(Z),Pt=rt.projectionMatrix.elements,Vt=Rt.projectionMatrix.elements,Lt=Pt[14]/(Pt[10]-1),oe=Pt[14]/(Pt[10]+1),Jt=(Pt[9]+1)/Pt[5],Gt=(Pt[9]-1)/Pt[5],E=(Pt[8]-1)/Pt[0],at=(Vt[8]+1)/Vt[0],Q=Lt*E,ot=Lt*at,Y=mt/(-E+at),vt=Y*-E;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(vt),$.translateZ(Y),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pt[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const et=Lt+Y,_t=oe+Y,zt=Q-vt,w=ot+(mt-vt),v=Jt*oe/_t*et,F=Gt*oe/_t*et;$.projectionMatrix.makePerspective(zt,w,v,F,et,_t),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ct($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let rt=$.near,Rt=$.far;y.texture!==null&&(y.depthNear>0&&(rt=y.depthNear),y.depthFar>0&&(Rt=y.depthFar)),_.near=D.near=C.near=rt,_.far=D.far=C.far=Rt,(P!==_.near||B!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,B=_.far),C.layers.mask=$.layers.mask|2,D.layers.mask=$.layers.mask|4,_.layers.mask=C.layers.mask|D.layers.mask;const mt=$.parent,Pt=_.cameras;ct(_,mt);for(let Vt=0;Vt<Pt.length;Vt++)ct(Pt[Vt],mt);Pt.length===2?k(_,C,D):_.projectionMatrix.copy(C.projectionMatrix),gt($,_,mt)};function gt($,rt,Rt){Rt===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(Rt.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vi*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let Mt=null;function kt($,rt){if(h=rt.getViewerPose(c||a),g=rt,h!==null){const Rt=h.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let mt=!1;Rt.length!==_.cameras.length&&(_.cameras.length=0,mt=!0);for(let Lt=0;Lt<Rt.length;Lt++){const oe=Rt[Lt];let Jt=null;if(p!==null)Jt=p.getViewport(oe);else{const E=u.getViewSubImage(d,oe);Jt=E.viewport,Lt===0&&(t.setRenderTargetTextures(T,E.colorTexture,E.depthStencilTexture),t.setRenderTarget(T))}let Gt=M[Lt];Gt===void 0&&(Gt=new Ue,Gt.layers.enable(Lt),Gt.viewport=new re,M[Lt]=Gt),Gt.matrix.fromArray(oe.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(oe.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Lt===0&&(_.matrix.copy(Gt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),mt===!0&&_.cameras.push(Gt)}const Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Lt=u.getDepthInformation(Rt[0]);Lt&&Lt.isValid&&Lt.texture&&y.init(t,Lt,i.renderState)}}for(let Rt=0;Rt<b.length;Rt++){const mt=x[Rt],Pt=b[Rt];mt!==null&&Pt!==void 0&&Pt.update(mt,rt,c||a)}Mt&&Mt($,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const Yt=new Yl;Yt.setAnimationLoop(kt),this.setAnimationLoop=function($){Mt=$},this.dispose=function(){}}}const Un=new en,fg=new ae;function pg(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ll(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,T,b,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Re&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Re&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f),b=T.envMap,x=T.envMapRotation;b&&(m.envMap.value=b,Un.copy(x),Un.x*=-1,Un.y*=-1,Un.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),m.envMapRotation.value.setFromMatrix4(fg.makeRotationFromEuler(Un)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mg(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const x=b.program;n.uniformBlockBinding(T,x)}function c(T,b){let x=i[T.id];x===void 0&&(g(T),x=h(T),i[T.id]=x,T.addEventListener("dispose",m));const L=b.program;n.updateUBOMapping(T,L);const R=t.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function h(T){const b=u();T.__bindingPointIndex=b;const x=s.createBuffer(),L=T.__size,R=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,L,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,x),x}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const b=i[T.id],x=T.uniforms,L=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let R=0,C=x.length;R<C;R++){const D=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,_=D.length;M<_;M++){const P=D[M];if(p(P,R,M,L)===!0){const B=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let q=0;q<O.length;q++){const W=O[q],Z=y(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,B+X,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,b,x,L){const R=T.value,C=b+"_"+x;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{const D=L[C];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return L[C]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(T){const b=T.uniforms;let x=0;const L=16;for(let C=0,D=b.length;C<D;C++){const M=Array.isArray(b[C])?b[C]:[b[C]];for(let _=0,P=M.length;_<P;_++){const B=M[_],O=Array.isArray(B.value)?B.value:[B.value];for(let X=0,q=O.length;X<q;X++){const W=O[X],Z=y(W),k=x%L,ct=k%Z.boundary,gt=k+ct;x+=ct,gt!==0&&L-gt<Z.storage&&(x+=L-gt),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=Z.storage}}}const R=x%L;return R>0&&(x+=L-R),T.__size=x,T.__cache={},this}function y(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function f(){for(const T in i)s.deleteBuffer(i[T]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class gg{constructor(t={}){const{canvas:e=uh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,f=null;const T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let L=!1;this._outputColorSpace=ze;let R=0,C=0,D=null,M=-1,_=null;const P=new re,B=new re;let O=null;const X=new $t(0);let q=0,W=e.width,Z=e.height,k=1,ct=null,gt=null;const Mt=new re(0,0,W,Z),kt=new re(0,0,W,Z);let Yt=!1;const $=new Da;let rt=!1,Rt=!1;const mt=new ae,Pt=new ae,Vt=new A,Lt=new re,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function Gt(){return D===null?k:1}let E=n;function at(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sa}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",j,!1),E===null){const U="webgl2";if(E=at(U,S),E===null)throw at(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Q,ot,Y,vt,et,_t,zt,w,v,F,V,J,G,wt,ht,bt,At,K,xt,Nt,Ut,ut,Bt,I;function ft(){Q=new wp(E),Q.init(),ut=new lg(E,Q),ot=new xp(E,Q,t,ut),Y=new ag(E,Q),ot.reverseDepthBuffer&&d&&Y.buffers.depth.setReversed(!0),vt=new Rp(E),et=new $m,_t=new og(E,Q,Y,et,ot,ut,vt),zt=new Sp(x),w=new Tp(x),v=new Uu(E),Bt=new vp(E,v),F=new Ap(E,v,vt,Bt),V=new Dp(E,F,v,vt),xt=new Pp(E,ot,_t),bt=new yp(et),J=new qm(x,zt,w,Q,ot,Bt,bt),G=new pg(x,et),wt=new jm,ht=new eg(Q),K=new gp(x,zt,w,Y,V,p,l),At=new sg(x,V,ot),I=new mg(E,vt,ot,Y),Nt=new _p(E,Q,vt),Ut=new Cp(E,Q,vt),vt.programs=J.programs,x.capabilities=ot,x.extensions=Q,x.properties=et,x.renderLists=wt,x.shadowMap=At,x.state=Y,x.info=vt}ft();const tt=new dg(x,E);this.xr=tt,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const S=Q.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Q.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(W,Z,!1))},this.getSize=function(S){return S.set(W,Z)},this.setSize=function(S,U,z=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,Z=U,e.width=Math.floor(S*k),e.height=Math.floor(U*k),z===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(W*k,Z*k).floor()},this.setDrawingBufferSize=function(S,U,z){W=S,Z=U,k=z,e.width=Math.floor(S*z),e.height=Math.floor(U*z),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(Mt)},this.setViewport=function(S,U,z,H){S.isVector4?Mt.set(S.x,S.y,S.z,S.w):Mt.set(S,U,z,H),Y.viewport(P.copy(Mt).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(kt)},this.setScissor=function(S,U,z,H){S.isVector4?kt.set(S.x,S.y,S.z,S.w):kt.set(S,U,z,H),Y.scissor(B.copy(kt).multiplyScalar(k).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(S){Y.setScissorTest(Yt=S)},this.setOpaqueSort=function(S){ct=S},this.setTransparentSort=function(S){gt=S},this.getClearColor=function(S){return S.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,z=!0){let H=0;if(S){let N=!1;if(D!==null){const it=D.texture.format;N=it===Aa||it===wa||it===Ta}if(N){const it=D.texture.type,pt=it===tn||it===Hn||it===Bi||it===zi||it===ba||it===Ea,Tt=K.getClearColor(),yt=K.getClearAlpha(),Ft=Tt.r,Ot=Tt.g,Dt=Tt.b;pt?(g[0]=Ft,g[1]=Ot,g[2]=Dt,g[3]=yt,E.clearBufferuiv(E.COLOR,0,g)):(y[0]=Ft,y[1]=Ot,y[2]=Dt,y[3]=yt,E.clearBufferiv(E.COLOR,0,y))}else H|=E.COLOR_BUFFER_BIT}U&&(H|=E.DEPTH_BUFFER_BIT),z&&(H|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",j,!1),K.dispose(),wt.dispose(),ht.dispose(),et.dispose(),zt.dispose(),w.dispose(),V.dispose(),Bt.dispose(),I.dispose(),J.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",ka),tt.removeEventListener("sessionend",Va),An.stop()};function St(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=vt.autoReset,U=At.enabled,z=At.autoUpdate,H=At.needsUpdate,N=At.type;ft(),vt.autoReset=S,At.enabled=U,At.autoUpdate=z,At.needsUpdate=H,At.type=N}function j(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Et(S){const U=S.target;U.removeEventListener("dispose",Et),Ht(U)}function Ht(S){le(S),et.remove(S)}function le(S){const U=et.get(S).programs;U!==void 0&&(U.forEach(function(z){J.releaseProgram(z)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,z,H,N,it){U===null&&(U=oe);const pt=N.isMesh&&N.matrixWorld.determinant()<0,Tt=tc(S,U,z,H,N);Y.setMaterial(H,pt);let yt=z.index,Ft=1;if(H.wireframe===!0){if(yt=F.getWireframeAttribute(z),yt===void 0)return;Ft=2}const Ot=z.drawRange,Dt=z.attributes.position;let jt=Ot.start*Ft,ie=(Ot.start+Ot.count)*Ft;it!==null&&(jt=Math.max(jt,it.start*Ft),ie=Math.min(ie,(it.start+it.count)*Ft)),yt!==null?(jt=Math.max(jt,0),ie=Math.min(ie,yt.count)):Dt!=null&&(jt=Math.max(jt,0),ie=Math.min(ie,Dt.count));const de=ie-jt;if(de<0||de===1/0)return;Bt.setup(N,H,Tt,z,yt);let pe,Kt=Nt;if(yt!==null&&(pe=v.get(yt),Kt=Ut,Kt.setIndex(pe)),N.isMesh)H.wireframe===!0?(Y.setLineWidth(H.wireframeLinewidth*Gt()),Kt.setMode(E.LINES)):Kt.setMode(E.TRIANGLES);else if(N.isLine){let It=H.linewidth;It===void 0&&(It=1),Y.setLineWidth(It*Gt()),N.isLineSegments?Kt.setMode(E.LINES):N.isLineLoop?Kt.setMode(E.LINE_LOOP):Kt.setMode(E.LINE_STRIP)}else N.isPoints?Kt.setMode(E.POINTS):N.isSprite&&Kt.setMode(E.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)fi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Kt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))Kt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const It=N._multiDrawStarts,Se=N._multiDrawCounts,ee=N._multiDrawCount,Ve=yt?v.get(yt).bytesPerElement:1,Xn=et.get(H).currentProgram.getUniforms();for(let De=0;De<ee;De++)Xn.setValue(E,"_gl_DrawID",De),Kt.render(It[De]/Ve,Se[De])}else if(N.isInstancedMesh)Kt.renderInstances(jt,de,N.count);else if(z.isInstancedBufferGeometry){const It=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Se=Math.min(z.instanceCount,It);Kt.renderInstances(jt,de,Se)}else Kt.render(jt,de)};function ne(S,U,z){S.transparent===!0&&S.side===qe&&S.forceSinglePass===!1?(S.side=Re,S.needsUpdate=!0,Ki(S,U,z),S.side=Tn,S.needsUpdate=!0,Ki(S,U,z),S.side=qe):Ki(S,U,z)}this.compile=function(S,U,z=null){z===null&&(z=S),f=ht.get(z),f.init(U),b.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==z&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const H=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const it=N.material;if(it)if(Array.isArray(it))for(let pt=0;pt<it.length;pt++){const Tt=it[pt];ne(Tt,z,N),H.add(Tt)}else ne(it,z,N),H.add(it)}),f=b.pop(),H},this.compileAsync=function(S,U,z=null){const H=this.compile(S,U,z);return new Promise(N=>{function it(){if(H.forEach(function(pt){et.get(pt).currentProgram.isReady()&&H.delete(pt)}),H.size===0){N(S);return}setTimeout(it,10)}Q.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let ke=null;function sn(S){ke&&ke(S)}function ka(){An.stop()}function Va(){An.start()}const An=new Yl;An.setAnimationLoop(sn),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(S){ke=S,tt.setAnimationLoop(S),S===null?An.stop():An.start()},tt.addEventListener("sessionstart",ka),tt.addEventListener("sessionend",Va),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(U),U=tt.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,D),f=ht.get(S,b.length),f.init(U),b.push(f),Pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Pt),Rt=this.localClippingEnabled,rt=bt.init(this.clippingPlanes,Rt),m=wt.get(S,T.length),m.init(),T.push(m),tt.enabled===!0&&tt.isPresenting===!0){const it=x.xr.getDepthSensingMesh();it!==null&&qs(it,U,-1/0,x.sortObjects)}qs(S,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ct,gt),Jt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Jt&&K.addToRenderList(m,S),this.info.render.frame++,rt===!0&&bt.beginShadows();const z=f.state.shadowsArray;At.render(z,S,U),rt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const it=U.cameras;if(N.length>0)for(let pt=0,Tt=it.length;pt<Tt;pt++){const yt=it[pt];Wa(H,N,S,yt)}Jt&&K.render(S);for(let pt=0,Tt=it.length;pt<Tt;pt++){const yt=it[pt];Ga(m,S,yt,yt.viewport)}}else N.length>0&&Wa(H,N,S,U),Jt&&K.render(S),Ga(m,S,U);D!==null&&C===0&&(_t.updateMultisampleRenderTarget(D),_t.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(x,S,U),Bt.resetDefaultState(),M=-1,_=null,b.pop(),b.length>0?(f=b[b.length-1],rt===!0&&bt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function qs(S,U,z,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){H&&Lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pt);const pt=V.update(S),Tt=S.material;Tt.visible&&m.push(S,pt,Tt,z,Lt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){const pt=V.update(S),Tt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Lt.copy(S.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Lt.copy(pt.boundingSphere.center)),Lt.applyMatrix4(S.matrixWorld).applyMatrix4(Pt)),Array.isArray(Tt)){const yt=pt.groups;for(let Ft=0,Ot=yt.length;Ft<Ot;Ft++){const Dt=yt[Ft],jt=Tt[Dt.materialIndex];jt&&jt.visible&&m.push(S,pt,jt,z,Lt.z,Dt)}}else Tt.visible&&m.push(S,pt,Tt,z,Lt.z,null)}}const it=S.children;for(let pt=0,Tt=it.length;pt<Tt;pt++)qs(it[pt],U,z,H)}function Ga(S,U,z,H){const N=S.opaque,it=S.transmissive,pt=S.transparent;f.setupLightsView(z),rt===!0&&bt.setGlobalState(x.clippingPlanes,z),H&&Y.viewport(P.copy(H)),N.length>0&&Ji(N,U,z),it.length>0&&Ji(it,U,z),pt.length>0&&Ji(pt,U,z),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Wa(S,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new kn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?$i:tn,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const it=f.state.transmissionRenderTarget[H.id],pt=H.viewport||P;it.setSize(pt.z*x.transmissionResolutionScale,pt.w*x.transmissionResolutionScale);const Tt=x.getRenderTarget();x.setRenderTarget(it),x.getClearColor(X),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Jt&&K.render(z);const yt=x.toneMapping;x.toneMapping=En;const Ft=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),rt===!0&&bt.setGlobalState(x.clippingPlanes,H),Ji(S,z,H),_t.updateMultisampleRenderTarget(it),_t.updateRenderTargetMipmap(it),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Dt=0,jt=U.length;Dt<jt;Dt++){const ie=U[Dt],de=ie.object,pe=ie.geometry,Kt=ie.material,It=ie.group;if(Kt.side===qe&&de.layers.test(H.layers)){const Se=Kt.side;Kt.side=Re,Kt.needsUpdate=!0,Xa(de,z,H,pe,Kt,It),Kt.side=Se,Kt.needsUpdate=!0,Ot=!0}}Ot===!0&&(_t.updateMultisampleRenderTarget(it),_t.updateRenderTargetMipmap(it))}x.setRenderTarget(Tt),x.setClearColor(X,q),Ft!==void 0&&(H.viewport=Ft),x.toneMapping=yt}function Ji(S,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,it=S.length;N<it;N++){const pt=S[N],Tt=pt.object,yt=pt.geometry,Ft=pt.group;let Ot=pt.material;Ot.allowOverride===!0&&H!==null&&(Ot=H),Tt.layers.test(z.layers)&&Xa(Tt,U,z,yt,Ot,Ft)}}function Xa(S,U,z,H,N,it){S.onBeforeRender(x,U,z,H,N,it),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,U,z,H,S,it),N.transparent===!0&&N.side===qe&&N.forceSinglePass===!1?(N.side=Re,N.needsUpdate=!0,x.renderBufferDirect(z,U,H,N,S,it),N.side=Tn,N.needsUpdate=!0,x.renderBufferDirect(z,U,H,N,S,it),N.side=qe):x.renderBufferDirect(z,U,H,N,S,it),S.onAfterRender(x,U,z,H,N,it)}function Ki(S,U,z){U.isScene!==!0&&(U=oe);const H=et.get(S),N=f.state.lights,it=f.state.shadowsArray,pt=N.state.version,Tt=J.getParameters(S,N.state,it,U,z),yt=J.getProgramCacheKey(Tt);let Ft=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?w:zt).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ft===void 0&&(S.addEventListener("dispose",Et),Ft=new Map,H.programs=Ft);let Ot=Ft.get(yt);if(Ot!==void 0){if(H.currentProgram===Ot&&H.lightsStateVersion===pt)return $a(S,Tt),Ot}else Tt.uniforms=J.getUniforms(S),S.onBeforeCompile(Tt,x),Ot=J.acquireProgram(Tt,yt),Ft.set(yt,Ot),H.uniforms=Tt.uniforms;const Dt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Dt.clippingPlanes=bt.uniform),$a(S,Tt),H.needsLights=nc(S),H.lightsStateVersion=pt,H.needsLights&&(Dt.ambientLightColor.value=N.state.ambient,Dt.lightProbe.value=N.state.probe,Dt.directionalLights.value=N.state.directional,Dt.directionalLightShadows.value=N.state.directionalShadow,Dt.spotLights.value=N.state.spot,Dt.spotLightShadows.value=N.state.spotShadow,Dt.rectAreaLights.value=N.state.rectArea,Dt.ltc_1.value=N.state.rectAreaLTC1,Dt.ltc_2.value=N.state.rectAreaLTC2,Dt.pointLights.value=N.state.point,Dt.pointLightShadows.value=N.state.pointShadow,Dt.hemisphereLights.value=N.state.hemi,Dt.directionalShadowMap.value=N.state.directionalShadowMap,Dt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Dt.spotShadowMap.value=N.state.spotShadowMap,Dt.spotLightMatrix.value=N.state.spotLightMatrix,Dt.spotLightMap.value=N.state.spotLightMap,Dt.pointShadowMap.value=N.state.pointShadowMap,Dt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ot,H.uniformsList=null,Ot}function qa(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Us.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function $a(S,U){const z=et.get(S);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function tc(S,U,z,H,N){U.isScene!==!0&&(U=oe),_t.resetTextureUnits();const it=U.fog,pt=H.isMeshStandardMaterial?U.environment:null,Tt=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:_i,yt=(H.isMeshStandardMaterial?w:zt).get(H.envMap||pt),Ft=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ot=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Dt=!!z.morphAttributes.position,jt=!!z.morphAttributes.normal,ie=!!z.morphAttributes.color;let de=En;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(de=x.toneMapping);const pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Kt=pe!==void 0?pe.length:0,It=et.get(H),Se=f.state.lights;if(rt===!0&&(Rt===!0||S!==_)){const Ee=S===_&&H.id===M;bt.setState(H,S,Ee)}let ee=!1;H.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Se.state.version||It.outputColorSpace!==Tt||N.isBatchedMesh&&It.batching===!1||!N.isBatchedMesh&&It.batching===!0||N.isBatchedMesh&&It.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&It.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&It.instancing===!1||!N.isInstancedMesh&&It.instancing===!0||N.isSkinnedMesh&&It.skinning===!1||!N.isSkinnedMesh&&It.skinning===!0||N.isInstancedMesh&&It.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&It.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&It.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&It.instancingMorph===!1&&N.morphTexture!==null||It.envMap!==yt||H.fog===!0&&It.fog!==it||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==bt.numPlanes||It.numIntersection!==bt.numIntersection)||It.vertexAlphas!==Ft||It.vertexTangents!==Ot||It.morphTargets!==Dt||It.morphNormals!==jt||It.morphColors!==ie||It.toneMapping!==de||It.morphTargetsCount!==Kt)&&(ee=!0):(ee=!0,It.__version=H.version);let Ve=It.currentProgram;ee===!0&&(Ve=Ki(H,U,N));let Xn=!1,De=!1,Ei=!1;const ue=Ve.getUniforms(),Ne=It.uniforms;if(Y.useProgram(Ve.program)&&(Xn=!0,De=!0,Ei=!0),H.id!==M&&(M=H.id,De=!0),Xn||_!==S){Y.buffers.depth.getReversed()?(mt.copy(S.projectionMatrix),fh(mt),ph(mt),ue.setValue(E,"projectionMatrix",mt)):ue.setValue(E,"projectionMatrix",S.projectionMatrix),ue.setValue(E,"viewMatrix",S.matrixWorldInverse);const Ae=ue.map.cameraPosition;Ae!==void 0&&Ae.setValue(E,Vt.setFromMatrixPosition(S.matrixWorld)),ot.logarithmicDepthBuffer&&ue.setValue(E,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ue.setValue(E,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,De=!0,Ei=!0)}if(N.isSkinnedMesh){ue.setOptional(E,N,"bindMatrix"),ue.setOptional(E,N,"bindMatrixInverse");const Ee=N.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),ue.setValue(E,"boneTexture",Ee.boneTexture,_t))}N.isBatchedMesh&&(ue.setOptional(E,N,"batchingTexture"),ue.setValue(E,"batchingTexture",N._matricesTexture,_t),ue.setOptional(E,N,"batchingIdTexture"),ue.setValue(E,"batchingIdTexture",N._indirectTexture,_t),ue.setOptional(E,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(E,"batchingColorTexture",N._colorsTexture,_t));const Fe=z.morphAttributes;if((Fe.position!==void 0||Fe.normal!==void 0||Fe.color!==void 0)&&xt.update(N,z,Ve),(De||It.receiveShadow!==N.receiveShadow)&&(It.receiveShadow=N.receiveShadow,ue.setValue(E,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ne.envMap.value=yt,Ne.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Ne.envMapIntensity.value=U.environmentIntensity),De&&(ue.setValue(E,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&ec(Ne,Ei),it&&H.fog===!0&&G.refreshFogUniforms(Ne,it),G.refreshMaterialUniforms(Ne,H,k,Z,f.state.transmissionRenderTarget[S.id]),Us.upload(E,qa(It),Ne,_t)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Us.upload(E,qa(It),Ne,_t),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ue.setValue(E,"center",N.center),ue.setValue(E,"modelViewMatrix",N.modelViewMatrix),ue.setValue(E,"normalMatrix",N.normalMatrix),ue.setValue(E,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ee=H.uniformsGroups;for(let Ae=0,$s=Ee.length;Ae<$s;Ae++){const Cn=Ee[Ae];I.update(Cn,Ve),I.bind(Cn,Ve)}}return Ve}function ec(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function nc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,U,z){const H=et.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),et.get(S.texture).__webglTexture=U,et.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const z=et.get(S);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const ic=E.createFramebuffer();this.setRenderTarget=function(S,U=0,z=0){D=S,R=U,C=z;let H=!0,N=null,it=!1,pt=!1;if(S){const yt=et.get(S);if(yt.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(E.FRAMEBUFFER,null),H=!1;else if(yt.__webglFramebuffer===void 0)_t.setupRenderTarget(S);else if(yt.__hasExternalTextures)_t.rebindTextures(S,et.get(S.texture).__webglTexture,et.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Dt=S.depthTexture;if(yt.__boundDepthTexture!==Dt){if(Dt!==null&&et.has(Dt)&&(S.width!==Dt.image.width||S.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_t.setupDepthRenderbuffer(S)}}const Ft=S.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(pt=!0);const Ot=et.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?N=Ot[U][z]:N=Ot[U],it=!0):S.samples>0&&_t.useMultisampledRTT(S)===!1?N=et.get(S).__webglMultisampledFramebuffer:Array.isArray(Ot)?N=Ot[z]:N=Ot,P.copy(S.viewport),B.copy(S.scissor),O=S.scissorTest}else P.copy(Mt).multiplyScalar(k).floor(),B.copy(kt).multiplyScalar(k).floor(),O=Yt;if(z!==0&&(N=ic),Y.bindFramebuffer(E.FRAMEBUFFER,N)&&H&&Y.drawBuffers(S,N),Y.viewport(P),Y.scissor(B),Y.setScissorTest(O),it){const yt=et.get(S.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,z)}else if(pt){const yt=et.get(S.texture),Ft=U;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,yt.__webglTexture,z,Ft)}else if(S!==null&&z!==0){const yt=et.get(S.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,yt.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(S,U,z,H,N,it,pt,Tt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){Y.bindFramebuffer(E.FRAMEBUFFER,yt);try{const Ft=S.textures[Tt],Ot=Ft.format,Dt=Ft.type;if(!ot.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&z>=0&&z<=S.height-N&&(S.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Tt),E.readPixels(U,z,H,N,ut.convert(Ot),ut.convert(Dt),it))}finally{const Ft=D!==null?et.get(D).__webglFramebuffer:null;Y.bindFramebuffer(E.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(S,U,z,H,N,it,pt,Tt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt)if(U>=0&&U<=S.width-H&&z>=0&&z<=S.height-N){Y.bindFramebuffer(E.FRAMEBUFFER,yt);const Ft=S.textures[Tt],Ot=Ft.format,Dt=Ft.type;if(!ot.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,jt),E.bufferData(E.PIXEL_PACK_BUFFER,it.byteLength,E.STREAM_READ),S.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Tt),E.readPixels(U,z,H,N,ut.convert(Ot),ut.convert(Dt),0);const ie=D!==null?et.get(D).__webglFramebuffer:null;Y.bindFramebuffer(E.FRAMEBUFFER,ie);const de=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await dh(E,de,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,jt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,it),E.deleteBuffer(jt),E.deleteSync(de),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,z=0){const H=Math.pow(2,-z),N=Math.floor(S.image.width*H),it=Math.floor(S.image.height*H),pt=U!==null?U.x:0,Tt=U!==null?U.y:0;_t.setTexture2D(S,0),E.copyTexSubImage2D(E.TEXTURE_2D,z,0,0,pt,Tt,N,it),Y.unbindTexture()};const sc=E.createFramebuffer(),rc=E.createFramebuffer();this.copyTextureToTexture=function(S,U,z=null,H=null,N=0,it=null){it===null&&(N!==0?(fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=N,N=0):it=0);let pt,Tt,yt,Ft,Ot,Dt,jt,ie,de;const pe=S.isCompressedTexture?S.mipmaps[it]:S.image;if(z!==null)pt=z.max.x-z.min.x,Tt=z.max.y-z.min.y,yt=z.isBox3?z.max.z-z.min.z:1,Ft=z.min.x,Ot=z.min.y,Dt=z.isBox3?z.min.z:0;else{const Fe=Math.pow(2,-N);pt=Math.floor(pe.width*Fe),Tt=Math.floor(pe.height*Fe),S.isDataArrayTexture?yt=pe.depth:S.isData3DTexture?yt=Math.floor(pe.depth*Fe):yt=1,Ft=0,Ot=0,Dt=0}H!==null?(jt=H.x,ie=H.y,de=H.z):(jt=0,ie=0,de=0);const Kt=ut.convert(U.format),It=ut.convert(U.type);let Se;U.isData3DTexture?(_t.setTexture3D(U,0),Se=E.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(_t.setTexture2DArray(U,0),Se=E.TEXTURE_2D_ARRAY):(_t.setTexture2D(U,0),Se=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,U.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,U.unpackAlignment);const ee=E.getParameter(E.UNPACK_ROW_LENGTH),Ve=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Xn=E.getParameter(E.UNPACK_SKIP_PIXELS),De=E.getParameter(E.UNPACK_SKIP_ROWS),Ei=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,pe.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,pe.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ft),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ot),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Dt);const ue=S.isDataArrayTexture||S.isData3DTexture,Ne=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Fe=et.get(S),Ee=et.get(U),Ae=et.get(Fe.__renderTarget),$s=et.get(Ee.__renderTarget);Y.bindFramebuffer(E.READ_FRAMEBUFFER,Ae.__webglFramebuffer),Y.bindFramebuffer(E.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let Cn=0;Cn<yt;Cn++)ue&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,et.get(S).__webglTexture,N,Dt+Cn),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,et.get(U).__webglTexture,it,de+Cn)),E.blitFramebuffer(Ft,Ot,pt,Tt,jt,ie,pt,Tt,E.DEPTH_BUFFER_BIT,E.NEAREST);Y.bindFramebuffer(E.READ_FRAMEBUFFER,null),Y.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||et.has(S)){const Fe=et.get(S),Ee=et.get(U);Y.bindFramebuffer(E.READ_FRAMEBUFFER,sc),Y.bindFramebuffer(E.DRAW_FRAMEBUFFER,rc);for(let Ae=0;Ae<yt;Ae++)ue?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Fe.__webglTexture,N,Dt+Ae):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Fe.__webglTexture,N),Ne?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ee.__webglTexture,it,de+Ae):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ee.__webglTexture,it),N!==0?E.blitFramebuffer(Ft,Ot,pt,Tt,jt,ie,pt,Tt,E.COLOR_BUFFER_BIT,E.NEAREST):Ne?E.copyTexSubImage3D(Se,it,jt,ie,de+Ae,Ft,Ot,pt,Tt):E.copyTexSubImage2D(Se,it,jt,ie,Ft,Ot,pt,Tt);Y.bindFramebuffer(E.READ_FRAMEBUFFER,null),Y.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Ne?S.isDataTexture||S.isData3DTexture?E.texSubImage3D(Se,it,jt,ie,de,pt,Tt,yt,Kt,It,pe.data):U.isCompressedArrayTexture?E.compressedTexSubImage3D(Se,it,jt,ie,de,pt,Tt,yt,Kt,pe.data):E.texSubImage3D(Se,it,jt,ie,de,pt,Tt,yt,Kt,It,pe):S.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,it,jt,ie,pt,Tt,Kt,It,pe.data):S.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,it,jt,ie,pe.width,pe.height,Kt,pe.data):E.texSubImage2D(E.TEXTURE_2D,it,jt,ie,pt,Tt,Kt,It,pe);E.pixelStorei(E.UNPACK_ROW_LENGTH,ee),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ve),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Xn),E.pixelStorei(E.UNPACK_SKIP_ROWS,De),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ei),it===0&&U.generateMipmaps&&E.generateMipmap(Se),Y.unbindTexture()},this.copyTextureToTexture3D=function(S,U,z=null,H=null,N=0){return fi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,z,H,N)},this.initRenderTarget=function(S){et.get(S).__webglFramebuffer===void 0&&_t.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?_t.setTextureCube(S,0):S.isData3DTexture?_t.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?_t.setTexture2DArray(S,0):_t.setTexture2D(S,0),Y.unbindTexture()},this.resetState=function(){R=0,C=0,D=null,Y.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const cl="real-time-space-audio-v1";class vg{constructor(){st(this,"context");st(this,"muted",!1);st(this,"lastPlayed",new Map);this.muted=window.localStorage.getItem(cl)==="muted"}get isMuted(){return this.muted}toggleMute(){return this.muted=!this.muted,window.localStorage.setItem(cl,this.muted?"muted":"enabled"),this.muted||(this.ensureContext(),this.play("toggle",.8)),this.muted}async prime(){this.muted||await this.ensureContext()}play(t,e=1){if(this.muted)return;const n=performance.now(),i=this.cooldownFor(t);n-(this.lastPlayed.get(t)??0)<i||(this.lastPlayed.set(t,n),this.ensureContext().then(r=>{!r||this.muted||this.renderSound(r,t,e)}))}async ensureContext(){if(!this.context){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;this.context=new t}return this.context.state==="suspended"&&await this.context.resume(),this.context}renderSound(t,e,n){if(e==="victory"||e==="defeat"){this.playChord(t,e==="victory"?[392,523,659]:[196,165,131],n);return}const i=t.currentTime,r=t.createGain();r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(this.levelFor(e)*n,i+.015),r.gain.exponentialRampToValueAtTime(1e-4,i+this.durationFor(e)),r.connect(t.destination);const a=t.createOscillator();a.type=this.waveFor(e),a.frequency.setValueAtTime(this.frequencyFor(e),i),e==="explosion"?a.frequency.exponentialRampToValueAtTime(58,i+.34):e==="attack"?a.frequency.exponentialRampToValueAtTime(780,i+.08):e==="subsystem"&&a.frequency.exponentialRampToValueAtTime(520,i+.12),a.connect(r),a.start(i),a.stop(i+this.durationFor(e)+.04)}playChord(t,e,n){const i=t.currentTime;e.forEach((r,a)=>{const o=t.createGain(),l=i+a*.08;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.045*n,l+.025),o.gain.exponentialRampToValueAtTime(1e-4,l+.55),o.connect(t.destination);const c=t.createOscillator();c.type="triangle",c.frequency.setValueAtTime(r,l),c.connect(o),c.start(l),c.stop(l+.6)})}cooldownFor(t){return t==="impact"?80:t==="attack"?60:t==="select"?90:0}durationFor(t){return{attack:.12,defeat:.6,error:.16,explosion:.48,impact:.09,move:.14,purchase:.2,select:.08,start:.28,subsystem:.18,toggle:.1,victory:.6}[t]}frequencyFor(t){return{attack:460,defeat:160,error:150,explosion:132,impact:240,move:330,purchase:660,select:740,start:392,subsystem:880,toggle:520,victory:392}[t]}levelFor(t){return t==="explosion"?.075:t==="attack"||t==="impact"?.025:.045}waveFor(t){return t==="explosion"||t==="impact"||t==="error"?"sawtooth":t==="select"||t==="purchase"||t==="subsystem"?"triangle":"square"}}const Ze=3200,hn=1900,Ct="player",Zt="enemy";function hl(s){return s==="lance"?{shieldPortion:.88,hullMultiplier:.92}:s==="torpedo"?{shieldPortion:.48,hullMultiplier:1.18}:s==="flak"?{shieldPortion:.62,hullMultiplier:.78}:{shieldPortion:.72,hullMultiplier:1}}function _g(s,t){return t?!1:s.hull/s.maxHull<.42||s.shield/s.maxShield<.18}function xg(s,t,e,n){const i=s==="Victory"?1e3:280,r=Math.max(0,420-t)*2,a=Math.max(0,e)*6,o=n.nodesCaptured*90,l=n.enemyShipsDestroyed*120+n.subsystemsDestroyed*70,c=n.abilitiesUsed*35+n.storePurchases*25,h=n.playerShipsLost*160,u=Math.max(0,Math.round(i+r+a+o+l+c-h));return u>=2600?{score:u,rating:"S"}:u>=2e3?{score:u,rating:"A"}:u>=1300?{score:u,rating:"B"}:{score:u,rating:"C"}}function yg(s,t,e,n=420){return s!=="Victory"?0:e>60&&t<=n?3:e>40?2:1}function Sg(s,t,e=0){const n=s==="Victory"?2:1,i=s==="Victory"?Math.max(0,t-1):0,r=Math.max(0,Math.floor(e/3));return n+i+r}function Mg(s){const t=Math.max(1,Math.floor(s)),e=["fighter","fighter"];t>=2&&e.push("bomber"),t>=3&&e.push("cruiser"),t>=4&&e.push("fighter","bomber"),t>=5&&e.push("heavyCapital");for(let n=6;n<=t;n+=1)e.push(n%2===0?"bomber":"fighter");return{wave:t,ships:e,salvageReward:35+t*15}}const bg={flagship:{hull:5e3,shield:2500,shieldRegen:18,speed:32,range:420,damage:120,damageType:"lance",cooldown:1.4},heavyCapital:{hull:2600,shield:1200,shieldRegen:10,speed:38,range:360,damage:90,damageType:"lance",cooldown:1.2},cruiser:{hull:1200,shield:650,shieldRegen:8,speed:58,range:260,damage:36,damageType:"flak",cooldown:.6},fighter:{hull:120,shield:40,shieldRegen:2,speed:160,range:120,damage:8,damageType:"laser",cooldown:.18},bomber:{hull:220,shield:60,shieldRegen:3,speed:110,range:150,damage:180,damageType:"torpedo",cooldown:2.2}},Je={flagship:{label:"Flagship",hullColor:10205384,glowColor:3724799,accentColor:15858687,width:150,height:54},heavyCapital:{label:"Dreadnought",hullColor:8690605,glowColor:7656959,accentColor:14020603,width:108,height:42},cruiser:{label:"Lance Cruiser",hullColor:7901863,glowColor:6746834,accentColor:13107189,width:78,height:30},fighter:{label:"Interceptor",hullColor:11059920,glowColor:9103615,accentColor:16777215,width:34,height:18},bomber:{label:"Strike Bomber",hullColor:10004666,glowColor:16765804,accentColor:16773311,width:44,height:22}},Eg=[{id:"player-flagship",team:"player",shipClass:"flagship",x:520,y:950,rotation:0},{id:"player-dreadnought",team:"player",shipClass:"heavyCapital",x:330,y:840,rotation:.1},{id:"player-cruiser-a",team:"player",shipClass:"cruiser",x:360,y:1060,rotation:-.05},{id:"player-cruiser-b",team:"player",shipClass:"cruiser",x:620,y:780,rotation:.14},{id:"player-fighter-a",team:"player",shipClass:"fighter",x:710,y:900,rotation:.06},{id:"player-fighter-b",team:"player",shipClass:"fighter",x:740,y:970,rotation:-.08},{id:"player-bomber-a",team:"player",shipClass:"bomber",x:650,y:1090,rotation:.04},{id:"enemy-flagship",team:"enemy",shipClass:"flagship",x:2680,y:950,rotation:Math.PI},{id:"enemy-dreadnought",team:"enemy",shipClass:"heavyCapital",x:2870,y:1060,rotation:Math.PI-.12},{id:"enemy-cruiser-a",team:"enemy",shipClass:"cruiser",x:2840,y:830,rotation:Math.PI+.08},{id:"enemy-cruiser-b",team:"enemy",shipClass:"cruiser",x:2580,y:1120,rotation:Math.PI-.05},{id:"enemy-fighter-a",team:"enemy",shipClass:"fighter",x:2490,y:1e3,rotation:Math.PI},{id:"enemy-fighter-b",team:"enemy",shipClass:"fighter",x:2460,y:920,rotation:Math.PI+.08},{id:"enemy-bomber-a",team:"enemy",shipClass:"bomber",x:2545,y:800,rotation:Math.PI-.04}],ai=[{id:"flagship_hull_1",name:"Reinforced Command Hull I",description:"Increase flagship hull by 15%.",category:"Command",cost:2,target:"flagship",stat:"hull",multiplier:1.15},{id:"fleet_shields_1",name:"Harmonic Shield Lattice I",description:"Increase all player shields by 10%.",category:"Shields",cost:2,target:"economy",stat:"shield",multiplier:1.1},{id:"bomber_payload_1",name:"Heavy Torpedo Payload I",description:"Increase bomber damage by 20%.",category:"Strike",cost:2,target:"bomber",stat:"damage",multiplier:1.2},{id:"cruiser_lance_1",name:"Extended Lance Optics I",description:"Increase cruiser weapon range by 12%.",category:"Strike",cost:2,target:"cruiser",stat:"range",multiplier:1.12},{id:"salvage_yield_1",name:"Salvage Yield Routing I",description:"Increase salvage income by 20%.",category:"Economy",cost:3,target:"economy",stat:"salvageIncome",multiplier:1.2}],Rr="real-time-space-profile-v1",Cs=72,ul=["Command","Shields","Strike","Economy"],dl={repair:{label:"Repair",description:"Restore nearby allied hull.",cost:3},emp:{label:"EMP",description:"Disrupt enemy shields.",cost:4},barrage:{label:"Barrage",description:"Strike the selected target.",cost:6}},fl=[{id:"select",label:"Select a squad"},{id:"move",label:"Move into position"},{id:"attack",label:"Focus fire an enemy"},{id:"capture",label:"Capture a node"},{id:"store",label:"Open the battle store"},{id:"ability",label:"Use a command ability"},{id:"subsystem",label:"Target a subsystem"},{id:"flagship",label:"Destroy the enemy flagship"}];class Tg{constructor(t){st(this,"shell");st(this,"canvas");st(this,"menu");st(this,"hudStatus");st(this,"resourcePanel");st(this,"flagshipPanel");st(this,"selectedSummary");st(this,"commandTray");st(this,"selectionBox");st(this,"announcementBanner");st(this,"orientationOverlay");st(this,"fpsPanel");st(this,"abilityPanel");st(this,"objectivePanel");st(this,"settingsPanel");st(this,"subsystemWheel");st(this,"minimapCanvas");st(this,"minimapContext");st(this,"storeOverlay");st(this,"upgradeOverlay");st(this,"labelLayer");st(this,"scene",new zh);st(this,"clock",new Pu);st(this,"audio",new vg);st(this,"renderer");st(this,"camera");st(this,"raycaster",new Du);st(this,"pointerNdc",new lt);st(this,"ships",[]);st(this,"projectiles",[]);st(this,"objectiveNodes",[]);st(this,"nebulaZones",[]);st(this,"groundPlane",new Sn(new A(0,1,0),0));st(this,"selectedShips",new Set);st(this,"selectionRings",new Map);st(this,"commandMarkers",[]);st(this,"completedObjectives",new Set);st(this,"battleStats",{enemyShipsDestroyed:0,playerShipsLost:0,nodesCaptured:0,storePurchases:0,abilitiesUsed:0,subsystemsDestroyed:0});st(this,"profile");st(this,"resultOverlay");st(this,"animationId",0);st(this,"salvage",120);st(this,"commandPoints",0);st(this,"economyTimer",0);st(this,"nebulaHintTimer",0);st(this,"cameraShakeTime",0);st(this,"cameraShakeStrength",0);st(this,"salvageMultiplier",1);st(this,"reinforcementIndex",0);st(this,"enemyReinforcementIndex",0);st(this,"battleElapsed",0);st(this,"aiTimer",0);st(this,"aiState","Opening");st(this,"battleMode","skirmish");st(this,"selectedUpgradeCategory","Command");st(this,"survivalWave",0);st(this,"survivalTimer",0);st(this,"survivalNextWaveIn",10);st(this,"survivalMaxWaves",5);st(this,"enemyEmergencyUsed",!1);st(this,"lowQualityMode",!1);st(this,"damageNumbersEnabled",!0);st(this,"fpsAccumulator",0);st(this,"fpsFrames",0);st(this,"isBattleStarted",!1);st(this,"isTutorialMode",!1);st(this,"battleEnded",!1);st(this,"isPaused",!1);st(this,"isStoreOpen",!1);st(this,"isFollowingFlagship",!1);st(this,"isDragging",!1);st(this,"isBoxSelecting",!1);st(this,"boxSelectArmed",!1);st(this,"dragStarted",!1);st(this,"longPressTimer");st(this,"longPressHandled",!1);st(this,"lastTapShipClass");st(this,"lastTapAt",0);st(this,"previousPointer",new lt);st(this,"dragStartPointer",new lt);st(this,"pinchDistance");st(this,"animate",()=>{this.animationId=window.requestAnimationFrame(this.animate);const t=this.clock.getDelta();this.updateFps(t),this.isBattleStarted&&!this.battleEnded&&!this.isStoreOpen&&!this.isPaused&&(this.battleElapsed+=t,this.updateShips(t),this.updateAI(t),this.updateHangarLaunches(t),this.updateCombat(t),this.updateProjectiles(t),this.updateSubsystemRepairs(t),this.updateEconomy(t),this.updateSurvival(t),this.updateNebulaHint(t),this.updateDamageMarkers(),this.updateSubsystemDisables(),this.updateFlagshipPanel(),this.updateFollowCamera(t)),this.updateLabels(),this.drawMinimap();const e=this.getCameraShakeOffset(t);this.camera.position.add(e),this.renderer.render(this.scene,this.camera),this.camera.position.sub(e)});this.shell=document.createElement("div"),this.shell.className="game-shell",t.append(this.shell),this.canvas=document.createElement("canvas"),this.canvas.className="game-canvas",this.shell.append(this.canvas),this.renderer=new gg({canvas:this.canvas,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setClearColor(330004),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.camera=new Ue(48,16/9,1,6e3),this.camera.position.set(520,560,950),this.camera.lookAt(520,0,950),this.labelLayer=document.createElement("div"),this.labelLayer.style.position="absolute",this.labelLayer.style.inset="0",this.labelLayer.style.pointerEvents="none",this.shell.append(this.labelLayer),this.profile=this.loadProfile(),this.menu=this.createMenu();const e=this.createHud();this.hudStatus=e.status,this.resourcePanel=e.resources,this.flagshipPanel=e.flagships,this.selectedSummary=e.summary,this.commandTray=e.tray,this.selectionBox=this.createSelectionBox(),this.announcementBanner=this.createAnnouncementBanner(),this.orientationOverlay=this.createOrientationOverlay(),this.fpsPanel=this.createFpsPanel(),this.abilityPanel=this.createAbilityPanel(),this.objectivePanel=this.createObjectivePanel(),this.settingsPanel=this.createSettingsPanel(),this.subsystemWheel=this.createSubsystemWheel();const n=this.createMinimap();this.minimapCanvas=n.canvas,this.minimapContext=n.context,this.storeOverlay=this.createStoreOverlay(),this.upgradeOverlay=this.createUpgradeOverlay()}start(){this.setupScene(),this.bindEvents(),this.resize(),this.animate()}setupScene(){this.scene.background=new $t(330004),this.scene.fog=new Bs(330004,16e-5),this.scene.add(new Cu(12442367,.6));const t=new Au(13235455,1.6);t.position.set(-420,900,520),this.scene.add(t);const e=new Uo(16742237,2.2,1300);e.position.set(2680,280,950),this.scene.add(e),this.createStarfield(),this.createBattlefield(),this.createNebulaZones(),this.createObjectives(),this.applyPersistentUpgradeModifiers(),Eg.forEach(n=>this.createShip(n)),this.updateResourcePanel(),this.updateFlagshipPanel()}createMenu(){var e,n,i,r;const t=document.createElement("div");return t.className="menu-overlay",t.innerHTML=`
      <h1 class="menu-title">Real Time Space</h1>
      <p class="menu-subtitle">3D tactical fleet prototype: command original capital ships, escorts, fighters, and bombers in a browser battlefield.</p>
      <div class="menu-record">Best ${this.profile.bestRating} | ${this.profile.bestScore.toLocaleString()} score | ${this.renderStarText(this.profile.bestStars)} | Wave ${this.profile.bestSurvivalWave}</div>
      <div class="menu-actions">
        <button class="start-button" type="button" data-menu-start>Start Battle</button>
        <button class="secondary-button" type="button" data-menu-tutorial>Tutorial</button>
        <button class="secondary-button" type="button" data-menu-survival>Survival</button>
        <button class="secondary-button" type="button" data-menu-upgrades>Upgrades</button>
      </div>
    `,(e=t.querySelector("[data-menu-start]"))==null||e.addEventListener("click",()=>{this.startBattle("skirmish")}),(n=t.querySelector("[data-menu-tutorial]"))==null||n.addEventListener("click",()=>{this.startBattle("tutorial")}),(i=t.querySelector("[data-menu-survival]"))==null||i.addEventListener("click",()=>{this.startBattle("survival")}),(r=t.querySelector("[data-menu-upgrades]"))==null||r.addEventListener("click",()=>{this.openUpgradeOverlay()}),this.shell.append(t),t}startBattle(t){this.audio.prime(),this.audio.play("start"),this.battleMode=t,this.isTutorialMode=t==="tutorial",this.isBattleStarted=!0,this.menu.classList.add("is-hidden"),this.objectivePanel.classList.toggle("is-visible",this.isTutorialMode),this.hudStatus.textContent=t==="survival"?"Survival ready":this.isTutorialMode?"Tutorial ready":"Battle ready",this.isTutorialMode?this.announce("Tutorial mode active"):t==="survival"&&(this.salvage+=80,this.survivalWave=0,this.survivalTimer=0,this.survivalNextWaveIn=8,this.updateResourcePanel(),this.announce("Survival mode: enemy waves inbound")),this.updateObjectiveProgress()}createHud(){const t=document.createElement("div");t.className="hud",t.innerHTML=`
      <div class="hud-panel">Tap a blue ship to select. Use group buttons or Box for squads. Tap enemy ships to focus fire. Tap open space to move. Drag to pan. Pinch or wheel to zoom.</div>
      <div class="hud-stack">
        <div class="hud-panel resource-panel">Salvage 120 | Command 0</div>
        <div class="hud-panel hud-status">Menu</div>
        <div class="hud-panel flagship-panel"></div>
      </div>
    `,this.shell.append(t);const e=document.createElement("div");return e.className="command-tray",e.innerHTML=`
      <div class="selection-summary">No units selected</div>
      <div class="command-buttons">
        <details class="command-group command-group-secondary">
          <summary>Fleet</summary>
          <button type="button" data-group="all" title="Select every player ship" aria-label="Select every player ship">All</button>
          <button type="button" data-group="capital" title="Select flagship and dreadnoughts" aria-label="Select capital ships">Capital</button>
          <button type="button" data-group="cruiser" title="Select lance cruisers" aria-label="Select cruisers">Cruisers</button>
          <button type="button" data-group="strike" title="Select fighters and bombers" aria-label="Select strike craft">Strike</button>
        </details>
        <details class="command-group command-group-primary" open>
          <summary>Orders</summary>
          <button type="button" data-action="box" title="Drag a selection box" aria-label="Drag a selection box">Box</button>
          <button type="button" data-action="guard" title="Guard the player flagship" aria-label="Guard the player flagship">Guard</button>
          <button type="button" data-action="retreat" title="Retreat selected ships to repairs" aria-label="Retreat selected ships">Retreat</button>
          <button type="button" data-action="subsystem" title="Target the next enemy subsystem" aria-label="Target enemy subsystem">Systems</button>
        </details>
        <details class="command-group command-group-primary" open>
          <summary>Ops</summary>
          <button type="button" data-action="store" title="Open the battle store" aria-label="Open battle store">Store</button>
          <button type="button" data-action="follow" title="Toggle flagship follow camera" aria-label="Toggle flagship follow camera">Follow</button>
          <button type="button" data-action="pause" title="Pause or resume battle" aria-label="Pause or resume battle">Pause</button>
        </details>
        <details class="command-group command-group-secondary">
          <summary>Utility</summary>
          <button type="button" data-action="settings" title="Open display and audio settings" aria-label="Open display and audio settings">Settings</button>
        </details>
      </div>
    `,e.addEventListener("click",n=>{const i=n.target.closest("button");if(!i||!this.isBattleStarted||this.battleEnded)return;const r=i.dataset.group;r&&this.selectGroup(r),i.dataset.action==="box"&&(this.boxSelectArmed=!0,this.commandTray.classList.add("is-box-armed"),this.hudStatus.textContent="Drag a selection box"),i.dataset.action==="store"&&this.openStore(),i.dataset.action==="subsystem"&&this.targetNextEnemySubsystem(),i.dataset.action==="guard"&&this.guardFlagship(),i.dataset.action==="retreat"&&this.retreatSelectedShips(),i.dataset.action==="follow"&&this.toggleFollowFlagship(i),i.dataset.action==="pause"&&this.togglePause(i),i.dataset.action==="settings"&&this.toggleSettingsPanel(i)}),this.shell.append(e),{status:t.querySelector(".hud-status"),resources:t.querySelector(".resource-panel"),flagships:t.querySelector(".flagship-panel"),summary:e.querySelector(".selection-summary"),tray:e}}createSelectionBox(){const t=document.createElement("div");return t.className="selection-box",this.shell.append(t),t}createAnnouncementBanner(){const t=document.createElement("div");return t.className="battle-announcement",this.shell.append(t),t}createOrientationOverlay(){const t=document.createElement("div");return t.className="orientation-warning",t.innerHTML=`
      <div>
        <h2>Rotate Device</h2>
        <p>Landscape gives the fleet controls and 3D camera enough room.</p>
      </div>
    `,this.shell.append(t),t}createFpsPanel(){const t=document.createElement("div");return t.className="fps-panel",t.textContent="FPS --",this.shell.append(t),t}createAbilityPanel(){const t=document.createElement("div");return t.className="ability-panel",t.innerHTML=Object.entries(dl).map(([e,n])=>`
        <button type="button" data-ability="${e}" title="${n.description}">
          <strong>${n.label}</strong>
          <small>${n.description}</small>
          <span data-ability-status>${n.cost} command</span>
        </button>
      `).join(""),t.addEventListener("click",e=>{const n=e.target.closest("[data-ability]");!n||!this.isBattleStarted||this.battleEnded||this.isStoreOpen||this.useAbility(n.dataset.ability??"")}),this.shell.append(t),t}createObjectivePanel(){const t=document.createElement("div");return t.className="objective-panel",t.innerHTML=`
      <strong>Battle Objectives</strong>
      <ul>
        ${fl.map(e=>`<li data-objective="${e.id}">${e.label}</li>`).join("")}
      </ul>
    `,this.shell.append(t),t}createSettingsPanel(){const t=document.createElement("div");return t.className="settings-panel",t.innerHTML=`
      <strong>Settings</strong>
      <button class="is-active" type="button" data-action="numbers" title="Toggle floating combat numbers">Floating Numbers <span>On</span></button>
      <button type="button" data-action="quality" title="Toggle graphics quality">Graphics Quality <span>High</span></button>
      <button type="button" data-action="audio" title="Toggle audio">Audio <span>${this.audio.isMuted?"Muted":"On"}</span></button>
    `,t.addEventListener("click",e=>{const n=e.target.closest("button");!n||!this.isBattleStarted||this.battleEnded||(n.dataset.action==="quality"&&this.toggleQualityMode(n),n.dataset.action==="audio"&&this.toggleAudio(n),n.dataset.action==="numbers"&&this.toggleDamageNumbers(n))}),this.shell.append(t),t}createSubsystemWheel(){const t=document.createElement("div");return t.className="subsystem-wheel",t.addEventListener("pointerdown",e=>e.stopPropagation()),t.addEventListener("click",e=>{const n=e.target.closest("[data-subsystem-id]");if(!n)return;const i=this.ships.flatMap(a=>a.subsystems).find(a=>a.id===n.dataset.subsystemId),r=this.getSelectedShips();if(!i||i.isDestroyed||r.length===0){this.audio.play("error"),this.hideSubsystemWheel();return}this.issueAttackCommand(i,r),this.hudStatus.textContent=`Target: ${i.name}`,this.announce(`Subsystem targeted: ${i.name}`),this.hideSubsystemWheel()}),this.shell.append(t),t}createMinimap(){const t=document.createElement("canvas");t.className="minimap",t.width=240,t.height=144,t.addEventListener("pointerdown",n=>this.onMinimapPointer(n)),this.shell.append(t);const e=t.getContext("2d");if(!e)throw new Error("Unable to create minimap canvas context");return{canvas:t,context:e}}createStoreOverlay(){const t=document.createElement("div");return t.className="store-overlay",t.innerHTML=`
      <div class="store-panel">
        <div class="store-header">
          <h2>Battle Store</h2>
          <button type="button" data-store-close>Close</button>
        </div>
        <div class="store-wallet"></div>
        <div class="store-items">
          <section class="store-section">
            <h3>Ships</h3>
            <button type="button" data-purchase="fighter"><span><strong>Deploy Interceptor Pair</strong><small>Fast screeners for bombers and captures.</small></span><span class="store-cost" data-cost-status>60 salvage</span></button>
            <button type="button" data-purchase="bomber"><span><strong>Deploy Strike Bomber</strong><small>Torpedo craft for capital pressure.</small></span><span class="store-cost" data-cost-status>90 salvage</span></button>
            <button type="button" data-purchase="cruiser"><span><strong>Call Lance Cruiser</strong><small>Reliable midline fire support.</small></span><span class="store-cost" data-cost-status>160 salvage</span></button>
          </section>
          <section class="store-section">
            <h3>Recovery</h3>
            <button type="button" data-purchase="repair"><span><strong>Repair Flagship</strong><small>Restore a chunk of flagship hull.</small></span><span class="store-cost" data-cost-status>80 salvage</span></button>
            <button type="button" data-purchase="shield"><span><strong>Emergency Shields</strong><small>Instant shield reserve for the flagship.</small></span><span class="store-cost" data-cost-status>4 command</span></button>
          </section>
          <section class="store-section">
            <h3>Tactics</h3>
            <button type="button" data-purchase="emp"><span><strong>EMP Strike</strong><small>Disrupt shields and enemy reloads.</small></span><span class="store-cost" data-cost-status>130 salvage</span></button>
            <button type="button" data-purchase="barrage"><span><strong>Barrage Strike</strong><small>Damage up to three ships near target.</small></span><span class="store-cost" data-cost-status>180 salvage</span></button>
          </section>
        </div>
      </div>
    `,t.addEventListener("click",e=>{const n=e.target;if(n.matches("[data-store-close]")){this.audio.play("toggle"),this.closeStore();return}const i=n.closest("[data-purchase]");i&&this.purchaseStoreItem(i.dataset.purchase??"")}),this.shell.append(t),t}createUpgradeOverlay(){const t=document.createElement("div");return t.className="store-overlay upgrade-overlay",t.innerHTML=`
      <div class="store-panel upgrade-panel">
        <div class="store-header">
          <h2>Fleet Upgrades</h2>
          <button type="button" data-upgrade-close>Close</button>
        </div>
        <div class="upgrade-currency"></div>
        <div class="upgrade-tabs"></div>
        <div class="store-items upgrade-items"></div>
        <div class="upgrade-footer">
          <button type="button" data-upgrade-grant>Debug +3 Cores</button>
          <button type="button" data-upgrade-reset>Reset Save</button>
        </div>
      </div>
    `,t.addEventListener("click",e=>{const n=e.target;if(n.matches("[data-upgrade-close]")){this.closeUpgradeOverlay();return}if(n.matches("[data-upgrade-grant]")){this.audio.play("purchase"),this.profile.researchCores+=3,this.saveProfile(),this.renderUpgradeOverlay();return}if(n.matches("[data-upgrade-reset]")){this.audio.play("toggle"),this.profile.researchCores=3,this.profile.purchasedUpgrades=[],this.profile.bestScore=0,this.profile.bestRating="C",this.profile.bestStars=0,this.profile.bestSurvivalWave=0,this.saveProfile(),this.renderUpgradeOverlay();return}const i=n.closest("[data-upgrade-category]");if(i){const a=i.dataset.upgradeCategory;a&&ul.includes(a)&&(this.audio.play("toggle"),this.selectedUpgradeCategory=a,this.renderUpgradeOverlay());return}const r=n.closest("[data-upgrade-id]");r&&this.purchaseUpgrade(r.dataset.upgradeId??"")}),this.shell.append(t),t}openUpgradeOverlay(){this.audio.play("toggle"),this.closeSettingsPanel(),this.renderUpgradeOverlay(),this.upgradeOverlay.classList.add("is-visible")}closeUpgradeOverlay(){this.audio.play("toggle"),this.upgradeOverlay.classList.remove("is-visible")}renderUpgradeOverlay(){const t=this.upgradeOverlay.querySelector(".upgrade-currency"),e=this.upgradeOverlay.querySelector(".upgrade-tabs"),n=this.upgradeOverlay.querySelector(".upgrade-items");if(!t||!e||!n)return;t.textContent=`Research Cores: ${this.profile.researchCores} | Upgrades Owned: ${this.profile.purchasedUpgrades.length}/${ai.length}`,e.innerHTML=ul.map(r=>{const a=ai.filter(l=>l.category===r),o=a.filter(l=>this.profile.purchasedUpgrades.includes(l.id)).length;return`<button type="button" data-upgrade-category="${r}" class="${r===this.selectedUpgradeCategory?"is-active":""}" title="${o}/${a.length} owned">${r} <span>${o}/${a.length}</span></button>`}).join("");const i=ai.filter(r=>r.category===this.selectedUpgradeCategory);n.innerHTML=i.map(r=>{const a=this.profile.purchasedUpgrades.includes(r.id),o=a||this.profile.researchCores<r.cost;return`
        <button type="button" data-upgrade-id="${r.id}" class="${a?"is-owned":""}" ${o?"disabled":""} title="${a?"Already owned":o?"Not enough research cores":"Purchase upgrade"}">
          <span>
            <strong>${r.name}</strong>
            <small>${r.description}</small>
          </span>
          <span class="upgrade-cost">${a?"Owned":`${r.cost} cores`}</span>
        </button>
      `}).join("")}purchaseUpgrade(t){const e=ai.find(n=>n.id===t);if(!e||this.profile.purchasedUpgrades.includes(t)||this.profile.researchCores<e.cost){this.audio.play("error");return}this.audio.play("purchase"),this.profile.researchCores-=e.cost,this.profile.purchasedUpgrades.push(e.id),this.saveProfile(),this.renderUpgradeOverlay()}loadProfile(){try{const t=window.localStorage.getItem(Rr);if(t){const e=JSON.parse(t);return{researchCores:Number.isFinite(e.researchCores)?e.researchCores:3,purchasedUpgrades:Array.isArray(e.purchasedUpgrades)?e.purchasedUpgrades:[],bestScore:Number.isFinite(e.bestScore)?e.bestScore:0,bestRating:["S","A","B","C"].includes(e.bestRating)?e.bestRating:"C",bestStars:Number.isFinite(e.bestStars)?Math.max(0,Math.min(3,Math.floor(e.bestStars))):0,bestSurvivalWave:Number.isFinite(e.bestSurvivalWave)?Math.max(0,Math.floor(e.bestSurvivalWave)):0}}}catch{window.localStorage.removeItem(Rr)}return{researchCores:3,purchasedUpgrades:[],bestScore:0,bestRating:"C",bestStars:0,bestSurvivalWave:0}}saveProfile(){window.localStorage.setItem(Rr,JSON.stringify(this.profile))}renderStarText(t){return`${Math.max(0,Math.min(3,Math.floor(t)))}/3 stars`}createStarfield(){const t=new Float32Array(4200),e=new Float32Array(1400*3);for(let r=0;r<1400;r+=1){t[r*3]=Qt.randFloatSpread(4200)+Ze/2,t[r*3+1]=Qt.randFloat(80,1500),t[r*3+2]=Qt.randFloatSpread(3200)+hn/2;const a=Qt.randFloat(.35,1);e[r*3]=a*.75,e[r*3+1]=a*.9,e[r*3+2]=a}const n=new me;n.setAttribute("position",new He(t,3)),n.setAttribute("color",new He(e,3));const i=new Nl({size:5,vertexColors:!0,transparent:!0,opacity:.9});this.scene.add(new Gh(n,i))}createBattlefield(){const t=new Lu(Math.max(Ze,hn),24,2377306,1320246);t.position.set(Ze/2,-4,hn/2),this.scene.add(t),this.scene.add(this.createRing(520,950,260,3724799,.3)),this.scene.add(this.createRing(2680,950,260,16740427,.3));for(const[e,n,i]of[[1460,790,70],[1600,980,92],[1760,860,74],[1530,1130,66],[1840,1060,82]]){const r=new ce(new Oa(i,1),new Es({color:6123896,roughness:.92,metalness:.05}));r.position.set(e,Qt.randFloat(8,42),n),r.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),this.scene.add(r)}}createNebulaZones(){const t={id:"central-nebula",x:1660,z:980,radius:360},e=new ce(new Gi(t.radius,t.radius*.88,74,72,1,!0),new Ce({color:10456319,transparent:!0,opacity:.12,depthWrite:!1,side:qe}));e.position.set(t.x,38,t.z),this.scene.add(e);const n=this.createRing(t.x,t.z,t.radius,10456319,.55);n.position.y=6,this.scene.add(n);for(const i of[t.radius*.42,t.radius*.7]){const r=this.createRing(t.x,t.z,i,6679295,.18);r.position.y=7,this.scene.add(r)}this.nebulaZones.push({id:t.id,position:new A(t.x,0,t.z),radius:t.radius,mesh:e,ring:n})}createObjectives(){const t=[{id:"salvage-west",kind:"salvage",x:1180,z:780,radius:130},{id:"salvage-mid",kind:"salvage",x:1600,z:980,radius:140},{id:"salvage-east",kind:"salvage",x:2020,z:1120,radius:130},{id:"repair-north",kind:"repair",x:1500,z:620,radius:120},{id:"repair-south",kind:"repair",x:1740,z:1320,radius:120}];for(const e of t){const n=e.kind==="salvage"?16765804:9368225,i=new ce(e.kind==="salvage"?new Ba(28,0):new Gi(28,40,16,24),new Es({color:n,roughness:.5,metalness:.18,emissive:n,emissiveIntensity:.16}));i.position.set(e.x,e.kind==="salvage"?30:8,e.z),this.scene.add(i);const r=this.createRing(e.x,e.z,e.radius,n,.52);r.position.y=4,this.scene.add(r),this.objectiveNodes.push({id:e.id,kind:e.kind,position:new A(e.x,0,e.z),radius:e.radius,mesh:i,ring:r})}}createRing(t,e,n,i,r){const a=[];for(let o=0;o<=96;o+=1){const l=o/96*Math.PI*2;a.push(new A(t+Math.cos(l)*n,2,e+Math.sin(l)*n))}return new Di(new me().setFromPoints(a),new ci({color:i,transparent:!0,opacity:r}))}createShip(t){const e=Je[t.shipClass],n=t.team===Ct?e.glowColor:16740427,i=new li;i.name=t.id,i.position.copy(this.clampWorldPosition(new A(t.x,34,t.y))),i.rotation.y=-t.rotation;const r=this.createHull(t.shipClass,e.width,e.height,e.hullColor);i.add(r);const a=new Uo(n,t.shipClass==="flagship"?2.4:1.1,e.width*4);a.position.set(-e.width*.48,0,0),i.add(a);const o=new ce(new Be(Math.max(4,e.height*.13),12,8),new Ce({color:n,transparent:!0,opacity:.85}));o.position.set(-e.width*.55,0,0),i.add(o);const l=new ce(new Ia(Math.max(5,e.height*.18),e.width*.42,16,1,!0),new Ce({color:n,transparent:!0,opacity:t.shipClass==="flagship"?.2:.28,depthWrite:!1,side:qe}));l.rotation.z=Math.PI/2,l.position.set(-e.width*.74,0,0),i.add(l),i.traverse(g=>{g.userData.shipId=t.id});const c=document.createElement("div");c.textContent=e.label,c.style.position="absolute",c.style.color=t.team===Ct?"#b9f5ff":"#ffc4b5",c.style.font=`${t.shipClass==="flagship"?15:12}px Arial, sans-serif`,c.style.textShadow="0 1px 8px #000",c.style.transform="translate(-50%, 0)",c.className="ship-label",c.innerHTML=`
      <span>${e.label}</span>
      <span class="ship-bars">
        <span class="ship-bar ship-bar-shield"><span></span></span>
        <span class="ship-bar ship-bar-hull"><span></span></span>
      </span>
      <span class="ship-hangar-status"></span>
    `,this.labelLayer.append(c);const h=c.querySelector(".ship-bar-shield span"),u=c.querySelector(".ship-bar-hull span"),d=this.getShipBalance(t.team,t.shipClass);this.scene.add(i);const p={id:t.id,team:t.team,shipClass:t.shipClass,group:i,label:c,healthBar:u,shieldBar:h,hull:d.hull,maxHull:d.hull,shield:d.shield,maxShield:d.shield,baseShieldRegen:d.shieldRegen,shieldRegen:d.shieldRegen,baseSpeed:d.speed,speed:d.speed,attackRange:d.range,baseDamage:d.damage,damage:d.damage,damageType:d.damageType,baseCooldown:d.cooldown,cooldown:d.cooldown,cooldownRemaining:Qt.randFloat(0,d.cooldown),currentOrder:t.team===Zt?"hold":void 0,hangarLaunchCooldown:this.shipClassUsesSubsystems(t.shipClass)?Qt.randFloat(12,18):0,hangarLaunchIndex:0,launchedBy:t.launchedBy,subsystems:[],isDead:!1};this.shipClassUsesSubsystems(t.shipClass)&&(p.subsystems=this.createSubsystems(p)),this.updateBars(p),this.ships.push(p)}shipClassUsesSubsystems(t){return["flagship","heavyCapital","cruiser"].includes(t)}createSubsystems(t){return({flagship:[{type:"bridge",name:"Command Core",x:48,z:0,color:16740427,health:460},{type:"shield",name:"Shield Generator",x:6,z:-24,color:6679295,health:420},{type:"engine",name:"Engine Array",x:-68,z:0,color:16765804,health:390},{type:"mainCannon",name:"Main Cannon",x:72,z:0,color:16751488,health:420},{type:"hangar",name:"Hangar Bay",x:-8,z:25,color:11898111,health:380},{type:"repair",name:"Repair Bay",x:-35,z:-22,color:9368225,health:360},{type:"pointDefense",name:"Point Defence",x:22,z:24,color:15858687,health:340},{type:"sensors",name:"Sensor Array",x:34,z:-27,color:16773311,health:300}],heavyCapital:[{type:"shield",name:"Shield Generator",x:0,z:-18,color:6679295,health:320},{type:"engine",name:"Engine Array",x:-48,z:0,color:16765804,health:300},{type:"mainCannon",name:"Heavy Cannon",x:46,z:0,color:16751488,health:330},{type:"hangar",name:"Aux Hangar",x:-12,z:20,color:11898111,health:280},{type:"pointDefense",name:"Point Defence",x:18,z:18,color:15858687,health:260},{type:"bridge",name:"Command Core",x:24,z:-15,color:16740427,health:310}],cruiser:[{type:"shield",name:"Shield Relay",x:0,z:-13,color:6679295,health:190},{type:"engine",name:"Engine System",x:-34,z:0,color:16765804,health:210},{type:"mainCannon",name:"Weapon Battery",x:34,z:0,color:16751488,health:220},{type:"pointDefense",name:"Point Defence",x:12,z:13,color:15858687,health:190}]}[t.shipClass]??[]).map(i=>{const r=new ce(new Be(t.shipClass==="cruiser"?5:7,12,8),new Ce({color:i.color,transparent:!0,opacity:.9}));r.position.set(i.x,16,i.z),r.userData.shipId=t.id,r.userData.subsystemId=`${t.id}-${i.type}`,t.group.add(r);const a=document.createElement("div");a.className="subsystem-label",a.innerHTML=`
        <span>${i.name}</span>
        <span class="subsystem-bar"><span></span></span>
      `,this.labelLayer.append(a);const o=a.querySelector(".subsystem-bar span");return{id:`${t.id}-${i.type}`,type:i.type,name:i.name,parent:t,mesh:r,damageMarker:void 0,label:a,healthBar:o,health:i.health,maxHealth:i.health,lastDamagedAt:0,disabledUntil:0,isDestroyed:!1}})}getShipBalance(t,e){const i={...bg[e]};if(t!==Ct)return i;for(const r of ai)this.profile.purchasedUpgrades.includes(r.id)&&(r.target!==e&&!(r.target==="economy"&&r.stat!=="salvageIncome")||(r.stat==="hull"?i.hull*=r.multiplier:r.stat==="shield"?i.shield*=r.multiplier:r.stat==="damage"?i.damage*=r.multiplier:r.stat==="range"&&(i.range*=r.multiplier)));return i}applyPersistentUpgradeModifiers(){this.salvageMultiplier=1;for(const t of ai)this.profile.purchasedUpgrades.includes(t.id)&&t.stat==="salvageIncome"&&(this.salvageMultiplier*=t.multiplier)}createHull(t,e,n,i){const r=new kl;r.moveTo(e*.55,0),r.lineTo(e*.18,-n*.5),r.lineTo(-e*.48,-n*.34),r.lineTo(-e*.34,0),r.lineTo(-e*.48,n*.34),r.lineTo(e*.18,n*.5),r.lineTo(e*.55,0),t==="fighter"&&(r.autoClose=!0);const a=new Fa(r,{depth:t==="flagship"?26:Math.max(8,n*.55),bevelEnabled:!0,bevelSize:t==="flagship"?6:3,bevelThickness:t==="flagship"?5:2,bevelSegments:1});return a.center(),a.rotateX(Math.PI/2),new ce(a,new Es({color:i,roughness:.48,metalness:.38,emissive:i,emissiveIntensity:.04}))}bindEvents(){window.addEventListener("resize",()=>this.resize()),this.canvas.addEventListener("pointerdown",t=>this.onPointerDown(t)),this.canvas.addEventListener("pointermove",t=>this.onPointerMove(t)),this.canvas.addEventListener("pointerup",t=>this.onPointerUp(t)),this.canvas.addEventListener("pointercancel",()=>{this.cancelLongPress(),this.resetPointerState()}),this.canvas.addEventListener("wheel",t=>{t.preventDefault(),this.zoom(t.deltaY>0?1.08:.92)},{passive:!1}),this.canvas.addEventListener("touchmove",t=>this.onTouchMove(t),{passive:!1}),this.canvas.addEventListener("touchend",()=>{this.pinchDistance=void 0})}onPointerDown(t){this.isBattleStarted&&(this.hideSubsystemWheel(),this.isDragging=!0,this.dragStarted=!1,this.longPressHandled=!1,this.isBoxSelecting=this.boxSelectArmed,this.dragStartPointer.set(t.clientX,t.clientY),this.previousPointer.set(t.clientX,t.clientY),this.canvas.setPointerCapture(t.pointerId),this.isBoxSelecting?(this.updateSelectionBox(t.clientX,t.clientY),this.selectionBox.classList.add("is-visible")):this.scheduleLongPress(t.clientX,t.clientY))}onPointerMove(t){if(!this.isDragging||!this.isBattleStarted)return;const e=t.clientX-this.previousPointer.x,n=t.clientY-this.previousPointer.y;if(Math.hypot(e,n)>2){if(this.dragStarted=!0,this.cancelLongPress(),this.isBoxSelecting){this.updateSelectionBox(t.clientX,t.clientY),this.previousPointer.set(t.clientX,t.clientY);return}this.stopFollowingFlagship(),this.camera.position.x-=e*2.2,this.camera.position.z-=n*2.2,this.clampCamera()}this.previousPointer.set(t.clientX,t.clientY)}onPointerUp(t){if(this.isBattleStarted){if(this.isDragging=!1,this.cancelLongPress(),this.canvas.releasePointerCapture(t.pointerId),this.longPressHandled){this.longPressHandled=!1;return}if(this.isBoxSelecting){this.finishBoxSelection(t.clientX,t.clientY),this.isBoxSelecting=!1,this.boxSelectArmed=!1,this.commandTray.classList.remove("is-box-armed"),this.selectionBox.classList.remove("is-visible");return}this.dragStarted||this.handleTap(t.clientX,t.clientY)}}onTouchMove(t){if(t.touches.length!==2||!this.isBattleStarted)return;t.preventDefault();const[e,n]=Array.from(t.touches),i=Math.hypot(e.clientX-n.clientX,e.clientY-n.clientY);this.pinchDistance&&this.zoom(i>this.pinchDistance?.97:1.03),this.pinchDistance=i}onMinimapPointer(t){if(!this.isBattleStarted||this.battleEnded)return;t.preventDefault(),t.stopPropagation();const e=this.minimapCanvas.getBoundingClientRect(),n=Qt.clamp((t.clientX-e.left)/e.width,0,1),i=Qt.clamp((t.clientY-e.top)/e.height,0,1);this.camera.position.x=n*Ze,this.camera.position.z=i*hn+360,this.stopFollowingFlagship(),this.clampCamera(),this.audio.play("move",.55),this.hudStatus.textContent="Camera repositioned"}scheduleLongPress(t,e){this.cancelLongPress(),this.longPressTimer=window.setTimeout(()=>{const n=this.findShipAtScreen(t,e);!n||n.team!==Zt||n.shipClass!=="flagship"||n.isDead||(this.longPressHandled=!0,this.isDragging=!1,this.dragStarted=!0,this.openSubsystemWheel(n,t,e))},560)}cancelLongPress(){this.longPressTimer!==void 0&&(window.clearTimeout(this.longPressTimer),this.longPressTimer=void 0)}findShipAtScreen(t,e){this.setPointerNdc(t,e),this.raycaster.setFromCamera(this.pointerNdc,this.camera);const i=this.raycaster.intersectObjects(this.scene.children,!0).map(r=>r.object.userData.shipId).find(Boolean);return this.ships.find(r=>r.id===i)}openSubsystemWheel(t,e,n){if(this.getSelectedShips().length===0){this.audio.play("error"),this.announce("Select ships before subsystem targeting");return}const r=t.subsystems.filter(o=>!o.isDestroyed);if(r.length===0){this.audio.play("error"),this.announce("Enemy flagship systems already destroyed");return}this.subsystemWheel.innerHTML=`
      <div class="subsystem-wheel-core">Systems</div>
      ${r.map((o,l)=>{const c=l/Math.max(1,r.length)*Math.PI*2-Math.PI/2,h=92,u=Math.cos(c)*h,d=Math.sin(c)*h;return`<button type="button" data-subsystem-id="${o.id}" style="--wheel-x: ${u}px; --wheel-y: ${d}px">${o.name}</button>`}).join("")}
    `;const a=this.shell.getBoundingClientRect();this.subsystemWheel.style.left=`${Qt.clamp(e-a.left,136,a.width-136)}px`,this.subsystemWheel.style.top=`${Qt.clamp(n-a.top,136,a.height-136)}px`,this.subsystemWheel.classList.add("is-visible"),this.audio.play("subsystem"),this.hudStatus.textContent="Choose subsystem"}hideSubsystemWheel(){this.subsystemWheel.classList.remove("is-visible")}handleTap(t,e){this.setPointerNdc(t,e),this.raycaster.setFromCamera(this.pointerNdc,this.camera);const n=this.raycaster.intersectObjects(this.scene.children,!0),i=n.map(c=>c.object.userData.subsystemId).find(Boolean),r=this.ships.flatMap(c=>c.subsystems).find(c=>c.id===i),a=n.map(c=>c.object.userData.shipId).find(Boolean),o=this.ships.find(c=>c.id===a),l=this.getSelectedShips();if(r&&r.parent.team===Zt&&l.length>0&&!r.isDestroyed){this.issueAttackCommand(r,l),this.hudStatus.textContent=`Target: ${r.name}`,this.announce(`Subsystem targeted: ${r.name}`),this.completeObjective("subsystem");return}if((o==null?void 0:o.team)===Ct&&!o.isDead){if(this.isDoubleTapOnShipClass(o.shipClass)){this.selectVisibleShipClass(o.shipClass);return}this.selectShips([o],`Selected: ${Je[o.shipClass].label}`);return}if((o==null?void 0:o.team)===Zt&&l.length>0&&!o.isDead){this.issueAttackCommand(o,l),this.hudStatus.textContent=`Attack: ${Je[o.shipClass].label}`,this.completeObjective("attack");return}if(l.length>0){const c=new A;this.raycaster.ray.intersectPlane(this.groundPlane,c),this.issueMoveCommand(this.clampWorldPosition(c),l),this.hudStatus.textContent=`Move: ${l.length} unit${l.length===1?"":"s"}`}}selectShips(t,e){this.clearSelection();for(const n of t)n.team!==Ct||n.isDead||(this.selectedShips.add(n),this.showSelectionRing(n));this.updateSelectedSummary(),this.hudStatus.textContent=e??`Selected: ${this.selectedShips.size} unit${this.selectedShips.size===1?"":"s"}`,this.selectedShips.size>0&&(this.audio.play("select"),this.completeObjective("select"))}isDoubleTapOnShipClass(t){const e=performance.now(),n=this.lastTapShipClass===t&&e-this.lastTapAt<420;return this.lastTapShipClass=t,this.lastTapAt=e,n}selectVisibleShipClass(t){const e=this.ships.filter(n=>n.team===Ct&&!n.isDead&&n.shipClass===t&&this.isWorldPositionVisible(n.group.position));this.selectShips(e,`Selected visible ${Je[t].label}: ${e.length}`),this.announce(`Selected visible ${Je[t].label}s`)}isWorldPositionVisible(t){const e=t.clone().project(this.camera);return e.z<1&&e.x>=-1&&e.x<=1&&e.y>=-1&&e.y<=1}showSelectionRing(t){var a;(a=this.selectionRings.get(t))==null||a.removeFromParent();const e=Je[t.shipClass],n=Math.max(e.width,e.height)*.68,i=[];for(let o=0;o<=96;o+=1){const l=o/96*Math.PI*2;i.push(new A(Math.cos(l)*n,3,Math.sin(l)*n))}const r=new Di(new me().setFromPoints(i),new ci({color:7531263,transparent:!0,opacity:.9}));r.position.copy(t.group.position),r.position.y=0,this.selectionRings.set(t,r),this.scene.add(r)}clearSelection(){for(const t of this.selectionRings.values())t.removeFromParent();this.selectionRings.clear(),this.selectedShips.clear()}getSelectedShips(){return[...this.selectedShips].filter(t=>!t.isDead)}updateSelectedSummary(){const t=this.getSelectedShips();if(t.length===0){this.selectedSummary.innerHTML='<span class="selection-empty">No units selected</span>';return}const e=t.reduce((l,c)=>{const h=Je[c.shipClass].label;return l[h]=(l[h]??0)+1,l},{}),n=Math.round(t.reduce((l,c)=>l+c.hull/c.maxHull*100,0)/t.length),i=Math.round(t.reduce((l,c)=>l+c.shield/c.maxShield*100,0)/t.length),r=t.reduce((l,c)=>{const h=c.currentOrder??(c.target?"attack":c.destination?"move":"idle"),u=h.charAt(0).toUpperCase()+h.slice(1);return l[u]=(l[u]??0)+1,l},{}),a=Object.entries(e).map(([l,c])=>`${c} ${l}`).join(" | "),o=Object.entries(r).map(([l,c])=>`${l} ${c}`).join(" / ");this.selectedSummary.innerHTML=`
      <div class="selection-main">${a}</div>
      <div class="selection-meta">
        <span>Hull ${n}%</span>
        <span>Shield ${i}%</span>
        <span>Orders ${o}</span>
      </div>
    `}selectGroup(t){const n={all:i=>i.team===Ct,capital:i=>i.team===Ct&&["flagship","heavyCapital"].includes(i.shipClass),cruiser:i=>i.team===Ct&&i.shipClass==="cruiser",strike:i=>i.team===Ct&&["fighter","bomber"].includes(i.shipClass)}[t];n&&this.selectShips(this.ships.filter(i=>n(i)&&!i.isDead))}targetNextEnemySubsystem(){const t=this.getSelectedShips();if(t.length===0){this.hudStatus.textContent="Select ships first",this.announce("Select ships before subsystem targeting"),this.audio.play("error");return}const e=this.getFlagship(Zt);if(!e){this.hudStatus.textContent="No enemy flagship";return}const i=["shield","pointDefense","hangar","mainCannon","engine","sensors","repair","bridge"].map(r=>e.subsystems.find(a=>a.type===r&&!a.isDestroyed)).find(r=>!!r);if(!i){this.hudStatus.textContent="All systems destroyed",this.announce("Enemy flagship systems already destroyed"),this.audio.play("error");return}this.issueAttackCommand(i,t),this.hudStatus.textContent=`Target: ${i.name}`,this.announce(`Subsystem targeted: ${i.name}`),this.completeObjective("subsystem")}issueMoveCommand(t,e,n){this.clearCommandMarkers(),this.audio.play("move"),this.completeObjective("move");const i=this.clampWorldPosition(t),r=44,a=Math.ceil(Math.sqrt(e.length));e.forEach((o,l)=>{const c=l%a,h=Math.floor(l/a),u=new A((c-(a-1)/2)*r,0,(h-Math.floor((e.length-1)/a)/2)*r);o.destination=this.clampWorldPosition(i.clone().add(u)),o.target=void 0,o.currentOrder=n,this.createCommandMarker(o.destination,7531263)}),this.updateSelectedSummary()}issueAttackCommand(t,e){this.clearCommandMarkers(),this.audio.play(this.isSubsystem(t)?"subsystem":"attack"),this.completeObjective(this.isSubsystem(t)?"subsystem":"attack");const n=this.getTargetPosition(t);e.forEach((i,r)=>{i.target=t,i.currentOrder="attack";const a=r/Math.max(1,e.length)*Math.PI*2,o=i.attackRange*.72;i.destination=this.clampWorldPosition(n.clone().add(new A(Math.cos(a)*o,0,Math.sin(a)*o))),this.createCommandLine(i.group.position,n,16765804)}),this.createAttackReticle(t),this.updateSelectedSummary()}guardFlagship(){const t=this.getSelectedShips(),e=this.getFlagship(Ct);if(t.length===0||!e){this.audio.play("error"),this.announce(t.length===0?"Select ships before guard order":"No flagship to guard");return}this.clearCommandMarkers(),t.forEach((n,i)=>{const r=i/Math.max(1,t.length)*Math.PI*2,a=e===n?0:190;n.currentOrder="hold",n.target=void 0,n.destination=this.clampWorldPosition(e.group.position.clone().add(new A(Math.cos(r)*a,0,Math.sin(r)*a))),this.createCommandMarker(n.destination,9368225)}),this.audio.play("move"),this.hudStatus.textContent="Guard flagship",this.announce(`Guard order assigned to ${t.length} ship${t.length===1?"":"s"}`),this.updateSelectedSummary()}retreatSelectedShips(){var i;const t=this.getSelectedShips();if(t.length===0){this.audio.play("error"),this.announce("Select ships before retreat order");return}const e=this.objectiveNodes.filter(r=>r.kind==="repair"&&r.owner===Ct).sort((r,a)=>r.position.distanceTo(t[0].group.position)-a.position.distanceTo(t[0].group.position))[0],n=(e==null?void 0:e.position)??((i=this.getFlagship(Ct))==null?void 0:i.group.position);if(!n){this.audio.play("error"),this.announce("No retreat point available");return}this.issueMoveCommand(n,t,"repair"),this.hudStatus.textContent=e?"Retreat to repair beacon":"Retreat to flagship",this.announce(`Retreat order assigned to ${t.length} ship${t.length===1?"":"s"}`)}createCommandMarker(t,e){const n=this.createRing(t.x,t.z,22,e,.9);n.position.y=5,this.scene.add(n),this.commandMarkers.push(n)}createCommandLine(t,e,n){const i=new Di(new me().setFromPoints([new A(t.x,6,t.z),new A(e.x,6,e.z)]),new ci({color:n,transparent:!0,opacity:.65}));this.scene.add(i),this.commandMarkers.push(i)}createAttackReticle(t){const e=this.getTargetPosition(t),n=this.createRing(e.x,e.z,86,16765804,.9);n.position.y=8,this.scene.add(n),this.commandMarkers.push(n)}clearCommandMarkers(){for(const t of this.commandMarkers)t.removeFromParent();this.commandMarkers.length=0}updateSelectionBox(t,e){const n=Math.min(this.dragStartPointer.x,t),i=Math.min(this.dragStartPointer.y,e),r=Math.abs(t-this.dragStartPointer.x),a=Math.abs(e-this.dragStartPointer.y);this.selectionBox.style.left=`${n}px`,this.selectionBox.style.top=`${i}px`,this.selectionBox.style.width=`${r}px`,this.selectionBox.style.height=`${a}px`}finishBoxSelection(t,e){const n=this.canvas.getBoundingClientRect(),i=Math.min(this.dragStartPointer.x,t)-n.left,r=Math.max(this.dragStartPointer.x,t)-n.left,a=Math.min(this.dragStartPointer.y,e)-n.top,o=Math.max(this.dragStartPointer.y,e)-n.top,l=this.ships.filter(c=>{if(c.team!==Ct||c.isDead)return!1;const h=this.worldToScreen(c.group.position);return h.x>=i&&h.x<=r&&h.y>=a&&h.y<=o});this.selectShips(l,l.length>0?`Box selected: ${l.length}`:"No units in box")}worldToScreen(t){const e=this.canvas.getBoundingClientRect(),n=t.clone().project(this.camera);return new lt((n.x*.5+.5)*e.width,(-n.y*.5+.5)*e.height)}setPointerNdc(t,e){const n=this.canvas.getBoundingClientRect();this.pointerNdc.x=(t-n.left)/n.width*2-1,this.pointerNdc.y=-((e-n.top)/n.height*2-1)}updateShips(t){for(const e of this.ships){if(e.isDead||!e.destination)continue;const n=e.destination.clone();n.y=e.group.position.y;const i=n.sub(e.group.position),r=i.length();if(r<8){e.destination=void 0;continue}const a=i.normalize();e.group.position.addScaledVector(a,Math.min(r,e.speed*t)),e.group.position.copy(this.clampWorldPosition(e.group.position)),e.group.rotation.y=Math.atan2(-a.z,a.x);const o=this.selectionRings.get(e);o&&o.position.set(e.group.position.x,0,e.group.position.z)}}updateAI(t){if(this.aiTimer+=t,this.aiTimer<3.4)return;this.aiTimer=0;const e=this.getFlagship(Zt),n=this.getFlagship(Ct);if(!e||!n)return;const i=this.ships.find(l=>l.team===Zt&&!l.isDead&&l.shipClass!=="flagship"&&l.hull/l.maxHull<.34);if(n.hull/n.maxHull<.38||this.battleElapsed>85){this.setAIState("Final Assault"),this.commandEnemyAttack(n,this.getEnemyShips());return}if(_g(e,this.enemyEmergencyUsed)){this.useEnemyEmergencyAbility(e,n);return}if(e.hull/e.maxHull<.5||this.playerPressureNear(e)){this.setAIState("Defend Flagship"),this.commandEnemyAttack(this.findNearestPlayer(e)??n,this.getEnemyShips());return}if(this.commandEnemyFightersAgainstBombers(e)){this.setAIState("Intercept Bombers");return}if(i){const l=this.findClosestObjective(i.group.position,"repair");if(l){this.setAIState("Retreat and Repair"),this.commandEnemyMove(i,l.position,"repair");return}}if(this.battleElapsed<20){this.setAIState("Opening"),this.sendEnemyCapturers();return}if(this.objectiveNodes.filter(l=>l.kind==="salvage"&&l.owner===Zt).length<2&&this.battleElapsed<55){this.setAIState("Resource Control"),this.sendEnemyCapturers();return}this.setAIState("Bomber Strike");const a=this.getEnemyShips().filter(l=>l.shipClass==="bomber"||l.shipClass==="fighter"),o=this.getEnemyShips().filter(l=>l.shipClass==="cruiser");this.commandEnemyAttack(n,[...a,...o])}updateSurvival(t){this.battleMode!=="survival"||this.survivalWave>=this.survivalMaxWaves||(this.survivalTimer+=t,this.survivalNextWaveIn=Math.max(0,this.survivalNextWaveIn-t),!(this.survivalNextWaveIn>0)&&(this.spawnSurvivalWave(),this.survivalNextWaveIn=Math.max(18,34-this.survivalWave*2),this.updateResourcePanel()))}spawnSurvivalWave(){const t=this.getFlagship(Ct);if(!t)return;this.survivalWave+=1;const e=Mg(this.survivalWave);this.salvage+=e.salvageReward,this.commandPoints+=2,e.ships.forEach((n,i)=>{const r=i-(e.ships.length-1)/2,a=Qt.clamp(t.group.position.z+r*110,360,hn-280),o=Ze-120+i%2*80,l=this.spawnEnemyReinforcement(n,o,a);l.target=t,l.currentOrder="attack",l.destination=this.clampWorldPosition(t.group.position.clone().add(new A(260+i*18,0,r*70)))}),this.createAbilityPulse(new A(Ze-120,0,t.group.position.z),16740427,170),this.audio.play("start"),this.hudStatus.textContent=`Wave ${this.survivalWave}/${this.survivalMaxWaves}`,this.announce(`Survival wave ${this.survivalWave}: ${e.ships.length} contacts inbound`)}updateHangarLaunches(t){for(const e of this.ships){if(e.isDead)continue;const n=this.getHangarSquadronCap(e);if(n<=0)continue;e.hangarLaunchCooldown=Math.max(0,e.hangarLaunchCooldown-t);const i=this.getActiveSquadronCount(e);i>=n||e.hangarLaunchCooldown>0||this.launchHangarSquadron(e,i)}}getHangarSquadronCap(t){const e=t.subsystems.find(n=>n.type==="hangar");return!e||e.isDestroyed?0:t.shipClass==="flagship"?3:t.shipClass==="heavyCapital"?4:0}getActiveSquadronCount(t){return this.ships.filter(e=>e.launchedBy===t.id&&!e.isDead).length}getHangarStatusText(t){if(!t.subsystems.some(r=>r.type==="hangar"))return"";const n=this.getHangarSquadronCap(t),i=this.getActiveSquadronCount(t);return n<=0?"Hangar offline":i>=n?`Squadrons ${i}/${n}`:`Squadrons ${i}/${n} | Launch ${Math.ceil(t.hangarLaunchCooldown)}s`}launchHangarSquadron(t,e){const n=t.hangarLaunchIndex%3===2?"bomber":"fighter",i=new A(t.team===Ct?-96:96,0,(e-1.5)*44),r=this.clampWorldPosition(t.group.position.clone().add(i)),a=t.team===Ct?++this.reinforcementIndex:++this.enemyReinforcementIndex;this.createShip({id:`${t.team}-hangar-${t.id}-${a}`,team:t.team,shipClass:n,x:r.x,y:r.z,rotation:t.team===Ct?0:Math.PI,launchedBy:t.id});const o=this.ships[this.ships.length-1];if(o.currentOrder="attack",o.target=this.findNearestEnemy(o),o.target){const l=this.getTargetPosition(o.target),c=l.clone().sub(o.group.position).normalize();o.destination=this.clampWorldPosition(l.clone().addScaledVector(c,-o.attackRange*.76))}t.hangarLaunchIndex+=1,t.hangarLaunchCooldown=n==="bomber"?24:16,this.createAbilityPulse(t.group.position,t.team===Ct?6679295:16740427,86),t.team===Ct&&this.announce(`${Je[t.shipClass].label} launched ${Je[n].label} squadron`)}spawnEnemyReinforcement(t,e,n){return this.enemyReinforcementIndex+=1,this.createShip({id:`enemy-wave-${this.enemyReinforcementIndex}`,team:Zt,shipClass:t,x:e,y:n,rotation:Math.PI}),this.ships[this.ships.length-1]}setAIState(t){this.aiState!==t&&(this.aiState=t,this.announce(`Enemy AI: ${t}`),this.updateResourcePanel())}sendEnemyCapturers(){const t=this.objectiveNodes.filter(r=>r.kind==="salvage");this.getEnemyShips().filter(r=>["fighter","bomber","cruiser"].includes(r.shipClass)).forEach((r,a)=>{const o=t[a%t.length];this.commandEnemyMove(r,o.position,"capture")});const n=this.getEnemyShips().filter(r=>r.shipClass==="flagship"||r.shipClass==="heavyCapital"),i=new A(2260,0,950);n.forEach((r,a)=>{this.commandEnemyMove(r,i.clone().add(new A(a*90,0,a%2===0?-80:80)),"hold")})}useEnemyEmergencyAbility(t,e){this.enemyEmergencyUsed=!0,this.setAIState("Defend Flagship"),t.shield=Math.min(t.maxShield,t.shield+t.maxShield*.62),t.hull=Math.min(t.maxHull,t.hull+t.maxHull*.08),t.cooldownRemaining=Math.max(t.cooldownRemaining,1.2),this.updateBars(t),this.createAbilityPulse(t.group.position,16751488,180),this.createFloatingText(t.group.position.clone().add(new A(0,88,0)),"+emergency shields","shield"),this.announce("Enemy flagship emergency shields online"),this.audio.play("subsystem");const n=this.getEnemyShips().filter(i=>i!==t);n.forEach((i,r)=>{const a=r/Math.max(1,n.length)*Math.PI*2;i.currentOrder="hold",i.target=this.findNearestPlayer(t)??e,i.destination=this.clampWorldPosition(t.group.position.clone().add(new A(Math.cos(a)*240,0,Math.sin(a)*240)))})}commandEnemyFightersAgainstBombers(t){const e=this.ships.filter(a=>a.team===Ct&&a.shipClass==="bomber"&&!a.isDead),n=this.getEnemyShips().filter(a=>a.shipClass==="fighter");if(e.length===0||n.length===0)return!1;const i=e.filter(a=>a.group.position.distanceTo(t.group.position)<980||a.target===t),r=i.length>0?i:e;return n.forEach((a,o)=>{const l=r.slice().sort((h,u)=>a.group.position.distanceTo(h.group.position)-a.group.position.distanceTo(u.group.position))[o%r.length];a.currentOrder="attack",a.target=l;const c=l.group.position.clone().sub(a.group.position).normalize();a.destination=this.clampWorldPosition(l.group.position.clone().addScaledVector(c,-a.attackRange*.58))}),!0}commandEnemyMove(t,e,n){t.isDead||(t.currentOrder=n,t.target=void 0,t.destination=this.clampWorldPosition(e),t.destination.y=t.group.position.y)}commandEnemyAttack(t,e){e.forEach((n,i)=>{if(n.isDead)return;n.currentOrder="attack",n.target=t;const r=i/Math.max(1,e.length)*Math.PI*2;n.destination=this.clampWorldPosition(t.group.position.clone().add(new A(Math.cos(r)*n.attackRange*.65,0,Math.sin(r)*n.attackRange*.65)))})}getTargetPosition(t){return this.isSubsystem(t)?t.mesh.getWorldPosition(new A):t.group.position.clone()}getTargetTeam(t){return this.isSubsystem(t)?t.parent.team:t.team}isTargetDestroyed(t){return this.isSubsystem(t)?t.isDestroyed||t.parent.isDead:t.isDead}isSubsystem(t){return"parent"in t}getEnemyShips(){return this.ships.filter(t=>t.team===Zt&&!t.isDead)}getFlagship(t){return this.ships.find(e=>e.team===t&&e.shipClass==="flagship"&&!e.isDead)}findNearestPlayer(t){return this.findNearestShip(t,Ct)}findNearestShip(t,e){let n,i=Number.POSITIVE_INFINITY;for(const r of this.ships){if(r.isDead||r.team!==e)continue;const a=t.group.position.distanceTo(r.group.position);a<i&&(n=r,i=a)}return n}findEnemyInRange(t){return this.ships.find(e=>!e.isDead&&e.team!==t.team&&t.group.position.distanceTo(e.group.position)<=this.getEffectiveRange(t))}findClosestObjective(t,e){return this.objectiveNodes.filter(n=>n.kind===e).sort((n,i)=>n.position.distanceTo(t)-i.position.distanceTo(t))[0]}playerPressureNear(t){return this.ships.some(e=>e.team===Ct&&!e.isDead&&e.group.position.distanceTo(t.group.position)<520)}isInsideNebula(t){return this.nebulaZones.some(e=>t.distanceTo(e.position)<=e.radius)}isSubsystemDestroyed(t,e){return t.subsystems.some(n=>n.type===e&&n.isDestroyed)}isSubsystemOffline(t,e){return t.subsystems.some(n=>n.type===e&&(n.isDestroyed||n.disabledUntil>this.battleElapsed))}getEffectiveRange(t){const e=this.isSubsystemOffline(t,"sensors")?.72:1,n=this.isInsideNebula(t.group.position)?.72:1;return t.attackRange*e*n}getEffectiveShieldRegen(t){const e=this.isInsideNebula(t.group.position)?.35:1;return t.shieldRegen*e}recalculateSubsystemStats(t){t.speed=t.baseSpeed*(this.isSubsystemOffline(t,"engine")?.3:1),t.damage=t.baseDamage*(this.isSubsystemOffline(t,"mainCannon")?.45:1),t.cooldown=t.baseCooldown,this.isSubsystemOffline(t,"mainCannon")&&(t.cooldown*=1.45),this.isSubsystemOffline(t,"bridge")&&(t.cooldown*=1.4),t.shieldRegen=t.baseShieldRegen,this.isSubsystemOffline(t,"shield")?t.shieldRegen=0:this.isSubsystemOffline(t,"repair")&&(t.shieldRegen*=.35)}updateCombat(t){for(const e of this.ships){if(e.isDead)continue;if(e.shield=Math.min(e.maxShield,e.shield+this.getEffectiveShieldRegen(e)*t),e.cooldownRemaining=Math.max(0,e.cooldownRemaining-t),e.team===Zt&&(e.currentOrder==="capture"||e.currentOrder==="repair"||e.currentOrder==="hold")){const a=this.findEnemyInRange(e);if(!a)continue;e.target=a}if((!e.target||this.isTargetDestroyed(e.target)||this.getTargetTeam(e.target)===e.team)&&(e.target=this.findNearestEnemy(e)),!e.target)continue;const n=this.getTargetPosition(e.target),i=e.group.position.distanceTo(n),r=this.getEffectiveRange(e);if(i>r){if(e.team===Zt&&e.currentOrder==="attack"){const a=n.clone().sub(e.group.position).normalize();e.destination=this.clampWorldPosition(n.clone().addScaledVector(a,-r*.78))}continue}e.destination=void 0,e.group.rotation.y=Math.atan2(-(n.z-e.group.position.z),n.x-e.group.position.x),e.cooldownRemaining<=0&&(this.fireProjectile(e,e.target),e.cooldownRemaining=e.cooldown)}this.updateFlagshipPanel()}findNearestEnemy(t){let e,n=Number.POSITIVE_INFINITY;for(const i of this.ships){if(i.isDead||i.team===t.team)continue;const r=t.group.position.distanceTo(i.group.position),a=i.shipClass==="flagship"?.82:1,o=r*a;o<n&&(e=i,n=o)}return e}fireProjectile(t,e){const n=this.lowQualityMode?70:120;this.projectiles.length>=n&&this.removeProjectile(0),this.audio.play("attack",t.team===Ct?.75:.42);const i=t.team===Ct?6679295:16740427,r=t.shipClass==="bomber"?new Be(6,12,8):new La(3,18,4,8),a=new Ce({color:i,transparent:!0,opacity:.95}),o=new ce(r,a);o.position.copy(t.group.position),o.position.y+=8,o.lookAt(this.getTargetPosition(e)),this.scene.add(o),this.createMuzzleFlash(t.group.position,i);const l=this.lowQualityMode?void 0:new Di(new me().setFromPoints([o.position.clone(),o.position.clone()]),new ci({color:i,transparent:!0,opacity:t.shipClass==="bomber"?.7:.46}));l&&this.scene.add(l),this.projectiles.push({mesh:o,trail:l,team:t.team,target:e,damage:t.damage,damageType:t.damageType,sourceShipClass:t.shipClass,speed:t.shipClass==="bomber"?260:520,previousPosition:o.position.clone()})}updateProjectiles(t){for(let e=this.projectiles.length-1;e>=0;e-=1){const n=this.projectiles[e];if(this.isTargetDestroyed(n.target)){this.removeProjectile(e);continue}const i=this.getTargetPosition(n.target);i.y+=8;const r=i.sub(n.mesh.position),a=r.length();if(a<16){this.applyDamage(n.target,n.damage,n.team,n.damageType,n.sourceShipClass),this.audio.play("impact",n.team===Ct?.75:.5),this.createImpact(n.mesh.position,n.team),this.removeProjectile(e);continue}n.previousPosition.copy(n.mesh.position),n.mesh.position.addScaledVector(r.normalize(),Math.min(a,n.speed*t)),n.mesh.lookAt(this.getTargetPosition(n.target)),this.updateProjectileTrail(n)}}updateEconomy(t){this.economyTimer+=t;for(const e of this.objectiveNodes){const n=this.hasTeamInRadius(Ct,e.position,e.radius),i=this.hasTeamInRadius(Zt,e.position,e.radius);if(n!==i){const r=e.owner;e.owner=n?Ct:Zt,this.updateObjectiveVisual(e),r!==e.owner&&(this.announce(`${e.owner===Ct?"Player":"Enemy"} captured ${e.kind==="salvage"?"salvage node":"repair beacon"}`),e.owner===Ct&&(this.battleStats.nodesCaptured+=1,this.completeObjective("capture")))}e.kind==="repair"&&e.owner&&this.repairShipsNear(e,t)}if(this.economyTimer>=1){const e=this.objectiveNodes.filter(r=>r.kind==="salvage"&&r.owner===Ct).length,n=(4+e*8)*this.salvageMultiplier;this.salvage+=n,this.commandPoints+=1;const i=this.getFlagship(Ct);i&&(e>0||Math.floor(this.battleElapsed)%5===0)&&this.createFloatingText(i.group.position.clone().add(new A(0,72,0)),`+${Math.floor(n)} salvage`,"income"),this.economyTimer=0,this.updateResourcePanel()}}updateNebulaHint(t){this.nebulaHintTimer=Math.max(0,this.nebulaHintTimer-t),!(this.nebulaHintTimer>0||!this.ships.some(n=>n.team===Ct&&!n.isDead&&this.isInsideNebula(n.group.position)))&&(this.nebulaHintTimer=10,this.announce("Nebula interference: weapon range and shield regen reduced"))}hasTeamInRadius(t,e,n){return this.ships.some(i=>!i.isDead&&i.team===t&&i.group.position.distanceTo(e)<=n)}repairShipsNear(t,e){for(const n of this.ships)n.isDead||n.team!==t.owner||n.group.position.distanceTo(t.position)>t.radius||(n.hull=Math.min(n.maxHull,n.hull+34*e),n.shield=Math.min(n.maxShield,n.shield+24*e),Math.random()<e*.7&&this.createFloatingText(n.group.position.clone().add(new A(0,50,0)),"+repair","repair"),this.updateBars(n))}updateObjectiveVisual(t){const e=t.owner===Ct?6679295:t.owner===Zt?16740427:t.kind==="repair"?9368225:16765804;t.mesh.material.color.setHex(e),t.mesh.material.emissive.setHex(e),t.ring.material.color.setHex(e)}updateResourcePanel(){const t=this.objectiveNodes.filter(n=>n.kind==="salvage"&&n.owner===Ct).length,e=this.battleMode==="survival"?` | Wave ${this.survivalWave}/${this.survivalMaxWaves}${this.survivalWave<this.survivalMaxWaves?` | Next ${Math.ceil(this.survivalNextWaveIn)}s`:" | Final wave"}`:"";this.resourcePanel.textContent=`Salvage ${Math.floor(this.salvage)} | Command ${Math.floor(this.commandPoints)} | Nodes ${t}/3 | AI ${this.aiState}${e}`,this.updateAbilityButtons()}updateFlagshipPanel(){const t=[{label:"Player Flagship",ship:this.getFlagship(Ct),tone:"player"},{label:"Enemy Flagship",ship:this.getFlagship(Zt),tone:"enemy"}];this.flagshipPanel.innerHTML=t.map(({label:e,ship:n,tone:i})=>{const r=n?Math.max(0,Math.round(n.hull/n.maxHull*100)):0,a=n?Math.max(0,Math.round(n.shield/n.maxShield*100)):0,o=n?this.getHangarStatusText(n):"",l=n?n.subsystems.map(c=>{const h=!c.isDestroyed&&c.disabledUntil>this.battleElapsed,u=c.isDestroyed?"Destroyed":h?"Disabled":"Online";return`<span class="${c.isDestroyed?"is-destroyed":h?"is-disabled":""}" title="${c.name}: ${u}" aria-label="${c.name}: ${u}">${this.getSubsystemCode(c.type)}</span>`}).join(""):"";return`
          <div class="flagship-status is-${i}">
            <div><strong>${e}</strong><span>${n?`${r}% hull`:"Destroyed"}</span></div>
            <span class="flagship-meter is-shield"><span style="width: ${a}%"></span></span>
            <span class="flagship-meter is-hull"><span style="width: ${r}%"></span></span>
            <div class="flagship-subsystems">${l}</div>
            ${o?`<div class="flagship-hangar">${o}</div>`:""}
          </div>
        `}).join("")}getSubsystemCode(t){return{shield:"SH",engine:"EN",mainCannon:"MC",hangar:"HG",repair:"RP",bridge:"CC",pointDefense:"PD",sensors:"SN"}[t]}updateAbilityButtons(){this.abilityPanel.querySelectorAll("[data-ability]").forEach(t=>{const e=dl[t.dataset.ability??""],n=!!(e&&this.commandPoints>=e.cost),i=t.querySelector("[data-ability-status]");t.disabled=!this.isBattleStarted||this.battleEnded||this.isStoreOpen||this.isPaused||!e||!n,t.classList.toggle("is-affordable",this.isBattleStarted&&!this.battleEnded&&!this.isStoreOpen&&!this.isPaused&&n),t.classList.toggle("is-locked",!!(e&&!n)),i&&e&&(i.textContent=n?"Ready":`Need ${e.cost}`),this.isPaused&&i&&(i.textContent="Paused"),this.isStoreOpen&&i&&(i.textContent="Store"),this.battleEnded&&i&&(i.textContent="Ended"),t.title=e?`${e.description} ${n?"Ready.":`Needs ${e.cost} command.`}`:""})}completeObjective(t){this.isTutorialMode&&(this.completedObjectives.has(t)||(this.completedObjectives.add(t),this.updateObjectiveProgress()))}updateObjectiveProgress(){var e;this.objectivePanel.querySelectorAll("[data-objective]").forEach(n=>{const i=n.dataset.objective;n.classList.remove("is-current"),n.classList.toggle("is-complete",this.completedObjectives.has(i))});const t=fl.find(n=>!this.completedObjectives.has(n.id));this.objectivePanel.classList.toggle("is-complete",!t&&this.isTutorialMode),t&&this.isTutorialMode&&((e=this.objectivePanel.querySelector(`[data-objective="${t.id}"]`))==null||e.classList.add("is-current"))}useAbility(t){t==="repair"?this.useRepairPulse():t==="emp"?this.useEmpBurst():t==="barrage"&&this.useBarrage(),this.updateAbilityButtons()}spendCommand(t){return this.commandPoints<t?(this.audio.play("error"),this.announce("Not enough command points"),!1):(this.commandPoints-=t,this.updateResourcePanel(),!0)}useRepairPulse(){const t=this.getSelectedShips().length>0?this.getSelectedShips():this.getFlagship(Ct)?[this.getFlagship(Ct)]:[];if(!(t.length===0||!this.spendCommand(3))){this.battleStats.abilitiesUsed+=1,this.completeObjective("ability");for(const e of t){e.hull=Math.min(e.maxHull,e.hull+e.maxHull*.18),e.shield=Math.min(e.maxShield,e.shield+e.maxShield*.28);const n=this.repairMostDamagedSubsystem(e,.22);this.updateBars(e),this.createAbilityPulse(e.group.position,9368225,78),this.createFloatingText(e.group.position.clone().add(new A(0,72,0)),n?"+repair +system":"+repair","repair")}this.audio.play("purchase"),this.hudStatus.textContent="Repair pulse fired",this.announce(`Repair pulse restored ${t.length} ship${t.length===1?"":"s"}`)}}repairMostDamagedSubsystem(t,e){if(!t.subsystems.length)return!1;const n=t.subsystems.find(a=>a.type==="repair");if(n!=null&&n.isDestroyed)return!1;const i=t.subsystems.filter(a=>a.health<a.maxHealth).sort((a,o)=>a.isDestroyed!==o.isDestroyed?a.isDestroyed?-1:1:o.maxHealth-o.health-(a.maxHealth-a.health))[0];if(!i)return!1;const r=i.isDestroyed;return i.health=Math.min(i.maxHealth,i.health+i.maxHealth*e),i.lastDamagedAt=Math.max(0,this.battleElapsed-12),i.healthBar.style.width=`${Math.max(0,i.health/i.maxHealth*100)}%`,r&&i.health>=i.maxHealth*.25?this.restoreSubsystem(i):this.updateFlagshipPanel(),!0}useEmpBurst(){const t=this.getAbilityCenter();!t||!this.spendCommand(4)||(this.battleStats.abilitiesUsed+=1,this.completeObjective("ability"),this.activateEmpBurst(t))}activateEmpBurst(t){let e=0,n=0;for(const i of this.ships)i.isDead||i.team!==Zt||i.group.position.distanceTo(t)>520||(i.shield=Math.max(0,i.shield-i.maxShield*.55),i.cooldownRemaining+=1.4,n+=this.disableSubsystems(i,["pointDefense","mainCannon","sensors"],7),this.updateBars(i),this.createShieldRipple(i.group.position,i.team),e+=1);this.createAbilityPulse(t,6679295,190),this.audio.play(e>0?"subsystem":"error"),this.hudStatus.textContent="EMP burst fired",this.announce(e>0?`EMP disrupted ${e} ship${e===1?"":"s"} | ${n} systems suppressed`:"EMP found no enemy ships")}disableSubsystems(t,e,n){let i=0;for(const r of t.subsystems)r.isDestroyed||!e.includes(r.type)||(r.disabledUntil=Math.max(r.disabledUntil,this.battleElapsed+n),r.label.classList.add("is-disabled"),i+=1);return i>0&&(this.recalculateSubsystemStats(t),this.updateFlagshipPanel()),i}useBarrage(){const t=this.findBarrageTarget();!t||!this.spendCommand(6)||(this.battleStats.abilitiesUsed+=1,this.completeObjective("ability"),this.activateBarrage(t))}activateBarrage(t){if(this.isSubsystem(t)){this.applyDamage(t,260,Ct,"lance"),this.createExplosion(this.getTargetPosition(t),"fighter"),this.createAbilityPulse(this.getTargetPosition(t),16765804,150),this.audio.play("explosion"),this.hudStatus.textContent="Precision barrage launched",this.announce(`Barrage struck ${t.name}`);return}const e=t.group.position.clone(),n=this.ships.filter(i=>i.team===Zt&&!i.isDead&&i.group.position.distanceTo(e)<=360).sort((i,r)=>i.group.position.distanceTo(e)-r.group.position.distanceTo(e)).slice(0,3);for(const i of n)this.applyDamage(i,180,Ct),this.createExplosion(i.group.position,i.shipClass==="flagship"?"cruiser":"fighter");this.createAbilityPulse(e,16765804,210),this.audio.play("explosion"),this.hudStatus.textContent="Barrage launched",this.announce(`Barrage struck ${n.length} enemy ship${n.length===1?"":"s"}`)}getAbilityCenter(){var e;const t=this.getSelectedShips();return t.length>0?t.reduce((i,r)=>i.add(r.group.position),new A).multiplyScalar(1/t.length):(e=this.getFlagship(Ct))==null?void 0:e.group.position.clone()}findBarrageTarget(){for(const e of this.getSelectedShips()){const n=e.target;if(!(!n||this.getTargetTeam(n)!==Zt||this.isTargetDestroyed(n)))return n}const t=this.getFlagship(Ct)??this.ships.find(e=>e.team===Ct&&!e.isDead);return this.getFlagship(Zt)??(t?this.findNearestShip(t,Zt):void 0)}announce(t){this.announcementBanner.textContent=t,this.announcementBanner.classList.remove("is-visible"),window.requestAnimationFrame(()=>{this.announcementBanner.classList.add("is-visible"),window.setTimeout(()=>{this.announcementBanner.classList.remove("is-visible")},1800)})}openStore(){this.audio.play("toggle"),this.closeSettingsPanel(),this.completeObjective("store"),this.isStoreOpen=!0,this.storeOverlay.classList.add("is-visible"),this.hudStatus.textContent="Store paused",this.updateAbilityButtons(),this.updateStoreButtons()}closeStore(){this.isStoreOpen=!1,this.storeOverlay.classList.remove("is-visible"),this.hudStatus.textContent=this.isPaused?"Paused":"Battle ready",this.updateAbilityButtons()}purchaseStoreItem(t){const e=this.ships.find(n=>n.id==="player-flagship"&&!n.isDead);if(e){if(t==="fighter"&&this.spendSalvage(60))this.battleStats.storePurchases+=1,this.audio.play("purchase"),this.spawnReinforcement("fighter",e,-54),this.spawnReinforcement("fighter",e,54),this.hudStatus.textContent="Interceptors deployed",this.announce("Interceptor pair deployed");else if(t==="bomber"&&this.spendSalvage(90))this.battleStats.storePurchases+=1,this.audio.play("purchase"),this.spawnReinforcement("bomber",e,82),this.hudStatus.textContent="Bomber deployed",this.announce("Strike bomber deployed");else if(t==="cruiser"&&this.spendSalvage(160))this.battleStats.storePurchases+=1,this.audio.play("purchase"),this.spawnReinforcement("cruiser",e,-120),this.hudStatus.textContent="Cruiser called in",this.announce("Lance cruiser arrived");else if(t==="repair"&&this.spendSalvage(80))this.battleStats.storePurchases+=1,this.audio.play("purchase"),e.hull=Math.min(e.maxHull,e.hull+e.maxHull*.28),this.updateBars(e),this.createFloatingText(e.group.position.clone().add(new A(0,72,0)),"+hull","repair"),this.hudStatus.textContent="Flagship repaired",this.announce("Flagship repair completed");else if(t==="shield"&&this.commandPoints>=4)this.battleStats.storePurchases+=1,this.audio.play("purchase"),this.commandPoints-=4,e.shield=Math.min(e.maxShield,e.shield+e.maxShield*.45),this.updateBars(e),this.createFloatingText(e.group.position.clone().add(new A(0,72,0)),"+shield","shield"),this.hudStatus.textContent="Emergency shields online",this.announce("Emergency shields online");else if(t==="emp"&&this.spendSalvage(130)){this.battleStats.storePurchases+=1,this.battleStats.abilitiesUsed+=1,this.completeObjective("ability"),this.audio.play("purchase");const n=this.getAbilityCenter();n&&this.activateEmpBurst(n)}else if(t==="barrage"){const n=this.findBarrageTarget();!n||!this.spendSalvage(180)?(this.audio.play("error"),this.announce(n?"Not enough resources":"No barrage target available")):(this.battleStats.storePurchases+=1,this.battleStats.abilitiesUsed+=1,this.completeObjective("ability"),this.audio.play("purchase"),this.activateBarrage(n))}else this.audio.play("error"),this.hudStatus.textContent="Not enough resources",this.announce("Not enough resources");this.updateResourcePanel(),this.updateStoreButtons()}}spendSalvage(t){return this.salvage<t?!1:(this.salvage-=t,!0)}spawnReinforcement(t,e,n){this.reinforcementIndex+=1,this.createShip({id:`player-reinforcement-${this.reinforcementIndex}`,team:Ct,shipClass:t,x:e.group.position.x-120,y:e.group.position.z+n,rotation:0})}updateStoreButtons(){const t={fighter:{salvage:60},bomber:{salvage:90},cruiser:{salvage:160},repair:{salvage:80},shield:{command:4},emp:{salvage:130},barrage:{salvage:180}},e=this.storeOverlay.querySelector(".store-wallet");e&&(e.innerHTML=`
        <span>Salvage ${Math.floor(this.salvage)}</span>
        <span>Command ${Math.floor(this.commandPoints)}</span>
      `),this.storeOverlay.querySelectorAll("[data-purchase]").forEach(n=>{const i=t[n.dataset.purchase??""],r=(i==null?void 0:i.salvage)!==void 0?Math.max(0,i.salvage-Math.floor(this.salvage)):0,a=(i==null?void 0:i.command)!==void 0?Math.max(0,i.command-Math.floor(this.commandPoints)):0,o=!!(i&&r===0&&a===0),l=n.querySelector("[data-cost-status]");n.disabled=!o,n.classList.toggle("is-affordable",o),n.classList.toggle("is-locked",!o),l&&i&&(o?l.textContent=i.salvage!==void 0?`${i.salvage} salvage`:`${i.command??0} command`:l.textContent=r>0?`Need ${r}`:`Need ${a}`)})}applyDamage(t,e,n,i="laser",r){if(this.isSubsystem(t)){this.applySubsystemDamage(t,e,n,i,r);return}const a=hl(i),o=Math.min(t.shield,e*a.shieldPortion);let l=Math.max(0,e-o)*a.hullMultiplier;l>0&&this.isSubsystemDestroyed(t,"bridge")&&(l*=1.25),t.shield-=o,t.hull-=l,this.updateBars(t),this.createFloatingText(t.group.position.clone().add(new A(Qt.randFloatSpread(42),58,Qt.randFloatSpread(42))),o>l?`-${Math.round(o)} shield`:`-${Math.round(l)}`,o>l?"shield":"damage"),o>0?this.createShieldRipple(t.group.position,t.team):(this.createHullSpark(t.group.position,n),this.addScreenShake(Math.min(9,Math.max(2.5,e*.025)),.16)),t.hull<=0&&this.destroyShip(t,n)}applySubsystemDamage(t,e,n,i,r){if(t.isDestroyed)return;const a=t.parent;t.lastDamagedAt=this.battleElapsed;const o=hl(i),l=Math.min(a.shield,e*o.shieldPortion);a.shield-=l;let c=Math.max(0,e-l)*o.hullMultiplier;r==="bomber"&&(c*=t.type==="hangar"||t.type==="engine"?1.5:1.35,this.isSubsystemOffline(a,"pointDefense")||(c*=.68,Math.random()<.32&&this.createFloatingText(this.getTargetPosition(t).add(new A(0,48,0)),"point defence","shield"))),t.health-=c,t.healthBar.style.width=`${Math.max(0,t.health/t.maxHealth*100)}%`,this.updateBars(a),this.createFloatingText(this.getTargetPosition(t).add(new A(0,32,0)),l>c?`-${Math.round(l)} shield`:`-${Math.round(c)}`,l>c?"shield":"damage"),l>c?this.createShieldRipple(a.group.position,a.team):this.createHullSpark(this.getTargetPosition(t),n),t.health<=0&&this.destroySubsystem(t)}destroySubsystem(t){if(t.isDestroyed)return;t.isDestroyed=!0,t.parent.team===Zt&&(this.battleStats.subsystemsDestroyed+=1),t.health=0,t.healthBar.style.width="0%",t.mesh.visible=!1,t.label.classList.add("is-destroyed"),this.addSubsystemDamageMarker(t),this.updateFlagshipPanel();const e=t.parent;t.type==="shield"?(e.shield=0,this.announce(`${e.team===Zt?"Enemy":"Player"} shields offline`)):t.type==="engine"?this.announce(`${e.team===Zt?"Enemy":"Player"} engines crippled`):t.type==="mainCannon"?this.announce(`${e.team===Zt?"Enemy":"Player"} main cannon disabled`):t.type==="repair"?this.announce(`${e.team===Zt?"Enemy":"Player"} repair bay destroyed`):t.type==="bridge"?(e.hull-=e.maxHull*.16,this.updateBars(e),this.announce(`${e.team===Zt?"Enemy":"Player"} command core breached`),e.hull<=0&&this.destroyShip(e,t.parent.team===Ct?Zt:Ct)):t.type==="hangar"?(this.applyHangarDamage(e.team),this.announce(`${e.team===Zt?"Enemy":"Player"} hangar bay destroyed`)):t.type==="pointDefense"?this.announce(`${e.team===Zt?"Enemy":"Player"} point defence grid offline`):t.type==="sensors"&&this.announce(`${e.team===Zt?"Enemy":"Player"} sensor array blinded`),this.recalculateSubsystemStats(e),this.createExplosion(this.getTargetPosition(t),"fighter")}applyHangarDamage(t){for(const e of this.ships)e.team!==t||e.isDead||!["fighter","bomber"].includes(e.shipClass)||(e.cooldown*=1.3,e.cooldownRemaining=Math.max(e.cooldownRemaining,e.cooldown*.35),this.createFloatingText(e.group.position.clone().add(new A(0,44,0)),"hangar disrupted","damage"))}addSubsystemDamageMarker(t){if(t.damageMarker)return;const e=t.parent.team===Ct?6679295:16740427,n=new li;n.position.copy(t.mesh.position),n.position.y+=2;const i=new ce(new Mi(22,3,13),new Es({color:1120288,roughness:.86,metalness:.18,emissive:3937807,emissiveIntensity:.34}));i.rotation.y=t.type==="engine"?Math.PI/2:t.type==="shield"||t.type==="repair"?-.45:.35,n.add(i);const r=new ce(new Be(5,10,8),new Ce({color:e,transparent:!0,opacity:.72}));r.position.set(0,5,0),n.add(r),t.parent.group.add(n),t.damageMarker=n}updateDamageMarkers(){const t=.55+Math.sin(this.battleElapsed*7)*.18;for(const e of this.ships.flatMap(n=>n.subsystems)){if(!e.damageMarker)continue;const n=e.damageMarker.children[1];if(!n)continue;const i=n.material;i.opacity=t,n.scale.setScalar(.82+t*.34)}}updateSubsystemDisables(){for(const t of this.ships){if(t.isDead||!t.subsystems.length)continue;let e=!1;for(const n of t.subsystems){const i=!n.isDestroyed&&n.disabledUntil>this.battleElapsed;n.label.classList.toggle("is-disabled",i),!i&&n.disabledUntil>0&&(n.disabledUntil=0,e=!0)}e&&this.recalculateSubsystemStats(t)}}updateSubsystemRepairs(t){for(const e of this.ships){if(e.isDead||!e.subsystems.length||this.isSubsystemDestroyed(e,"repair"))continue;const n=e.subsystems.find(i=>i.type==="repair");if(!(!n||n.isDestroyed))for(const i of e.subsystems){if(i.type==="repair"||i.health>=i.maxHealth||this.battleElapsed-i.lastDamagedAt<12)continue;const r=i.isDestroyed;i.health=Math.min(i.maxHealth,i.health+i.maxHealth*.02*t),i.healthBar.style.width=`${Math.max(0,i.health/i.maxHealth*100)}%`,r&&i.health>=i.maxHealth*.25&&this.restoreSubsystem(i)}}}restoreSubsystem(t){t.isDestroyed=!1,t.mesh.visible=!0,t.label.classList.remove("is-destroyed"),t.damageMarker&&(t.damageMarker.removeFromParent(),t.damageMarker=void 0),this.recalculateSubsystemStats(t.parent),this.updateFlagshipPanel(),this.createFloatingText(this.getTargetPosition(t).add(new A(0,34,0)),"system restored","repair")}updateBars(t){t.shieldBar.style.width=`${Math.max(0,t.shield/t.maxShield*100)}%`,t.healthBar.style.width=`${Math.max(0,t.hull/t.maxHull*100)}%`,t.shipClass==="flagship"&&this.updateFlagshipPanel()}destroyShip(t,e){if(t.isDead)return;t.isDead=!0,t.team===Zt?this.battleStats.enemyShipsDestroyed+=1:this.battleStats.playerShipsLost+=1,t.hull=0,t.shield=0,t.group.visible=!1,t.label.style.display="none",t.subsystems.forEach(i=>{i.label.style.display="none",i.isDestroyed=!0,i.damageMarker=void 0}),t.destination=void 0,t.target=void 0,this.createExplosion(t.group.position,t.shipClass);for(const i of this.ships)i.target===t&&(i.target=void 0);const n=this.selectionRings.get(t);n&&(n.removeFromParent(),this.selectionRings.delete(t),this.selectedShips.delete(t),this.updateSelectedSummary()),t.shipClass==="flagship"&&(this.updateFlagshipPanel(),e===Ct&&this.completeObjective("flagship"),this.endBattle(e===Ct?"Victory":"Defeat"))}createImpact(t,e){const n=e===Ct?6679295:16740427,i=new ce(new Be(10,12,8),new Ce({color:n,transparent:!0,opacity:.65}));i.position.copy(t),this.scene.add(i),this.fadeAndRemove(i,280,2.8)}createMuzzleFlash(t,e){if(this.lowQualityMode)return;const n=new ce(new Be(7,10,8),new Ce({color:e,transparent:!0,opacity:.76}));n.position.copy(t),n.position.y+=10,this.scene.add(n),this.fadeAndRemove(n,150,1.8)}updateProjectileTrail(t){if(!t.trail)return;const e=t.previousPosition.clone().sub(t.mesh.position).normalize(),n=t.speed>400?64:42,i=t.mesh.position.clone().addScaledVector(e,n);t.trail.geometry.dispose(),t.trail.geometry=new me().setFromPoints([t.mesh.position.clone(),i])}createFloatingText(t,e,n){if(!this.damageNumbersEnabled)return;const i=this.worldToScreen(t),r=document.createElement("div");r.className=`floating-number is-${n}`,r.textContent=e,r.style.left=`${i.x}px`,r.style.top=`${i.y}px`,this.labelLayer.append(r),window.setTimeout(()=>{r.remove()},920)}addScreenShake(t,e){this.lowQualityMode||(this.cameraShakeStrength=Math.max(this.cameraShakeStrength,t),this.cameraShakeTime=Math.max(this.cameraShakeTime,e))}createShieldRipple(t,e){if(this.lowQualityMode)return;const n=e===Ct?6679295:16747106,i=this.createRing(t.x,t.z,42,n,.82);i.position.y=t.y+4,this.scene.add(i),this.fadeLineAndRemove(i,360,2.5)}createHullSpark(t,e){if(this.lowQualityMode)return;const n=e===Ct?10156287:16761711;for(let i=0;i<3;i+=1){const r=new ce(new Be(4,8,6),new Ce({color:n,transparent:!0,opacity:.8}));r.position.copy(t).add(new A(Qt.randFloatSpread(42),Qt.randFloat(4,24),Qt.randFloatSpread(42))),this.scene.add(r),this.fadeAndRemove(r,260,1.4)}}createAbilityPulse(t,e,n){const i=this.createRing(t.x,t.z,n,e,.9);if(i.position.y=10,this.scene.add(i),this.fadeLineAndRemove(i,780,2.4),this.lowQualityMode)return;const r=new ce(new Be(14,14,10),new Ce({color:e,transparent:!0,opacity:.6}));r.position.copy(t),r.position.y+=16,this.scene.add(r),this.fadeAndRemove(r,460,2.2)}createExplosion(t,e){this.audio.play("explosion",e==="flagship"?1:.68),this.addScreenShake(e==="flagship"?18:e==="heavyCapital"?12:7,e==="flagship"?.8:.32);const n=e==="flagship"?5.2:e==="heavyCapital"?3.5:e==="cruiser"?2.3:1.4,i=new ce(new Be(22,18,12),new Ce({color:16761711,transparent:!0,opacity:.86}));i.position.copy(t),i.position.y+=8,this.scene.add(i),this.fadeAndRemove(i,e==="flagship"?900:520,n);const r=this.createRing(t.x,t.z,e==="flagship"?90:46,16761711,.82);if(r.position.y=7,this.scene.add(r),this.fadeLineAndRemove(r,e==="flagship"?1100:520,e==="flagship"?5.5:3.2),e==="flagship"&&!this.lowQualityMode)for(let a=0;a<5;a+=1)window.setTimeout(()=>{const o=t.clone().add(new A(Qt.randFloatSpread(150),0,Qt.randFloatSpread(80))),l=new ce(new Be(18,14,10),new Ce({color:16773311,transparent:!0,opacity:.72}));l.position.copy(o),l.position.y+=12,this.scene.add(l),this.fadeAndRemove(l,520,2.8)},a*130)}fadeAndRemove(t,e,n){const i=performance.now(),r=t.material,a=o=>{const l=Math.min(1,(o-i)/e);t.scale.setScalar(1+l*n),r.opacity=1-l,l<1?window.requestAnimationFrame(a):(t.removeFromParent(),t.geometry.dispose(),r.dispose())};window.requestAnimationFrame(a)}fadeLineAndRemove(t,e,n){const i=performance.now(),r=t.material,a=o=>{const l=Math.min(1,(o-i)/e);t.scale.setScalar(1+l*n),r.opacity=1-l,l<1?window.requestAnimationFrame(a):(t.removeFromParent(),t.geometry.dispose(),r.dispose())};window.requestAnimationFrame(a)}removeProjectile(t){const[e]=this.projectiles.splice(t,1);e.mesh.removeFromParent(),e.mesh.geometry.dispose(),e.mesh.material.dispose(),e.trail&&(e.trail.removeFromParent(),e.trail.geometry.dispose(),e.trail.material.dispose())}endBattle(t){var y;this.battleEnded=!0,this.audio.play(t==="Victory"?"victory":"defeat"),this.hudStatus.textContent=t,this.clearSelection();const e=this.getFlagship(Ct),n=this.getFlagship(Zt),i=t==="Victory"?(e==null?void 0:e.hull)??0:(n==null?void 0:n.hull)??0,r=t==="Victory"?(e==null?void 0:e.maxHull)??1:(n==null?void 0:n.maxHull)??1,a=Math.max(0,Math.round(i/r*100)),o=Math.floor(this.battleElapsed/60),l=Math.floor(this.battleElapsed%60).toString().padStart(2,"0"),c=xg(t,this.battleElapsed,a,this.battleStats),h=yg(t,this.battleElapsed,a),u=Sg(t,h,this.battleMode==="survival"?this.survivalWave:0),d=c.score>this.profile.bestScore,p=h>this.profile.bestStars,g=this.battleMode==="survival"&&this.survivalWave>this.profile.bestSurvivalWave;d&&(this.profile.bestScore=c.score,this.profile.bestRating=c.rating),p&&(this.profile.bestStars=h),g&&(this.profile.bestSurvivalWave=this.survivalWave),this.profile.researchCores+=u,this.saveProfile(),this.resultOverlay=document.createElement("div"),this.resultOverlay.className=`result-overlay ${t==="Victory"?"is-victory":"is-defeat"}`,this.resultOverlay.innerHTML=`
      <div class="result-panel">
        <h2>${t}</h2>
        <p>${t==="Victory"?"Enemy flagship destroyed.":"Your flagship was destroyed."}</p>
        <div class="result-rating">
          <span>${c.rating}</span>
          <strong>${c.score.toLocaleString()} score</strong>
          <em>${d?"New Score Best":`Best ${this.profile.bestRating} | ${this.profile.bestScore.toLocaleString()}`}</em>
          <em>${p?"New Star Best":`Best ${this.renderStarText(this.profile.bestStars)}`}</em>
          ${this.battleMode==="survival"?`<em>${g?"New Wave Best":`Best Wave ${this.profile.bestSurvivalWave}`}</em>`:""}
        </div>
        <div class="result-stars" aria-label="${h} battle stars">
          ${Array.from({length:3},(m,f)=>`<span class="${f<h?"is-earned":""}">★</span>`).join("")}
        </div>
        <div class="result-reward-strip">
          <strong>+${u} Research Cores</strong>
          <span>${d||p||g?"New record logged":"Progress saved"}</span>
        </div>
        <div class="result-stat-groups">
          <section>
            <h3>Outcome</h3>
            <dl>
              <div><dt>Mode</dt><dd>${this.battleMode==="survival"?"Survival":this.battleMode==="tutorial"?"Tutorial":"Skirmish"}</dd></div>
              <div><dt>Battle Time</dt><dd>${o}:${l}</dd></div>
              <div><dt>${t==="Victory"?"Player":"Enemy"} Flagship Hull</dt><dd>${a}%</dd></div>
              ${this.battleMode==="survival"?`<div><dt>Waves Survived</dt><dd>${this.survivalWave}/${this.survivalMaxWaves}</dd></div>`:""}
            </dl>
          </section>
          <section>
            <h3>Rewards</h3>
            <dl>
              <div><dt>Research Reward</dt><dd>+${u}</dd></div>
              <div><dt>Score</dt><dd>${c.score.toLocaleString()}</dd></div>
              <div><dt>Rating</dt><dd>${c.rating}</dd></div>
            </dl>
          </section>
          <section>
            <h3>Combat</h3>
            <dl>
              <div><dt>Enemy Ships Destroyed</dt><dd>${this.battleStats.enemyShipsDestroyed}</dd></div>
              <div><dt>Player Ships Lost</dt><dd>${this.battleStats.playerShipsLost}</dd></div>
              <div><dt>Subsystems Destroyed</dt><dd>${this.battleStats.subsystemsDestroyed}</dd></div>
            </dl>
          </section>
          <section>
            <h3>Operations</h3>
            <dl>
              <div><dt>Nodes Captured</dt><dd>${this.battleStats.nodesCaptured}</dd></div>
              <div><dt>Store Purchases</dt><dd>${this.battleStats.storePurchases}</dd></div>
              <div><dt>Abilities Used</dt><dd>${this.battleStats.abilitiesUsed}</dd></div>
            </dl>
          </section>
        </div>
      </div>
      <button class="start-button" type="button">Restart Battle</button>
    `,(y=this.resultOverlay.querySelector("button"))==null||y.addEventListener("click",()=>window.location.reload()),this.shell.append(this.resultOverlay)}updateLabels(){const t=this.canvas.getBoundingClientRect();for(const e of this.ships){if(e.isDead)continue;const n=e.group.position.clone();n.y+=Je[e.shipClass].height*.7,n.project(this.camera);const i=(n.x*.5+.5)*t.width,r=(-n.y*.5+.5)*t.height;e.label.style.left=`${i}px`,e.label.style.top=`${r}px`,e.label.style.opacity=n.z<1?"1":"0";const a=e.label.querySelector(".ship-hangar-status");if(a){const o=this.getHangarStatusText(e);a.textContent=o.replace("Squadrons","SQ").replace("Hangar ",""),a.classList.toggle("is-offline",o.includes("offline")),a.style.display=o?"block":"none"}for(const o of e.subsystems){const l=this.getTargetPosition(o);l.y+=22,l.project(this.camera);const c=(l.x*.5+.5)*t.width,h=(-l.y*.5+.5)*t.height;o.label.style.left=`${c}px`,o.label.style.top=`${h}px`,o.label.style.opacity=!e.isDead&&l.z<1?"1":"0"}}}drawMinimap(){const t=this.minimapContext,e=this.minimapCanvas.width,n=this.minimapCanvas.height,i=h=>h/Ze*e,r=h=>h/hn*n;t.clearRect(0,0,e,n),t.fillStyle="rgba(5, 12, 24, 0.88)",t.fillRect(0,0,e,n),t.strokeStyle="rgba(122, 213, 255, 0.12)",t.lineWidth=1;for(let h=0;h<=e;h+=e/4)t.beginPath(),t.moveTo(h,0),t.lineTo(h,n),t.stroke();for(let h=0;h<=n;h+=n/4)t.beginPath(),t.moveTo(0,h),t.lineTo(e,h),t.stroke();for(const h of this.objectiveNodes)t.beginPath(),t.arc(i(h.position.x),r(h.position.z),h.kind==="repair"?5:6,0,Math.PI*2),t.fillStyle=h.owner===Ct?"#65eaff":h.owner===Zt?"#ff704b":h.kind==="repair"?"#8ef2a1":"#ffd36c",t.fill(),t.strokeStyle="rgba(232, 247, 255, 0.42)",t.stroke();for(const h of this.nebulaZones)t.beginPath(),t.arc(i(h.position.x),r(h.position.z),h.radius/Ze*e,0,Math.PI*2),t.fillStyle="rgba(159, 140, 255, 0.14)",t.fill(),t.strokeStyle="rgba(159, 140, 255, 0.62)",t.stroke();for(const h of this.ships){if(h.isDead)continue;const u=i(h.group.position.x),d=r(h.group.position.z),p=h.shipClass==="flagship"?4.5:h.shipClass==="heavyCapital"?3.6:2.8;t.beginPath(),t.arc(u,d,p,0,Math.PI*2),t.fillStyle=h.team===Ct?"#9af8ff":"#ff9b80",t.fill(),this.selectedShips.has(h)&&(t.beginPath(),t.arc(u,d,p+3.2,0,Math.PI*2),t.strokeStyle="#f1fbff",t.lineWidth=1.5,t.stroke())}const a=Qt.clamp(this.camera.position.y/1280*e*.9,32,84),o=Qt.clamp(this.camera.position.y/1280*n*.9,20,56),l=i(this.camera.position.x)-a/2,c=r(this.camera.position.z-360)-o/2;t.strokeStyle="rgba(241, 251, 255, 0.86)",t.lineWidth=1.5,t.strokeRect(l,c,a,o)}resize(){const t=this.shell.clientWidth,e=this.shell.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1),this.orientationOverlay.classList.toggle("is-visible",t<760&&e>t),this.syncCommandGroupsForViewport(t)}syncCommandGroupsForViewport(t){const e=t<=760;this.commandTray.querySelectorAll(".command-group").forEach(n=>{n.open=!e||n.classList.contains("command-group-primary")})}toggleQualityMode(t){this.lowQualityMode=!this.lowQualityMode,this.audio.play("toggle"),this.setButtonStateText(t,this.lowQualityMode?"Low":"High"),this.renderer.setPixelRatio(this.lowQualityMode?1:Math.min(window.devicePixelRatio,2)),this.scene.fog=new Bs(330004,this.lowQualityMode?22e-5:16e-5),this.announce(this.lowQualityMode?"Low quality mode enabled":"High quality mode enabled")}toggleAudio(t){const e=this.audio.toggleMute();this.setButtonStateText(t,e?"Muted":"On"),this.announce(e?"Audio muted":"Audio enabled")}toggleDamageNumbers(t){this.damageNumbersEnabled=!this.damageNumbersEnabled,t.classList.toggle("is-active",this.damageNumbersEnabled),this.setButtonStateText(t,this.damageNumbersEnabled?"On":"Off"),this.audio.play("toggle"),this.announce(this.damageNumbersEnabled?"Floating numbers enabled":"Floating numbers disabled")}setButtonStateText(t,e){const n=t.querySelector("span");n?n.textContent=e:t.textContent=e}toggleSettingsPanel(t){const e=this.settingsPanel.classList.toggle("is-visible");t.classList.toggle("is-active",e),this.audio.play("toggle")}closeSettingsPanel(){var t;this.settingsPanel.classList.remove("is-visible"),(t=this.commandTray.querySelector('[data-action="settings"]'))==null||t.classList.remove("is-active")}togglePause(t){this.isPaused=!this.isPaused,t.classList.toggle("is-active",this.isPaused),t.textContent=this.isPaused?"Resume":"Pause",this.audio.play("toggle"),this.hudStatus.textContent=this.isPaused?"Paused":"Battle ready",this.announce(this.isPaused?"Battle paused":"Battle resumed"),this.updateAbilityButtons()}toggleFollowFlagship(t){const e=this.getFlagship(Ct);if(!e){this.audio.play("error"),this.announce("No flagship to follow");return}this.isFollowingFlagship=!this.isFollowingFlagship,t.classList.toggle("is-active",this.isFollowingFlagship),this.audio.play("toggle"),this.hudStatus.textContent=this.isFollowingFlagship?"Following flagship":"Manual camera",this.isFollowingFlagship&&(this.camera.position.x=e.group.position.x,this.camera.position.z=e.group.position.z+360,this.clampCamera())}stopFollowingFlagship(){var t;this.isFollowingFlagship&&(this.isFollowingFlagship=!1,(t=this.commandTray.querySelector('[data-action="follow"]'))==null||t.classList.remove("is-active"))}updateFollowCamera(t){if(!this.isFollowingFlagship)return;const e=this.getFlagship(Ct);if(!e){this.stopFollowingFlagship();return}const n=e.group.position.x,i=e.group.position.z+360,r=1-Math.exp(-t*5.5);this.camera.position.x=Qt.lerp(this.camera.position.x,n,r),this.camera.position.z=Qt.lerp(this.camera.position.z,i,r),this.clampCamera()}getCameraShakeOffset(t){if(this.cameraShakeTime<=0)return new A;this.cameraShakeTime=Math.max(0,this.cameraShakeTime-t);const e=this.cameraShakeStrength*(this.cameraShakeTime/Math.max(.001,this.cameraShakeTime+t));return this.cameraShakeTime<=0&&(this.cameraShakeStrength=0),new A(Qt.randFloatSpread(e),Qt.randFloatSpread(e*.35),Qt.randFloatSpread(e))}updateFps(t){if(this.fpsAccumulator+=t,this.fpsFrames+=1,this.fpsAccumulator>=.75){const e=Math.round(this.fpsFrames/this.fpsAccumulator);this.fpsPanel.textContent=`FPS ${e}`,this.fpsPanel.classList.toggle("is-low",e<45),this.fpsAccumulator=0,this.fpsFrames=0}}zoom(t){this.camera.position.y=Qt.clamp(this.camera.position.y*t,300,1280),this.camera.position.z=Qt.clamp(this.camera.position.z*t,180,hn+760),this.clampCamera()}clampWorldPosition(t){return new A(Qt.clamp(t.x,Cs,Ze-Cs),t.y,Qt.clamp(t.z,Cs,hn-Cs))}clampCamera(){this.camera.position.x=Qt.clamp(this.camera.position.x,80,Ze-80),this.camera.position.z=Qt.clamp(this.camera.position.z,160,hn+720);const t=this.clampWorldPosition(new A(this.camera.position.x,0,this.camera.position.z-360));this.camera.lookAt(t.x,0,t.z)}resetPointerState(){this.isDragging=!1,this.dragStarted=!1,this.pinchDistance=void 0}}const Ql=document.querySelector("#game");if(!Ql)throw new Error("Game root element was not found.");const wg=new Tg(Ql);wg.start();
