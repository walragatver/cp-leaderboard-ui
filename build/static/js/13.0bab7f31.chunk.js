(this["webpackJsonpleaderbored-ui"]=this["webpackJsonpleaderbored-ui"]||[]).push([[13],{788:function(e,t,a){"use strict";var n=a(62);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){0;return(0,i.useTheme)()||o.default};var i=a(63),o=(n(a(0)),n(a(467)))},856:function(e,t,a){"use strict";a.r(t);var n=a(38),i=a(0),o=a.n(i),r=a(295),c=a.n(r),l=a(746),d=a(778),m=a(730),s=a(788),u=a.n(s),f=a(733),g=a(20),p=a.n(g),h=a(758),b=a(302),E=a(18),v=a(44),x=a(291),y=p()((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",display:"flex",alignItems:"center",padding:e.spacing(3),paddingTop:80,paddingBottom:80},image:{maxWidth:"100%",width:560,maxHeight:300,height:"auto"}}}));t.default=function(){var e=y(),t=u()(),a=Object(i.useState)(""),r=Object(n.a)(a,2),s=r[0],g=r[1],p=Object(f.a)(t.breakpoints.down("sm")),j=Object(E.i)().confirmationToken;return o.a.useEffect((function(){c.a.get("https://api.cp-leaderboard.me/login/confirm_email/".concat(j)).then((function(e){console.log(),g("Email Verified")})).catch((function(e){g("Email couldn't be verified")}))}),[j]),s?o.a.createElement(x.a,{className:e.root,title:"Email Verification"},o.a.createElement(d.a,{maxWidth:"lg"},o.a.createElement(m.a,{align:"center",variant:p?"h4":"h1",color:"textPrimary"},s),o.a.createElement(l.a,{mt:6,display:"flex",justifyContent:"center"},o.a.createElement("img",{alt:"Under development",className:e.image,src:"/static/images/undraw_confirmed_81ex.svg"})),o.a.createElement(l.a,{mt:6,display:"flex",justifyContent:"center"},o.a.createElement(h.a,{color:"secondary",component:v.a,to:"/login",variant:"outlined"},"Go to Login")))):o.a.createElement(b.a,null)}}}]);