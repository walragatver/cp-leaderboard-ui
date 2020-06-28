(this["webpackJsonpleaderbored-ui"]=this["webpackJsonpleaderbored-ui"]||[]).push([[9],{801:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),l=t.n(n);function r(){var e=l.a.useRef(!0);return l.a.useEffect((function(){return function(){e.current=!1}}),[]),e}},818:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},876:function(e,a,t){"use strict";t.r(a);var n=t(38),l=t(0),r=t.n(l),c=t(20),o=t.n(c),u=t(91),i=t(291),s=t(302),m=t(801),E=t(93),f=t(43),v=t(3),p=t(784),d=t(775),b=t(746),h=t(846),g=t(765),O=t(859),S=t(764),j=t(98),y=t(858),C=t(863),w=t(866),k=t(861),P=t(864),F=t(877),R=t(865),T=t(871),N=t(774),_=t(730),x=t(860),B=t(818),A=[{value:"all",label:"All"},{value:"FE",label:"FE (FIRST YEAR)"},{value:"SE",label:"SE (SECOND YEAR)"},{value:"TE",label:"TE (THIRD YEAR)"},{value:"BE",label:"BE (FOURTH YEAR)"},{value:"Other",label:"OTHER"}],H=[{value:"overall_score|desc",label:"Total score (high to low)"},{value:"overall_score|asc",label:"Total score (low to high)"}];function I(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}function L(e,a){var t=a.split("|"),l=Object(n.a)(t,2),r=l[0],c=function(e,a){return"desc"===e?function(e,t){return I(e,t,a)}:function(e,t){return-I(e,t,a)}}(l[1],r),o=e.map((function(e,a){return[e,a]}));return o.sort((function(e,a){var t=c(e[0],a[0]);return 0!==t?t:e[1]-a[1]})),o.map((function(e){return e[0]}))}var Y=o()((function(e){return{root:{flexGrow:1},queryField:{width:500},avatar:{height:42,width:42,marginRight:e.spacing(1)},tablePagination:{bottom:0},sortField:{marginLeft:e.spacing(2),flexBasis:200}}}));function q(e){var a=e.className,t=e.customers,l=Object(f.a)(e,["className","customers"]),c=Y(),o=r.a.useState("all"),u=Object(n.a)(o,2),i=u[0],s=u[1],m=r.a.useState(0),I=Object(n.a)(m,2),q=I[0],D=I[1],G=r.a.useState(10),J=Object(n.a)(G,2),U=J[0],z=J[1],K=r.a.useState(""),M=Object(n.a)(K,2),Q=M[0],V=M[1],W=r.a.useState(H[0].value),X=Object(n.a)(W,2),Z=X[0],$=X[1],ee=r.a.useState({FE:null,SE:null,TE:null,BE:null,Other:null}),ae=Object(n.a)(ee,2),te=ae[0],ne=ae[1],le=function(e,a,t){return e.filter((function(e){var n=!0;if(a){var l=!1;["email","full_name"].forEach((function(t){e[t].toLowerCase().includes(a.toLowerCase())&&(l=!0)})),l||(n=!1)}return Object.keys(t).forEach((function(a){t[a]&&e.class_type!==a&&(n=!1)})),n}))}(t,Q,te),re=function(e,a,t){return e.slice(a*t,a*t+t)}(L(le,Z),q,U);return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{position:"static",color:"transparent"},r.a.createElement(T.a,{onChange:function(e,a){var t=Object(E.a)(Object(E.a)({},te),{},{FE:null,SE:null,TE:null,BE:null,Other:null});"all"!==a&&(t[a]=!0),ne(t),s(a),D(0)},scrollButtons:"auto",textColor:"secondary",indicatorColor:"primary",value:i,variant:"scrollable"},A.map((function(e){return r.a.createElement(y.a,{key:e.value,value:e.value,label:e.label})})))),r.a.createElement(d.a,{position:"sticky",color:"inherit"},r.a.createElement(b.a,{p:1,display:"flex",alignItems:"center"},r.a.createElement(N.a,{className:c.queryField,InputProps:{startAdornment:r.a.createElement(O.a,{position:"start"},r.a.createElement(j.a,{fontSize:"small",color:"action"},r.a.createElement(x.a,null)))},onChange:function(e){e.persist(),V(e.target.value)},placeholder:"Search candidates",value:Q,variant:"outlined"}),r.a.createElement(b.a,{flexGrow:1}),r.a.createElement(N.a,{className:c.sortField,label:"Sort By",name:"sort",onChange:function(e){e.persist(),$(e.target.value)},select:!0,SelectProps:{native:!0},value:Z,variant:"outlined"},H.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)}))))),r.a.createElement(h.a,Object.assign({className:Object(v.a)(c.root,a)},l),r.a.createElement(g.a,null),r.a.createElement(b.a,{overflow:"auto"},r.a.createElement(C.a,null,r.a.createElement(P.a,null,r.a.createElement(R.a,null,r.a.createElement(k.a,null,"Name"),r.a.createElement(k.a,null,"Codeforces Handle"),r.a.createElement(k.a,null,"Class"),r.a.createElement(k.a,null,"Total Score"))),r.a.createElement(w.a,null,re.map((function(e){return r.a.createElement(R.a,{hover:!0,key:e.id},r.a.createElement(k.a,null,r.a.createElement(b.a,{display:"flex",alignItems:"center"},r.a.createElement(p.a,{className:c.avatar},Object(B.a)(e.full_name)),r.a.createElement("div",null,e.full_name,r.a.createElement(_.a,{variant:"body2",color:"textSecondary"},e.email)))),r.a.createElement(k.a,null,r.a.createElement(S.a,{color:"inherit",href:"https://codeforces.com/profile/".concat(e.handle),target:"_blank",rel:"noopener"},e.handle)),r.a.createElement(k.a,null,e.class_type),r.a.createElement(k.a,null,e.overall_score))})))))),r.a.createElement(d.a,{position:"sticky",color:"inherit",className:c.tablePagination},r.a.createElement(F.a,{component:"div",count:le.length,onChangePage:function(e,a){D(a)},onChangeRowsPerPage:function(e){z(e.target.value)},page:q,rowsPerPage:U,rowsPerPageOptions:[5,10,25,50,100]})))}q.defaultProps={customers:[]};var D=q,G=o()((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%"}}}));a.default=function(){var e=G(),a=Object(m.a)(),t=r.a.useState(null),l=Object(n.a)(t,2),c=l[0],o=l[1],E=r.a.useCallback((function(){u.a.get("https://api.cp-leaderboard.me/user/").then((function(e){a.current&&o(e.data)}))}),[a]);return r.a.useEffect((function(){E()}),[E]),c?r.a.createElement(i.a,{className:e.root,title:"Candidate List"},c&&r.a.createElement(D,{customers:c})):r.a.createElement(s.a,null)}}}]);