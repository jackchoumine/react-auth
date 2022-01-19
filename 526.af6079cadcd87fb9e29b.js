"use strict";(self.webpackChunkauth=self.webpackChunkauth||[]).push([[526],{6526:(e,t,n)=>{n.r(t),n.d(t,{mount:()=>L});var a=n(6407),r=n.n(a),l=n(6579),i=n.n(l),o=n(71),c=n(334),m=n(8577),u=n(2195),s=n(9713),p=n.n(s),d=n(3038),g=n.n(d),h=n(3901),E=n(282),f=n(9559),b=n(553),v=n(2880),y=n(1749),Z=n(9956),w=n(2267),S=n(2318),k=n(1120),x=n(3832);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=e.onSignIn,n=P(),l=(0,a.useState)({email:"",password:""}),i=g()(l,2),o=i[0],m=i[1];return r().createElement(x.Z,{component:"main",maxWidth:"xs"},r().createElement("div",{className:n.paper},r().createElement("p",null,r().createElement("a",{href:"https://jackchoumine.github.io/react-container/"},"集成后的页面"),r().createElement("br",null),r().createElement("a",{href:"https://jackchoumine.github.io/react-marketing/"},"marketing-react 微应用"),r().createElement("br",null),r().createElement("a",{href:"https://jackchoumine.github.io/vue3-dashboard/"},"vue3-dashboard 微应用"),r().createElement("br",null),r().createElement("a",{href:"https://jackchoumine.github.io/react-auth/"},"react-auth 微应用]"),r().createElement("br",null),r().createElement("hr",null)),r().createElement(h.Z,{className:n.avatar},r().createElement(w.Z,null)),r().createElement(S.Z,{component:"h1",variant:"h5"},"Sign in"),r().createElement("form",{onSubmit:function(e){return e.preventDefault()},className:n.form,noValidate:!0},r().createElement(f.Z,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return m(N(N({},o),{},{email:e.target.value}))}}),r().createElement(f.Z,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return m(N(N({},o),{},{password:e.target.value}))}}),r().createElement(b.Z,{control:r().createElement(v.Z,{value:"remember",color:"primary"}),label:"Remember me"}),r().createElement(E.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.submit,onClick:function(){return t(o)}},"Sign In"),r().createElement(y.Z,{container:!0},r().createElement(y.Z,{item:!0},r().createElement(c.Link,{to:"/auth/signup"},"Don't have an account? Sign Up"))))),r().createElement(Z.Z,{mt:8},r().createElement(j,null)))}var P=(0,k.Z)((function(e){return{"@global":{a:{textDecoration:"none"}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function j(){return r().createElement(S.Z,{variant:"body2",color:"textSecondary",align:"center"},"Copyright © ",r().createElement(c.Link,{color:"inherit",to:"/"},"Your Website")," ",(new Date).getFullYear(),".")}function D(e){var t=e.onSignIn,n=W();return r().createElement(x.Z,{component:"main",maxWidth:"xs"},r().createElement("div",{className:n.paper},r().createElement(h.Z,{className:n.avatar},r().createElement(w.Z,null)),r().createElement(S.Z,{component:"h1",variant:"h5"},"Sign up"),r().createElement("form",{onSubmit:function(e){return e.preventDefault()},className:n.form,noValidate:!0},r().createElement(y.Z,{container:!0,spacing:2},r().createElement(y.Z,{item:!0,xs:12,sm:6},r().createElement(f.Z,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r().createElement(y.Z,{item:!0,xs:12,sm:6},r().createElement(f.Z,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r().createElement(y.Z,{item:!0,xs:12},r().createElement(f.Z,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r().createElement(y.Z,{item:!0,xs:12},r().createElement(f.Z,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})),r().createElement(y.Z,{item:!0,xs:12},r().createElement(b.Z,{control:r().createElement(v.Z,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r().createElement(E.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.submit,onClick:t},"Sign Up"),r().createElement(y.Z,{container:!0,justify:"flex-end"},r().createElement(y.Z,{item:!0},r().createElement(c.Link,{to:"/auth/signin"},"Already have an account? Sign in"))))),r().createElement(Z.Z,{mt:5},r().createElement(I,null)))}function I(){return r().createElement(S.Z,{variant:"body2",color:"textSecondary",align:"center"},"Copyright © ",r().createElement(c.Link,{to:"/"},"Your Website")," ",(new Date).getFullYear(),".")}var W=(0,k.Z)((function(e){return{"@global":{a:{textDecoration:"none"}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),q=(0,m.Z)({productionPrefix:"au"});const F=function(e){var t=e.history,n=e.onSignIn;return r().createElement("div",null,r().createElement(u.ZP,{generateClassName:q},r().createElement(c.Router,{history:t},r().createElement(c.Switch,null,r().createElement(c.Route,{path:"/"},r().createElement(O,{onSignIn:n})),r().createElement(c.Route,{path:"/auth/signup"},r().createElement(D,{onSignIn:n}))))))};var L=function(e,t){var n=t.onSignIn,a=t.onChildNavigate,l=t.defaultHistory,c=t.currentPathParent,m=l||(0,o.PP)({initialEntries:[c]}),u=m.location.pathname;return c&&c!==u&&(console.log("child history.push",c),m.push(c)),a&&m.listen(a),i().render(r().createElement(F,{onSignIn:n,history:m}),e),{onParentNavigate:function(e){var t=e.pathname,n=m.location.pathname;t&&n!==t&&m.push(t)}}},R=document.getElementById("_auth-dev-root");console.log(R);var T=(0,o.lX)();R&&L(R,{defaultHistory:T,onSignIn:function(e){console.log("sign in",e)}})}}]);