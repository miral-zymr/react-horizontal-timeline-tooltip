module.exports=function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=17)}([function(t,e){t.exports=require("react")},function(t,e){t.exports={LEFT:"left",RIGHT:"right",LEFT_KEY:37,RIGHT_KEY:39,UP_KEY:38,DOWN_KEY:40,DAY:864e5,MIN_TIMELINE_WIDTH:750,MIN_EVENT_PADDING:20,MAX_EVENT_PADDING:120,DATE_WIDTH:85,TIMELINE_PADDING:100,KEYMAP:{37:"left",39:"right"}}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=require("radium")},function(t,e,n){t.exports=n(20)()},function(t,e){t.exports=require("react-motion")},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},function(t,e,n){var o=n(18),r=n(3);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}e.exports=n},function(t,e,n){var o=n(19);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e){t.exports=require("react-icons/fa")},function(t,e){t.exports=require("react-dimensions")},function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},n.apply(this,arguments)}t.exports=n},function(t,e,n){var o=n(22),r=n(23),i=n(24);t.exports=function(t,e){return o(t)||r(t,e)||i()}},function(t,e){t.exports=require("color")},function(t,e,n){t.exports=n(25)},function(e,t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(t){return n(t)}:e.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(t)}e.exports=o},function(n,t){function o(t,e){return n.exports=o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}n.exports=o},function(t,e,n){"use strict";var s=n(21);function o(){}function r(){}r.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}var n={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e,n){"use strict";n.r(e);function d(t,e){return Math.round(e-t)}function s(t,e,n,o,r){var i=new Array(t.length);i[0]=r;for(var a=function(t){var e=function(n){return n[0].map(function(t,e){return n.map(function(t){return t[e]})})}([t.slice(0,-1),t.slice(1)]).map(function(t){var e=C()(t,2),n=e[0],o=e[1];return d(n,o)});return{min:Math.min.apply(null,e),max:Math.max.apply(null,e)}}(t),s=a.max-a.min,l=o-n,c=1;c<i.length;c+=1){var u=d(t[c-1],t[c]),p=0==s?o:Math.round((u-a.min)*l/s+n);i[c]=i[c-1]+e+p}return i}function i(t){var e=t.events,n=t.selectedIndex,o=t.styles,r=t.handleDateClick,i=t.labelWidth;return m.a.createElement("ol",{className:"events-bar",style:{listStyle:"none"}},e.map(function(t,e){return m.a.createElement(L,{distanceFromOrigin:t.distance,label:t.label,date:t.date,scanType:t.scanType,scanCategory:t.scanCategory,index:e,key:e,onClick:r,selected:n,styles:o,labelWidth:i})}))}function a(t){var e=t.left,n=t.width,o=t.fillingMotion,r=t.backgroundColor;return m.a.createElement(W.Motion,{style:{tWidth:Object(W.spring)(n,o),tLeft:Object(W.spring)(e,o)}},function(t){var e=t.tWidth,n=t.tLeft;return m.a.createElement("span",{"aria-hidden":"true",className:"timeline-eventline",style:{position:"absolute",left:"".concat(n,"px"),top:0,height:"100%",width:"".concat(e,"px"),transformOrigin:"left center",backgroundColor:r}})})}var o=n(7),l=n.n(o),r=n(8),c=n.n(r),u=n(9),p=n.n(u),h=n(10),f=n.n(h),b=n(11),y=n.n(b),g=n(0),m=n.n(g),v=(n(5),n(4)),x=n.n(v),E=n(13),T=n.n(E),k=n(14),P=n.n(k),w=n(3),_=n.n(w),M=n(2),S=n.n(M),W=n(6),O=n(15),C=n.n(O),I={links:{position:"absolute",bottom:0,textAlign:"center",paddingBottom:15},label:{position:"absolute",top:10,textAlign:"center"},base:{position:"absolute",bottom:-5,height:12,width:12,borderRadius:"50%",transition:"background-color 0.3s, border-color 0.3s",":hover":{}},future:function(t){return{backgroundColor:t.background,border:"2px solid ".concat(t.outline)}},past:function(t){return{backgroundColor:t.background,border:"2px solid ".concat(t.foreground)}},present:function(t){return{backgroundColor:t.foreground,border:"2px solid ".concat(t.foreground)}}},D=m.a.createElement("br",null),N=function(t){function i(){var t,o;l()(this,i);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o=p()(this,(t=f()(i)).call.apply(t,[this].concat(n))),S()(_()(o),"__getDotStyles__",function(t,e){var n={backgroundColor:o.props.styles.foreground,border:"2px solid ".concat(o.props.styles.foreground)};return[I.base,{left:o.props.labelWidth/2-I.base.width/2},I[t](o.props.styles),x.a.getState(o.state,e,":hover")||x.a.getState(o.state,"dot-dot",":hover")?n:void 0]}),o}return y()(i,t),c()(i,[{key:"render",value:function(){var t=this,e="future";return this.props.index<this.props.selected?e="past":this.props.index===this.props.selected&&(e="present"),m.a.createElement(m.a.Fragment,null,m.a.createElement("li",{key:this.props.date,id:"timeline-dot-".concat(this.props.date),className:"".concat(e," dot-label"),onClick:function(){return t.props.onClick(t.props.index)},style:[I.links,{left:this.props.distanceFromOrigin-this.props.labelWidth/2,cursor:"pointer",width:this.props.labelWidth,":hover":{}}]},this.props.label,m.a.createElement("span",{key:"dot-dot",style:this.__getDotStyles__(e,this.props.date)})),m.a.createElement("li",{key:this.props.scanType,id:"timeline-dot-".concat(this.props.scanType),className:"".concat(e," dot-label"),onClick:function(){return t.props.onClick(t.props.index)},style:[I.label,{left:this.props.distanceFromOrigin-this.props.labelWidth/2,cursor:"pointer",width:this.props.labelWidth,":hover":{}}]},m.a.createElement("div",null,this.props.scanCategory," ",D," ",this.props.scanType)))}}]),i}(m.a.Component),L=x()(N),j=n(16),A=n.n(j),R={base:{top:"50%",position:"absolute",bottom:"auto",transform:"translateY(-50%)",height:"100%",width:20,overflow:"hidden"},specific:function(t,e,n){var o;return o={},S()(o,e,40),S()(o,"backgroundImage","linear-gradient(to ".concat(n,", ").concat(t.background,", ").concat(A()(t.background).alpha(0).rgb(),")")),o}},Y=x()(function(t){return m.a.createElement("ul",{style:{listStyle:"none"}},m.a.createElement("li",{style:[R.base,R.specific(t.styles,"left","right")]}),m.a.createElement("li",{style:[R.base,R.specific(t.styles,"right","left")]}))}),K=n(1),F=n.n(K),G=n(12),H=function(t){var e=t.outline;return{position:"absolute",top:"49px",bottom:"auto",transform:"translateY(-50%)",height:34,width:34,borderRadius:"50%",border:"2px solid ".concat(e),overflow:"hidden",textIndent:"100%",whiteSpace:"nowrap",transition:"border-color 0.3s"}},X=function(t,e){return{position:"absolute",left:0,top:"50%",bottom:"auto",transform:"translateY(-50%)",height:20,width:29,overflow:"hidden",textIndent:"100%",whiteSpace:"nowrap",fill:e?t.foreground:t.outline}},q=function(t){return{color:t.outline,cursor:"not-allowed",":hover":{border:"2px solid ".concat(t.outline)}}},U=function(t){return{cursor:"pointer",":hover":{border:"2px solid ".concat(t.foreground),color:t.foreground}}},V=x()(function(t){var e=Math.round(t.position)<0,n=Math.round(t.position)>Math.round(t.maxPosition);H(t.styles);return m.a.createElement("ul",{className:"buttons"},m.a.createElement("li",{className:"button-back ".concat(e?"enabled":"disabled"),key:F.a.LEFT,onClick:function(){return t.updateSlide(F.a.LEFT)},style:[H(t.styles),e?U(t.styles):q(t.styles),S()({},F.a.LEFT,0)]},m.a.createElement(G.FaAngleLeft,{style:X(t.styles,e)})),m.a.createElement("li",{className:"button-forward ".concat(n?"enabled":"disabled"),key:F.a.RIGHT,onClick:function(){return t.updateSlide(F.a.RIGHT)},style:[H(t.styles),n?U(t.styles):q(t.styles),S()({},F.a.RIGHT,0)]},m.a.createElement(G.FaAngleRight,{style:X(t.styles,n)})))}),B=function(t){function e(t){var a;return l()(this,e),a=p()(this,f()(e).call(this,t)),S()(_()(a),"handleKeydown",function(t){a.props.isKeyboardEnabled&&(t.keyCode===F.a.LEFT_KEY||t.keyCode===F.a.RIGHT_KEY?a.updateSlide(F.a.KEYMAP[t.keyCode]):t.keyCode===F.a.UP_KEY?a.props.indexClick(Math.min(a.props.selectedIndex+1,a.props.events.length-1)):t.keyCode===F.a.DOWN_KEY&&a.props.indexClick(Math.max(a.props.selectedIndex-1,0)))}),S()(_()(a),"handleTouchStart",function(t){var e=t.touches[0];a.touch.coors.x=e.pageX,a.touch.coors.y=e.pageY,a.touch.isSwiping=!1,a.touch.started=!0}),S()(_()(a),"handleTouchMove",function(t){if(a.touch.started){var e=t.touches[0],n=Math.abs(a.touch.coors.x-e.pageX),o=Math.abs(a.touch.coors.y-e.pageY),r=o<n&&n>a.touch.threshold;if(!0==r||n>a.touch.threshold||o>a.touch.threshold){a.touch.isSwiping=r;var i=a.touch.coors.x-e.pageX;a.touch.coors.x=e.pageX,a.setState({position:a.state.position-i})}!0===a.touch.isSwiping&&t.preventDefault()}else a.handleTouchStart(t)}),S()(_()(a),"handleTouchEnd",function(t){a.slideToPosition(a.state.position),a.touch.coors.x=0,a.touch.coors.y=0,a.touch.isSwiping=!1,a.touch.started=!1}),S()(_()(a),"slideToPosition",function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:a.props,n=Math.min(e.visibleWidth-e.totalWidth,0);a.setState({position:Math.max(Math.min(0,t),n),maxPosition:n})}),S()(_()(a),"updateSlide",function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:a.props;t===F.a.RIGHT?a.slideToPosition(a.state.position-e.visibleWidth+e.labelWidth,e):t===F.a.LEFT&&a.slideToPosition(a.state.position+e.visibleWidth-e.labelWidth,e)}),S()(_()(a),"centerEvent",function(t){var e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:a.props).events[t];a.slideToPosition(-e.distance)}),a.state={position:0,maxPosition:Math.min(t.visibleWidth-t.totalWidth,0)},a.touch={coors:{x:0,y:0},isSwiping:!1,started:!1,threshold:3},a}return y()(e,t),c()(e,[{key:"componentWillMount",value:function(){document.body.addEventListener("keydown",this.handleKeydown)}},{key:"componentDidMount",value:function(){var t=this.props.events[this.props.index];this.slideToPosition(-(t.distance-this.props.visibleWidth/2),this.props)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("keydown",this.handleKeydown)}},{key:"componentWillReceiveProps",value:function(t){var e=t.events[t.index],n=-this.state.position,o=n+t.visibleWidth;e.distance>10+n&&e.distance<o-10?this.slideToPosition(this.state.position,t):this.slideToPosition(-(e.distance-t.visibleWidth/2),t)}},{key:"render",value:function(){var n=this,t=this.props.isTouchEnabled?{onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd}:{},o=this.props.events[this.props.index].distance-this.props.barPaddingLeft,r=this.props.totalWidth-this.props.barPaddingLeft-this.props.barPaddingRight;return m.a.createElement("div",P()({style:{width:"".concat(this.props.width,"px"),height:"".concat(this.props.height,"px")}},t),m.a.createElement("div",{className:"events-wrapper",style:{position:"relative",height:"100%",margin:"0 40px",overflow:"hidden"}},m.a.createElement(W.Motion,{style:{X:Object(W.spring)(this.state.position,this.slidingMotion)}},function(t){var e=t.X;return m.a.createElement("div",{className:"events",style:{position:"absolute",left:0,top:49,height:2,width:n.props.totalWidth,WebkitTransform:"translate3d(".concat(e,", 0, 0)px"),transform:"translate3d(".concat(e,"px, 0, 0)")}},m.a.createElement(a,{left:n.props.barPaddingLeft,width:r,fillingMotion:n.props.fillingMotion,backgroundColor:n.props.styles.outline}),m.a.createElement(a,{left:n.props.barPaddingLeft,width:o,fillingMotion:n.props.fillingMotion,backgroundColor:n.props.styles.foreground}),m.a.createElement(i,{events:n.props.events,selectedIndex:n.props.index,styles:n.props.styles,handleDateClick:n.props.indexClick,labelWidth:n.props.labelWidth}))})),m.a.createElement(Y,{styles:this.props.styles}),m.a.createElement(V,{maxPosition:this.state.maxPosition,position:this.state.position,styles:this.props.styles,updateSlide:this.updateSlide}))}}]),e}(m.a.Component),z=function(t){function e(){return l()(this,e),p()(this,f()(e).apply(this,arguments))}return y()(e,t),c()(e,[{key:"render",value:function(){var n=this.props;if(!n.containerWidth)return!1;var t=n.values&&n.values.date.map(function(t){return new Date(t)}),e=s(t,n.labelWidth,n.minEventPadding,n.maxEventPadding,n.linePadding).map(function(t,e){return{distance:t,label:n.getLabel(n.values&&n.values.date[e],e),date:n.values&&n.values.date[e],scanType:n.values&&n.values.scanType[e],scanCategory:n.values&&n.values.scanCategory[e]}}),o=this.props.containerWidth-80,r=Math.max(e[e.length-1].distance+this.props.linePadding,o),i=0,a=0;return this.props.isOpenEnding||(i=r-e[e.length-1].distance),this.props.isOpenBeginning||(a=e[0].distance),m.a.createElement(B,{width:n.containerWidth,height:n.containerHeight,events:e,isTouchEnabled:n.isTouchEnabled,totalWidth:r,visibleWidth:o,index:n.index,styles:n.styles,indexClick:n.indexClick,labelWidth:n.labelWidth,fillingMotion:n.fillingMotion,barPaddingRight:i,barPaddingLeft:a})}}]),e}(m.a.Component);z.defaultProps={getLabel:function(t,e){return new Date(t).toDateString().substring(4)},minEventPadding:F.a.MIN_EVENT_PADDING,maxEventPadding:F.a.MAX_EVENT_PADDING,linePadding:F.a.TIMELINE_PADDING,labelWidth:F.a.DATE_WIDTH,styles:{outline:"#dfdfdf",background:"#f8f8f8",foreground:"#7b9d6f"},fillingMotion:{stiffness:150,damping:25},slidingMotion:{stiffness:150,damping:25},isOpenEnding:!0,isOpenBeginning:!0,isTouchEnabled:!0,isKeyboardEnabled:!0};e.default=x()(T()({elementResize:!0})(z))}]);