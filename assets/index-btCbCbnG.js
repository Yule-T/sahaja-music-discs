import{H as m,D as x}from"./index-IKbiUWNH.js";import{_ as l,o as p,a,c as d,b as s,t as o,r as h,d as r,F as v,e as D,u as b}from"./index-N9DBRjoS.js";const f={class:"home-discs-page"},g={class:"discs-box"},k={class:"discs-pic"},$=["src"],y={class:"discs-name"},H={class:"discs-author"},N={__name:"home-discs",props:{discsData:{type:Object,default:{}},index:{type:Number}},setup(e){const{discsData:n,index:_}=e;p(()=>{console.log(n.discsPic)});function i(t){h.push({path:"/detail-page",query:{id:t+1}})}return(t,c)=>(a(),d("div",f,[s("div",g,[s("div",k,[s("img",{src:e.discsData.discsPic,alt:"图片加载失败...",onClick:c[0]||(c[0]=u=>i(e.index))},null,8,$)]),s("div",y,[s("span",{onClick:c[1]||(c[1]=u=>i(e.index))},o(e.discsData.discsName),1)]),s("div",H,[s("span",null,o(e.discsData.discsAuthor),1)])])]))}},B=l(N,[["__scopeId","data-v-db2393cf"]]),C={class:"index-page"},F={class:"discs-box"},I={class:"index-page-discs-box"},P={__name:"index",setup(e){return(n,_)=>(a(),d("div",C,[r(m),s("div",F,[s("div",I,[(a(!0),d(v,null,D(b(x),(i,t)=>(a(),d("div",{class:"discs-box-min-box",key:t},[r(B,{discsData:i,index:t},null,8,["discsData","index"])]))),128))])])]))}},q=l(P,[["__scopeId","data-v-520e94b6"]]);export{q as default};
