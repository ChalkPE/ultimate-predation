(this["webpackJsonpultimate-predation"]=this["webpackJsonpultimate-predation"]||[]).push([[0],{29:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(1),a=n.n(r),o=n(19),s=n.n(o),c=(n(29),n(7)),u=n(8),d=n(11),l=n(10),p={en:{title:"Ultimate Predation",reset:"Reset",prev:"Prev",next:"Next",marker:"Marker",enemy:"Enemy",garuda:"Garuda",garuda_wicked_wheel:"Wicked Wheel",garuda_wicked_tornado:"Wicked Tornado",ifrit:"Ifrit",ifrit_crimson_cyclone:"Crimson Cyclone",titan:"Titan",titan_landslide:"Landslide",ultima:"The Ultima Weapon",ultima_ceruleum_vent:"Ceruleum Vent"},ko:{title:"\uad81\uadf9\uc758 \ucd94\uaca9 \ud658\uc0c1",reset:"\ub9ac\uc14b",prev:"\uc774\uc804",next:"\ub2e4\uc74c",marker:"\uc9c0\uba74 \ud45c\uc2dd",enemy:"\uc801",garuda:"\uac00\ub8e8\ub2e4",garuda_wicked_wheel:"\ub9c8\ub140\uc758 \uc218\ub808\ubc14\ud034",garuda_wicked_tornado:"\ub9c8\ub140\uc758 \ud68c\uc624\ub9ac",ifrit:"\uc774\ud504\ub9ac\ud2b8",ifrit_crimson_cyclone:"\uc9c4\ud64d \ud68c\uc624\ub9ac",titan:"\ud0c0\uc774\ud0c4",titan_landslide:"\uc0b0\uc0ac\ud0dc",ultima:"\uc54c\ud14c\ub9c8 \uc6e8\ud3f0",ultima_ceruleum_vent:"\uccad\ub9b0 \ubc29\ucd9c"},ja:{title:"\u8ffd\u6483\u306e\u7a76\u6975\u5e7b\u60f3",reset:"\u30ea\u30bb\u30c3\u30c8",prev:"\u524d\u3078",next:"\u6b21\u3078",marker:"\u30de\u30fc\u30ab\u30fc",enemy:"\u6575",garuda:"\u30ac\u30eb\u30fc\u30c0",garuda_wicked_wheel:"\u30a6\u30a3\u30b1\u30c3\u30c9\u30db\u30a4\u30fc\u30eb",garuda_wicked_tornado:"\u30a6\u30a3\u30b1\u30c3\u30c9\u30c8\u30eb\u30cd\u30fc\u30c9",ifrit:"\u30a4\u30d5\u30ea\u30fc\u30c8",ifrit_crimson_cyclone:"\u30af\u30ea\u30e0\u30be\u30f3\u30b5\u30a4\u30af\u30ed\u30f3",titan:"\u30bf\u30a4\u30bf\u30f3",titan_landslide:"\u30e9\u30f3\u30c9\u30b9\u30e9\u30a4\u30c9",ultima:"\u30a2\u30eb\u30c6\u30de\u30a6\u30a7\u30dd\u30f3",ultima_ceruleum_vent:"\u30bb\u30eb\u30ec\u30a2\u30e0\u30d9\u30f3\u30c8"}},h=a.a.createContext(p.en),b=n(3),j=n(4),g=n(2),m=n(5);function O(){var t=Object(b.a)(["\n  padding: 5px 16px;\n  font-size: 16px;\n  cursor: pointer;\n  user-select: none;\n  border: 1px solid #333;\n  border-radius: 6px;\n  color: #cdd;\n  background-color: #222;\n  transition: .2s ease;\n  text-transform: capitalize;\n\n  :hover {\n    background-color: #333;\n    border-color: #899;\n  }\n\n  &[disabled] {\n    color: #445;\n    background-color: #222;\n    border-color: #333;\n  }\n\n  & + & {\n    margin-left: 5px;\n  }\n"]);return O=function(){return t},t}var f=j.a.button(O()),z=function(t){var e=t.name,n=Object(m.a)(t,["name"]),a=Object(r.useContext)(h);return Object(i.jsx)(f,Object(g.a)(Object(g.a)({},n),{},{children:a[e]||e}))};function x(){var t=Object(b.a)(["\n  position: absolute;\n  bottom: 3vmin;\n  right: 3vmin;\n  z-index: 100;\n  padding-right: inherit;\n"]);return x=function(){return t},t}var v=j.a.div(x());function k(){var t=Object(b.a)(["\n  position: absolute;\n  user-select: none;\n  opacity: ",";\n  transition: 0.5s ease;\n  width: ",";\n  height: ",";\n  left: calc(50% + ","% ",");\n  top: calc(50% + ","% ",");\n"]);return k=function(){return t},t}var _=function(t){return(t-90)*Math.PI/180},S=j.a.div(k(),(function(t){return t.opacity}),(function(t){return t.width}),(function(t){return t.height}),(function(t){return 50*t.position.radius*(e=t.position.deg,Math.cos(_(e)));var e}),(function(t){return!t.width||t.passLeft?"":"- (".concat(t.width," / 2)")}),(function(t){return 50*t.position.radius*(e=t.position.deg,Math.sin(_(e)));var e}),(function(t){return!t.height||t.passTop?"":"- (".concat(t.height," / 2)")})),w=function(t){var e=t.name,n=t.size,a=Object(m.a)(t,["name","size"]),o=Object(r.useContext)(h);return Object(i.jsx)(S,Object(g.a)(Object(g.a)({},a),{},{as:"img",alt:"".concat(o[e]," (").concat(o.enemy,")"),title:o[e],src:"./".concat(e,".png"),width:n,height:n}))},y={ultima_totem:"026532",ifrit:"028667",garuda:"028672",titan:"028673",ultima:"052144",attack1:"061301",attack2:"061302",attack3:"061303",attack4:"061304",attack5:"061305",attack6:"061306",attack7:"061307",attack8:"061308",bind1:"061311",bind2:"061312",bind3:"061313",bind4:"061314",bind5:"061315",bind6:"061316",bind7:"061317",bind8:"061318",stop1:"061321",stop2:"061322",stop3:"061323",stop4:"061324",stop5:"061325",stop6:"061326",stop7:"061327",stop8:"061328",square:"061331",circle:"061332",cross:"061333",triangle:"061334",a:"061341",b:"061342",c:"061343",1:"061344",2:"061345",3:"061346",d:"061347",4:"061348",error:"061553",mob1:"061707",mob2:"061708",mob3:"061709",mob4:"061710",mob5:"061711",mob6:"061712"},C=function(t){var e=t.name,n=t.size,a=Object(m.a)(t,["name","size"]),o=Object(r.useContext)(h),s=y[e]||y.error;return Object(i.jsx)(S,Object(g.a)(Object(g.a)({},a),{},{as:"img",alt:"".concat(o.marker," ").concat(e.toUpperCase()),title:e.toUpperCase(),src:"https://xivapi.com/i/".concat(s.substr(0,3),"000/").concat(s,".png"),width:n,height:n}))},M=n(6);function P(){var t=Object(b.a)(["\n  box-sizing: border-box;\n  border: 1vmin solid ",";\n  background-color: ",";\n"]);return P=function(){return t},t}var L=Object(j.a)(S)(P(),(function(t){return t.color}),(function(t){return Object(M.b)(.2,t.backgroundColor||t.color)})),F=function(t){var e=t.color,n=t.name,a=Object(m.a)(t,["color","name"]),o=n.split("_")[0],s=Object(r.useContext)(h);return Object(i.jsx)(L,Object(g.a)(Object(g.a)({},a),{},{opacity:.5,color:e,title:"".concat(s[o],": ").concat(s[n])}))};function T(){var t=Object(b.a)(["\n  transform-origin: ",";\n  transform: ",";\n"]);return T=function(){return t},t}var U=Object(j.a)(F)(T(),(function(t){return t.origin}),(function(t){return t.rotate&&"rotate(".concat(t.rotate,")")})),I=function(t){var e=t.rotate,n=t.origin,r=Object(m.a)(t,["rotate","origin"]);return Object(i.jsx)(U,Object(g.a)(Object(g.a)({},r),{},{rotate:e,origin:n}))};function W(){var t=Object(b.a)(["\n  border-width: ",";\n"]);return W=function(){return t},t}function D(){var t=Object(b.a)(["\n  border-radius: 50%;\n"]);return D=function(){return t},t}var A=Object(j.a)(F)(D()),E=Object(j.a)(A)(W(),(function(t){return t.thickness})),J=function(t){var e=t.size,n=t.donut,r=Object(m.a)(t,["size","donut"]);if(n){var a=Object(M.a)(.5,r.color),o=Object(M.b)(.2,r.color);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(E,Object(g.a)(Object(g.a)({},r),{},{width:e,height:e,thickness:"calc(((".concat(e,") - (").concat(n,")) * 0.5)"),color:o,backgroundColor:"transparent"})),Object(i.jsx)(A,Object(g.a)(Object(g.a)({},r),{},{width:e,height:e,color:a,backgroundColor:"transparent"})),Object(i.jsx)(A,Object(g.a)(Object(g.a)({},r),{},{width:"calc(".concat(n," + 2vmin)"),height:"calc(".concat(n," + 2vmin)"),color:a,backgroundColor:"transparent"}))]})}return Object(i.jsx)(A,Object(g.a)(Object(g.a)({},r),{},{width:e,height:e}))};function q(){var t=Object(b.a)(["\n  position: relative;\n  width: ",";\n  height: ",";\n  border: 1vmin solid #888;\n  border-radius: 50%;\n  box-sizing: border-box;\n"]);return q=function(){return t},t}function B(){var t=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fefefe;\n  background-color: #010101;\n  padding: 0 calc((100vw - 1000px) / 2);\n"]);return B=function(){return t},t}var G=j.a.div(B()),N=j.a.div(q(),(function(t){return t.size}),(function(t){return t.size})),R=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={garuda:0,ifrit:0,titan:0,ultima:0,progress:0},t.placePrimals=function(){var e=[45,135,225,315],n=function(t){return t.splice(Math.floor(Math.random()*t.length),1)[0]};t.setState({progress:0,garuda:n(e.slice()),ifrit:n(e),titan:n([0,90,180,270]),ultima:n(e)})},t.prevProgress=function(){t.setState((function(t,e){return{progress:Math.max(t.progress-1,0)}}))},t.nextProgress=function(){t.setState((function(t,e){return{progress:Math.min(t.progress+1,2)}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.placePrimals()}},{key:"render",value:function(){var t=1/3,e=.175,n=Math.cos(45*Math.PI/180),r="lightgreen",a="red",o="darkorange",s="indigo",c=Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(v,{children:[Object(i.jsx)(z,{name:"reset",onClick:this.placePrimals}),Object(i.jsx)(z,{name:"prev",onClick:this.prevProgress,disabled:this.state.progress<=0}),Object(i.jsx)(z,{name:"next",onClick:this.nextProgress,disabled:this.state.progress>=2})]})}),u=Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(C,{name:"1",size:this.props.markerSize,position:{deg:-45,radius:11/12}}),Object(i.jsx)(C,{name:"2",size:this.props.markerSize,position:{deg:-45,radius:t}}),Object(i.jsx)(C,{name:"3",size:this.props.markerSize,position:{deg:0,radius:0}}),Object(i.jsx)(C,{name:"a",size:this.props.markerSize,position:{deg:0,radius:t}}),Object(i.jsx)(C,{name:"b",size:this.props.markerSize,position:{deg:90,radius:t}}),Object(i.jsx)(C,{name:"c",size:this.props.markerSize,position:{deg:180,radius:t}}),Object(i.jsx)(C,{name:"d",size:this.props.markerSize,position:{deg:270,radius:t}})]}),d=1===this.state.progress&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(I,{name:"ifrit_crimson_cyclone",color:a,width:"calc(".concat(this.props.zoneSize," * 0.5)"),height:this.props.zoneSize,rotate:"".concat(this.state.ifrit,"deg"),position:{deg:0,radius:0}}),Object(i.jsx)(I,{name:"titan_landslide",color:o,width:this.props.zoneSize,height:"calc(".concat(this.props.zoneSize," * ").concat(e,")"),rotate:"".concat(this.state.titan+90,"deg"),origin:"left center",passLeft:!0,position:{deg:this.state.titan,radius:1}}),Object(i.jsx)(I,{name:"titan_landslide",color:o,width:this.props.zoneSize,height:"calc(".concat(this.props.zoneSize," * ").concat(e,")"),rotate:"".concat(this.state.titan+135,"deg"),origin:"left center",passLeft:!0,position:{deg:this.state.titan,radius:1}}),Object(i.jsx)(I,{name:"titan_landslide",color:o,width:this.props.zoneSize,height:"calc(".concat(this.props.zoneSize," * ").concat(e,")"),rotate:"".concat(this.state.titan+45,"deg"),origin:"left center",passLeft:!0,position:{deg:this.state.titan,radius:1}}),Object(i.jsx)(J,{name:"garuda_wicked_wheel",color:r,size:"calc(".concat(this.props.zoneSize," * 0.35)"),position:{deg:this.state.garuda,radius:t}})]}),l=2===this.state.progress&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(J,{name:"garuda_wicked_tornado",color:r,size:this.props.zoneSize,donut:"calc(".concat(this.props.zoneSize," * 0.3)"),position:{deg:this.state.garuda,radius:t}}),Object(i.jsx)(I,{name:"ifrit_crimson_cyclone",color:a,width:"calc(".concat(this.props.zoneSize," / 4)"),height:this.props.zoneSize,position:{deg:0,radius:0}}),Object(i.jsx)(I,{name:"ifrit_crimson_cyclone",color:a,width:this.props.zoneSize,height:"calc(".concat(this.props.zoneSize," / 4)"),position:{deg:0,radius:0}}),Object(i.jsx)(I,{name:"titan_landslide",color:o,width:this.props.zoneSize,height:"calc(".concat(this.props.zoneSize," * ").concat(e,")"),rotate:"".concat(this.state.titan+90+22.5,"deg"),origin:"left center",passLeft:!0,position:{deg:this.state.titan,radius:1}}),Object(i.jsx)(I,{name:"titan_landslide",color:o,width:this.props.zoneSize,height:"calc(".concat(this.props.zoneSize," * ").concat(e,")"),rotate:"".concat(this.state.titan+90-22.5,"deg"),origin:"left center",passLeft:!0,position:{deg:this.state.titan,radius:1}}),Object(i.jsx)(J,{name:"ultima_ceruleum_vent",color:s,size:"calc(".concat(this.props.zoneSize," * ").concat(n,")"),position:{deg:this.state.ultima,radius:1}})]}),p=Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(w,{name:"garuda",size:this.props.enemySize,position:{deg:this.state.garuda,radius:t}}),Object(i.jsx)(w,{name:"titan",size:this.props.enemySize,position:{deg:this.state.titan,radius:1}}),Object(i.jsx)(w,{name:"ifrit",size:this.props.enemySize,position:{deg:this.state.ifrit+(this.state.progress>0&&180),radius:1}}),this.state.progress>0&&Object(i.jsx)(w,{name:"ifrit",opacity:.5,size:this.props.enemySize,position:{deg:this.state.ifrit,radius:1}}),Object(i.jsx)(w,{name:"ultima",size:this.props.enemySize,position:{deg:this.state.ultima,radius:1}})]});return Object(i.jsxs)(G,{children:[c,Object(i.jsxs)(N,{size:this.props.zoneSize,children:[u,d,l,p]})]})}}]),n}(a.a.Component),V=n(23),H=n.n(V),K=function(t){var e=Object.assign({},t);return Object(i.jsx)(H.a,Object(g.a)(Object(g.a)({},e),{},{loop:!0,controls:!0,width:"160px",height:"90px",style:{opacity:.5,top:"2vmin",left:"2vmin",position:"absolute"}}))},Q=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={lang:p[navigator.language.slice(0,2)]||p.en},t.setLang=function(e){return t.setState({lang:e})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.title=this.state.lang.title}},{key:"render",value:function(){return Object(i.jsxs)(h.Provider,{value:this.state.lang,children:[Object(i.jsx)(R,{zoneSize:"90vmin",markerSize:"7vmin",enemySize:"12vmin"}),Object(i.jsx)(K,{url:"https://youtu.be/Tv_klDrSwMU?t=67"})]})}}]),n}(a.a.Component);s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(Q,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.02895642.chunk.js.map