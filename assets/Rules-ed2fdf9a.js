import{ak as ie,al as L,am as be,an as se,ao as Me,R as N,ap as Oe,aq as B,ar as ze,as as Te,at as V,r as W,O as q,au as Ce,F as ae,Z as we,b as O,j as g,Y as xe,B as Ne,u as oe,d as Pe,g as Ee,C as ke}from"./index-442a30a4.js";import{R as le,T as Ae}from"./TextFitler-8e7e598a.js";import{f as We}from"./index-84fa0cb3.js";import{F as Le,p as De}from"./Fab-15494da2.js";import{u as Fe}from"./useRemainingViewPortHeight-47c2f6aa.js";import"./rotate-cw-1c5b3f79.js";import"./debounce-c1ba2006.js";function G(r,e){if(r==null)return{};var t={},i=Object.keys(r),n,s;for(s=0;s<i.length;s++)n=i[s],!(e.indexOf(n)>=0)&&(t[n]=r[n]);return t}var $e=function(r){ie(e,r);function e(i,n){var s;return s=r.call(this)||this,s.client=i,s.setOptions(n),s.bindMethods(),s.updateResult(),s}var t=e.prototype;return t.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},t.setOptions=function(n){this.options=this.client.defaultMutationOptions(n)},t.onUnsubscribe=function(){if(!this.listeners.length){var n;(n=this.currentMutation)==null||n.removeObserver(this)}},t.onMutationUpdate=function(n){this.updateResult();var s={listeners:!0};n.type==="success"?s.onSuccess=!0:n.type==="error"&&(s.onError=!0),this.notify(s)},t.getCurrentResult=function(){return this.currentResult},t.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},t.mutate=function(n,s){return this.mutateOptions=s,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,L({},this.options,{variables:typeof n<"u"?n:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},t.updateResult=function(){var n=this.currentMutation?this.currentMutation.state:be(),s=L({},n,{isLoading:n.status==="loading",isSuccess:n.status==="success",isError:n.status==="error",isIdle:n.status==="idle",mutate:this.mutate,reset:this.reset});this.currentResult=s},t.notify=function(n){var s=this;se.batch(function(){s.mutateOptions&&(n.onSuccess?(s.mutateOptions.onSuccess==null||s.mutateOptions.onSuccess(s.currentResult.data,s.currentResult.variables,s.currentResult.context),s.mutateOptions.onSettled==null||s.mutateOptions.onSettled(s.currentResult.data,null,s.currentResult.variables,s.currentResult.context)):n.onError&&(s.mutateOptions.onError==null||s.mutateOptions.onError(s.currentResult.error,s.currentResult.variables,s.currentResult.context),s.mutateOptions.onSettled==null||s.mutateOptions.onSettled(void 0,s.currentResult.error,s.currentResult.variables,s.currentResult.context))),n.listeners&&s.listeners.forEach(function(o){o(s.currentResult)})})},e}(Me);function ue(r,e,t){var i=N.useRef(!1),n=N.useState(0),s=n[1],o=Oe(r,e,t),d=B(),c=N.useRef();c.current?c.current.setOptions(o):c.current=new $e(d,o);var v=c.current.getCurrentResult();N.useEffect(function(){i.current=!0;var M=c.current.subscribe(se.batchCalls(function(){i.current&&s(function(_){return _+1})}));return function(){i.current=!1,M()}},[]);var y=N.useCallback(function(M,_){c.current.mutate(M,_).catch(ze)},[]);if(v.error&&Te(void 0,c.current.options.useErrorBoundary,[v.error]))throw v.error;return L({},v,{mutate:y,mutateAsync:v.mutate})}var Z=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Ue(r,e){return!!(r===e||Z(r)&&Z(e))}function Be(r,e){if(r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(!Ue(r[t],e[t]))return!1;return!0}function F(r,e){e===void 0&&(e=Be);var t,i=[],n,s=!1;function o(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return s&&t===this&&e(d,i)||(n=r.apply(this,d),s=!0,t=this,i=d),n}return o}var qe=typeof performance=="object"&&typeof performance.now=="function",J=qe?function(){return performance.now()}:function(){return Date.now()};function Y(r){cancelAnimationFrame(r.id)}function He(r,e){var t=J();function i(){J()-t>=e?r.call(null):n.id=requestAnimationFrame(i)}var n={id:requestAnimationFrame(i)};return n}var $=-1;function X(r){if(r===void 0&&(r=!1),$===-1||r){var e=document.createElement("div"),t=e.style;t.width="50px",t.height="50px",t.overflow="scroll",document.body.appendChild(e),$=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return $}var w=null;function ee(r){if(r===void 0&&(r=!1),w===null||r){var e=document.createElement("div"),t=e.style;t.width="50px",t.height="50px",t.overflow="scroll",t.direction="rtl";var i=document.createElement("div"),n=i.style;return n.width="100px",n.height="100px",e.appendChild(i),document.body.appendChild(e),e.scrollLeft>0?w="positive-descending":(e.scrollLeft=1,e.scrollLeft===0?w="negative":w="positive-ascending"),document.body.removeChild(e),w}return w}var je=150,Qe=function(e,t){return e};function Ke(r){var e,t=r.getItemOffset,i=r.getEstimatedTotalSize,n=r.getItemSize,s=r.getOffsetForIndexAndAlignment,o=r.getStartIndexForOffset,d=r.getStopIndexForStartIndex,c=r.initInstanceProps,v=r.shouldResetStyleCacheOnItemSizeChange,y=r.validateProps;return e=function(M){ie(_,M);function _(R){var a;return a=M.call(this,R)||this,a._instanceProps=c(a.props,V(a)),a._outerRef=void 0,a._resetIsScrollingTimeoutId=null,a.state={instance:V(a),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof a.props.initialScrollOffset=="number"?a.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},a._callOnItemsRendered=void 0,a._callOnItemsRendered=F(function(l,u,h,m){return a.props.onItemsRendered({overscanStartIndex:l,overscanStopIndex:u,visibleStartIndex:h,visibleStopIndex:m})}),a._callOnScroll=void 0,a._callOnScroll=F(function(l,u,h){return a.props.onScroll({scrollDirection:l,scrollOffset:u,scrollUpdateWasRequested:h})}),a._getItemStyle=void 0,a._getItemStyle=function(l){var u=a.props,h=u.direction,m=u.itemSize,S=u.layout,f=a._getItemStyleCache(v&&m,v&&S,v&&h),p;if(f.hasOwnProperty(l))p=f[l];else{var I=t(a.props,l,a._instanceProps),z=n(a.props,l,a._instanceProps),T=h==="horizontal"||S==="horizontal",k=h==="rtl",A=T?I:0;f[l]=p={position:"absolute",left:k?void 0:A,right:k?A:void 0,top:T?0:I,height:T?"100%":z,width:T?z:"100%"}}return p},a._getItemStyleCache=void 0,a._getItemStyleCache=F(function(l,u,h){return{}}),a._onScrollHorizontal=function(l){var u=l.currentTarget,h=u.clientWidth,m=u.scrollLeft,S=u.scrollWidth;a.setState(function(f){if(f.scrollOffset===m)return null;var p=a.props.direction,I=m;if(p==="rtl")switch(ee()){case"negative":I=-m;break;case"positive-descending":I=S-h-m;break}return I=Math.max(0,Math.min(I,S-h)),{isScrolling:!0,scrollDirection:f.scrollOffset<m?"forward":"backward",scrollOffset:I,scrollUpdateWasRequested:!1}},a._resetIsScrollingDebounced)},a._onScrollVertical=function(l){var u=l.currentTarget,h=u.clientHeight,m=u.scrollHeight,S=u.scrollTop;a.setState(function(f){if(f.scrollOffset===S)return null;var p=Math.max(0,Math.min(S,m-h));return{isScrolling:!0,scrollDirection:f.scrollOffset<p?"forward":"backward",scrollOffset:p,scrollUpdateWasRequested:!1}},a._resetIsScrollingDebounced)},a._outerRefSetter=function(l){var u=a.props.outerRef;a._outerRef=l,typeof u=="function"?u(l):u!=null&&typeof u=="object"&&u.hasOwnProperty("current")&&(u.current=l)},a._resetIsScrollingDebounced=function(){a._resetIsScrollingTimeoutId!==null&&Y(a._resetIsScrollingTimeoutId),a._resetIsScrollingTimeoutId=He(a._resetIsScrolling,je)},a._resetIsScrolling=function(){a._resetIsScrollingTimeoutId=null,a.setState({isScrolling:!1},function(){a._getItemStyleCache(-1,null)})},a}_.getDerivedStateFromProps=function(a,l){return Ve(a,l),y(a),null};var b=_.prototype;return b.scrollTo=function(a){a=Math.max(0,a),this.setState(function(l){return l.scrollOffset===a?null:{scrollDirection:l.scrollOffset<a?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},b.scrollToItem=function(a,l){l===void 0&&(l="auto");var u=this.props,h=u.itemCount,m=u.layout,S=this.state.scrollOffset;a=Math.max(0,Math.min(a,h-1));var f=0;if(this._outerRef){var p=this._outerRef;m==="vertical"?f=p.scrollWidth>p.clientWidth?X():0:f=p.scrollHeight>p.clientHeight?X():0}this.scrollTo(s(this.props,a,l,S,this._instanceProps,f))},b.componentDidMount=function(){var a=this.props,l=a.direction,u=a.initialScrollOffset,h=a.layout;if(typeof u=="number"&&this._outerRef!=null){var m=this._outerRef;l==="horizontal"||h==="horizontal"?m.scrollLeft=u:m.scrollTop=u}this._callPropsCallbacks()},b.componentDidUpdate=function(){var a=this.props,l=a.direction,u=a.layout,h=this.state,m=h.scrollOffset,S=h.scrollUpdateWasRequested;if(S&&this._outerRef!=null){var f=this._outerRef;if(l==="horizontal"||u==="horizontal")if(l==="rtl")switch(ee()){case"negative":f.scrollLeft=-m;break;case"positive-ascending":f.scrollLeft=m;break;default:var p=f.clientWidth,I=f.scrollWidth;f.scrollLeft=I-p-m;break}else f.scrollLeft=m;else f.scrollTop=m}this._callPropsCallbacks()},b.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&Y(this._resetIsScrollingTimeoutId)},b.render=function(){var a=this.props,l=a.children,u=a.className,h=a.direction,m=a.height,S=a.innerRef,f=a.innerElementType,p=a.innerTagName,I=a.itemCount,z=a.itemData,T=a.itemKey,k=T===void 0?Qe:T,A=a.layout,ve=a.outerElementType,pe=a.outerTagName,ge=a.style,Se=a.useIsScrolling,Ie=a.width,H=this.state.isScrolling,D=h==="horizontal"||A==="horizontal",ye=D?this._onScrollHorizontal:this._onScrollVertical,j=this._getRangeToRender(),_e=j[0],Re=j[1],Q=[];if(I>0)for(var E=_e;E<=Re;E++)Q.push(W.createElement(l,{data:z,key:k(E,z),index:E,isScrolling:Se?H:void 0,style:this._getItemStyle(E)}));var K=i(this.props,this._instanceProps);return W.createElement(ve||pe||"div",{className:u,onScroll:ye,ref:this._outerRefSetter,style:L({position:"relative",height:m,width:Ie,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:h},ge)},W.createElement(f||p||"div",{children:Q,ref:S,style:{height:D?"100%":K,pointerEvents:H?"none":void 0,width:D?K:"100%"}}))},b._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var a=this.props.itemCount;if(a>0){var l=this._getRangeToRender(),u=l[0],h=l[1],m=l[2],S=l[3];this._callOnItemsRendered(u,h,m,S)}}if(typeof this.props.onScroll=="function"){var f=this.state,p=f.scrollDirection,I=f.scrollOffset,z=f.scrollUpdateWasRequested;this._callOnScroll(p,I,z)}},b._getRangeToRender=function(){var a=this.props,l=a.itemCount,u=a.overscanCount,h=this.state,m=h.isScrolling,S=h.scrollDirection,f=h.scrollOffset;if(l===0)return[0,0,0,0];var p=o(this.props,f,this._instanceProps),I=d(this.props,p,f,this._instanceProps),z=!m||S==="backward"?Math.max(1,u):1,T=!m||S==="forward"?Math.max(1,u):1;return[Math.max(0,p-z),Math.max(0,Math.min(l-1,I+T)),p,I]},_}(W.PureComponent),e.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},e}var Ve=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},Ge=50,P=function(e,t,i){var n=e,s=n.itemSize,o=i.itemMetadataMap,d=i.lastMeasuredIndex;if(t>d){var c=0;if(d>=0){var v=o[d];c=v.offset+v.size}for(var y=d+1;y<=t;y++){var M=s(y);o[y]={offset:c,size:M},c+=M}i.lastMeasuredIndex=t}return o[t]},Ze=function(e,t,i){var n=t.itemMetadataMap,s=t.lastMeasuredIndex,o=s>0?n[s].offset:0;return o>=i?ce(e,t,s,0,i):Je(e,t,Math.max(0,s),i)},ce=function(e,t,i,n,s){for(;n<=i;){var o=n+Math.floor((i-n)/2),d=P(e,o,t).offset;if(d===s)return o;d<s?n=o+1:d>s&&(i=o-1)}return n>0?n-1:0},Je=function(e,t,i,n){for(var s=e.itemCount,o=1;i<s&&P(e,i,t).offset<n;)i+=o,o*=2;return ce(e,t,Math.min(i,s-1),Math.floor(i/2),n)},te=function(e,t){var i=e.itemCount,n=t.itemMetadataMap,s=t.estimatedItemSize,o=t.lastMeasuredIndex,d=0;if(o>=i&&(o=i-1),o>=0){var c=n[o];d=c.offset+c.size}var v=i-o-1,y=v*s;return d+y},Ye=Ke({getItemOffset:function(e,t,i){return P(e,t,i).offset},getItemSize:function(e,t,i){return i.itemMetadataMap[t].size},getEstimatedTotalSize:te,getOffsetForIndexAndAlignment:function(e,t,i,n,s,o){var d=e.direction,c=e.height,v=e.layout,y=e.width,M=d==="horizontal"||v==="horizontal",_=M?y:c,b=P(e,t,s),R=te(e,s),a=Math.max(0,Math.min(R-_,b.offset)),l=Math.max(0,b.offset-_+b.size+o);switch(i==="smart"&&(n>=l-_&&n<=a+_?i="auto":i="center"),i){case"start":return a;case"end":return l;case"center":return Math.round(l+(a-l)/2);case"auto":default:return n>=l&&n<=a?n:n<l?l:a}},getStartIndexForOffset:function(e,t,i){return Ze(e,i,t)},getStopIndexForStartIndex:function(e,t,i,n){for(var s=e.direction,o=e.height,d=e.itemCount,c=e.layout,v=e.width,y=s==="horizontal"||c==="horizontal",M=y?v:o,_=P(e,t,n),b=i+M,R=_.offset+_.size,a=t;a<d-1&&R<b;)a++,R+=P(e,a,n).size;return a},initInstanceProps:function(e,t){var i=e,n=i.estimatedItemSize,s={itemMetadataMap:{},estimatedItemSize:n||Ge,lastMeasuredIndex:-1};return t.resetAfterIndex=function(o,d){d===void 0&&(d=!0),s.lastMeasuredIndex=Math.min(s.lastMeasuredIndex,o-1),t._getItemStyleCache(-1),d&&t.forceUpdate()},s},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){e.itemSize}});function re(r,e){for(var t in r)if(!(t in e))return!0;for(var i in e)if(r[i]!==e[i])return!0;return!1}var Xe=["style"],et=["style"];function tt(r,e){var t=r.style,i=G(r,Xe),n=e.style,s=G(e,et);return!re(t,n)&&!re(i,s)}function rt(r){const e=r.providers,t=Object.keys(e),i={};for(let n=0;n<t.length;n++){const s=t[n];i[s]={...e[s],idx:n}}return{byName:i,names:t}}async function nt(r,e){const{url:t,init:i}=q(e);let n={providers:{}};try{const s=await fetch(t+r,i);s.ok&&(n=await s.json())}catch(s){console.log("failed to GET /providers/rules",s)}return rt(n)}async function de({name:r,apiConfig:e}){const{url:t,init:i}=q(e);try{return(await fetch(t+`/providers/rules/${r}`,{method:"PUT",...i})).ok}catch(n){return console.log("failed to PUT /providers/rules/:name",n),!1}}async function it({names:r,apiConfig:e}){for(let t=0;t<r.length;t++)await de({name:r[t],apiConfig:e})}var st=function(r,e,t,i,n,s,o,d){if(!r){var c;if(e===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var v=[t,i,n,s,o,d],y=0;c=new Error(e.replace(/%s/g,function(){return v[y++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},at=st;function ot(r){return at(r.rules&&r.rules.length>=0,"there is no valid rules list in the rules API response"),r.rules.map((e,t)=>({...e,id:t}))}async function lt(r,e){let t={rules:[]};try{const{url:i,init:n}=q(e),s=await fetch(i+r,n);s.ok&&(t=await s.json())}catch(i){console.log("failed to fetch rules",i)}return ot(t)}const fe=Ce({key:"ruleFilterText",default:""});function ut(r,e){const t=B(),{mutate:i,isLoading:n}=ue(de,{onSuccess:()=>{t.invalidateQueries("/providers/rules")}});return[o=>{o.preventDefault(),i({name:r,apiConfig:e})},n]}function ct(r){const e=B(),{data:t}=he(r),{mutate:i,isLoading:n}=ue(it,{onSuccess:()=>{e.invalidateQueries("/providers/rules")}});return[o=>{o.preventDefault(),i({names:t.names,apiConfig:r})},n]}function he(r){return ae(["/providers/rules",r],()=>nt("/providers/rules",r))}function dt(r){const{data:e,isFetching:t}=ae(["/rules",r],()=>lt("/rules",r)),{data:i}=he(r),[n]=we(fe);if(n==="")return{rules:e,provider:i,isFetching:t};{const s=n.toLowerCase();return{rules:e.filter(o=>o.payload.toLowerCase().indexOf(s)>=0),isFetching:t,provider:{byName:i.byName,names:i.names.filter(o=>o.toLowerCase().indexOf(s)>=0)}}}}const ft="_RuleProviderItem_ly9yn_1",ht="_left_ly9yn_7",mt="_middle_ly9yn_14",vt="_gray_ly9yn_20",pt="_refreshButtonWrapper_ly9yn_24",x={RuleProviderItem:ft,left:ht,middle:mt,gray:vt,refreshButtonWrapper:pt};function gt({idx:r,name:e,vehicleType:t,behavior:i,updatedAt:n,ruleCount:s,apiConfig:o}){const[d,c]=ut(e,o),v=We(new Date(n),new Date);return O("div",{className:x.RuleProviderItem,children:[g("span",{className:x.left,children:r}),O("div",{className:x.middle,children:[g(xe,{name:e,type:`${t} / ${i}`}),g("div",{className:x.gray,children:s<2?`${s} rule`:`${s} rules`}),O("small",{className:x.gray,children:["Updated ",v," ago"]})]}),g("span",{className:x.refreshButtonWrapper,children:g(Ne,{onClick:d,disabled:c,children:g(le,{isRotating:c})})})]})}function St({apiConfig:r}){const[e,t]=ct(r),{t:i}=oe();return g(Le,{icon:g(le,{isRotating:t}),text:i("update_all_rule_provider"),style:De,onClick:e})}const It="_rule_1e5p9_4",yt="_left_1e5p9_15",_t="_a_1e5p9_22",Rt="_b_1e5p9_29",bt="_type_1e5p9_41",Mt="_size_1e5p9_46",Ot="_payloadAndSize_1e5p9_50",C={rule:It,left:yt,a:_t,b:Rt,type:bt,size:Mt,payloadAndSize:Ot},U={_default:"#59caf9",DIRECT:"#f5bc41",REJECT:"#cb3166"};function zt({proxy:r}){let e=U._default;return U[r]&&(e=U[r]),{color:e}}function Tt({type:r,payload:e,proxy:t,id:i,size:n}){const s=zt({proxy:t});return O("div",{className:C.rule,children:[g("div",{className:C.left,children:i}),O("div",{children:[O("div",{className:C.payloadAndSize,children:[g("div",{className:C.payload,children:e}),(r==="GeoSite"||r==="GeoIP")&&O("div",{style:{margin:"0 1em"},className:C.size,children:[" ","size: ",n]})]}),O("div",{className:C.a,children:[g("div",{className:C.type,children:r}),g("div",{style:s,children:t})]})]})]})}const Ct="_header_1x9we_4",wt="_RuleProviderItemWrapper_1x9we_20",me={header:Ct,RuleProviderItemWrapper:wt},{memo:xt}=N,ne=30;function Nt(r,{rules:e,provider:t}){const i=t.names.length;return r<i?t.names[r]:e[r-i].id}function Pt({provider:r}){return function(t){const i=r.names.length;return t<i?90:60}}const Et=xt(({index:r,style:e,data:t})=>{const{rules:i,provider:n,apiConfig:s}=t,o=n.names.length;if(r<o){const c=n.names[r],v=n.byName[c];return g("div",{style:e,className:me.RuleProviderItemWrapper,children:g(gt,{apiConfig:s,...v})})}const d=i[r-o];return g("div",{style:e,children:g(Tt,{...d})})},tt),kt=r=>({apiConfig:Ee(r)}),qt=Pe(kt)(At);function At({apiConfig:r}){const[e,t]=Fe(),{rules:i,provider:n}=dt(r),s=Pt({provider:n}),{t:o}=oe();return O("div",{children:[O("div",{className:me.header,children:[g(ke,{title:o("Rules")}),g(Ae,{textAtom:fe,placeholder:o("Search")})]}),g("div",{ref:e,style:{paddingBottom:ne},children:g(Ye,{height:t-ne,width:"100%",itemCount:i.length+n.names.length,itemSize:s,itemData:{rules:i,provider:n,apiConfig:r},itemKey:Nt,children:Et})}),n&&n.names&&n.names.length>0?g(St,{apiConfig:r}):null]})}export{qt as default};
