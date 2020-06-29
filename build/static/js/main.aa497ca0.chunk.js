(this["webpackJsonpleaderbored-ui"]=this["webpackJsonpleaderbored-ui"]||[]).push([[4],{107:function(e,t,a){"use strict";a.d(t,"c",(function(){return f})),a.d(t,"d",(function(){return x})),a.d(t,"b",(function(){return h}));var n=a(66),r=a.n(n),o=a(102),c=a(156),i=(a(91),a(82)),l=Object(c.b)({name:"login",initialState:{user:null},reducers:{loginRequest:function(e,t){e.user=null},loginSuccess:function(e,t){e.user=t.payload},loginFailure:function(e,t){},logout:function(e,t){e.user=null},silentLogin:function(e,t){e.user=t.payload},updateProfile:function(e,t){e.user=t.payload}}}),s=l.actions,p=s.loginRequest,u=s.loginSuccess,m=s.loginFailure,d=s.logout,g=s.silentLogin,f=(s.updateProfile,function(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n){var o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(p()),a.next=4,i.a.loginWithEmailAndPassword(e,t);case 4:return a.next=6,i.a.loginInWithToken();case 6:o=a.sent,n(u(o)),a.next=14;break;case 10:throw a.prev=10,a.t0=a.catch(0),n(m()),a.t0;case 14:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}),x=function(e){return function(t){t(g(e))}},h=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.a.logout(),t(d());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=l.reducer},291:function(e,t,a){"use strict";var n=a(43),r=a(0),o=a.n(r),c=a(455),i=o.a.forwardRef((function(e,t){var a=e.title,r=e.children,i=Object(n.a)(e,["title","children"]);return o.a.createElement("div",Object.assign({ref:t},i),o.a.createElement(c.a,null,o.a.createElement("title",null,a)),r)}));t.a=i},302:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(285),c=a.n(o),i=a(20),l=a.n(i),s=a(746),p=a(745),u=l()((function(e){return{root:{alignItems:"center",backgroundColor:e.palette.background.default,display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",minHeight:"100%",padding:e.spacing(3)}}}));t.a=function(){var e=u();return r.a.useEffect((function(){return c.a.start(),function(){c.a.done()}}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{width:400},r.a.createElement(p.a,null)))}},471:function(e,t,a){e.exports=a(720)},720:function(e,t,a){"use strict";a.r(t);a(472),a(481),a(664),a(665);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),i=a(202);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(38),s=a(208),p=a.n(s),u={LIGHT:"LIGHT",ONE_DARK:"ONE_DARK"};function m(e){localStorage.setItem("settings",JSON.stringify(e))}var d=r.a.createContext(),g={direction:"ltr",responsiveFontSizes:!0,theme:u.ONE_DARK};function f(e){var t=e.settings,a=e.children,n=r.a.useState(t||g),o=Object(l.a)(n,2),c=o[0],i=o[1];return r.a.useEffect((function(){document.dir=c.direction}),[c]),r.a.createElement(d.Provider,{value:{settings:c,saveSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=p.a.merge({},c,e);i(t),m(t)}}},a)}d.Consumer;var x=d,h=a(156),b=a(67),E=a(107),v=Object(b.c)({login:E.a}),y=Object(h.a)({reducer:v}),w=a(459),k=a(18),j=a(48),O=a(29),S=a(164),N=a(464),C=a(728),z=a(721),I=a(756),T=a(193),W=a(66),P=a.n(W),A=a(102),L=a(80),D=a(746),R=a(757),M=a(20),B=a.n(M);var G=function(e){return r.a.createElement("img",Object.assign({alt:"Logo",src:"/static/logo.png"},e))},_=B()((function(e){return{root:{alignItems:"center",backgroundColor:e.palette.background.default,display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",left:0,padding:e.spacing(3),position:"fixed",top:0,width:"100%",zIndex:2e3},logo:{width:200,maxWidth:"100%"}}}));var U=function(){var e=_();return r.a.createElement("div",{className:e.root},r.a.createElement(D.a,{display:"flex",justifyContent:"center",mb:6},r.a.createElement(G,{className:e.logo})),r.a.createElement(R.a,null))},F=a(82);var H=function(e){var t=e.children,a=Object(L.a)(),n=r.a.useState(!0),o=Object(l.a)(n,2),c=o[0],i=o[1];return r.a.useEffect((function(){(function(){var e=Object(A.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F.a.setAxiosInterceptors({onLogout:function(){return a(Object(E.b)())}}),F.a.handleAuthentication(),!F.a.isAuthenticated()){e.next=8;break}return e.next=5,F.a.loginInWithToken();case 5:return t=e.sent,e.next=8,a(Object(E.d)(t));case 8:i(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),c?r.a.createElement(U,null):t},J=a(218),K=a.n(J),V=a(758),$=a(220),q=a(729),Y=a(730);function X(){return r.a.useContext(x)}var Q=B()((function(e){return{root:{maxWidth:420,position:"fixed",top:0,right:0,margin:e.spacing(3),outline:"none",zIndex:2e3,padding:e.spacing(2)}}}));var Z=function(){var e=Q(),t=r.a.useState(!1),a=Object(l.a)(t,2),n=a[0],o=a[1],c=X().saveSettings;return r.a.useEffect((function(){K.a.get("settingsUpdated")||o(!0)}),[]),n?r.a.createElement(q.a,null,r.a.createElement($.a,{className:e.root,elevation:3},r.a.createElement(Y.a,{variant:"h4",color:"textPrimary",gutterBottom:!0},"Settings Updated"),r.a.createElement(Y.a,{variant:"body2",color:"textSecondary"},"We automatically updated your settings. You change the settings any time from your dashboard settings."),r.a.createElement(D.a,{mt:2,display:"flex",justifyContent:"space-between"},r.a.createElement(V.a,{onClick:function(){K.a.set("settingsUpdated","true"),o(!1)}},"Close"),r.a.createElement(V.a,{color:"secondary",variant:"contained",onClick:function(){c({theme:u.LIGHT}),K.a.set("settingsUpdated","true"),o(!1)}},"Switch")))):null};var ee=function(){var e=Object(k.h)();return r.a.useEffect((function(){window.scrollTo(0,0)}),[e.pathname]),null},te=a(219),ae=function(e){te.a.set({page:e.pathname}),te.a.pageview(e.pathname)},ne=Object(k.j)((function(e){var t=e.children,a=e.trackingId,n=e.history;return r.a.useEffect((function(){if(a)return te.a.initialize(a),ae(n.location),n.listen(ae)}),[n,a]),t})),re=a(94),oe=a(458),ce=a(782),ie={direction:"ltr",typography:{h1:{fontWeight:500,fontSize:35,letterSpacing:"-0.24px"},h2:{fontWeight:500,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:500,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:500}},overrides:{MuiLinearProgress:{root:{borderRadius:3,overflow:"hidden"}},MuiListItemIcon:{root:{minWidth:32}},MuiChip:{root:{backgroundColor:"rgba(0,0,0,0.075)"}}}},le=[{name:u.LIGHT,overrides:{MuiInputBase:{input:{"&::placeholder":{opacity:1,color:re.a.blueGrey[600]}}}},palette:{type:"light",action:{active:re.a.blueGrey[600]},background:{default:re.a.common.white,dark:"#f4f6f8",paper:re.a.common.white},primary:{main:re.a.indigo[600]},secondary:{main:"#5850EC"},text:{primary:re.a.blueGrey[900],secondary:re.a.blueGrey[600]}},shadows:["none","0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)","0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"]},{name:u.ONE_DARK,palette:{type:"dark",action:{active:"rgba(255, 255, 255, 0.54)",hover:"rgba(255, 255, 255, 0.04)",selected:"rgba(255, 255, 255, 0.08)",disabled:"rgba(255, 255, 255, 0.26)",disabledBackground:"rgba(255, 255, 255, 0.12)",focus:"rgba(255, 255, 255, 0.12)"},background:{default:"#282C34",dark:"#1c2025",paper:"#282C34"},primary:{main:"#8a85ff"},secondary:{main:"#8a85ff"},text:{primary:"#e6e5e8",secondary:"#adb0bb"}},shadows:["none","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 2px 2px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 5px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 8px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 9px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 10px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 11px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 12px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 13px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 14px 24px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 16px 28px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 18px 30px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 20px 32px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 22px 34px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 24px 36px -8px rgba(0,0,0,0.50)"]}];function se(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=le.find((function(t){return t.name===e.theme}));t||(console.warn(new Error("The theme ".concat(e.theme," is not valid"))),t=le[0]);var a=Object(oe.a)(p.a.merge({},ie,t,{direction:e.direction}));return e.responsiveFontSizes&&(a=Object(ce.a)(a)),a}var pe=a(92),ue=a(93),me=a(43),de=a(44),ge=a(449),fe=a.n(ge),xe=a(784),he=a(783),be=a(765),Ee=a(767),ve=a(781),ye=a(764),we=a(732),ke=a(766),je=a(203),Oe=a.n(je),Se=a(759),Ne=a(760),Ce=a(761),ze=a(762),Ie=a(3),Te=a(731),We=a(451),Pe=a.n(We),Ae=a(450),Le=a.n(Ae),De=B()((function(e){return{item:{display:"block",paddingTop:0,paddingBottom:0},itemLeaf:{display:"flex",paddingTop:0,paddingBottom:0},button:{color:e.palette.text.secondary,padding:"10px 8px",justifyContent:"flex-start",textTransform:"none",letterSpacing:0,width:"100%"},buttonLeaf:{color:e.palette.text.secondary,padding:"10px 8px",justifyContent:"flex-start",textTransform:"none",letterSpacing:0,width:"100%",fontWeight:e.typography.fontWeightRegular,"&.depth-0":{"& $title":{fontWeight:e.typography.fontWeightMedium}}},icon:{display:"flex",alignItems:"center",marginRight:e.spacing(1)},title:{marginRight:"auto"},active:{color:e.palette.secondary.main,"& $title":{fontWeight:e.typography.fontWeightMedium},"& $icon":{color:e.palette.secondary.main}}}}));function Re(e){var t=e.title,a=e.href,n=e.depth,o=e.children,c=e.icon,i=e.className,s=e.open,p=e.info,u=Object(me.a)(e,["title","href","depth","children","icon","className","open","info"]),m=De(),d=r.a.useState(s),g=Object(l.a)(d,2),f=g[0],x=g[1],h=8;n>0&&(h=32+8*n);var b={paddingLeft:h};return o?r.a.createElement(Te.a,Object.assign({className:Object(Ie.a)(m.item,i),disableGutters:!0,key:t},u),r.a.createElement(V.a,{className:m.button,onClick:function(){x((function(e){return!e}))},style:b},c&&r.a.createElement(c,{className:m.icon,size:"20"}),r.a.createElement("span",{className:m.title},t),f?r.a.createElement(Le.a,{size:"small",color:"inherit"}):r.a.createElement(Pe.a,{size:"small",color:"inherit"})),r.a.createElement(V.a,{in:f},o)):r.a.createElement(Te.a,Object.assign({className:Object(Ie.a)(m.itemLeaf,i),disableGutters:!0,key:t},u),r.a.createElement(V.a,{activeClassName:m.active,className:Object(Ie.a)(m.buttonLeaf,"depth-".concat(n)),component:de.b,exact:!0,style:b,to:a},c&&r.a.createElement(c,{className:m.icon,size:"20"}),r.a.createElement("span",{className:m.title},t),p&&r.a.createElement(p,{className:m.info})))}Re.defaultProps={open:!1};var Me=Re,Be=[{subheader:"Applications",items:[{title:"Leaderboard",href:"/app/leaderboard",icon:Se.a},{title:"Contest",href:"/app/contest",icon:Ne.a},{title:"Live Contest",href:"/app/livecontest",icon:Ce.a,info:function(){return r.a.createElement(he.a,{color:"secondary",size:"small",label:"Coming Soon"})}}]},{subheader:"Management",items:[{title:"Account",href:"/app/account",icon:ze.a}]}];function Ge(e){var t=e.items,a=Object(me.a)(e,["items"]);return r.a.createElement(we.a,{disablePadding:!0},t.reduce((function(e,t){return function(e){var t=e.acc,a=e.pathname,n=e.item,o=e.depth,c=void 0===o?0:o,i=n.title+c;if(n.items){var l=Object(k.f)(a,{path:n.href,exact:!1});t.push(r.a.createElement(Me,{depth:c,icon:n.icon,key:i,info:n.info,open:Boolean(l),title:n.title},Ge({depth:c+1,pathname:a,items:n.items})))}else t.push(r.a.createElement(Me,{depth:c,href:n.href,icon:n.icon,key:i,info:n.info,title:n.title}));return t}(Object(ue.a)({acc:e,item:t},a))}),[]))}var _e=B()((function(){return{mobileDrawer:{width:256},desktopDrawer:{width:256,top:64,height:"calc(100% - 64px)"},avatar:{cursor:"pointer",width:64,height:64}}}));var Ue=function(e){var t=e.openMobile,a=e.onMobileClose,n=_e(),o=Object(k.h)(),c=Object(L.b)((function(e){return e.login})).user;r.a.useEffect((function(){t&&a&&a()}),[o.pathname]);var i=r.a.createElement(D.a,{height:"100%",display:"flex",flexDirection:"column"},r.a.createElement(fe.a,{options:{suppressScrollX:!0}},r.a.createElement(ve.a,{lgUp:!0},r.a.createElement(D.a,{p:2,display:"flex",justifyContent:"center"},r.a.createElement(de.a,{to:"/"},r.a.createElement(G,null)))),r.a.createElement(D.a,{p:2},r.a.createElement(D.a,{display:"flex",justifyContent:"center"},r.a.createElement(de.a,{to:"/app/account"},r.a.createElement(xe.a,{alt:"User",className:n.avatar},r.a.createElement(Oe.a,{email:c.email})))),r.a.createElement(D.a,{mt:2,textAlign:"center"},r.a.createElement(ye.a,{component:de.a,to:"/app/account",variant:"h5",color:"textPrimary",underline:"none"},"".concat(c.full_name)),r.a.createElement(Y.a,{variant:"body2",color:"textSecondary"},c.handle))),r.a.createElement(be.a,null),r.a.createElement(D.a,{p:2},Be.map((function(e){return r.a.createElement(we.a,{key:e.subheader,subheader:r.a.createElement(ke.a,{disableGutters:!0,disableSticky:!0},e.subheader)},Ge({items:e.items,pathname:o.pathname}))})))));return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,{lgUp:!0},r.a.createElement(Ee.a,{anchor:"left",classes:{paper:n.mobileDrawer},onClose:a,open:t,variant:"temporary"},i)),r.a.createElement(ve.a,{mdDown:!0},r.a.createElement(Ee.a,{anchor:"left",classes:{paper:n.desktopDrawer},open:!0,variant:"persistent"},i)))},Fe=a(775),He=a(772),Je=a(776),Ke=a(98),Ve=a(777),$e=a(289),qe=a(452),Ye=a(769),Xe=B()((function(e){return{avatar:{height:32,width:32,marginRight:e.spacing(1)},popover:{width:200}}}));var Qe=function(){var e=Xe(),t=Object(k.g)(),a=r.a.useRef(null),n=Object(L.a)(),o=Object(L.b)((function(e){return e.login})),c=Object(S.b)().enqueueSnackbar,i=r.a.useState(!1),s=Object(l.a)(i,2),p=s[0],u=s[1],m=function(){u(!1)},d=function(){var e=Object(A.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(),e.next=4,n(Object(E.b)());case 4:t.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c("Unable to logout",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{display:"flex",alignItems:"center",component:$e.a,onClick:function(){u(!0)},ref:a},r.a.createElement(xe.a,{alt:"User",className:e.avatar},r.a.createElement(Oe.a,{email:o.user.email})),r.a.createElement(ve.a,{smDown:!0},r.a.createElement(Y.a,{variant:"h6",color:"inherit"},"".concat(o.user.full_name)))),r.a.createElement(qe.a,{onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"center"},keepMounted:!0,PaperProps:{className:e.popover},getContentAnchorEl:null,anchorEl:a.current,open:p},r.a.createElement(Ye.a,{onClick:d},"Logout")))},Ze=a(780),et=a(771),tt=a(736),at=a(774),nt=a(770),rt=a(773),ot=B()((function(e){return{badge:{height:10,width:10,borderRadius:5,marginTop:10,marginRight:5},popover:{width:320,padding:e.spacing(2)}}}));var ct=function(){var e=ot(),t=r.a.useRef(null),a=X(),n=a.settings,o=a.saveSettings,c=r.a.useState(!1),i=Object(l.a)(c,2),s=i[0],p=i[1],m=r.a.useState({theme:n.theme}),d=Object(l.a)(m,2),g=d[0],f=d[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(nt.a,{title:"Settings"},r.a.createElement(et.a,{color:"secondary",variant:"dot",classes:{badge:e.badge}},r.a.createElement(He.a,{color:"inherit",onClick:function(){p(!0)},ref:t},r.a.createElement(Ke.a,{fontSize:"small"},r.a.createElement(rt.a,null))))),r.a.createElement(tt.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},classes:{paper:e.popover},anchorEl:t.current,onClose:function(){p(!1)},open:s},r.a.createElement(Y.a,{variant:"h4",color:"textPrimary"},"Settings"),r.a.createElement(D.a,{mt:2,px:1}),r.a.createElement(D.a,{mt:2},r.a.createElement(at.a,{fullWidth:!0,label:"Theme",name:"theme",onChange:function(e){return t="theme",a=e.target.value,void f(Object(ue.a)(Object(ue.a)({},g),{},Object(pe.a)({},t,a)));var t,a},select:!0,SelectProps:{native:!0},value:g.theme,variant:"outlined"},Object.keys(u).map((function(e){return r.a.createElement("option",{key:e,value:e},Object(Ze.a)(e))})))),r.a.createElement(D.a,{mt:2},r.a.createElement(V.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:function(){o(g),p(!1)}},"Save Settings"))))},it=B()((function(e){return{root:Object(ue.a)(Object(ue.a)({zIndex:e.zIndex.drawer+100},e.name===u.LIGHT?{boxShadow:"none",backgroundColor:e.palette.primary.main}:{}),e.name===u.ONE_DARK?{backgroundColor:e.palette.background.default}:{})}}));var lt=function(e){var t=e.className,a=e.onMobileNavOpen,n=Object(me.a)(e,["className","onMobileNavOpen"]),o=it();return r.a.createElement(Fe.a,Object.assign({className:Object(Ie.a)(o.root,t)},n),r.a.createElement(Je.a,{className:o.toolbar},r.a.createElement(ve.a,{lgUp:!0},r.a.createElement(He.a,{className:o.menuButton,color:"inherit",onClick:a},r.a.createElement(Ke.a,{fontSize:"small"},r.a.createElement(Ve.a,null)))),r.a.createElement(ve.a,{mdDown:!0},r.a.createElement(de.a,{to:"/"},r.a.createElement(G,null))),r.a.createElement(D.a,{ml:2,flexGrow:1}),r.a.createElement(ct,null),r.a.createElement(D.a,{ml:2},r.a.createElement(Qe,null))))},st=B()((function(e){return{root:{backgroundColor:e.palette.background.dark,display:"flex",height:"100%",overflow:"hidden",width:"100%"},wrapper:Object(pe.a)({display:"flex",flex:"1 1 auto",overflow:"hidden",paddingTop:60},e.breakpoints.up("lg"),{paddingLeft:256}),contentContainer:{display:"flex",flex:"1 1 auto",overflow:"hidden"},content:{flex:"1 1 auto",height:"100%",overflow:"auto"}}}));var pt=function(e){var t=e.children,a=st(),n=r.a.useState(!1),o=Object(l.a)(n,2),c=o[0],i=o[1];return r.a.createElement("div",{className:a.root},r.a.createElement(lt,{onMobileNavOpen:function(){return i(!0)}}),r.a.createElement(Ue,{onMobileClose:function(){return i(!1)},openMobile:c}),r.a.createElement("div",{className:a.wrapper},r.a.createElement("div",{className:a.contentContainer},r.a.createElement("div",{className:a.content},t))))},ut=B()((function(e){return{root:{backgroundColor:e.palette.background.default},toolbar:{height:64},logo:{marginRight:e.spacing(2)},link:{fontWeight:e.typography.fontWeightMedium,"& + &":{marginLeft:e.spacing(2)}},divider:{width:1,height:32,marginLeft:e.spacing(2),marginRight:e.spacing(2)}}}));var mt=function(e){var t=e.className,a=Object(me.a)(e,["className"]),n=ut();return r.a.createElement(Fe.a,Object.assign({className:Object(Ie.a)(n.root,t),color:"default"},a),r.a.createElement(Je.a,{className:n.toolbar},r.a.createElement(de.a,{to:"/"},r.a.createElement(G,{className:n.logo})),r.a.createElement(ve.a,{mdDown:!0},r.a.createElement(Y.a,{variant:"caption",color:"textSecondary"},"Version"," ","1.0.0")),r.a.createElement(D.a,{flexGrow:1}),r.a.createElement(V.a,{className:n.link,color:"primary",component:de.a,to:"/app",variant:"contained"},"Dashboard")))},dt=B()((function(e){return{root:{backgroundColor:e.palette.background.default,display:"flex",height:"100%",overflow:"hidden",width:"100%"},wrapper:{display:"flex",flex:"1 1 auto",overflow:"hidden",paddingTop:64},contentContainer:{display:"flex",flex:"1 1 auto",overflow:"hidden"},content:{flex:"1 1 auto",height:"100%",overflow:"auto"}}}));var gt=function(e){var t=e.children,a=dt();return r.a.createElement("div",{className:a.root},r.a.createElement(mt,null),r.a.createElement("div",{className:a.wrapper},r.a.createElement("div",{className:a.contentContainer},r.a.createElement("div",{className:a.content},t))))},ft=a(291),xt=a(778),ht=a(779),bt=B()((function(e){return{root:Object(pe.a)({backgroundColor:e.palette.background.dark,paddingTop:50},e.breakpoints.down("md"),{paddingTop:60,paddingBottom:60}),image:{perspectiveOrigin:"left center",transformStyle:"preserve-3d",perspective:1500,"& > img":{maxWidth:"90%",height:"auto",transform:"rotateY(-35deg) rotateX(15deg)",backfaceVisibility:"hidden",boxShadow:e.shadows[16]}},shape:{position:"absolute",top:0,left:0,"& > img":{maxWidth:"90%",height:"auto"}}}}));var Et=function(e){var t=e.className,a=Object(me.a)(e,["className"]),n=bt();return r.a.createElement("div",Object.assign({className:Object(Ie.a)(n.root,t)},a),r.a.createElement(xt.a,{maxWidth:"lg"},r.a.createElement(ht.a,{container:!0,spacing:3},r.a.createElement(ht.a,{item:!0,xs:12,md:5},r.a.createElement(D.a,{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"},r.a.createElement(Y.a,{variant:"overline",color:"secondary"},"Introducing"),r.a.createElement(Y.a,{variant:"h1",color:"textPrimary"},"CP-Leaderboard"),r.a.createElement(D.a,{mt:3},r.a.createElement(Y.a,{variant:"h3",color:"textSecondary"},"A leaderboard for competitive programmers.")))),r.a.createElement(ht.a,{item:!0,xs:12,md:7},r.a.createElement(D.a,{position:"relative"},r.a.createElement("div",{className:n.image},r.a.createElement("img",{alt:"Presentation",src:"/static/home/undraw_visual_data_b1wx.svg"})))))))},vt=B()((function(e){return{root:{backgroundColor:e.palette.background.dark,paddingTop:128,paddingBottom:48},title:{fontWeight:e.typography.fontWeightRegular}}}));var yt=function(e){var t=e.className,a=Object(me.a)(e,["className"]),n=vt();return r.a.createElement("div",Object.assign({className:Object(Ie.a)(n.root,t)},a),r.a.createElement(xt.a,{maxWidth:"md"},r.a.createElement(Y.a,{variant:"h2",align:"center",color:"textPrimary",className:n.title},'"There are two ways to write error-free programs; only the third one works.'),r.a.createElement(D.a,{mt:6,mb:3,display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(xe.a,null),r.a.createElement(D.a,{ml:2},r.a.createElement(Y.a,{variant:"body1",color:"textPrimary"},"Alan J. Perlis",r.a.createElement(Y.a,{color:"textSecondary",display:"inline",component:"span"},", American Computer Scientist"))))),r.a.createElement(be.a,null),r.a.createElement(D.a,{mt:3,display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(D.a,{ml:2},r.a.createElement(Y.a,{variant:"h4",color:"textPrimary"},"Built by")),r.a.createElement(D.a,{ml:2},r.a.createElement(Y.a,{variant:"body1",color:"textPrimary"},"Toshal Agrawal",r.a.createElement(Y.a,{color:"textSecondary",display:"inline",component:"span"},", IT Batch 2020"))),r.a.createElement(D.a,{ml:2},r.a.createElement(Y.a,{variant:"body1",color:"textPrimary"},"Yakshit Jain",r.a.createElement(Y.a,{color:"textSecondary",display:"inline",component:"span"},", IT Batch 2020")))))},wt=B()((function(){return{root:{}}}));var kt=function(){var e=wt();return r.a.createElement(ft.a,{className:e.root,title:"Home"},r.a.createElement(Et,null),r.a.createElement(yt,null))},jt=a(302);var Ot=function(e){var t=e.children;return Object(L.b)((function(e){return e.login})).user?t:r.a.createElement(k.a,{to:"/login"})},St=[{exact:!0,path:"/",component:function(){return r.a.createElement(k.a,{to:"/app"})}},{exact:!0,path:"/404",component:r.a.lazy((function(){return a.e(3).then(a.bind(null,853))}))},{exact:!0,path:"/login",component:r.a.lazy((function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,874))}))},{exact:!0,path:"/confirm_email/:confirmationToken",component:r.a.lazy((function(){return a.e(13).then(a.bind(null,856))}))},{exact:!0,path:"/reset_password/:resetToken",component:r.a.lazy((function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,857))}))},{exact:!0,path:"/register",component:r.a.lazy((function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,875))}))},{path:"/app",guard:Ot,layout:pt,routes:[{exact:!0,path:"/app",component:function(){return r.a.createElement(k.a,{to:"/app/leaderboard"})}},{exact:!0,path:"/app/account",component:r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(10)]).then(a.bind(null,871))}))},{exact:!0,path:["/app/contest","/app/contest/:contestId"],component:r.a.lazy((function(){return Promise.all([a.e(1),a.e(2),a.e(7),a.e(8)]).then(a.bind(null,870))}))},{exact:!0,path:"/app/leaderboard",component:r.a.lazy((function(){return Promise.all([a.e(1),a.e(2),a.e(9)]).then(a.bind(null,877))}))},{exact:!0,path:"/app/livecontest",component:r.a.lazy((function(){return a.e(14).then(a.bind(null,868))}))},{exact:!0,path:"/app/errors/404",component:r.a.lazy((function(){return a.e(3).then(a.bind(null,853))}))},{exact:!0,path:"/app/welcome",component:r.a.lazy((function(){return a.e(15).then(a.bind(null,869))}))}]},{path:"*",layout:gt,routes:[{exact:!0,path:"/home",component:kt},{component:function(){return r.a.createElement(k.a,{to:"/404"})}}]}];var Nt=function(){return function e(t){return t?r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(jt.a,null)},r.a.createElement(k.d,null,t.map((function(t,a){var n=t.guard||r.a.Fragment,o=t.layout||r.a.Fragment,c=t.component;return r.a.createElement(k.b,{key:a,path:t.path,exact:t.exact,render:function(a){return r.a.createElement(n,null,r.a.createElement(o,null,t.routes?e(t.routes):r.a.createElement(c,a)))}})})))):null}(St)},Ct=Object(j.a)(),zt=Object(O.c)({plugins:Object(w.a)(Object(N.a)().plugins)}),It=Object(C.a)((function(){return Object(z.a)({"@global":{"*":{boxSizing:"border-box",margin:0,padding:0},html:{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",height:"100%",width:"100%"},body:{height:"100%",width:"100%"},"#root":{height:"100%",width:"100%"}}})}));var Tt=function(){It();var e=X().settings;return r.a.createElement(I.a,{theme:se(e)},r.a.createElement(T.b,{jss:zt},r.a.createElement(S.a,{maxSnack:1},r.a.createElement(k.c,{history:Ct},r.a.createElement(ne,{trackingId:"UA-169878160-1"},r.a.createElement(H,null,r.a.createElement(ee,null),r.a.createElement(Z,null),r.a.createElement(Nt,null)))))))},Wt=function(){var e=null;try{var t=localStorage.getItem("settings");t&&(e=JSON.parse(t))}catch(a){}return e}();c.a.render(r.a.createElement(i.a,{store:y},r.a.createElement(f,{settings:Wt},r.a.createElement(Tt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,a){"use strict";var n=a(442),r=a(443),o=a(444),c=a.n(o),i=a(91),l=new(function(){function e(){var t=this;Object(n.a)(this,e),this.setAxiosInterceptors=function(e){var a=e.onLogout;i.a.interceptors.response.use((function(e){return e}),(function(e){return e.response&&401===e.response.status&&(t.setSession(null),a&&a()),Promise.reject(e)}))},this.loginWithEmailAndPassword=function(e,a){return new Promise((function(n,r){var o=new FormData;o.append("username",e),o.append("password",a),i.a.post("https://api.cp-leaderboard.me/login/access-token",o).then((function(e){t.setSession(e.data.access_token),n(e.data.access_token)})).catch((function(e){r(e)}))}))},this.loginInWithToken=function(){return new Promise((function(e,t){i.a.get("https://api.cp-leaderboard.me/user/me").then((function(t){e(t.data)})).catch((function(e){t(e)}))}))},this.logout=function(){t.setSession(null)},this.setSession=function(e){e?(localStorage.setItem("accessToken",e),i.a.defaults.headers.common.Authorization="Bearer ".concat(e)):(localStorage.removeItem("accessToken"),delete i.a.defaults.headers.common.Authorization)},this.getAccessToken=function(){return localStorage.getItem("accessToken")},this.isValidToken=function(e){if(!e)return!1;var t=c()(e),a=Date.now()/1e3;return t.exp>a},this.isAuthenticated=function(){return!!t.getAccessToken()}}return Object(r.a)(e,[{key:"handleAuthentication",value:function(){var e=this.getAccessToken();e&&(this.isValidToken(e)?this.setSession(e):this.setSession(null))}}]),e}());t.a=l},91:function(e,t,a){"use strict";var n=a(295),r=a.n(n).a.create();t.a=r}},[[471,5,6]]]);