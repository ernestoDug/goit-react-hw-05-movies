"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[350],{350:function(e,n,a){a.r(n),a.d(n,{default:function(){return v}});var s,t=a(439),r=a(689),i=a(791),c=a(87),l=a(174),o=(a(462),a(168)),d=a(867),h=a(184),x=(0,d.ZP)(c.rU)(s||(s=(0,o.Z)(["\n  box-shadow: 1px 1px #53eaae, 2px 2px #53eac4, 3px 3px #53eaea;\n  background-color: #22ae8b;\n  color: #fff1eb;\n  outline: none;\n  border: none;\n  transition: all 0.1s ease-in;\n  padding: 5px 10px;\n  border-radius: 20px/60px;\n  margin-bottom: 10px;\n  width: 150px;\n\n  &:hover {\n    background-color: #88d122;\n    transform: rotate(-10deg);\n    color: #320960;\n  }\n"]))),m=function(e){var n=e.to,a=e.children;return(0,h.jsx)(x,{to:n,children:a})},u=a(243),p=a(287),j=function(e){var n=e.name,a=e.id;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("li",{className:"ganreListITM",children:n},a)})},v=function(){var e,n,a=(0,i.useState)(""),s=(0,t.Z)(a,2),o=s[0],d=s[1],x=(0,i.useState)(!1),v=(0,t.Z)(x,2),f=v[0],b=v[1],g=(0,r.UO)().id,w=o.original_title,N=o.vote_average,k=o.overview,_=o.poster_path,S=o.genres,U=o.release_date,Z=null!==(e=null===(n=(0,r.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,i.useEffect)((function(){b(!0),function(e){return u.Z.get("".concat("https://api.themoviedb.org","/3/movie/").concat(e,"?language=en-US&api_key=").concat("f56a897a3a6f379d289b4251d1cb1dbb"),{})}(g).then((function(e){d(e.data)})).catch((function(e){l.Am.warn("\ud83d\udc12Sorry ".concat(e," \ud83d\udc12"))})).finally((function(){b(!1)}))}),[g,_]),(0,h.jsxs)("main",{className:"contMD",children:[f&&(0,h.jsx)(p.Z,{}),(0,h.jsx)("div",{className:"wrapBtnImgMovDet",children:(0,h.jsxs)(m,{className:"btnBackHome",to:Z,children:["Go back \ud83c\udfc4"," "]})}),(0,h.jsxs)("div",{className:"detalWrapp",children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(_),alt:"title of film"}),(0,h.jsxs)("div",{className:"detalTxt",children:[(0,h.jsxs)("h3",{children:[w,(0,h.jsxs)("span",{children:["(",null===U||void 0===U?void 0:U.slice(0,4),")"]})]}),(0,h.jsxs)("p",{children:["User Score: ",Math.ceil(10*N),"%"]}),(0,h.jsx)("h4",{children:"Overview"}),(0,h.jsxs)("p",{children:[k," "]})]}),(0,h.jsxs)("div",{className:"janrAddWrap",children:[(0,h.jsx)("h5",{children:"Genres \ud83d\udcfc"}),(0,h.jsx)("ul",{className:"listGanreItem",children:null===S||void 0===S?void 0:S.map((function(e){var n=e.name,a=e.id;return(0,h.jsx)(j,{name:n},a)}))}),(0,h.jsx)("p",{children:"Additional information \u2935\ufe0f \u2693 "})]})]}),(0,h.jsxs)("ul",{className:"navDet",children:[(0,h.jsx)("li",{className:"castRewieItm",children:(0,h.jsx)(c.rU,{className:"castRewie",to:"cast",children:"Cast \ud83d\udcee"})}),(0,h.jsx)("li",{className:"castRewieItm",children:(0,h.jsx)(c.rU,{className:"castRewie",to:"reviews",children:"Reviews \u2712\ufe0f"})})]}),(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)("div",{children:"\ud83d\udea7Loading...\ud83d\ude9b"}),children:(0,h.jsx)(r.j3,{})})]})}}}]);
//# sourceMappingURL=350.95440ffe.chunk.js.map