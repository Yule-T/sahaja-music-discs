import{f as v,o as y,a as o,c as n,d as p,b as s,u as e,t as d,g as m,F as a,e as r}from"./index-0gW2ae2f.js";import{H as g,D as i}from"./index-GOtr-H9Q.js";const b={class:"discs-detail-page"},q={class:"bottom-detail"},k={class:"left-box"},f={class:"item-1"},D={class:"discs-img-div"},N=["src"],V=s("i",{class:"data__cover_mask"},null,-1),x={class:"name-author-div"},C={class:"name-item"},B={class:"author-item"},H={class:"item-2"},P={key:0,class:"content"},A=s("p",null,"中文名称",-1),F={class:"content"},L=s("p",null,"类型语言",-1),R={class:"content"},E=s("p",null,"内容",-1),I={class:"right-box"},M={class:"highly-recommended"},S=s("p",null,"特别推荐给：",-1),T={class:"main-content"},j=s("p",null,"刻录版包括：",-1),w={class:"discs-content"},z={key:0,class:"discs-img"},G=["src"],J=s("div",{class:"highly-recommended"},[s("p",null,"购买须知："),s("ul",null,[s("li",null,"电子版45元 （ 含音乐/视频文件+歌词文件）"),s("li",null,"碟片版 55元（光盘+歌词本+光盘盒），运费到付")])],-1),X={__name:"discs-detail",setup(K){const t=v();return y(()=>{console.log(t.query.id)}),(O,Q)=>{var _,u,h;return o(),n("div",b,[p(g,{path:"detail"}),s("div",q,[s("div",k,[s("div",f,[s("div",D,[s("img",{src:e(i)[e(t).query.id-1].discsPic,alt:"图片加载失败..."},null,8,N),V]),s("div",x,[s("div",C,d(e(i)[e(t).query.id-1].discsName),1),s("div",B,d(e(i)[e(t).query.id-1].discsAuthor),1)])]),s("div",H,[(_=e(i)[e(t).query.id-1])!=null&&_.discsChinaName?(o(),n("div",P,[A,s("div",null,d(e(i)[e(t).query.id-1].discsChinaName),1)])):m("",!0),s("div",F,[L,s("div",null,d(e(i)[e(t).query.id-1].discsTypeAndLug),1)]),s("div",R,[E,s("ul",null,[(o(!0),n(a,null,r(e(i)[e(t).query.id-1].discsContent,(l,c)=>(o(),n("li",{key:c},d(l.label),1))),128))])])])]),s("div",I,[s("div",M,[S,s("ol",null,[(o(!0),n(a,null,r(e(i)[e(t).query.id-1].highlyRecommended,(l,c)=>(o(),n("li",{key:c,class:"highly-recommended-label"},d(l.label),1))),128))])]),s("div",T,[j,s("div",w,d(e(i)[e(t).query.id-1].burntVersionDetail.burnInclud),1),(h=(u=e(i)[e(t).query.id-1].burntVersionDetail)==null?void 0:u.burnPic)!=null&&h.length?(o(),n("div",z,[(o(!0),n(a,null,r(e(i)[e(t).query.id-1].burntVersionDetail.burnPic,(l,c)=>(o(),n("div",{key:c},[s("img",{src:l,alt:"图片加载失败..."},null,8,G)]))),128))])):m("",!0)]),J])])])}}};export{X as default};