"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[173],{173:function(t,a,e){e.r(a),e.d(a,{default:function(){return p}});var c=e(439),r=e(689),n=e(791),s=e(174),i=(e(462),e(287)),o=e(243),l="CastList_actorWr__pyNG5",h="CastList_actorItm__OFldj",u="CastList_actorImg__rlXCm",m=e(184),_=function(t){var a=t.character,e=t.id,c=t.profile_path,r=t.name;return(0,m.jsx)("li",{className:h,children:(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w200".concat(c),alt:"actor"}),r,(0,m.jsx)("span",{children:a})]})},e)},f="Cast_listActor__bmFoH",d="Cast_sorryCast__05AZK",p=function(){var t=(0,n.useState)([]),a=(0,c.Z)(t,2),e=a[0],l=a[1],h=(0,n.useState)(!1),u=(0,c.Z)(h,2),p=u[0],j=u[1],b=(0,r.UO)().id;return(0,n.useEffect)((function(){j(!0),function(t){return o.Z.get("".concat("https://api.themoviedb.org","/3/movie/").concat(t,"/credits?language=en-US&api_key=").concat("f56a897a3a6f379d289b4251d1cb1dbb"))}(b).then((function(t){l(t.data.cast)})).catch((function(t){s.Am.warn("\ud83d\udc12Sorry ".concat(t," \ud83d\udc12"))})).finally((function(){j(!1)}))}),[b]),0===e.length?(0,m.jsx)("p",{className:d,children:"Sorry, there are no casts for this movie"}):(0,m.jsxs)("section",{children:[p&&(0,m.jsx)(i.Z,{}),(0,m.jsx)("ul",{className:f,children:e.map((function(t){var a=t.character,e=t.id,c=t.profile_path,r=t.name;return(0,m.jsx)(_,{character:a,id:e,profile_path:c,name:r},e)}))})]})}}}]);
//# sourceMappingURL=173.8269e171.chunk.js.map