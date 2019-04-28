/* ACIDjs by ARITY 2.2.1 - ARITY.COMPANY - SENTIVATE.COM */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.$=t()})(this,function(){'use strict';let e;const t=(...t)=>e(...t);t.superMethod=t=>{e=t};const n=Object,i=n.keys,r=n.is,s=n.assign,a=n.getOwnPropertyDescriptor,d=n.defineProperty,l=n.getOwnPropertyNames,o=e=>i(e).length;s(t,{assign:s,defineProperty:d,getOwnPropertyDescriptor:a,getOwnPropertyNames:l,is:r,keys:i,objectSize:o});const c=Array,p=c.from;s(t,{toArray:p});const u=Reflect.apply;s(t,{apply:u});const h=function(e){return void 0===e},y=e=>null===e,m=e=>!h(e)&&!y(e),g=e=>t=>!!m(t)&&t.constructor===e,f=/\.|\+/,k=Array.isArray,b=g(String),A=g(Number),x=e=>!!m(e)&&'Object('===e.constructor.toString().trim().slice(9,16),w=e=>!!m(e)&&e instanceof Function,O=e=>!!e.length,v=e=>t=>!!m(t)&&e.test(t),S=v(/\.css$/),C=v(/\.json$/),E=v(/\.js$/),j=v(/\.html$/),F=v(/\./),N=/\.([0-9a-z]+)/;s(t,{getFileExtension:e=>{const t=e.match(N);if(t)return t[1]},has:(e,...t)=>e.includes(...t),hasDot:F,hasLength:O,hasValue:m,isArray:k,isBoolean:e=>'Boolean'===e.constructor.name,isDate:e=>e instanceof Date,isDecimal:e=>f.test(e.toString()),isEmpty:e=>b(e)||k(e)?!O(e):x(e)?!o(e):!m(e),isFileCSS:S,isFileHTML:j,isFileJS:E,isFileJSON:C,isFunction:w,isNull:y,isNumber:A,isPlainObject:x,isRegExp:e=>e instanceof RegExp,isString:b,isUndefined:h});const M=(e,t)=>{const n=e.length;for(let i=0;i<n;i++)t(e[i],i,e,n);return e},L=(e,t)=>{const n=e.length;for(let i=n-1;0<=i;i--)t(e[i],i,e,n);return e},I=(e,t)=>{const n=e.length;for(let i=0;i<n;i++)if(!1===t(e[i],i,e,n))return!1;return!0},R=(e,t,n=[])=>(M(e,(e,i,r,s)=>{!0===t(e,i,n,r,s)&&n.push(e)}),n),D=(e=>(t,n,i=[])=>(e(t,(e,t,r,s)=>{i[t]=n(e,t,i,r,s)}),i))(M),B=(e,t,n=[])=>(M(e,(e,i,r,s)=>{const a=t(e,i,n,r,s);m(a)&&n.push(a)}),n);s(t,{compactMapArray:B,eachArray:M,eachArrayRight:L,filterArray:R,mapArray:D,mapArrayRight:(e,t,n=[])=>{let i=0;const r=e.length;for(let s=r-1;0<=s;s--)n[i]=t(e[s],s,e,r),i++;return n},mapWhile:(e,t,n=[])=>{const i=e.length;for(let r=0;r<i;r++){const s=t(e[r],r,n,e,i);if(!1===s)break;n[r]=s}return n},whileArray:I});const U=e=>`[object ${e}]`,T=e=>t=>!!m(t)&&t.toString()===e;M(['Arguments','Map','Set','WeakMap'],e=>{t[`is${e}`]=T(U(e))});M(['ArrayBuffer','Float32Array','Float64Array','Int8Array','Int16Array','Int32Array','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array'],e=>{t[`is${e}`]=t=>!!m(t)&&t.constructor.name===e});s(t,{asyncEach:async(e,t)=>{const n=e.length;for(let i=0;i<n;i++){const r=e[i];await r(t,i,e,n)}return e}});const q=e=>k(e)?e:[e];s(t,{ensureArray:q});const P=e=>e.reduce((e,t)=>e.concat(k(t)?P(t):t),[]);s(t,{flatten:(e,t=1)=>{let n=e;for(let r=0;r<t;r++)n=n.reduce((e,t)=>e.concat(q(t)),[]);return n},flattenDeep:P});s(t,{remove:(e,...t)=>{let n=e.length;for(let i=0;i<n;i++){const r=e[i];t.includes(r)&&(e.splice(i,1),i--,n--)}return e},removeBy:(e,t)=>{let n=e.length;for(let i=0;i<n;i++){const r=e[i];t(r,i)&&(e.splice(i,1),i--,n--)}return e}});s(t,{chunk:(e,t=1)=>{const n=[];let i=0;return e.forEach((e,r)=>{r%t||(n.push([]),r&&i++),n[i].push(e)}),n}});s(t,{rest:e=>e.slice(1,e.length)});const W=e=>(e.length=0,e);s(t,{clear:W});s(t,{right:(e,t)=>e[e.length-1-t]});s(t,{cloneArray:e=>e.slice()});const z=Math,H=z.floor,K=z.random,Z=(e,t=0)=>H(K()*(e-t))+t;s(t,{add:(e,t)=>e+t,deduct:e=>e-1,divide:(e,t)=>e/t,increment:e=>e+1,minus:(e,t)=>e-t,multiply:(e,t)=>e*t,randomArbitrary:(e,t=0)=>K()*(e-t)+t,randomInt:Z,remainder:(e,t)=>e%t});const $=(e,t=e.length)=>{if(1>=e.length)return p(e);const n=p(e);for(let i,r,s=0;s<t;)i=Z(n.length-1,0),r=n[s],n[s]=n[i],n[i]=r,s++;return n};s(t,{shuffle:$});const J=(e,t=1)=>{if(!e)return!1;const n=e.length;if(n===t||t>n)return $(e);if(1===t)return[e[Z(n-1,0)]];const i=[],r={};for(let n,s=0;s<t;)n=Z(e.length-1,0),r[n]||(i.push(e[n]),r[n]=!0,s++);return i};s(t,{sample:J});s(t,{compact:e=>e.filter(e=>(!b(e)||e.length)&&e)});s(t,{initial:e=>e.slice(0,e.length-1)});const V=Math.min;s(t,{smallest:e=>V(...e)});const _=(e,t,n)=>{const i=[];for(let r=e;r<t;)i.push(r),r+=n;return i},G=(e,t,n)=>{const i=0>n?-1*n:n,r=[];for(let s=e;s>t;)r.push(s),s-=i;return r};s(t,{range:(e,t,n=1)=>e<t?_(e,t,n):G(e,t,n)});s(t,{intersect:(e,...t)=>B(e,e=>{const n=I(t,t=>t.includes(e));if(n)return e})});s(t,{difference:(e,...t)=>{const n=P(t);return B(e,e=>{if(!n.includes(e))return e})}});const Q=(e,t,n=e.length)=>e.splice(t,n);s(t,{drop:Q,dropRight:(e,t,n=e.length)=>Q(e,0,n-t)});const X=(e,t)=>e.length===t.length&&I(e,(e,n)=>t[n]===e);s(t,{isMatchArray:X});s(t,{sortedIndex:(e,t)=>{let n=0;return I(e,(e,i)=>(n=i,!!(t>e))),n}});const Y=Math.max;s(t,{largest:e=>Y(...e)});s(t,{sum:e=>e.reduce((e,t)=>e+t,0)});const ee=async(e,t)=>{const n=e.length;for(let i=0;i<n;i++)await t(e[i],i,e,n);return e},te=async(e,t)=>{const n=e.length;for(let i=n-1;0<=i;i--)await t(e[i],i,e,n);return e};s(t,{eachAsync:ee,eachAsyncRight:te});s(t,{last:(e,t)=>{const n=e.length;return t?e.slice(n-t,n):e[n-1]}});s(t,{take:(e,t=1)=>e.slice(0,t),takeRight:(e,t=1)=>{const n=e.length;return e.slice(n-t,n)}});const ne=async(e,t)=>{const n=[];return await ee(e,async(e,i,r)=>{n[i]=await t(e,i,r)}),n};s(t,{mapAsync:ne});const ie=(e,t,n)=>n.indexOf(e)===t,re=(e,t,n)=>e!==n[t-1],se=(e,t)=>t?e.filter(re):e.filter(ie);s(t,{unique:se});s(t,{union:(...e)=>se(P(e))});s(t,{compactMapAsync:async(e,t)=>{const n=[];let i;return await ee(e,async(e,r,s)=>{i=await t(e,r,n,s),m(i)&&n.push(i)}),n}});const ae=(e,t)=>e-t;s(t,{numSort:e=>e.sort(ae)});s(t,{arrayToObject:(e,t)=>{const n={};return M(e,(e,i)=>{n[t[i]]=e}),n}});s(t,{without:(e,t)=>e.filter(e=>!t.includes(e))});s(t,{partition:(e,t)=>{const n=[];return[B(e,e=>t(e)?e:void n.push(e)),n]}});s(t,{xor:(...e)=>{const t=[];return M(e,e=>{M(se(e),e=>{t.includes(e)?t.splice(t.indexOf(e),1):t.push(e)})}),t}});s(t,{unZip:e=>e[0].map((t,n)=>e.map(e=>e[n])),zip:(...e)=>e[0].map((t,n)=>e.map(e=>e[n]))});s(t,{first:(e,t)=>t?e.slice(0,t):e[0]});const de=(e,t)=>t-e;s(t,{rNumSort:e=>e.sort(de)});const le=(e,t,n)=>{const i=n?e:0,r=n?t:e;for(let s=i;s<r;s++)(n||t)(s,i,r)};s(t,{times:le,timesMap:(e,t,n,i=[])=>{const r=n?e:0,s=n?t:e;let a;return le(r,s,e=>{a=(n||t)(e,r,s,i),m(a)&&i.push(a)}),i}});const oe=e=>e?oe[e]:i(oe);let ce=navigator.userAgent.toLowerCase();ce=ce.replace(/_/g,'.'),ce=ce.replace(/[#_,;()]/g,'');const pe=ce.split(/ |\//);M(pe,e=>{oe[e]=!0}),s(t,{isAgent:oe});const ue=(e,...t)=>(e.addEventListener(...t),e);s(t,{eventAdd:ue,eventRemove:(e,...t)=>(e.removeEventListener(...t),e)});s(t,{isEnter:e=>13===e.keyCode});const he=document.createDocumentFragment.bind(document),ye=(e,t)=>(e.appendChild(t),t),me=(e,t)=>{const n=i(e);M(n,(i,r,s,a)=>{t(e[i],i,e,a,n)})},ge=(e,t)=>{const n=i(e);return I(n,(n,i,r,s)=>t(e[n],n,e,s,r))},fe=(e,t,n={})=>(me(e,(e,i,r,s,a)=>{!0===t(e,i,n,r,s,a)&&(n[i]=e)}),n),ke=(e,t,n={})=>(me(e,(e,i,r,s,a)=>{n[i]=t(e,i,n,r,s,a)}),n),be=(e,t,n={})=>(me(e,(e,i,r,s,a)=>{const d=t(e,i,n,s,a);m(d)&&(n[i]=d)}),n);s(t,{compactMapObject:be,eachObject:me,filterObject:fe,mapObject:ke,whileObject:ge});const Ae=(e,t)=>{const n={};return M(e,(e,i)=>{n[e]=t[i]}),n};s(t,{unZipObject:e=>{const t=[],n=[];return me(e,(e,i)=>{t.push(i),n.push(e)}),[t,n]},zipObject:Ae});const xe=(e,t)=>k(t)?Ae(t,D(t,t=>e.getAttribute(t))):(me(t,(t,n)=>{e.setAttribute(n,t)}),e);s(t,{nodeAttribute:xe});const we=e=>new Promise(e);s(t,{promise:we});const Oe=(e,t=1)=>e.substr(t);s(t,{chunkString:(e,t)=>e.match(new RegExp(`(.|[\r\n]){1,${t}}`,'g')),initialString:(e,t=1)=>e.slice(0,-1*t),insertInRange:(e,t,n)=>e.slice(0,t)+n+e.slice(t,e.length),restString:Oe,rightString:(e,t=1)=>e[e.length-t]});const ve=/^.[\w_-]+$/,Se=/^[A-Za-z]+$/,Ce=/\s/,Ee=document.getElementsByClassName.bind(document),je=document.getElementsByTagName.bind(document),Fe=document.getElementById.bind(document),Ne=document.querySelector.bind(document),Me=document.querySelectorAll.bind(document);s(t,{getByClass:Ee,getById:Fe,getByTag:je,querySelector:Ne,querySelectorAll:Me,selector:e=>{const t=e[0];switch(t){case'#':if(!Ce.test(e))return Fe(Oe(e));break;case'.':if(ve.test(e))return Ee(Oe(e));break;default:if(Se.test(e))return je(e);}return Me(e)}});const Le=document.createElement.bind(document),Ie=e=>we((t,n)=>{ue(e,'load',t,!0),ue(e,'error',n,!0),ye(Ne('head'),e)}),Re=e=>{const t=xe(Le('script'),{async:'',src:`${e}.js`});return Ie(t)};s(t,{importjs:Re});const De=e=>{const t=document.readyState;return'interactive'===t||'completed'===t||'complete'===t?!e||e():(e&&ue(document,'DOMContentLoaded',e),!1)};s(t,{isDocumentReady:De}),De(()=>{Re('/index')});const Be=location.protocol,Ue='http:'===Be?'ws':'wss',Te=location.hostname,qe={hardware:{cores:navigator.hardwareConcurrency},host:{name:Te,protocol:Be,protocolSocket:Ue}};s(t,{info:qe});const Pe=()=>{s(qe,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})},We=()=>{requestAnimationFrame(Pe)};De(We),ue(window,'load',We,!0),ue(window,'resize',We,!0),s(t,{saveDimensions:Pe,updateDimensions:We});const ze=(e,...t)=>{if(w(e))return e(...t)};s(t,{ifInvoke:ze});let He;const Ke=[],Ze=()=>{M(Ke,ze),W(Ke),He=!1},$e=(...e)=>{Ke.push(...e),He||(He=requestAnimationFrame(Ze))};s(t,{batch:$e});const Je=JSON,Ve=Je.parse,_e=Je.stringify;s(t,{jsonParse:Ve,stringify:_e});const Ge=(e,t)=>`color:${e};background:${t};`,Qe={alert:Ge('#fff','#f44336'),important:Ge('#fff','#E91E63'),notify:Ge('#fff','#651FFF'),warning:Ge('#000','#FFEA00')};s(t,{cnsl:(e,t)=>{const n=b(e)?e:_e(e);console.log(`%c${n}`,`${Qe[t]}font-size:13px;padding:2px 5px;border-radius:2px;`)},cnslTheme:(e,t,n)=>{Qe[e]=Ge(t,n)}});t.isDom=e=>e&&9!==e.nodeType,M(['HTMLCollection','NodeList'],e=>{t[`is${e}`]=T(U(e))});const Xe=(e,t,n=!0)=>{const i=n?e:[...e];return i.sort((e,n)=>n[t]?e[t]?e[t]<n[t]?1:e[t]>n[t]?-1:0:1:-1)};s(t,{getNewest:(e,t)=>Xe(e,t,!1)[0],sortNewest:Xe});const Ye=(e,t='id',n=!0)=>{const i=n?e:[...e];return i.sort((e,n)=>n[t]?e[t]?e[t]<n[t]?-1:e[t]>n[t]?1:0:-1:1)};s(t,{getOldest:(e,t='id')=>Ye(e,t)[0],sortOldest:Ye});s(t,{groupBy:(e,t)=>{const n={};return M(e,e=>{const i=t(e);n[i]||(n[i]=[]),n[i].push(e)}),n}});const et=(e,t)=>{let n=0;return M(e,e=>{e[t]&&n++}),n},tt=(e,t)=>{let n=0;return M(e,e=>{e[t]||n++}),n};s(t,{countBy:(e,t)=>{const n={};let i;return M(e,e=>{i=t(e),n[i]||(n[i]=0),n[i]++}),n},countKey:et,countWithoutKey:tt});s(t,{indexBy:(e,t='id')=>{const n={};return M(e,e=>{n[e[t]]=e}),n}});s(t,{pluck:(e,t)=>D(e,e=>{const n=e[t];return n})});const nt=(e,t)=>D(t,t=>e[t]);s(t,{pluckObject:nt});s(t,{pluckValues:(e,t)=>D(e,e=>nt(e,t))});s(t,{invoke:(e,t,n)=>D(e,(e,i)=>e[t](n,i))});s(t,{invokeAsync:(e,t,n)=>ne(e,async(e,i)=>e[t](n,i))});const it=(e,t,n,i,r)=>{if(e[r]===i)return!0};s(t,{findIndex:(e,t,n='id')=>{const i=e.findIndex((i,r)=>it(i,r,e,t,n));return-1!==i&&i},findItem:(e,t,n='id')=>{const i=e.find((i,r)=>it(i,r,e,t,n));return-1!==i&&i}});s(t,{sortAlphabetical:(e,t)=>e.sort((e,n)=>{const i=e[t],r=n[t];return i<r?-1:i>r?1:0})});s(t,{ary:(e,t)=>(...n)=>e(...n.splice(0,t))});s(t,{curry:(e,t=e.length)=>{const n=[],i=(...r)=>{if(n.push(...r),n.length===t){const t=e(...n);return W(n),t}return i};return i},curryRight:(e,t=e.length)=>{const n=[],i=(...r)=>{if(n.unshift(...r),n.length===t){const t=e(...n);return W(n),t}return i};return i}});s(t,{after:(e,t)=>{let n,i=e;const r=(...e)=>(null!==i&&i--,0>=i&&(n=t(...e),i=null),n);return r},before:(e,t)=>{let n,i=e;const r=(...e)=>(null!==i&&i--,1<=i?n=t(...e):i=null,n);return r},once:e=>{let t;const n=(...n)=>(m(t)||(t=e(...n)),t);return n}});s(t,{noop:()=>{},stubArray:()=>[],stubFalse:()=>!1,stubObject:()=>({}),stubString:()=>'',stubTrue:()=>!0});const rt=(e,t)=>e.forEach(t),st=(e,t)=>(n,i,r)=>{let s;if(m(n))return s=k(n)?e:x(n)||w(n)?t:n.forEach?rt:t,s(n,i,r)},at=st(I,ge),dt=st(M,me),lt=st(R,fe),ot=st(D,ke),ct=st(B,be);s(t,{compactMap:ct,each:dt,eachWhile:at,filter:lt,map:ot});s(t,{bindAll:(e,t)=>ot(e,e=>w(e)?e.bind(t):e)});s(t,{negate:e=>(...t)=>!e(...t)});s(t,{every:at});s(t,{over:e=>(...t)=>ot(e,e=>e(...t)),overEvery:e=>(...t)=>at(e,e=>e(...t))});const pt=(e,t)=>setTimeout(e,t),ut=(e,t)=>setInterval(e,t),ht=(e,t)=>()=>{le(0,e(()=>{},0),e=>{t(e)})},yt=ht(pt,clearTimeout),mt=ht(ut,clearInterval);s(t,{clearIntervals:mt,clearTimers:yt,debounce:(e,t)=>{let n=!1;const i=(...i)=>{!1!==n&&clearTimeout(n),n=pt(()=>{e(...i),n=!1},t)};return i.clear=()=>{n&&(clearTimeout(n),n=!1)},i},interval:ut,throttle:(e,t)=>{let n,i=!1;const r=(...r)=>i?void(n=!0):void(e(...r),i=pt(()=>{n&&e(...r),i=!1},t));return r.clear=()=>{clearTimeout(i),i=!1},r},timer:pt});const gt=(e,t)=>(dt(t,(t,n)=>{e.methods[n]=(...n)=>(t(e.value,...n),e.methods)}),e);s(t,{chain:e=>{const t=e=>(t.value=e,t.methods);return s(t,{add(e){return gt(t,e)},done(){const e=t.value;return t.value=null,e},methods:{}}),t.add(e),t}});s(t,{inAsync:async(e,t)=>ee(e,async e=>{await e(t)}),inSync:(e,t)=>dt(e,e=>{e(t)})});s(t,{nthArg:(e=0)=>(...t)=>t[e]});s(t,{reArg:(e,t)=>(...n)=>e(...t.map(e=>n[e]))});s(t,{wrap:(e,t)=>(...n)=>t(e,...n)});s(t,{isNumberEqual:(e,t)=>e===t,isNumberInRange:(e,t,n)=>e>t&&e<n,isZero:e=>0===e});const ft=(e,t)=>{const n=i(e);return I(t,e=>n.includes(e))};s(t,{hasAnyKeys:(e,t)=>{const n=i(e);return!!t.find(e=>n.includes(e))},hasKeys:ft});s(t,{pick:(e,t,n={})=>(M(t,t=>{n[t]=e[t]}),n)});s(t,{compactKeys:e=>{const t=[];return me(e,(e,n)=>{e&&t.push(n)}),t}});s(t,{isMatchObject:(e,t)=>{const n=i(e);return!!X(n,i(t))&&I(n,n=>e[n]===t[n])}});s(t,{invert:(e,t={})=>(me(e,(e,n)=>{t[e]=n}),t)});s(t,{omit:(e,t)=>fe(e,(e,n)=>!t.includes(n))});const kt=async(e,t)=>{const n=i(e);return await ee(n,(i,r,s,a)=>t(e[i],i,e,a,n)),e};s(t,{eachObjectAsync:kt});s(t,{compactMapObjectAsync:async(e,t,n={})=>(await kt(e,async(e,i,r,s,a)=>{const d=await t(e,i,n,s,a);m(d)&&(n[i]=d)}),n),mapObjectAsync:async(e,t,n={})=>(await kt(e,async(e,i,r,s,a)=>{n[i]=await t(e,i,n,r,s,a)}),n)});const bt=/[-_]/g,At=/ (.)/g;s(t,{camelCase:e=>e.toLowerCase().replace(At,e=>e.toUpperCase().replace(/ /g,'')),kebabCase:e=>e.replace(bt,' ').trim().toLowerCase().replace(At,'-$1'),snakeCase:e=>e.replace(bt,' ').trim().toLowerCase().replace(At,'_$1'),upperCase:e=>e.replace(bt,' ').trim().toUpperCase()});s(t,{replaceList:(e,t,n)=>e.replace(new RegExp('\\b'+t.join('|')+'\\b','gi'),n)});const xt=/%(?![\da-f]{2})/gi,wt=/&/g,Ot=/</g,vt=/>/g,St=/"/g,Ct=e=>decodeURIComponent(e.replace(xt,()=>'%25')),Et=e=>e.replace(wt,'&amp;').replace(Ot,'&lt;').replace(vt,'&gt;').replace(St,'&quot;');s(t,{htmlEntities:Et,rawURLDecode:Ct,sanitize:e=>Et(Ct(e))});const jt=/\S+/g,Ft=/\w+/g;s(t,{tokenize:e=>e.match(jt)||[],words:e=>e.match(Ft)||[]});const Nt=(e,t,n)=>{const i=e.split(''),r=i.length;let s,a=n-t;for(;a<r&&0<=a&&(s=i[a],' '!==s);a--);return e.slice(0,a).trim()},Mt=(e,t,n)=>{const i=e.split(''),r=i.length;let s,a=t;for(;a<r&&0<a&&(s=i[a],' '!==s);a++);return e.substr(a,n).trim()};s(t,{truncate:(e,t)=>{const n=e.length;return n>t?Nt(e,t,n):e},truncateRight:(e,t)=>{const n=e.length;return n>t?Mt(e,t,n):e}});const Lt=/ (.)/g,It=e=>e[0].toUpperCase(),Rt=e=>It(e)+Oe(e).toLowerCase();s(t,{upperFirst:e=>It(e)+Oe(e),upperFirstAll:e=>e.replace(Lt,e=>e.toUpperCase()),upperFirstLetter:It,upperFirstOnly:Rt,upperFirstOnlyAll:e=>Rt(e.toLowerCase()).replace(Lt,e=>e.toUpperCase())});const Dt=(e,t,n=!0)=>(dt(t,(t,i)=>{x(t)&&x(e[i])?Dt(e[i],t,n):n&&k(t)&&k(e[i])?e[i].push(...t):e[i]=t}),e);s(t,{assignDeep:Dt});const Bt=Function.prototype;s(t,{cacheNativeMethod:function(e){return Bt.call.bind(e)}});s(t,{ifNotEqual:(e,t,n)=>(t&&!m(e[t])&&(e[t]=n),e)});const Ut=(e,t)=>{if(e===t)return!0;if(e.toString()===t.toString())if(x(e)){const n=i(e);if(ft(t,n))return I(n,n=>Ut(e[n],t[n]))}else if(k(e)&&e.length===t.length)return I(e,(e,n)=>Ut(e,t[n]));return!1};s(t,{isEqual:Ut});s(t,{propertyMatch:(e,t,n=i(e))=>I(n,n=>Ut(e[n],t[n]))});const Tt=/\.|\[/,qt=/]/g,Pt=e=>e.replace(qt,'').split(Tt);s(t,{toPath:Pt});let Wt=0;const zt=[],Ht=()=>{let e=zt.shift(zt);return m(e)||(e=Wt,Wt++),e};Ht.free=e=>{zt.push(e)},s(t,{uid:Ht});const Kt=(e,n=t)=>{let i=n;return I(Pt(e),e=>(i=i[e],m(i))),i};s(t,{get:Kt});const Zt=(e,t)=>(m(t)&&(Zt[e]=t),Kt(e,Zt));t.superMethod(Zt),s(t,{model:Zt});s(t,{toggle:(e,t,n)=>Ut(t,e)?n:t});const $t=e=>(...t)=>n=>{let i=n;return e(t,e=>{i=e(i)}),i},Jt=$t(M),Vt=$t(L);s(t,{flow:Jt,flowRight:Vt});const _t=e=>(...t)=>async n=>{let i=n;return await e(t,async e=>{i=await e(i)}),i},Gt=_t(ee),Qt=_t(te);return s(t,{flowAsync:Gt,flowAsyncRight:Qt}),t});