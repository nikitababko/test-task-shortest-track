(this["webpackJsonpshortest-track"]=this["webpackJsonpshortest-track"]||[]).push([[0],{146:function(e,t,n){"use strict";n.r(t);var a=n(23),r={};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case a.a.ALERT:return o;default:return e}}},147:function(e,t,n){"use strict";n.r(t);var a=n(23),r={};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case a.a.AUTH:return{isAuth:o.isAuth,user:o.user};default:return e}}},148:function(e,t,n){"use strict";n.r(t);var a=n(116),r=n(23),o=[];t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,n=t.type,s=t.payload;switch(n){case r.a.ADD_TODO:return Object(a.a)(s);default:return e}}},171:function(e,t,n){},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={AUTH:"AUTH",ALERT:"ALERT",ADD_TODO:"ADD_TODO"}},242:function(e,t,n){},243:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){var a={"./":85,"./alert":146,"./alert.js":146,"./auth":147,"./auth.js":147,"./index":85,"./index.js":85,"./todos":148,"./todos.js":148};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=252},254:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(31),o=n.n(r),s=n(35),c=n(75),u=n(25),i=n(26),l=n(30),d=n(29),p=n(24),h=n.n(p),f=n(40),b=[{id:"60d8122b2d4d0838d09e9b02",username:"nikita",password:"asdasd"},{id:"60d98866899c2c2b80ad1ebf",username:"sergey",password:"asdasd"},{id:"60d9a3cb899c2c2b80ad1ec0",username:"daria",password:"asdasd"}],j=[],O=function(){function e(){Object(u.a)(this,e)}return Object(i.a)(e,null,[{key:"createUsers",value:function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("users",JSON.stringify(b));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",JSON.parse(localStorage.getItem("users")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"createTodos",value:function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("todos",JSON.stringify(t||j));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTodos",value:function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",JSON.parse(localStorage.getItem("todos")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),m=n(68),v=n(27),y=n(257),g=n(53),x=n(116),T=n(23),w=function(e,t){return function(){var n=Object(f.a)(h.a.mark((function n(a){var r,o,s;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,O.getTodos();case 3:if(r=n.sent,o=Object(x.a)(r),s={id:(new Date).valueOf(),title:e.title,description:e.description,completed:!1,date:(new Date).toLocaleString(),userId:t.id},o.push(s),o.sort((function(e,t){return e.completed-t.completed})),!r){n.next=13;break}return n.next=11,O.createTodos(o);case 11:n.next=16;break;case 13:return n.next=15,O.createTodos(o);case 15:localStorage.setItem("todos",JSON.stringify(s));case 16:a({type:T.a.ADD_TODO,payload:o}),a({type:T.a.ALERT,payload:{status:"success",message:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430"}}),n.next=23;break;case 20:n.prev=20,n.t0=n.catch(0),a({type:T.a.ALERT,payload:{status:"warning",message:n.t0}});case 23:case"end":return n.stop()}}),n,null,[[0,20]])})));return function(e){return n.apply(this,arguments)}}()},A=function(){return function(){var e=Object(f.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getTodos();case 3:n=e.sent,t({type:T.a.ADD_TODO,payload:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:T.a.ALERT,payload:{status:"warning",message:e.t0}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},k=n(259),S=n(260),D=(n(171),n(6)),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){e.props.handleAuth(t)},e.handleSubmitFailed=function(e){console.log("Failed:",e)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.history.push("/auth")}},{key:"render",value:function(){return Object(D.jsx)("div",{className:"auth",children:Object(D.jsxs)(k.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:this.handleSubmit,onFinishFailed:this.handleSubmitFailed,autoComplete:"off",children:[Object(D.jsx)(k.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 username!"}],children:Object(D.jsx)(S.a,{})}),Object(D.jsx)(k.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c!"}],children:Object(D.jsx)(S.a.Password,{})}),Object(D.jsx)(k.a.Item,{wrapperCol:{offset:8,span:16},children:Object(D.jsx)(g.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})}}]),n}(a.Component),F=Object(v.g)(Object(s.b)((function(e){return{isAuth:e.auth.isAuth}}),(function(e){return{handleAuth:function(t){return e((n=t,function(){var e=Object(f.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getUsers();case 3:a=e.sent,(r=a.filter((function(e){return e.username===n.username})))&&(localStorage.setItem("user",JSON.stringify(Object(m.a)({},r[0]))),t({type:T.a.AUTH,payload:{isAuth:!0,user:r[0]}})),t({type:T.a.ALERT,payload:{status:"success",message:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0448\u043b\u0438"}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:T.a.ALERT,payload:{status:"warning",message:e.t0}});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()));var n}}}))(C)),R=(n(242),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.getTodos()}},{key:"componentDidUpdate",value:function(){this.props.getTodos()}},{key:"render",value:function(){return Object(D.jsx)(G,{})}}]),n}(a.Component)),N=Object(s.b)((function(e){return{user:e.user}}),(function(e){return{getTodos:function(){return e(A())}}}))(R),I=n(258),L=n(82),E=(n(243),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.user,a=e.onTodoRemove;return Object(D.jsx)("div",{className:"todo-form",children:Object(D.jsx)(I.b,{locale:{emptyText:Object(D.jsx)(L.a,{description:Object(D.jsx)("span",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447 \u043f\u0443\u0441\u0442"})})},dataSource:t.filter((function(e){return e.userId===n.id})),renderItem:function(e){return e.userId===n.id&&Object(D.jsx)(Q,{todo:e,onTodoRemove:a})},pagination:{position:"bottom",pageSize:10}})})}}]),n}(a.Component)),M=n(264),U=(n(249),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onFinish=function(t){e.props.onFormSubmit(t)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(D.jsx)("div",{className:"todo-form",children:Object(D.jsxs)(k.a,{onFinish:this.onFinish,layout:"horizontal",className:"todo-form",children:[Object(D.jsx)(k.a.Item,{name:"title",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0437\u0430\u0434\u0430\u0447\u0438"}],children:Object(D.jsx)(S.a,{placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0437\u0430\u0434\u0430\u0447\u0438"})}),Object(D.jsx)(k.a.Item,{name:"description",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}],children:Object(D.jsx)(S.a,{placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"})}),Object(D.jsxs)(g.a,{type:"primary",htmlType:"submit",block:!0,children:[Object(D.jsx)(M.a,{}),"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"]})]})})}}]),n}(a.Component)),_=n(263),H=n(262),J=n(261),V=(n(250),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todo,n=e.onTodoRemove,a=e.showModal,r=e.isModalVisible,o=e.handleOk,s=e.handleCancel,c=e.handleToggleTodoStatus;return Object(D.jsx)("div",{className:"ant-list-items__container",children:Object(D.jsxs)(I.b.Item,{actions:[Object(D.jsx)(_.a,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443?",onConfirm:function(){n(t)},children:Object(D.jsx)(g.a,{className:"remove-todo-button",type:"primary",danger:!0,children:"X"})})],className:"list-item",children:[Object(D.jsx)(g.a,{type:"primary",onClick:a,className:"todo-tag",danger:!t.completed,children:t.title}),Object(D.jsx)(H.a,{onChange:function(){return c(t)},defaultChecked:t.completed}),Object(D.jsx)(J.a,{title:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h3",{children:t.title})," ",Object(D.jsx)("span",{className:"modal-date",children:t.date})]}),visible:r,onOk:o,onCancel:s,footer:null,children:Object(D.jsx)("p",{children:t.description})})]},t.id)})}}]),n}(a.Component)),q=n(162),z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).openNotification=function(e,t){"success"===e&&q.a.success({message:t}),"warning"===e&&q.a.success({message:t}),"info"===e&&q.a.info({message:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.alert;return e&&this.openNotification(e.status,e.message),Object(D.jsx)(D.Fragment,{})}}]),n}(a.Component),B=Object(s.b)((function(e){return{alert:e.alert}}))(z),P=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleFormSubmit=function(t){e.props.handleFormSubmit(t,e.props.user),e.props.getTodos()},e.handleLogout=function(){e.props.handleLogout()},e.handleRemoveTodo=function(t){e.props.handleRemoveTodo(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.user,a=e.isAuth;return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(y.a,{title:Object(D.jsxs)("div",{className:"row",children:[Object(D.jsx)("h3",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"}),Object(D.jsx)(c.b,{to:Y.ADD_TODO,children:Object(D.jsx)(g.a,{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"})}),Object(D.jsx)(g.a,{onClick:this.handleLogout,children:"\u0412\u044b\u0439\u0442\u0438"})]}),children:Object(D.jsx)(E,{todos:t,user:n,isAuth:a,onFormSubmit:this.handleFormSubmit,onTodoRemove:this.handleRemoveTodo})})})}}]),n}(a.Component),G=Object(v.g)(Object(s.b)((function(e){return{todos:e.todos,user:e.auth.user,isAuth:e.auth.isAuth}}),(function(e){return{handleFormSubmit:function(t,n){return e(w(t,n))},getTodos:function(){return e(A())},handleLogout:function(){return e(function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:T.a.AUTH,payload:{isAuth:!1}}),e.next=3,localStorage.removeItem("user");case 3:t({type:T.a.ALERT,payload:{status:"success",message:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u044b\u0448\u043b\u0438"}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},handleRemoveTodo:function(t){return e(function(e){return function(){var t=Object(f.a)(h.a.mark((function t(n){var a,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.getTodos();case 3:return a=t.sent,r=a.filter((function(t){return t.id!==e.id})),console.log(r),t.next=8,O.createTodos(r);case 8:n({type:T.a.ADD_TODO,payload:r}),n({type:T.a.ALERT,payload:{status:"success",message:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430"}}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n({type:T.a.ALERT,payload:{status:"warning",message:t.t0}});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(P)),W=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleFormSubmit=function(t){e.props.handleFormSubmit(t,e.props.user),e.props.history.goBack()},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(y.a,{title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",children:Object(D.jsx)(U,{onFormSubmit:this.handleFormSubmit})})})}}]),n}(a.Component),X=Object(v.g)(Object(s.b)((function(e){return{todos:e.todos,user:e.auth.user}}),(function(e){return{handleFormSubmit:function(t,n){return e(w(t,n))}}}))(W)),K=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isModalVisible:!1},e.showModal=function(){e.setState({isModalVisible:!0})},e.handleOk=function(){e.setState({isModalVisible:!1})},e.handleCancel=function(){e.setState({isModalVisible:!1})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.handleToggleTodoStatus,n=e.todo,a=e.onTodoRemove;return Object(D.jsx)(V,{isModalVisible:this.state.isModalVisible,showModal:this.showModal,handleOk:this.handleOk,handleCancel:this.handleCancel,todo:n,onTodoRemove:a,handleToggleTodoStatus:t})}}]),n}(a.Component),Q=Object(s.b)(null,(function(e){return{handleToggleTodoStatus:function(t){return e(function(e){return function(){var t=Object(f.a)(h.a.mark((function t(n){var a,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.getTodos();case 3:a=t.sent,r=a.map((function(t){return t.id===e.id?Object(m.a)(Object(m.a)({},t),{},{completed:!e.completed}):t})).sort((function(e,t){return e.completed-t.completed})),localStorage.setItem("todos",JSON.stringify(r)),n({type:T.a.ADD_TODO,payload:r}),n({type:T.a.ALERT,payload:{status:"success",message:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430"}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:T.a.ALERT,payload:{status:"warning",message:t.t0}});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(K),Y={AUTH:"/auth",HOME:"/",ADD_TODO:"/add_todo"},Z=[{path:Y.LOGIN,exact:!0,component:F}],$=[{path:Y.HOME,exact:!0,component:N},{path:Y.ADD_TODO,exact:!0,component:X}],ee=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.handleAuth()}},{key:"render",value:function(){return this.props.isAuth?Object(D.jsxs)(v.d,{children:[$.map((function(e){return Object(D.jsx)(v.b,Object(m.a)({},e),e.path)})),Object(D.jsx)(v.a,{to:Y.HOME})]}):Object(D.jsxs)(v.d,{children:[Z.map((function(e){return Object(D.jsx)(v.b,Object(m.a)({},e),e.path)})),Object(D.jsx)(v.a,{to:Y.AUTH})]})}}]),n}(a.Component),te=Object(s.b)((function(e){return{isAuth:e.auth.isAuth}}),(function(e){return{handleAuth:function(){return e(function(){var e=Object(f.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{(n=JSON.parse(localStorage.getItem("user")))&&t({type:T.a.AUTH,payload:{isAuth:!0,user:n}})}catch(a){t({type:T.a.ALERT,payload:{status:"warning",message:a}})}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(ee),ne=(n(251),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){O.createUsers(),localStorage.getItem("todos")||O.createTodos()}},{key:"render",value:function(){return Object(D.jsxs)("div",{className:"main",children:[Object(D.jsx)(B,{}),Object(D.jsx)(te,{})]})}}]),n}(a.Component)),ae=n(80),re=n(154),oe=n(155),se=n(85),ce=[oe.a],ue=Object(ae.createStore)(se.default,Object(re.composeWithDevTools)(ae.applyMiddleware.apply(void 0,ce)));n(253);o.a.render(Object(D.jsx)(s.a,{store:ue,children:Object(D.jsx)(c.a,{children:Object(D.jsx)(ne,{})})}),document.getElementById("root"))},85:function(e,t,n){"use strict";n.r(t);var a=n(80);t.default=Object(a.combineReducers)(["auth","todos","alert"].reduce((function(e,t){return e[t]=n(252)("./".concat(t)).default,e}),{}))}},[[254,1,2]]]);
//# sourceMappingURL=main.04f6bf62.chunk.js.map