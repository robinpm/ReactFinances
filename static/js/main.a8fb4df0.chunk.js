(this.webpackJsonpreactfinances=this.webpackJsonpreactfinances||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(28),s=n.n(r),i=n(8),a=n(9),j=n(11),o=n(10),d=n(15),l=n(2),b=n(13),h=n(29),u=n.n(h),O=n(0),x=function(e){e.onSubmit;var t=Object(c.useState)(""),n=Object(b.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(""),a=Object(b.a)(i,2),j=a[0],o=a[1],d=Object(c.useState)(""),l=Object(b.a)(d,2),h=l[0],x=l[1],p=Object(c.useState)(""),m=Object(b.a)(p,2),f=m[0],v=m[1],y=Object(c.useState)(""),g=Object(b.a)(y,2),S=g[0],w=g[1];return Object(O.jsxs)("div",{id:"myForm",children:[Object(O.jsx)("div",{className:"input-box",children:Object(O.jsx)("input",{type:"text",placeholder:"Who are you?",onChange:function(e){s(e.target.value)}})}),Object(O.jsx)("div",{className:"input-box",children:Object(O.jsx)("input",{id:"today",type:"date",onChange:function(e){x(e.target.value)}})}),Object(O.jsx)("div",{className:"input-box",children:Object(O.jsx)("input",{type:"text",placeholder:"What did you buy?",onChange:function(e){o(e.target.value)}})}),Object(O.jsxs)("div",{className:"input-box",children:[Object(O.jsx)("i",{children:"$"}),Object(O.jsx)("input",{type:"number",id:"price",placeholder:"How much was it?",onChange:function(e){v(e.target.value)}})]}),Object(O.jsx)("div",{className:"input-box",children:Object(O.jsx)("input",{type:"text",placeholder:"Anything else?",onChange:function(e){w(e.target.value)}})}),Object(O.jsx)("div",{className:"button",children:Object(O.jsx)("input",{type:"submit",value:"Submit",onClick:function(){console.log("test");var e=new FormData;e.append("user",r),e.append("price",f),e.append("description",j),e.append("date",h),e.append("notes",S),e.append("file",new Blob(["test payload"],{type:"text/csv"})),u()({url:"https://api.stop-watch.xyz/webfinances.php",method:"POST",data:e,headers:{"Content-Type":"multipart/form-data"}}),window.location.href="#submit"}})})]})},p=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(x,{})})}}]),n}(c.Component),m=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={error:null,isLoaded:!1,items:[],userPriceArr:0},c}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.stop-watch.xyz/webfinances.php").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t,userPriceArr:t.map((function(e){return[e.User,e.Amount]}))})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,c=e.items,r=e.userPriceArr;if(t)return Object(O.jsxs)("div",{children:["Error: ",t.message]});if(n){console.log(r[1][0]);for(var s=0,i=0,a=0;a<r.length;a++)"Robin"==r[a][0]?s+=parseFloat(r[a][1]):i+=parseFloat(r[a][1]);var j=function(e,t){return e>=t?(console.log("t1: ",e," | ","t2: ",t),(e-t).toFixed(2)):0},o=j(i,s),d=j(s,i);return console.log(i.toFixed(2)," | ",s.toFixed(2)," | ",2),Object(O.jsxs)("div",{children:[Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Amount Spent"}),Object(O.jsx)("th",{children:"Owes"})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Robin"}),Object(O.jsxs)("th",{children:["$ ",s.toFixed(2)]}),Object(O.jsxs)("th",{children:["$ ",o]})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Connie"}),Object(O.jsxs)("th",{children:["$ ",i.toFixed(2)]}),Object(O.jsxs)("th",{children:["$ ",d]})]})]})]}),Object(O.jsxs)("table",{className:"",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Date"}),Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Description"}),Object(O.jsx)("th",{children:"Price"})]})}),Object(O.jsx)("tbody",{children:c.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.Date.substr(5)}),Object(O.jsx)("td",{children:e.User}),Object(O.jsx)("td",{children:e.Description}),Object(O.jsxs)("td",{children:["$",e.Amount]})]},e.id)}))})]})]})}return Object(O.jsx)("div",{children:"Loading..."})}}]),n}(c.Component),f=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Submitted"}),Object(O.jsx)("p",{})]})}}]),n}(c.Component),v=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("ul",{className:"header",children:[Object(O.jsx)("li",{children:Object(O.jsx)(d.b,{style:{borderRadius:"5px 0px 0px 5px"},exact:!0,to:"/",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(d.b,{to:"/table",children:"Table"})})]})})},y=function(e){var t=e.title,n=e.subtitle;return document.title=t+" | "+n,Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{className:"pageTitle",children:t}),Object(O.jsx)("h2",{className:"pageSub",children:n}),Object(O.jsx)(v,{})]})};y.defaultProps={title:"Shared Expenses"};var g=y,S=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=new Date,t=e.toLocaleString("default",{month:"long"})+" "+e.getFullYear();return Object(O.jsx)(d.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(g,{subtitle:t}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)(l.a,{exact:!0,path:"/",component:p}),Object(O.jsx)(l.a,{path:"/table",component:m}),Object(O.jsx)(l.a,{path:"/submit",component:f})]})]})})}}]),n}(c.Component);n(62);s.a.render(Object(O.jsx)(S,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.a8fb4df0.chunk.js.map