(this["webpackJsonppwa-reactjs"]=this["webpackJsonppwa-reactjs"]||[]).push([[0],{178:function(e,a,t){"use strict";t.r(a);var s=t(0),l=t.n(s),n=t(5),c=t.n(n),r=t(10),i=t(11),m=t(14),d=t(12),u=t(15),o=(t(37),t(38),t(13)),E=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.users;return l.a.createElement("div",{className:"list-main"},l.a.createElement("div",{className:"list-header"},"PEOPLE"),l.a.createElement("div",{className:"list"},l.a.createElement("ul",null,e.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(o.b,{to:"/"+e.id},l.a.createElement("div",{className:"list-holder"},l.a.createElement("img",{src:e.profileImage}),l.a.createElement("p",null,e.firstName+" "+e.lastName))))})))))}}]),a}(s.Component),v=t(8),f=(t(43),function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.users;return l.a.createElement("div",{className:"details-main"},l.a.createElement("div",{className:"details-head"},l.a.createElement("div",{className:"details-name"},e.firstName+" "+e.lastName),l.a.createElement("img",{src:e.profileImage})),l.a.createElement("div",{className:"details-body"},l.a.createElement("div",{className:"details-adress"},l.a.createElement("div",{className:"details-header"},"Address"),l.a.createElement("div",{className:"details-info"},l.a.createElement("div",{className:"details-field"},"Country"),l.a.createElement("div",{className:"details-value"},e.address.country)),l.a.createElement("div",{className:"details-info"},l.a.createElement("div",{className:"details-field"},"State"),l.a.createElement("div",{className:"details-value"},e.address.state)),l.a.createElement("div",{className:"details-info"},l.a.createElement("div",{className:"details-field"},"City"),l.a.createElement("div",{className:"details-value"},e.address.city)),l.a.createElement("div",{className:"details-info"},l.a.createElement("div",{className:"details-field"},"Street"),l.a.createElement("div",{className:"details-value"},e.address.streetAddress))),l.a.createElement("div",{className:"details-contact"},l.a.createElement("div",{className:"details-header"},"Contact"),l.a.createElement("div",{className:"details-info"},l.a.createElement("div",{className:"details-field"},"Email"),l.a.createElement("div",{className:"details-value"},e.email)),l.a.createElement("div",{className:"details-info"},l.a.createElement("div",{className:"details-field"},"Phone"),l.a.createElement("div",{className:"details-value"},e.phone)))),l.a.createElement(o.b,{to:"/"},l.a.createElement("div",{className:"close"},"CLOSE")))}}]),a}(s.Component)),N=(t(44),function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(m.a)(this,Object(d.a)(a).call(this))).state={users:[]},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mock-io.herokuapp.com/users").then((function(e){return e.json()})).then((function(a){return e.setState({users:a})}))}},{key:"render",value:function(){var e=this;return l.a.createElement(o.a,null,l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/",exact:!0,render:function(){return l.a.createElement(E,{users:e.state.users})}}),l.a.createElement(v.a,{path:"/:id",render:function(a){var t=a.match.params.id-1;return l.a.createElement(f,{users:e.state.users[t]})}})))}}]),a}(l.a.Component));c.a.render(l.a.createElement(N,null),document.getElementById("root"))},33:function(e,a,t){e.exports=t(178)},37:function(e,a,t){},38:function(e,a,t){},43:function(e,a,t){}},[[33,1,2]]]);
//# sourceMappingURL=main.24a1270d.chunk.js.map