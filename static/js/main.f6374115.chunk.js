(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(68)},53:function(e,t,a){},54:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(21),c=a.n(o),l=a(20),i=a(19),s=a(38),u=a(18),m=a(6),p="LOGIN_FORM_INPUT_CHANGE",g="LOGIN_FORM_LOADING",h="LOGIN_FORM_ERROR",b="LOGIN_FORM_SUCCESS",d="REGISTER_FORM_INPUT_CHANGE",E="REGISTER_FORM_LOADING",v="REGISTER_FORM_ERROR",f="REGISTER_FORM_SUCCESS",y="PROJECT_REGISTER_FORM_INPUT_CHANGE",O="PROJECT_REGISTER_DATE_CHANGE",j="PROJECT_REGISTER_FORM_LOADING",N="PROJECT_REGISTER_FORM_ERROR",S="PROJECT_REGISTER_FORM_SUCCESS",C={email:"",password:"",error:"",loading:!1},R={username:"",email:"",password:"",password2:"",loading:!1,error:""},w={username:"",hobbyName:"",email:"",description:"",amount:"",endDate:null,loading:!1,error:""},I=Object(l.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(m.a)({},e,Object(u.a)({},t.name,t.value));case g:return Object(m.a)({},e,{loading:!0});case h:return Object(m.a)({},e,{error:t.error,loading:!1});case b:return Object(m.a)({},e,{email:"",password:"",loading:!1});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(m.a)({},e,Object(u.a)({},t.name,t.value));case E:return Object(m.a)({},e,{loading:!0});case v:return Object(m.a)({},e,{error:t.error,loading:!1});default:return e}},projectRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(m.a)({},e,Object(u.a)({},t.name,t.value));case O:return Object(m.a)({},e,{endDate:t.date});case j:return Object(m.a)({},e,{loading:!0});case N:return Object(m.a)({},e,{error:t.error,loading:!1});case S:return Object(m.a)({},e,{username:"",hobbyName:"",email:"",amount:"",description:"",loading:!1,error:""});default:return e}}}),_=(a(53),a(9)),k=a(10),P=a(12),F=a(11),A=a(13),T=a(4),x=a(22),L=(a(54),function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("p",null,"This is place for yours hobby projects."),r.a.createElement("p",null,"If you have account please",r.a.createElement(T.b,{className:"Link",to:"/login"}," Sing In")),r.a.createElement("p",null,"If you don't have account please",r.a.createElement(T.b,{className:"Link",to:"/register"}," Sing Up")))}),G=(a(58),function(){return r.a.createElement("div",{className:"Logo"},r.a.createElement("div",{className:"Logo-main"},"HC"),r.a.createElement("span",{className:"Logo-title"},"HobbyCraft"))}),D=(a(59),a(60),function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).state={isActive:!1},a.toggleActive=function(){return a.setState({isActive:!a.state.isActive})},a}return Object(A.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.state.isActive;return r.a.createElement("div",{className:"NavBar"},r.a.createElement(G,null),r.a.createElement("nav",{className:"Navigation"},r.a.createElement("ul",null,r.a.createElement(T.c,{exact:!0,to:"/",className:"NavBar-link",activeClassName:"active-link"},"Home"),r.a.createElement(T.c,{to:"/projects",className:"NavBar-link",activeClassName:"active-link"},"Projects"),r.a.createElement(T.c,{to:"/project-registration",className:"NavBar-link New-Project",activeClassName:"active-link"},"New Project"))),r.a.createElement("div",{className:"SignIn-links"},r.a.createElement(T.b,{className:"SignIn-link",to:"/login"},"Sign In"),r.a.createElement(T.b,{className:"SignIn-link",to:"/register"},"Sign Up")),r.a.createElement("button",{onClick:this.toggleActive,className:e?"hamburger hamburger--squeeze is-active":"hamburger hamburger--squeeze",type:"button"},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"}))),e?r.a.createElement("div",{className:"Hover"},r.a.createElement("nav",{className:"Hover--Navigation"},r.a.createElement("ul",null,r.a.createElement(T.c,{exact:!0,to:"/",className:"NavBar-link",activeClassName:"active-link",onClick:this.toggleActive},"Home"),r.a.createElement(T.c,{to:"/projects",className:"NavBar-link",activeClassName:"active-link",onClick:this.toggleActive},"Projects"),r.a.createElement(T.c,{to:"/project-registration",className:"NavBar-link New-Project",activeClassName:"active-link",onClick:this.toggleActive},"New Project"))),r.a.createElement("div",{className:"Hover--SignIn-links"},r.a.createElement(T.b,{onClick:this.toggleActive,className:"SignIn-link",to:"/login"},"Sign In"),r.a.createElement(T.b,{onClick:this.toggleActive,className:"SignIn-link",to:"/register"},"Sign Up"))):null)}}]),t}(n.Component)),M=(a(61),function(e){function t(){return Object(_.a)(this,t),Object(P.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ProjectsList"},r.a.createElement("p",null,"Projects will be soon..."),r.a.createElement("p",null,"If you have project, please"," ",r.a.createElement(T.b,{className:"Link",to:"/project-registration"},"Register")," ","yours project(hobby)."))}}]),t}(n.Component));var H=function(e,t){return function(a){if(a({type:g}),""===e.email||""===e.password)return a({type:h,error:"Please fill fields"});a(function(e){return{type:b,user:e}}(e)),console.log("Login"),console.log(e),t.push("/")}},U=(a(62),function(e){var t=e.color,a=e.h,n=void 0===a?40:a;return r.a.createElement("div",{style:{width:n+"px",height:n+"px",borderRight:"".concat(n/6,"px solid transparent"),borderLeft:"".concat(n/6,"px solid transparent"),borderTop:"".concat(n/6,"px solid ").concat(t),borderBottom:"".concat(n/6,"px solid ").concat(t)},className:"Loader ".concat(t)})}),B=(a(63),function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).onFormSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.props.login,a.props.history)},a}return Object(A.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props.login,t=e.email,a=e.password,n=e.error,o=e.loading,c=this.props.onInputChange;return r.a.createElement("div",{className:"Login"},r.a.createElement("h2",null,"Please Sign In"),n?r.a.createElement("p",{style:{color:"red",textAlign:"center"}},n):null,r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("input",{type:"email",name:"email",value:t,onChange:c,placeholder:"Please enter yours email"}),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:c,placeholder:"Please enter yours password"}),r.a.createElement("button",{type:"submit"},o?r.a.createElement(U,{color:"#fff",h:15}):"Sign In")),r.a.createElement("p",{style:{fontSize:"12px"}},"If you don't have account, please"," ",r.a.createElement(T.b,{className:"Link",to:"/register"},"Sign Up")))}}]),t}(n.Component)),J=Object(i.b)(function(e){return{login:e.login}},function(e){return{onInputChange:function(t){return e(function(e){return{type:p,name:e.target.name,value:e.target.value}}(t))},onFormSubmit:function(t,a){return e(H(t,a))}}})(B);a(64);function z(e){return{type:v,error:e}}var q=function(e,t){return function(a){return a({type:E}),""===e.username||""===e.email||""===e.password||""===e.password2?a(z("Please fill fields")):e.password!==e.password2?a(z("Passwords doesn't match")):(a(function(e){return{type:f,user:e}}(e)),console.log("Registration"),console.log(e),void t.push("/login"))}},W=function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).onFormSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.props.register,a.props.history)},a}return Object(A.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props.register,t=e.username,a=e.email,n=e.password,o=e.password2,c=e.error,l=e.loading,i=this.props.onInputChange;return r.a.createElement("div",{className:"Register"},r.a.createElement("h2",null,"Please Sign Up"),c?r.a.createElement("p",{style:{color:"red",textAlign:"center"}},c):null,r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("input",{type:"text",name:"username",placeholder:"Please enter your name",value:t,onChange:i}),r.a.createElement("input",{type:"email",name:"email",placeholder:"Please enter your email",value:a,onChange:i}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Please enter your password",value:n,onChange:i}),r.a.createElement("input",{type:"password",name:"password2",placeholder:"Please repeat your password",value:o,onChange:i}),r.a.createElement("button",{type:"submit"},l?r.a.createElement(U,{color:"#fff",h:15}):"Sign In")),r.a.createElement("p",{style:{fontSize:"12px"}},"If you don't have account, please"," ",r.a.createElement(T.b,{className:"Link",to:"/login"},"Sign In")))}}]),t}(n.Component),X=Object(i.b)(function(e){return{register:e.register}},function(e){return{onInputChange:function(t){return e(function(e){return{type:d,name:e.target.name,value:e.target.value}}(t))},onFormSubmit:function(t,a){return e(q(t,a))}}})(W),V=(a(65),a(40));a(67);var Y=function(e,t){return function(a){if(a({type:j}),""===e.username||""===e.hobbyName||""===e.email||""===e.description||""===e.amount||null===e.date)return a({type:N,error:"Please fill all fields"});a(function(e,t){return{type:S,projectInfo:e}}(e)),console.log(e),t.push("/projects")}},$=function(e){function t(){var e,a;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).onFormSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.props.projectRegister,a.props.history)},a}return Object(A.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props.projectRegister,t=e.username,a=e.hobbyName,n=e.email,o=e.description,c=e.amount,l=e.endDate,i=e.loading,s=e.error,u=this.props,m=u.onInputChange,p=u.onDateChange;return r.a.createElement("div",{className:"ProjectForm"},r.a.createElement("h2",null,"Please Register Your Hobby"),s?r.a.createElement("p",{style:{color:"red",textAlign:"center"}},s):null,r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("input",{type:"text",name:"username",value:t,onChange:m,placeholder:"Please enter your name"}),r.a.createElement("input",{type:"text",name:"hobbyName",value:a,onChange:m,placeholder:"Please enter your hobby name"}),r.a.createElement("input",{type:"email",name:"email",value:n,onChange:m,placeholder:"Please enter your email"}),r.a.createElement("textarea",{name:"description",rows:"5",value:o,onChange:m,placeholder:"Please describe yours hobby"}),r.a.createElement("input",{type:"number",name:"amount",value:c,onChange:m,placeholder:"Please enter amount for yours needs"}),r.a.createElement(V.a,{onChange:p,selected:l,placeholderText:"Select project end date",dateFormat:"yyyy MM dd",minDate:new Date}),r.a.createElement("button",{className:"form-submit",type:"submit"},i?r.a.createElement(U,{color:"#fff",h:15}):"Sign In")))}}]),t}(n.Component),K=Object(i.b)(function(e){return{projectRegister:e.projectRegister}},function(e){return{onInputChange:function(t){return e(function(e){return{type:y,name:e.target.name,value:e.target.value}}(t))},onDateChange:function(t){return e(function(e){return{type:O,date:e}}(t))},onFormSubmit:function(t,a){return e(Y(t,a))}}})($),Q=function(e){function t(){return Object(_.a)(this,t),Object(P.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{basename:"/hobby_project"},r.a.createElement(n.Fragment,null,r.a.createElement(D,null),r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/",component:L}),r.a.createElement(x.a,{path:"/projects",component:M}),r.a.createElement(x.a,{path:"/login",component:J}),r.a.createElement(x.a,{path:"/register",component:X}),r.a.createElement(x.a,{path:"/project-registration",component:K}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,ee=Object(l.e)(I,Z(Object(l.a)(s.a)));c.a.render(r.a.createElement(i.a,{store:ee},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.f6374115.chunk.js.map