(this["webpackJsonpleaderbored-ui"]=this["webpackJsonpleaderbored-ui"]||[]).push([[10],{851:function(e,a,t){"use strict";var r=t(1),n=t(4),l=t(0),s=(t(2),t(3)),i=t(6),o=t(786),c=l.forwardRef((function(e,a){var t=e.action,i=e.avatar,c=e.classes,m=e.className,u=e.component,d=void 0===u?"div":u,p=e.disableTypography,h=void 0!==p&&p,b=e.subheader,f=e.subheaderTypographyProps,E=e.title,v=e.titleTypographyProps,g=Object(n.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),y=E;null==y||y.type===o.a||h||(y=l.createElement(o.a,Object(r.a)({variant:i?"body2":"h5",className:c.title,component:"span",display:"block"},v),y));var N=b;return null==N||N.type===o.a||h||(N=l.createElement(o.a,Object(r.a)({variant:i?"body2":"body1",className:c.subheader,color:"textSecondary",component:"span",display:"block"},f),N)),l.createElement(d,Object(r.a)({className:Object(s.a)(c.root,m),ref:a},g),i&&l.createElement("div",{className:c.avatar},i),l.createElement("div",{className:c.content},y,N),t&&l.createElement("div",{className:c.action},t))}));a.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(c)},881:function(e,a,t){"use strict";t.r(a);var r=t(35),n=t(0),l=t.n(n),s=t(47),i=t(19),o=t(851),c=t(838),m=t(845),u=t(815),d=t(803),p=t(835),h=t(836),b=t(837),f=t(823),E=t(822),v=t(786),g=t(15),y=t.n(g),N=t(499),x=t.n(N),S=t(352),w=t(36),O=t.n(w),j=t(70),B=t(30),k=t(106),C=t(354),T=t.n(C),q=t(3),P=t(130),_=t(211),W=t(814),F=t(183),L=t.n(F),z=t(831),A=t(801),R=y()((function(){return{buttonProgress:{color:L.a[500],position:"relative",left:"50%",marginTop:-32,marginLeft:-12}}}));function V(e){var a=e.className,t=e.onSubmitSuccess,r=Object(B.a)(e,["className","onSubmitSuccess"]),n=Object(k.b)().enqueueSnackbar,s=R();return l.a.createElement(_.a,{initialValues:{firstName:"",lastName:"",email:"",handle:"",password:"",class_type:"Other"},validationSchema:P.a().shape({firstName:P.c().max(255).required("First name is required"),lastName:P.c().max(255).required("Last name is required"),handle:P.c().max(255).required("Codeforces handle is required"),email:P.c().email("Must be a valid email").max(255).required("Email is required"),password:P.c().min(7).max(255).required("Password is required")}),onSubmit:function(){var e=Object(j.a)(O.a.mark((function e(a,r){var l,s,i,o,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=r.setErrors,s=r.setStatus,i=r.setSubmitting,o=r.resetForm,e.prev=1,e.next=4,T.a.get("https://codeforces.com/api/user.info?handles=".concat(a.handle));case 4:return e.next=6,T.a.post("https://api.cp-leaderboard.me/user/",{email:a.email,full_name:a.firstName+" "+a.lastName,handle:a.handle,class_type:a.class_type,password:a.password});case 6:o(),s({success:!0}),i(!1),n("Registered. Please check your email (Spam folder as well).",{variant:"success"}),t(),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(1),c=e.t0.response&&e.t0.response.data.detail||e.t0.response&&e.t0.response.data.comment||"Something went wrong",s({success:!1}),l({submit:c}),i(!1);case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,n=e.handleBlur,i=e.handleChange,o=e.handleSubmit,m=e.isSubmitting,p=e.touched,h=e.values;return l.a.createElement("form",Object.assign({className:Object(q.a)(s.root,a),onSubmit:o},r),l.a.createElement(c.a,{container:!0,spacing:1},l.a.createElement(c.a,{item:!0,xs:12,sm:6},l.a.createElement(z.a,{error:Boolean(p.firstName&&t.firstName),autoFocus:!0,fullWidth:!0,helperText:p.firstName&&t.firstName,label:"First Name",name:"firstName",onBlur:n,onChange:i,type:"firstName",value:h.firstName,variant:"outlined"})),l.a.createElement(c.a,{item:!0,xs:12,sm:6},l.a.createElement(z.a,{error:Boolean(p.lastName&&t.lastName),fullWidth:!0,helperText:p.lastName&&t.lastName,label:"Last Name",name:"lastName",onBlur:n,onChange:i,type:"lastName",value:h.lastName,variant:"outlined"})),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(z.a,{error:Boolean(p.email&&t.email),fullWidth:!0,helperText:p.email&&t.email,label:"Email Address",name:"email",onBlur:n,onChange:i,type:"email",value:h.email,variant:"outlined"})),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(z.a,{error:Boolean(p.password&&t.password),fullWidth:!0,helperText:p.password&&t.password,label:"Password",name:"password",onBlur:n,onChange:i,type:"password",value:h.password,variant:"outlined"})),l.a.createElement(c.a,{item:!0,xs:12,sm:6},l.a.createElement(z.a,{error:Boolean(p.handle&&t.handle),fullWidth:!0,helperText:p.handle&&t.handle,label:"Codeforces handle",name:"handle",onBlur:n,onChange:i,type:"handle",value:h.handle,variant:"outlined"})),l.a.createElement(c.a,{item:!0,xs:12,sm:6},l.a.createElement(z.a,{error:Boolean(p.class_type&&t.class_type),fullWidth:!0,helperText:p.class_type&&t.class_type,label:"Class",name:"class_type",select:!0,SelectProps:{native:!0},onBlur:n,onChange:i,type:"class_type",value:h.class_type,variant:"outlined"},l.a.createElement("option",{value:"FE"},"FE"),l.a.createElement("option",{value:"SE"},"SE"),l.a.createElement("option",{value:"TE"},"TE"),l.a.createElement("option",{value:"BE"},"BE"),l.a.createElement("option",{value:"Other"},"Other"))),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(u.a,{color:"secondary",disabled:m,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Create account")),m&&l.a.createElement(W.a,{size:32,className:s.buttonProgress}),t.submit&&l.a.createElement(d.a,{mt:3},l.a.createElement(A.a,{error:!0},t.submit))))}))}V.default={onSubmitSuccess:function(){}};var M=V,D=t(88),H=y()((function(){return{buttonProgress:{color:L.a[500],position:"relative",left:"50%",marginTop:-32,marginLeft:-12}}}));var I=function(e){var a=e.className,t=Object(B.a)(e,["className"]),r=Object(k.b)().enqueueSnackbar,n=H();return l.a.createElement(_.a,{initialValues:{email:""},validationSchema:P.a().shape({email:P.c().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=Object(j.a)(O.a.mark((function e(a,t){var n,l,s,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setErrors,l=t.setStatus,s=t.setSubmitting,i=t.resetForm,e.prev=1,e.next=4,D.a.post("https://api.cp-leaderboard.me/login/resend_confirmation",{email:a.email});case 4:i(),l({success:!0}),s(!1),r("Sent. Please check your email (Spam folder as well).",{variant:"success"}),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),o=e.t0.response&&e.t0.response.data.detail||"Something went wrong",l({success:!1}),n({submit:o}),s(!1);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var r=e.errors,s=e.handleBlur,i=e.handleChange,o=e.handleSubmit,c=e.isSubmitting,m=e.touched,p=e.values;return l.a.createElement("form",Object.assign({noValidate:!0,className:Object(q.a)(n.root,a),onSubmit:o},t),l.a.createElement(z.a,{error:Boolean(m.email&&r.email),fullWidth:!0,autoFocus:!0,helperText:m.email&&r.email,label:"Email Address",margin:"normal",name:"email",onBlur:s,onChange:i,type:"email",value:p.email,variant:"outlined"}),l.a.createElement(d.a,{mt:2},l.a.createElement(u.a,{color:"secondary",disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Send Verification email"),c&&l.a.createElement(W.a,{size:32,className:n.buttonProgress}),r.submit&&l.a.createElement(d.a,{mt:3},l.a.createElement(A.a,{error:!0},r.submit))))}))},J=y()((function(e){return{root:{backgroundColor:e.palette.background.dark,display:"flex",height:"100%",minHeight:"100%",flexDirection:"column",justifyContent:"center"},content:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}}));a.default=function(){var e=J(),a=Object(i.g)(),t=l.a.useState(!1),n=Object(r.a)(t,2),g=n[0],y=n[1];return l.a.createElement(S.a,{className:e.root,title:"Login"},l.a.createElement(p.a,{component:"main",maxWidth:"xs"},l.a.createElement(h.a,{className:e.card},l.a.createElement(o.a,{avatar:l.a.createElement(u.a,{component:s.a,to:"/home",variant:"outlined",color:"primary"},"Back to home")}),l.a.createElement(b.a,{className:e.content},l.a.createElement(d.a,null,l.a.createElement(m.a,{className:e.avatar},l.a.createElement(x.a,null)),l.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign up")),l.a.createElement(d.a,{mt:3},l.a.createElement(M,{onSubmitSuccess:function(){a.push("/home")}})),l.a.createElement(d.a,null,g&&l.a.createElement(I,null)),l.a.createElement(d.a,{my:1},l.a.createElement(f.a,null)),l.a.createElement(c.a,{container:!0},l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(E.a,{onClick:function(){y((function(e){return!e}))},variant:"body2"},"Activate your account")),l.a.createElement(d.a,{my:1}),l.a.createElement(c.a,{item:!0},l.a.createElement(E.a,{component:s.a,to:"/login",variant:"body2"}," Already have an account? Sign in")))))))}}}]);