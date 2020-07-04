(this["webpackJsonpleaderbored-ui"]=this["webpackJsonpleaderbored-ui"]||[]).push([[12],{851:function(e,a,t){"use strict";var r=t(1),n=t(4),s=t(0),o=(t(2),t(3)),l=t(6),i=t(786),c=s.forwardRef((function(e,a){var t=e.action,l=e.avatar,c=e.classes,d=e.className,m=e.component,p=void 0===m?"div":m,u=e.disableTypography,h=void 0!==u&&u,b=e.subheader,f=e.subheaderTypographyProps,g=e.title,w=e.titleTypographyProps,v=Object(n.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),y=g;null==y||y.type===i.a||h||(y=s.createElement(i.a,Object(r.a)({variant:l?"body2":"h5",className:c.title,component:"span",display:"block"},w),y));var E=b;return null==E||E.type===i.a||h||(E=s.createElement(i.a,Object(r.a)({variant:l?"body2":"body1",className:c.subheader,color:"textSecondary",component:"span",display:"block"},f),E)),s.createElement(p,Object(r.a)({className:Object(o.a)(c.root,d),ref:a},v),l&&s.createElement("div",{className:c.avatar},l),s.createElement("div",{className:c.content},y,E),t&&s.createElement("div",{className:c.action},t))}));a.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(c)},863:function(e,a,t){"use strict";t.r(a);var r=t(36),n=t.n(r),s=t(70),o=t(0),l=t.n(o),i=t(354),c=t.n(i),d=t(803),m=t(835),p=t(15),u=t.n(p),h=t(130),b=t(211),f=t(106),g=t(815),w=t(836),v=t(837),y=t(851),E=t(823),x=t(801),C=t(838),j=t(831),k=t(19),N=t(47),P=t(352),S=u()((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",padding:e.spacing(3)},image:{maxWidth:"100%",width:560,maxHeight:300,height:"auto"}}}));a.default=function(){var e=S(),a=Object(k.i)().resetToken,t=Object(f.b)().enqueueSnackbar;return l.a.createElement(P.a,{className:e.root,title:"Password Reset"},l.a.createElement(m.a,{maxWidth:"lg"},l.a.createElement(d.a,{mt:6,display:"flex",justifyContent:"center"},l.a.createElement("img",{alt:"Under development",className:e.image,src:"/static/images/undraw_authentication_fsn5.svg"})),l.a.createElement(d.a,{mt:3},l.a.createElement(b.a,{initialValues:{password:"",passwordConfirm:""},validationSchema:h.a().shape({password:h.c().min(7,"Must be at least 7 characters").max(255).required("Required"),passwordConfirm:h.c().oneOf([h.b("password"),null],"Passwords must match").required("Required")}),onSubmit:function(){var e=Object(s.a)(n.a.mark((function e(r,s){var o,l,i,d,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=s.resetForm,l=s.setErrors,i=s.setStatus,d=s.setSubmitting,e.prev=1,e.next=4,c.a.post("https://api.cp-leaderboard.me/login/reset_password/".concat(a),{password:r.password});case 4:o(),i({success:!0}),d(!1),t("Password updated",{variant:"success"}),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),m=e.t0.response&&e.t0.response.data.detail||"Something went wrong",i({success:!1}),l({submit:m}),d(!1);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(a){var t=a.errors,r=a.handleBlur,n=a.handleChange,s=a.handleSubmit,o=a.isSubmitting,i=a.touched,c=a.values;return l.a.createElement("form",{onSubmit:s},l.a.createElement(w.a,{className:e.root},l.a.createElement(y.a,{title:"Change Password"}),l.a.createElement(E.a,null),l.a.createElement(v.a,null,l.a.createElement(C.a,{container:!0,spacing:3},l.a.createElement(C.a,{item:!0,md:4,sm:6,xs:12},l.a.createElement(j.a,{error:Boolean(i.password&&t.password),fullWidth:!0,helperText:i.password&&t.password,label:"Password",name:"password",onBlur:r,onChange:n,type:"password",value:c.password,variant:"outlined"})),l.a.createElement(C.a,{item:!0,md:4,sm:6,xs:12},l.a.createElement(j.a,{error:Boolean(i.passwordConfirm&&t.passwordConfirm),fullWidth:!0,helperText:i.passwordConfirm&&t.passwordConfirm,label:"Password Confirmation",name:"passwordConfirm",onBlur:r,onChange:n,type:"password",value:c.passwordConfirm,variant:"outlined"}))),t.submit&&l.a.createElement(d.a,{mt:3},l.a.createElement(x.a,{error:!0},t.submit))),l.a.createElement(E.a,null),l.a.createElement(d.a,{p:2,display:"flex",justifyContent:"flex-end"},l.a.createElement(g.a,{color:"secondary",disabled:o,type:"submit",variant:"contained"},"Change Password"))))}))),l.a.createElement(d.a,{mt:2,display:"flex",justifyContent:"center"},l.a.createElement(g.a,{color:"secondary",component:N.a,to:"/login",variant:"outlined"},"Go to Login"))))}}}]);