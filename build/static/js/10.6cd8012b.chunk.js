(this["webpackJsonpleaderbored-ui"]=this["webpackJsonpleaderbored-ui"]||[]).push([[10],{847:function(e,a,t){"use strict";var r=t(61);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),l=(0,r(t(292)).default)(n.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=l},870:function(e,a,t){"use strict";t.r(a);var r=t(38),n=t(0),l=t.n(n),o=t(728),s=t(778),c=t(746),i=t(871),m=t(858),u=t(765),d=t(291),p=t(43),b=t(44),f=t(3),g=t(875),h=t(764),v=t(730),E=t(847),w=t.n(E),x=Object(o.a)((function(){return{root:{}}}));var j=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=x();return l.a.createElement("div",Object.assign({className:Object(f.a)(r.root,a)},t),l.a.createElement(g.a,{separator:l.a.createElement(w.a,{fontSize:"small"}),"aria-label":"breadcrumb"},l.a.createElement(h.a,{color:"inherit",to:"/app",component:b.a},"Dashboard"),l.a.createElement(v.a,{color:"textPrimary"},"Account")),l.a.createElement(v.a,{variant:"h3",color:"textPrimary"},"Settings"))},O=t(80),y=t(779),C=t(784),N=t(846),S=t(855),k=t(20),B=t.n(k),P=t(203),R=t.n(P),T=B()((function(e){return{root:{},name:{marginTop:e.spacing(1)},avatar:{height:100,width:100}}}));var q=function(e){var a=e.user,t=e.className,r=Object(p.a)(e,["user","className"]),n=T();return l.a.createElement(N.a,Object.assign({className:Object(f.a)(n.root,t)},r),l.a.createElement(S.a,null,l.a.createElement(c.a,{display:"flex",alignItems:"center",flexDirection:"column",textAlign:"center"},l.a.createElement(C.a,{className:n.avatar},l.a.createElement(R.a,{email:a.email})),l.a.createElement(h.a,{color:"inherit",href:"https://codeforces.com/profile/".concat(a.handle),target:"_blank",rel:"noopener"},l.a.createElement(v.a,{className:n.name,gutterBottom:!0,variant:"h3",color:"textPrimary"},"".concat(a.full_name))),l.a.createElement(v.a,{color:"textSecondary",variant:"h1"},a.overall_score))))},z=Object(o.a)((function(){return{root:{}}}));var M=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=z(),n=Object(O.b)((function(e){return e.login})).user;return l.a.createElement(y.a,Object.assign({className:Object(f.a)(r.root,a),container:!0,spacing:3},t),l.a.createElement(y.a,{item:!0,lg:4,md:6,xl:3,xs:12},l.a.createElement(q,{user:n})))},A=t(66),_=t.n(A),I=t(103),L=t(91),W=t(796),D=t(797),H=t(165),J=t(758),V=t(854),F=t(744),G=t(774),K=B()((function(){return{root:{}}}));var Q=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=K(),n=Object(H.b)().enqueueSnackbar;return l.a.createElement(D.a,{initialValues:{password:"",passwordConfirm:""},validationSchema:W.a().shape({password:W.c().min(7,"Must be at least 7 characters").max(255).required("Required"),passwordConfirm:W.c().oneOf([W.b("password"),null],"Passwords must match").required("Required")}),onSubmit:function(){var e=Object(I.a)(_.a.mark((function e(a,t){var r,l,o,s,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.resetForm,l=t.setErrors,o=t.setStatus,s=t.setSubmitting,e.prev=1,e.next=4,L.a.put("https://api.cp-leaderboard.me/user/me",{password:a.password});case 4:r(),o({success:!0}),s(!1),n("Password updated",{variant:"success"}),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),c=e.t0.response&&e.t0.response.data.detail||"Something went wrong",o({success:!1}),l({submit:c}),s(!1);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var n=e.errors,o=e.handleBlur,s=e.handleChange,i=e.handleSubmit,m=e.isSubmitting,d=e.touched,p=e.values;return l.a.createElement("form",{onSubmit:i},l.a.createElement(N.a,Object.assign({className:Object(f.a)(r.root,a)},t),l.a.createElement(V.a,{title:"Change Password"}),l.a.createElement(u.a,null),l.a.createElement(S.a,null,l.a.createElement(y.a,{container:!0,spacing:3},l.a.createElement(y.a,{item:!0,md:4,sm:6,xs:12},l.a.createElement(G.a,{error:Boolean(d.password&&n.password),fullWidth:!0,helperText:d.password&&n.password,label:"Password",name:"password",onBlur:o,onChange:s,type:"password",value:p.password,variant:"outlined"})),l.a.createElement(y.a,{item:!0,md:4,sm:6,xs:12},l.a.createElement(G.a,{error:Boolean(d.passwordConfirm&&n.passwordConfirm),fullWidth:!0,helperText:d.passwordConfirm&&n.passwordConfirm,label:"Password Confirmation",name:"passwordConfirm",onBlur:o,onChange:s,type:"password",value:p.passwordConfirm,variant:"outlined"}))),n.submit&&l.a.createElement(c.a,{mt:3},l.a.createElement(F.a,{error:!0},n.submit))),l.a.createElement(u.a,null),l.a.createElement(c.a,{p:2,display:"flex",justifyContent:"flex-end"},l.a.createElement(J.a,{color:"secondary",disabled:m,type:"submit",variant:"contained"},"Change Password"))))}))},U=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=U(),a=Object(n.useState)("general"),t=Object(r.a)(a,2),o=t[0],p=t[1];return l.a.createElement(d.a,{className:e.root,title:"Settings"},l.a.createElement(s.a,{maxWidth:"lg"},l.a.createElement(j,null),l.a.createElement(c.a,{mt:3},l.a.createElement(i.a,{onChange:function(e,a){p(a)},scrollButtons:"auto",value:o,variant:"scrollable",textColor:"secondary",className:e.tabs},[{value:"general",label:"General"},{value:"security",label:"Security"}].map((function(e){return l.a.createElement(m.a,{key:e.value,label:e.label,value:e.value})})))),l.a.createElement(u.a,null),l.a.createElement(c.a,{mt:3},"general"===o&&l.a.createElement(M,null),"security"===o&&l.a.createElement(Q,null))))}},875:function(e,a,t){"use strict";var r=t(1),n=t(76),l=t(4),o=t(0),s=(t(74),t(2),t(3)),c=t(6),i=t(730),m=t(12),u=t(112),d=Object(u.a)(o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=t(289);var b=Object(c.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(l.a)(e,["classes"]);return o.createElement(p.a,Object(r.a)({component:"li",className:a.root,focusRipple:!0},t),o.createElement(d,{className:a.icon}))}));var f=o.forwardRef((function(e,a){var t=e.children,c=e.classes,m=e.className,u=e.component,d=void 0===u?"nav":u,p=e.expandText,f=void 0===p?"Show path":p,g=e.itemsAfterCollapse,h=void 0===g?1:g,v=e.itemsBeforeCollapse,E=void 0===v?1:v,w=e.maxItems,x=void 0===w?8:w,j=e.separator,O=void 0===j?"/":j,y=Object(l.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=o.useState(!1),N=C[0],S=C[1],k=o.Children.toArray(t).filter((function(e){return o.isValidElement(e)})).map((function(e,a){return o.createElement("li",{className:c.li,key:"child-".concat(a)},e)}));return o.createElement(i.a,Object(r.a)({ref:a,component:d,color:"textSecondary",className:Object(s.a)(c.root,m)},y),o.createElement("ol",{className:c.ol},function(e,a,t){return e.reduce((function(r,n,l){return l<e.length-1?r=r.concat(n,o.createElement("li",{"aria-hidden":!0,key:"separator-".concat(l),className:a},t)):r.push(n),r}),[])}(N||x&&k.length<=x?k:function(e){return E+h>=e.length?e:[].concat(Object(n.a)(e.slice(0,E)),[o.createElement(b,{"aria-label":f,key:"ellipsis",onClick:function(e){S(!0);var a=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");a&&a.focus()}})],Object(n.a)(e.slice(e.length-h,e.length)))}(k),c.separator,O)))}));a.a=Object(c.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)}}]);