(this["webpackJsonphexagon-quilt"]=this["webpackJsonphexagon-quilt"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),i=a(9),o=a.n(i),r=(a(15),a(16),a(3)),s=a(2),l=a(4),b=(a(17),a(6)),u={breakpoints:["94vw"]},d={name:"1jpcp03",styles:"width:100%;height:100%;display:flex;justify-content:center;align-items:center;"},p=function(e){var t=e.image,a=e.idx,n=e.fabric,i=e.quiltSectionWidth,o=e.changeOneFabric,r=e.fabricSelected,l=i%2===0||Math.floor(a/i)%2===0;return Object(c.a)("div",{css:Object(s.a)([{overflow:"hidden",position:"relative",clipPath:"polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",width:"calc(125vw / ".concat(i," - 1px)"),height:"calc(8 / 9 * (125vw / ".concat(i,") - 1px)"),backgroundRepeat:"repeat",backgroundImage:"url(./images/".concat(n,"/").concat(n).concat(t,".jpg)"),backgroundPosition:"center",marginTop:"calc((-8 / 9 * 125vw / ".concat(i,") / 2)")},l?{"&:nth-of-type(odd)":{marginTop:0}}:{"&:nth-of-type(even)":{marginTop:0}}],"")},r&&Object(c.a)("div",{css:d},Object(c.a)("button",{onClick:function(){return o(a)}},t)))},g=function(e){var t=e.quiltSectionHeight,a=e.quiltSectionWidth,n=e.imageList,i="8 / 9 * (125vw / ".concat(a,")");return Object(c.a)("div",{className:"Quilt",css:Object(s.a)({overflow:"hidden",width:u.breakpoints[0],display:"grid",gridTemplateColumns:"repeat(".concat(a,", calc(").concat(u.breakpoints[0]," / ").concat(a," ))"),gridTemplateRows:"repeat(".concat(t-1,", calc(").concat(i,"))"),margin:"40px auto -16px auto",paddingRight:"calc(".concat(u.breakpoints[0]," / ").concat(a," / 3)"),maxHeight:"calc(".concat(i," * ").concat(t-1,")")},"")},n.map((function(t,a){return Object(c.a)(p,Object(b.a)({key:"hexi-key-".concat(t,"-").concat(a),idx:a,image:t},e))})))},f={name:"1jpcp03",styles:"width:100%;height:100%;display:flex;justify-content:center;align-items:center;"},m=function(e){var t=e.image,a=e.idx,n=e.fabric,i=e.quiltSectionWidth,o=e.changeOneFabric,r=e.fabricSelected;return Object(c.a)("div",{css:Object(s.a)({clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",width:"calc(".concat(u.breakpoints[0]," / ").concat(i," - 1px)"),height:"calc(".concat(u.breakpoints[0]," / ").concat(i," - 1px)"),backgroundRepeat:"repeat",backgroundPosition:"center",backgroundImage:"url(./images/".concat(n,"/").concat(n).concat(t,".jpg)")},"")},r&&Object(c.a)("div",{css:f},Object(c.a)("button",{onClick:function(){return o(a)}},t)))},h=function(e){var t=e.quiltSectionHeight,a=e.quiltSectionWidth,n=e.imageList;return Object(c.a)("div",{className:"Quilt",css:Object(s.a)({overflow:"hidden",width:u.breakpoints[0],display:"grid",gridTemplateColumns:"repeat(".concat(a,", calc(").concat(u.breakpoints[0]," / ").concat(a,"))"),gridTemplateRows:"repeat(".concat(t-1,", calc(").concat(u.breakpoints[0]," / ").concat(a,"))"),margin:"40px auto -15px auto",maxHeight:"calc(".concat(u.breakpoints[0]," / ").concat(a," * ").concat(t-1,")")},"")},n.map((function(t,a){return Object(c.a)(m,Object(b.a)({key:"square-key-".concat(t,"-").concat(a),idx:a,image:t},e))})))},j=function(e){return"Hexagon"===e.shape?Object(c.a)(g,e):Object(c.a)(h,e)},O={beeCreative:{name:'"Bee Creative" by Deb Strain',notImage:[25,27,28,30,31,32,33],fabricCount:34,hueWidth:5}},x={name:"eeo1z3",styles:"margin:0;padding:20px;width:calc(100% - 40px);background-color:#fff;"},y={name:"1urjpff",styles:"margin:0;margin-bottom:20px;padding:0;"},v={name:"11htefn",styles:"display:flex;justify-content:space-around;font-weight:bold;font-size:24px;margin:0;"},w={name:"225ri3",styles:"border-bottom:1px solid grey;margin-bottom:10px;padding-bottom:10px;width:100%;"},k={name:"vxgrp0",styles:"display:flex;justify-content:space-between;flex-wrap:wrap;"},S={name:"1r2f04i",styles:"margin-bottom:10px;"},q={name:"ybjnkk",styles:"font-weight:bold;font-size:16px;text-shadow:0px 0px 2px white;"},C=function(e){var t=e.counts,a=e.fabric,n=e.selectFabric,i=e.fabricSelected,o=O[a],l=o.fabricCount,b=o.notImage,u=o.hueWidth,d="calc(94vw / ".concat(u," - 10px)");return Object(c.a)("aside",{css:x},Object(c.a)("h2",{css:y},"Color Key"),Object(c.a)("div",{css:v},Object(r.a)(Array(u).keys()).map((function(e){return Object(c.a)("div",{key:"Hue-Header-".concat((e+1)%u),css:w},"Hue: ".concat((e+1)%u||u))}))),Object(c.a)("div",{css:k},Object(r.a)(Array(Math.ceil(l/u)*u).keys()).map((function(e){var o=-1!==b.indexOf(e+1)||e+1>l;return Object(c.a)("div",{css:S,key:"Image-".concat(e+1)},!o&&Object(c.a)("div",{css:q},Object(c.a)("span",null,"#".concat(e+1,": ")),Object(c.a)("span",{css:Object(s.a)({color:(t[e+1]<4||t[e+1]>6)&&"red"},"")},"".concat(t[e+1]||0," uses"))),Object(c.a)("div",{key:"orig-image-order-".concat(e+1),id:"orig-image-order-".concat(e+1),css:Object(s.a)({width:d,height:100,backgroundRepeat:"repeat",backgroundImage:"url(./images/".concat(a,"/").concat(a).concat(e+1,".jpg)"),backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"flex-end",border:!o&&"1px solid grey"},"")},!o&&Object(c.a)("button",{css:Object(s.a)({width:"calc(100% + 2px)",margin:-1,padding:5,fontSize:"0.9rem"},""),onClick:function(){n(i===e+1?"":e+1)}},i===e+1?"No more!":"Choose me!")))}))))},W={name:"14qjzpv",styles:"display:flex;justify-content:flex-start;align-items:center;margin:18px;font-size:1.2rem;"},H={name:"1m5d99o",styles:"margin:0;padding:0;text-align:right;"},I=function(e){var t=e.label,a=e.children;return Object(c.a)("label",{css:W},Object(c.a)("p",{css:H},t),a)};var z=function(e){var t=e.fabric,a=e.quiltSectionWidth,c=e.quiltSectionHeight,n=R(),i=[];return Object(r.a)(Array(a*c).keys()).forEach((function(e){var c={idx:e,rowWidth:a,fabric:t},o=n[e]||function(e){var t,a,c=e.idx,n=e.rowWidth,i=e.fabric,o=O[i],r=o.hueWidth,s=o.notImage,l=o.fabricCount,b=R(),u=[b[c-n-1],b[c-n],b[c-n+1],b[c-1],b[c-2]],d=u.slice(0,-1).map((function(e){return e%r})),p=1,g=p%r,f=!0,m=!0;do{t=1,a=l+1,t=Math.ceil(t),a=Math.floor(a),g=(p=Math.floor(Math.random()*(a-t))+t)%r,f=u.indexOf(p)>-1,m=d.indexOf(g)>-1}while(s.indexOf(p)>-1||f||m);return p}(c);i.push(o),L(i)})),i},F=function(e){return T(),z(e)},R=function(){return JSON.parse(window.localStorage.getItem("imageList"))||[]},L=function(e){window.localStorage.setItem("imageList",JSON.stringify(e||[]))},T=function(){window.localStorage.removeItem("imageList")},M=function(){var e=R(),t={};return e.forEach((function(e){t[e]=t[e]+1||1})),t},N={name:"1rvb81",styles:"margin:10px;padding:0;font-size:1.2rem;"},P={name:"in3yi3",styles:"font-weight:bold;"},A=function(e){var t=e.title,a=e.description;return Object(c.a)("p",{css:N},Object(c.a)("span",{css:P},t)," ",a)},J={name:"llkvfp",styles:"margin:0;padding-top:20px;"},B={name:"iyqatn",styles:"box-shadow:0 0 4px rgba(0, 0, 0, 0.3);border-top:1px solid rgba(0, 0, 0, 0.3);border-bottom:1px solid rgba(0, 0, 0, 0.3);width:100%;margin-top:20px;padding:20px auto 10px auto;display:flex;justify-content:space-around;align-items:flex-end;flex-wrap:wrap;background-color:#fff;"},E={name:"1n2ilay",styles:"min-width:360px;"},G={name:"1nvf2ph",styles:"display:flex;justify-content:space-around;flex-wrap:wrap;"},Q={name:"166k92q",styles:"padding-bottom:56px;margin:0 auto;"},D={name:"uj1lo8",styles:"border-top:1px solid rgba(0, 0, 0, 0.3);box-shadow:0 0 4px rgba(0, 0, 0, 0.3);"};var K=function(){var e=Object(n.useState)(M()),t=Object(l.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(17),b=Object(l.a)(o,2),u=b[0],d=b[1],p=Object(n.useState)(7),g=Object(l.a)(p,2),f=g[0],m=g[1],h=Object(n.useState)("beeCreative"),O=Object(l.a)(h,2),x=O[0],y=O[1],v=Object(n.useState)("Hexagon"),w=Object(l.a)(v,2),k=w[0],S=w[1],q=Object(n.useState)(),W=Object(l.a)(q,2),H=W[0],R=W[1],T=Object(n.useState)([]),N=Object(l.a)(T,2),P=N[0],K=N[1];return Object(n.useEffect)((function(){K(z({quiltSectionWidth:u,quiltSectionHeight:f,fabric:x}))}),[u,f,x]),Object(c.a)("main",{className:"Homepage"},Object(c.a)("header",null,Object(c.a)("h1",{css:J},"Quilt Fabric Randomizer"),Object(c.a)(A,{description:"by Jen Luker"})),Object(c.a)("div",{css:B},Object(c.a)("div",{css:E},Object(c.a)("div",{css:Object(s.a)({width:"100%",display:"flex",justifyContent:"space-between",flexWrap:"wrap",margin:"0 auto"},"")},Object(c.a)(A,{description:Object(c.a)("a",{href:"https://knitcodemonkey.github.io/hexagon-quilt-map/"},"Go to Website")}),Object(c.a)(A,{description:Object(c.a)("a",{href:"https://github.com/knitcodemonkey/hexagon-quilt-map"},"See on Github")})),Object(c.a)("button",{css:Object(s.a)({margin:"10px auto"},""),type:"button",onClick:function(){var e=F({quiltSectionWidth:u,quiltSectionHeight:f,fabric:x});K(e),i(M())}},"Randomize Fabric Placement")),Object(c.a)("form",{css:G},Object(c.a)("div",null,Object(c.a)(I,{label:"Shape:"},Object(c.a)("select",{value:k,onChange:function(e){return S(e.target.value)}},Object(c.a)("option",{value:"Hexagon"},"Hexagon"),Object(c.a)("option",{value:"Square"},"Square"))),Object(c.a)(I,{label:"Fabric:"},Object(c.a)("select",{value:x,onChange:function(e){return y(e.target.value)}},Object(c.a)("option",{value:"beeCreative"},"Bee Creative")))),Object(c.a)("div",null,Object(c.a)(I,{label:"Generated Width:"},Object(c.a)("select",{value:u,onChange:function(e){d(parseInt(e.target.value))}},Object(r.a)(Array(30).keys()).map((function(e){return Object(c.a)("option",{key:"wide-".concat(e+1),value:e+1},e+1)})))),Object(c.a)(I,{label:"Generated Height:"},Object(c.a)("select",{value:f,onChange:function(e){m(parseInt(e.target.value))}},Object(r.a)(Array(100).keys()).map((function(e){return Object(c.a)("option",{key:"tall-".concat(e+1),value:e+1},e)}))))))),Object(c.a)("article",{css:Q},Object(c.a)(j,{key:"QuiltSection-".concat(P.length,"-").concat(H),quiltSectionWidth:u,quiltSectionHeight:f,fabric:x,shape:k,imageList:P,changeOneFabric:function(e){var t=Object.assign(P);t[e]=H,L(t),i(M()),K(z({quiltSectionWidth:u,quiltSectionHeight:f,fabric:x}))},fabricSelected:H})),Object(c.a)("footer",{css:D},Object(c.a)(C,{counts:a,fabric:x,selectFabric:R,fabricSelected:H})))};var $=function(){return Object(c.a)(K,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(c.a)($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.39774da9.chunk.js.map