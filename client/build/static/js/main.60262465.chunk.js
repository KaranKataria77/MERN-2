(this.webpackJsonpprojfrontend=this.webpackJsonpprojfrontend||[]).push([[0],{29:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c(3),r=c(5),o=c(2),i=c(13),l="http://localhost:8000/api/",d=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},j=function(e){var t=e.component,c=Object(i.a)(e,["component"]);return Object(n.jsx)(r.b,Object(o.a)(Object(o.a)({},c),{},{render:function(e){return d()&&1===d().user.role?Object(n.jsx)(t,Object(o.a)({},e)):Object(n.jsx)(r.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},b=function(e){var t=e.component,c=Object(i.a)(e,["component"]);return Object(n.jsx)(r.b,Object(o.a)(Object(o.a)({},c),{},{render:function(e){return d()?Object(n.jsx)(t,Object(o.a)({},e)):Object(n.jsx)(r.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},u=c(4),m=(c(29),function(e,t){return e.location.pathname===t?{color:"#2ecc72"}:{color:"#FFFFFF"}}),h=Object(r.g)((function(e){var t=e.history;return Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"nav nav-tabs bg-dark",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(s.b,{style:m(t,"/"),className:"nav-link",to:"/",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(s.b,{style:m(t,"/cart"),className:"nav-link",to:"/cart",children:"Cart"})}),d()&&0===d().user.role&&Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(s.b,{style:m(t,"/user/dashboard"),className:"nav-link",to:"/user/dashboard",children:"U. Dashboard"})}),d()&&1===d().user.role&&Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(s.b,{className:"nav-link",style:m(t,"/admin/dashboard"),to:"/admin/dashboard",children:"A. Dashboard"})}),!d()&&Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(s.b,{className:"nav-link",style:m(t,"/signup"),to:"/signup",children:"Signup"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(s.b,{className:"nav-link",style:m(t,"/signin"),to:"/signin",children:"Signin"})})]}),d()&&Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("span",{className:"nav-link text-warning",onClick:function(){!function(e){if("undefined"!==typeof window)localStorage.removeItem("jwt"),e(),fetch("".concat(l,"/signout"),{method:"GET"}).then((function(e){return console.log("Signout successs")})).catch((function(e){return console.log(e)}))}((function(){t.push("/")}))},children:"Signout"})})]})})}));var O=function(e){var t=e.title,c=e.description,a=void 0===c?"My Description":c,s=e.className,r=void 0===s?"bg-dark text-white p-4":s,o=e.children;return Object(n.jsxs)("div",{children:[Object(n.jsx)(h,{}),Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsxs)("div",{className:"jumbotron bg-dark text-white text-center",children:[Object(n.jsx)("h2",{className:"display-4",children:t}),Object(n.jsx)("p",{className:"lead",children:a})]}),Object(n.jsx)("div",{className:r,children:o})]}),Object(n.jsxs)("footer",{className:"footer bg-dark mt-auto py-3",children:[Object(n.jsxs)("div",{className:"container-fluid bg-success text-white text-center py-3",children:[Object(n.jsx)("h4",{children:"If you got any question, feel free to reach out!"}),Object(n.jsx)("button",{className:"btn btn-warning btn-lg",children:"Contact Us"})]}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("span",{className:"text-muted",children:["An Amazing ",Object(n.jsx)("span",{className:"text-white",children:"MERN"})," Bootcamp"]})})]})]})};var p=function(e){var t=e.product,c=t?"".concat(l,"/product/photo/").concat(t._id):"https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";return Object(n.jsx)("div",{className:"rounded border border-success p-2",children:Object(n.jsx)("img",{src:c,alt:"",style:{maxHeight:"100%",maxWidth:"100%"},className:"mb-3 rounded"})})},x=function(e){var t=e.product,c=e.addtoCart,s=void 0===c||c,i=e.removeFromCart,l=void 0!==i&&i,d=e.setReload,j=void 0===d?function(e){return e}:d,b=e.reload,m=void 0===b?void 0:b,h=Object(a.useState)(!1),O=Object(u.a)(h,2),x=O[0],f=O[1],g=Object(a.useState)(t.count),N=Object(u.a)(g,2),v=(N[0],N[1],t?t.name:"A Photo from pexels"),y=t?t.description:"A photo from pexels",w=t?t.price:"A photo from pexels",S=function(){!function(e,t){var c=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(c=JSON.parse(localStorage.getItem("cart"))),c.push(Object(o.a)(Object(o.a)({},e),{},{count:1})),localStorage.setItem("cart",JSON.stringify(c)),t())}(t,(function(){return f(!0)}))};return Object(n.jsxs)("div",{className:"card text-white bg-dark border border-info ",children:[Object(n.jsx)("div",{className:"card-header lead",children:v}),Object(n.jsxs)("div",{className:"card-body",children:[function(e){if(x)return Object(n.jsx)(r.a,{to:"/cart"})}(),Object(n.jsx)(p,{product:t}),Object(n.jsx)("p",{className:"lead bg-success font-weight-normal text-wrap",children:y}),Object(n.jsxs)("p",{className:"btn btn-success rounded  btn-sm px-4",children:["$ ",w]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12",children:function(e){return e&&Object(n.jsx)("button",{onClick:S,className:"btn btn-block btn-outline-success mt-2 mb-2",children:"Add to Cart"})}(s)}),Object(n.jsx)("div",{className:"col-12",children:function(e){return e&&Object(n.jsx)("button",{onClick:function(){!function(e){var t=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(c,n){c._id===e&&t.splice(n,1)})),localStorage.setItem("cart",JSON.stringify(t)))}(t._id),j(!m)},className:"btn btn-block btn-outline-danger mt-2 mb-2",children:"Remove from cart"})}(l)})]})]})]})};var f=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(!1),i=Object(u.a)(r,2),d=i[0],j=i[1],b=function(){fetch("".concat(l,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){console.log(e),e.error?j(Object(o.a)(Object(o.a)({},d),{},{error:!0})):s(e)}))};return Object(a.useEffect)((function(){b()}),[]),console.log("API is",l),Object(n.jsx)(O,{title:"My Home page",description:"Welcome to the T-Shirt Store",children:Object(n.jsx)("div",{className:"row text-center",children:Object(n.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(n.jsx)("div",{className:"col-3 mb-4",children:Object(n.jsx)(x,{product:e})},t)}))})})})},g=c(10);var N=function(){var e=Object(a.useState)({email:"a@gmail.com",password:"12345",error:"",loading:!1,didRedirect:!1}),t=Object(u.a)(e,2),c=t[0],s=t[1],i=c.email,j=c.password,b=c.error,m=c.loading,h=c.didRedirect,p=d().user,x=function(e){return function(t){s(Object(o.a)(Object(o.a)({},c),{},Object(g.a)({error:!1},e,t.target.value)))}},f=function(e){e.preventDefault(),s(Object(o.a)(Object(o.a)({},c),{},{error:!1,loading:!0})),function(e){return fetch("".concat(l,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({email:i,password:j}).then((function(e){e.error?s(Object(o.a)(Object(o.a)({},c),{},{error:e.error,loading:!1})):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){s(Object(o.a)(Object(o.a)({},c),{},{didRedirect:!0}))}))})).catch(console.log("signin request failed"))};return Object(n.jsxs)(O,{title:"Sign in page",description:"A page for user to Sign in!",children:[m&&Object(n.jsx)("div",{className:"alert alert-info",children:Object(n.jsx)("h2",{children:"Loading..."})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(n.jsx)("div",{className:"alert alert-danger",style:{display:b?"":"none"},children:b})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"text-light",children:"Email"}),Object(n.jsx)("input",{onChange:x("email"),value:i,className:"form-control",type:"email"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"text-light",children:"Password"}),Object(n.jsx)("input",{onChange:x("password"),value:j,className:"form-control",type:"password"})]}),Object(n.jsx)("button",{onClick:f,className:"btn btn-success btn-block",children:"Submit"})]})})}),h?p&&1===p.role?Object(n.jsx)(r.a,{to:"/admin/dashboard"}):Object(n.jsx)(r.a,{to:"/user/dashboard"}):d()?Object(n.jsx)(r.a,{to:"/"}):void 0,Object(n.jsx)("p",{className:"text-white text-center",children:JSON.stringify(c)})]})},v=function(){var e=Object(a.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(u.a)(e,2),c=t[0],r=t[1],i=c.name,d=c.email,j=c.password,b=c.error,m=c.success,h=function(e){return function(t){r(Object(o.a)(Object(o.a)({},c),{},Object(g.a)({error:!1},e,t.target.value)))}},p=function(e){var t;e.preventDefault(),r(Object(o.a)(Object(o.a)({},c),{},{error:!1})),(t={name:i,email:d,password:j},fetch("".concat(l,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?r(Object(o.a)(Object(o.a)({},c),{},{error:e.error,success:!1})):r(Object(o.a)(Object(o.a)({},c),{},{name:"",email:"",password:"",error:"",success:!0}))})).catch(console.log("Error in signup"))};return Object(n.jsxs)(O,{title:"Sign up page",description:"A page for user to Sign up!",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(n.jsxs)("div",{className:"alert alert-success",style:{display:m?"":"none"},children:["New Account was created successfully. Please ",Object(n.jsx)(s.b,{to:"/signin",children:"Login here"})]})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(n.jsx)("div",{className:"alert alert-danger",style:{display:b?"":"none"},children:b})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"text-light",children:"Name"}),Object(n.jsx)("input",{className:"form-control",onChange:h("name"),type:"text",value:i})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"text-light",children:"Email"}),Object(n.jsx)("input",{className:"form-control",onChange:h("email"),type:"email",value:d})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"text-light",children:"Password"}),Object(n.jsx)("input",{className:"form-control",onChange:h("password"),type:"password",value:j})]}),Object(n.jsx)("button",{onClick:p,className:"btn btn-success btn-block",children:"Submit"})]})})}),Object(n.jsx)("p",{className:"text-white text-center",children:JSON.stringify(c)})]})};var y=function(){return Object(n.jsx)(O,{title:"UserDashBoard Page",children:Object(n.jsx)("h1",{children:"This is userDashboard Page"})})};var w=function(){var e=d().user,t=e.name,c=e.email;return e.role,Object(n.jsx)(O,{title:"Welcome to Admin Area",description:"Manage all of your Products here",className:"container bg-success p-4",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-3",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("h4",{className:"card-header bg-dark text-white",children:"Admin Navigation"}),Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(s.b,{to:"/admin/create/category",className:"nav-link text-success",children:"Create Categories"})}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(s.b,{to:"/admin/categories",className:"nav-link text-success",children:"Manage Categories"})}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(s.b,{to:"/admin/create/product",className:"nav-link text-success",children:"Create Products"})}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(s.b,{to:"/admin/products",className:"nav-link text-success",children:"Manage Products"})}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(s.b,{to:"/admin/orders",className:"nav-link text-success",children:"Mangae Orders"})})]})]})}),Object(n.jsx)("div",{className:"col-9",children:Object(n.jsxs)("div",{className:"card mb-4",children:[Object(n.jsx)("h4",{className:"card-header",children:"Admin Information"}),Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("span",{className:"badge badge-success mr-2",children:"Name: "})," ",t]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("span",{className:"badge badge-success mr-2",children:"Email: "})," ",c]}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)("span",{className:"badge badge-danger",children:"Admin Area "})})]})]})})]})})},S=function(){return fetch("".concat(l,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))};var C=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],r=t[1],o=Object(a.useState)(!1),i=Object(u.a)(o,2),j=i[0],b=i[1],m=Object(a.useState)(!1),h=Object(u.a)(m,2),p=h[0],x=h[1],f=d(),g=f.user,N=f.token,v=function(e){b(""),r(e.target.value)},y=function(e){e.preventDefault(),b(""),x(!1),function(e,t,c){return fetch("".concat(l,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(c)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(g._id,N,{name:c}).then((function(e){e.error?b(!0):(b(""),x(!0),r(""))}))};return Object(n.jsx)(O,{title:"Create a Category",description:"Add a new Category for new T-shirt",className:"container bg-info p-4",children:Object(n.jsx)("div",{className:"row bg-white rounded",children:Object(n.jsxs)("div",{className:"col-md-8 offset-md-2",children:[function(){if(p)return Object(n.jsx)("h4",{className:"text-success",children:"Category created"})}(),function(){if(j)return Object(n.jsx)("h4",{className:"text-danger",children:"Failed to create category"})}(),Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("p",{className:"lead",children:"Enter the Category"}),Object(n.jsx)("input",{type:"text",className:"form-control my-3",onChange:v,value:c,autoFocus:!0,required:!0,placeholder:"For Ex. Summer"}),Object(n.jsx)("button",{className:"btn btn-outline-info",onClick:y,children:"Create Category"})]})}),Object(n.jsx)("div",{className:"mt-5",children:Object(n.jsx)(s.b,{className:"btn btn-sm btn-success mb-3",to:"/admin/dashboard",children:"Admin Home"})})]})})})};var k=function(){var e=d(),t=e.user,c=e.token,r=Object(a.useState)([]),o=Object(u.a)(r,2),i=o[0],j=o[1],b=function(){S().then((function(e){e.error?console.log(e.error):j(e)}))};Object(a.useEffect)((function(){b()}),[]);var m=function(e){(function(e,t,c){return fetch("".concat(l,"/category/").concat(c,"/").concat(e),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(t._id,c,e).then((function(e){e.error?console.log(e.error):b()}))};return Object(n.jsxs)(O,{title:"Welcome admin",description:"Manage products here",children:[Object(n.jsx)("h2",{className:"mb-4",children:"All products:"}),Object(n.jsx)(s.b,{className:"btn btn-info",to:"/admin/dashboard",children:Object(n.jsx)("span",{className:"",children:"Admin Home"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h2",{className:"text-center text-white my-3",children:"Total 3 products"}),i.map((function(e,t){return Object(n.jsxs)("div",{className:"row text-center mb-2 ",children:[Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("h3",{className:"text-white text-left",children:e.name})}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)(s.b,{className:"btn btn-success",to:"/admin/category/update/".concat(e._id),children:Object(n.jsx)("span",{className:"",children:"Update"})})}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("button",{onClick:function(){m(e._id)},className:"btn btn-danger",children:"Delete"})})]},t)}))]})})]})};var A=function(){var e=d(),t=e.user,c=e.token,r=Object(a.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getRedirect:!1,formData:""}),i=Object(u.a)(r,2),j=i[0],b=i[1],m=j.name,h=j.description,p=j.price,x=j.stock,f=j.categories,N=(j.category,j.loading,j.error),v=j.createdProduct,y=(j.getRedirect,j.formData);Object(a.useEffect)((function(){S().then((function(e){console.log(e),e.error?b(Object(o.a)(Object(o.a)({},j),{},{error:e.error})):b(Object(o.a)(Object(o.a)({},j),{},{categories:e,formData:new FormData}))}))}),[]);var w=function(e){e.preventDefault(),b(Object(o.a)(Object(o.a)({},j),{},{error:"",loading:!0})),function(e,t,c){return fetch("".concat(l,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:c}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t._id,c,y).then((function(e){e.error?b(Object(o.a)(Object(o.a)({},j),{},{error:e.error})):b(Object(o.a)(Object(o.a)({},j),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name}))}))},C=function(e){return function(t){var c="photo"===e?t.target.files[0]:t.target.value;y.set(e,c),b(Object(o.a)(Object(o.a)({},j),{},Object(g.a)({},e,c)))}};return Object(n.jsxs)(O,{title:"Add a product here!",description:"Welcome to product creatation section",className:"container bg-info p-4",children:[Object(n.jsx)(s.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3",children:"Admin Home"}),Object(n.jsx)("div",{className:"row bg-dark text-white rounded",children:Object(n.jsxs)("div",{className:"col-md-8 offset-md-2",children:[Object(n.jsx)("div",{className:"alert alert-success mt-3",style:{display:v?"":"none"},children:Object(n.jsxs)("h4",{children:[v," created succesfully"]})}),Object(n.jsx)("div",{className:"alert alert-danger mt-3",style:{display:N?"":"none"},children:Object(n.jsx)("h4",{children:N})}),Object(n.jsxs)("form",{children:[Object(n.jsx)("span",{children:"Post photo"}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("label",{className:"btn btn-block btn-success",children:Object(n.jsx)("input",{onChange:C("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"})})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{onChange:C("name"),name:"photo",className:"form-control",placeholder:"Name",value:m})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("textarea",{onChange:C("description"),name:"photo",className:"form-control",placeholder:"Description",value:h})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{onChange:C("price"),type:"number",className:"form-control",placeholder:"Price",value:p})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("select",{onChange:C("category"),className:"form-control",placeholder:"Category",children:[Object(n.jsx)("option",{children:"Select"}),f&&f.map((function(e,t){return Object(n.jsx)("option",{value:e._id,children:e.name},t)}))]})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{onChange:C("stock"),type:"number",className:"form-control",placeholder:"Quantity",value:x})}),Object(n.jsx)("button",{type:"submit",onClick:w,className:"btn btn-outline-success mb-3",children:"Create Product"})]})]})})]})};var E=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],o=d(),i=o.user,j=o.token,b=function(){fetch("".concat(l,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?console.log(e.error):r(e)}))};Object(a.useEffect)((function(){b()}),[]);var m=function(e){(function(e,t,c){return fetch("".concat(l,"/product/").concat(t,"/").concat(e),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(c)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(i._id,e,j).then((function(e){e.error?console.log(e.error):b()}))};return Object(n.jsxs)(O,{title:"Welcome admin",description:"Manage products here",children:[Object(n.jsx)("h2",{className:"mb-4",children:"All products:"}),Object(n.jsx)(s.b,{className:"btn btn-info",to:"/admin/dashboard",children:Object(n.jsx)("span",{className:"",children:"Admin Home"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h2",{className:"text-center text-white my-3",children:"Total 3 products"}),c.map((function(e,t){return Object(n.jsxs)("div",{className:"row text-center mb-2 ",children:[Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("h3",{className:"text-white text-left",children:e.name})}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)(s.b,{className:"btn btn-success",to:"/admin/product/update/".concat(e._id),children:Object(n.jsx)("span",{className:"",children:"Update"})})}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("button",{onClick:function(){m(e._id)},className:"btn btn-danger",children:"Delete"})})]},t)}))]})})]})};var P=function(e){var t=e.match,c=d(),r=c.user,i=c.token,j=Object(a.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getRedirect:!1,formData:""}),b=Object(u.a)(j,2),m=b[0],h=b[1],p=m.name,x=m.description,f=m.price,N=m.stock,v=m.categories,y=(m.category,m.loading,m.error),w=m.createdProduct,C=(m.getRedirect,m.formData),k=function(e){(function(e){return fetch("".concat(l,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?h(Object(o.a)(Object(o.a)({},m),{},{error:e.error})):(h(Object(o.a)(Object(o.a)({},m),{},{name:e.name,description:e.description,price:e.price,category:e.category._id,stock:e.stock,formData:new FormData})),A())}))},A=function(){S().then((function(e){e.error?h(Object(o.a)(Object(o.a)({},m),{},{error:e.error})):h({categories:e,formData:new FormData})}))};Object(a.useEffect)((function(){k(t.params.productId)}),[]);var E=function(e){e.preventDefault(),h(Object(o.a)(Object(o.a)({},m),{},{error:"",loading:!0})),function(e,t,c,n){return fetch("".concat(l,"/product/").concat(e,"/").concat(t),{method:"PUt",headers:{Accept:"application/json",Authorization:"Bearer ".concat(c)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t.params.productId,r._id,i,C).then((function(e){e.error?h(Object(o.a)(Object(o.a)({},m),{},{error:e.error})):h(Object(o.a)(Object(o.a)({},m),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name}))}))},P=function(e){return function(t){var c="photo"===e?t.target.files[0]:t.target.value;C.set(e,c),h(Object(o.a)(Object(o.a)({},m),{},Object(g.a)({},e,c)))}};return Object(n.jsxs)(O,{title:"Add a product here!",description:"Welcome to product creatation section",className:"container bg-info p-4",children:[Object(n.jsx)(s.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3",children:"Admin Home"}),Object(n.jsx)("div",{className:"row bg-dark text-white rounded",children:Object(n.jsxs)("div",{className:"col-md-8 offset-md-2",children:[Object(n.jsx)("div",{className:"alert alert-success mt-3",style:{display:w?"":"none"},children:Object(n.jsxs)("h4",{children:[w," updated succesfully"]})}),Object(n.jsx)("div",{className:"alert alert-danger mt-3",style:{display:y?"":"none"},children:Object(n.jsx)("h4",{children:y})}),Object(n.jsxs)("form",{children:[Object(n.jsx)("span",{children:"Post photo"}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("label",{className:"btn btn-block btn-success",children:Object(n.jsx)("input",{onChange:P("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"})})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{onChange:P("name"),name:"photo",className:"form-control",placeholder:"Name",value:p})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("textarea",{onChange:P("description"),name:"photo",className:"form-control",placeholder:"Description",value:x})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{onChange:P("price"),type:"number",className:"form-control",placeholder:"Price",value:f})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("select",{onChange:P("category"),className:"form-control",placeholder:"Category",children:[Object(n.jsx)("option",{children:"Select"}),v&&v.map((function(e,t){return Object(n.jsx)("option",{value:e._id,children:e.name},t)}))]})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{onChange:P("stock"),type:"number",className:"form-control",placeholder:"Quantity",value:N})}),Object(n.jsx)("button",{type:"submit",onClick:E,className:"btn btn-outline-success mb-3",children:"Update Product"})]})]})})]})};var D=function(e){var t=e.match,c=Object(a.useState)(""),r=Object(u.a)(c,2),i=r[0],j=r[1],b=Object(a.useState)(!1),m=Object(u.a)(b,2),h=m[0],p=m[1],x=Object(a.useState)(!1),f=Object(u.a)(x,2),g=f[0],N=f[1],v=d(),y=v.user,w=v.token,S=function(e){(function(e){return fetch("".concat(l,"/category/").concat(e),{method:"GET",header:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){console.log(e),console.log(e.name),e.error?p(Object(o.a)(Object(o.a)({},h),{},{error:!1})):j(Object(o.a)(Object(o.a)({},i),{},{name:e.name}))}))};Object(a.useEffect)((function(){S(t.params.categoryId)}),[]);var C=function(e){p(""),j(e.target.value)},k=function(e){e.preventDefault(),p(""),N(!1),function(e,t,c,n){return fetch("".concat(l,"/category/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(c)},body:JSON.stringify(n)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t.params.categoryId,y._id,w,{name:i}).then((function(e){e.error?p(!0):(p(""),N(!0),j(""))}))};return Object(n.jsx)(O,{title:"Create a Category",description:"Add a new Category for new T-shirt",className:"container bg-info p-4",children:Object(n.jsx)("div",{className:"row bg-white rounded",children:Object(n.jsxs)("div",{className:"col-md-8 offset-md-2",children:[function(){if(g)return Object(n.jsx)("h4",{className:"text-success",children:"Category updated"})}(),function(){if(h)return Object(n.jsx)("h4",{className:"text-danger",children:"Failed to update category"})}(),Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("p",{className:"lead",children:"Enter the Category"}),Object(n.jsx)("input",{type:"text",className:"form-control my-3",onChange:C,value:i.name,autoFocus:!0,required:!0,placeholder:"For Ex. Summer"}),Object(n.jsx)("button",{className:"btn btn-outline-info",onClick:k,children:"Update Category"})]})}),Object(n.jsx)("div",{className:"mt-5",children:Object(n.jsx)(s.b,{className:"btn btn-sm btn-success mb-3",to:"/admin/dashboard",children:"Admin Home"})})]})})})},T=c(20),I=c.n(T);var F=function(e){var t=e.products,c=e.setReload,r=void 0===c?function(e){return e}:c,o=e.reload,i=void 0===o?void 0:o,j=Object(a.useState)({loading:!1,success:!1,error:"",address:""}),b=Object(u.a)(j,2),m=(b[0],b[1],d()&&d().token,d()&&d().user._id,function(){var e=0;return t.map((function(t){e+=t.price})),e}),h=function(e){var c={token:e,products:t};return fetch("".concat(l,"/stripepayment"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){console.log(e);var t,c=e.status;console.log("Status is",c),t=function(){console.log("did we got a crash")},void 0!==typeof window&&(localStorage.removeItem("cart"),localStorage.setItem("cart",JSON.stringify([])),t()),r(!i)})).catch((function(e){return console.log(e)}))};return Object(n.jsx)("div",{children:Object(n.jsxs)("h3",{children:["Stripe Checkout ",m(),d()?Object(n.jsx)(I.a,{stripeKey:"pk_test_51Hp6GKHx52WIbetHYK1FEAu33J0FKgYyJ5FMIpa4BcSHcOzWQXEIV7gQz2woAZ5SL3HcOrwaKzAwpyVyUo2LjwD800Wy41ZVgG",token:h,amount:100*m(),name:"Buy T-Shirt",shippingAddress:!0,billingAddress:!0,children:Object(n.jsx)("button",{className:"btn btn-success",children:"Pay with stripe"})}):Object(n.jsx)(s.b,{to:"/signin",children:Object(n.jsx)("button",{className:"btn btn-warning",children:"Sign in"})})]})})};var J=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(!1),o=Object(u.a)(r,2),i=o[0],l=o[1];return Object(a.useEffect)((function(){s(function(){if(void 0!==typeof window&&localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))}())}),[i]),Object(n.jsx)(O,{title:"Cart Page",description:"Ready to checkout",children:Object(n.jsxs)("div",{className:"row text-center",children:[Object(n.jsx)("div",{className:"col-6",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"This section is to load products"}),c.map((function(e,t){return Object(n.jsx)(x,{product:e,removeFromCart:!0,addtoCart:!1,setReload:l,reload:i},t)}))]})}),Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)(F,{products:c,setReload:l})})]})})};var _=function(){return Object(n.jsx)(s.a,{children:Object(n.jsxs)(r.d,{children:[Object(n.jsx)(r.b,{path:"/",exact:!0,component:f}),Object(n.jsx)(r.b,{path:"/signup",exact:!0,component:v}),Object(n.jsx)(r.b,{path:"/signin",exact:!0,component:N}),Object(n.jsx)(r.b,{path:"/cart",exact:!0,component:J}),Object(n.jsx)(b,{path:"/user/dashboard",exact:!0,component:y}),Object(n.jsx)(j,{path:"/admin/dashboard",exact:!0,component:w}),Object(n.jsx)(j,{path:"/admin/create/category",exact:!0,component:C}),Object(n.jsx)(j,{path:"/admin/categories",exact:!0,component:k}),Object(n.jsx)(j,{path:"/admin/create/product",exact:!0,component:A}),Object(n.jsx)(j,{path:"/admin/products",exact:!0,component:E}),Object(n.jsx)(j,{path:"/admin/product/update/:productId",exact:!0,component:P}),Object(n.jsx)(j,{path:"/admin/category/update/:categoryId",exact:!0,component:D})]})})},H=c(21);c.n(H).a.render(Object(n.jsx)(_,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.60262465.chunk.js.map