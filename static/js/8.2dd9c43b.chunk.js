(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[8],{231:function(r,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"a",(function(){return a}));var n=function(r){if(!r)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},a=function(r){return function(e){if(e&&e.length>r)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(r," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}}},232:function(r,e,o){r.exports={input_successful:"ValidationForms_input_successful__1OJyI",input_error:"ValidationForms_input_error__n5M-D",text_error:"ValidationForms_text_error__1yU9Q"}},233:function(r,e,o){"use strict";o.d(e,"b",(function(){return _})),o.d(e,"a",(function(){return l}));var n=o(3);function a(r,e){if(null==r)return{};var o,n,a=function(r,e){if(null==r)return{};var o,n,a={},t=Object.keys(r);for(n=0;n<t.length;n++)o=t[n],e.indexOf(o)>=0||(a[o]=r[o]);return a}(r,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);for(n=0;n<t.length;n++)o=t[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(r,o)&&(a[o]=r[o])}return a}var t=o(1),c=(o(0),o(232)),i=o.n(c),_=function(r){var e=r.input,o=r.meta,c=a(r,["input","meta"]),_=o.touched&&o.error;return Object(t.jsxs)("div",{children:[Object(t.jsx)("textarea",Object(n.a)(Object(n.a)({className:"".concat(i.a.input_successful," ").concat(_&&i.a.input_error)},c),e)),_&&Object(t.jsxs)("div",{className:i.a.text_error,children:["\u26d4",o.error]})]})},l=function(r){var e=r.input,o=r.meta,c=a(r,["input","meta"]),_=o.touched&&o.error;return Object(t.jsxs)("div",{children:[Object(t.jsx)("input",Object(n.a)(Object(n.a)({className:"".concat(i.a.input_successful," ").concat(_&&i.a.input_error)},c),e)),_&&Object(t.jsxs)("div",{className:i.a.text_error,children:["\u26d4",o.error]})]})}},317:function(r,e,o){r.exports={login_wrapper:"Login_login_wrapper__1PtEs",login_wrapper_logo:"Login_login_wrapper_logo__3Af-N",login_wrapper_logo_text:"Login_login_wrapper_logo_text__3OOwe",login_wrapper_form:"Login_login_wrapper_form__26nw0",login_wrapper_form_top:"Login_login_wrapper_form_top__332L-",login_wrapper_form_field:"Login_login_wrapper_form_field__ZMf6m",login_wrapper_form_error:"Login_login_wrapper_form_error__3qf2t",login_wrapper_form_lbl:"Login_login_wrapper_form_lbl__1SnoT",login_wrapper_form_input:"Login_login_wrapper_form_input__sg9ws",login_wrapper_form_saveMe:"Login_login_wrapper_form_saveMe__24NZq",login_wrapper_form_saveMe_label:"Login_login_wrapper_form_saveMe_label__2TACO",login_wrapper_form_btn:"Login_login_wrapper_form_btn__17gJ7",login_wrapper_form_input_captcha:"Login_login_wrapper_form_input_captcha__3nVwo"}},323:function(r,e,o){"use strict";o.r(e);var n=o(112),a=o(26),t=o(25),c=o(1),i=(o(0),o(7)),_=o(111),l=o(233),p=o(231),s=o(317),m=o.n(s),u=o(36),b=o.n(u),f=o(79),g=function(r){return r.isAuth?Object(c.jsx)(i.a,{to:"/profile"}):Object(c.jsxs)("main",{className:"".concat(m.a.login_wrapper," ").concat(b.a.wrapper),children:[Object(c.jsxs)("figure",{className:m.a.login_wrapper_logo,children:[Object(c.jsx)("img",{src:f.a,alt:"logoImg"}),Object(c.jsx)("figcaption",{className:m.a.login_wrapper_logo_text,children:"\u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0435\u0442\u044c"})]}),Object(c.jsxs)("form",{className:"".concat(m.a.login_wrapper_form," ").concat(m.a.login_wrapper_form_top),children:[r.error&&Object(c.jsx)("aside",{className:m.a.login_wrapper_form_error,children:Object(c.jsx)("b",{children:r.error})}),Object(c.jsxs)("section",{className:m.a.login_wrapper_form_field,children:[Object(c.jsx)("label",{className:m.a.login_wrapper_form_lbl,children:Object(c.jsx)("h7",{children:Object(c.jsx)("b",{children:"\u041b\u043e\u0433\u0438\u043d: sashka.lunkin94@gmail.com"})})}),Object(c.jsx)(_.a,{className:m.a.login_wrapper_form_input,name:"emailInputForm",component:l.a,validate:[p.b],type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email...",required:!0})]}),Object(c.jsxs)("section",{className:m.a.login_wrapper_form_field,children:[Object(c.jsx)("label",{className:m.a.login_wrapper_form_lbl,children:Object(c.jsx)("h7",{children:Object(c.jsx)("b",{children:"\u041f\u0430\u0440\u043e\u043b\u044c: SocialNetworkAPI"})})}),Object(c.jsx)(_.a,{className:m.a.login_wrapper_form_input,name:"passwordInputForm",component:l.a,validate:[p.b],type:"password",autoComplete:"true",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c...",required:!0})]}),Object(c.jsxs)("section",{className:m.a.login_wrapper_form_saveMe,children:[Object(c.jsx)(_.a,{name:"checkboxInputForm",component:"input",type:"checkbox",id:"checkbox"}),Object(c.jsx)("label",{className:m.a.login_wrapper_form_saveMe_label,htmlFor:"checkbox",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]}),r.captcha&&Object(c.jsxs)("figure",{className:m.a.login_wrapper_form,children:[Object(c.jsx)("img",{src:r.captcha,alt:"captcha",width:"100"}),Object(c.jsx)(_.a,{className:m.a.login_wrapper_form_input_captcha,name:"captcha",component:"input",required:!0})]}),Object(c.jsx)("button",{className:m.a.login_wrapper_form_btn,type:"submit",onClick:r.handleSubmit((function(e){r.login(e.emailInputForm,e.passwordInputForm,e.checkboxInputForm,e.captcha)})),children:Object(c.jsx)("b",{children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})},j=o(29),d=o(30);e.default=Object(t.d)(Object(a.b)((function(r){return{isAuth:Object(d.d)(r),captcha:Object(d.c)(r)}}),{login:j.c}),Object(n.a)({form:"loginForm"}))(g)}}]);
//# sourceMappingURL=8.2dd9c43b.chunk.js.map