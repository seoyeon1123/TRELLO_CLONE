(this.webpackJsonpprac_trello=this.webpackJsonpprac_trello||[]).push([[0],{60:function(e,n,t){"use strict";t.r(n);var o=t(5),r=t(0),c=t.n(r),a=t(21),i=t.n(a),l=t(11);const s={bgColor:"#F1E5D1",boardColor:"#254336",cardColor:"#FEFEDF",textColor:"#254336",boardtextColor:"white",deleteBtn:"white",toggle:"#F1E5D1",trash:"#254336"},d={bgColor:"#254336",boardColor:"#F1E5D1",cardColor:"#6B8A7A",textColor:"#F1E5D1",boardtextColor:"black",deleteBtn:"#254336",toggle:"#254336",trash:"#F1E5D1"};var b=t(4);const p=Object(l.b)({key:"toDoState",default:{}}),j=Object(l.b)({key:"isDark",default:!0});var x=t(22),g=t(8),h=t(29),u=t(15),O=t(18);const m=0===Object(h.b)().length?Object(h.c)({apiKey:"AIzaSyCfyu4kxlka9GUMHFd57w-NUqh-3__O2xk",authDomain:"fir-login-ceae0.firebaseapp.com",projectId:"fir-login-ceae0",storageBucket:"fir-login-ceae0.appspot.com",messagingSenderId:"146389013194",appId:"1:146389013194:web:0a51c6ee32ec52120c1a33",measurementId:"G-B3RY3H6YJZ"}):Object(h.a)(),f=Object(O.c)(m),y=Object(u.c)(m),w=new u.a,v=async(e,n)=>{try{const t=Object(O.a)(f,"users",e);await Object(O.d)(t,{todos:n}),console.log("Todos saved to Firestore")}catch(t){throw console.error("Error saving todos to Firestore:",t),t}},C=async e=>{try{const t=Object(O.a)(f,"users",e),o=await Object(O.b)(t);var n;return console.log(o),o.exists()?(null===(n=o.data())||void 0===n?void 0:n.todos)||{}:(console.log("No such document!"),{})}catch(t){throw console.error("Error loading todos from Firestore:",t),t}};var k,D,S,z,I,E,T,R,F,_,q,B=t.p+"static/media/google_icon.9db27c10.png",L=t(2);const U=b.c.div(k||(k=Object(o.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: ",";\n  width: 450px;\n  height: 450px;\n  color: ",";\n  border-radius: 20px;\n"])),(e=>e.theme.boardColor),(e=>e.theme.boardtextColor)),P=b.c.h1(D||(D=Object(o.a)(["\n  margin-top: 20px;\n  font-size: 30px;\n"]))),A=b.c.strong(S||(S=Object(o.a)(["\n  font-size: 80px;\n"]))),H=b.c.form(z||(z=Object(o.a)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"]))),G=b.c.input(I||(I=Object(o.a)(["\n  font-size: 17px;\n  padding: 5px;\n  width: 270px;\n  background-color: white;\n  margin-bottom: 5px;\n  border-radius: 10px;\n  font-family: 'Ownglyph_ryurue-Rg';\n\n  &:focus {\n    outline: none;\n  }\n\n  &::placeholder {\n    font-family: 'Ownglyph_ryurue-Rg';\n  }\n"]))),M=b.c.button(E||(E=Object(o.a)(["\n  margin-top: 10px;\n  font-size: 18px;\n  width: auto;\n  height: 40px;\n  background-color: ",";\n  border-radius: 10px;\n  &:active {\n    font-size: 15px;\n  }\n  font-family: 'Ownglyph_ryurue-Rg';\n"])),(e=>e.theme.bgColor)),J=Object(b.c)(M)(T||(T=Object(o.a)(["\n  margin-top: 5px;\n  font-size: 15px;\n  padding: 5px 50px;\n  border-radius: 10px;\n  display: flex;\n  background-color: white;\n  align-items: center;\n"]))),N=b.c.img(R||(R=Object(o.a)(["\n  width: 30px;\n  margin-right: 10px;\n"]))),V=b.c.hr(F||(F=Object(o.a)(["\n  width: 80%;\n  margin: 10px 0;\n  border: none;\n  border-top: 1px solid ",";\n"])),(e=>e.theme.boardtextColor)),Y=b.c.p(_||(_=Object(o.a)(["\n  margin-top: 40px;\n  margin-bottom: 10px;\n  font-size: 20px;\n"]))),K=b.c.span(q||(q=Object(o.a)(["\n  color: #ffc700;\n"]))),W=()=>{const[e,n]=Object(r.useState)(""),[t,o]=Object(r.useState)(""),[c,a]=Object(r.useState)(null),[i,l]=Object(r.useState)(""),s=Object(g.g)();Object(r.useEffect)((()=>{const e=Object(u.d)(y,(e=>{a(e)}));return()=>e()}),[]);const d=()=>{n(""),o(""),l("")};return c?Object(L.jsx)(g.a,{to:"/ToDoBoard"}):Object(L.jsxs)(U,{children:[Object(L.jsxs)(P,{children:[Object(L.jsx)(A,{children:"\uc624"}),"\ub298 ",Object(L.jsx)(A,{children:"\ub108"}),"\uc758 ",Object(L.jsx)(A,{children:"\ud558"}),"\ub8e8\ub294",Object(L.jsx)(A,{children:"?"})]}),Object(L.jsxs)(H,{onSubmit:async n=>{n.preventDefault(),l("");try{const n=await Object(u.e)(y,e,t);a(n.user),console.log("User logged in:",n.user);const o=await C(n.user.uid);console.log("User Todos:",o),await v(n.user.uid,o),d(),s.push("/ToDoBoard")}catch(i){switch(i.message){case"auth/user-not-found":l("\ub4f1\ub85d\ub418\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790\uc785\ub2c8\ub2e4. \uc774\uba54\uc77c\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694.");break;case"auth/wrong-password":l("\uc798\ubabb\ub41c \ube44\ubc00\ubc88\ud638\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.");break;case"auth/invalid-email":l("\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc774\uba54\uc77c \uc8fc\uc18c\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \uc785\ub825\ud574 \uc8fc\uc138\uc694.");break;default:l("\ub85c\uadf8\uc778 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694."),console.error("Error logging in:",i)}}},children:[Object(L.jsx)(G,{type:"email",value:e,onChange:e=>n(e.target.value),placeholder:"Email",required:!0}),Object(L.jsx)(G,{type:"password",value:t,onChange:e=>o(e.target.value),placeholder:"Password",required:!0}),Object(L.jsx)(M,{type:"submit",children:"Login"})]}),Object(L.jsx)(V,{}),Object(L.jsxs)(J,{onClick:async()=>{l("");try{const e=await Object(u.f)(y,w);a(e.user),console.log("User signed in with Google:",e.user);const n=await C(e.user.uid);console.log("User Todos:",n),await v(e.user.uid,n),s.push("/ToDoBoard")}catch(i){l(i.message),console.error("Error signing in with Google:",i)}},children:[Object(L.jsx)(N,{src:B,alt:"Google Icon"}),"Login with Google"]}),Object(L.jsxs)(Y,{children:["\uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0\uac00\uc694?"," ",Object(L.jsx)(x.b,{to:"/SignUp",children:Object(L.jsx)(K,{children:"\ud68c\uc6d0\uac00\uc785"})})]}),i&&Object(L.jsx)("p",{style:{color:"red"},children:i})]})};var X,Z,Q,$,ee,ne,te,oe,re,ce=c.a.memo(W),ae=t(39),ie=t.n(ae);const le=b.c.div(X||(X=Object(o.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: ",";\n  width: 450px;\n  height: 450px;\n  color: ",";\n  border-radius: 20px;\n"])),(e=>e.theme.boardColor),(e=>e.theme.boardtextColor)),se=b.c.h1(Z||(Z=Object(o.a)(["\n  font-size: 40px;\n"]))),de=b.c.form(Q||(Q=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  margin-top: 15px;\n"]))),be=b.c.input($||($=Object(o.a)(["\n  font-size: 17px;\n  padding: 5px;\n  width: 270px;\n  background-color: white;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  font-family: 'Ownglyph_ryurue-Rg';\n\n  &:focus {\n    outline: none;\n  }\n  &::placeholder {\n    font-family: 'Ownglyph_ryurue-Rg';\n  }\n"]))),pe=b.c.p(ee||(ee=Object(o.a)(["\n  text-align: end;\n"]))),je=b.c.button(ne||(ne=Object(o.a)(["\n  margin-top: 10px;\n  font-size: 18px;\n  width: auto;\n  height: 40px;\n  background-color: ",";\n  border-radius: 10px;\n  &:active {\n    font-size: 15px;\n  }\n  font-family: 'Ownglyph_ryurue-Rg';\n"])),(e=>e.theme.bgColor)),xe=b.c.p(te||(te=Object(o.a)(["\n  margin-top: 50px;\n  margin-bottom: 0;\n  font-size: 20px;\n"]))),ge=b.c.span(oe||(oe=Object(o.a)(["\n  color: #ffc700;\n"]))),he=b.c.div(re||(re=Object(o.a)(["\n  .swal2-popup {\n    background-color: ",";\n  }\n\n  .swal2-title {\n    color: ",";\n  }\n\n  .swal2-content {\n    color: ",";\n  }\n\n  .swal2-confirm {\n    background-color: ",";\n    color: ",";\n    border-radius: 10px;\n    padding: 10px 20px;\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.boardColor),(e=>e.theme.boardtextColor),(e=>e.theme.boardtextColor),(e=>e.theme.bgColor),(e=>e.theme.boardColor),(e=>e.theme.boardColor),(e=>e.theme.bgColor)),ue=()=>{const[e,n]=Object(r.useState)(""),[t,o]=Object(r.useState)(""),[c,a]=Object(r.useState)("");return Object(L.jsxs)(le,{children:[Object(L.jsx)(se,{children:"\ud68c\uc6d0\uac00\uc785"}),Object(L.jsxs)(de,{onSubmit:async r=>{r.preventDefault(),a("");try{const r=await Object(u.b)(y,e,t);ie.a.fire({title:"\ud68c\uc6d0\uac00\uc785\uc5d0 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4!",text:"\uba54\uc778\ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud560\uac8c\uc694 \uc4e9 ~",confirmButtonColor:"#4CAF50",background:"#fff",backdrop:"#F1E5D1"}),console.log("User signed up:",r.user),n(""),o("")}catch(c){switch(c.code){case"auth/email-already-in-use":a("\uc774\ubbf8 \ub4f1\ub85d\ub41c \uc774\uba54\uc77c\uc785\ub2c8\ub2e4. \ub2e4\ub978 \uc774\uba54\uc77c\uc744 \uc0ac\uc6a9\ud574 \uc8fc\uc138\uc694.");break;case"auth/invalid-email":a("\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc774\uba54\uc77c \uc8fc\uc18c\uc785\ub2c8\ub2e4.");break;case"auth/weak-password":a("\ube44\ubc00\ubc88\ud638\uac00 \ub108\ubb34 \uc57d\ud569\ub2c8\ub2e4. \ub354 \uac15\ub825\ud55c \ube44\ubc00\ubc88\ud638\ub97c \uc0ac\uc6a9\ud574 \uc8fc\uc138\uc694.");break;default:a("\ud68c\uc6d0\uac00\uc785 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}console.error("Error signing up:",c)}},children:[Object(L.jsx)(pe,{children:"\ub108\uc758 \uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc918"}),Object(L.jsx)(be,{type:"email",value:e,onChange:e=>n(e.target.value),placeholder:"Email",required:!0}),Object(L.jsx)(pe,{children:"\ub108\uc758 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc918"}),Object(L.jsx)(be,{type:"password",value:t,onChange:e=>o(e.target.value),placeholder:"Password",required:!0}),Object(L.jsx)(je,{type:"submit",children:"\ud68c\uc6d0\uac00\uc785"}),Object(L.jsxs)(xe,{children:["\uc774\ubbf8 \ud68c\uc6d0\uac00\uc785\uc744 \ud558\uc168\ub098\uc694?",Object(L.jsx)(x.b,{to:"/Login",children:Object(L.jsx)(ge,{children:" \ub85c\uadf8\uc778\ud558\uae30 "})})]})]}),c&&Object(L.jsx)("p",{style:{color:"red"},children:c}),Object(L.jsx)(he,{})]})};var Oe,me,fe,ye,we=c.a.memo(ue),ve=t(23),Ce=t(20),ke=t(19);const De=b.c.div(Oe||(Oe=Object(o.a)(["\n  position: fixed; /* \ud654\uba74 \uace0\uc815 */\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5); /* \ubc30\uacbd \ubc18\ud22c\uba85 \ucc98\ub9ac */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000; /* \ub2e4\ub978 \uc694\uc18c\ubcf4\ub2e4 \uc704\uc5d0 \uc624\ub3c4\ub85d */\n"]))),Se=b.c.div(me||(me=Object(o.a)(["\n  background: ",";\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n"])),(e=>e.theme.cardColor)),ze=b.c.input(fe||(fe=Object(o.a)(["\n  border-style: none;\n  background-color: ",";\n  border-bottom: 1px solid ",";\n  color: ",";\n\n  &:focus {\n    outline: none;\n  }\n"])),(e=>e.theme.cardColor),(e=>e.theme.boardColor),(e=>e.theme.textColor)),Ie=b.c.button(ye||(ye=Object(o.a)(["\n  background-color: ",";\n  margin-left: 10px;\n  color: ",";\n  border-radius: 20px;\n  border: 1px solid ",";\n  font-size: 15px;\n"])),(e=>e.theme.boardColor),(e=>e.theme.boardtextColor),(e=>e.theme.boardColor));var Ee,Te=e=>{let{toDoText:n,toDoId:t,boardId:o,onClose:c}=e;const[a,i]=Object(r.useState)(n),s=Object(l.e)(p);return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(De,{onClick:c,children:Object(L.jsx)(Se,{onClick:e=>e.stopPropagation(),children:Object(L.jsxs)("form",{onSubmit:e=>{e.preventDefault();const n=a;null!==n&&""!==n.trim()&&(s((e=>{const r=e[o].map((e=>e.id===t?{...e,text:n}:e));return{...e,[o]:r}})),c(),i(""))},children:[Object(L.jsx)(ze,{type:"text",value:a,onChange:e=>{i(e.currentTarget.value)}}),Object(L.jsx)(Ie,{type:"submit",children:"\ud655\uc778"})]})})})})};const Re=b.c.div(Ee||(Ee=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n  border-radius: 10px;\n  padding: 5px 10px;\n  margin-bottom: 5px;\n"])),(e=>e.isDragging?"#B7B597":e.theme.cardColor)),Fe=e=>{let{toDoText:n,toDoId:t,index:o,boardId:c}=e;const[a,i]=Object(r.useState)(!1),[l,s]=Object(r.useState)(!0),d=()=>{i(!1),s(!0)},b=e=>{e.preventDefault(),i(!0),s(!1)};return Object(L.jsx)(ve.b,{draggableId:t.toString(),index:o,children:(e,o)=>Object(L.jsxs)(Re,{ref:e.innerRef,...e.draggableProps,...e.dragHandleProps,isDragging:o.isDragging,children:[n,l&&Object(L.jsx)(Ce.a,{icon:ke.c,onClick:b}),a&&Object(L.jsx)(Te,{toDoText:n,toDoId:t,boardId:c,onClose:d})]})},t)};var _e,qe,Be,Le,Ue,Pe,Ae,He=c.a.memo(Fe),Ge=t(28);const Me=b.c.div(_e||(_e=Object(o.a)(["\n  width: 300px;\n  padding-top: 10px;\n  margin: 20px;\n  background-color: ",";\n  border-radius: 5px;\n  min-height: 300px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n"])),(e=>e.theme.boardColor)),Je=b.c.h2(qe||(qe=Object(o.a)(["\n  text-align: center;\n  font-weight: 600;\n  margin-bottom: 10px;\n  font-size: 22px;\n  margin-right: auto;\n  color: ",";\n"])),(e=>e.theme.boardtextColor)),Ne=b.c.form(Be||(Be=Object(o.a)(["\n  width: 100%;\n  input {\n    width: 100%;\n  }\n"]))),Ve=b.c.div(Le||(Le=Object(o.a)(["\n  background-color: ",";\n  flex-grow: 1;\n  transition: background-color 0.3s ease-in-out;\n  padding: 20px;\n"])),(e=>e.isDraggingOver||e.isDraggingFromThis?"rgba(126, 215, 193, 0.1)":"transparent")),Ye=b.c.input(Ue||(Ue=Object(o.a)(["\n  text-align: center;\n  border-style: none;\n  background-color: '#DC8686';\n  font-size: 18px;\n  font-family: 'Ownglyph_ryurue-Rg';\n\n  height: 30px;\n\n  width: 30px;\n  &:hover {\n    text-decoration: none;\n  }\n  &:focus {\n    outline: none;\n  }\n\n  &::placeholder {\n    font-family: 'Ownglyph_ryurue-Rg';\n  }\n"]))),Ke=b.c.div(Pe||(Pe=Object(o.a)(["\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  flex-direction: row;\n  margin: 0px 10px;\n"]))),We=Object(b.c)(Ce.a)(Ae||(Ae=Object(o.a)(["\n  margin-left: auto;\n  color: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(e=>e.theme.deleteBtn)),Xe=e=>{let{boardId:n,toDos:t}=e;const o=Object(l.e)(p),{register:r,handleSubmit:c,setValue:a}=Object(Ge.a)();return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(Me,{children:[Object(L.jsxs)(Ke,{children:[Object(L.jsx)(Je,{children:n}),Object(L.jsx)(We,{icon:ke.b,onClick:()=>{o((e=>{const{[n]:t,...o}=e;return o}))}})]}),Object(L.jsx)(Ne,{onSubmit:c((e=>{let{toDo:r}=e;const c={id:Date.now(),text:r,isDelete:!1};t.length>=8||(o((e=>({...e,[n]:[...e[n],c]}))),a("toDo",""))})),children:Object(L.jsx)(Ye,{...r("toDo",{required:!0}),type:"text",placeholder:'\uc801\uc5b4\ubd10! "'.concat(n,'" \uc758 \ud560\uc77c\uc744!')})}),Object(L.jsx)(ve.c,{droppableId:n,children:(e,o)=>Object(L.jsxs)(Ve,{ref:e.innerRef,...e.droppableProps,isDraggingOver:o.isDraggingOver,isDraggingFromThis:Boolean(o.draggingFromThisWith),children:[Array.isArray(t)&&t.map(((e,t)=>Object(L.jsx)(He,{boardId:n,index:t,toDoText:e.text,toDoId:e.id},e.id))),e.placeholder]})})]})})};var Ze,Qe,$e,en=c.a.memo(Xe),nn=t(41);const tn=b.c.div(Ze||(Ze=Object(o.a)(["\n  position: fixed;\n  right: 20px;\n  bottom: 80px;\n  display: flex;\n  font-size: 20px;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"]))),on=b.c.div(Qe||(Qe=Object(o.a)(["\n  background: ",";\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  min-width: 300px; /* \ucd5c\uc18c \ub108\ube44 \uc124\uc815 */\n  min-height: 100px; /* \ucd5c\uc18c \ub192\uc774 \uc124\uc815 */\n  text-align: center; /* \ud14d\uc2a4\ud2b8 \uc911\uc559 \uc815\ub82c */\n  font-size: 30px;\n"])),(e=>e.theme.cardColor)),rn=b.c.button($e||($e=Object(o.a)(["\n  background-color: ",";\n  margin-left: 10px;\n  color: ",";\n  border-radius: 20px;\n  border: 1px solid ",";\n  font-size: 20px;\n  padding: 5px 10px;\n  margin-top: 10px;\n  cursor: pointer; /* \ud3ec\uc778\ud130 \ucee4\uc11c \ucd94\uac00 */\n  font-family: 'Ownglyph_ryurue-Rg';\n"])),(e=>e.theme.boardColor),(e=>e.theme.boardtextColor),(e=>e.theme.boardColor));var cn,an,ln,sn,dn=e=>{let{onClose:n,onConfirm:t}=e;return Object(L.jsx)(tn,{onClick:n,children:Object(L.jsxs)(on,{onClick:e=>e.stopPropagation(),children:[Object(L.jsx)("p",{children:"\ubaa8\ub450 \uc0ad\uc81c\ud574\ub3c4 \uad1c\ucc2e\uc544 ?"}),Object(L.jsx)(rn,{onClick:()=>{t(),n()},children:"\uc751!"}),Object(L.jsx)(rn,{onClick:n,children:"\uc544\ub2c8.."})]})})};const bn=b.c.div(cn||(cn=Object(o.a)(["\n  width: 100px;\n  height: 100px;\n  position: fixed;\n  right: 10px;\n  bottom: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),pn=Object(b.c)(Ce.a)(an||(an=Object(o.a)(["\n  margin-bottom: 10px;\n"]))),jn=Object(b.c)(Ce.a)(ln||(ln=Object(o.a)(["\n  cursor: pointer;\n  margin-bottom: 20px;\n\n  &:active {\n    font-size: 50px;\n  }\n"]))),xn=b.c.div(sn||(sn=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 60px;\n  color: ",";\n  position: fixed;\n"])),(e=>e.theme.trash));var gn,hn,un,On,mn,fn,yn,wn,vn,Cn=()=>{const[e,n]=Object(r.useState)(!1),t=Object(l.e)(p),o=()=>{t((e=>{const n={...e};return Object.keys(n).forEach((e=>delete n[e])),n})),n(!1)},c=()=>{n(!1)},a=e=>{e.preventDefault(),n(!0)};return Object(L.jsx)(ve.c,{droppableId:"TRASH",children:n=>Object(L.jsxs)(bn,{ref:n.innerRef,...n.droppableProps,children:[Object(L.jsxs)(xn,{children:[Object(L.jsx)(pn,{icon:nn.a}),Object(L.jsx)(jn,{onClick:a,icon:ke.a}),e&&Object(L.jsx)(dn,{onClose:c,onConfirm:o})]}),n.placeholder]})})};const kn=b.c.header(gn||(gn=Object(o.a)(["\n  height: 60px;\n  width: 100%;\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])),(e=>e.theme.boardColor)),Dn=b.c.div(hn||(hn=Object(o.a)(["\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 18px;\n  color: ",";\n"])),(e=>e.theme.bgColor)),Sn=b.c.div(un||(un=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  justify-content: center;\n  align-items: center;\n  height: 100vh; /* \ud654\uba74 \ub192\uc774\ub97c \ubdf0\ud3ec\ud2b8 100%\ub85c \uc81c\ud55c */\n  width: 100h;\n  position: relative;\n"]))),zn=Object(b.c)(Ce.a)(On||(On=Object(o.a)(["\n  font-size: 50px;\n  cursor: pointer;\n  color: ",";\n  margin-left: 20px;\n  z-index: 1;\n  margin-left: 10px;\n"])),(e=>e.theme.toggle)),In=b.c.div(mn||(mn=Object(o.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n"]))),En=b.c.div(fn||(fn=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: 100px;\n"]))),Tn=b.c.h1(yn||(yn=Object(o.a)(["\n  font-size: 60px;\n  text-align: center;\n  margin-bottom: 10px;\n  color: ",";\n"])),(e=>e.theme.textColor)),Rn=b.c.input(wn||(wn=Object(o.a)(["\n  width: 500px;\n  height: 32px;\n  font-size: 20px;\n  border: 0;\n  border-radius: 15px;\n  outline: none;\n  padding-left: 10px;\n  background-color: rgb(233, 233, 233);\n  font-family: 'Ownglyph_ryurue-Rg';\n\n  &::placeholder {\n    font-family: 'Ownglyph_ryurue-Rg';\n  }\n"]))),Fn=b.c.button(vn||(vn=Object(o.a)(["\n  padding: 10px;\n  background-color: ",";\n  color: ",";\n  border-radius: 20px;\n  font-family: 'Ownglyph_ryurue-Rg';\n  font-size: 18px;\n  margin-right: 10px;\n"])),(e=>e.theme.bgColor),(e=>e.theme.boardColor)),_n=()=>{const[e,n]=Object(l.c)(p),{register:t,handleSubmit:o,setValue:c}=Object(Ge.a)(),[a,i]=Object(l.c)(j),[s,d]=Object(r.useState)((()=>(new Date).toLocaleString())),[b,x]=Object(r.useState)(null);Object(r.useEffect)((()=>{const e=setInterval((()=>{d((new Date).toLocaleString())}),1e3);return()=>clearInterval(e)}),[]),Object(r.useEffect)((()=>{(async()=>{try{const e=await new Promise(((e,n)=>{Object(u.d)(y,(t=>{t?e(t.uid):n("User not logged in")}))}));if(e){x(e);const t=await C(e);n(t)}}catch(e){console.error("Error loading todos:",e)}})()}),[n]),Object(r.useEffect)((()=>{b&&v(b,e)}),[b,e]);return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(ve.a,{onDragEnd:e=>{const{source:t,destination:o}=e;if(o){if("TRASH"===o.droppableId)return n((e=>{const n=[...e[t.droppableId]];return n.splice(t.index,1),{...e,[t.droppableId]:n}})),void console.log("Trash\ub85c \uc774\ub3d9\ud568");n((e=>{const n=[...e[t.droppableId]],r=[...e[o.droppableId]];if(t.droppableId===o.droppableId){const r=n[t.index];return n.splice(t.index,1),n.splice(o.index,0,r),{...e,[t.droppableId]:n}}{const c=n[t.index];return n.splice(t.index,1),r.splice(o.index,0,c),{...e,[t.droppableId]:n,[o.droppableId]:r}}})),console.log("\ubcf4\ub4dc \uc774\ub3d9 \uc644\ub8cc")}else console.log("\ubcf4\ub4dc \ubc16\uc73c\ub85c \ub5a8\uc5b4\uc9d0")},children:[Object(L.jsxs)(kn,{children:[Object(L.jsx)(zn,{onClick:()=>{i((e=>!e))},icon:a?ke.e:ke.d}),Object(L.jsx)(Dn,{children:s}),Object(L.jsx)(Fn,{onClick:async()=>{try{await Object(u.g)(y),console.log("User logged out"),x(null)}catch(e){console.error("Error logging out:",e)}},children:"\ub85c\uadf8\uc544\uc6c3"})]}),Object(L.jsxs)(Sn,{children:[Object(L.jsxs)(En,{children:[Object(L.jsx)(Tn,{children:"\uc624\ub298\uc758 \ub108\uc758 \ud558\ub8e8\ub294?"}),Object(L.jsx)("form",{onSubmit:o((t=>{let{addToDo:o}=t;Object.keys(e).length>=3||(n((e=>({...e,[o]:[]}))),c("addToDo",""))})),children:Object(L.jsx)(Rn,{...t("addToDo",{required:!0}),placeholder:"\uc0c8\ub85c\uc6b4 \ubcf4\ub4dc\ud310\uc744 \ub9cc\ub4e4\uc5b4 \ubd10!"})})]}),Object(L.jsx)(In,{children:Object.keys(e).map((n=>Object(L.jsx)(en,{boardId:n,toDos:e[n]},n)))}),Object(L.jsx)(Cn,{})]})]})})};var qn,Bn,Ln=c.a.memo(_n);const Un=b.c.div(qn||(qn=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]))),Pn=b.c.p(Bn||(Bn=Object(o.a)(["\n  font-size: 50px;\n  font-weight: bold;\n  color: #333;\n"])));var An,Hn=()=>{const[e,n]=Object(r.useState)(!1),[t,o]=Object(r.useState)(!0);return Object(r.useEffect)((()=>{const e=Object(u.d)(y,(e=>{n(!!e),o(!1)}));return()=>e()}),[]),t?Object(L.jsx)(Un,{children:Object(L.jsx)(Pn,{children:"Loading..."})}):Object(L.jsx)(x.a,{children:Object(L.jsxs)(g.d,{children:[Object(L.jsx)(g.b,{exact:!0,path:"/SignUp",children:e?Object(L.jsx)(g.a,{to:"/Login"}):Object(L.jsx)(we,{})}),Object(L.jsx)(g.b,{exact:!0,path:"/Login",children:e?Object(L.jsx)(g.a,{to:"/ToDoBoard"}):Object(L.jsx)(ce,{})}),Object(L.jsx)(g.b,{exact:!0,path:"/ToDoBoard",children:e?Object(L.jsx)(Ln,{}):Object(L.jsx)(g.a,{to:"/Login"})}),Object(L.jsx)(g.b,{exact:!0,path:"/",children:Object(L.jsx)(g.a,{to:"/Login"})})]})})};const Gn=Object(b.b)(An||(An=Object(o.a)(["\n\n@font-face {\n    font-family: 'Ownglyph_ryurue-Rg';\n    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405-2@1.0/Ownglyph_ryurue-Rg.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n}\n \n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, menu, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  main, menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n    \n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, main, menu, nav, section {\n    display: block;\n  }\n  /* HTML5 hidden-attribute fix for newer browsers */\n  *[hidden] {\n      display: none;\n  }\n  body {\n    line-height: 1;\n    \n \n  }\n  menu, ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: 'Ownglyph_ryurue-Rg';\n    font-weight: 400;\n    background-color: ",";\n    color: ",";\n    line-height: 1.2;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"])),(e=>e.theme.bgColor),(e=>e.theme.textColor)),Mn=()=>{const e=Object(l.d)(j);return Object(L.jsxs)(b.a,{theme:e?s:d,children:[Object(L.jsx)(Gn,{}),Object(L.jsx)(Hn,{})]})};i.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(x.a,{children:Object(L.jsx)(l.a,{children:Object(L.jsx)(Mn,{})})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.96adb245.chunk.js.map