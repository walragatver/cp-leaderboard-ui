(this["webpackJsonpleaderbored-ui"]=this["webpackJsonpleaderbored-ui"]||[]).push([[12],{817:function(e,a,t){"use strict";var n=t(61);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),l=(0,n(t(292)).default)(r.default.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");a.default=l},874:function(e,a,t){"use strict";t.r(a);var n=t(38),r=t(0),l=t.n(r),s=t(44),i=t(18),o=t(854),c=t(779),m=t(784),u=t(758),d=t(746),p=t(778),h=t(846),f=t(855),E=t(765),b=t(764),v=t(730),g=t(20),S=t.n(g),y=t(817),x=t.n(y),N=t(291),w=t(66),B=t.n(w),k=t(103),C=t(43),O=t(165),j=t(301),q=t.n(j),_=t(3),T=t(796),P=t(797),W=t(757),z=t(466),F=t.n(z),V=t(774),L=t(744),M=S()((function(){return{buttonProgress:{color:F.a[500],position:"relative",left:"50%",marginTop:-32,marginLeft:-12}}}));function A(e){var a=e.className,t=e.onSubmitSuccess,n=Object(C.a)(e,["className","onSubmitSuccess"]),r=Object(O.b)().enqueueSnackbar,s=M();return l.a.createElement(P.a,{initialValues:{firstName:"",lastName:"",email:"",handle:"",password:"",class_type:"Other"},validationSchema:T.a().shape({firstName:T.c().max(255).required("First name is required"),lastName:T.c().max(255).required("Last name is required"),handle:T.c().max(255).required("Codeforces handle is required"),email:T.c().email("Must be a valid email").max(255).required("Email is required"),password:T.c().min(7).max(255).required("Password is required")}),onSubmit:function(){var e=Object(k.a)(B.a.mark((function e(a,n){var l,s,i,o,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=n.setErrors,s=n.setStatus,i=n.setSubmitting,o=n.resetForm,e.prev=1,e.next=4,q.a.get("https://codeforces.com/api/user.info?handles=".concat(a.handle));case 4:return e.next=6,q.a.post("https://api.cp-leaderboard.me/user/",{email:a.email,full_name:a.firstName+" "+a.lastName,handle:a.handle,class_type:a.class_type,password:a.password});case 6:o(),s({success:!0}),i(!1),r("Registered. Please check your email (Spam folder as well).",{variant:"success"}),t(),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(1),c=e.t0.response&&e.t0.response.data.detail||e.t0.response&&e.t0.response.data.comment||"Something went wrong",s({success:!1}),l({submit:c}),i(!1);case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,r=e.handleBlur,i=e.handleChange,o=e.handleSubmit,m=e.isSubmitting,p=e.touched,h=e.values;return l.a.createElement("form",Object.assign({className:Object(_.a)(s.root,a),onSubmit:o},n),l.a.createElement(c.a,{container:!0,spacing:1},l.a.createElement(c.a,{item:!0,xs:12,sm:6},l.a.createElement(V.a,{error:Boolean(p.firstName&&t.firstName),autoFocus:!0,fullWidth:!0,helperText:p.firstName&&t.firstName,label:"First Name",name:"firstName",onBlur:r,onChange:i,type:"firstName",value:h.firstName,variant:"outlined"})),l.a.createElement(c.a,{item:!0,xs:12,sm:6},l.a.createElement(V.a,{error:Boolean(p.lastName&&t.lastName),fullWidth:!0,helperText:p.lastName&&t.lastName,label:"Last Name",name:"lastName",onBlur:r,onChange:i,type:"lastName",value:h.lastName,variant:"outlined"})),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(V.a,{error:Boolean(p.email&&t.email),fullWidth:!0,helperText:p.email&&t.email,label:"Email Address",name:"email",onBlur:r,onChange:i,type:"email",value:h.email,variant:"outlined"})),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(V.a,{error:Boolean(p.password&&t.password),fullWidth:!0,helperText:p.password&&t.password,label:"Password",name:"password",onBlur:r,onChange:i,type:"password",value:h.password,variant:"outlined"})),l.a.createElement(c.a,{item:!0,xs:12,sm:6},l.a.createElement(V.a,{error:Boolean(p.handle&&t.handle),fullWidth:!0,helperText:p.handle&&t.handle,label:"Codeforces handle",name:"handle",onBlur:r,onChange:i,type:"handle",value:h.handle,variant:"outlined"})),l.a.createElement(c.a,{item:!0,xs:12,sm:6},l.a.createElement(V.a,{error:Boolean(p.class_type&&t.class_type),fullWidth:!0,helperText:p.class_type&&t.class_type,label:"Class",name:"class_type",select:!0,SelectProps:{native:!0},onBlur:r,onChange:i,type:"class_type",value:h.class_type,variant:"outlined"},l.a.createElement("option",{value:"FE"},"FE"),l.a.createElement("option",{value:"SE"},"SE"),l.a.createElement("option",{value:"TE"},"BE"),l.a.createElement("option",{value:"BE"},"TE"),l.a.createElement("option",{value:"Other"},"Other"))),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(u.a,{color:"secondary",disabled:m,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Create account")),m&&l.a.createElement(W.a,{size:32,className:s.buttonProgress}),t.submit&&l.a.createElement(d.a,{mt:3},l.a.createElement(L.a,{error:!0},t.submit))))}))}A.default={onSubmitSuccess:function(){}};var H=A,D=t(91),J=S()((function(){return{buttonProgress:{color:F.a[500],position:"relative",left:"50%",marginTop:-32,marginLeft:-12}}}));var I=function(e){var a=e.className,t=Object(C.a)(e,["className"]),n=Object(O.b)().enqueueSnackbar,r=J();return l.a.createElement(P.a,{initialValues:{email:""},validationSchema:T.a().shape({email:T.c().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=Object(k.a)(B.a.mark((function e(a,t){var r,l,s,i,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.setErrors,l=t.setStatus,s=t.setSubmitting,i=t.resetForm,e.prev=1,e.next=4,D.a.post("https://api.cp-leaderboard.me/login/resend_confirmation",{email:a.email});case 4:i(),l({success:!0}),s(!1),n("Sent. Please check your email (Spam folder as well).",{variant:"success"}),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),o=e.t0.response&&e.t0.response.data.detail||"Something went wrong",l({success:!1}),r({submit:o}),s(!1);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var n=e.errors,s=e.handleBlur,i=e.handleChange,o=e.handleSubmit,c=e.isSubmitting,m=e.touched,p=e.values;return l.a.createElement("form",Object.assign({noValidate:!0,className:Object(_.a)(r.root,a),onSubmit:o},t),l.a.createElement(V.a,{error:Boolean(m.email&&n.email),fullWidth:!0,autoFocus:!0,helperText:m.email&&n.email,label:"Email Address",margin:"normal",name:"email",onBlur:s,onChange:i,type:"email",value:p.email,variant:"outlined"}),l.a.createElement(d.a,{mt:2},l.a.createElement(u.a,{color:"secondary",disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Send Verification email"),c&&l.a.createElement(W.a,{size:32,className:r.buttonProgress}),n.submit&&l.a.createElement(d.a,{mt:3},l.a.createElement(L.a,{error:!0},n.submit))))}))},R=S()((function(e){return{root:{backgroundColor:e.palette.background.dark,display:"flex",height:"100%",minHeight:"100%",flexDirection:"column",justifyContent:"center"},content:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}}));a.default=function(){var e=R(),a=Object(i.g)(),t=l.a.useState(!1),r=Object(n.a)(t,2),g=r[0],S=r[1];return l.a.createElement(N.a,{className:e.root,title:"Login"},l.a.createElement(p.a,{component:"main",maxWidth:"xs"},l.a.createElement(h.a,{className:e.card},l.a.createElement(o.a,{avatar:l.a.createElement(u.a,{component:s.a,to:"/",variant:"outlined",color:"primary"},"Back to home")}),l.a.createElement(f.a,{className:e.content},l.a.createElement(d.a,null,l.a.createElement(m.a,{className:e.avatar},l.a.createElement(x.a,null)),l.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign up")),l.a.createElement(d.a,{mt:3},l.a.createElement(H,{onSubmitSuccess:function(){a.push("/login")}})),l.a.createElement(d.a,null,g&&l.a.createElement(I,null)),l.a.createElement(d.a,{my:2},l.a.createElement(E.a,null)),l.a.createElement(c.a,{container:!0},l.a.createElement(c.a,{item:!0,xs:!0},l.a.createElement(b.a,{onClick:function(){S((function(e){return!e}))},variant:"body2"},"Activate your account")),l.a.createElement(c.a,{item:!0},l.a.createElement(b.a,{component:s.a,to:"/login",variant:"body2"}," Already have an account? Sign in")))))))}}}]);