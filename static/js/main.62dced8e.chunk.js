(this["webpackJsonpultimate-predation"]=this["webpackJsonpultimate-predation"]||[]).push([[0],{29:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(1),o=n.n(r),a=n(15),s=n.n(a),c=(n(29),n(16)),p=n(17),u=n(23),d=n(22),h=n(3),b=n(4),j=n(2),l=n(5),g={ko:{reset:"\ub9ac\uc14b",prev:"\uc774\uc804",next:"\ub2e4\uc74c"},ja:{reset:"\u30ea\u30bb\u30c3\u30c8",prev:"\u524d\u3078",next:"\u6b21\u3078"}};function O(){var t=Object(h.a)(["\n  padding: 5px 16px;\n  font-size: 16px;\n  cursor: pointer;\n  user-select: none;\n  border: 1px solid #333;\n  border-radius: 6px;\n  color: #cdd;\n  background-color: #222;\n  transition: .2s ease;\n  text-transform: capitalize;\n\n  :hover {\n    background-color: #333;\n    border-color: #899;\n  }\n\n  &[disabled] {\n    color: #445;\n    background-color: #222;\n    border-color: #333;\n  }\n\n  & + & {\n    margin-left: 5px;\n  }\n"]);return O=function(){return t},t}var f=b.a.button(O()),m=function(t){var e=t.name,n=Object(l.a)(t,["name"]),r=g[navigator.language.slice(0,2)];return Object(i.jsx)(f,Object(j.a)(Object(j.a)({},n),{},{children:r&&r[e]||e}))};function z(){var t=Object(h.a)(["\n  position: absolute;\n  bottom: 3vmin;\n  right: 3vmin;\n  z-index: 100;\n  padding-right: inherit;\n"]);return z=function(){return t},t}var x=b.a.div(z()),v=n(21),S=n.n(v),k=function(t){var e=Object.assign({},t);return Object(i.jsx)(S.a,Object(j.a)(Object(j.a)({},e),{},{loop:!0,controls:!0,width:"160px",height:"90px",style:{opacity:.5,top:"2vmin",left:"2vmin",position:"absolute"}}))};function w(){var t=Object(h.a)(["\n  position: absolute;\n  user-select: none;\n  opacity: ",";\n  transition: 0.5s ease;\n  width: ",";\n  height: ",";\n  left: calc(50% + ","% ",");\n  top: calc(50% + ","% ",");\n"]);return w=function(){return t},t}var y=function(t){return(t-90)*Math.PI/180},M=b.a.div(w(),(function(t){return t.opacity}),(function(t){return t.width}),(function(t){return t.height}),(function(t){return 50*t.position.radius*(e=t.position.deg,Math.cos(y(e)));var e}),(function(t){return!t.width||t.passLeft?"":"- (".concat(t.width," / 2)")}),(function(t){return 50*t.position.radius*(e=t.position.deg,Math.sin(y(e)));var e}),(function(t){return!t.height||t.passTop?"":"- (".concat(t.height," / 2)")})),C=function(t){var e=t.name,n=t.size,r=Object(l.a)(t,["name","size"]);return Object(i.jsx)(M,Object(j.a)(Object(j.a)({},r),{},{as:"img",alt:e,src:"./".concat(e,".png"),width:n,height:n}))},P={ultima_totem:"026532",ifrit:"028667",garuda:"028672",titan:"028673",ultima:"052144",attack1:"061301",attack2:"061302",attack3:"061303",attack4:"061304",attack5:"061305",attack6:"061306",attack7:"061307",attack8:"061308",bind1:"061311",bind2:"061312",bind3:"061313",bind4:"061314",bind5:"061315",bind6:"061316",bind7:"061317",bind8:"061318",stop1:"061321",stop2:"061322",stop3:"061323",stop4:"061324",stop5:"061325",stop6:"061326",stop7:"061327",stop8:"061328",square:"061331",circle:"061332",cross:"061333",triangle:"061334",a:"061341",b:"061342",c:"061343",1:"061344",2:"061345",3:"061346",d:"061347",4:"061348",error:"061553",mob1:"061707",mob2:"061708",mob3:"061709",mob4:"061710",mob5:"061711",mob6:"061712"},F=function(t){var e=t.name,n=t.size,r=Object(l.a)(t,["name","size"]),o=P[e]||P.error;return Object(i.jsx)(M,Object(j.a)(Object(j.a)({},r),{},{as:"img",alt:"Marker ".concat(e.toUpperCase()),src:"https://xivapi.com/i/".concat(o.substr(0,3),"000/").concat(o,".png"),width:n,height:n}))},L=n(6);function I(){var t=Object(h.a)(["\n  box-sizing: border-box;\n  border: 1vmin solid ",";\n  background-color: ",";\n"]);return I=function(){return t},t}var D=Object(b.a)(M)(I(),(function(t){return t.color}),(function(t){return Object(L.b)(.2,t.backgroundColor||t.color)})),J=function(t){var e=t.color,n=Object(l.a)(t,["color"]);return Object(i.jsx)(D,Object(j.a)(Object(j.a)({},n),{},{opacity:.5,color:e}))};function T(){var t=Object(h.a)(["\n  transform-origin: ",";\n  transform: ",";\n"]);return T=function(){return t},t}var U=Object(b.a)(J)(T(),(function(t){return t.origin}),(function(t){return t.rotate&&"rotate(".concat(t.rotate,")")})),_=function(t){var e=t.rotate,n=t.origin,r=Object(l.a)(t,["rotate","origin"]);return Object(i.jsx)(U,Object(j.a)(Object(j.a)({},r),{},{rotate:e,origin:n}))};function q(){var t=Object(h.a)(["\n  border-width: ",";\n"]);return q=function(){return t},t}function A(){var t=Object(h.a)(["\n  border-radius: 50%;\n"]);return A=function(){return t},t}var B=Object(b.a)(J)(A()),E=Object(b.a)(B)(q(),(function(t){return t.thickness})),G=function(t){var e=t.size,n=t.donut,r=Object(l.a)(t,["size","donut"]);if(n){var o=Object(L.a)(.5,r.color),a=Object(L.b)(.2,r.color);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(E,Object(j.a)(Object(j.a)({},r),{},{width:e,height:e,thickness:"calc((".concat(e," - ").concat(n,") * 0.5)"),color:a,backgroundColor:"transparent"})),Object(i.jsx)(B,Object(j.a)(Object(j.a)({},r),{},{width:e,height:e,color:o,backgroundColor:"transparent"})),Object(i.jsx)(B,Object(j.a)(Object(j.a)({},r),{},{width:"calc(".concat(n," + 2vmin)"),height:"calc(".concat(n," + 2vmin)"),color:o,backgroundColor:"transparent"}))]})}return Object(i.jsx)(B,Object(j.a)(Object(j.a)({},r),{},{width:e,height:e}))};function H(){var t=Object(h.a)(["\n  position: relative;\n  width: ",";\n  height: ",";\n  border: 1vmin solid #888;\n  border-radius: 50%;\n  box-sizing: border-box;\n"]);return H=function(){return t},t}function K(){var t=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fefefe;\n  background-color: #010101;\n  padding: 0 calc((100vw - 1000px) / 2);\n"]);return K=function(){return t},t}var N=b.a.div(K()),Q=b.a.div(H(),(function(t){return t.size}),(function(t){return t.size})),R=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={garuda:0,ifrit:0,titan:0,ultima:0,progress:0},t.placePrimals=function(){var e=[45,135,225,315],n=function(t){return t.splice(Math.floor(Math.random()*t.length),1)[0]};t.setState({progress:0,garuda:n(e.slice()),ifrit:n(e),titan:n([0,90,180,270]),ultima:n(e)})},t.prevProgress=function(){t.setState((function(t,e){return{progress:Math.max(t.progress-1,0)}}))},t.nextProgress=function(){t.setState((function(t,e){return{progress:Math.min(t.progress+1,2)}}))},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.placePrimals()}},{key:"render",value:function(){var t=1/3,e=.175,n=Math.cos(45*Math.PI/180),r="lightgreen",o="red",a="darkorange",s="indigo",c=Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(x,{children:[Object(i.jsx)(m,{name:"reset",onClick:this.placePrimals}),Object(i.jsx)(m,{name:"prev",onClick:this.prevProgress,disabled:this.state.progress<=0}),Object(i.jsx)(m,{name:"next",onClick:this.nextProgress,disabled:this.state.progress>=2})]}),Object(i.jsx)(k,{url:"https://youtu.be/Tv_klDrSwMU?t=67"})]}),p=Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(F,{name:"1",size:this.props.markerSize,position:{deg:-45,radius:11/12}}),Object(i.jsx)(F,{name:"2",size:this.props.markerSize,position:{deg:-45,radius:t}}),Object(i.jsx)(F,{name:"3",size:this.props.markerSize,position:{deg:0,radius:0}}),Object(i.jsx)(F,{name:"a",size:this.props.markerSize,position:{deg:0,radius:t}}),Object(i.jsx)(F,{name:"b",size:this.props.markerSize,position:{deg:90,radius:t}}),Object(i.jsx)(F,{name:"c",size:this.props.markerSize,position:{deg:180,radius:t}}),Object(i.jsx)(F,{name:"d",size:this.props.markerSize,position:{deg:270,radius:t}})]}),u=1===this.state.progress&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(G,{title:"\uac00\ub8e8\ub2e4: \ub9c8\ub140\uc758 \uc218\ub808\ubc14\ud034 (\ub0b4\ubd80)",color:r,size:"calc(".concat(this.props.zoneSize," * ").concat(.35,")"),position:{deg:this.state.garuda,radius:t}}),Object(i.jsx)(_,{title:"\uc774\ud504\ub9ac\ud2b8: \uc9c4\ud64d \ud68c\uc624\ub9ac (\ub300\uac01\uc120)",color:o,width:"calc(".concat(this.props.zoneSize," * 0.5)"),height:this.props.zoneSize,rotate:"".concat(this.state.ifrit,"deg"),position:{deg:0,radius:0}}),Object(i.jsx)(_,{title:"\ud0c0\uc774\ud0c4: \uc0b0\uc0ac\ud0dc (\uc911\uc559)",color:a,width:this.props.zoneSize,height:"calc(".concat(this.props.zoneSize," * ").concat(e,")"),rotate:"".concat(this.state.titan+90,"deg"),origin:"left center",passLeft:!0,position:{deg:this.state.titan,radius:1}}),Object(i.jsx)(_,{title:"\ud0c0\uc774\ud0c4: \uc0b0\uc0ac\ud0dc (\uc624\ub978\ucabd)",color:a,width:this.props.zoneSize,height:"calc(".concat(this.props.zoneSize," * ").concat(e,")"),rotate:"".concat(this.state.titan+135,"deg"),origin:"left center",passLeft:!0,position:{deg:this.state.titan,radius:1}}),Object(i.jsx)(_,{title:"\ud0c0\uc774\ud0c4: \uc0b0\uc0ac\ud0dc (\uc67c\ucabd)",color:a,width:this.props.zoneSize,height:"calc(".concat(this.props.zoneSize," * ").concat(e,")"),rotate:"".concat(this.state.titan+45,"deg"),origin:"left center",passLeft:!0,position:{deg:this.state.titan,radius:1}})]}),d=2===this.state.progress&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(G,{title:"\uac00\ub8e8\ub2e4: \ub9c8\ub140\uc758 \ud68c\uc624\ub9ac (\ub3c4\ub11b)",color:r,size:this.props.zoneSize,donut:"calc(".concat(this.props.zoneSize," * ").concat(.35,")"),position:{deg:this.state.garuda,radius:t}}),Object(i.jsx)(_,{title:"\uc774\ud504\ub9ac\ud2b8: \uc9c4\ud64d \ud68c\uc624\ub9ac (\uc2ed\uc790 \uc138\ub85c)",color:o,width:"calc(".concat(this.props.zoneSize," / 4)"),height:this.props.zoneSize,position:{deg:0,radius:0}}),Object(i.jsx)(_,{title:"\uc774\ud504\ub9ac\ud2b8: \uc9c4\ud64d \ud68c\uc624\ub9ac (\uc2ed\uc790 \uac00\ub85c)",color:o,width:this.props.zoneSize,height:"calc(".concat(this.props.zoneSize," / 4)"),position:{deg:0,radius:0}}),Object(i.jsx)(_,{title:"\ud0c0\uc774\ud0c4: \uc0b0\uc0ac\ud0dc (\uc624\ub978\ucabd)",color:a,width:this.props.zoneSize,height:"calc(".concat(this.props.zoneSize," * ").concat(e,")"),rotate:"".concat(this.state.titan+90+22.5,"deg"),origin:"left center",passLeft:!0,position:{deg:this.state.titan,radius:1}}),Object(i.jsx)(_,{title:"\ud0c0\uc774\ud0c4: \uc0b0\uc0ac\ud0dc (\uc67c\ucabd)",color:a,width:this.props.zoneSize,height:"calc(".concat(this.props.zoneSize," * ").concat(e,")"),rotate:"".concat(this.state.titan+90-22.5,"deg"),origin:"left center",passLeft:!0,position:{deg:this.state.titan,radius:1}}),Object(i.jsx)(G,{title:"\uc54c\ud14c\ub9c8 \uc6e8\ud3f0: \uccad\ub9b0 \ubc29\ucd9c",color:s,size:"calc(".concat(this.props.zoneSize," * ").concat(n,")"),position:{deg:this.state.ultima,radius:1}})]}),h=Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(C,{name:"garuda",size:this.props.enemySize,position:{deg:this.state.garuda,radius:t}}),Object(i.jsx)(C,{name:"titan",size:this.props.enemySize,position:{deg:this.state.titan,radius:1}}),Object(i.jsx)(C,{name:"ifrit",size:this.props.enemySize,position:{deg:this.state.ifrit+(this.state.progress>0&&180),radius:1}}),this.state.progress>0&&Object(i.jsx)(C,{name:"ifrit",opacity:.5,size:this.props.enemySize,position:{deg:this.state.ifrit,radius:1}}),Object(i.jsx)(C,{name:"ultima",size:this.props.enemySize,position:{deg:this.state.ultima,radius:1}})]});return Object(i.jsxs)(N,{children:[c,Object(i.jsxs)(Q,{size:this.props.zoneSize,children:[p,u,d,h]})]})}}]),n}(o.a.Component);var V=function(){return Object(i.jsx)(R,{zoneSize:"90vmin",markerSize:"7vmin",enemySize:"12vmin"})};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(V,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.62dced8e.chunk.js.map