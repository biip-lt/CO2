(this.webpackJsonpco2=this.webpackJsonpco2||[]).push([[0],{19:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(14),i=c.n(a),r=(c(19),c(7)),l=(c(20),c(27)),o=c(28),u=c(6),d=c.n(u),j=c(1);function b(e){var t=e.handleCurrentPage;return Object(j.jsx)("div",{className:d.a.mainpage,children:Object(j.jsx)(l.a,{className:"text-center",style:{backgroundColor:"rgba(255,255,255,0.7)"},children:Object(j.jsxs)(l.a.Body,{className:d.a.cardwidth,children:[Object(j.jsx)(l.a.Title,{children:"Transporto priemon\u0117s tar\u0161os mokes\u010dio skai\u010diuokl\u0117"}),Object(j.jsxs)("div",{className:d.a.buttonsflex,children:[Object(j.jsx)(o.a,{onClick:function(){return t("yes")},variant:"success",children:"\u017dinau automobilio CO2"}),Object(j.jsx)(o.a,{onClick:function(){return t("no")},variant:"success",children:"Ne\u017einau automobilio CO2"})]})]})})})}var h=c(26);function x(e){var t=e.calculateEuro,c=e.knowsEuro;return Object(j.jsxs)("select",{onChange:function(e){return t(e.target.value)},className:"form-select",style:{marginTop:"1rem"},children:["no"===c&&Object(j.jsx)("option",{value:"show",children:"metus"}),"yes"===c&&Object(j.jsx)("option",{value:"",children:"Pasirinkite euro st."}),Object(j.jsx)("option",{value:"6",children:"no"===c?"2015 ar naujesni gamybos metai":"Euro 6"}),Object(j.jsx)("option",{value:"5",children:"no"===c?"2014-2011":"Euro 5"}),Object(j.jsx)("option",{value:"4",children:"no"===c?"2010-2006":"Euro 4-3"}),Object(j.jsx)("option",{value:"2",children:"no"===c?"2005 ar senesni gamybos metai":"Euro 2-1"}),"yes"===c&&Object(j.jsx)("option",{value:"show",children:"Ne\u017einau"})]})}var f,O="diesel",k="gas",m="gasoline";function g(e,t,c,n,s){f=v(p(e,t,n,s),c,n);var a=p(e,t,n,s);return{taxes:f,c02size:a}}function p(e,t,c,n){return isNaN(t)&&(t=0),isNaN(e)&&(e=0),c.isElectric?.116*e-57.147>0?.116*e-57.147:0:c.fuel!==m&&c.fuel!==k||!n?c.fuel!==m&&c.fuel!==k||n?c.fuel===O&&n?.108*e-11.371>0?.108*e-11.371:0:c.fuel!==O||n?0:.116*e-6.432>0?.116*e-6.432:0:.102*e+.328*t+9.481>0?.102*e+.328*t+9.481:0:.047*e+.561*t+56.621>0?.047*e+.561*t+56.621:0}function v(e,t,c){return{registrationCost:e*C(e).registrationCoeff*y(t,c)>2258?2258:e*C(e).registrationCoeff*y(t,c),yearsCost:e*C(e).yearsCoeff*y(t,c)>564?564:e*C(e).yearsCoeff*y(t,c)}}function C(e){return e<131?{registrationCoeff:0,yearsCoeff:0}:e>=131&&e<=160?{registrationCoeff:1.1,yearsCoeff:.28}:e>=161&&e<=200?{registrationCoeff:1.5,yearsCoeff:.38}:e>=201&&e<=250?{registrationCoeff:2.2,yearsCoeff:.55}:e>=251?{registrationCoeff:3,yearsCoeff:.75}:0}function y(e,t){if(t.fuel===O){if(6===e)return 1.7;if(5===e)return 2;if(4===e||3===e)return 2.3;if(2===e||1===e)return 2.5}if(t.fuel===m){if(6===e)return.9;if(5===e)return 1;if(4===e||3===e)return 1.1;if(2===e||1===e)return 1.4}if(t.fuel===k){if(6===e)return.8;if(5===e)return.9;if(4===e||3===e)return 1;if(2===e||1===e)return 1.3}return 0}function E(e){var t=e.handleFuelType;return Object(j.jsxs)("div",{className:d.a.boxesalign,children:[Object(j.jsx)(h.a.Check,{inline:!0,label:"Dyzelinas",type:"checkbox",onChange:function(){return t()},id:"Dyzelinas"}),Object(j.jsx)(h.a.Check,{inline:!0,label:"Benzinas",type:"checkbox",onChange:function(){return t()},id:"Benzinas"}),Object(j.jsx)(h.a.Check,{inline:!0,label:"Dujos",type:"checkbox",onChange:function(){return t()},id:"Dujos"}),Object(j.jsx)(h.a.Check,{inline:!0,label:"Etanolis",type:"checkbox",onChange:function(){return t()},id:"Etanolis"}),Object(j.jsx)(h.a.Check,{inline:!0,label:"Elektra",type:"checkbox",onChange:function(){return t()},id:"Elektra"})]})}function N(e){var t=e.setManual;return Object(j.jsxs)("select",{className:"form-select",onChange:function(e){return t(e.target.value)},children:[Object(j.jsx)("option",{value:"",children:"Pavar\u0173 d\u0117\u017e\u0117s tipas"}),Object(j.jsx)("option",{value:1,children:"Mechanin\u0117"}),Object(j.jsx)("option",{value:0,children:"Automatin\u0117"})]})}function _(e){var t=e.handleCurrentPage,c="diesel",s="gas",a="gasoline",i=Object(n.useState)({fuel:null,isElectric:!1}),u=Object(r.a)(i,2),b=u[0],f=u[1],O=Object(n.useState)(""),k=Object(r.a)(O,2),m=k[0],p=k[1],v=Object(n.useState)(""),C=Object(r.a)(v,2),y=C[0],_=C[1],P=Object(n.useState)({taxes:0,c02size:0}),B=Object(r.a)(P,2),I=B[0],w=B[1],S=Object(n.useState)(""),F=Object(r.a)(S,2),T=F[0],z=F[1],M=Object(n.useState)(""),D=Object(r.a)(M,2),A=D[0],L=D[1],Y=Object(n.useState)(""),G=Object(r.a)(Y,2),J=G[0],R=G[1],$=/^[0-9]*$/;Object(n.useEffect)((function(){A&&y&&""!==T||A&&y&&b.isElectric?w(g(parseInt(A),parseInt(J),parseInt(y),b,Boolean(parseInt(T)))):w({taxes:0,c02size:0})}),[A,J,y,b,T]);var Q=function(e){$.test(e)?L(e):""===e&&L("")},U=function(e){$.test(e)?R(e):""===e&&R("")},V=function(e){""!==e?(console.log(e),p(e)):(p(e),_(""))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:d.a.mainpage,children:Object(j.jsxs)(l.a,{className:"text-center",style:{backgroundColor:"rgba(255,255,255,0.7) "},children:[Object(j.jsxs)(l.a.Body,{className:d.a.cardwidth,children:[Object(j.jsx)(l.a.Title,{children:Object(j.jsxs)("h2",{children:["Tar\u0161os mokes\u010dio skai\u010diuokl\u0117 ne\u017einant CO",Object(j.jsx)("sub",{children:"2"})]})}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:"Pasirinkite kuro r\u016b\u0161is:"}),Object(j.jsx)(E,{handleFuelType:function(){var e=document.getElementById("Etanolis"),t=document.getElementById("Elektra"),n=document.getElementById("Dyzelinas"),i=document.getElementById("Benzinas"),r=document.getElementById("Dujos");n.checked?i.disabled=!0:i.disabled=!1,r.checked&&t.checked||e.checked||i.checked?n.disabled=!0:n.disabled=!1,t.checked||n.checked||t.checked?e.disabled=!0:e.disabled=!1,n.checked&&t.checked?r.disabled=!0:r.disabled=!1,e.checked||n.checked&&r.checked?t.disabled=!0:t.disabled=!1,n.checked?t.checked?(f({fuel:c,isElectric:!0}),U(""),z("")):(f({fuel:c,isElectric:!1}),U("")):(t.checked||i.checked)&&(e.checked||r.checked)||e.checked||r.checked?t.checked?(f({fuel:s,isElectric:!0}),U(""),z("")):f({fuel:s,isElectric:!1}):i.checked?t.checked?(f({fuel:a,isElectric:!0}),U(""),z("")):f({fuel:a,isElectric:!1}):f({fuel:null,isElectric:!1}),b==={fuel:null,isElectric:!1}&&(U(""),z(""),Q(""))}}),null!==b.fuel&&Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsxs)(h.a.Group,{className:d.a.carSpecalign,children:[Object(j.jsx)("input",{className:"form-control",type:"text",placeholder:"Nurodykite automobilio svor\u012f, kg",value:A,onChange:function(e){return Q(e.target.value)}}),!b.isElectric&&b.fuel!==c&&Object(j.jsx)("input",{className:"form-control",type:"text",placeholder:"Automobilio variklio galia, kW",value:J,onChange:function(e){return U(e.target.value)}}),!b.isElectric&&Object(j.jsx)(N,{setManual:z})]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:"Pasirinkite ma\u0161inos euro standart\u0105"}),Object(j.jsxs)("div",{className:d.a.inputsaligncenter,children:[Object(j.jsx)(x,{calculateEuro:function(e){"show"===e?(V("no"),_("")):(_(e),"no"===m&&V("yes"))},knowsEuro:"yes"}),"no"===m&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:d.a.askingYears,children:"Pasirinkite ma\u0161inos pagaminimo metus"}),Object(j.jsx)(x,{calculateEuro:function(e){_("show"===e?"":e)},knowsEuro:m})]})]}),Object(j.jsx)("hr",{style:{marginTop:"10px"}}),Object(j.jsxs)("h4",{children:["CO",Object(j.jsx)("sub",{children:"2"})," kiekis: ",(Math.round(100*I.c02size)/100).toFixed(2)]}),Object(j.jsx)("hr",{style:{marginTop:"20px"}}),Object(j.jsxs)("h4",{children:["Registravimo mokestis: ",0===I.taxes?0:(Math.round(100*I.taxes.registrationCost)/100).toFixed(2)]}),Object(j.jsxs)("h4",{children:["Metinis mokestis: ",0===I.taxes?0:(Math.round(100*I.taxes.yearsCost)/100).toFixed(2)]})]}),Object(j.jsx)(o.a,{onClick:function(){return t("")},variant:"success",children:"Atgal"})]})}),Object(j.jsx)("div",{className:"bottomPadding",children:" \u200e"})]})}function P(e){var t=e.handleCurrentPage,c="diesel",s="gas",a="gasoline",i=Object(n.useState)({fuel:null}),u=Object(r.a)(i,2),b=u[0],O=u[1],k=Object(n.useState)(""),m=Object(r.a)(k,2),g=m[0],p=m[1],C=Object(n.useState)(""),y=Object(r.a)(C,2),N=y[0],_=y[1],P=Object(n.useState)(""),B=Object(r.a)(P,2),I=B[0],w=B[1],S=Object(n.useState)({taxes:0}),F=Object(r.a)(S,2),T=F[0],z=F[1];Object(n.useEffect)((function(){z(I&&N&&b?function(e,t,c){return{taxes:f=v(e,t,c)}}(parseInt(I),parseInt(N),b):{taxes:0})}),[I,N,b]);var M=function(e){""!==e?p(e):(p(e),_(""))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:d.a.mainpage,children:Object(j.jsxs)(l.a,{className:"text-center",style:{backgroundColor:"rgba(255,255,255,0.7) "},children:[Object(j.jsxs)(l.a.Body,{className:d.a.cardwidth,children:[Object(j.jsx)(l.a.Title,{children:Object(j.jsxs)("h2",{children:["Tar\u0161os moke\u010dio skai\u010diuokl\u0117 \u017einant CO",Object(j.jsx)("sub",{children:"2"})]})}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:"Pasirinkite kuro r\u016b\u0161is :"}),Object(j.jsx)(E,{handleFuelType:function(){var e=document.getElementById("Dyzelinas"),t=document.getElementById("Benzinas"),n=document.getElementById("Dujos"),i=document.getElementById("Etanolis"),r=document.getElementById("Elektra");e.checked?t.disabled=!0:t.disabled=!1,n.checked&&r.checked||i.checked||t.checked?e.disabled=!0:e.disabled=!1,r.checked||e.checked||r.checked?i.disabled=!0:i.disabled=!1,e.checked&&r.checked?n.disabled=!0:n.disabled=!1,i.checked||e.checked&&n.checked?r.disabled=!0:r.disabled=!1,e.checked?O({fuel:c}):(r||t.checked)&&(i.checked||n.checked)||i.checked||n.checked?O({fuel:s}):t.checked?O({fuel:a}):O({fuel:null})}}),Object(j.jsx)("hr",{}),Object(j.jsxs)("p",{children:["Pasirinkite Euro standart\u0105 ir  \u012fveskite CO",Object(j.jsx)("sub",{children:"2"})]}),Object(j.jsxs)("div",{className:d.a.inputsaligncenter,children:[Object(j.jsx)(x,{calculateEuro:function(e){"show"===e?(M("no"),_("")):(_(e),"no"===g&&M("yes"))},knowsEuro:"yes"}),"no"===g&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:d.a.askingYears,children:"Pasirinkite ma\u0161inos pagaminimo metus"}),Object(j.jsx)(x,{calculateEuro:function(e){_("show"===e?"":e)},knowsEuro:g})]})]}),Object(j.jsx)(h.a.Group,{className:d.a.inputsaligncenter,children:Object(j.jsx)("input",{className:"form-control",type:"text",placeholder:"CO2 i\u0161metimo kiekis",value:I,onChange:function(e){return t=e.target.value,void(/^[0-9]*$/.test(t)?w(t):""===t&&w(""));var t}})}),Object(j.jsx)("hr",{style:{marginTop:"40px"}}),Object(j.jsxs)("h4",{children:["Registravimo mokestis: ",0===T.taxes?0:(Math.round(100*T.taxes.registrationCost)/100).toFixed(2)]}),Object(j.jsxs)("h4",{children:["Metinis mokestis: ",0===T.taxes?0:(Math.round(100*T.taxes.yearsCost)/100).toFixed(2)]})]}),Object(j.jsx)(o.a,{onClick:function(){return t("")},variant:"success",children:"Atgal"})]})}),Object(j.jsx)("div",{className:"bottomPadding",children:" \u200e"})]})}var B=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(j.jsxs)(j.Fragment,{children:[""===c&&Object(j.jsx)(b,{handleCurrentPage:s}),"yes"===c&&Object(j.jsx)(P,{handleCurrentPage:s}),"no"===c&&Object(j.jsx)(_,{handleCurrentPage:s})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),I()},6:function(e,t,c){e.exports={buttonsflex:"all_buttonsflex__1FpoI",cardwidth:"all_cardwidth__1PUEI",mainpage:"all_mainpage__4mQl-",boxesalign:"all_boxesalign__jzu1r",inputsaligncenter:"all_inputsaligncenter__sPA7V",carSpecalign:"all_carSpecalign__3m8vn",bottomPadding:"all_bottomPadding__2mpoL",askingYears:"all_askingYears__3Ljkm",description:"all_description__3powF"}}},[[25,1,2]]]);
//# sourceMappingURL=main.7183d69e.chunk.js.map