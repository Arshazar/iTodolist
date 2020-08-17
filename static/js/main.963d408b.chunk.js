(this.webpackJsonpiTodolist=this.webpackJsonpiTodolist||[]).push([[0],{36:function(e,t,n){e.exports=n(57)},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),o=n.n(l),c=n(11),i=n(19),d=n(17);const m=[{text:"iTodo initial state",completed:!1,id:0}];var u=n.n(d)()((e=m,t)=>{switch(t.type){case"ADD_TODO":return[...e,{id:e.reduce((e,t)=>Math.max(t.id,e),-1)+1,completed:!1,text:t.text}];case"TOGGLE_TODO":return e.map(n=>n.id!==t.id?e:Object(i.a)({},n,{completed:!n.completed}));case"REMOVE_TODO":return e.filter(e=>e.id!==t.id);case"EDIT_TODO":return e.map(e=>e.id===t.id?Object(i.a)({},e,{text:t.text}):e);default:return e}},{filter:function(e,t,n){return"REMOVE_TODO"===e.type}});var s=(e="SHOW_ALL",t)=>{switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},E=n(21),b=n(28),p=n.n(b),g=n(29),O=n.n(g);const v={key:"todos",version:1,storage:p.a,stateReconciler:O.a},f=Object(c.b)({todos:u,visibilityFilter:s}),h=Object(E.a)(v,f),y=Object(c.c)(h,["todo"],window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),x=Object(E.b)(y);var T=y,C=n(30),_=n(8),j=n(7),k=n(13),w=n(9);function S(){const e=Object(w.a)(["\n    li {\n        display: flex;\n        flex-wrap: row;\n        height: 40px;\n        border-bottom: solid 1px lightgrey;\n        padding: 5px;\n\n        p {\n            margin: auto;\n            margin-left: 10px;\n        }\n\n        &:hover {\n            cursor: pointer;\n            background: ",";\n        }\n    }\n"]);return S=function(){return e},e}const D=j.c.div(S(),({theme:e})=>e.hoverItemColour);var I=n(66),L=n(58),A=n(59),R=n(60),F=n(61),N=n(62),V=n(63),W=n(64);const H=e=>({type:"TOGGLE_TODO",id:e}),U="SHOW_ALL",B="SHOW_COMPLETED",M="SHOW_ACTIVE";var z=Object(_.b)()(({dispatch:e,completed:t,modal:n,toggle:l,id:o,text:c})=>{let i=Object(a.useState)(c),d=Object(k.a)(i,2),m=d[0],u=d[1];const s=()=>{e(H(o)),l(!1)};return r.a.createElement("div",null,r.a.createElement(I.a,{isOpen:n,toggle:l,centered:!0,className:"h-50 col-lg-4 col-md-6 col-sm-10",fade:!0},r.a.createElement(L.a,null,"Your todo"),r.a.createElement(A.a,null,r.a.createElement(R.a,null,r.a.createElement(F.a,null,r.a.createElement(N.a,{style:{boxSizing:"border-box"},type:"textarea",id:"todo-text",placeholder:c,onChange:e=>{u(e.target.value)}}))),r.a.createElement(V.a,{className:"justify-content-between"},r.a.createElement(W.a,{color:"primary",onClick:()=>{m.trim()&&(e(((e,t)=>({type:"EDIT_TODO",id:e,text:t}))(o,m)),l(!1))}},"Save"),r.a.createElement(W.a,{color:"danger",onClick:()=>{e((e=>({type:"REMOVE_TODO",id:e}))(o)),l(!1)}},"Remove"),t?r.a.createElement(W.a,{color:"warning",onClick:s},"Incomplete"):r.a.createElement(W.a,{color:"success",onClick:s},"Complete"),r.a.createElement(W.a,{onClick:l},"Cancel")))))});var G=({completed:e,text:t,id:n})=>{const l=Object(a.useState)(!1),o=Object(k.a)(l,2),c=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null,r.a.createElement("li",{onClick:()=>i(!0),style:{backgroundColor:e?"#86fcbd":""}},r.a.createElement("p",null,t))),c?r.a.createElement(z,{completed:e,id:n,text:t,modal:c,toggle:()=>i(!c)}):r.a.createElement("div",null))};function X(){const e=Object(w.a)(["\n    overflow-y: scroll;\n    border: 2px solid navy;\n    height: 60vh;\n"]);return X=function(){return e},e}const Y=j.c.div(X());var J=({todos:e})=>r.a.createElement(Y,null,e.map(e=>r.a.createElement(G,Object.assign({key:e.id},e))));var P=({active:e,children:t,onClick:n})=>e?r.a.createElement("button",{style:{backgroundColor:"navy"}},t):r.a.createElement("button",{onClick:e=>{e.preventDefault(),n()}},t);var q=Object(_.b)((e,t)=>({active:t.filter===e.visibilityFilter}),(e,t)=>({onClick:()=>{e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}))(P);function K(){const e=Object(w.a)(["\n    margin: 0;\n    backface-visibility: hidden;\n\n    button {\n        border: 0;\n        border-radius: 0;\n        padding: 12px;\n        color: white;\n        background-color: ",";\n\n        &:active {\n            background-color: navy;\n        }\n\n        &:hover {\n            background-color: navy;\n        }\n    }\n"]);return K=function(){return e},e}const Q=j.c.div(K(),({theme:e})=>e.primaryButtonColour);var Z=()=>r.a.createElement(Q,null,r.a.createElement(q,{filter:U},"All"),r.a.createElement(q,{filter:M},"Todos"),r.a.createElement(q,{filter:B},"Completed"));function $(){const e=Object(w.a)(["\n    margin: 0;\n    text-align-last: end;\n\n    button {\n        border: 0;\n        border-radius: 0;\n        cursor: pointer;\n        border-radius: 0;\n        padding: 12px;\n        color: white;\n        background-color: ",";\n\n        &:hover {\n            background-color: navy;\n        }\n    }\n"]);return $=function(){return e},e}const ee=j.c.div($(),({theme:e})=>e.primaryButtonColour);var te=n(65);var ne=Object(_.b)()(({dispatch:e,modal:t,toggle:n})=>{let l=Object(a.useState)(""),o=Object(k.a)(l,2),c=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement(I.a,{isOpen:t,toggle:n,centered:!0,className:"h-50 col-lg-4 col-md-6 col-sm-10",fade:!0},r.a.createElement(L.a,null,"Add todo"),r.a.createElement(A.a,null,r.a.createElement(R.a,null,r.a.createElement(F.a,null,r.a.createElement(te.a,{for:"writing"},"Write your todo"),r.a.createElement(N.a,{style:{boxSizing:"border-box"},type:"textarea",id:"todo-text",onChange:e=>{i(e.target.value)}}))),r.a.createElement(V.a,{className:"justify-content-between"},r.a.createElement(W.a,{color:"primary",onClick:t=>{(t.preventDefault(),c.trim())&&(e({type:"ADD_TODO",text:c}),i(""),n(!1))}},"Add"),r.a.createElement(W.a,{className:"ml-5",onClick:n},"Cancel")))))});let ae=({canUndo:e,onUndo:t})=>r.a.createElement("button",{onClick:t,disabled:!e},"Unremove");const re={onUndo:d.ActionCreators.undo};ae=Object(_.b)(e=>({canUndo:e.todos.past.length>0}),re)(ae);var le=ae;var oe=()=>{const e=Object(a.useState)(!1),t=Object(k.a)(e,2),n=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null,r.a.createElement("button",{onClick:()=>l(!0)},"Add new"),r.a.createElement(le,null)),n?r.a.createElement(ne,{modal:n,toggle:()=>l(!n)}):r.a.createElement("div",null))};const ce={primaryButtonColour:"#05c5ff",hoverItemColour:"#89d8fa",completedItemColour:"#86fcbd",tablet:"768px",mobile:"576px"},ie=(e,t)=>{switch(t){case"SHOW_ALL":return e;case"SHOW_COMPLETED":return e.filter(e=>e.completed);case"SHOW_ACTIVE":return e.filter(e=>!e.completed);default:return null}},de={onToggleTodo:H};var me=Object(_.b)(e=>({todos:ie(e.todos.present,e.visibilityFilter)}),de)(J);function ue(){const e=Object(w.a)(['\n    html {\n        margin: 0;\n        padding: 0;\n        \n        *, *::before, *::after {\n            box-sizing: content-box;\n        }\n    }\n\n    body {\n        margin: 0 20%;\n        width: 60%;\n        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji";\n        height: 100% !important;\n        text-rendering: optimizeLegibility;\n        \n        @media(max-width: ',") {\n            margin: 0;\n            width: 100%;\n        }\n        @media(max-width: ",") {\n            margin: 0 10%;\n            width: 80%;\n        } \n        \n        \n    }\n\n"]);return ue=function(){return e},e}const se=Object(j.b)(ue(),({theme:e})=>e.mobile,({theme:e})=>e.tablet);var Ee=()=>r.a.createElement(j.a,{theme:ce},r.a.createElement(r.a.Fragment,null,r.a.createElement(se,null),r.a.createElement("h1",{style:{margin:"20px auto",textAlign:"center",fontWeight:"200"}},"iTodolist"),r.a.createElement(Z,null),r.a.createElement(me,null),r.a.createElement(oe,null)));n(56);o.a.render(r.a.createElement(_.a,{store:T},r.a.createElement(C.a,{loading:null,persistor:x},r.a.createElement(Ee,null))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.963d408b.chunk.js.map