import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{p as f,e as h,j as y,g as _,y as g,A as p,f as w,r as o,i as V,a as r,o as k,c as x,a3 as s,a7 as n}from"./index-7XScDnoQ.js";import{u as C}from"./color-DdlnnMDh.js";const b=f({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...h(),...y()},"VDivider"),D=_()({name:"VDivider",props:b(),setup(e,i){let{attrs:a,slots:l}=i;const{themeClasses:c}=g(e),{textColorClasses:d,textColorStyles:v}=C(p(e,"color")),m=w(()=>{const t={};return e.length&&(t[e.vertical?"height":"width"]=o(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=o(e.thickness)),t});return V(()=>{const t=r("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},c.value,d.value,e.class],style:[m.value,v.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!a.role||a.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${a.role||"separator"}`},null);return l.default?r("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[t,r("div",{class:"v-divider__content"},[l.default()]),t]):t}),{}}}),S={class:"d-flex flex-column justify-center align-center heading"},B={__name:"home",setup(e){return(i,a)=>(k(),x("div",S,[s("div",null,[s("p",{class:n(i.$vuetify.display.smAndDown?"mblView":"lapView"),style:{"text-align":"center","font-family":"Cinzel, Protest Revolution",opacity:"0.6","font-size":"40px"}}," Ajay Rathnam ",2),r(D,{class:"w-100",thickness:2,style:{color:"floralwhite"}}),s("p",{class:n(["mainFont",i.$vuetify.display.smAndDown?"mblroleView":"lapView"]),style:{opacity:"0.6","text-align":"center"}}," Software Developer ",2)])]))}},z=u(B,[["__scopeId","data-v-455573d1"]]);export{z as default};
