(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,i,t){},23:function(e,i,t){},24:function(e,i,t){},31:function(e,i,t){},32:function(e,i,t){},33:function(e,i,t){},34:function(e,i,t){"use strict";t.r(i);var a=t(1),s=t(16),r=t.n(s),n=t(8),o=(t(22),t(6)),c=(t(23),t(2)),l=(t(24),t(0));var u=function(e){var i=function(){e.onLinkClick(1)};return Object(l.jsxs)("div",{className:"homepage",children:[Object(l.jsx)("h2",{className:"welcome",children:"Welcome"}),Object(l.jsx)("p",{className:"instructions",children:"Select where you want to send your form"}),Object(l.jsx)("div",{className:"formlinks",children:[{name:"XYZ Warszawa, Poland",id:"xyz"},{name:"ABC Krak\xf3w, Poland",id:"abc"},{name:"RNQ Berlin, Germany",id:"rnq"}].map((function(e){return Object(l.jsx)(n.b,{to:"/form/"+e.id,onClick:i,className:"formlink",children:e.name},e.id)}))})]})};t(31);var m=function(){var e=Object(c.g)(),i=Object(c.f)(),t=Object(a.useState)(),s=Object(o.a)(t,2),r=s[0],n=s[1],u=Object(a.useState)(""),m=Object(o.a)(u,2),d=m[0],b=m[1],j=Object(a.useState)(""),p=Object(o.a)(j,2),h=p[0],O=p[1],x=Object(a.useState)(!1),f=Object(o.a)(x,2),g=f[0],k=f[1],v=Object(a.useState)(!1),y=Object(o.a)(v,2),q=y[0],N=y[1],w=Object(a.useState)(!0),S=Object(o.a)(w,2),z=S[0],L=S[1],P=Object(a.useState)(!1),R=Object(o.a)(P,2),C=R[0],B=R[1],F=Object(a.useState)(!1),T=Object(o.a)(F,2),E=T[0],I=T[1],D=Object(a.useState)(!1),A=Object(o.a)(D,2),J=A[0],W=A[1];return Object(a.useEffect)((function(){n('Shank chuck boudin buffalo, venison bacon picanha.  Frankfurter cow ham hock sirloin.  Porchetta ground round pork, rump tenderloin jowl pork belly t-bone short ribs corned beef pig.  Tail sausage pancetta, jerky landjaeger cow brisket pork belly.","Shank alcatra kielbasa, flank boudin pig porchetta salami pancetta meatloaf brisket strip steak pork loin.  Andouille prosciutto spare ribs flank ball tip chicken sausage chislic beef ribs picanha filet mignon pork loin corned beef salami.  Turkey kielbasa meatloaf, sausage pastrami chicken doner bresaola brisket pork chop buffalo filet mignon t-bone spare ribs.  Leberkas jerky short ribs biltong, pork loin bacon turducken pastrami ball tip brisket venison beef ribs boudin.  Landjaeger boudin beef ribs tenderloin kielbasa ball tip.  Corned beef short ribs pig buffalo ground round beef shankle salami.  Shoulder spare ribs chuck, pork chop brisket pork landjaeger sirloin corned beef salami bresaola.')}),[]),"xyz"===e.code||"abc"===e.code||"rnq"===e.code?Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"dataForm",onSubmit:function(e){e.preventDefault(),g&&q&&z&&(console.log("submitted:","\n",d,"\n",h,"\n",r),i.push("/summary"))},children:[Object(l.jsx)("label",{htmlFor:"daneOsobowe",children:"Imie i Nazwisko:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",value:d,onChange:function(e){b(e.target.value.trim()),""!==e.target.value.trim()&&e.target.value.trim().includes(" ")?k(!0):k(!1)},onBlur:function(){B(!0)},id:"daneOsobowe"}),Object(l.jsx)("br",{}),!g&&C&&Object(l.jsx)("p",{className:"error",children:"Input musi zawiera\u0107 Imi\u0119 i Nazwisko"}),Object(l.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"email",value:h,onChange:function(e){console.log("touching mail"),O(e.target.value.trim());var i=e.target.value.trim();""!==e.target.value.trim()&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)?N(!0):N(!1)},onBlur:function(){I(!0)},id:"email"}),Object(l.jsx)("br",{}),!q&&E&&Object(l.jsx)("p",{className:"error",children:"Email nie mo\u017ce by\u0107 pusty"}),Object(l.jsx)("label",{htmlFor:"zgloszenie",children:"Tre\u015b\u0107 Zg\u0142oszenia:"}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{id:"zgloszenie",maxLength:"5000",value:r,onChange:function(e){n(e.target.value.trim()),""!==e.target.value.trim()?L(!0):L(!1)},onBlur:function(){W(!0)}}),Object(l.jsx)("br",{}),!z&&J&&Object(l.jsx)("p",{className:"error",children:"Tre\u015b\u0107 zg\u0142oszenia nie mo\u017ce by\u0107 pusta"}),Object(l.jsx)("button",{type:"submit",children:'"Send"'})]})}):(i.push("/home"),null)};t(32);var d=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h3",{children:"1. Lorem ipsum"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, assumenda corrupti? Ratione architecto dolore maxime inventore, sed quisquam ipsam repudiandae qui similique eligendi, illum, doloribus amet possimus pariatur praesentium dignissimos!"}),Object(l.jsx)("h3",{children:"2. Dolor sit"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, assumenda corrupti? Ratione architecto dolore maxime inventore, sed quisquam ipsam repudiandae qui similique eligendi, illum, doloribus amet possimus pariatur praesentium dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, assumenda corrupti? Ratione architecto dolore maxime inventore, sed quisquam ipsam repudiandae qui similique eligendi, illum, doloribus amet possimus pariatur praesentium dignissimos!"}),Object(l.jsx)("h3",{children:"3. Dolore maxime"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, assumenda corrupti? Ratione architecto dolore maxime inventore, sed quisquam ipsam repudiandae qui similique eligendi, illum, doloribus amet possimus pariatur praesentium dignissimos!"}),Object(l.jsx)("h3",{children:"4. Ratione architecto"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, assumenda corrupti? Ratione architecto dolore maxime inventore, sed quisquam ipsam repudiandae qui similique eligendi, illum, doloribus amet possimus pariatur praesentium dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, assumenda corrupti? Ratione architecto dolore maxime inventore, sed quisquam ipsam repudiandae qui similique eligendi, illum, doloribus amet possimus pariatur praesentium dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, assumenda corrupti? Ratione architecto dolore maxime inventore, sed quisquam ipsam repudiandae qui similique eligendi, illum, doloribus amet possimus pariatur praesentium dignissimos!"})]})})};t(33);var b=function(){return Object(l.jsxs)("div",{className:"summary",children:[Object(l.jsx)("h2",{className:"thanks",children:"Thank you"}),Object(l.jsx)("p",{className:"subText",children:'Your Form has been processed and was "sent" to selected department'})]})};var j=function(){var e=Object(a.useState)(0),i=Object(o.a)(e,2),t=i[0],s=i[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("nav",{className:"navigation",children:Object(l.jsxs)("ul",{className:"links",children:[Object(l.jsx)(n.c,{to:"/home",className:"navlink",activeStyle:{color:"yellow"},children:"Home"}),Object(l.jsx)(n.c,{to:"/privacy",className:"navlink",activeStyle:{color:"yellow"},children:"Privacy policy"})]})}),Object(l.jsx)(c.b,{path:"/",exact:!0,children:Object(l.jsx)(c.a,{to:"/home"})}),Object(l.jsx)(c.b,{path:"/home",exact:!0,children:Object(l.jsx)(u,{onLinkClick:s})}),Object(l.jsx)(c.b,{path:"/form",exact:!0,children:Object(l.jsx)(c.a,{to:"/home"})}),Object(l.jsx)(c.b,{path:"/form/:code",children:1===t?Object(l.jsx)(m,{clicked:t}):Object(l.jsx)(c.a,{to:"/home"})}),Object(l.jsx)(c.b,{path:"/privacy",children:Object(l.jsx)(d,{})}),Object(l.jsx)(c.b,{path:"/summary",children:Object(l.jsx)(b,{})})]})};r.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.ca9f357b.chunk.js.map