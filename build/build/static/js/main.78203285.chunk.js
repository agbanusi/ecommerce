(this.webpackJsonpbuild=this.webpackJsonpbuild||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/tablet.e6ea4f96.svg"},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/OAYTMM0.67c89b87.jpg"},function(e,t,a){e.exports=a.p+"static/media/OSO1XY0.1ee1a6d3.jpg"},function(e,t,a){e.exports=a.p+"static/media/photo-of-a-macbook-air-812264.de6eab7e.jpg"},function(e,t,a){e.exports=a.p+"static/media/semi-opened-laptop-computer-turned-on-on-table-2047905.5afc248f.jpg"},function(e,t,a){e.exports=a.p+"static/media/space-gray-iphone-5s-1294886.774e2204.jpg"},function(e,t,a){e.exports=a.p+"static/media/web-site.c628a067.png"},function(e,t,a){e.exports=a.p+"static/media/black-corded-headset-205926.1e525759.jpg"},function(e,t,a){e.exports=a.p+"static/media/engine-505489_640.abcec962.jpg"},function(e,t,a){e.exports=a.p+"static/media/spark-plug-32083_640.1e8a8715.png"},function(e,t,a){e.exports=a.p+"static/media/transport-3366391_640.5d62a91c.jpg"},function(e,t,a){e.exports=a.p+"static/media/candle-3992363_640.9c7e5a45.jpg"},function(e,t,a){e.exports=a.p+"static/media/caps-1937013_640.c736e103.jpg"},function(e,t,a){e.exports=a.p+"static/media/automobile-958185_640.00f6cfd2.jpg"},function(e,t,a){e.exports=a.p+"static/media/rim-2971142_640.106f474e.jpg"},function(e,t,a){e.exports=a.p+"static/media/cart3.b74997a5.svg"},function(e,t,a){e.exports=a.p+"static/media/console.15b88b6e.svg"},function(e,t,a){e.exports=a.p+"static/media/headphones.d63f537b.svg"},function(e,t,a){e.exports=a.p+"static/media/online-shop.3bace13c.svg"},function(e,t,a){e.exports=a.p+"static/media/responsive.343e7684.svg"},function(e,t,a){e.exports=a.p+"static/media/shopping.3b9314b2.svg"},function(e,t,a){e.exports=a.p+"static/media/smartwatch.ef060071.svg"},function(e,t,a){e.exports=a.p+"static/media/tv-monitor.b2dda8d9.svg"},function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},,function(e,t,a){e.exports=a(63)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r,s,i=a(0),l=a.n(i),o=a(20),c=a.n(o),m=(a(51),a(52),a(5)),u=a(6),d=a(8),p=a(7),h=a(1),g=(a(53),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.firstName,r=t.lastName,s=t.email,i=t.password,l=t.password2;""!==s&&""!==i&&""!==a&&""!=r||(document.getElementById("notify").innerHTML="Required fields need to be filled"),i==l?fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:a,lastName:r,email:s,password:i})}).then((function(e){return e.json()})).then((function(e){"Failed"==e.id?document.getElementById("notify").innerHTML="You have already registered":(console.log(e.id,e),n.setState({redirect:!0,id:e.id}))})):document.getElementById("notify").style.opacity=1},n.handleChange=function(e){switch(e.target.id){case"firstName":n.setState({firstName:e.target.value});break;case"lastName":n.setState({lastName:e.target.value});break;case"email":n.setState({email:e.target.value});break;case"password":n.setState({password:e.target.value});break;case"password2":n.setState({password2:e.target.value}),n.state.password!==e.target.value?document.getElementById("notify").style.opacity=1:document.getElementById("notify").style.opacity=0}},n.state={firstName:"",lastName:"",email:"",password:"",passwords:"",redirect:!1,id:""},n}return Object(u.a)(a,[{key:"render",value:function(){return this.state.redirect?l.a.createElement(h.a,{to:"/shop?id="+this.state.id}):l.a.createElement("div",{className:"welcome"},l.a.createElement("div",{className:"navy"},l.a.createElement("h2",null,"Welcome to E-Shop"),l.a.createElement("nav",null,l.a.createElement("a",{href:"/"},"Log in"))),l.a.createElement("form",{className:"former",onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("h5",null,"First Name"),l.a.createElement("input",{id:"firstName",placeholder:"Enter your First Name",value:this.state.firstName,onChange:this.handleChange,required:!0}),l.a.createElement("h5",null,"Last Name"),l.a.createElement("input",{id:"lastName",placeholder:"Enter your Last Name",value:this.state.lastName,onChange:this.handleChange,required:!0}),l.a.createElement("h5",null,"Email Address"),l.a.createElement("input",{id:"email",placeholder:"Enter your Email Address",value:this.state.email,onChange:this.handleChange,required:!0}),l.a.createElement("h5",null,"Password"),l.a.createElement("input",{id:"password",placeholder:"Enter your password",type:"password",value:this.state.password,onChange:this.handleChange,required:!0}),l.a.createElement("p",{id:"notify",style:{opacity:0,color:"red"}},"The passwords do not match."),l.a.createElement("h5",null,"Retype Password"),l.a.createElement("input",{id:"password2",placeholder:"Re-type your password",type:"password",value:this.state.password2,onChange:this.handleChange,required:!0}),l.a.createElement("h5",null," By clicking on Sign Up, you agree to the terms and conditions and privacy settings. "),l.a.createElement("button",{id:"but",type:"submit"},"Sign Up"))))}}]),a}(i.Component)),f=a(10),E=a(13),v=(a(59),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).getUrlParameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(n.props.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))},n.backer=function(){n.setState({redirect:!0})},n.state={name:"",email:"",redirect:!1},n.handleFile=n.handleFile.bind(Object(E.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;n=this.getUrlParameter("id"),console.log(n),fetch("/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n})}).then((function(e){return e.json()})).then((function(t){if("Failed"!==t.status){if(console.log(t.status),!t.status.pic)try{document.getElementById("profile").src=URL.createObjectURL(t.status.pic)}catch(a){console.log("no picture found")}e.setState({name:t.status.firstName+" "+t.status.lastName,email:t.status.email})}}))}},{key:"handleFile",value:function(e){if(console.log("here"),e.target.files&&e.target.files[0]){var t=URL.createObjectURL(e.target.files[0]),a=new FormData;a.append("pic",e.target.files[0]),document.getElementById("profile").src=t,fetch("/upload?id="+n,{method:"POST",body:a}).then((function(e){return e.json()})).then((function(e){console.log("done")}))}}},{key:"render",value:function(){return this.state.redirect?l.a.createElement(h.a,{to:"/shop?id="+n}):l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"returner"},l.a.createElement("button",{onClick:this.backer},"Shop")),l.a.createElement("div",{className:"bombom"},l.a.createElement("div",{id:"upload"},l.a.createElement("img",{id:"profile",className:"profile",src:"#",alt:"your profile"}),l.a.createElement("i",{className:"fa fa-camera file","aria-hidden":"true"},l.a.createElement("input",{className:"filer",type:"file",id:"file",placeholder:"Upload",onChange:this.handleFile}))),l.a.createElement("hr",{id:"idk"}),l.a.createElement("h1",{id:"name"},this.state.name),l.a.createElement("h3",null,this.state.email)))}}]),a}(i.Component)),N=a(45),b=a(22),y=a.n(b),w=a(23),C=a.n(w),S=a(24),k=a.n(S),j=a(25),O=a.n(j),x=a(26),T=a.n(x),L=a(27),I=a.n(L),M=a(28),B=a.n(M),P=a(29),U=a.n(P),F=a(30),R=a.n(F),G=a(31),H=a.n(G),q=a(32),J=a.n(q),W=a(33),A=a.n(W),D=a(34),_=a.n(D),Y=a(35),V=a.n(Y),K=(a(60),[U.a,R.a,H.a,J.a,A.a,_.a,V.a,y.a,C.a,k.a,O.a,T.a,I.a,B.a]),X=["1,850,000NGN","20,000NGN","150,000NGN","18,000NGN","240,000NGN","1,250,000NGN","300,000NGN","100,000NGN","150,000NGN","800,000NGN","500,000NGN","300,000NGN","50,000NGN","60,000NGN"],$=["lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum","lorem ispum lorem ispum lorem ispum adith lorem ispum lorem ispum","lorem ispum lorem ispum lorem ispum adith lorem ispum lorem ispum","lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum","lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum","lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum","lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum","lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum","lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum","lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum","lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum","lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum","lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum","lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum"],z=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).getUrlParameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(n.props.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))},n.getName=function(e){fetch("/namers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){"Failed"!==e.id&&(n.setState({cart:e.cart}),document.getElementById("messy").innerHTML="Welcome "+e.firstName)}))},n.add=function(e,t){n.state.cart.includes(t)?document.getElementById("mess").innerHTML="Already added to Cart.":fetch("/cart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:e,id:r})}).then((function(e){return e.json()})).then((function(e){"success"==e.status?(document.getElementById("mess").innerHTML="Added to Cart",n.setState({cart:[].concat(Object(N.a)(n.state.cart),[t])})):document.getElementById("mess").innerHTML="Try Again"}))},n.cart=function(){n.setState({redirect:!0})},n.state={cart:[],redirect:!1,identity:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){r=this.getUrlParameter("id"),this.getName(r),this.setState({identity:r}),console.log(r)}},{key:"render",value:function(){var e=this;return this.state.redirect?l.a.createElement(h.a,{to:"/checkout?id="+r}):l.a.createElement("div",{className:"total"},l.a.createElement("div",{className:"head"},l.a.createElement("div",{className:"butonn"},l.a.createElement("p",{className:"cart"},this.state.cart.length),l.a.createElement("p",{className:"homer",onClick:this.cart},"\ud83d\uded2")),l.a.createElement("button",{className:"home buton"},l.a.createElement("a",{href:"/"},"Home")),l.a.createElement("button",{className:"home buton"},l.a.createElement("a",{href:"/profile?id="+r},"Profile"))),l.a.createElement("h1",{id:"messy"}),l.a.createElement("h5",{id:"mess"}," "),l.a.createElement("div",{className:"bodyLin"},K.map((function(t,a){return l.a.createElement("div",{id:a,key:a,className:"show"},l.a.createElement("img",{className:"display",src:t,alt:"logo"}),l.a.createElement("h2",{className:"price"},X[a]),l.a.createElement("p",{className:"describe"},$[a]),l.a.createElement("button",{id:"hover",onClick:function(){e.add({path:t,price:X[a],content:$[a]},a)}},"BUY NOW"))}))),l.a.createElement("footer",{class:"footer"},l.a.createElement("div",{class:"media"},l.a.createElement("i",{class:"fa fa-facebook-official","aria-hidden":"true"},l.a.createElement("a",{href:"facebook"})),l.a.createElement("i",{class:"fa fa-whatsapp","aria-hidden":"true"},l.a.createElement("a",{href:"whatsapp"})),l.a.createElement("i",{class:"fa fa-twitter","aria-hidden":"true"},l.a.createElement("a",{href:"twitter"})),l.a.createElement("i",{class:"fa fa-instagram","aria-hidden":"true"},l.a.createElement("a",{href:"instagram"}))),l.a.createElement("p",null,"\xa9 Agbanusi John")))}}]),a}(i.Component),Q=(a(61),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).learn=function(e){fetch("/checkIn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){"Failed"!==e.id?n.setState({items:e.items}):document.getElementById("tell").innerHTML="Failed to Load Cart, please reload page."}))},n.getUrlParameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(n.props.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))},n.handleSubmit=function(){var e=document.getElementById("tell");e.style.color="red",e.style.marginLeft="40vw",e.innerHTML="This is a test site only.",setTimeout((function(){e.innerHTML=""}),5e3)},n.handleChange=function(e){switch(e.target.id){case"name":n.setState({name:e.target.value});break;case"number":switch(n.setState({number:e.target.value}),e.target.value.length){case 13:console.log(e.target.value.split("")[12]),n.setState({a:e.target.value.split("")[12]});break;case 14:n.setState({b:e.target.value.split("")[13]});break;case 15:n.setState({c:e.target.value.split("")[14]});break;case 16:n.setState({d:e.target.value.split("")[15]})}break;case"date":n.setState({date:e.target.value});break;case"cvv":n.setState({cvv:e.target.value});break;default:n.setState({name:e.target.value})}},n.back=function(){n.setState({redirect:!0})},n.state={a:"\u2022",b:"\u2022",c:"\u2022",d:"\u2022",name:"FirstName LastName",number:"",date:"00/00",cvv:"",items:[],redirect:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){s=this.getUrlParameter("id"),this.learn(s)}},{key:"render",value:function(){return this.state.redirect?l.a.createElement(h.a,{to:"/shop?id="+s}):l.a.createElement("div",{className:"join"},l.a.createElement("p",{id:"tell"}),l.a.createElement("div",{className:"divide"},l.a.createElement("div",{className:"cat"},this.state.items.map((function(e){return l.a.createElement("div",{className:"seen"},l.a.createElement("img",{className:"deen",src:e.path}),l.a.createElement("p",null,e.content),l.a.createElement("h5",null,e.price))})),l.a.createElement("div",{className:"biggy"},l.a.createElement("button",{className:"shop",onClick:this.back},"Back")," ",l.a.createElement("h3",null,"Sub-Total: ",this.state.items.map((function(e){return Number(e.price.replace(",","").slice(0,-3))})).reduce((function(e,t){return e+t}),0)))),l.a.createElement("div",{className:"card"},l.a.createElement("h3",null,"Checkout"),l.a.createElement("div",{className:"showCard"},l.a.createElement("h3",{className:"tie"},"Master Card"),l.a.createElement("h4",{className:"cardName"},this.state.name),l.a.createElement("h3",{className:"mainImp"},"\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ",this.state.a,this.state.b,this.state.c,this.state.d),l.a.createElement("p",{className:"last"},this.state.date)),l.a.createElement("form",null,l.a.createElement("p",{className:"ink"},"Full Name"),l.a.createElement("input",{className:"downer",id:"name",onChange:this.handleChange,value:this.state.name,required:!0}),l.a.createElement("p",{className:"ink"},"Card Number"),l.a.createElement("input",{className:"downer",id:"number",maxlength:"16",onChange:this.handleChange,value:this.state.number,required:!0}),l.a.createElement("div",{className:"share"},l.a.createElement("div",null,l.a.createElement("p",{className:"ink"},"Expiry Date"),l.a.createElement("input",{class:"downer",id:"date",onChange:this.handleChange,value:this.state.date,required:!0})),l.a.createElement("div",null,l.a.createElement("p",{className:"ink"},"CVV"),l.a.createElement("input",{class:"downer",minlength:"3",maxlength:"4",id:"cvv",onChange:this.handleChange,value:this.state.cvv,required:!0}))),l.a.createElement("button",{type:"button",className:"finally",onClick:this.handleSubmit},"Checkout")))))}}]),a}(i.Component)),Z=a(36),ee=a.n(Z),te=a(14),ae=a.n(te),ne=a(37),re=a.n(ne),se=a(38),ie=a.n(se),le=a(39),oe=a.n(le),ce=a(40),me=a.n(ce),ue=a(41),de=a.n(ue),pe=a(42),he=a.n(pe),ge=a(43),fe=a.n(ge),Ee=a(44),ve=a.n(Ee),Ne=(a(62),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e){"email"==e.target.id?n.setState({email:e.target.value}):"password"==e.target.id&&n.setState({password:e.target.value})},n.submit=function(e){var t=n.state,a=t.email,r=t.password;console.log(a),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:r})}).then((function(e){return e.json()})).then((function(e){"Failed"==e.id?document.getElementById("notify").innerHTML="Email or Password is wrong":n.setState({redirect:!0,id:e.id})}))},n.register=function(){n.setState({redirect:!0})},n.state={email:"",passsword:"",redirect:!1,id:""},n}return Object(u.a)(a,[{key:"render",value:function(){return this.state.redirect&&""==this.state.id?l.a.createElement(h.a,{to:"/registration"}):this.state.redirect?l.a.createElement(h.a,{to:"/shop?id="+this.state.id}):l.a.createElement("div",null,l.a.createElement("div",{className:"nav"},l.a.createElement("h2",null,"Welcome to E-Shop"),l.a.createElement("nav",null,l.a.createElement("a",{className:"done",href:"#log"},"Log in"),l.a.createElement("a",{className:"done",href:"/registration"},"Register"))),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"top"},l.a.createElement("img",{alt:"logo",className:"log",src:ve.a})),l.a.createElement("div",{className:"bottom"},l.a.createElement("div",{className:"left"},l.a.createElement("h1",null,"YOU ASK WE DELIVER."),l.a.createElement("h5",null," Get the best of your accessories here, at the cheapest of prices and guess what we also have discount coming up soon enough. Logotech, your one stop shop you can always count on for automotives."),l.a.createElement("button",{className:"shoppered",href:"#log"},"SHOP NOW")),l.a.createElement("div",{className:"right"},l.a.createElement("div",{className:"cover"},l.a.createElement("div",{className:"svg"},this.props.svg))))),l.a.createElement("div",{className:"form"},l.a.createElement("form",{id:"log"},l.a.createElement("h2",null,"Login Form"),l.a.createElement("p",{id:"notify",style:{color:"red"}}),l.a.createElement("div",null,"Email: ",l.a.createElement("input",{id:"email",value:this.state.email,onChange:this.handleChange,required:!0})),l.a.createElement("div",null,"Password: ",l.a.createElement("input",{id:"password",type:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("div",{id:"div"},l.a.createElement("button",{className:"but",id:"sign",type:"button",onClick:this.submit}," Sign In"),l.a.createElement("button",{className:"but",type:"button",id:"reg",onClick:this.register},"Register")))))}}]),a}(i.Component)),be=[l.a.createElement("img",{className:"logose",src:ee.a}),l.a.createElement("img",{className:"logose",src:ae.a}),l.a.createElement("img",{className:"logose",src:re.a}),l.a.createElement("img",{className:"logose",src:ie.a}),l.a.createElement("img",{className:"logose",src:oe.a}),l.a.createElement("img",{className:"logose",src:me.a}),l.a.createElement("img",{className:"logose",src:de.a}),l.a.createElement("img",{className:"logose",src:he.a}),l.a.createElement("img",{className:"logose",src:ae.a}),l.a.createElement("img",{className:"logose",src:fe.a})],ye=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={ind:0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.setState({ind:Math.round(9*Math.random())})}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(Ne,{svg:be[this.state.ind]}))}}]),a}(i.Component);var we=function(){return l.a.createElement(f.a,null,l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/",component:ye}),l.a.createElement(h.b,{path:"/registration",component:g}),l.a.createElement(h.b,{path:"/shop",component:z}),l.a.createElement(h.b,{path:"/profile",component:v}),l.a.createElement(h.b,{path:"/checkout",component:Q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[46,1,2]]]);
//# sourceMappingURL=main.78203285.chunk.js.map