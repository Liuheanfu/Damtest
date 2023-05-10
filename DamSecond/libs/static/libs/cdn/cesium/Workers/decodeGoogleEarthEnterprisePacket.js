define(["./Check-f996273c","./RuntimeError-ac2797b4","./when-ae2e0b60","./createTaskProcessorWorker"],function(e,I,i,t){"use strict";function D(e,t){if(D.passThroughDataForTesting)return t;var i=e.byteLength;if(0===i||i%4!=0)throw new I.RuntimeError("The length of key must be greater than 0 and a multiple of 4.");var n=new DataView(t),r=n.getUint32(0,!0);if(1953029805===r||2917034100===r)return t;for(var a,o=new DataView(e),s=0,f=t.byteLength,l=f-f%8,d=i,u=8;s<l;)for(a=u=(u+8)%24;s<l&&a<d;)n.setUint32(s,n.getUint32(s,!0)^o.getUint32(a,!0),!0),n.setUint32(s+4,n.getUint32(s+4,!0)^o.getUint32(a+4,!0),!0),s+=8,a+=24;if(s<f)for(d<=a&&(a=u=(u+8)%24);s<f;)n.setUint8(s,n.getUint8(s)^o.getUint8(a)),s++,a++}function n(e,t){return 0!=(e&t)}D.passThroughDataForTesting=!1;var r=[1,2,4,8];function N(e,t,i,n,r,a){this._bits=e,this.cnodeVersion=t,this.imageryVersion=i,this.terrainVersion=n,this.imageryProvider=r,this.terrainProvider=a,this.ancestorHasTerrain=!1,this.terrainState=void 0}N.clone=function(e,t){return i.defined(t)?(t._bits=e._bits,t.cnodeVersion=e.cnodeVersion,t.imageryVersion=e.imageryVersion,t.terrainVersion=e.terrainVersion,t.imageryProvider=e.imageryProvider,t.terrainProvider=e.terrainProvider):t=new N(e._bits,e.cnodeVersion,e.imageryVersion,e.terrainVersion,e.imageryProvider,e.terrainProvider),t.ancestorHasTerrain=e.ancestorHasTerrain,t.terrainState=e.terrainState,t},N.prototype.setParent=function(e){this.ancestorHasTerrain=e.ancestorHasTerrain||this.hasTerrain()},N.prototype.hasSubtree=function(){return n(this._bits,16)},N.prototype.hasImagery=function(){return n(this._bits,64)},N.prototype.hasTerrain=function(){return n(this._bits,128)},N.prototype.hasChildren=function(){return n(this._bits,15)},N.prototype.hasChild=function(e){return n(this._bits,r[e])},N.prototype.getChildBitmask=function(){return 15&this._bits};var O=function n(r,a,o){function s(i,e){if(!a[i]){if(!r[i]){var t="function"==typeof require&&require;if(!e&&t)return t(i,!0);if(f)return f(i,!0);e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}t=a[i]={exports:{}};r[i][0].call(t.exports,function(e){var t=r[i][1][e];return s(t||e)},t,t.exports,n,r,a,o)}return a[i].exports}for(var f="function"==typeof require&&require,e=0;e<o.length;e++)s(o[e]);return s}({1:[function(e,t,i){var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array,r=(i.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var i=t.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(var n in i)i.hasOwnProperty(n)&&(e[n]=i[n])}}return e},i.shrinkBuf=function(e,t){if(e.length!==t){if(e.subarray)return e.subarray(0,t);e.length=t}return e},{arraySet:function(e,t,i,n,r){if(t.subarray&&e.subarray)e.set(t.subarray(i,i+n),r);else for(var a=0;a<n;a++)e[r+a]=t[i+a]},flattenChunks:function(e){for(var t,i,n,r=0,a=0,o=e.length;a<o;a++)r+=e[a].length;for(n=new Uint8Array(r),a=t=0,o=e.length;a<o;a++)i=e[a],n.set(i,t),t+=i.length;return n}}),a={arraySet:function(e,t,i,n,r){for(var a=0;a<n;a++)e[r+a]=t[i+a]},flattenChunks:function(e){return[].concat.apply([],e)}};i.setTyped=function(e){e?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,r)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(n)},{}],2:[function(e,t,i){var f=e("./common"),r=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch(e){r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){a=!1}for(var l=new f.Buf8(256),n=0;n<256;n++)l[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function d(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&r))return String.fromCharCode.apply(null,f.shrinkBuf(e,t));for(var i="",n=0;n<t;n++)i+=String.fromCharCode(e[n]);return i}l[254]=l[254]=1,i.string2buf=function(e){for(var t,i,n,r,a=e.length,o=0,s=0;s<a;s++)55296==(64512&(i=e.charCodeAt(s)))&&s+1<a&&56320==(64512&(n=e.charCodeAt(s+1)))&&(i=65536+(i-55296<<10)+(n-56320),s++),o+=i<128?1:i<2048?2:i<65536?3:4;for(t=new f.Buf8(o),s=r=0;r<o;s++)55296==(64512&(i=e.charCodeAt(s)))&&s+1<a&&56320==(64512&(n=e.charCodeAt(s+1)))&&(i=65536+(i-55296<<10)+(n-56320),s++),i<128?t[r++]=i:(i<2048?t[r++]=192|i>>>6:(i<65536?t[r++]=224|i>>>12:(t[r++]=240|i>>>18,t[r++]=128|i>>>12&63),t[r++]=128|i>>>6&63),t[r++]=128|63&i);return t},i.buf2binstring=function(e){return d(e,e.length)},i.binstring2buf=function(e){for(var t=new f.Buf8(e.length),i=0,n=t.length;i<n;i++)t[i]=e.charCodeAt(i);return t},i.buf2string=function(e,t){for(var i,n,r=t||e.length,a=new Array(2*r),o=0,s=0;s<r;)if((i=e[s++])<128)a[o++]=i;else if(4<(n=l[i]))a[o++]=65533,s+=n-1;else{for(i&=2===n?31:3===n?15:7;1<n&&s<r;)i=i<<6|63&e[s++],n--;1<n?a[o++]=65533:i<65536?a[o++]=i:(i-=65536,a[o++]=55296|i>>10&1023,a[o++]=56320|1023&i)}return d(a,o)},i.utf8border=function(e,t){for(var i=(t=(t=t||e.length)>e.length?e.length:t)-1;0<=i&&128==(192&e[i]);)i--;return!(i<0)&&0!==i&&i+l[e[i]]>t?i:t}},{"./common":1}],3:[function(e,t,i){t.exports=function(e,t,i,n){for(var r=65535&e|0,a=e>>>16&65535|0,o=0;0!==i;){for(i-=o=2e3<i?2e3:i;a=a+(r=r+t[n++]|0)|0,--o;);r%=65521,a%=65521}return r|a<<16|0}},{}],4:[function(e,t,i){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],5:[function(e,t,i){var s=function(){for(var e=[],t=0;t<256;t++){for(var i=t,n=0;n<8;n++)i=1&i?3988292384^i>>>1:i>>>1;e[t]=i}return e}();t.exports=function(e,t,i,n){var r=s,a=n+i;e^=-1;for(var o=n;o<a;o++)e=e>>>8^r[255&(e^t[o])];return-1^e}},{}],6:[function(e,t,i){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],7:[function(e,t,i){t.exports=function(e,t){var i,n,r,a,o,s,f=e.state,l=e.next_in,d=e.input,u=l+(e.avail_in-5),h=e.next_out,c=e.output,b=h-(t-e.avail_out),m=h+(e.avail_out-257),w=f.dmax,g=f.wsize,v=f.whave,_=f.wnext,k=f.window,p=f.hold,y=f.bits,x=f.lencode,E=f.distcode,S=(1<<f.lenbits)-1,T=(1<<f.distbits)-1;e:do{for(y<15&&(p+=d[l++]<<y,y+=8,p+=d[l++]<<y,y+=8),i=x[p&S];;){if(p>>>=n=i>>>24,y-=n,0===(n=i>>>16&255))c[h++]=65535&i;else{if(!(16&n)){if(0==(64&n)){i=x[(65535&i)+(p&(1<<n)-1)];continue}if(32&n){f.mode=12;break e}e.msg="invalid literal/length code",f.mode=30;break e}for(r=65535&i,(n&=15)&&(y<n&&(p+=d[l++]<<y,y+=8),r+=p&(1<<n)-1,p>>>=n,y-=n),y<15&&(p+=d[l++]<<y,y+=8,p+=d[l++]<<y,y+=8),i=E[p&T];;){if(p>>>=n=i>>>24,y-=n,!(16&(n=i>>>16&255))){if(0==(64&n)){i=E[(65535&i)+(p&(1<<n)-1)];continue}e.msg="invalid distance code",f.mode=30;break e}if(a=65535&i,y<(n&=15)&&(p+=d[l++]<<y,(y+=8)<n)&&(p+=d[l++]<<y,y+=8),w<(a+=p&(1<<n)-1)){e.msg="invalid distance too far back",f.mode=30;break e}if(p>>>=n,y-=n,(n=h-b)<a){if(v<(n=a-n)&&f.sane){e.msg="invalid distance too far back",f.mode=30;break e}if(s=k,(o=0)===_){if(o+=g-n,n<r){for(r-=n;c[h++]=k[o++],--n;);o=h-a,s=c}}else if(_<n){if(o+=g+_-n,(n-=_)<r){for(r-=n;c[h++]=k[o++],--n;);if(o=0,_<r){for(r-=n=_;c[h++]=k[o++],--n;);o=h-a,s=c}}}else if(o+=_-n,n<r){for(r-=n;c[h++]=k[o++],--n;);o=h-a,s=c}for(;2<r;)c[h++]=s[o++],c[h++]=s[o++],c[h++]=s[o++],r-=3;r&&(c[h++]=s[o++],1<r)&&(c[h++]=s[o++])}else{for(o=h-a;c[h++]=c[o++],c[h++]=c[o++],c[h++]=c[o++],2<(r-=3););r&&(c[h++]=c[o++],1<r)&&(c[h++]=c[o++])}break}}break}}while(l<u&&h<m);p&=(1<<(y-=(r=y>>3)<<3))-1,e.next_in=l-=r,e.next_out=h,e.avail_in=l<u?u-l+5:5-(l-u),e.avail_out=h<m?m-h+257:257-(h-m),f.hold=p,f.bits=y}},{}],8:[function(e,t,i){var Z=e("../utils/common"),I=e("./adler32"),D=e("./crc32"),N=e("./inffast"),O=e("./inftrees"),z=1,C=2,F=0,L=-2,H=1,n=852,r=592;function P(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function a(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Z.Buf16(320),this.work=new Z.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function o(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=H,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Z.Buf32(n),t.distcode=t.distdyn=new Z.Buf32(r),t.sane=1,t.back=-1,F):L}function s(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,o(e)):L}function f(e,t){var i,n;return!e||!e.state||(n=e.state,t<0?(i=0,t=-t):(i=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t))?L:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=i,n.wbits=t,s(e))}function l(e,t){var i;return e?(i=new a,(e.state=i).window=null,(i=f(e,t))!==F&&(e.state=null),i):L}var M,V,K=!0;function j(e,t,i,n){var r,e=e.state;return null===e.window&&(e.wsize=1<<e.wbits,e.wnext=0,e.whave=0,e.window=new Z.Buf8(e.wsize)),n>=e.wsize?(Z.arraySet(e.window,t,i-e.wsize,e.wsize,0),e.wnext=0,e.whave=e.wsize):(n<(r=e.wsize-e.wnext)&&(r=n),Z.arraySet(e.window,t,i-n,r,e.wnext),(n-=r)?(Z.arraySet(e.window,t,i-n,n,0),e.wnext=n,e.whave=e.wsize):(e.wnext+=r,e.wnext===e.wsize&&(e.wnext=0),e.whave<e.wsize&&(e.whave+=r))),0}i.inflateReset=s,i.inflateReset2=f,i.inflateResetKeep=o,i.inflateInit=function(e){return l(e,15)},i.inflateInit2=l,i.inflate=function(e,t){var i,n,r,a,o,s,f,l,d,u,h,c,b,m,w,g,v,_,k,p,y,x,E,S,T=0,R=new Z.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return L;12===(i=e.state).mode&&(i.mode=13),o=e.next_out,r=e.output,f=e.avail_out,a=e.next_in,n=e.input,s=e.avail_in,l=i.hold,d=i.bits,u=s,h=f,x=F;e:for(;;)switch(i.mode){case H:if(0===i.wrap)i.mode=13;else{for(;d<16;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}if(2&i.wrap&&35615===l)R[i.check=0]=255&l,R[1]=l>>>8&255,i.check=D(i.check,R,2,0),d=l=0,i.mode=2;else if(i.flags=0,i.head&&(i.head.done=!1),!(1&i.wrap)||(((255&l)<<8)+(l>>8))%31)e.msg="incorrect header check",i.mode=30;else if(8!=(15&l))e.msg="unknown compression method",i.mode=30;else{if(d-=4,y=8+(15&(l>>>=4)),0===i.wbits)i.wbits=y;else if(y>i.wbits){e.msg="invalid window size",i.mode=30;break}i.dmax=1<<y,e.adler=i.check=1,i.mode=512&l?10:12,d=l=0}}break;case 2:for(;d<16;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}if(i.flags=l,8!=(255&i.flags)){e.msg="unknown compression method",i.mode=30;break}if(57344&i.flags){e.msg="unknown header flags set",i.mode=30;break}i.head&&(i.head.text=l>>8&1),512&i.flags&&(R[0]=255&l,R[1]=l>>>8&255,i.check=D(i.check,R,2,0)),d=l=0,i.mode=3;case 3:for(;d<32;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}i.head&&(i.head.time=l),512&i.flags&&(R[0]=255&l,R[1]=l>>>8&255,R[2]=l>>>16&255,R[3]=l>>>24&255,i.check=D(i.check,R,4,0)),d=l=0,i.mode=4;case 4:for(;d<16;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}i.head&&(i.head.xflags=255&l,i.head.os=l>>8),512&i.flags&&(R[0]=255&l,R[1]=l>>>8&255,i.check=D(i.check,R,2,0)),d=l=0,i.mode=5;case 5:if(1024&i.flags){for(;d<16;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}i.length=l,i.head&&(i.head.extra_len=l),512&i.flags&&(R[0]=255&l,R[1]=l>>>8&255,i.check=D(i.check,R,2,0)),d=l=0}else i.head&&(i.head.extra=null);i.mode=6;case 6:if(1024&i.flags&&((c=s<(c=i.length)?s:c)&&(i.head&&(y=i.head.extra_len-i.length,i.head.extra||(i.head.extra=new Array(i.head.extra_len)),Z.arraySet(i.head.extra,n,a,c,y)),512&i.flags&&(i.check=D(i.check,n,c,a)),s-=c,a+=c,i.length-=c),i.length))break e;i.length=0,i.mode=7;case 7:if(2048&i.flags){if(0===s)break e;for(c=0;y=n[a+c++],i.head&&y&&i.length<65536&&(i.head.name+=String.fromCharCode(y)),y&&c<s;);if(512&i.flags&&(i.check=D(i.check,n,c,a)),s-=c,a+=c,y)break e}else i.head&&(i.head.name=null);i.length=0,i.mode=8;case 8:if(4096&i.flags){if(0===s)break e;for(c=0;y=n[a+c++],i.head&&y&&i.length<65536&&(i.head.comment+=String.fromCharCode(y)),y&&c<s;);if(512&i.flags&&(i.check=D(i.check,n,c,a)),s-=c,a+=c,y)break e}else i.head&&(i.head.comment=null);i.mode=9;case 9:if(512&i.flags){for(;d<16;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}if(l!==(65535&i.check)){e.msg="header crc mismatch",i.mode=30;break}d=l=0}i.head&&(i.head.hcrc=i.flags>>9&1,i.head.done=!0),e.adler=i.check=0,i.mode=12;break;case 10:for(;d<32;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}e.adler=i.check=P(l),d=l=0,i.mode=11;case 11:if(0===i.havedict)return e.next_out=o,e.avail_out=f,e.next_in=a,e.avail_in=s,i.hold=l,i.bits=d,2;e.adler=i.check=1,i.mode=12;case 12:if(5===t||6===t)break e;case 13:if(i.last)l>>>=7&d,d-=7&d,i.mode=27;else{for(;d<3;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}switch(i.last=1&l,--d,3&(l>>>=1)){case 0:i.mode=14;break;case 1:B=U=void 0;var B,U=i;if(K){for(M=new Z.Buf32(512),V=new Z.Buf32(32),B=0;B<144;)U.lens[B++]=8;for(;B<256;)U.lens[B++]=9;for(;B<280;)U.lens[B++]=7;for(;B<288;)U.lens[B++]=8;for(O(z,U.lens,0,288,M,0,U.work,{bits:9}),B=0;B<32;)U.lens[B++]=5;O(C,U.lens,0,32,V,0,U.work,{bits:5}),K=!1}if(U.lencode=M,U.lenbits=9,U.distcode=V,U.distbits=5,i.mode=20,6!==t)break;l>>>=2,d-=2;break e;case 2:i.mode=17;break;case 3:e.msg="invalid block type",i.mode=30}l>>>=2,d-=2}break;case 14:for(l>>>=7&d,d-=7&d;d<32;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}if((65535&l)!=(l>>>16^65535)){e.msg="invalid stored block lengths",i.mode=30;break}if(i.length=65535&l,d=l=0,i.mode=15,6===t)break e;case 15:i.mode=16;case 16:if(c=i.length){if(0===(c=f<(c=s<c?s:c)?f:c))break e;Z.arraySet(r,n,a,c,o),s-=c,a+=c,f-=c,o+=c,i.length-=c}else i.mode=12;break;case 17:for(;d<14;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}if(i.nlen=257+(31&l),l>>>=5,d-=5,i.ndist=1+(31&l),l>>>=5,d-=5,i.ncode=4+(15&l),l>>>=4,d-=4,286<i.nlen||30<i.ndist){e.msg="too many length or distance symbols",i.mode=30;break}i.have=0,i.mode=18;case 18:for(;i.have<i.ncode;){for(;d<3;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}i.lens[A[i.have++]]=7&l,l>>>=3,d-=3}for(;i.have<19;)i.lens[A[i.have++]]=0;if(i.lencode=i.lendyn,i.lenbits=7,E={bits:i.lenbits},x=O(0,i.lens,0,19,i.lencode,0,i.work,E),i.lenbits=E.bits,x){e.msg="invalid code lengths set",i.mode=30;break}i.have=0,i.mode=19;case 19:for(;i.have<i.nlen+i.ndist;){for(;g=(T=i.lencode[l&(1<<i.lenbits)-1])>>>16&255,v=65535&T,!((w=T>>>24)<=d);){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}if(v<16)l>>>=w,d-=w,i.lens[i.have++]=v;else{if(16===v){for(S=w+2;d<S;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}if(l>>>=w,d-=w,0===i.have){e.msg="invalid bit length repeat",i.mode=30;break}y=i.lens[i.have-1],c=3+(3&l),l>>>=2,d-=2}else if(17===v){for(S=w+3;d<S;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}y=0,c=3+(7&(l>>>=w)),l>>>=3,d=d-w-3}else{for(S=w+7;d<S;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}y=0,c=11+(127&(l>>>=w)),l>>>=7,d=d-w-7}if(i.have+c>i.nlen+i.ndist){e.msg="invalid bit length repeat",i.mode=30;break}for(;c--;)i.lens[i.have++]=y}}if(30===i.mode)break;if(0===i.lens[256]){e.msg="invalid code -- missing end-of-block",i.mode=30;break}if(i.lenbits=9,E={bits:i.lenbits},x=O(z,i.lens,0,i.nlen,i.lencode,0,i.work,E),i.lenbits=E.bits,x){e.msg="invalid literal/lengths set",i.mode=30;break}if(i.distbits=6,i.distcode=i.distdyn,E={bits:i.distbits},x=O(C,i.lens,i.nlen,i.ndist,i.distcode,0,i.work,E),i.distbits=E.bits,x){e.msg="invalid distances set",i.mode=30;break}if(i.mode=20,6===t)break e;case 20:i.mode=21;case 21:if(6<=s&&258<=f){e.next_out=o,e.avail_out=f,e.next_in=a,e.avail_in=s,i.hold=l,i.bits=d,N(e,h),o=e.next_out,r=e.output,f=e.avail_out,a=e.next_in,n=e.input,s=e.avail_in,l=i.hold,d=i.bits,12===i.mode&&(i.back=-1);break}for(i.back=0;g=(T=i.lencode[l&(1<<i.lenbits)-1])>>>16&255,v=65535&T,!((w=T>>>24)<=d);){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}if(g&&0==(240&g)){for(_=w,k=g,p=v;g=(T=i.lencode[p+((l&(1<<_+k)-1)>>_)])>>>16&255,v=65535&T,!(_+(w=T>>>24)<=d);){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}l>>>=_,d-=_,i.back+=_}if(l>>>=w,d-=w,i.back+=w,i.length=v,0===g){i.mode=26;break}if(32&g){i.back=-1,i.mode=12;break}if(64&g){e.msg="invalid literal/length code",i.mode=30;break}i.extra=15&g,i.mode=22;case 22:if(i.extra){for(S=i.extra;d<S;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}i.length+=l&(1<<i.extra)-1,l>>>=i.extra,d-=i.extra,i.back+=i.extra}i.was=i.length,i.mode=23;case 23:for(;g=(T=i.distcode[l&(1<<i.distbits)-1])>>>16&255,v=65535&T,!((w=T>>>24)<=d);){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}if(0==(240&g)){for(_=w,k=g,p=v;g=(T=i.distcode[p+((l&(1<<_+k)-1)>>_)])>>>16&255,v=65535&T,!(_+(w=T>>>24)<=d);){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}l>>>=_,d-=_,i.back+=_}if(l>>>=w,d-=w,i.back+=w,64&g){e.msg="invalid distance code",i.mode=30;break}i.offset=v,i.extra=15&g,i.mode=24;case 24:if(i.extra){for(S=i.extra;d<S;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}i.offset+=l&(1<<i.extra)-1,l>>>=i.extra,d-=i.extra,i.back+=i.extra}if(i.offset>i.dmax){e.msg="invalid distance too far back",i.mode=30;break}i.mode=25;case 25:if(0===f)break e;if(i.offset>(c=h-f)){if((c=i.offset-c)>i.whave&&i.sane){e.msg="invalid distance too far back",i.mode=30;break}b=c>i.wnext?(c-=i.wnext,i.wsize-c):i.wnext-c,c>i.length&&(c=i.length),m=i.window}else m=r,b=o-i.offset,c=i.length;for(f-=c=f<c?f:c,i.length-=c;r[o++]=m[b++],--c;);0===i.length&&(i.mode=21);break;case 26:if(0===f)break e;r[o++]=i.length,f--,i.mode=21;break;case 27:if(i.wrap){for(;d<32;){if(0===s)break e;s--,l|=n[a++]<<d,d+=8}if(h-=f,e.total_out+=h,i.total+=h,h&&(e.adler=i.check=(i.flags?D:I)(i.check,r,h,o-h)),h=f,(i.flags?l:P(l))!==i.check){e.msg="incorrect data check",i.mode=30;break}d=l=0}i.mode=28;case 28:if(i.wrap&&i.flags){for(;d<32;){if(0===s)break e;s--,l+=n[a++]<<d,d+=8}if(l!==(4294967295&i.total)){e.msg="incorrect length check",i.mode=30;break}d=l=0}i.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return-4;default:return L}return e.next_out=o,e.avail_out=f,e.next_in=a,e.avail_in=s,i.hold=l,i.bits=d,(i.wsize||h!==e.avail_out&&i.mode<30&&(i.mode<27||4!==t))&&j(e,e.output,e.next_out,h-e.avail_out),u-=e.avail_in,h-=e.avail_out,e.total_in+=u,e.total_out+=h,i.total+=h,i.wrap&&h&&(e.adler=i.check=(i.flags?D:I)(i.check,r,h,e.next_out-h)),e.data_type=i.bits+(i.last?64:0)+(12===i.mode?128:0)+(20===i.mode||15===i.mode?256:0),x=(0==u&&0===h||4===t)&&x===F?-5:x},i.inflateEnd=function(e){var t;return e&&e.state?((t=e.state).window&&(t.window=null),e.state=null,F):L},i.inflateGetHeader=function(e,t){return!e||!e.state||0==(2&(e=e.state).wrap)?L:((e.head=t).done=!1,F)},i.inflateSetDictionary=function(e,t){var i,n=t.length;return!e||!e.state||0!==(i=e.state).wrap&&11!==i.mode?L:11===i.mode&&I(1,t,n,0)!==i.check?-3:j(e,t,n,n)?(i.mode=31,-4):(i.havedict=1,F)},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":1,"./adler32":3,"./crc32":5,"./inffast":7,"./inftrees":9}],9:[function(e,t,i){var N=e("../utils/common"),O=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],z=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],C=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],F=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,i,n,r,a,o,s){for(var f,l,d,u,h,c,b,m,w,g=s.bits,v=0,_=0,k=0,p=0,y=0,x=0,E=0,S=0,T=0,R=0,A=null,B=0,U=new N.Buf16(16),Z=new N.Buf16(16),I=null,D=0,v=0;v<=15;v++)U[v]=0;for(_=0;_<n;_++)U[t[i+_]]++;for(y=g,p=15;1<=p&&0===U[p];p--);if(p<y&&(y=p),0===p)r[a++]=20971520,r[a++]=20971520,s.bits=1;else{for(k=1;k<p&&0===U[k];k++);for(y<k&&(y=k),v=S=1;v<=15;v++)if((S=(S<<=1)-U[v])<0)return-1;if(0<S&&(0===e||1!==p))return-1;for(Z[1]=0,v=1;v<15;v++)Z[v+1]=Z[v]+U[v];for(_=0;_<n;_++)0!==t[i+_]&&(o[Z[t[i+_]]++]=_);if(c=0===e?(A=I=o,19):1===e?(A=O,B-=257,I=z,D-=257,256):(A=C,I=F,-1),v=k,h=a,E=_=R=0,d=-1,u=(T=1<<(x=y))-1,1===e&&852<T||2===e&&592<T)return 1;for(;;){for(w=o[_]<c?(m=0,o[_]):o[_]>c?(m=I[D+o[_]],A[B+o[_]]):(m=96,0),f=1<<(b=v-E),k=l=1<<x;r[h+(R>>E)+(l-=f)]=b<<24|m<<16|w|0,0!==l;);for(f=1<<v-1;R&f;)f>>=1;if(R=0!==f?(R&f-1)+f:0,_++,0==--U[v]){if(v===p)break;v=t[i+o[_]]}if(y<v&&(R&u)!==d){for(h+=k,S=1<<(x=v-(E=0===E?y:E));x+E<p&&!((S-=U[x+E])<=0);)x++,S<<=1;if(T+=1<<x,1===e&&852<T||2===e&&592<T)return 1;r[d=R&u]=y<<24|x<<16|h-a|0}}0!==R&&(r[h+R]=v-E<<24|64<<16|0),s.bits=y}return 0}},{"../utils/common":1}],10:[function(e,t,i){t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],11:[function(e,t,i){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],"/lib/inflate.js":[function(e,t,i){var u=e("./zlib/inflate"),h=e("./utils/common"),c=e("./utils/strings"),b=e("./zlib/constants"),n=e("./zlib/messages"),r=e("./zlib/zstream"),a=e("./zlib/gzheader"),m=Object.prototype.toString;function o(e){if(!(this instanceof o))return new o(e);this.options=h.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options,e=(t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits)&&(t.windowBits=-15),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new r,this.strm.avail_out=0,u.inflateInit2(this.strm,t.windowBits));if(e!==b.Z_OK)throw new Error(n[e]);this.header=new a,u.inflateGetHeader(this.strm,this.header)}function s(e,t){t=new o(t);if(t.push(e,!0),t.err)throw t.msg||n[t.err];return t.result}o.prototype.push=function(e,t){var i,n,r,a,o,s=this.strm,f=this.options.chunkSize,l=this.options.dictionary,d=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?b.Z_FINISH:b.Z_NO_FLUSH,"string"==typeof e?s.input=c.binstring2buf(e):"[object ArrayBuffer]"===m.call(e)?s.input=new Uint8Array(e):s.input=e,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=new h.Buf8(f),s.next_out=0,s.avail_out=f),(i=u.inflate(s,b.Z_NO_FLUSH))===b.Z_NEED_DICT&&l&&(o="string"==typeof l?c.string2buf(l):"[object ArrayBuffer]"===m.call(l)?new Uint8Array(l):l,i=u.inflateSetDictionary(this.strm,o)),i===b.Z_BUF_ERROR&&!0===d&&(i=b.Z_OK,d=!1),i!==b.Z_STREAM_END&&i!==b.Z_OK)return this.onEnd(i),!(this.ended=!0)}while(!s.next_out||0!==s.avail_out&&i!==b.Z_STREAM_END&&(0!==s.avail_in||n!==b.Z_FINISH&&n!==b.Z_SYNC_FLUSH)||("string"===this.options.to?(o=c.utf8border(s.output,s.next_out),r=s.next_out-o,a=c.buf2string(s.output,o),s.next_out=r,s.avail_out=f-r,r&&h.arraySet(s.output,s.output,o,r,0),this.onData(a)):this.onData(h.shrinkBuf(s.output,s.next_out))),0===s.avail_in&&0===s.avail_out&&(d=!0),(0<s.avail_in||0===s.avail_out)&&i!==b.Z_STREAM_END);return(n=i===b.Z_STREAM_END?b.Z_FINISH:n)===b.Z_FINISH?(i=u.inflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===b.Z_OK):n!==b.Z_SYNC_FLUSH||(this.onEnd(b.Z_OK),!(s.avail_out=0))},o.prototype.onData=function(e){this.chunks.push(e)},o.prototype.onEnd=function(e){e===b.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},i.Inflate=o,i.inflate=s,i.inflateRaw=function(e,t){return(t=t||{}).raw=!0,s(e,t)},i.ungzip=s},{"./utils/common":1,"./utils/strings":2,"./zlib/constants":4,"./zlib/gzheader":6,"./zlib/inflate":8,"./zlib/messages":10,"./zlib/zstream":11}]},{},[])("/lib/inflate.js"),z=Uint16Array.BYTES_PER_ELEMENT,C=Int32Array.BYTES_PER_ELEMENT,F=Uint32Array.BYTES_PER_ELEMENT,L={METADATA:0,TERRAIN:1,DBROOT:2};L.fromString=function(e){return"Metadata"===e?L.METADATA:"Terrain"===e?L.TERRAIN:"DbRoot"===e?L.DBROOT:void 0};var H=32301;var P=5,M=4;var V=1953029805,K=2917034100;return t(function(e,t){var i=L.fromString(e.type),n=e.buffer,r=(D(e.key,n),function(e){var t=new DataView(e),i=0,n=t.getUint32(0,!0);if(i+=F,n!==V&&n!==K)throw new I.RuntimeError("Invalid magic");t=t.getUint32(i,n===V),i+=F,n=new Uint8Array(e,i),e=O.inflate(n);if(e.length===t)return e;throw new I.RuntimeError("Size of packet doesn't match header")}(n)),n=r.buffer,a=r.length;switch(i){case L.METADATA:var o=n,s=a,f=e.quadKey,l=new DataView(o),d=0,o=l.getUint32(d,!0);if(d+=F,o!==H)throw new I.RuntimeError("Invalid magic");if(o=l.getUint32(d,!0),d+=F,1!==o)throw new I.RuntimeError("Invalid data type. Must be 1 for QuadTreePacket");if(o=l.getUint32(d,!0),d+=F,2!==o)throw new I.RuntimeError("Invalid QuadTreePacket version. Only version 2 is supported.");var u=l.getInt32(d,!0),o=(d+=C,l.getInt32(d,!0));if(d+=C,32!==o)throw new I.RuntimeError("Invalid instance size.");var h=l.getInt32(d,!0),c=(d+=C,l.getInt32(d,!0)),b=(d+=C,l.getInt32(d,!0));if(h!==u*o+(d+=C))throw new I.RuntimeError("Invalid dataBufferOffset");if(h+c+b!==s)throw new I.RuntimeError("Invalid packet offsets");for(var m=[],w=0;w<u;++w){var g=l.getUint8(d),v=(++d,++d,l.getUint16(d,!0)),_=(d+=z,l.getUint16(d,!0)),k=(d+=z,l.getUint16(d,!0)),p=(d=(d=(d=d+z+z)+z+C)+C+8,l.getUint8(d++)),y=l.getUint8(d++);d+=z,m.push(new N(g,v,_,k,p,y))}var x=[],E=0;return o=0,h=m[E++],""===f?++o:x[f]=h,function e(t,i,n){var r=!1;if(4===n){if(i.hasSubtree())return;r=!0}for(var a=0;a<4;++a){var o=t+a.toString();if(r)x[o]=null;else if(n<4)if(i.hasChild(a)){if(E===u)return void console.log("Incorrect number of instances");var s=m[E++];e(o,x[o]=s,n+1)}else x[o]=null}}(f,h,o),x;case L.TERRAIN:for(var S=n,T=a,R=t,A=new DataView(S),B=0,U=[];U.length<P;){var Z=B,Z=(B=function(e){for(var t=0;t<M;++t){var i=A.getUint32(e,!0);if(T<(e=e+F+i))throw new I.RuntimeError("Malformed terrain packet found.")}return e}(B),S.slice(Z,B));R.push(Z),U.push(Z)}return U;case L.DBROOT:return t.push(n),{buffer:n}}})});
