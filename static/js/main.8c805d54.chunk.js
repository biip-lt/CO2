(this.webpackJsonpco2=this.webpackJsonpco2||[]).push([[0],{19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(14),i=n.n(s),r=(n(19),n(6)),l=(n(20),n(27)),o=n(28),d=n(7),u=n.n(d),j=n(1);function h(e){var t=e.handleCurrentPage;return Object(j.jsx)("div",{className:u.a.mainpage,children:Object(j.jsx)(l.a,{className:"text-center",style:{backgroundColor:"rgba(255,255,255,0.7)"},children:Object(j.jsxs)(l.a.Body,{className:u.a.cardwidth,children:[Object(j.jsx)(l.a.Title,{children:"Registracijos mokes\u010dio skai\u010diuokl\u0117"}),Object(j.jsxs)("div",{className:u.a.buttonsflex,children:[Object(j.jsx)(o.a,{onClick:function(){return t("no")},variant:"success",children:"Ne\u017einau automobilio CO2"}),Object(j.jsx)(o.a,{onClick:function(){return t("yes")},variant:"success",children:"\u017dinau automobilio CO2"})]})]})})})}var b=n(26);function x(e){var t=e.handleEuroValue,n=e.knowseuro;return Object(j.jsxs)("select",{onChange:function(e){return t(e.target.value)},className:"form-select",style:{marginTop:"1rem",width:200},children:[Object(j.jsxs)("option",{value:"",children:["Pasirinkite ","yes"===n?"metus":"euro st."]}),Object(j.jsx)("option",{value:"6",children:"yes"===n?">2015 m.":"Euro 6"}),Object(j.jsx)("option",{value:"5",children:"yes"===n?"2014-2011":"Euro 5"}),Object(j.jsx)("option",{value:"4",children:"yes"===n?"2010-2006":"Euro 4-3"}),Object(j.jsx)("option",{value:"2",children:"yes"===n?"<2005 m.":"Euro 2-1"})]})}function O(e,t,n,c,a,s){return{taxes:g(k(e,t,c,a,s),n,c),c02size:k(e,t,c,a,s)}}function k(e,t,n,c,a){return isNaN(t)&&(t=0),isNaN(e)&&(e=0),a?.116*e-57.147>0?.116*e-57.147:0:"gasoline"!==n&&"gas"!==n||!c?"gasoline"!==n&&"gas"!==n||c?"diesel"===n&&c?.108*e-11.371>0?.108*e-11.371:0:"diesel"!==n||c?void 0:.116*e-6.432>0?.116*e-6.432:0:.102*e+.328*t+9.481>0?.102*e+.328*t+9.481:0:.047*e+.561*t+56.621>0?.047*e+.561*t+56.621:0}function g(e,t,n){return e*m(e)*p(t,n)>2258?2258:e*m(e)*p(t,n)}function m(e){return e<131?0:e>=131&&e<=160?1.1:e>=161&&e<=200?1.5:e>=201&&e<=250?2.2:e>=251?3:void 0}function p(e,t){if("diesel"===t){if(6===e)return 1.7;if(5===e)return 2;if(4===e||3===e)return 2.3;if(2===e||1===e)return 2.5}if("gasoline"===t){if(6===e)return.9;if(5===e)return 1;if(4===e||3===e)return 1.1;if(2===e||1===e)return 1.4}if("gas"===t){if(6===e)return.8;if(5===e)return.9;if(4===e||3===e)return 1;if(2===e||1===e)return 1.3}}function f(e){var t=e.handleCurrentPage,n=Object(c.useState)(null),a=Object(r.a)(n,2),s=a[0],i=a[1],d=Object(c.useState)(""),h=Object(r.a)(d,2),k=h[0],g=h[1],m=Object(c.useState)(""),p=Object(r.a)(m,2),f=p[0],v=p[1],y=Object(c.useState)({taxes:0,c02size:0}),C=Object(r.a)(y,2),E=C[0],N=C[1],B=Object(c.useState)(""),I=Object(r.a)(B,2),_=I[0],z=I[1],S=Object(c.useState)(""),P=Object(r.a)(S,2),D=P[0],w=P[1],T=Object(c.useState)(""),M=Object(r.a)(T,2),F=M[0],A=M[1],R=Object(c.useState)(!1),V=Object(r.a)(R,2),$=V[0],G=V[1];Object(c.useEffect)((function(){N(D&&f&&("gasoline"===s||"diesel"===s||"gas"===s)&&""!==_||$?O(parseInt(D),parseInt(F),parseInt(f),s,1==_,1==$):{taxes:0,c02size:0})}),[D,F,f,s,_,$]);var J=function(e){/^[0-9]*$/.test(e)?w(e):""===e&&w("")},L=function(e){/^[0-9]*$/.test(e)?A(e):""===e&&A("")},Q=function(e){var t=document.getElementById("Etanolis"),n=document.getElementById("Elektra"),c=document.getElementById("Dyzelinas"),a=document.getElementById("Benzinas"),r=document.getElementById("Dujos");c.checked?a.disabled=!0:a.disabled=!1,r.checked&&n.checked||t.checked||a.checked?c.disabled=!0:c.disabled=!1,n.checked||c.checked||n.checked?t.disabled=!0:t.disabled=!1,c.checked&&n.checked?r.disabled=!0:r.disabled=!1,t.checked||c.checked&&r.checked?n.disabled=!0:n.disabled=!1,n.checked?(G(!0),L(""),z("")):G(!1),c.checked?(i("diesel"),L("")):(n||a.checked)&&(t.checked||r.checked)||t.checked||r.checked?i("gas"):a.checked?i("gasoline"):i(null),null==s&&(L(""),z(""),J(""))};return Object(j.jsx)("div",{className:u.a.mainpage,children:Object(j.jsxs)(l.a,{className:"text-center",style:{backgroundColor:"rgba(255,255,255,0.7) "},children:[Object(j.jsxs)(l.a.Body,{className:u.a.cardwidth,children:[Object(j.jsx)(l.a.Title,{children:Object(j.jsx)("h2",{children:"Ne\u017einau CO2"})}),Object(j.jsx)("p",{children:"Pasirinkite kuro tip\u0105:"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:u.a.boxesalign,children:[Object(j.jsx)(b.a.Check,{inline:!0,label:"Dyzelinas",name:"group1",type:"checkbox",onChange:function(){return Q()},id:"Dyzelinas"}),Object(j.jsx)(b.a.Check,{inline:!0,label:"Benzinas",name:"group1",type:"checkbox",onChange:function(){return Q()},id:"Benzinas"}),Object(j.jsx)(b.a.Check,{inline:!0,label:"Dujos",name:"group1",type:"checkbox",onChange:function(){return Q()},id:"Dujos"}),Object(j.jsx)(b.a.Check,{inline:!0,label:"Etanolis",name:"group1",type:"checkbox",onChange:function(){return Q()},id:"Etanolis"}),Object(j.jsx)(b.a.Check,{inline:!0,label:"Elektra",name:"group1",type:"checkbox",onChange:function(){return Q()},id:"Elektra"})]}),(s||$)&&Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsxs)(b.a.Group,{className:u.a.uninputs,children:[Object(j.jsx)("input",{className:"form-control",type:"text",placeholder:"Svoris",value:D,onChange:function(e){return J(e.target.value)}}),!$&&("diesel"!==s||void 0)&&Object(j.jsx)("input",{className:"form-control",type:"text",placeholder:"kw",value:F,onChange:function(e){return L(e.target.value)}}),!$&&Object(j.jsxs)("select",{className:"form-select",onChange:function(e){return t=e.target.value,void z(t);var t},children:[Object(j.jsx)("option",{value:"",children:"Pavar\u0173 d\u0117\u017e\u0117s tipas"}),Object(j.jsx)("option",{value:1,children:"Mechanin\u0117"}),Object(j.jsx)("option",{value:0,children:"Automatin\u0117"})]})]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:"\u017dinote tikrinamos ma\u0161inos euro standart\u0105?"}),Object(j.jsxs)("div",{className:u.a.boxesaligncenter,children:[Object(j.jsxs)("select",{className:"form-select",value:k,onChange:function(e){var t;""!==(t=e.target.value)?g(t):(g(t),v(""))},children:[Object(j.jsx)("option",{value:"",children:"Pasirinkite"}),Object(j.jsx)("option",{value:"yes",children:"Ne"}),Object(j.jsx)("option",{value:"no",children:"Taip"})]}),""!==k&&Object(j.jsx)(x,{handleEuroValue:function(e){v(e)},knowseuro:k})]}),Object(j.jsx)("hr",{style:{marginTop:"10px"}}),Object(j.jsxs)("h4",{children:["CO2 kiekis: ",Math.round(E.c02size)]}),Object(j.jsx)("hr",{style:{marginTop:"20px"}}),Object(j.jsxs)("h4",{children:["Registravimo mokestis: ",Math.round(E.taxes)]}),Object(j.jsxs)("h4",{children:["Metinis mokestis: ",Math.round(E.taxes/4)]})]}),Object(j.jsx)(o.a,{onClick:function(){return t("")},variant:"success",children:"Atgal"})]})})}function v(e){var t=e.handleCurrentPage,n=Object(c.useState)(null),a=Object(r.a)(n,2),s=a[0],i=a[1],d=Object(c.useState)(""),h=Object(r.a)(d,2),O=h[0],k=h[1],m=Object(c.useState)(""),p=Object(r.a)(m,2),f=p[0],v=p[1],y=Object(c.useState)(""),C=Object(r.a)(y,2),E=C[0],N=C[1],B=Object(c.useState)(0),I=Object(r.a)(B,2),_=I[0],z=I[1];Object(c.useEffect)((function(){z(E&&f&&s?function(e,t,n){return g(e,t,n)}(parseInt(E),parseInt(f),s):0)}),[E,f,s]);var S=function(e){var t=document.getElementById("Dyzelinas"),n=document.getElementById("Benzinas"),c=document.getElementById("Dujos"),a=document.getElementById("Etanolis"),s=document.getElementById("Elektra");t.checked?n.disabled=!0:n.disabled=!1,c.checked&&s.checked||a.checked||n.checked?t.disabled=!0:t.disabled=!1,s.checked||t.checked||s.checked?a.disabled=!0:a.disabled=!1,t.checked&&s.checked?c.disabled=!0:c.disabled=!1,a.checked||t.checked&&c.checked?s.disabled=!0:s.disabled=!1,t.checked?i("diesel"):(s||n.checked)&&(a.checked||c.checked)||a.checked||c.checked?i("gas"):n.checked?i("gasoline"):i(null)};return Object(j.jsx)("div",{className:u.a.mainpage,children:Object(j.jsxs)(l.a,{className:"text-center",style:{backgroundColor:"rgba(255,255,255,0.7) "},children:[Object(j.jsxs)(l.a.Body,{className:u.a.cardwidth,children:[Object(j.jsx)(l.a.Title,{children:Object(j.jsx)("h2",{children:"\u017dinau CO2"})}),Object(j.jsx)("p",{children:"Pasirinkite kuro tip\u0105:"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:u.a.boxesalign,children:[Object(j.jsx)(b.a.Check,{inline:!0,label:"Dyzelinas",name:"group1",type:"checkbox",onChange:function(){return S()},id:"Dyzelinas"}),Object(j.jsx)(b.a.Check,{inline:!0,label:"Benzinas",name:"group1",type:"checkbox",onChange:function(){return S()},id:"Benzinas"}),Object(j.jsx)(b.a.Check,{inline:!0,label:"Dujos",name:"group1",type:"checkbox",onChange:function(){return S()},id:"Dujos"}),Object(j.jsx)(b.a.Check,{inline:!0,label:"Etanolis",name:"group1",type:"checkbox",onChange:function(){return S()},id:"Etanolis"}),Object(j.jsx)(b.a.Check,{inline:!0,label:"Elektra",name:"group1",type:"checkbox",onChange:function(){return S()},id:"Elektra"})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:"\u017dinote tikrinamos ma\u0161inos euro standart\u0105?"}),Object(j.jsxs)("div",{className:u.a.boxesaligncenter,children:[Object(j.jsxs)("select",{className:"form-select",value:O,onChange:function(e){var t;""!==(t=e.target.value)?k(t):(k(t),v(""))},children:[Object(j.jsx)("option",{value:"",children:"Pasirinkite"}),Object(j.jsx)("option",{value:"yes",children:"Ne"}),Object(j.jsx)("option",{value:"no",children:"Taip"})]}),""!==O&&Object(j.jsx)(x,{handleEuroValue:function(e){v(e)},knowseuro:O})]}),Object(j.jsx)(b.a.Group,{style:{margin:"30px auto"},className:"mb-3",children:Object(j.jsx)("input",{className:"form-control",type:"text",placeholder:"CO2 i\u0161metimo kiekis",value:E,onChange:function(e){return t=e.target.value,void(/^[0-9]*$/.test(t)?N(t):""===t&&N(""));var t}})}),Object(j.jsx)("hr",{style:{marginTop:"40px"}}),Object(j.jsxs)("h4",{children:["Registravimo mokestis: ",Math.round(_)]}),Object(j.jsxs)("h4",{children:["Metinis mokestis: ",Math.round(_/4)]})]}),Object(j.jsx)(o.a,{onClick:function(){return t("")},variant:"success",children:"Atgal"})]})})}var y=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=function(e){a(e)};return Object(j.jsxs)("div",{children:[""===n&&Object(j.jsx)(h,{handleCurrentPage:s}),"yes"===n&&Object(j.jsx)(v,{handleCurrentPage:s}),"no"===n&&Object(j.jsx)(f,{handleCurrentPage:s})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),C()},7:function(e,t,n){e.exports={buttonsflex:"all_buttonsflex__1FpoI",cardwidth:"all_cardwidth__1PUEI",mainpage:"all_mainpage__4mQl-",boxesalign:"all_boxesalign__jzu1r",boxesaligncenter:"all_boxesaligncenter__hiCZh",uninputs:"all_uninputs__2WccF"}}},[[25,1,2]]]);
//# sourceMappingURL=main.8c805d54.chunk.js.map