(this["webpackJsonpfeedback-app"]=this["webpackJsonpfeedback-app"]||[]).push([[0],{31:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(25),r=c.n(a),s=(c(31),c(19)),j=c(3),l=c(22),d=c.n(l),b=c(2);function o(e){var t=e.text,c={backgroundColor:e.bgColor,color:e.textColor};return Object(b.jsx)("header",{style:c,children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("h2",{children:t})})})}o.defaultProps={text:"Feedback Ui",bgColor:"rgba(0,0,0,0.4)",textColor:"#ff6a95"},o.protoTypes={text:d.a.string,bgColor:d.a.string,textColor:d.a.string};var u=o,h=c(41),x=c(39),O=c(21);function m(e){var t=e.children,c=e.reverse;return Object(b.jsx)("div",{className:"card",style:{backgroundColor:c?"rgba(0,0,0,0.4)":"#fff",color:c?"#fff":"#000"},children:t})}m.defaultProps={reverse:!1};var p=m,f=c(24),v=c(26),g=c(6),k=c(40),y=Object(n.createContext)(),C=function(e){var t=e.children,c=Object(n.useState)([{id:1,text:"This item is from context 1",rating:10},{id:2,text:"This item is from context 2",rating:9},{id:3,text:"This item is from context 3",rating:7}]),i=Object(g.a)(c,2),a=i[0],r=i[1],s=Object(n.useState)({item:{},edit:!1}),j=Object(g.a)(s,2),l=j[0],d=j[1];return Object(b.jsx)(y.Provider,{value:{feedback:a,feedbackEdit:l,deleteFeedback:function(e){window.confirm("Are you sure you want to delete?")&&r(a.filter((function(t){return t.id!==e})))},addFeedback:function(e){e.id=Object(k.a)(),r([e].concat(Object(v.a)(a)))},editFeedback:function(e){d({item:e,edit:!0})},updateFeedback:function(e,t){r(a.map((function(c){return c.id===e?Object(f.a)(Object(f.a)({},c),t):c})))}},children:t})},F=y;var N=function(e){var t=e.item,c=Object(n.useContext)(F),i=c.deleteFeedback,a=c.editFeedback;return Object(b.jsxs)(p,{children:[Object(b.jsx)("div",{className:"num-display",children:t.rating}),Object(b.jsx)("button",{onClick:function(){return i(t.id)},className:"close",children:Object(b.jsx)(O.c,{color:"purple"})}),Object(b.jsx)("button",{onClick:function(){return a(t)},className:"edit",children:Object(b.jsx)(O.a,{color:"purple"})}),Object(b.jsx)("div",{className:"text-display",children:t.text})]})};var w=function(){var e=Object(n.useContext)(F).feedback;return e&&0!==e.length?Object(b.jsx)("div",{className:"feedback-list",children:Object(b.jsx)(h.a,{children:e.map((function(e){return Object(b.jsx)(x.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(b.jsx)(N,{item:e},e.id)},e.id)}))})}):Object(b.jsx)("p",{children:"No Feedback yet!"})};var S=function(){var e=Object(n.useContext)(F).feedback,t=e.reduce((function(e,t){return e+t.rating}),0)/e.length;return t=t.toFixed(1).replace(/[.,]0$/,""),Object(b.jsxs)("div",{className:"feedback-stats",children:[Object(b.jsxs)("h4",{children:[e.length," Reviews"]}),Object(b.jsxs)("h4",{children:["Average Rating: ",isNaN(t)?0:t]})]})};function T(e){var t=e.children,c=e.version,n=e.type,i=e.isDisabled;return Object(b.jsx)("button",{type:n,disabled:i,className:"btn btn-".concat(c),children:t})}T.defaultProps={version:"primary",type:"button",isDisabled:!1};var E=T;var P=function(e){var t=e.select,c=Object(n.useState)(10),i=Object(g.a)(c,2),a=i[0],r=i[1],s=Object(n.useContext)(F).feedbackEdit;Object(n.useEffect)((function(){r(s.item.rating)}),[s]);var j=function(e){r(+e.currentTarget.value),t(+e.currentTarget.value)};return Object(b.jsxs)("ul",{className:"rating",children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{type:"radio",id:"num1",name:"rating",value:"1",onChange:j,checked:1===a}),Object(b.jsx)("label",{htmlFor:"num1",children:"1"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{type:"radio",id:"num2",name:"rating",value:"2",onChange:j,checked:2===a}),Object(b.jsx)("label",{htmlFor:"num2",children:"2"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{type:"radio",id:"num3",name:"rating",value:"3",onChange:j,checked:3===a}),Object(b.jsx)("label",{htmlFor:"num3",children:"3"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{type:"radio",id:"num4",name:"rating",value:"4",onChange:j,checked:4===a}),Object(b.jsx)("label",{htmlFor:"num4",children:"4"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{type:"radio",id:"num5",name:"rating",value:"5",onChange:j,checked:5===a}),Object(b.jsx)("label",{htmlFor:"num5",children:"5"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{type:"radio",id:"num6",name:"rating",value:"6",onChange:j,checked:6===a}),Object(b.jsx)("label",{htmlFor:"num6",children:"6"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{type:"radio",id:"num7",name:"rating",value:"7",onChange:j,checked:7===a}),Object(b.jsx)("label",{htmlFor:"num7",children:"7"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{type:"radio",id:"num8",name:"rating",value:"8",onChange:j,checked:8===a}),Object(b.jsx)("label",{htmlFor:"num8",children:"8"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{type:"radio",id:"num9",name:"rating",value:"9",onChange:j,checked:9===a}),Object(b.jsx)("label",{htmlFor:"num9",children:"9"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{type:"radio",id:"num10",name:"rating",value:"10",onChange:j,checked:10===a}),Object(b.jsx)("label",{htmlFor:"num10",children:"10"})]})]})};var D=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(10),r=Object(g.a)(a,2),s=r[0],j=r[1],l=Object(n.useState)(!0),d=Object(g.a)(l,2),o=d[0],u=d[1],h=Object(n.useState)(""),x=Object(g.a)(h,2),O=x[0],m=x[1],f=Object(n.useContext)(F),v=f.addFeedback,k=f.feedbackEdit,y=f.updateFeedback;return Object(n.useEffect)((function(){!0===k.edit&&(u(!1),i(k.item.text),j(k.item.rating))}),[k]),Object(b.jsx)(p,{children:Object(b.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),c.trim().length>10){var t={text:c,rating:s};!0===k.edit?y(k.item.id,t):v(t),i("")}},children:[Object(b.jsx)("h2",{children:"How would you rate your service with us?"}),Object(b.jsx)(P,{select:function(e){return j(e)}}),Object(b.jsxs)("div",{className:"input-group",children:[Object(b.jsx)("input",{onChange:function(e){""===c?(u(!0),m(null)):""!==c&&c.trim().length<=10?(u(!0),m("Text must be at least 10 characters")):(u(!1),m(null)),i(e.target.value)},type:"text",placeholder:"write a review",value:c}),Object(b.jsx)(E,{type:"submit",isDisabled:o,children:"Send "})]}),O&&Object(b.jsx)("div",{className:"message",children:O})]})})};var A=function(){return Object(b.jsx)(p,{children:Object(b.jsxs)("div",{className:"about",children:[Object(b.jsx)("h1",{children:"About This Project"}),Object(b.jsx)("p",{children:"This is a Reach app to leaver feedback fro a product or service"}),Object(b.jsx)("p",{children:"Version: 1.0.0"}),Object(b.jsx)("p",{children:Object(b.jsx)(s.b,{to:"/",children:"Back To Home"})})]})})};var R=function(){return Object(b.jsx)("div",{className:"about-link",children:Object(b.jsx)(s.b,{to:"/about",children:Object(b.jsx)(O.b,{size:30})})})};var B=function(){return Object(b.jsx)(C,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(u,{}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",element:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D,{}),Object(b.jsx)(S,{}),Object(b.jsx)(w,{})]})}),Object(b.jsx)(j.a,{path:"/about",element:Object(b.jsx)(A,{})})]}),Object(b.jsx)(R,{})]})]})})};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.217524d2.chunk.js.map