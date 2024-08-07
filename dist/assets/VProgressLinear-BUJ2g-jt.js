import{q as N,x as j,P as q,_ as G,S as H,K,p as _,H as F,f as s,l as W,a9 as O,e as D,s as J,j as Q,g as Z,G as ee,y as te,aa as w,ab as ae,i as ne,a as i,r as u,b as le}from"./index-7XScDnoQ.js";import{u as oe,a as B}from"./color-DdlnnMDh.js";const re=["top","bottom"],se=["start","end","left","right"];function ie(e,n){let[l,t]=e.split(" ");return t||(t=N(re,l)?"start":N(se,l)?"top":"center"),{side:T(l,n),align:T(t,n)}}function T(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function ue(e,n){const l=j(),t=q(!1);if(G){const c=new IntersectionObserver(a=>{t.value=!!a.find(o=>o.isIntersecting)},n);H(()=>{c.disconnect()}),K(l,(a,o)=>{o&&(c.unobserve(o),t.value=!1),a&&c.observe(a)},{flush:"post"})}return{intersectionRef:l,isIntersecting:t}}const V={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},ce=_({location:String},"location");function de(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=F();return{locationStyles:s(()=>{if(!e.location)return{};const{side:a,align:o}=ie(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function v(b){return l?l(b):0}const r={};return a!=="center"&&(n?r[V[a]]=`calc(100% - ${v(a)}px)`:r[a]=0),o!=="center"?n?r[V[o]]=`calc(100% - ${v(o)}px)`:r[o]=0:(a==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),r})}}const fe=_({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{roundedClasses:s(()=>{const t=O(e)?e.value:e.rounded,c=O(e)?e.value:e.tile,a=[];if(t===!0||t==="")a.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const o of String(t).split(" "))a.push(`rounded-${o}`);else(c||t===!1)&&a.push("rounded-0");return a})}}const ge=_({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...D(),...ce({location:"top"}),...fe(),...J(),...Q()},"VProgressLinear"),he=Z()({name:"VProgressLinear",props:ge(),emits:{"update:modelValue":e=>!0},setup(e,n){var R;let{slots:l}=n;const t=ee(e,"modelValue"),{isRtl:c,rtlClasses:a}=F(),{themeClasses:o}=te(e),{locationStyles:v}=de(e),{textColorClasses:r,textColorStyles:b}=oe(e,"color"),{backgroundColorClasses:I,backgroundColorStyles:$}=B(s(()=>e.bgColor||e.color)),{backgroundColorClasses:L,backgroundColorStyles:p}=B(s(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:P,backgroundColorStyles:x}=B(e,"color"),{roundedClasses:M}=ve(e),{intersectionRef:h,isIntersecting:X}=ue(),y=s(()=>parseFloat(e.max)),d=s(()=>parseFloat(e.height)),C=s(()=>w(parseFloat(e.bufferValue)/y.value*100,0,100)),S=s(()=>w(parseFloat(t.value)/y.value*100,0,100)),g=s(()=>c.value!==e.reverse),E=s(()=>e.indeterminate?"fade-transition":"slide-x-transition"),m=ae&&((R=window.matchMedia)==null?void 0:R.call(window,"(forced-colors: active)").matches);function U(f){if(!h.value)return;const{left:z,right:A,width:k}=h.value.getBoundingClientRect(),Y=g.value?k-f.clientX+(A-k):f.clientX-z;t.value=Math.round(Y/k*y.value)}return ne(()=>i(e.tag,{ref:h,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&X.value,"v-progress-linear--reverse":g.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},M.value,o.value,a.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?u(d.value):0,"--v-progress-linear-height":u(d.value),...e.absolute?v.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:S.value,onClick:e.clickable&&U},{default:()=>[e.stream&&i("div",{key:"stream",class:["v-progress-linear__stream",r.value],style:{...b.value,[g.value?"left":"right"]:u(-d.value),borderTop:`${u(d.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${u(d.value/4)})`,width:u(100-C.value,"%"),"--v-progress-linear-stream-to":u(d.value*(g.value?1:-1))}},null),i("div",{class:["v-progress-linear__background",m?void 0:I.value],style:[$.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),i("div",{class:["v-progress-linear__buffer",m?void 0:L.value],style:[p.value,{opacity:parseFloat(e.bufferOpacity),width:u(C.value,"%")}]},null),i(le,{name:E.value},{default:()=>[e.indeterminate?i("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(f=>i("div",{key:f,class:["v-progress-linear__indeterminate",f,m?void 0:P.value],style:x.value},null))]):i("div",{class:["v-progress-linear__determinate",m?void 0:P.value],style:[x.value,{width:u(S.value,"%")}]},null)]}),l.default&&i("div",{class:"v-progress-linear__content"},[l.default({value:S.value,buffer:C.value})])]})),{}}});export{he as V,fe as m,ve as u};
