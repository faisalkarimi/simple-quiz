(this.webpackJsonpsimple=this.webpackJsonpsimple||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),o=c(4),a=c.n(o),s=(c(10),c(11),c(1)),i=c(5),d=function(e,t){switch(t.type){case"SUBMIT":return e.correct?Object(s.a)(Object(s.a)({},e),{},{score:e.score+1,currentQuestion:e.currentQuestion+1}):Object(s.a)(Object(s.a)({},e),{},{currentQuestion:e.currentQuestion+1});case"PICK":return Object(s.a)(Object(s.a)({},e),{},{correct:t.payload.correct});case"SUBMIT":return Object(s.a)(Object(s.a)({},e),{},{currentQuestion:e.currentQuestion+1});case"SHOW_SCORE":return Object(s.a)(Object(s.a)({},e),{},{score:t.payload.score,showScore:!0});case"RESET_SCORE":return Object(s.a)(Object(s.a)({},e),{},{score:0,currentQuestion:0,showScore:!1});default:return e}},u=c(0),j={score:0,currentQuestion:0},b=Object(n.createContext)(j),l=function(e){var t=e.children,c=Object(n.useReducer)(d,j),r=Object(i.a)(c,2),o=r[0],a=r[1];return Object(u.jsx)(b.Provider,{value:{state:o,dispatch:a},children:t})},h=function(e){var t=e.answerId,c=e.optionId,r=e.option,o=Object(n.useContext)(b),a=o.state,i=o.dispatch;console.log(a.score);return Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"radio",name:"answer",id:c,className:"answer",onClick:function(e){e.target.id===t?i({type:"PICK",payload:Object(s.a)(Object(s.a)({},a),{},{correct:!0,checked:!0})}):i({type:"PICK",payload:Object(s.a)(Object(s.a)({},a),{},{correct:!1,checked:!0})})},checked:a.checked}),Object(u.jsx)("label",{htmlFor:c,id:"a_text",children:r})]})},O=function(e){var t=e.question,c=e.option_a,n=e.option_b,r=e.option_c,o=e.option_d,a=e.id;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{id:a,children:t}),Object(u.jsxs)("ul",{children:[Object(u.jsx)(h,{answerId:a,optionId:"a",option:c}),Object(u.jsx)(h,{answerId:a,optionId:"b",option:n}),Object(u.jsx)(h,{answerId:a,optionId:"c",option:r}),Object(u.jsx)(h,{answerId:a,optionId:"d",option:o})]})]})},p=[{question:"Which language runs in a web browser?",a:"Java",b:"C",c:"Python",d:"JavaScript",correct:"d"},{question:"What does CSS stand for?",a:"Central Style Sheets",b:"Cascading Style Sheets",c:"Cascading Simple Sheets",d:"Cars SUVs Sailboats",correct:"b"},{question:"What does HTML stand for?",a:"Hypertext Markup Language",b:"Hypertext Markdown Language",c:"Hyperloop Machine Language",d:"Helicopters Terminals Motorboats Lamborginis",correct:"a"},{question:"What year was JavaScript launched?",a:"1996",b:"1995",c:"1994",d:"none of the above",correct:"b"}],x=function(){var e=Object(n.useContext)(b),t=e.state,c=e.dispatch,r=t.currentQuestion,o=function(){c(r<p.length?{type:"SUBMIT",payload:{currentQuestion:r}}:{type:"SHOW_SCORE",payload:Object(s.a)(Object(s.a)({},t),{},{score:t.score})})};return Object(u.jsx)("div",{className:"quiz-container",id:"quiz",children:t.showScore?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"quiz-header",children:Object(u.jsxs)("h2",{children:["Your Score is ",t.score]})}),Object(u.jsx)("button",{onClick:function(){return c({type:"RESET_SCORE"})},children:"Restart Quiz"})]}):r<p.length?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"quiz-header",children:Object(u.jsx)(O,{question:p[r].question,answer:p[r].correct,option_a:p[r].a,option_b:p[r].b,option_c:p[r].c,option_d:p[r].d,id:p[r].correct})}),Object(u.jsx)("button",{id:"submit",onClick:o,children:"Submit"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"quiz-header",children:Object(u.jsx)("h2",{children:"End of Quiz"})}),Object(u.jsx)("button",{id:"submit",onClick:o,children:"Show Score"})]})})};var S=function(){return Object(u.jsx)(l,{children:Object(u.jsx)(x,{})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),g()}},[[13,1,2]]]);
//# sourceMappingURL=main.e9abebcf.chunk.js.map