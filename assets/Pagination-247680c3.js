import{x as ce,aE as fe,aF as ve,s as ge,n as ue,P as ie,j as le}from"./index-e43a8372.js";var de={exports:{}};(function(I,oe){(function(te,re){I.exports=re(ce)})(fe,te=>(()=>{var re={703:(y,t,i)=>{var e=i(414);function x(){}function E(){}E.resetWarningCache=x,y.exports=function(){function n(b,l,v,O,g,R){if(R!==e){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}}function u(){return n}n.isRequired=n;var f={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:u,element:n,elementType:n,instanceOf:u,node:n,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:E,resetWarningCache:x};return f.PropTypes=f,f}},697:(y,t,i)=>{y.exports=i(703)()},414:y=>{y.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:y=>{y.exports=te}},ne={};function K(y){var t=ne[y];if(t!==void 0)return t.exports;var i=ne[y]={exports:{}};return re[y](i,i.exports,K),i.exports}K.n=y=>{var t=y&&y.__esModule?()=>y.default:()=>y;return K.d(t,{a:t}),t},K.d=(y,t)=>{for(var i in t)K.o(t,i)&&!K.o(y,i)&&Object.defineProperty(y,i,{enumerable:!0,get:t[i]})},K.o=(y,t)=>Object.prototype.hasOwnProperty.call(y,t),K.r=y=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})};var ae={};return(()=>{K.r(ae),K.d(ae,{default:()=>Q});var y=K(98),t=K.n(y),i=K(697),e=K.n(i);function x(){return x=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var j=arguments[s];for(var M in j)Object.prototype.hasOwnProperty.call(j,M)&&(o[M]=j[M])}return o},x.apply(this,arguments)}var E=function(o){var s=o.pageClassName,j=o.pageLinkClassName,M=o.page,Z=o.selected,q=o.activeClassName,G=o.activeLinkClassName,m=o.getEventListener,r=o.pageSelectedHandler,U=o.href,h=o.extraAriaContext,L=o.pageLabelBuilder,D=o.rel,z=o.ariaLabel||"Page "+M+(h?" "+h:""),F=null;return Z&&(F="page",z=o.ariaLabel||"Page "+M+" is your current page",s=s!==void 0?s+" "+q:q,j!==void 0?G!==void 0&&(j=j+" "+G):j=G),t().createElement("li",{className:s},t().createElement("a",x({rel:D,role:U?void 0:"button",className:j,href:U,tabIndex:Z?"-1":"0","aria-label":z,"aria-current":F,onKeyPress:r},m(r)),L(M)))};E.propTypes={pageSelectedHandler:e().func.isRequired,selected:e().bool.isRequired,pageClassName:e().string,pageLinkClassName:e().string,activeClassName:e().string,activeLinkClassName:e().string,extraAriaContext:e().string,href:e().string,ariaLabel:e().string,page:e().number.isRequired,getEventListener:e().func.isRequired,pageLabelBuilder:e().func.isRequired,rel:e().string};const n=E;function u(){return u=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var j=arguments[s];for(var M in j)Object.prototype.hasOwnProperty.call(j,M)&&(o[M]=j[M])}return o},u.apply(this,arguments)}var f=function(o){var s=o.breakLabel,j=o.breakAriaLabel,M=o.breakClassName,Z=o.breakLinkClassName,q=o.breakHandler,G=o.getEventListener,m=M||"break";return t().createElement("li",{className:m},t().createElement("a",u({className:Z,role:"button",tabIndex:"0","aria-label":j,onKeyPress:q},G(q)),s))};f.propTypes={breakLabel:e().oneOfType([e().string,e().node]),breakAriaLabel:e().string,breakClassName:e().string,breakLinkClassName:e().string,breakHandler:e().func.isRequired,getEventListener:e().func.isRequired};const b=f;function l(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return o??s}function v(o){return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},v(o)}function O(){return O=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var j=arguments[s];for(var M in j)Object.prototype.hasOwnProperty.call(j,M)&&(o[M]=j[M])}return o},O.apply(this,arguments)}function g(o,s){for(var j=0;j<s.length;j++){var M=s[j];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(o,M.key,M)}}function R(o,s){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(j,M){return j.__proto__=M,j},R(o,s)}function $(o,s){if(s&&(v(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P(o)}function P(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function W(o){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},W(o)}function c(o,s,j){return s in o?Object.defineProperty(o,s,{value:j,enumerable:!0,configurable:!0,writable:!0}):o[s]=j,o}var N=function(o){(function(m,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(r&&r.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),Object.defineProperty(m,"prototype",{writable:!1}),r&&R(m,r)})(G,o);var s,j,M,Z,q=(M=G,Z=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var m,r=W(M);if(Z){var U=W(this).constructor;m=Reflect.construct(r,arguments,U)}else m=r.apply(this,arguments);return $(this,m)});function G(m){var r,U;return function(h,L){if(!(h instanceof L))throw new TypeError("Cannot call a class as a function")}(this,G),c(P(r=q.call(this,m)),"handlePreviousPage",function(h){var L=r.state.selected;r.handleClick(h,null,L>0?L-1:void 0,{isPrevious:!0})}),c(P(r),"handleNextPage",function(h){var L=r.state.selected,D=r.props.pageCount;r.handleClick(h,null,L<D-1?L+1:void 0,{isNext:!0})}),c(P(r),"handlePageSelected",function(h,L){if(r.state.selected===h)return r.callActiveCallback(h),void r.handleClick(L,null,void 0,{isActive:!0});r.handleClick(L,null,h)}),c(P(r),"handlePageChange",function(h){r.state.selected!==h&&(r.setState({selected:h}),r.callCallback(h))}),c(P(r),"getEventListener",function(h){return c({},r.props.eventListener,h)}),c(P(r),"handleClick",function(h,L,D){var z=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},F=z.isPrevious,J=F!==void 0&&F,V=z.isNext,ee=V!==void 0&&V,a=z.isBreak,d=a!==void 0&&a,A=z.isActive,S=A!==void 0&&A;h.preventDefault?h.preventDefault():h.returnValue=!1;var k=r.state.selected,C=r.props.onClick,T=D;if(C){var w=C({index:L,selected:k,nextSelectedPage:D,event:h,isPrevious:J,isNext:ee,isBreak:d,isActive:S});if(w===!1)return;Number.isInteger(w)&&(T=w)}T!==void 0&&r.handlePageChange(T)}),c(P(r),"handleBreakClick",function(h,L){var D=r.state.selected;r.handleClick(L,h,D<h?r.getForwardJump():r.getBackwardJump(),{isBreak:!0})}),c(P(r),"callCallback",function(h){r.props.onPageChange!==void 0&&typeof r.props.onPageChange=="function"&&r.props.onPageChange({selected:h})}),c(P(r),"callActiveCallback",function(h){r.props.onPageActive!==void 0&&typeof r.props.onPageActive=="function"&&r.props.onPageActive({selected:h})}),c(P(r),"getElementPageRel",function(h){var L=r.state.selected,D=r.props,z=D.nextPageRel,F=D.prevPageRel,J=D.selectedPageRel;return L-1===h?F:L===h?J:L+1===h?z:void 0}),c(P(r),"pagination",function(){var h=[],L=r.props,D=L.pageRangeDisplayed,z=L.pageCount,F=L.marginPagesDisplayed,J=L.breakLabel,V=L.breakClassName,ee=L.breakLinkClassName,a=L.breakAriaLabels,d=r.state.selected;if(z<=D)for(var A=0;A<z;A++)h.push(r.getPageElement(A));else{var S=D/2,k=D-S;d>z-D/2?S=D-(k=z-d):d<D/2&&(k=D-(S=d));var C,T,w=function(p){return r.getPageElement(p)},_=[];for(C=0;C<z;C++){var B=C+1;if(B<=F)_.push({type:"page",index:C,display:w(C)});else if(B>z-F)_.push({type:"page",index:C,display:w(C)});else if(C>=d-S&&C<=d+(d===0&&D>1?k-1:k))_.push({type:"page",index:C,display:w(C)});else if(J&&_.length>0&&_[_.length-1].display!==T&&(D>0||F>0)){var Y=C<d?a.backward:a.forward;T=t().createElement(b,{key:C,breakAriaLabel:Y,breakLabel:J,breakClassName:V,breakLinkClassName:ee,breakHandler:r.handleBreakClick.bind(null,C),getEventListener:r.getEventListener}),_.push({type:"break",index:C,display:T})}}_.forEach(function(p,H){var X=p;p.type==="break"&&_[H-1]&&_[H-1].type==="page"&&_[H+1]&&_[H+1].type==="page"&&_[H+1].index-_[H-1].index<=2&&(X={type:"page",index:p.index,display:w(p.index)}),h.push(X.display)})}return h}),m.initialPage!==void 0&&m.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(m.initialPage,") and forcePage (").concat(m.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),U=m.initialPage?m.initialPage:m.forcePage?m.forcePage:0,r.state={selected:U},r}return s=G,(j=[{key:"componentDidMount",value:function(){var m=this.props,r=m.initialPage,U=m.disableInitialCallback,h=m.extraAriaContext,L=m.pageCount,D=m.forcePage;r===void 0||U||this.callCallback(r),h&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(L)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(L,"). Did you forget a Math.ceil()?")),r!==void 0&&r>L-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(r," > ").concat(L-1,").")),D!==void 0&&D>L-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(D," > ").concat(L-1,")."))}},{key:"componentDidUpdate",value:function(m){this.props.forcePage!==void 0&&this.props.forcePage!==m.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(m.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var m=this.state.selected,r=this.props,U=r.pageCount,h=m+r.pageRangeDisplayed;return h>=U?U-1:h}},{key:"getBackwardJump",value:function(){var m=this.state.selected-this.props.pageRangeDisplayed;return m<0?0:m}},{key:"getElementHref",value:function(m){var r=this.props,U=r.hrefBuilder,h=r.pageCount,L=r.hrefAllControls;if(U)return L||m>=0&&m<h?U(m+1,h,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(m){var r=m===this.state.selected;if(this.props.ariaLabelBuilder&&m>=0&&m<this.props.pageCount){var U=this.props.ariaLabelBuilder(m+1,r);return this.props.extraAriaContext&&!r&&(U=U+" "+this.props.extraAriaContext),U}}},{key:"getPageElement",value:function(m){var r=this.state.selected,U=this.props,h=U.pageClassName,L=U.pageLinkClassName,D=U.activeClassName,z=U.activeLinkClassName,F=U.extraAriaContext,J=U.pageLabelBuilder;return t().createElement(n,{key:m,pageSelectedHandler:this.handlePageSelected.bind(null,m),selected:r===m,rel:this.getElementPageRel(m),pageClassName:h,pageLinkClassName:L,activeClassName:D,activeLinkClassName:z,extraAriaContext:F,href:this.getElementHref(m),ariaLabel:this.ariaLabelBuilder(m),page:m+1,pageLabelBuilder:J,getEventListener:this.getEventListener})}},{key:"render",value:function(){var m=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&m!==void 0)return m&&m(this.props);var r=this.props,U=r.disabledClassName,h=r.disabledLinkClassName,L=r.pageCount,D=r.className,z=r.containerClassName,F=r.previousLabel,J=r.previousClassName,V=r.previousLinkClassName,ee=r.previousAriaLabel,a=r.prevRel,d=r.nextLabel,A=r.nextClassName,S=r.nextLinkClassName,k=r.nextAriaLabel,C=r.nextRel,T=this.state.selected,w=T===0,_=T===L-1,B="".concat(l(J)).concat(w?" ".concat(l(U)):""),Y="".concat(l(A)).concat(_?" ".concat(l(U)):""),p="".concat(l(V)).concat(w?" ".concat(l(h)):""),H="".concat(l(S)).concat(_?" ".concat(l(h)):""),X=w?"true":"false",se=_?"true":"false";return t().createElement("ul",{className:D||z,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:B},t().createElement("a",O({className:p,href:this.getElementHref(T-1),tabIndex:w?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":X,"aria-label":ee,rel:a},this.getEventListener(this.handlePreviousPage)),F)),this.pagination(),t().createElement("li",{className:Y},t().createElement("a",O({className:H,href:this.getElementHref(T+1),tabIndex:_?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":se,"aria-label":k,rel:C},this.getEventListener(this.handleNextPage)),d)))}}])&&g(s.prototype,j),Object.defineProperty(s,"prototype",{writable:!1}),G}(y.Component);c(N,"propTypes",{pageCount:e().number.isRequired,pageRangeDisplayed:e().number,marginPagesDisplayed:e().number,previousLabel:e().node,previousAriaLabel:e().string,prevPageRel:e().string,prevRel:e().string,nextLabel:e().node,nextAriaLabel:e().string,nextPageRel:e().string,nextRel:e().string,breakLabel:e().oneOfType([e().string,e().node]),breakAriaLabels:e().shape({forward:e().string,backward:e().string}),hrefBuilder:e().func,hrefAllControls:e().bool,onPageChange:e().func,onPageActive:e().func,onClick:e().func,initialPage:e().number,forcePage:e().number,disableInitialCallback:e().bool,containerClassName:e().string,className:e().string,pageClassName:e().string,pageLinkClassName:e().string,pageLabelBuilder:e().func,activeClassName:e().string,activeLinkClassName:e().string,previousClassName:e().string,nextClassName:e().string,previousLinkClassName:e().string,nextLinkClassName:e().string,disabledClassName:e().string,disabledLinkClassName:e().string,breakClassName:e().string,breakLinkClassName:e().string,extraAriaContext:e().string,ariaLabelBuilder:e().func,eventListener:e().string,renderOnZeroPageCount:e().func,selectedPageRel:e().string}),c(N,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(o){return o},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const Q=N})(),ae})())})(de);var ye=de.exports;const me=ve(ye);var pe={exports:{}};(function(I,oe){(function(re,ne){I.exports=ne(ce)})(fe,te=>(()=>{var re={"./node_modules/css-mediaquery/index.js":(y,t)=>{t.match=u,t.parse=f;var i=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,e=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,x=/^(?:(min|max)-)?(.+)/,E=/(em|rem|px|cm|mm|in|pt|pc)?$/,n=/(dpi|dpcm|dppx)?$/;function u(O,g){return f(O).some(function(R){var $=R.inverse,P=R.type==="all"||g.type===R.type;if(P&&$||!(P||$))return!1;var W=R.expressions.every(function(c){var N=c.feature,Q=c.modifier,o=c.value,s=g[N];if(!s)return!1;switch(N){case"orientation":case"scan":return s.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=v(o),s=v(s);break;case"resolution":o=l(o),s=l(s);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=b(o),s=b(s);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,s=parseInt(s,10)||0;break}switch(Q){case"min":return s>=o;case"max":return s<=o;default:return s===o}});return W&&!$||!W&&$})}function f(O){return O.split(",").map(function(g){g=g.trim();var R=g.match(i),$=R[1],P=R[2],W=R[3]||"",c={};return c.inverse=!!$&&$.toLowerCase()==="not",c.type=P?P.toLowerCase():"all",W=W.match(/\([^\)]+\)/g)||[],c.expressions=W.map(function(N){var Q=N.match(e),o=Q[1].toLowerCase().match(x);return{modifier:o[1],feature:o[2],value:Q[2]}}),c})}function b(O){var g=Number(O),R;return g||(R=O.match(/^(\d+)\s*\/\s*(\d+)$/),g=R[1]/R[2]),g}function l(O){var g=parseFloat(O),R=String(O).match(n)[1];switch(R){case"dpcm":return g/2.54;case"dppx":return g*96;default:return g}}function v(O){var g=parseFloat(O),R=String(O).match(E)[1];switch(R){case"em":return g*16;case"rem":return g*16;case"cm":return g*96/2.54;case"mm":return g*96/2.54/10;case"in":return g*96;case"pt":return g*72;case"pc":return g*72/12;default:return g}}},"./node_modules/hyphenate-style-name/index.js":(y,t,i)=>{i.r(t),i.d(t,{default:()=>f});var e=/[A-Z]/g,x=/^ms-/,E={};function n(b){return"-"+b.toLowerCase()}function u(b){if(E.hasOwnProperty(b))return E[b];var l=b.replace(e,n);return E[b]=x.test(l)?"-"+l:l}const f=u},"./node_modules/matchmediaquery/index.js":(y,t,i)=>{var e=i("./node_modules/css-mediaquery/index.js").match,x=typeof window<"u"?window.matchMedia:null;function E(u,f,b){var l=this;if(x&&!b){var v=x.call(window,u);this.matches=v.matches,this.media=v.media,v.addListener(R)}else this.matches=e(u,f),this.media=u;this.addListener=O,this.removeListener=g,this.dispose=$;function O(P){v&&v.addListener(P)}function g(P){v&&v.removeListener(P)}function R(P){l.matches=P.matches,l.media=P.media}function $(){v&&v.removeListener(R)}}function n(u,f,b){return new E(u,f,b)}y.exports=n},"./node_modules/object-assign/index.js":y=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function x(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function E(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de",Object.getOwnPropertyNames(n)[0]==="5")return!1;for(var u={},f=0;f<10;f++)u["_"+String.fromCharCode(f)]=f;var b=Object.getOwnPropertyNames(u).map(function(v){return u[v]});if(b.join("")!=="0123456789")return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(v){l[v]=v}),Object.keys(Object.assign({},l)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}y.exports=E()?Object.assign:function(n,u){for(var f,b=x(n),l,v=1;v<arguments.length;v++){f=Object(arguments[v]);for(var O in f)i.call(f,O)&&(b[O]=f[O]);if(t){l=t(f);for(var g=0;g<l.length;g++)e.call(f,l[g])&&(b[l[g]]=f[l[g]])}}return b}},"./node_modules/prop-types/checkPropTypes.js":(y,t,i)=>{var e=function(){};{var x=i("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),E={},n=i("./node_modules/prop-types/lib/has.js");e=function(f){var b="Warning: "+f;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}}}function u(f,b,l,v,O){for(var g in f)if(n(f,g)){var R;try{if(typeof f[g]!="function"){var $=Error((v||"React class")+": "+l+" type `"+g+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof f[g]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw $.name="Invariant Violation",$}R=f[g](b,g,v,l,null,x)}catch(W){R=W}if(R&&!(R instanceof Error)&&e((v||"React class")+": type specification of "+l+" `"+g+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof R+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),R instanceof Error&&!(R.message in E)){E[R.message]=!0;var P=O?O():"";e("Failed "+l+" type: "+R.message+(P??""))}}}u.resetWarningCache=function(){E={}},y.exports=u},"./node_modules/prop-types/factoryWithTypeCheckers.js":(y,t,i)=>{var e=i("./node_modules/react-is/index.js"),x=i("./node_modules/object-assign/index.js"),E=i("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),n=i("./node_modules/prop-types/lib/has.js"),u=i("./node_modules/prop-types/checkPropTypes.js"),f=function(){};f=function(l){var v="Warning: "+l;typeof console<"u"&&console.error(v);try{throw new Error(v)}catch{}};function b(){return null}y.exports=function(l,v){var O=typeof Symbol=="function"&&Symbol.iterator,g="@@iterator";function R(a){var d=a&&(O&&a[O]||a[g]);if(typeof d=="function")return d}var $="<<anonymous>>",P={array:Q("array"),bigint:Q("bigint"),bool:Q("boolean"),func:Q("function"),number:Q("number"),object:Q("object"),string:Q("string"),symbol:Q("symbol"),any:o(),arrayOf:s,element:j(),elementType:M(),instanceOf:Z,node:r(),objectOf:G,oneOf:q,oneOfType:m,shape:h,exact:L};function W(a,d){return a===d?a!==0||1/a===1/d:a!==a&&d!==d}function c(a,d){this.message=a,this.data=d&&typeof d=="object"?d:{},this.stack=""}c.prototype=Error.prototype;function N(a){var d={},A=0;function S(C,T,w,_,B,Y,p){if(_=_||$,Y=Y||w,p!==E){if(v){var H=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw H.name="Invariant Violation",H}else if(typeof console<"u"){var X=_+":"+w;!d[X]&&A<3&&(f("You are manually calling a React.PropTypes validation function for the `"+Y+"` prop on `"+_+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),d[X]=!0,A++)}}return T[w]==null?C?T[w]===null?new c("The "+B+" `"+Y+"` is marked as required "+("in `"+_+"`, but its value is `null`.")):new c("The "+B+" `"+Y+"` is marked as required in "+("`"+_+"`, but its value is `undefined`.")):null:a(T,w,_,B,Y)}var k=S.bind(null,!1);return k.isRequired=S.bind(null,!0),k}function Q(a){function d(A,S,k,C,T,w){var _=A[S],B=F(_);if(B!==a){var Y=J(_);return new c("Invalid "+C+" `"+T+"` of type "+("`"+Y+"` supplied to `"+k+"`, expected ")+("`"+a+"`."),{expectedType:a})}return null}return N(d)}function o(){return N(b)}function s(a){function d(A,S,k,C,T){if(typeof a!="function")return new c("Property `"+T+"` of component `"+k+"` has invalid PropType notation inside arrayOf.");var w=A[S];if(!Array.isArray(w)){var _=F(w);return new c("Invalid "+C+" `"+T+"` of type "+("`"+_+"` supplied to `"+k+"`, expected an array."))}for(var B=0;B<w.length;B++){var Y=a(w,B,k,C,T+"["+B+"]",E);if(Y instanceof Error)return Y}return null}return N(d)}function j(){function a(d,A,S,k,C){var T=d[A];if(!l(T)){var w=F(T);return new c("Invalid "+k+" `"+C+"` of type "+("`"+w+"` supplied to `"+S+"`, expected a single ReactElement."))}return null}return N(a)}function M(){function a(d,A,S,k,C){var T=d[A];if(!e.isValidElementType(T)){var w=F(T);return new c("Invalid "+k+" `"+C+"` of type "+("`"+w+"` supplied to `"+S+"`, expected a single ReactElement type."))}return null}return N(a)}function Z(a){function d(A,S,k,C,T){if(!(A[S]instanceof a)){var w=a.name||$,_=ee(A[S]);return new c("Invalid "+C+" `"+T+"` of type "+("`"+_+"` supplied to `"+k+"`, expected ")+("instance of `"+w+"`."))}return null}return N(d)}function q(a){if(!Array.isArray(a))return arguments.length>1?f("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):f("Invalid argument supplied to oneOf, expected an array."),b;function d(A,S,k,C,T){for(var w=A[S],_=0;_<a.length;_++)if(W(w,a[_]))return null;var B=JSON.stringify(a,function(p,H){var X=J(H);return X==="symbol"?String(H):H});return new c("Invalid "+C+" `"+T+"` of value `"+String(w)+"` "+("supplied to `"+k+"`, expected one of "+B+"."))}return N(d)}function G(a){function d(A,S,k,C,T){if(typeof a!="function")return new c("Property `"+T+"` of component `"+k+"` has invalid PropType notation inside objectOf.");var w=A[S],_=F(w);if(_!=="object")return new c("Invalid "+C+" `"+T+"` of type "+("`"+_+"` supplied to `"+k+"`, expected an object."));for(var B in w)if(n(w,B)){var Y=a(w,B,k,C,T+"."+B,E);if(Y instanceof Error)return Y}return null}return N(d)}function m(a){if(!Array.isArray(a))return f("Invalid argument supplied to oneOfType, expected an instance of array."),b;for(var d=0;d<a.length;d++){var A=a[d];if(typeof A!="function")return f("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+V(A)+" at index "+d+"."),b}function S(k,C,T,w,_){for(var B=[],Y=0;Y<a.length;Y++){var p=a[Y],H=p(k,C,T,w,_,E);if(H==null)return null;H.data&&n(H.data,"expectedType")&&B.push(H.data.expectedType)}var X=B.length>0?", expected one of type ["+B.join(", ")+"]":"";return new c("Invalid "+w+" `"+_+"` supplied to "+("`"+T+"`"+X+"."))}return N(S)}function r(){function a(d,A,S,k,C){return D(d[A])?null:new c("Invalid "+k+" `"+C+"` supplied to "+("`"+S+"`, expected a ReactNode."))}return N(a)}function U(a,d,A,S,k){return new c((a||"React class")+": "+d+" type `"+A+"."+S+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+k+"`.")}function h(a){function d(A,S,k,C,T){var w=A[S],_=F(w);if(_!=="object")return new c("Invalid "+C+" `"+T+"` of type `"+_+"` "+("supplied to `"+k+"`, expected `object`."));for(var B in a){var Y=a[B];if(typeof Y!="function")return U(k,C,T,B,J(Y));var p=Y(w,B,k,C,T+"."+B,E);if(p)return p}return null}return N(d)}function L(a){function d(A,S,k,C,T){var w=A[S],_=F(w);if(_!=="object")return new c("Invalid "+C+" `"+T+"` of type `"+_+"` "+("supplied to `"+k+"`, expected `object`."));var B=x({},A[S],a);for(var Y in B){var p=a[Y];if(n(a,Y)&&typeof p!="function")return U(k,C,T,Y,J(p));if(!p)return new c("Invalid "+C+" `"+T+"` key `"+Y+"` supplied to `"+k+"`.\nBad object: "+JSON.stringify(A[S],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(a),null,"  "));var H=p(w,Y,k,C,T+"."+Y,E);if(H)return H}return null}return N(d)}function D(a){switch(typeof a){case"number":case"string":case"undefined":return!0;case"boolean":return!a;case"object":if(Array.isArray(a))return a.every(D);if(a===null||l(a))return!0;var d=R(a);if(d){var A=d.call(a),S;if(d!==a.entries){for(;!(S=A.next()).done;)if(!D(S.value))return!1}else for(;!(S=A.next()).done;){var k=S.value;if(k&&!D(k[1]))return!1}}else return!1;return!0;default:return!1}}function z(a,d){return a==="symbol"?!0:d?d["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&d instanceof Symbol:!1}function F(a){var d=typeof a;return Array.isArray(a)?"array":a instanceof RegExp?"object":z(d,a)?"symbol":d}function J(a){if(typeof a>"u"||a===null)return""+a;var d=F(a);if(d==="object"){if(a instanceof Date)return"date";if(a instanceof RegExp)return"regexp"}return d}function V(a){var d=J(a);switch(d){case"array":case"object":return"an "+d;case"boolean":case"date":case"regexp":return"a "+d;default:return d}}function ee(a){return!a.constructor||!a.constructor.name?$:a.constructor.name}return P.checkPropTypes=u,P.resetWarningCache=u.resetWarningCache,P.PropTypes=P,P}},"./node_modules/prop-types/index.js":(y,t,i)=>{{var e=i("./node_modules/react-is/index.js"),x=!0;y.exports=i("./node_modules/prop-types/factoryWithTypeCheckers.js")(e.isElement,x)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":y=>{var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";y.exports=t},"./node_modules/prop-types/lib/has.js":y=>{y.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(y,t)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var i=typeof Symbol=="function"&&Symbol.for,e=i?Symbol.for("react.element"):60103,x=i?Symbol.for("react.portal"):60106,E=i?Symbol.for("react.fragment"):60107,n=i?Symbol.for("react.strict_mode"):60108,u=i?Symbol.for("react.profiler"):60114,f=i?Symbol.for("react.provider"):60109,b=i?Symbol.for("react.context"):60110,l=i?Symbol.for("react.async_mode"):60111,v=i?Symbol.for("react.concurrent_mode"):60111,O=i?Symbol.for("react.forward_ref"):60112,g=i?Symbol.for("react.suspense"):60113,R=i?Symbol.for("react.suspense_list"):60120,$=i?Symbol.for("react.memo"):60115,P=i?Symbol.for("react.lazy"):60116,W=i?Symbol.for("react.block"):60121,c=i?Symbol.for("react.fundamental"):60117,N=i?Symbol.for("react.responder"):60118,Q=i?Symbol.for("react.scope"):60119;function o(p){return typeof p=="string"||typeof p=="function"||p===E||p===v||p===u||p===n||p===g||p===R||typeof p=="object"&&p!==null&&(p.$$typeof===P||p.$$typeof===$||p.$$typeof===f||p.$$typeof===b||p.$$typeof===O||p.$$typeof===c||p.$$typeof===N||p.$$typeof===Q||p.$$typeof===W)}function s(p){if(typeof p=="object"&&p!==null){var H=p.$$typeof;switch(H){case e:var X=p.type;switch(X){case l:case v:case E:case u:case n:case g:return X;default:var se=X&&X.$$typeof;switch(se){case b:case O:case P:case $:case f:return se;default:return H}}case x:return H}}}var j=l,M=v,Z=b,q=f,G=e,m=O,r=E,U=P,h=$,L=x,D=u,z=n,F=g,J=!1;function V(p){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ee(p)||s(p)===l}function ee(p){return s(p)===v}function a(p){return s(p)===b}function d(p){return s(p)===f}function A(p){return typeof p=="object"&&p!==null&&p.$$typeof===e}function S(p){return s(p)===O}function k(p){return s(p)===E}function C(p){return s(p)===P}function T(p){return s(p)===$}function w(p){return s(p)===x}function _(p){return s(p)===u}function B(p){return s(p)===n}function Y(p){return s(p)===g}t.AsyncMode=j,t.ConcurrentMode=M,t.ContextConsumer=Z,t.ContextProvider=q,t.Element=G,t.ForwardRef=m,t.Fragment=r,t.Lazy=U,t.Memo=h,t.Portal=L,t.Profiler=D,t.StrictMode=z,t.Suspense=F,t.isAsyncMode=V,t.isConcurrentMode=ee,t.isContextConsumer=a,t.isContextProvider=d,t.isElement=A,t.isForwardRef=S,t.isFragment=k,t.isLazy=C,t.isMemo=T,t.isPortal=w,t.isProfiler=_,t.isStrictMode=B,t.isSuspense=Y,t.isValidElementType=o,t.typeOf=s})()},"./node_modules/react-is/index.js":(y,t,i)=>{y.exports=i("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(y,t,i)=>{i.r(t),i.d(t,{shallowEqualArrays:()=>x,shallowEqualObjects:()=>e});function e(E,n){if(E===n)return!0;if(!E||!n)return!1;var u=Object.keys(E),f=Object.keys(n),b=u.length;if(f.length!==b)return!1;for(var l=0;l<b;l++){var v=u[l];if(E[v]!==n[v]||!Object.prototype.hasOwnProperty.call(n,v))return!1}return!0}function x(E,n){if(E===n)return!0;if(!E||!n)return!1;var u=E.length;if(n.length!==u)return!1;for(var f=0;f<u;f++)if(E[f]!==n[f])return!1;return!0}},"./src/Component.ts":function(y,t,i){var e=this&&this.__rest||function(u,f){var b={};for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&f.indexOf(l)<0&&(b[l]=u[l]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,l=Object.getOwnPropertySymbols(u);v<l.length;v++)f.indexOf(l[v])<0&&Object.prototype.propertyIsEnumerable.call(u,l[v])&&(b[l[v]]=u[l[v]]);return b},x=this&&this.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(t,"__esModule",{value:!0});var E=x(i("./src/useMediaQuery.ts")),n=function(u){var f=u.children,b=u.device,l=u.onChange,v=e(u,["children","device","onChange"]),O=(0,E.default)(v,b,l);return typeof f=="function"?f(O):O?f:null};t.default=n},"./src/Context.ts":(y,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});var e=i("react"),x=(0,e.createContext)(void 0);t.default=x},"./src/index.ts":function(y,t,i){var e=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var x=e(i("./src/useMediaQuery.ts"));t.useMediaQuery=x.default;var E=e(i("./src/Component.ts"));t.default=E.default;var n=e(i("./src/toQuery.ts"));t.toQuery=n.default;var u=e(i("./src/Context.ts"));t.Context=u.default},"./src/mediaQuery.ts":function(y,t,i){var e=this&&this.__assign||function(){return e=Object.assign||function(g){for(var R,$=1,P=arguments.length;$<P;$++){R=arguments[$];for(var W in R)Object.prototype.hasOwnProperty.call(R,W)&&(g[W]=R[W])}return g},e.apply(this,arguments)},x=this&&this.__rest||function(g,R){var $={};for(var P in g)Object.prototype.hasOwnProperty.call(g,P)&&R.indexOf(P)<0&&($[P]=g[P]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var W=0,P=Object.getOwnPropertySymbols(g);W<P.length;W++)R.indexOf(P[W])<0&&Object.prototype.propertyIsEnumerable.call(g,P[W])&&($[P[W]]=g[P[W]]);return $},E=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(t,"__esModule",{value:!0});var n=E(i("./node_modules/prop-types/index.js")),u=n.default.oneOfType([n.default.string,n.default.number]),f={all:n.default.bool,grid:n.default.bool,aural:n.default.bool,braille:n.default.bool,handheld:n.default.bool,print:n.default.bool,projection:n.default.bool,screen:n.default.bool,tty:n.default.bool,tv:n.default.bool,embossed:n.default.bool},b={orientation:n.default.oneOf(["portrait","landscape"]),scan:n.default.oneOf(["progressive","interlace"]),aspectRatio:n.default.string,deviceAspectRatio:n.default.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:n.default.bool,colorIndex:n.default.bool,monochrome:n.default.bool,resolution:u,type:Object.keys(f)};b.type;var l=x(b,["type"]),v=e({minAspectRatio:n.default.string,maxAspectRatio:n.default.string,minDeviceAspectRatio:n.default.string,maxDeviceAspectRatio:n.default.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:n.default.number,maxColor:n.default.number,minColorIndex:n.default.number,maxColorIndex:n.default.number,minMonochrome:n.default.number,maxMonochrome:n.default.number,minResolution:u,maxResolution:u},l),O=e(e({},f),v);t.default={all:O,types:f,matchers:b,features:v}},"./src/toQuery.ts":function(y,t,i){var e=this&&this.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(t,"__esModule",{value:!0});var x=e(i("./node_modules/hyphenate-style-name/index.js")),E=e(i("./src/mediaQuery.ts")),n=function(l){return"not ".concat(l)},u=function(l,v){var O=(0,x.default)(l);return typeof v=="number"&&(v="".concat(v,"px")),v===!0?O:v===!1?n(O):"(".concat(O,": ").concat(v,")")},f=function(l){return l.join(" and ")},b=function(l){var v=[];return Object.keys(E.default.all).forEach(function(O){var g=l[O];g!=null&&v.push(u(O,g))}),f(v)};t.default=b},"./src/useMediaQuery.ts":function(y,t,i){var e=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(t,"__esModule",{value:!0});var x=i("react"),E=e(i("./node_modules/matchmediaquery/index.js")),n=e(i("./node_modules/hyphenate-style-name/index.js")),u=i("./node_modules/shallow-equal/dist/index.esm.js"),f=e(i("./src/toQuery.ts")),b=e(i("./src/Context.ts")),l=function(c){return c.query||(0,f.default)(c)},v=function(c){if(c){var N=Object.keys(c);return N.reduce(function(Q,o){return Q[(0,n.default)(o)]=c[o],Q},{})}},O=function(){var c=(0,x.useRef)(!1);return(0,x.useEffect)(function(){c.current=!0},[]),c.current},g=function(c){var N=(0,x.useContext)(b.default),Q=function(){return v(c)||v(N)},o=(0,x.useState)(Q),s=o[0],j=o[1];return(0,x.useEffect)(function(){var M=Q();(0,u.shallowEqualObjects)(s,M)||j(M)},[c,N]),s},R=function(c){var N=function(){return l(c)},Q=(0,x.useState)(N),o=Q[0],s=Q[1];return(0,x.useEffect)(function(){var j=N();o!==j&&s(j)},[c]),o},$=function(c,N){var Q=function(){return(0,E.default)(c,N||{},!!N)},o=(0,x.useState)(Q),s=o[0],j=o[1],M=O();return(0,x.useEffect)(function(){if(M){var Z=Q();return j(Z),function(){Z&&Z.dispose()}}},[c,N]),s},P=function(c){var N=(0,x.useState)(c.matches),Q=N[0],o=N[1];return(0,x.useEffect)(function(){var s=function(j){o(j.matches)};return c.addListener(s),o(c.matches),function(){c.removeListener(s)}},[c]),Q},W=function(c,N,Q){var o=g(N),s=R(c);if(!s)throw new Error("Invalid or missing MediaQuery!");var j=$(s,o),M=P(j),Z=O();return(0,x.useEffect)(function(){Z&&Q&&Q(M)},[M]),(0,x.useEffect)(function(){return function(){j&&j.dispose()}},[]),M};t.default=W},react:y=>{y.exports=te}},ne={};function K(y){var t=ne[y];if(t!==void 0)return t.exports;var i=ne[y]={exports:{}};return re[y].call(i.exports,i,i.exports,K),i.exports}K.d=(y,t)=>{for(var i in t)K.o(t,i)&&!K.o(y,i)&&Object.defineProperty(y,i,{enumerable:!0,get:t[i]})},K.o=(y,t)=>Object.prototype.hasOwnProperty.call(y,t),K.r=y=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})};var ae=K("./src/index.ts");return ae})())})(pe);var he=pe.exports;const be=ge.div`
  color: ${({theme:I})=>I.colors.black};
  text-align: center;
  font-family: ${({theme:I})=>I.fonts.inter.regular};
  font-size: ${({theme:I})=>I.fontSizes.m};
  font-weight: ${({theme:I})=>I.fontWeights.regular};
  line-height: 0.9375;
  padding-bottom: ${({theme:I})=>I.spacing(5)};

  ${({$variant:I})=>I==="hidden"?ue`
          display: none;
        `:ue`
          display: block;
        `}

  ul {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({theme:I})=>I.radii.round};
    border: 1px solid ${({theme:I})=>I.colors.blue};

    a {
      display: flex;
      justify-content: center;
      width: ${({theme:I})=>I.spacing(8.75)};
      height: ${({theme:I})=>I.spacing(8.75)};
      padding: 10px 10px 10px 10px;
      cursor: pointer;
    }

    &.active {
      background-color: ${({theme:I})=>I.colors.blue};
      color: ${({theme:I})=>I.colors.white};
    }
    &.activeLink {
      background-color: ${({theme:I})=>I.colors.blue};
      color: ${({theme:I})=>I.colors.white};
    }

    &.previous {
      color: ${({theme:I})=>I.colors.blue};

      @media only screen and (min-width: 1280px) {
        margin-right: 32px;
      }

      &.disabled {
        color: rgba(17, 17, 17, 0.5);
        cursor: default;
      }
    }

    &.next {
      color: ${({theme:I})=>I.colors.blue};

      @media only screen and (min-width: 1280px) {
        margin-left: 32px;
      }

      &.disabled {
        color: rgba(17, 17, 17, 0.5);
        cursor: default;
      }
    }
  }
`,Pe=({onPageChange:I,totalItems:oe,currentPage:te,perPage:re,variant:ne})=>{const K=he.useMediaQuery({query:"(max-width: 767px)"}),ae=K?1:2,y=K?1:2,t=Math.ceil(oe/re),i=e=>{const x=e.selected+1;I(x)};return oe<=re?null:le.jsx(be,{$variant:ne,children:le.jsx(me,{breakLabel:"...",onPageChange:i,forcePage:te-1,pageCount:t,previousLabel:"←",nextLabel:"→",pageRangeDisplayed:ae,marginPagesDisplayed:y,renderOnZeroPageCount:null,activeClassName:"active",activeLinkClassName:"active",previousClassName:te===0?"previous disabled":"previous",nextClassName:te===t?"next disabled":"next"})})};Pe.propTypes={perPage:ie.number,currentPage:ie.number,totalItems:ie.number,onPageChange:ie.func,variant:ie.string};export{Pe as P,he as r};
