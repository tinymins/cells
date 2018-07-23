(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PydioComponents = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ScrollArea=t(require("react")):e.ScrollArea=t(e.React)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),n(31);var r=n(13),i=o(r);t.default=i.default},function(t,n){t.exports=e},function(e,t,n){e.exports=n(19)()},function(e,t){"use strict";function n(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t,n){(function(t){(function(){var n,o,r;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-r)/1e6},o=t.hrtime,n=function(){var e;return e=o(),1e9*e[0]+e[1]},r=n()):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(t,n(10))},function(e,t,n){(function(t){for(var o=n(23),r="undefined"==typeof window?t:window,i=["moz","webkit"],a="AnimationFrame",l=r["request"+a],s=r["cancel"+a]||r["cancelRequest"+a],u=0;!l&&u<i.length;u++)l=r[i[u]+"Request"+a],s=r[i[u]+"Cancel"+a]||r[i[u]+"CancelRequest"+a];if(!l||!s){var c=0,f=0,p=[],d=1e3/60;l=function(e){if(0===p.length){var t=o(),n=Math.max(0,d-(t-c));c=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},s=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return l.call(r,e)},e.exports.cancel=function(){s.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=l,e.cancelAnimationFrame=s}}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t){"use strict";function n(e,t,n){for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){if(0!==n[o])return!1;var r="number"==typeof t[o]?t[o]:t[o].val;if(e[o]!==r)return!1}return!0}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t){"use strict";function n(e,t,n,r,i,a,l){var s=-i*(t-r),u=-a*n,c=s+u,f=n+c*e,p=t+f*e;return Math.abs(f)<l&&Math.abs(p-r)<l?(o[0]=r,o[1]=0,o):(o[0]=p,o[1]=f,o)}t.__esModule=!0,t.default=n;var o=[0,0];e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return p?f.default.findDOMNode(e):e}function i(){d||p||(d=!0,console.error("With React 0.14 and later versions, you no longer need to wrap <ScrollArea> child into a function."))}function a(){!d&&p&&(d=!0,console.error("With React 0.13, you need to wrap <ScrollArea> child into a function."))}function l(e){return e<0?0:e}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=t(e[o]));return n}function u(e){var t=e.version;if("string"!=typeof t)return!0;var n=t.split("."),o=parseInt(n[0],10),r=parseInt(n[1],10);return 0===o&&13===r}Object.defineProperty(t,"__esModule",{value:!0}),t.findDOMNode=r,t.warnAboutFunctionChild=i,t.warnAboutElementChild=a,t.positiveOrZero=l,t.modifyObjValues=s,t.isReact13=u;var c=n(1),f=o(c),p=u(f.default),d=!1},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){y&&d&&(y=!1,d.length?h=d.concat(h):v=-1,h.length&&l())}function l(){if(!y){var e=r(a);y=!0;for(var t=h.length;t;){for(d=h,h=[];++v<t;)d&&d[v].run();v=-1,t=h.length}d=null,y=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function u(){}var c,f,p=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],y=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||y||r(l)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var r=n(24);t.Motion=o(r);var i=n(25);t.StaggeredMotion=o(i);var a=n(26);t.TransitionMotion=o(a);var l=n(29);t.spring=o(l);var s=n(11);t.presets=o(s);var u=n(3);t.stripStyle=o(u);var c=n(28);t.reorderKeys=o(c)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),f=o(c),p=n(2),d=o(p),h=n(18),y=o(h),v=n(12),m=n(9),b=n(14),S=o(b),g={wheel:"wheel",api:"api",touch:"touch",touchEnd:"touchEnd",mousemove:"mousemove",keyPress:"keypress"},w=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={topPosition:0,leftPosition:0,realHeight:0,containerHeight:0,realWidth:0,containerWidth:0},n.scrollArea={refresh:function(){n.setSizesToState()},scrollTop:function(){n.scrollTop()},scrollBottom:function(){n.scrollBottom()},scrollYTo:function(e){n.scrollYTo(e)},scrollLeft:function(){n.scrollLeft()},scrollRight:function(){n.scrollRight()},scrollXTo:function(e){n.scrollXTo(e)}},n.evntsPreviousValues={clientX:0,clientY:0,deltaX:0,deltaY:0},n.bindedHandleWindowResize=n.handleWindowResize.bind(n),n}return a(t,e),u(t,[{key:"getChildContext",value:function(){return{scrollArea:this.scrollArea}}},{key:"componentDidMount",value:function(){this.props.contentWindow&&this.props.contentWindow.addEventListener("resize",this.bindedHandleWindowResize),this.lineHeightPx=(0,y.default)((0,m.findDOMNode)(this.content)),this.setSizesToState()}},{key:"componentWillUnmount",value:function(){this.props.contentWindow&&this.props.contentWindow.removeEventListener("resize",this.bindedHandleWindowResize)}},{key:"componentDidUpdate",value:function(){this.setSizesToState()}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.className,r=t.contentClassName,i=t.ownerDocument,a=this.props.smoothScrolling&&(this.state.eventType===g.wheel||this.state.eventType===g.api||this.state.eventType===g.touchEnd||this.state.eventType===g.keyPress),l=this.canScrollY()?f.default.createElement(S.default,{ownerDocument:i,realSize:this.state.realHeight,containerSize:this.state.containerHeight,position:this.state.topPosition,onMove:this.handleScrollbarMove.bind(this),onPositionChange:this.handleScrollbarYPositionChange.bind(this),containerStyle:this.props.verticalContainerStyle,scrollbarStyle:this.props.verticalScrollbarStyle,smoothScrolling:a,minScrollSize:this.props.minScrollSize,onFocus:this.focusContent.bind(this),type:"vertical"}):null,u=this.canScrollX()?f.default.createElement(S.default,{ownerDocument:i,realSize:this.state.realWidth,containerSize:this.state.containerWidth,position:this.state.leftPosition,onMove:this.handleScrollbarMove.bind(this),onPositionChange:this.handleScrollbarXPositionChange.bind(this),containerStyle:this.props.horizontalContainerStyle,scrollbarStyle:this.props.horizontalScrollbarStyle,smoothScrolling:a,minScrollSize:this.props.minScrollSize,onFocus:this.focusContent.bind(this),type:"horizontal"}):null;"function"==typeof n?((0,m.warnAboutFunctionChild)(),n=n()):(0,m.warnAboutElementChild)();var c="scrollarea "+(o||""),p="scrollarea-content "+(r||""),d={marginTop:-this.state.topPosition,marginLeft:-this.state.leftPosition},h=a?(0,m.modifyObjValues)(d,function(e){return(0,v.spring)(e)}):d;return f.default.createElement(v.Motion,{style:h},function(t){return f.default.createElement("div",{ref:function(t){return e.wrapper=t},className:c,style:e.props.style,onWheel:e.handleWheel.bind(e)},f.default.createElement("div",{ref:function(t){return e.content=t},style:s({},e.props.contentStyle,t),className:p,onTouchStart:e.handleTouchStart.bind(e),onTouchMove:e.handleTouchMove.bind(e),onTouchEnd:e.handleTouchEnd.bind(e),onKeyDown:e.handleKeyDown.bind(e),tabIndex:e.props.focusableTabIndex},n),l,u)})}},{key:"setStateFromEvent",value:function(e,t){this.props.onScroll&&this.props.onScroll(e),this.setState(s({},e,{eventType:t}))}},{key:"handleTouchStart",value:function(e){var t=e.touches;if(1===t.length){var n=t[0],o=n.clientX,r=n.clientY;this.eventPreviousValues=s({},this.eventPreviousValues,{clientY:r,clientX:o,timestamp:Date.now()})}}},{key:"handleTouchMove",value:function(e){this.canScroll()&&(e.preventDefault(),e.stopPropagation());var t=e.touches;if(1===t.length){var n=t[0],o=n.clientX,r=n.clientY,i=this.eventPreviousValues.clientY-r,a=this.eventPreviousValues.clientX-o;this.eventPreviousValues=s({},this.eventPreviousValues,{deltaY:i,deltaX:a,clientY:r,clientX:o,timestamp:Date.now()}),this.setStateFromEvent(this.composeNewState(-a,-i))}}},{key:"handleTouchEnd",value:function(e){var t=this.eventPreviousValues,n=t.deltaX,o=t.deltaY,r=t.timestamp;"undefined"==typeof n&&(n=0),"undefined"==typeof o&&(o=0),Date.now()-r<200&&this.setStateFromEvent(this.composeNewState(10*-n,10*-o),g.touchEnd),this.eventPreviousValues=s({},this.eventPreviousValues,{deltaY:0,deltaX:0})}},{key:"handleScrollbarMove",value:function(e,t){this.setStateFromEvent(this.composeNewState(t,e))}},{key:"handleScrollbarXPositionChange",value:function(e){this.scrollXTo(e)}},{key:"handleScrollbarYPositionChange",value:function(e){this.scrollYTo(e)}},{key:"handleWheel",value:function(e){var t=e.deltaY,n=e.deltaX;if(this.props.swapWheelAxes){var o=[n,t];t=o[0],n=o[1]}1===e.deltaMode&&(t*=this.lineHeightPx,n*=this.lineHeightPx),t*=this.props.speed,n*=this.props.speed;var r=this.composeNewState(-n,-t);(r.topPosition&&this.state.topPosition!==r.topPosition||r.leftPosition&&this.state.leftPosition!==r.leftPosition||this.props.stopScrollPropagation)&&(e.preventDefault(),e.stopPropagation()),this.setStateFromEvent(r,g.wheel),this.focusContent()}},{key:"handleKeyDown",value:function(e){if("input"!==e.target.tagName.toLowerCase()&&"textarea"!==e.target.tagName.toLowerCase()&&!e.target.isContentEditable){var t=0,n=0,o=this.lineHeightPx?this.lineHeightPx:10;switch(e.keyCode){case 33:t=this.state.containerHeight-o;break;case 34:t=-this.state.containerHeight+o;break;case 37:n=o;break;case 38:t=o;break;case 39:n=-o;break;case 40:t=-o}if(0!==t||0!==n){var r=this.composeNewState(n,t);e.preventDefault(),e.stopPropagation(),this.setStateFromEvent(r,g.keyPress)}}}},{key:"handleWindowResize",value:function(){var e=this.computeSizes();e=this.getModifiedPositionsIfNeeded(e),this.setStateFromEvent(e)}},{key:"composeNewState",value:function(e,t){var n=this.computeSizes();return this.canScrollY(n)?n.topPosition=this.computeTopPosition(t,n):n.topPosition=0,this.canScrollX(n)&&(n.leftPosition=this.computeLeftPosition(e,n)),n}},{key:"computeTopPosition",value:function(e,t){var n=this.state.topPosition-e;return this.normalizeTopPosition(n,t)}},{key:"computeLeftPosition",value:function(e,t){var n=this.state.leftPosition-e;return this.normalizeLeftPosition(n,t)}},{key:"normalizeTopPosition",value:function(e,t){return e>t.realHeight-t.containerHeight&&(e=t.realHeight-t.containerHeight),e<0&&(e=0),e}},{key:"normalizeLeftPosition",value:function(e,t){return e>t.realWidth-t.containerWidth?e=t.realWidth-t.containerWidth:e<0&&(e=0),e}},{key:"computeSizes",value:function(){var e=this.content.offsetHeight,t=this.wrapper.offsetHeight,n=this.content.offsetWidth,o=this.wrapper.offsetWidth;return{realHeight:e,containerHeight:t,realWidth:n,containerWidth:o}}},{key:"setSizesToState",value:function(){var e=this.computeSizes();e.realHeight===this.state.realHeight&&e.realWidth===this.state.realWidth||this.setStateFromEvent(this.getModifiedPositionsIfNeeded(e))}},{key:"scrollTop",value:function(){this.scrollYTo(0)}},{key:"scrollBottom",value:function(){this.scrollYTo(this.state.realHeight-this.state.containerHeight)}},{key:"scrollLeft",value:function(){this.scrollXTo(0)}},{key:"scrollRight",value:function(){this.scrollXTo(this.state.realWidth-this.state.containerWidth)}},{key:"scrollYTo",value:function(e){if(this.canScrollY()){var t=this.normalizeTopPosition(e,this.computeSizes());this.setStateFromEvent({topPosition:t},g.api)}}},{key:"scrollXTo",value:function(e){if(this.canScrollX()){var t=this.normalizeLeftPosition(e,this.computeSizes());this.setStateFromEvent({leftPosition:t},g.api)}}},{key:"canScrollY",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=e.realHeight>e.containerHeight;return t&&this.props.vertical}},{key:"canScrollX",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=e.realWidth>e.containerWidth;return t&&this.props.horizontal}},{key:"canScroll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;return this.canScrollY(e)||this.canScrollX(e)}},{key:"getModifiedPositionsIfNeeded",value:function(e){var t=e.realHeight-e.containerHeight;this.state.topPosition>=t&&(e.topPosition=this.canScrollY(e)?(0,m.positiveOrZero)(t):0);var n=e.realWidth-e.containerWidth;return this.state.leftPosition>=n&&(e.leftPosition=this.canScrollX(e)?(0,m.positiveOrZero)(n):0),e}},{key:"focusContent",value:function(){this.content&&(0,m.findDOMNode)(this.content).focus()}}]),t}(f.default.Component);t.default=w,w.childContextTypes={scrollArea:d.default.object},w.propTypes={className:d.default.string,style:d.default.object,speed:d.default.number,contentClassName:d.default.string,contentStyle:d.default.object,vertical:d.default.bool,verticalContainerStyle:d.default.object,verticalScrollbarStyle:d.default.object,horizontal:d.default.bool,horizontalContainerStyle:d.default.object,horizontalScrollbarStyle:d.default.object,onScroll:d.default.func,contentWindow:d.default.any,ownerDocument:d.default.any,smoothScrolling:d.default.bool,minScrollSize:d.default.number,swapWheelAxes:d.default.bool,stopScrollPropagation:d.default.bool,focusableTabIndex:d.default.number},w.defaultProps={speed:1,vertical:!0,horizontal:!0,smoothScrolling:!1,swapWheelAxes:!1,contentWindow:"object"===("undefined"==typeof window?"undefined":l(window))?window:void 0,ownerDocument:"object"===("undefined"==typeof document?"undefined":l(document))?document:void 0,focusableTabIndex:1}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=o(u),f=n(2),p=o(f),d=n(12),h=n(9),y=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=n.calculateState(e);return n.state={position:o.position,scrollSize:o.scrollSize,isDragging:!1,lastClientPosition:0},"vertical"===e.type?n.bindedHandleMouseMove=n.handleMouseMoveForVertical.bind(n):n.bindedHandleMouseMove=n.handleMouseMoveForHorizontal.bind(n),n.bindedHandleMouseUp=n.handleMouseUp.bind(n),n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){this.props.ownerDocument&&(this.props.ownerDocument.addEventListener("mousemove",this.bindedHandleMouseMove),this.props.ownerDocument.addEventListener("mouseup",this.bindedHandleMouseUp))}},{key:"componentWillReceiveProps",value:function(e){this.setState(this.calculateState(e))}},{key:"componentWillUnmount",value:function(){this.props.ownerDocument&&(this.props.ownerDocument.removeEventListener("mousemove",this.bindedHandleMouseMove),this.props.ownerDocument.removeEventListener("mouseup",this.bindedHandleMouseUp))}},{key:"calculateFractionalPosition",value:function(e,t,n){var o=e-t;return 1-(o-n)/o}},{key:"calculateState",value:function(e){var t=this.calculateFractionalPosition(e.realSize,e.containerSize,e.position),n=e.containerSize*e.containerSize/e.realSize,o=n<e.minScrollSize?e.minScrollSize:n,r=(e.containerSize-o)*t;return{scrollSize:o,position:Math.round(r)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.smoothScrolling,o=t.isDragging,r=t.type,i=t.scrollbarStyle,a=t.containerStyle,s="horizontal"===r,u="vertical"===r,f=this.createScrollStyles(),p=n?(0,h.modifyObjValues)(f,function(e){return(0,d.spring)(e)}):f,y="scrollbar-container "+(o?"active":"")+" "+(s?"horizontal":"")+" "+(u?"vertical":"");return c.default.createElement(d.Motion,{style:p},function(t){return c.default.createElement("div",{className:y,style:a,onMouseDown:e.handleScrollBarContainerClick.bind(e),ref:function(t){return e.scrollbarContainer=t}},c.default.createElement("div",{className:"scrollbar",style:l({},i,t),onMouseDown:e.handleMouseDown.bind(e)}))})}},{key:"handleScrollBarContainerClick",value:function(e){e.preventDefault();var t=this.computeMultiplier(),n=this.isVertical()?e.clientY:e.clientX,o=this.scrollbarContainer.getBoundingClientRect(),r=o.top,i=o.left,a=this.isVertical()?r:i,l=n-a,s=this.props.containerSize*this.props.containerSize/this.props.realSize;this.setState({isDragging:!0,lastClientPosition:n}),this.props.onPositionChange((l-s/2)/t)}},{key:"handleMouseMoveForHorizontal",value:function(e){var t=this.computeMultiplier();if(this.state.isDragging){e.preventDefault();var n=this.state.lastClientPosition-e.clientX;this.setState({lastClientPosition:e.clientX}),this.props.onMove(0,n/t)}}},{key:"handleMouseMoveForVertical",value:function(e){var t=this.computeMultiplier();if(this.state.isDragging){e.preventDefault();var n=this.state.lastClientPosition-e.clientY;this.setState({lastClientPosition:e.clientY}),this.props.onMove(n/t,0)}}},{key:"handleMouseDown",value:function(e){e.preventDefault(),e.stopPropagation();var t=this.isVertical()?e.clientY:e.clientX;this.setState({isDragging:!0,lastClientPosition:t}),this.props.onFocus()}},{key:"handleMouseUp",value:function(e){this.state.isDragging&&(e.preventDefault(),this.setState({isDragging:!1}))}},{key:"createScrollStyles",value:function(){return"vertical"===this.props.type?{height:this.state.scrollSize,marginTop:this.state.position}:{width:this.state.scrollSize,marginLeft:this.state.position}}},{key:"computeMultiplier",value:function(){return this.props.containerSize/this.props.realSize}},{key:"isVertical",value:function(){return"vertical"===this.props.type}}]),t}(c.default.Component);y.propTypes={onMove:p.default.func,onPositionChange:p.default.func,onFocus:p.default.func,realSize:p.default.number,containerSize:p.default.number,position:p.default.number,containerStyle:p.default.object,scrollbarStyle:p.default.object,type:p.default.oneOf(["vertical","horizontal"]),ownerDocument:p.default.any,smoothScrolling:p.default.bool,minScrollSize:p.default.number},y.defaultProps={type:"vertical",smoothScrolling:!1},t.default=y},function(e,t){var n=function(e,t,n){return n=window.getComputedStyle,(n?n(e):e.currentStyle)[t.replace(/-(\w)/gi,function(e,t){return t.toUpperCase()})]};e.exports=n},function(e,t,n){t=e.exports=n(17)(),t.push([e.id,".scrollarea-content{margin:0;padding:0;overflow:hidden;position:relative}.scrollarea-content:focus{outline:0}.scrollarea{position:relative;overflow:hidden}.scrollarea .scrollbar-container{position:absolute;background:none;opacity:.1;z-index:9999;-webkit-transition:all .4s;transition:all .4s}.scrollarea .scrollbar-container.horizontal{width:100%;height:10px;left:0;bottom:0}.scrollarea .scrollbar-container.horizontal .scrollbar{width:20px;height:8px;background:#000;margin-top:1px}.scrollarea .scrollbar-container.vertical{width:10px;height:100%;right:0;top:0}.scrollarea .scrollbar-container.vertical .scrollbar{width:8px;height:20px;background:#000;margin-left:1px}.scrollarea .scrollbar-container.active,.scrollarea .scrollbar-container:hover{background:gray;opacity:.6!important}.scrollarea:hover .scrollbar-container{opacity:.3}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function o(e){var t=r(e,"line-height"),n=parseFloat(t,10);if(t===n+""){var o=e.style.lineHeight;e.style.lineHeight=t+"em",t=r(e,"line-height"),n=parseFloat(t,10),o?e.style.lineHeight=o:delete e.style.lineHeight}if(t.indexOf("pt")!==-1?(n*=4,n/=3):t.indexOf("mm")!==-1?(n*=96,n/=25.4):t.indexOf("cm")!==-1?(n*=96,n/=2.54):t.indexOf("in")!==-1?n*=96:t.indexOf("pc")!==-1&&(n*=16),n=Math.round(n),"normal"===t){var i=e.nodeName,a=document.createElement(i);a.innerHTML="&nbsp;";var l=r(e,"font-size");a.style.fontSize=l;var s=document.body;s.appendChild(a);var u=a.offsetHeight;n=u,s.removeChild(a)}return n}var r=n(15);e.exports=o},function(e,t,n){"use strict";var o=n(21),r=n(22),i=n(20);e.exports=function(){function e(e,t,n,o,a,l){l!==i&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n},function(e,t){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function o(e,t,n,o,i,a,l,s){if(r(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,i,a,l,s],f=0;u=new Error(t.replace(/%s/g,function(){return c[f++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var r=function(e){};e.exports=o},function(e,t,n){(function(t){(function(){var n,o,r,i,a,l;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},o=t.hrtime,n=function(){var e;return e=o(),1e9*e[0]+e[1]},i=n(),l=1e9*t.uptime(),a=i-l):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(t,n(10))},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(6),u=o(s),c=n(3),f=o(c),p=n(8),d=o(p),h=n(4),y=o(h),v=n(5),m=o(v),b=n(7),S=o(b),g=n(1),w=o(g),P=n(2),T=o(P),k=1e3/60,O=function(e){function t(n){var o=this;r(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=o.state,r=n.currentStyle,i=n.currentVelocity,l=n.lastIdealStyle,s=n.lastIdealVelocity;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var c=e[u];"number"==typeof c&&(t||(t=!0,r=a({},r),i=a({},i),l=a({},l),s=a({},s)),r[u]=c,i[u]=0,l[u]=c,s[u]=0)}t&&o.setState({currentStyle:r,currentVelocity:i,lastIdealStyle:l,lastIdealVelocity:s})},this.startAnimationIfNecessary=function(){o.animationID=m.default(function(e){var t=o.props.style;if(S.default(o.state.currentStyle,t,o.state.currentVelocity))return o.wasAnimating&&o.props.onRest&&o.props.onRest(),o.animationID=null,o.wasAnimating=!1,void(o.accumulatedTime=0);o.wasAnimating=!0;var n=e||y.default(),r=n-o.prevTime;if(o.prevTime=n,o.accumulatedTime=o.accumulatedTime+r,o.accumulatedTime>10*k&&(o.accumulatedTime=0),0===o.accumulatedTime)return o.animationID=null,void o.startAnimationIfNecessary();var i=(o.accumulatedTime-Math.floor(o.accumulatedTime/k)*k)/k,a=Math.floor(o.accumulatedTime/k),l={},s={},u={},c={};for(var f in t)if(Object.prototype.hasOwnProperty.call(t,f)){var p=t[f];if("number"==typeof p)u[f]=p,c[f]=0,l[f]=p,s[f]=0;else{for(var h=o.state.lastIdealStyle[f],v=o.state.lastIdealVelocity[f],m=0;m<a;m++){var b=d.default(k/1e3,h,v,p.val,p.stiffness,p.damping,p.precision);h=b[0],v=b[1]}var g=d.default(k/1e3,h,v,p.val,p.stiffness,p.damping,p.precision),w=g[0],P=g[1];u[f]=h+(w-h)*i,c[f]=v+(P-v)*i,l[f]=h,s[f]=v}}o.animationID=null,o.accumulatedTime-=a*k,o.setState({currentStyle:u,currentVelocity:c,lastIdealStyle:l,lastIdealVelocity:s}),o.unreadPropStyle=null,o.startAnimationIfNecessary()})},this.state=this.defaultState()}return i(t,e),l(t,null,[{key:"propTypes",value:{defaultStyle:T.default.objectOf(T.default.number),style:T.default.objectOf(T.default.oneOfType([T.default.number,T.default.object])).isRequired,children:T.default.func.isRequired,onRest:T.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,o=t||f.default(n),r=u.default(o);return{currentStyle:o,currentVelocity:r,lastIdealStyle:o,lastIdealVelocity:r}},t.prototype.componentDidMount=function(){this.prevTime=y.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=y.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(m.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&w.default.Children.only(e)},t}(w.default.Component);t.default=O,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,n){for(var o=0;o<e.length;o++)if(!g.default(e[o],t[o],n[o]))return!1;return!0}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(6),c=o(u),f=n(3),p=o(f),d=n(8),h=o(d),y=n(4),v=o(y),m=n(5),b=o(m),S=n(7),g=o(S),w=n(1),P=o(w),T=n(2),k=o(T),O=1e3/60,M=function(e){function t(n){var o=this;r(this,t),e.call(this,n),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=o.state,n=t.currentStyles,r=t.currentVelocities,i=t.lastIdealStyles,a=t.lastIdealVelocities,s=!1,u=0;u<e.length;u++){var c=e[u],f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,s=!0,n[u]=l({},n[u]),r[u]=l({},r[u]),i[u]=l({},i[u]),a[u]=l({},a[u])),n[u][p]=d,r[u][p]=0,i[u][p]=d,a[u][p]=0)}}s&&o.setState({currentStyles:n,currentVelocities:r,lastIdealStyles:i,lastIdealVelocities:a})},this.startAnimationIfNecessary=function(){o.animationID=b.default(function(e){
var t=o.props.styles(o.state.lastIdealStyles);if(a(o.state.currentStyles,t,o.state.currentVelocities))return o.animationID=null,void(o.accumulatedTime=0);var n=e||v.default(),r=n-o.prevTime;if(o.prevTime=n,o.accumulatedTime=o.accumulatedTime+r,o.accumulatedTime>10*O&&(o.accumulatedTime=0),0===o.accumulatedTime)return o.animationID=null,void o.startAnimationIfNecessary();for(var i=(o.accumulatedTime-Math.floor(o.accumulatedTime/O)*O)/O,l=Math.floor(o.accumulatedTime/O),s=[],u=[],c=[],f=[],p=0;p<t.length;p++){var d=t[p],y={},m={},b={},S={};for(var g in d)if(Object.prototype.hasOwnProperty.call(d,g)){var w=d[g];if("number"==typeof w)y[g]=w,m[g]=0,b[g]=w,S[g]=0;else{for(var P=o.state.lastIdealStyles[p][g],T=o.state.lastIdealVelocities[p][g],k=0;k<l;k++){var M=h.default(O/1e3,P,T,w.val,w.stiffness,w.damping,w.precision);P=M[0],T=M[1]}var x=h.default(O/1e3,P,T,w.val,w.stiffness,w.damping,w.precision),I=x[0],D=x[1];y[g]=P+(I-P)*i,m[g]=T+(D-T)*i,b[g]=P,S[g]=T}}c[p]=y,f[p]=m,s[p]=b,u[p]=S}o.animationID=null,o.accumulatedTime-=l*O,o.setState({currentStyles:c,currentVelocities:f,lastIdealStyles:s,lastIdealVelocities:u}),o.unreadPropStyles=null,o.startAnimationIfNecessary()})},this.state=this.defaultState()}return i(t,e),s(t,null,[{key:"propTypes",value:{defaultStyles:k.default.arrayOf(k.default.objectOf(k.default.number)),styles:k.default.func.isRequired,children:k.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,o=t||n().map(p.default),r=o.map(function(e){return c.default(e)});return{currentStyles:o,currentVelocities:r,lastIdealStyles:o,lastIdealVelocities:r}},t.prototype.componentDidMount=function(){this.prevTime=v.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=v.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(b.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&P.default.Children.only(e)},t}(P.default.Component);t.default=M,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,n){var o=t;return null==o?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,t){for(var r=0;r<o.length;r++)if(o[r].key===e.key)return{key:o[r].key,data:o[r].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}})}function l(e,t,n,o){if(o.length!==t.length)return!1;for(var r=0;r<o.length;r++)if(o[r].key!==t[r].key)return!1;for(var r=0;r<o.length;r++)if(!k.default(e[r],t[r].style,n[r]))return!1;return!0}function s(e,t,n,o,r,i,a,l,s){for(var u=b.default(o,r,function(e,o){var r=t(o);return null==r?(n({key:o.key,data:o.data}),null):k.default(i[e],r,a[e])?(n({key:o.key,data:o.data}),null):{key:o.key,data:o.data,style:r}}),c=[],f=[],d=[],h=[],y=0;y<u.length;y++){for(var v=u[y],m=null,S=0;S<o.length;S++)if(o[S].key===v.key){m=S;break}if(null==m){var g=e(v);c[y]=g,d[y]=g;var w=p.default(v.style);f[y]=w,h[y]=w}else c[y]=i[m],d[y]=l[m],f[y]=a[m],h[y]=s[m]}return[u,c,f,d,h]}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(6),p=o(f),d=n(3),h=o(d),y=n(8),v=o(y),m=n(27),b=o(m),S=n(4),g=o(S),w=n(5),P=o(w),T=n(7),k=o(T),O=n(1),M=o(O),x=n(2),I=o(x),D=1e3/60,_=function(e){function t(n){var o=this;r(this,t),e.call(this,n),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=s(o.props.willEnter,o.props.willLeave,o.props.didLeave,o.state.mergedPropsStyles,e,o.state.currentStyles,o.state.currentVelocities,o.state.lastIdealStyles,o.state.lastIdealVelocities),n=t[0],r=t[1],i=t[2],a=t[3],l=t[4],c=0;c<e.length;c++){var f=e[c].style,p=!1;for(var d in f)if(Object.prototype.hasOwnProperty.call(f,d)){var h=f[d];"number"==typeof h&&(p||(p=!0,r[c]=u({},r[c]),i[c]=u({},i[c]),a[c]=u({},a[c]),l[c]=u({},l[c]),n[c]={key:n[c].key,data:n[c].data,style:u({},n[c].style)}),r[c][d]=h,i[c][d]=0,a[c][d]=h,l[c][d]=0,n[c].style[d]=h)}}o.setState({currentStyles:r,currentVelocities:i,mergedPropsStyles:n,lastIdealStyles:a,lastIdealVelocities:l})},this.startAnimationIfNecessary=function(){o.unmounting||(o.animationID=P.default(function(e){if(!o.unmounting){var t=o.props.styles,n="function"==typeof t?t(a(o.state.mergedPropsStyles,o.unreadPropStyles,o.state.lastIdealStyles)):t;if(l(o.state.currentStyles,n,o.state.currentVelocities,o.state.mergedPropsStyles))return o.animationID=null,void(o.accumulatedTime=0);var r=e||g.default(),i=r-o.prevTime;if(o.prevTime=r,o.accumulatedTime=o.accumulatedTime+i,o.accumulatedTime>10*D&&(o.accumulatedTime=0),0===o.accumulatedTime)return o.animationID=null,void o.startAnimationIfNecessary();for(var u=(o.accumulatedTime-Math.floor(o.accumulatedTime/D)*D)/D,c=Math.floor(o.accumulatedTime/D),f=s(o.props.willEnter,o.props.willLeave,o.props.didLeave,o.state.mergedPropsStyles,n,o.state.currentStyles,o.state.currentVelocities,o.state.lastIdealStyles,o.state.lastIdealVelocities),p=f[0],d=f[1],h=f[2],y=f[3],m=f[4],b=0;b<p.length;b++){var S=p[b].style,w={},P={},T={},k={};for(var O in S)if(Object.prototype.hasOwnProperty.call(S,O)){var M=S[O];if("number"==typeof M)w[O]=M,P[O]=0,T[O]=M,k[O]=0;else{for(var x=y[b][O],I=m[b][O],_=0;_<c;_++){var j=v.default(D/1e3,x,I,M.val,M.stiffness,M.damping,M.precision);x=j[0],I=j[1]}var C=v.default(D/1e3,x,I,M.val,M.stiffness,M.damping,M.precision),z=C[0],E=C[1];w[O]=x+(z-x)*u,P[O]=I+(E-I)*u,T[O]=x,k[O]=I}}y[b]=T,m[b]=k,d[b]=w,h[b]=P}o.animationID=null,o.accumulatedTime-=c*D,o.setState({currentStyles:d,currentVelocities:h,lastIdealStyles:y,lastIdealVelocities:m,mergedPropsStyles:p}),o.unreadPropStyles=null,o.startAnimationIfNecessary()}}))},this.state=this.defaultState()}return i(t,e),c(t,null,[{key:"propTypes",value:{defaultStyles:I.default.arrayOf(I.default.shape({key:I.default.string.isRequired,data:I.default.any,style:I.default.objectOf(I.default.number).isRequired})),styles:I.default.oneOfType([I.default.func,I.default.arrayOf(I.default.shape({key:I.default.string.isRequired,data:I.default.any,style:I.default.objectOf(I.default.oneOfType([I.default.number,I.default.object])).isRequired}))]).isRequired,children:I.default.func.isRequired,willEnter:I.default.func,willLeave:I.default.func,didLeave:I.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return h.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,o=e.willEnter,r=e.willLeave,i=e.didLeave,a="function"==typeof n?n(t):n,l=void 0;l=null==t?a:t.map(function(e){for(var t=0;t<a.length;t++)if(a[t].key===e.key)return a[t];return e});var u=null==t?a.map(function(e){return h.default(e.style)}):t.map(function(e){return h.default(e.style)}),c=null==t?a.map(function(e){return p.default(e.style)}):t.map(function(e){return p.default(e.style)}),f=s(o,r,i,l,a,u,c,u,c),d=f[0],y=f[1],v=f[2],m=f[3],b=f[4];return{currentStyles:y,currentVelocities:v,lastIdealStyles:m,lastIdealVelocities:b,mergedPropsStyles:d}},t.prototype.componentDidMount=function(){this.prevTime=g.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;"function"==typeof t?this.unreadPropStyles=t(a(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):this.unreadPropStyles=t,null==this.animationID&&(this.prevTime=g.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(P.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=a(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&M.default.Children.only(t)},t}(M.default.Component);t.default=_,e.exports=t.default},function(e,t){"use strict";function n(e,t,n){for(var o={},r=0;r<e.length;r++)o[e[r].key]=r;for(var i={},r=0;r<t.length;r++)i[t[r].key]=r;for(var a=[],r=0;r<t.length;r++)a[r]=t[r];for(var r=0;r<e.length;r++)if(!Object.prototype.hasOwnProperty.call(i,e[r].key)){var l=n(r,e[r]);null!=l&&a.push(l)}return a.sort(function(e,n){var r=i[e.key],a=i[n.key],l=o[e.key],s=o[n.key];if(null!=r&&null!=a)return i[e.key]-i[n.key];if(null!=l&&null!=s)return o[e.key]-o[n.key];if(null!=r){for(var u=0;u<t.length;u++){var c=t[u].key;if(Object.prototype.hasOwnProperty.call(o,c)){if(r<i[c]&&s>o[c])return-1;if(r>i[c]&&s<o[c])return 1}}return 1}for(var u=0;u<t.length;u++){var c=t[u].key;if(Object.prototype.hasOwnProperty.call(o,c)){if(a<i[c]&&l>o[c])return 1;if(a>i[c]&&l<o[c])return-1}}return-1})}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t,n){"use strict";function o(){}t.__esModule=!0,t.default=o;e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return i({},s,t,{val:e})}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=r;var a=n(11),l=o(a),s=i({},l.default.noWobble,{precision:.01});e.exports=t.default},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=d[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],t));d[o.id]={id:o.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],l=r[2],s=r[3],u={css:a,media:l,sourceMap:s};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function i(e,t){var n=v(),o=S[S.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),S.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=S.indexOf(e);t>=0&&S.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function u(e,t){var n,o,r;if(t.singleton){var i=b++;n=m||(m=l(t)),o=c.bind(null,n,i,!1),r=c.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),o=p.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),o=f.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function c(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},y=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,b=0,S=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=y()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var l=n[a],s=d[l.id];s.refs--,i.push(s)}if(e){var u=r(e);o(u,t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(16);"string"==typeof o&&(o=[[e.id,o,""]]);n(30)(o,{});o.locals&&(e.exports=o.locals)}])});
},{"react":"react"}],2:[function(require,module,exports){
"use strict";
;
;
;
var isWebSocket = function (constructor) {
    return constructor && constructor.CLOSING === 2;
};
var isGlobalWebSocket = function () {
    return typeof WebSocket !== 'undefined' && isWebSocket(WebSocket);
};
var getDefaultOptions = function () { return ({
    constructor: isGlobalWebSocket() ? WebSocket : null,
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1500,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    debug: false,
}); };
var bypassProperty = function (src, dst, name) {
    Object.defineProperty(dst, name, {
        get: function () { return src[name]; },
        set: function (value) { src[name] = value; },
        enumerable: true,
        configurable: true,
    });
};
var initReconnectionDelay = function (config) {
    return (config.minReconnectionDelay + Math.random() * config.minReconnectionDelay);
};
var updateReconnectionDelay = function (config, previousDelay) {
    var newDelay = previousDelay * config.reconnectionDelayGrowFactor;
    return (newDelay > config.maxReconnectionDelay)
        ? config.maxReconnectionDelay
        : newDelay;
};
var LEVEL_0_EVENTS = ['onopen', 'onclose', 'onmessage', 'onerror'];
var reassignEventListeners = function (ws, oldWs, listeners) {
    Object.keys(listeners).forEach(function (type) {
        listeners[type].forEach(function (_a) {
            var listener = _a[0], options = _a[1];
            ws.addEventListener(type, listener, options);
        });
    });
    if (oldWs) {
        LEVEL_0_EVENTS.forEach(function (name) {
            ws[name] = oldWs[name];
        });
    }
};
var ReconnectingWebsocket = function (url, protocols, options) {
    var _this = this;
    if (options === void 0) { options = {}; }
    var ws;
    var connectingTimeout;
    var reconnectDelay = 0;
    var retriesCount = 0;
    var shouldRetry = true;
    var savedOnClose = null;
    var listeners = {};
    // require new to construct
    if (!(this instanceof ReconnectingWebsocket)) {
        throw new TypeError("Failed to construct 'ReconnectingWebSocket': Please use the 'new' operator");
    }
    // Set config. Not using `Object.assign` because of IE11
    var config = getDefaultOptions();
    Object.keys(config)
        .filter(function (key) { return options.hasOwnProperty(key); })
        .forEach(function (key) { return config[key] = options[key]; });
    if (!isWebSocket(config.constructor)) {
        throw new TypeError('Invalid WebSocket constructor. Set `options.constructor`');
    }
    var log = config.debug ? function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return console.log.apply(console, ['RWS:'].concat(params));
    } : function () { };
    /**
     * Not using dispatchEvent, otherwise we must use a DOM Event object
     * Deferred because we want to handle the close event before this
     */
    var emitError = function (code, msg) { return setTimeout(function () {
        var err = new Error(msg);
        err.code = code;
        if (Array.isArray(listeners.error)) {
            listeners.error.forEach(function (_a) {
                var fn = _a[0];
                return fn(err);
            });
        }
        if (ws.onerror) {
            ws.onerror(err);
        }
    }, 0); };
    var handleClose = function () {
        log('handleClose', { shouldRetry: shouldRetry });
        retriesCount++;
        log('retries count:', retriesCount);
        if (retriesCount > config.maxRetries) {
            emitError('EHOSTDOWN', 'Too many failed connection attempts');
            return;
        }
        if (!reconnectDelay) {
            reconnectDelay = initReconnectionDelay(config);
        }
        else {
            reconnectDelay = updateReconnectionDelay(config, reconnectDelay);
        }
        log('handleClose - reconnectDelay:', reconnectDelay);
        if (shouldRetry) {
            setTimeout(connect, reconnectDelay);
        }
    };
    var connect = function () {
        if (!shouldRetry) {
            return;
        }
        log('connect');
        var oldWs = ws;
        var wsUrl = (typeof url === 'function') ? url() : url;
        ws = new config.constructor(wsUrl, protocols);
        connectingTimeout = setTimeout(function () {
            log('timeout');
            ws.close();
            emitError('ETIMEDOUT', 'Connection timeout');
        }, config.connectionTimeout);
        log('bypass properties');
        for (var key in ws) {
            // @todo move to constant
            if (['addEventListener', 'removeEventListener', 'close', 'send'].indexOf(key) < 0) {
                bypassProperty(ws, _this, key);
            }
        }
        ws.addEventListener('open', function () {
            clearTimeout(connectingTimeout);
            log('open');
            reconnectDelay = initReconnectionDelay(config);
            log('reconnectDelay:', reconnectDelay);
            retriesCount = 0;
        });
        ws.addEventListener('close', handleClose);
        reassignEventListeners(ws, oldWs, listeners);
        // because when closing with fastClose=true, it is saved and set to null to avoid double calls
        ws.onclose = ws.onclose || savedOnClose;
        savedOnClose = null;
    };
    log('init');
    connect();
    this.close = function (code, reason, _a) {
        if (code === void 0) { code = 1000; }
        if (reason === void 0) { reason = ''; }
        var _b = _a === void 0 ? {} : _a, _c = _b.keepClosed, keepClosed = _c === void 0 ? false : _c, _d = _b.fastClose, fastClose = _d === void 0 ? true : _d, _e = _b.delay, delay = _e === void 0 ? 0 : _e;
        log('close - params:', { reason: reason, keepClosed: keepClosed, fastClose: fastClose, delay: delay, retriesCount: retriesCount, maxRetries: config.maxRetries });
        shouldRetry = !keepClosed && retriesCount <= config.maxRetries;
        if (delay) {
            reconnectDelay = delay;
        }
        ws.close(code, reason);
        if (fastClose) {
            var fakeCloseEvent_1 = {
                code: code,
                reason: reason,
                wasClean: true,
            };
            // execute close listeners soon with a fake closeEvent
            // and remove them from the WS instance so they
            // don't get fired on the real close.
            handleClose();
            ws.removeEventListener('close', handleClose);
            // run and remove level2
            if (Array.isArray(listeners.close)) {
                listeners.close.forEach(function (_a) {
                    var listener = _a[0], options = _a[1];
                    listener(fakeCloseEvent_1);
                    ws.removeEventListener('close', listener, options);
                });
            }
            // run and remove level0
            if (ws.onclose) {
                savedOnClose = ws.onclose;
                ws.onclose(fakeCloseEvent_1);
                ws.onclose = null;
            }
        }
    };
    this.send = function (data) {
        ws.send(data);
    };
    this.addEventListener = function (type, listener, options) {
        if (Array.isArray(listeners[type])) {
            if (!listeners[type].some(function (_a) {
                var l = _a[0];
                return l === listener;
            })) {
                listeners[type].push([listener, options]);
            }
        }
        else {
            listeners[type] = [[listener, options]];
        }
        ws.addEventListener(type, listener, options);
    };
    this.removeEventListener = function (type, listener, options) {
        if (Array.isArray(listeners[type])) {
            listeners[type] = listeners[type].filter(function (_a) {
                var l = _a[0];
                return l !== listener;
            });
        }
        ws.removeEventListener(type, listener, options);
    };
};
module.exports = ReconnectingWebsocket;

},{}],3:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _ChatClient = require('./ChatClient');

var _ChatClient2 = _interopRequireDefault(_ChatClient);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _viewsEmptyStateView = require('../views/EmptyStateView');

var _viewsEmptyStateView2 = _interopRequireDefault(_viewsEmptyStateView);

var _materialUi = require('material-ui');

var _ChatUsers = require('./ChatUsers');

var _ChatUsers2 = _interopRequireDefault(_ChatUsers);

var _Pydio$requireLib = _pydio2['default'].requireLib('boot');

var PydioContextConsumer = _Pydio$requireLib.PydioContextConsumer;
var moment = _Pydio$requireLib.moment;

var Chat = (function (_React$Component) {
    _inherits(Chat, _React$Component);

    function Chat(props) {
        _classCallCheck(this, Chat);

        _React$Component.call(this, props);
        this.client = null;
        this.state = { messages: [], room: null, value: "" };
        this._newMessageListener = this.onNewMessage.bind(this);
    }

    Chat.prototype.componentDidMount = function componentDidMount() {
        this.join(this.props.roomType, this.props.roomObjectId);
    };

    Chat.prototype.componentWillUnmount = function componentWillUnmount() {
        this.stop();
    };

    Chat.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (prevState.messages.length <= this.state.messages.length) {
            this.refs.comments.scrollTop = 100000;
        }
    };

    Chat.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var pydio = nextProps.pydio;
        var roomType = nextProps.roomType;
        var roomObjectId = nextProps.roomObjectId;

        if (roomType !== this.props.roomType || roomObjectId !== this.props.roomObjectId) {
            if (this.client) {
                this.client.leaveRoom(this.props.roomType, this.props.roomObjectId, this._newMessageListener);
            }
            this.setState({ messages: [], room: null, value: "" });
            if (roomType && roomObjectId) {
                this.join(roomType, roomObjectId);
            }
        }
    };

    Chat.prototype.onRoomMessage = function onRoomMessage(msg) {
        if (msg) {
            this.setState({ room: msg['Room'] });
        }
    };

    Chat.prototype.onNewMessage = function onNewMessage(msg) {
        var deleteMsg = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

        if (!msg) {
            return;
        }
        if (deleteMsg) {
            this.setState({ messages: this.state.messages.filter(function (m) {
                    return m.Uuid !== msg.Uuid;
                }) });
        } else {
            this.setState({ messages: [].concat(this.state.messages, [msg]) });
        }
    };

    Chat.prototype.join = function join(roomType, roomObjectId) {
        if (!roomObjectId) {
            return;
        }
        var pydio = this.props.pydio;

        this.client = _ChatClient2['default'].getInstance(pydio);
        var room = this.client.joinRoom(roomType, roomObjectId, this._newMessageListener, this.onRoomMessage.bind(this));
        if (room !== null) {
            this.setState({ room: room });
        }
        this.client.loadHistory(roomType, roomObjectId);
    };

    Chat.prototype.stop = function stop() {
        var _props = this.props;
        var roomType = _props.roomType;
        var roomObjectId = _props.roomObjectId;

        if (this.client) this.client.leaveRoom(roomType, roomObjectId, this._newMessageListener);
    };

    Chat.prototype.postMessage = function postMessage() {
        if (!this.state.value) {
            return;
        }
        var room = this.state.room;

        if (!room || !room.Uuid) {
            console.error("Cannot find cell info");
            return;
        }
        var message = {
            "@type": "POST",
            "Message": { "RoomUuid": room.Uuid, "Message": this.state.value }
        };
        this.client.send(JSON.stringify(message));
        this.setState({ value: '' });
    };

    Chat.prototype.deleteMessage = function deleteMessage(msg) {
        var room = this.state.room;

        if (!room || !room.Uuid) {
            console.error("Cannot find cell info");
            return;
        }
        var message = {
            "@type": "DELETE_MSG",
            "Message": msg
        };
        this.client.send(JSON.stringify(message));
    };

    Chat.prototype.keyDown = function keyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.postMessage();
        }
    };

    Chat.prototype.render = function render() {
        var _this = this;

        var _props2 = this.props;
        var style = _props2.style;
        var msgContainerStyle = _props2.msgContainerStyle;
        var fieldHint = _props2.fieldHint;
        var emptyStateProps = _props2.emptyStateProps;
        var pydio = _props2.pydio;
        var pushMessagesToBottom = _props2.pushMessagesToBottom;
        var computePresenceFromACLs = _props2.computePresenceFromACLs;
        var _state = this.state;
        var messages = _state.messages;
        var room = _state.room;

        var data = [];
        var previousMDate = undefined;
        var previousAuthor = undefined;
        messages.forEach(function (m) {
            if (m['Message']) {
                var mDate = moment(parseFloat(m.Timestamp) * 1000).fromNow();
                var hideDate = previousMDate && previousMDate === mDate;
                var sameAuthor = previousAuthor && previousAuthor === m.Author && hideDate;
                data.push(_react2['default'].createElement(_Message2['default'], { key: m.Uuid, message: m, hideDate: hideDate, sameAuthor: sameAuthor, onDeleteMessage: function () {
                        _this.deleteMessage(m);
                    } }));
                previousMDate = mDate;
                previousAuthor = m.Author;
            }
        });
        var pushStyle = undefined;
        var pusher = undefined;
        if (pushMessagesToBottom) {
            pushStyle = { display: 'flex', flexDirection: 'column' };
            if (data && data.length) {
                pusher = _react2['default'].createElement('span', { style: { flex: 1 } });
            }
        }
        var emptyState = undefined;
        if (emptyStateProps && (!data || !data.length)) {
            emptyState = _react2['default'].createElement(_viewsEmptyStateView2['default'], _extends({ pydio: pydio }, emptyStateProps));
        }
        return _react2['default'].createElement(
            'div',
            { style: _extends({ padding: 0 }, style) },
            computePresenceFromACLs !== undefined && _react2['default'].createElement(_ChatUsers2['default'], { pydio: pydio, ACLs: computePresenceFromACLs, roomUsers: room ? room.Users : [] }),
            _react2['default'].createElement(
                'div',
                { ref: 'comments', className: 'comments_feed', style: _extends({ maxHeight: 300, overflowY: 'auto' }, pushStyle, msgContainerStyle) },
                pusher,
                data,
                emptyState
            ),
            _react2['default'].createElement(
                'div',
                { style: { backgroundColor: 'white', paddingLeft: 16, paddingRight: 16, borderTop: '1px solid #e0e0e0' } },
                _react2['default'].createElement(_materialUi.TextField, {
                    hintText: fieldHint,
                    hintStyle: { whiteSpace: 'nowrap' },
                    value: this.state.value,
                    onChange: function (event, newValue) {
                        _this.setState({ value: newValue });
                    },
                    multiLine: true,
                    ref: 'new_comment',
                    onKeyDown: this.keyDown.bind(this),
                    fullWidth: true,
                    underlineShow: false
                })
            )
        );
    };

    return Chat;
})(_react2['default'].Component);

Chat.PropTypes = {
    roomType: _react2['default'].PropTypes.string,
    roomObjectId: _react2['default'].PropTypes.string
};

exports['default'] = Chat = PydioContextConsumer(Chat);
exports['default'] = Chat;
module.exports = exports['default'];

},{"../views/EmptyStateView":59,"./ChatClient":4,"./ChatUsers":6,"./Message":7,"material-ui":"material-ui","pydio":"pydio","react":"react"}],4:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _pydioHttpWebsocket = require('pydio/http/websocket');

var _pydioHttpWebsocket2 = _interopRequireDefault(_pydioHttpWebsocket);

var _reconnectingWebsocket = require('reconnecting-websocket');

var _reconnectingWebsocket2 = _interopRequireDefault(_reconnectingWebsocket);

var ChatClient = (function (_PydioWebSocket) {
    _inherits(ChatClient, _PydioWebSocket);

    /**
     *
     * @param pydioObject
     * @return {ChatClient}
     */

    ChatClient.getInstance = function getInstance(pydioObject) {
        if (ChatClient._instance !== undefined) {
            return ChatClient._instance;
        } else {
            ChatClient._instance = new ChatClient(pydioObject);
            return ChatClient._instance;
        }
    };

    /**
     *
     * @param pydioObject {Pydio}
     */

    function ChatClient(pydioObject) {
        _classCallCheck(this, ChatClient);

        _PydioWebSocket.call(this, pydioObject);
        this.currentRepo = pydioObject.repositoryId;
        this.subscriptions = {};
        this.rooms = {};
        this.roomInfos = {};
        this.open();
    }

    ChatClient.prototype.getIdentifier = function getIdentifier(roomType, objectId) {
        return roomType + ':' + objectId;
    };

    ChatClient.prototype.getRoomInfoFromIdentifier = function getRoomInfoFromIdentifier(identifier) {
        var _identifier$split = identifier.split(':');

        var roomType = _identifier$split[0];
        var objectId = _identifier$split[1];

        return { roomType: roomType, objectId: objectId };
    };

    ChatClient.prototype.onRoomMessage = function onRoomMessage(msg) {
        if (msg) {
            var room = msg['Room'];
            var identifier = this.getIdentifier(room.Type, room.RoomTypeObject);
            this.roomInfos[identifier] = room;
        }
    };

    /**
     *
     * @param roomType string
     * @param objectId string
     * @param messageHandler Function
     * @param roomUpdateHandler Function
     * @param retry Number
     */

    ChatClient.prototype.joinRoom = function joinRoom(roomType, objectId, messageHandler, roomUpdateHandler) {
        var _this = this;

        var retry = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];

        var identifier = this.getIdentifier(roomType, objectId);
        if (this.subscriptions[identifier]) {
            var already = false;
            this.subscriptions[identifier].map(function (v) {
                if (v.messageHandler === messageHandler) {
                    already = true;
                }
            });
            if (!already) {
                this.subscriptions[identifier].push({ messageHandler: messageHandler, roomUpdateHandler: roomUpdateHandler });
            }
            return this.roomInfos[identifier];
        }
        if (this.connecting) {
            if (retry < 3) {
                setTimeout(function () {
                    //console.log('Connecting state... retrying now', objectId);
                    _this.joinRoom(roomType, objectId, messageHandler, roomUpdateHandler, retry + 1);
                }, 1500);
                return null;
            }
        } else if (!this.connOpen) {
            this.open();
            setTimeout(function () {
                //console.log('Not open... retrying now', objectId);
                _this.joinRoom(roomType, objectId, messageHandler, roomUpdateHandler, retry + 1);
            }, 1500);
            return null;
        }
        //console.log('Now storing subscription for ', objectId);
        this.subscriptions[roomType + ':' + objectId] = [{ messageHandler: messageHandler, roomUpdateHandler: roomUpdateHandler }];
        var message = { "@type": "JOIN", "Room": { "Type": roomType, "RoomTypeObject": objectId } };
        this.ws.send(JSON.stringify(message));
        return this.roomInfos[identifier];
    };

    /**
     * Send a HISTORY request to receive existing messages in room
     * @param roomType
     * @param objectId
     * @param retry int
     */

    ChatClient.prototype.loadHistory = function loadHistory(roomType, objectId) {
        var _this2 = this;

        var retry = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

        if (this.connecting) {
            if (retry < 3) {
                setTimeout(function () {
                    _this2.loadHistory(roomType, objectId, retry + 1);
                }, 1500);
                return;
            }
        }
        var message = { "@type": "HISTORY", "Room": { "Type": roomType, "RoomTypeObject": objectId } };
        this.ws.send(JSON.stringify(message));
    };

    /**
     *
     * @param roomType
     * @param objectId
     * @param messageHandler Function
     */

    ChatClient.prototype.leaveRoom = function leaveRoom(roomType, objectId) {
        var _this3 = this;

        var messageHandler = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];

        var keep = false;
        var identifier = this.getIdentifier(roomType, objectId);
        //console.log('Leaving room: ' + objectId);
        if (this.subscriptions[identifier]) {
            if (messageHandler) {
                // Just remove this handler
                this.subscriptions[identifier] = this.subscriptions[identifier].filter(function (v) {
                    return v.messageHandler !== messageHandler;
                });
                if (this.subscriptions[identifier].length) {
                    keep = true;
                } else {
                    delete this.subscriptions[identifier];
                }
            } else {
                delete this.subscriptions[identifier];
            }
        }
        if (!keep) {
            Object.keys(this.rooms).map(function (k) {
                if (_this3.rooms[k] === identifier) {
                    delete _this3.rooms[k];
                }
            });
            if (this.connOpen) {
                var message = { "@type": "LEAVE", "Room": { "Type": roomType, "RoomTypeObject": objectId } };
                this.ws.send(JSON.stringify(message));
            }
        }
    };

    /**
     *
     * @param msg
     */

    ChatClient.prototype.handleMessageReceived = function handleMessageReceived(msg) {
        var _this4 = this;

        var data = JSON.parse(msg['data']);
        if (data["@type"] === 'ROOM_UPDATE') {
            var identifier = this.getIdentifier(data.Room.Type, data.Room.RoomTypeObject);
            if (this.subscriptions[identifier]) {
                if (!this.rooms[data.Room.Uuid]) {
                    this.rooms[data.Room.Uuid] = identifier;
                }
                this.onRoomMessage(data);
                this.subscriptions[identifier].map(function (v) {
                    if (v.roomUpdateHandler) {
                        try {
                            v.roomUpdateHandler(data);
                        } catch (e) {}
                    }
                });
            }
        } else {
            (function () {
                var deleteMsg = false;
                var wsMessage = undefined;
                if (data["@type"] === 'DELETE_MSG') {
                    deleteMsg = true;
                    wsMessage = data["Message"];
                } else {
                    wsMessage = data;
                }
                if (wsMessage.RoomUuid && _this4.rooms[wsMessage.RoomUuid]) {
                    var subs = _this4.subscriptions[_this4.rooms[wsMessage.RoomUuid]];
                    var withRoomUpdateHandler = subs.filter(function (v) {
                        return v.roomUpdateHandler;
                    });
                    // If there is a subscriber with a roomUpdateHandler, it is an open room,
                    // so send message only to that one. The ones without are just notification listeners
                    if (withRoomUpdateHandler.length) {
                        subs = withRoomUpdateHandler;
                    }
                    subs.map(function (v) {
                        try {
                            v.messageHandler(wsMessage, deleteMsg);
                        } catch (e) {}
                    });
                }
            })();
        }
    };

    /**
     *
     * @param message
     */

    ChatClient.prototype.send = function send(message) {
        this.ws.send(message);
    };

    ChatClient.prototype.open = function open() {
        var _this5 = this;

        this.close();
        if (!this.currentRepo) {
            return;
        }
        var url = this.pydio.Parameters.get("ENDPOINT_WEBSOCKET").replace("/event", "/chat");
        this.ws = new _reconnectingWebsocket2['default'](url, [], {
            maxReconnectionDelay: 60000,
            reconnectionDelayGrowFactor: 1.6,
            maxRetries: 10
        });

        this.connecting = true;

        this.ws.addEventListener('open', function () {
            _pydioHttpWebsocket2['default'].subscribeJWT(_this5.ws).then(function () {
                _this5.connecting = false;
                _this5.connOpen = true;
            })['catch'](function () {
                _this5.connecting = false;
                _this5.connOpen = false;
            });
        });
        this.ws.addEventListener('message', function (msg) {
            _this5.handleMessageReceived(msg);
        });
        this.ws.addEventListener('close', function (event) {
            _this5.connOpen = false;
            _this5.connecting = false;
            _pydioHttpWebsocket2['default'].logClose(event);
        });
        this.ws.addEventListener('error', function (error) {
            if (error.code === 'EHOSTDOWN') {
                console.error('WebSocket maxRetries reached, host is down!');
            }
        });
    };

    ChatClient.prototype.close = function close() {
        var _this6 = this;

        if (this.ws === null) {
            return;
        }
        Object.keys(this.subscriptions).map(function (k) {
            var _getRoomInfoFromIdentifier = _this6.getRoomInfoFromIdentifier(k);

            var roomType = _getRoomInfoFromIdentifier.roomType;
            var objectId = _getRoomInfoFromIdentifier.objectId;

            _this6.leaveRoom(roomType, objectId);
        });
        this.ws.close(1000, 'Closing', { keepClosed: true });
    };

    return ChatClient;
})(_pydioHttpWebsocket2['default']);

exports['default'] = ChatClient;
module.exports = exports['default'];

},{"pydio/http/websocket":"pydio/http/websocket","reconnecting-websocket":2}],5:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChatClient = require('./ChatClient');

var _ChatClient2 = _interopRequireDefault(_ChatClient);

var ChatIcon = (function (_React$Component) {
    _inherits(ChatIcon, _React$Component);

    function ChatIcon(props) {
        _classCallCheck(this, ChatIcon);

        _React$Component.call(this, props);
        this.state = { newMessages: 0 };
        this._messageListener = this.onMessage.bind(this);
    }

    ChatIcon.prototype.onMessage = function onMessage(msg) {
        var deleteMsg = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

        if (deleteMsg) {
            this.setState({ newMessages: Math.max(0, this.state.newMessages - 1) });
        } else {
            this.setState({ newMessages: this.state.newMessages + 1 });
        }
    };

    ChatIcon.prototype.listenToRoom = function listenToRoom(roomType, objectId) {
        var client = _ChatClient2['default'].getInstance(this.props.pydio);
        client.joinRoom(roomType, objectId, this._messageListener, null);
    };

    ChatIcon.prototype.leaveRoom = function leaveRoom(roomType, objectId) {
        var client = _ChatClient2['default'].getInstance(this.props.pydio);
        client.leaveRoom(roomType, objectId, this._messageListener);
    };

    ChatIcon.prototype.componentDidMount = function componentDidMount() {
        var _props = this.props;
        var roomType = _props.roomType;
        var objectId = _props.objectId;

        this.listenToRoom(roomType, objectId);
    };

    ChatIcon.prototype.componentWillUnmount = function componentWillUnmount() {
        var _props2 = this.props;
        var roomType = _props2.roomType;
        var objectId = _props2.objectId;

        this.leaveRoom(roomType, objectId);
    };

    ChatIcon.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this = this;

        var _props3 = this.props;
        var roomType = _props3.roomType;
        var objectId = _props3.objectId;

        if (nextProps.roomType !== roomType || nextProps.objectId !== objectId) {
            this.leaveRoom(roomType, objectId);
            this.setState({ newMessages: 0 }, function () {
                _this.listenToRoom(nextProps.roomType, nextProps.objectId);
            });
        }
    };

    ChatIcon.prototype.onClick = function onClick() {
        var pydio = this.props.pydio;

        pydio.Controller.fireAction('toggle_chat_panel');
        this.setState({ newMessages: 0 });
    };

    ChatIcon.prototype.render = function render() {
        var newMessages = this.state.newMessages;

        if (newMessages === 0) {
            return null;
        }
        var red = '';
        var green = '#8BC34A';
        var style = { display: 'inline-block', padding: '0 5px', fontSize: 15, textAlign: 'center',
            color: green, fontWeight: 500, position: 'relative' };
        var innerStyle = { fontSize: 13, display: 'inline-block', position: 'absolute', top: -1, marginLeft: 2 };
        return _react2['default'].createElement(
            'span',
            { onClick: this.onClick.bind(this), className: 'mdi mdi-comment', style: style },
            _react2['default'].createElement(
                'span',
                { style: innerStyle },
                newMessages
            )
        );
    };

    return ChatIcon;
})(_react2['default'].Component);

exports['default'] = ChatIcon;
module.exports = exports['default'];

},{"./ChatClient":4,"react":"react"}],6:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydioModelIdmObjectHelper = require('pydio/model/idm-object-helper');

var _pydioModelIdmObjectHelper2 = _interopRequireDefault(_pydioModelIdmObjectHelper);

var ChatUsers = (function (_React$Component) {
    _inherits(ChatUsers, _React$Component);

    function ChatUsers() {
        _classCallCheck(this, ChatUsers);

        _React$Component.apply(this, arguments);
    }

    ChatUsers.prototype.render = function render() {
        var _props = this.props;
        var ACLs = _props.ACLs;
        var roomUsers = _props.roomUsers;
        var pydio = _props.pydio;

        var style = { user: {
                marginRight: 10
            }, online: {
                color: '#4CAF50',
                marginLeft: 5
            }, offline: {
                marginLeft: 5
            } };

        var users = Object.keys(ACLs).map(function (roleId) {
            var acl = ACLs[roleId];
            var online = undefined;
            var label = _pydioModelIdmObjectHelper2['default'].extractLabel(pydio, acl);
            if (acl.User) {
                if (roomUsers && roomUsers.indexOf(acl.User.Login) > -1) {
                    online = true;
                } else {
                    online = false;
                }
            }
            return _react2['default'].createElement(
                'span',
                { style: style.user },
                label,
                online !== undefined && _react2['default'].createElement('span', { className: "mdi mdi-checkbox-blank-circle" + (online ? "" : "-outline"), style: online ? style.online : style.offline }),
                online === undefined && _react2['default'].createElement('span', { className: "mdi mdi-account-multiple-outline", style: style.offline })
            );
        });

        return _react2['default'].createElement(
            'div',
            { style: { padding: 16, fontWeight: 500, color: '#757575' } },
            users
        );
    };

    return ChatUsers;
})(_react2['default'].Component);

exports['default'] = ChatUsers;
module.exports = exports['default'];

},{"pydio/model/idm-object-helper":"pydio/model/idm-object-helper","react":"react"}],7:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _usersAvatarUserAvatar = require('../users/avatar/UserAvatar');

var _usersAvatarUserAvatar2 = _interopRequireDefault(_usersAvatarUserAvatar);

var _materialUi = require('material-ui');

var _pydioUtilDom = require('pydio/util/dom');

var _pydioUtilDom2 = _interopRequireDefault(_pydioUtilDom);

var _Pydio$requireLib = _pydio2['default'].requireLib('boot');

var PydioContextConsumer = _Pydio$requireLib.PydioContextConsumer;
var moment = _Pydio$requireLib.moment;

var Message = (function (_React$Component) {
    _inherits(Message, _React$Component);

    function Message(props) {
        _classCallCheck(this, Message);

        _React$Component.call(this, props);
        this.state = { hover: false };
    }

    Message.prototype.render = function render() {
        var _this = this;

        var _props = this.props;
        var message = _props.message;
        var pydio = _props.pydio;
        var hideDate = _props.hideDate;
        var sameAuthor = _props.sameAuthor;
        var onDeleteMessage = _props.onDeleteMessage;

        var mDate = moment(parseFloat(message.Timestamp) * 1000);

        var styles = {
            date: {
                color: 'rgba(0,0,0,.23)',
                textAlign: 'center',
                display: 'flex',
                margin: '5px 0'
            },
            dateLine: {
                flex: 1,
                margin: '10px 20px',
                borderBottom: '1px solid #eee'
            },
            comment: {
                padding: 8,
                display: 'flex',
                alignItems: 'flex-start'
            },
            commentContent: {
                flex: '1',
                marginLeft: 8,
                position: 'relative',
                padding: '8px 10px',
                backgroundColor: '#eee'
            },
            commentDeleteBox: {
                position: 'absolute',
                top: 5,
                right: 5,
                cursor: 'pointer',
                fontSize: 20,
                color: '#424242',
                opacity: 0,
                transition: _pydioUtilDom2['default'].getBeziersTransition()
            }
        };

        var authorIsLogged = false;
        if (pydio.user.id === message.Author) {
            authorIsLogged = true;
        }
        var avatar = _react2['default'].createElement(
            'div',
            { style: sameAuthor ? { visibility: 'hidden' } : { paddingTop: 2 } },
            _react2['default'].createElement(_usersAvatarUserAvatar2['default'], {
                avatarSize: 30,
                pydio: pydio,
                userId: message.Author,
                displayLabel: false,
                richOnHover: true,
                avatarLetters: true
            })
        );
        var textStyle = _extends({}, styles.commentContent);
        if (authorIsLogged) {
            textStyle = _extends({}, textStyle, { marginLeft: 0, marginRight: 8 });
        }
        if (sameAuthor) {
            textStyle = _extends({}, textStyle, { borderRadius: 0 });
        }
        var deleteBox = undefined;
        if (authorIsLogged) {
            var hover = this.state.hover;

            var deleteStyle = styles.commentDeleteBox;
            if (hover) {
                deleteStyle.opacity = 1;
            }
            deleteBox = _react2['default'].createElement('span', {
                onClick: onDeleteMessage,
                className: 'mdi mdi-close',
                style: styles.commentDeleteBox,
                title: pydio.MessageHash['7']
            });
        }
        var text = _react2['default'].createElement(
            _materialUi.Paper,
            { zDepth: 0, style: textStyle },
            deleteBox,
            message.Message
        );

        return _react2['default'].createElement(
            'div',
            { style: sameAuthor ? { marginTop: -16 } : {}, onMouseOver: function () {
                    _this.setState({ hover: true });
                }, onMouseOut: function () {
                    _this.setState({ hover: false });
                } },
            !hideDate && _react2['default'].createElement(
                'div',
                { style: styles.date },
                _react2['default'].createElement('span', { style: styles.dateLine }),
                _react2['default'].createElement(
                    'span',
                    null,
                    mDate.fromNow()
                ),
                _react2['default'].createElement('span', { style: styles.dateLine })
            ),
            authorIsLogged && _react2['default'].createElement(
                'div',
                { style: styles.comment },
                text,
                ' ',
                avatar
            ),
            !authorIsLogged && _react2['default'].createElement(
                'div',
                { style: styles.comment },
                avatar,
                ' ',
                text
            )
        );
    };

    return Message;
})(_react2['default'].Component);

Message.PropTypes = {
    message: _react2['default'].PropTypes.object,
    hideDate: _react2['default'].PropTypes.bool,
    sameAuthor: _react2['default'].PropTypes.bool
};

exports['default'] = Message = PydioContextConsumer(Message);
exports['default'] = Message;
module.exports = exports['default'];

},{"../users/avatar/UserAvatar":56,"material-ui":"material-ui","pydio":"pydio","pydio/util/dom":"pydio/util/dom","react":"react"}],8:[function(require,module,exports){
(function (global){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

var _GridBuilder = require('./GridBuilder');

var _GridBuilder2 = _interopRequireDefault(_GridBuilder);

/**
 * Automatic layout for presenting draggable cards to users. Used for user and admin dashboard.
 */
var React = require('react');
var Pydio = require('pydio');

var _require = require('react-grid-layout');

var Responsive = _require.Responsive;
var WidthProvider = _require.WidthProvider;

var _Pydio$requireLib = Pydio.requireLib('boot');

var PydioContextConsumer = _Pydio$requireLib.PydioContextConsumer;
var CardsGrid = React.createClass({
    displayName: 'CardsGrid',

    /**
     * Save layouts in the users preference.
     *
     * @param {object} allLayouts Responsive layouts passed for saving
     */
    saveFullLayouts: function saveFullLayouts(allLayouts) {
        var savedPref = this.props.store.getUserPreference('Layout');
        // Compare JSON versions to avoid saving unnecessary changes
        if (savedPref && this.previousLayout && this.previousLayout == JSON.stringify(allLayouts)) {
            return;
        }
        this.previousLayout = JSON.stringify(allLayouts);
        this.props.store.saveUserPreference('Layout', allLayouts);
    },

    onLayoutChange: function onLayoutChange(currentLayout, allLayouts) {
        if (this._blockLayoutSave) return;
        this.saveFullLayouts(allLayouts);
    },

    componentWillUnmount: function componentWillUnmount() {
        this.props.store.stopObserving("cards", this._storeObserver);
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (this.props && nextProps.editMode !== this.props.editMode) {
            Object.keys(this.refs).forEach((function (k) {
                this.refs[k].toggleEditMode(nextProps.editMode);
            }).bind(this));
        }
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        return this._forceUpdate || false;
    },

    getInitialState: function getInitialState() {
        this._storeObserver = (function (e) {
            var _this = this;

            this._forceUpdate = true;
            this.setState({
                cards: this.props.store.getCards()
            }, function () {
                _this._forceUpdate = false;
            });
        }).bind(this);
        this.props.store.observe("cards", this._storeObserver);
        return { cards: this.props.store.getCards() };
    },

    removeCard: function removeCard(itemKey) {
        this.props.removeCard(itemKey);
    },

    buildCards: function buildCards(cards) {

        var index = 0;
        var layouts = { lg: [], md: [], sm: [], xs: [], xxs: [] };
        var items = [];
        var additionalNamespaces = [];
        var rand = Math.random();
        var savedLayouts = this.props.store.getUserPreference('Layout');
        var buildLayout = function buildLayout(classObject, itemKey, item, x, y) {
            var layout = classObject.getGridLayout(x, y);
            layout['handle'] = 'h4';
            if (item['gridHandle']) {
                layout['handle'] = item['gridHandle'];
            }
            layout['i'] = itemKey;
            return layout;
        };
        cards.map((function (item) {

            var parts = item.componentClass.split(".");
            var classNS = parts[0];
            var className = parts[1];
            var classObject;
            if (global[classNS] && global[classNS][className]) {
                classObject = global[classNS][className];
            } else {
                if (!global[classNS]) {
                    additionalNamespaces.push(classNS);
                }
                return;
            }
            var props = _extends({}, item.props);
            var itemKey = props['key'] = item['id'] || 'item_' + index;
            props.ref = itemKey;
            props.pydio = this.props.pydio;
            props.onCloseAction = (function () {
                this.removeCard(itemKey);
            }).bind(this);
            props.preferencesProvider = this.props.store;
            var defaultX = 0,
                defaultY = 0;
            if (item.defaultPosition) {
                defaultX = item.defaultPosition.x;
                defaultY = item.defaultPosition.y;
            }
            var defaultLayout = buildLayout(classObject, itemKey, item, defaultX, defaultY);

            for (var breakpoint in layouts) {
                if (!layouts.hasOwnProperty(breakpoint)) continue;
                var breakLayout = layouts[breakpoint];
                // Find corresponding element in preference
                var existing;
                if (savedLayouts && savedLayouts[breakpoint]) {
                    savedLayouts[breakpoint].map(function (gridData) {
                        if (gridData['i'] == itemKey && gridData['h'] == defaultLayout['h']) {
                            existing = gridData;
                        }
                    });
                }
                if (existing) {
                    breakLayout.push(existing);
                } else if (item.defaultLayouts && item.defaultLayouts[breakpoint]) {
                    var crtLayout = buildLayout(classObject, itemKey, item, item.defaultLayouts[breakpoint].x, item.defaultLayouts[breakpoint].y);
                    breakLayout.push(crtLayout);
                } else {
                    breakLayout.push(defaultLayout);
                }
            }
            index++;
            items.push(React.createElement(classObject, props));
        }).bind(this));

        if (additionalNamespaces.length) {
            this._blockLayoutSave = true;
            ResourcesManager.loadClassesAndApply(additionalNamespaces, (function () {
                this.setState({ additionalNamespacesLoaded: additionalNamespaces }, (function () {
                    this._blockLayoutSave = false;
                }).bind(this));
            }).bind(this));
        }
        return { cards: items, layouts: layouts };
    },

    render: function render() {
        var _buildCards = this.buildCards(this.state.cards);

        var cards = _buildCards.cards;
        var layouts = _buildCards.layouts;

        var ResponsiveGridLayout = WidthProvider(Responsive);
        return React.createElement(
            ResponsiveGridLayout,
            {
                className: 'dashboard-layout',
                cols: this.props.cols || { lg: 10, md: 8, sm: 8, xs: 4, xxs: 2 },
                layouts: layouts,
                rowHeight: 5,
                onLayoutChange: this.onLayoutChange,
                isDraggable: !this.props.disableDrag,
                style: this.props.style,
                autoSize: false
            },
            cards
        );
    }

});

var DynamicGrid = React.createClass({
    displayName: 'DynamicGrid',

    propTypes: {
        storeNamespace: React.PropTypes.string.isRequired,
        builderNamespaces: React.PropTypes.array,
        defaultCards: React.PropTypes.array,
        pydio: React.PropTypes.instanceOf(Pydio),
        disableDrag: React.PropTypes.bool,
        disableEdit: React.PropTypes.bool
    },

    removeCard: function removeCard(cardId) {

        this.state.store.removeCard(cardId);
    },

    addCard: function addCard(cardDefinition) {

        this.state.store.addCard(cardDefinition);
    },

    resetCardsAndLayout: function resetCardsAndLayout() {
        this.state.store.saveUserPreference('Layout', null);
        this.state.store.setCards(this.props.defaultCards);
    },

    getInitialState: function getInitialState() {
        var store = new _Store2['default'](this.props.storeNamespace, this.props.defaultCards, this.props.pydio);
        return {
            editMode: false,
            store: store
        };
    },

    toggleEditMode: function toggleEditMode() {
        this.setState({ editMode: !this.state.editMode });
    },

    render: function render() {
        var _this2 = this;

        var monitorWidgetEditing = (function (status) {
            this.setState({ widgetEditing: status });
        }).bind(this);

        var builder = undefined;
        if (this.props.builderNamespaces && this.state.editMode) {
            builder = React.createElement(_GridBuilder2['default'], {
                className: 'admin-helper-panel',
                namespaces: this.props.builderNamespaces,
                onCreateCard: this.addCard,
                onResetLayout: this.resetCardsAndLayout,
                onEditStatusChange: monitorWidgetEditing,
                getMessage: function (id) {
                    var ns = arguments.length <= 1 || arguments[1] === undefined ? 'ajxp_admin' : arguments[1];
                    return _this2.props.getMessage(id, ns);
                }
            });
        }
        var propStyle = this.props.style || {};
        var rglStyle = this.props.rglStyle || {};
        return React.createElement(
            'div',
            { style: _extends({}, this.props.style, { width: '100%', flex: '1' }), className: this.state.editMode ? "builder-open" : "" },
            !this.props.disableEdit && React.createElement(
                'div',
                { style: { position: 'absolute', bottom: 30, right: 18, zIndex: 11 } },
                React.createElement(MaterialUI.FloatingActionButton, {
                    tooltip: this.props.getMessage('home.49'),
                    onClick: this.toggleEditMode,
                    iconClassName: this.state.editMode ? "icon-ok" : "mdi mdi-pencil",
                    mini: this.state.editMode,
                    disabled: this.state.editMode && this.state.widgetEditing
                })
            ),
            builder,
            React.createElement(
                'div',
                { className: 'home-dashboard', style: { height: '100%' } },
                React.createElement(CardsGrid, {
                    disableDrag: this.props.disableDrag,
                    cols: this.props.cols,
                    store: this.state.store,
                    style: rglStyle,
                    pydio: this.props.pydio,
                    editMode: this.state.editMode,
                    removeCard: this.removeCard
                })
            )
        );
    }

});

exports['default'] = DynamicGrid = PydioContextConsumer(DynamicGrid);
exports['default'] = DynamicGrid;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./GridBuilder":9,"./Store":11,"pydio":"pydio","react":"react","react-grid-layout":"react-grid-layout"}],9:[function(require,module,exports){
(function (global){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var Pydio = require('pydio');

var _Pydio$requireLib = Pydio.requireLib('boot');

var PydioContextConsumer = _Pydio$requireLib.PydioContextConsumer;
var AsyncComponent = _Pydio$requireLib.AsyncComponent;

var GridBuilder = React.createClass({
    displayName: 'GridBuilder',

    propTypes: {
        namespaces: React.PropTypes.array,
        onCreateCard: React.PropTypes.func,
        onEditStatusChange: React.PropTypes.func
    },

    getInitialState: function getInitialState() {
        return {
            selectedIndex: 0,
            availableWidgets: this.listAvailableWidgets()
        };
    },

    listAvailableWidgets: function listAvailableWidgets() {
        var secondPass = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

        var widgets = [];
        var additionalNamespaces = [];
        this.props.namespaces.map(function (ns) {
            if (!global[ns]) {
                additionalNamespaces.push(ns);
                return;
            }
            for (var k in global[ns]) {
                if (global[ns].hasOwnProperty(k)) {
                    var widgetClass = global[ns][k];
                    if (widgetClass.hasBuilderFields && widgetClass.hasBuilderFields()) {
                        widgets.push({ reactClass: widgetClass, fullName: ns + '.' + widgetClass.displayName });
                    }
                }
            }
        });
        if (additionalNamespaces.length && !secondPass) {
            ResourcesManager.loadClassesAndApply(additionalNamespaces, (function () {
                this.setState({
                    availableWidgets: this.listAvailableWidgets(true)
                });
            }).bind(this));
        }
        return widgets;
    },

    onDropDownChange: function onDropDownChange(event, index, item) {
        var defaultValues = {};
        if (index != 0) {
            item.payload['reactClass'].getBuilderFields().map(function (f) {
                if (f['default']) defaultValues[f.name] = f['default'];
            });
        }
        if (this.props.onEditStatusChange) {
            this.props.onEditStatusChange(index != 0);
        }
        this.setState({
            selectedIndex: index,
            selectedWidget: item.payload,
            currentFormValues: defaultValues
        });
    },

    cancel: function cancel() {
        if (this.props.onEditStatusChange) {
            this.props.onEditStatusChange(false);
        }
        this.setState({ selectedIndex: 0 });
    },

    onFormValueChange: function onFormValueChange(newValues) {
        this.setState({ currentFormValues: newValues });
    },

    onFormSubmit: function onFormSubmit() {
        var values = this.state.currentFormValues;
        var selectedWidget = this.state.selectedWidget;
        var title = values.title ? values.title : values.legend;
        if (!title) title = this.state.selectedWidget['reactClass'].builderDisplayName;
        this.props.onCreateCard({
            componentClass: selectedWidget.fullName,
            title: title,
            props: values
        });
        this.cancel();
    },

    resetLayout: function resetLayout() {
        if (window.confirm(this.props.getMessage('home.51'))) {
            this.props.onResetLayout();
        }
    },

    render: function render() {
        var getMessage = this.props.getMessage;

        var selectorItems = [{ payload: 0, text: getMessage('home.50') }].concat(this.state.availableWidgets.map(function (w, index) {
            return { payload: w, text: w['reactClass'].builderDisplayName };
        }));

        var selector = React.createElement(ReactMUI.DropDownMenu, {
            menuItems: selectorItems,
            onChange: this.onDropDownChange,
            selectedIndex: this.state.selectedIndex,
            autoWidth: false,
            className: 'widget-type-selector'
        });

        var form, add;
        if (this.state.selectedIndex != 0) {
            var fields = this.state.selectedWidget['reactClass'].getBuilderFields();
            var defaultValues = {};
            fields.map(function (f) {
                if (f['default']) defaultValues[f.name] = f['default'];
            });
            if (this.state.currentFormValues) {
                defaultValues = LangUtils.mergeObjectsRecursive(defaultValues, this.state.currentFormValues);
            }
            form = React.createElement(AsyncComponent, {
                namespace: 'PydioForm',
                componentName: 'FormPanel',
                parameters: fields,
                depth: -1,
                values: defaultValues,
                onChange: this.onFormValueChange
            });
            add = React.createElement(
                'div',
                { style: { textAlign: 'center', paddingBottom: 100 } },
                React.createElement(ReactMUI.RaisedButton, { label: getMessage('home.52'), onClick: this.onFormSubmit }),
                ' ',
                React.createElement(ReactMUI.RaisedButton, { label: getMessage('54', ''), onClick: this.cancel })
            );
        }

        return React.createElement(
            ReactMUI.Paper,
            _extends({}, this.props, {
                zDepth: 3 }),
            React.createElement(
                'h3',
                null,
                getMessage('home.53')
            ),
            React.createElement(
                'div',
                { className: 'legend' },
                getMessage('home.54'),
                React.createElement('br', null),
                getMessage('home.55')
            ),
            selector,
            form,
            add,
            React.createElement(
                'div',
                { style: { position: 'absolute', bottom: 30, left: 10 } },
                React.createElement(ReactMUI.FlatButton, { disabled: this.state.selectedIndex != 0, label: getMessage('home.56'), secondary: true, onClick: this.resetLayout })
            )
        );
    }

});

exports['default'] = GridBuilder = PydioContextConsumer(GridBuilder);
exports['default'] = GridBuilder;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"pydio":"pydio","react":"react"}],10:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = {

    propTypes: {
        showCloseAction: React.PropTypes.bool,
        onCloseAction: React.PropTypes.func
    },

    focusItem: function focusItem() {
        this.setState({ focus: true });
    },

    blurItem: function blurItem() {
        this.setState({ focus: false });
    },

    mergeStyleWithFocus: function mergeStyleWithFocus() {
        return _extends({}, this.props.style, { zIndex: this.state.focus ? 1 : null });
    },

    getInitialSate: function getInitialSate() {
        return { focus: false, showCloseAction: false };
    },

    toggleEditMode: function toggleEditMode() {
        var value = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

        if (value === undefined) {
            this.setState({ showCloseAction: !(this.state && this.state.showCloseAction) });
        } else {
            this.setState({ showCloseAction: value });
        }
    },

    getCloseButton: function getCloseButton() {
        if (this.state && this.state.showCloseAction) {
            var closeAction = this.props.onCloseAction || function () {};
            var overlayStyle = {
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0.53)',
                zIndex: 10,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            };
            return React.createElement(
                'div',
                { style: overlayStyle },
                React.createElement(MaterialUI.FlatButton, {
                    label: pydio.MessageHash['ajxp_admin.home.48'],
                    className: 'card-close-button',
                    onTouchTap: closeAction,
                    style: { color: 'white' }
                })
            );
        } else {
            return null;
        }
    },

    statics: {
        getGridLayout: function getGridLayout(x, y) {
            return {
                x: x || 0,
                y: y || 0,
                w: this.gridWidth || 4,
                h: this.gridHeight || 12,
                isResizable: false
            };
        },
        hasBuilderFields: function hasBuilderFields() {
            return this.builderFields ? true : false;
        },
        getBuilderFields: function getBuilderFields() {
            return this.builderFields;
        }
    }

};
module.exports = exports['default'];

},{}],11:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Store = (function (_Observable) {
    _inherits(Store, _Observable);

    /**
     * Init a card store
     * @param prefNamespace Namespace for getting/setting user preferences
     * @param defaultCards Array of cards to be displayed by default
     */

    function Store(prefNamespace, defaultCards, pydioObject) {
        _classCallCheck(this, Store);

        _Observable.call(this);
        this._namespace = prefNamespace;
        this._pydio = pydioObject;
        this._cards = this.getUserPreference("Cards");
        if (!this._cards) {
            this._cards = defaultCards;
        }
    }

    Store.prototype.getUserPreference = function getUserPreference(prefName) {
        var prefKey = this._namespace + prefName;
        var guiPrefs = this._pydio.user.getPreference('gui_preferences', true);
        if (guiPrefs && guiPrefs[prefKey]) {
            return guiPrefs[prefKey];
        } else {
            return null;
        }
    };

    Store.prototype.saveUserPreference = function saveUserPreference(prefName, prefValue) {
        var prefKey = this._namespace + prefName;
        var guiPrefs = this._pydio.user.getPreference('gui_preferences', true);
        if (!guiPrefs) guiPrefs = {};
        guiPrefs[prefKey] = prefValue;
        this._pydio.user.setPreference('gui_preferences', guiPrefs, true);
        this._pydio.user.savePreference('gui_preferences');
    };

    Store.prototype.saveCards = function saveCards(cards) {
        this.saveUserPreference('Cards', cards);
    };

    Store.prototype.resetCards = function resetCards() {
        this.saveUserPreference('Cards', null);
    };

    Store.prototype.setCards = function setCards(newCards) {
        this._cards = newCards;
        this.notify("cards", this._cards);
        this.saveCards(newCards);
    };

    Store.prototype.getCards = function getCards() {
        return this._cards;
    };

    Store.prototype.removeCard = function removeCard(cardId) {
        var index = -1;
        var currentCards = this.getCards();
        currentCards.map(function (card, arrayIndex) {
            if (card.id == cardId) index = arrayIndex;
        });
        if (index == -1) {
            console.warn('Card ID not found, this is strange.', cardId);
            return;
        }
        var newCards;
        if (index == 0) newCards = currentCards.slice(1);else if (index == currentCards.length - 1) newCards = currentCards.slice(0, -1);else newCards = currentCards.slice(0, index).concat(currentCards.slice(index + 1));
        this.setCards(newCards);
    };

    Store.prototype.createCardId = function createCardId(cardDefinition) {
        var randomize = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

        var id = LangUtils.computeStringSlug(cardDefinition['title']);
        if (randomize) {
            id += '-' + Math.round(Math.random() * 100 + 10);
        }
        var alreadyExists = false;
        this._cards.map((function (card) {
            if (card.id == id) alreadyExists = true;
        }).bind(this));
        if (alreadyExists) {
            id = this.createCardId(cardDefinition, true);
        }
        return id;
    };

    Store.prototype.addCard = function addCard(cardDefinition) {
        //console.log(cardDefinition);

        cardDefinition['id'] = this.createCardId(cardDefinition);
        this.setCards(this._cards.concat([cardDefinition]));
    };

    return Store;
})(Observable);

exports['default'] = Store;
module.exports = exports['default'];

},{}],12:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('react');

var Component = _require.Component;
var PropTypes = _require.PropTypes;

var _require2 = require('material-ui');

var FlatButton = _require2.FlatButton;

var _require3 = require('material-ui/styles');

var muiThemeable = _require3.muiThemeable;

exports['default'] = function (PydioComponent, displayName) {
    var gridDimension = arguments.length <= 2 || arguments[2] === undefined ? { gridWidth: 4, gridHeight: 12 } : arguments[2];
    var builderFields = arguments.length <= 3 || arguments[3] === undefined ? undefined : arguments[3];

    var originalDisplayName = PydioComponent.displayName || PydioComponent.name;
    PydioComponent = muiThemeable()(PydioComponent);

    var GridItem = (function (_Component) {
        _inherits(GridItem, _Component);

        function GridItem(props, context) {
            _classCallCheck(this, GridItem);

            _Component.call(this, props, context);
            this.state = { focus: false, showCloseAction: false };
        }

        GridItem.prototype.focusItem = function focusItem() {
            this.setState({ focus: true });
        };

        GridItem.prototype.blurItem = function blurItem() {
            this.setState({ focus: false });
        };

        GridItem.prototype.mergeStyleWithFocus = function mergeStyleWithFocus() {
            return _extends({}, this.props.style, { zIndex: this.state.focus ? 1 : null });
        };

        GridItem.prototype.toggleEditMode = function toggleEditMode() {
            var value = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            if (value === undefined) {
                this.setState({ showCloseAction: !(this.state && this.state.showCloseAction) });
            } else {
                this.setState({ showCloseAction: value });
            }
        };

        GridItem.prototype.getCloseButton = function getCloseButton() {
            var closeAction = this.props.onCloseAction || function () {};
            var overlayStyle = {
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0.53)',
                zIndex: 10,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            };
            return React.createElement(
                'div',
                { style: overlayStyle },
                React.createElement(FlatButton, {
                    label: this.props.pydio.MessageHash['ajxp_admin.home.48'],
                    className: 'card-close-button',
                    onTouchTap: closeAction,
                    style: { color: 'white' }
                })
            );
        };

        GridItem.prototype.render = function render() {
            var props = _extends({}, this.props, {
                style: this.mergeStyleWithFocus(),
                closeButton: this.state.showCloseAction ? this.getCloseButton() : null,
                onFocusItem: this.focusItem.bind(this),
                onBlurItem: this.blurItem.bind(this)
            });
            return React.createElement(PydioComponent, props);
        };

        return GridItem;
    })(Component);

    GridItem.propTypes = {
        onCloseAction: PropTypes.func
    };

    GridItem.displayName = originalDisplayName;
    GridItem.builderDisplayName = displayName;

    GridItem.getGridLayout = function (x, y) {
        return {
            x: x || 0,
            y: y || 0,
            w: gridDimension.gridWidth || 4,
            h: gridDimension.gridHeight || 12,
            isResizable: false
        };
    };

    GridItem.hasBuilderFields = function () {
        return builderFields !== undefined;
    };
    GridItem.getBuilderFields = function () {
        return builderFields;
    };

    return GridItem;
};

module.exports = exports['default'];

},{"material-ui":"material-ui","material-ui/styles":"material-ui/styles","react":"react"}],13:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

/**
 * Two columns layout used for Workspaces and Plugins editors
 */
var PaperEditorLayout = _react2['default'].createClass({
    displayName: 'PaperEditorLayout',

    propTypes: {
        title: _react2['default'].PropTypes.any,
        titleActionBar: _react2['default'].PropTypes.any,
        leftNav: _react2['default'].PropTypes.any,
        contentFill: _react2['default'].PropTypes.bool,
        className: _react2['default'].PropTypes.string
    },

    toggleMenu: function toggleMenu() {
        var crtLeftOpen = this.state && this.state.forceLeftOpen;
        this.setState({ forceLeftOpen: !crtLeftOpen });
    },

    render: function render() {

        var styles = {
            title: {
                backgroundColor: '#455A64',
                borderRadius: '2px 2px 0 0',
                display: 'flex'
            },
            titleH2: {
                color: 'white',
                flex: 1,
                fontSize: 26,
                padding: '14px 12px 10px',
                marginBottom: 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            },
            titleBar: {
                marginTop: 15,
                marginRight: 16
            }
        };

        return _react2['default'].createElement(
            'div',
            { className: "paper-editor-content layout-fill vertical-layout" + (this.props.className ? ' ' + this.props.className : '') },
            _react2['default'].createElement(
                'div',
                { className: 'paper-editor-title', style: styles.title },
                _react2['default'].createElement(
                    'h2',
                    { style: styles.titleH2 },
                    this.props.title,
                    ' ',
                    _react2['default'].createElement(
                        'div',
                        { className: 'left-picker-toggle' },
                        _react2['default'].createElement(_materialUi.IconButton, { iconClassName: 'icon-caret-down', onClick: this.toggleMenu })
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { style: styles.titleBar },
                    this.props.titleActionBar
                )
            ),
            _react2['default'].createElement(
                'div',
                { className: 'layout-fill main-layout-nav-to-stack' },
                this.props.leftNav && _react2['default'].createElement(
                    'div',
                    { className: "paper-editor-left" + (this.state && this.state.forceLeftOpen ? ' picker-open' : ''), onClick: this.toggleMenu },
                    this.props.leftNav
                ),
                _react2['default'].createElement(
                    'div',
                    { className: "layout-fill paper-editor-right" + (this.props.contentFill ? ' vertical-layout' : ''), style: this.props.contentFill ? {} : { overflowY: 'auto' } },
                    this.props.children
                )
            )
        );
    }
});
/**
 * Navigation subheader used by PaperEditorLayout
 */
var PaperEditorNavHeader = _react2['default'].createClass({
    displayName: 'PaperEditorNavHeader',

    propTypes: {
        label: _react2['default'].PropTypes.string
    },

    render: function render() {

        return _react2['default'].createElement(
            'div',
            { className: "mui-subheader", style: { fontSize: 13, fontWeight: 500, color: 'rgba(0, 0, 0, 0.25)', lineHeight: '48px', paddingLeft: 16 } },
            this.props.children,
            this.props.label
        );
    }

});
/**
 * Navigation entry used by PaperEditorLayout.
 */
var PaperEditorNavEntry = _react2['default'].createClass({
    displayName: 'PaperEditorNavEntry',

    propTypes: {
        keyName: _react2['default'].PropTypes.string.isRequired,
        onClick: _react2['default'].PropTypes.func.isRequired,
        label: _react2['default'].PropTypes.string,
        selectedKey: _react2['default'].PropTypes.string,
        isLast: _react2['default'].PropTypes.bool,
        // Drop Down Data
        dropDown: _react2['default'].PropTypes.bool,
        dropDownData: _react2['default'].PropTypes.object,
        dropDownChange: _react2['default'].PropTypes.func,
        dropDownDefaultItems: _react2['default'].PropTypes.array
    },

    onClick: function onClick() {
        this.props.onClick(this.props.keyName);
    },

    captureDropDownClick: function captureDropDownClick() {
        if (this.preventClick) {
            this.preventClick = false;
            return;
        }
        this.props.onClick(this.props.keyName);
    },

    dropDownChange: function dropDownChange(event, index, item) {
        this.preventClick = true;
        this.props.dropDownChange(item);
    },

    render: function render() {

        if (!this.props.dropDown || !this.props.dropDownData) {
            return _react2['default'].createElement(
                'div',
                {
                    className: 'menu-entry' + (this.props.keyName == this.props.selectedKey ? ' menu-entry-selected' : '') + (this.props.isLast ? ' last' : ''),
                    onClick: this.onClick },
                this.props.children,
                this.props.label
            );
        }

        // dropDown & dropDownData are loaded
        var menuItemsTpl = [{ text: this.props.label, payload: '-1' }];
        if (this.props.dropDownDefaultItems) {
            menuItemsTpl = menuItemsTpl.concat(this.props.dropDownDefaultItems);
        }
        this.props.dropDownData.forEach(function (v, k) {
            menuItemsTpl.push({ text: v.label, payload: v });
        });
        return _react2['default'].createElement(
            'div',
            { onClick: this.captureDropDownClick, className: 'menu-entry-dropdown' + (this.props.keyName == this.props.selectedKey ? ' menu-entry-selected' : '') + (this.props.isLast ? ' last' : '') },
            _react2['default'].createElement(_materialUi.DropDownMenu, {
                menuItems: menuItemsTpl,
                className: 'dropdown-full-width',
                style: { width: 256 },
                autoWidth: false,
                onChange: this.dropDownChange
            })
        );
    }
});

exports.PaperEditorLayout = PaperEditorLayout;
exports.PaperEditorNavEntry = PaperEditorNavEntry;
exports.PaperEditorNavHeader = PaperEditorNavHeader;

},{"material-ui":"material-ui","react":"react"}],14:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    node: React.PropTypes.instanceOf(AjxpNode).isRequired,
    registry: React.PropTypes.instanceOf(Registry).isRequired,
    editorData: React.PropTypes.object.isRequired,
    icon: React.PropTypes.bool
};

var defaultProps = {
    icon: false
};

var ReactEditorOpener = (function (_React$Component) {
    _inherits(ReactEditorOpener, _React$Component);

    function ReactEditorOpener(props) {
        _classCallCheck(this, ReactEditorOpener);

        _React$Component.call(this, props);

        var node = props.node;
        var editorData = props.editorData;

        this.state = {
            ready: false
        };
    }

    ReactEditorOpener.prototype.componentDidMount = function componentDidMount() {
        var _this = this;

        var _props = this.props;
        var editorData = _props.editorData;
        var registry = _props.registry;

        registry.loadEditorResources(editorData.resourcesManager, function () {
            return _this.setState({ ready: true });
        });
    };

    ReactEditorOpener.prototype.render = function render() {
        var editorData = this.props.editorData;
        var ready = this.state.ready;

        if (!ready) return null;

        var EditorClass = null;
        if (!(EditorClass = FuncUtils.getFunctionByName(editorData.editorClass, window))) {
            return React.createElement(
                "div",
                null,
                "Cannot find editor component (" + editorData.editorClass + ")!"
            );
        }

        // Getting HOC of the class
        return React.createElement(EditorClass.Editor, this.props);
    };

    return ReactEditorOpener;
})(React.Component);

ReactEditorOpener.propTypes = propTypes;
ReactEditorOpener.defaultProps = defaultProps;

exports["default"] = ReactEditorOpener;
module.exports = exports["default"];

},{}],15:[function(require,module,exports){
(function (global){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = React.createClass({
    displayName: 'ClipboardTextField',

    propTypes: {
        floatingLabelText: React.PropTypes.string,

        inputValue: React.PropTypes.string,
        inputClassName: React.PropTypes.string,
        getMessage: React.PropTypes.func,
        inputCopyMessage: React.PropTypes.string
    },

    getInitialState: function getInitialState() {
        return { copyMessage: null };
    },

    componentDidMount: function componentDidMount() {
        this.attachClipboard();
    },
    componentDidUpdate: function componentDidUpdate() {
        this.attachClipboard();
    },

    attachClipboard: function attachClipboard() {
        if (this._clip) {
            this._clip.destroy();
        }
        if (!this.refs['copy-button']) {
            return;
        }
        this._clip = new Clipboard(this.refs['copy-button'], {
            text: (function (trigger) {
                return this.props.inputValue;
            }).bind(this)
        });
        this._clip.on('success', (function () {
            this.setState({ copyMessage: this.props.getMessage(this.props.inputCopyMessage || '192') }, this.clearCopyMessage);
        }).bind(this));
        this._clip.on('error', (function () {
            var copyMessage;
            if (global.navigator.platform.indexOf("Mac") === 0) {
                copyMessage = this.props.getMessage('144');
            } else {
                copyMessage = this.props.getMessage('143');
            }
            this.refs['input'].focus();
            this.setState({ copyMessage: copyMessage }, this.clearCopyMessage);
        }).bind(this));
    },

    clearCopyMessage: function clearCopyMessage() {
        global.setTimeout((function () {
            this.setState({ copyMessage: '' });
        }).bind(this), 3000);
    },

    render: function render() {

        var select = function select(e) {
            e.currentTarget.select();
        };

        var copyMessage = null;
        if (this.state.copyMessage) {
            var setHtml = (function () {
                return { __html: this.state.copyMessage };
            }).bind(this);
            copyMessage = React.createElement('div', { style: { color: 'rgba(0,0,0,0.23)' }, className: 'copy-message', dangerouslySetInnerHTML: setHtml() });
        }

        var buttonStyle = _extends({
            position: 'absolute',
            right: -8,
            bottom: 13,
            fontSize: 15,
            color: this.props.buttonColor || 'rgba(0, 150, 136, 0.52)',
            height: 26,
            width: 26,
            lineHeight: '28px',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '50%'
        }, this.props.buttonStyle);

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { style: { position: 'relative' } },
                React.createElement(MaterialUI.TextField, {
                    fullWidth: true,
                    ref: 'input',
                    floatingLabelText: this.props.floatingLabelText,
                    floatingLabelStyle: { whiteSpace: 'nowrap' },
                    underlineShow: this.props.underlineShow,
                    defaultValue: this.props.inputValue,
                    className: this.props.inputClassName,
                    multiLine: this.props.multiLine,
                    rows: this.props.rows,
                    rowsMax: this.props.rowsMax,
                    readOnly: true,
                    onClick: select,
                    style: { marginTop: -10, width: '92%', fontSize: 14 }
                }),
                React.createElement('span', { ref: 'copy-button', style: buttonStyle, title: this.props.getMessage('191'), className: 'copy-button mdi mdi-content-copy' })
            ),
            copyMessage
        );
    }

});
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],16:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;
exports['default'] = React.createClass({
    displayName: 'LabelWithTip',

    propTypes: {
        label: React.PropTypes.string,
        labelElement: React.PropTypes.object,
        tooltip: React.PropTypes.string,
        tooltipClassName: React.PropTypes.string,
        className: React.PropTypes.string,
        style: React.PropTypes.object
    },

    getInitialState: function getInitialState() {
        return { show: false };
    },

    show: function show() {
        this.setState({ show: true });
    },
    hide: function hide() {
        this.setState({ show: false });
    },

    render: function render() {
        if (this.props.tooltip) {
            var tooltipStyle = {};
            if (this.props.label || this.props.labelElement) {
                if (this.state.show) {
                    tooltipStyle = { bottom: -10, top: 'inherit' };
                }
            } else {
                tooltipStyle = { position: 'relative' };
            }
            var label = undefined;
            if (this.props.label) {
                label = React.createElement(
                    'span',
                    { className: 'ellipsis-label' },
                    this.props.label
                );
            } else if (this.props.labelElement) {
                label = this.props.labelElement;
            }
            var style = this.props.style || { position: 'relative' };

            return React.createElement(
                'span',
                { onMouseEnter: this.show, onMouseLeave: this.hide, style: style, className: this.props.className },
                label,
                this.props.children,
                React.createElement(ReactMUI.Tooltip, { label: this.props.tooltip, style: tooltipStyle, className: this.props.tooltipClassName, show: this.state.show })
            );
        } else {
            if (this.props.label) {
                return React.createElement(
                    'span',
                    null,
                    this.props.label
                );
            } else if (this.props.labelElement) {
                return this.props.labelElement;
            } else {
                return React.createElement(
                    'span',
                    null,
                    this.props.children
                );
            }
        }
    }

});
module.exports = exports['default'];

},{}],17:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

/**
 * Simple MuiPaper with a figure and a legend
 */
'use strict';

exports.__esModule = true;
exports['default'] = React.createClass({
    displayName: 'SimpleFigureBadge',

    propTypes: {
        colorIndicator: React.PropTypes.string,
        figure: React.PropTypes.number.isRequired,
        legend: React.PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            colorIndicator: ''
        };
    },

    render: function render() {
        return React.createElement(
            ReactMUI.Paper,
            { style: { display: 'inline-block', marginLeft: 16 } },
            React.createElement(
                'div',
                { className: 'figure-badge', style: this.props.colorIndicator ? { borderLeftColor: this.props.colorIndicator } : {} },
                React.createElement(
                    'div',
                    { className: 'figure' },
                    this.props.figure
                ),
                React.createElement(
                    'div',
                    { className: 'legend' },
                    this.props.legend
                )
            )
        );
    }
});
module.exports = exports['default'];

},{}],18:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _listSortableList = require('./list/SortableList');

var _listSortableList2 = _interopRequireDefault(_listSortableList);

var _listSimpleList = require('./list/SimpleList');

var _listSimpleList2 = _interopRequireDefault(_listSimpleList);

var _listNodeListCustomProvider = require('./list/NodeListCustomProvider');

var _listNodeListCustomProvider2 = _interopRequireDefault(_listNodeListCustomProvider);

var _listListEntry = require('./list/ListEntry');

var _listListPaginator = require('./list/ListPaginator');

var _listListPaginator2 = _interopRequireDefault(_listListPaginator);

var _listMaterialTable = require('./list/MaterialTable');

var _listMaterialTable2 = _interopRequireDefault(_listMaterialTable);

var _viewsTreeView = require('./views/TreeView');

var _elementsLabelWithTip = require('./elements/LabelWithTip');

var _elementsLabelWithTip2 = _interopRequireDefault(_elementsLabelWithTip);

var _elementsSimpleFigureBadge = require('./elements/SimpleFigureBadge');

var _elementsSimpleFigureBadge2 = _interopRequireDefault(_elementsSimpleFigureBadge);

var _elementsClipboardTextField = require('./elements/ClipboardTextField');

var _elementsClipboardTextField2 = _interopRequireDefault(_elementsClipboardTextField);

var _viewsEmptyStateView = require('./views/EmptyStateView');

var _viewsEmptyStateView2 = _interopRequireDefault(_viewsEmptyStateView);

var _viewsModalAppBar = require('./views/ModalAppBar');

var _viewsModalAppBar2 = _interopRequireDefault(_viewsModalAppBar);

var _editorReactEditorOpener = require('./editor/ReactEditorOpener');

var _editorReactEditorOpener2 = _interopRequireDefault(_editorReactEditorOpener);

var _editorPaperEditor = require('./editor/PaperEditor');

var _dynamicGridDynamicGrid = require('./dynamic-grid/DynamicGrid');

var _dynamicGridDynamicGrid2 = _interopRequireDefault(_dynamicGridDynamicGrid);

var _dynamicGridStore = require('./dynamic-grid/Store');

var _dynamicGridStore2 = _interopRequireDefault(_dynamicGridStore);

var _dynamicGridGridItemMixin = require('./dynamic-grid/GridItemMixin');

var _dynamicGridGridItemMixin2 = _interopRequireDefault(_dynamicGridGridItemMixin);

var _dynamicGridAsGridItem = require('./dynamic-grid/asGridItem');

var _dynamicGridAsGridItem2 = _interopRequireDefault(_dynamicGridAsGridItem);

var _utilDND = require('./util/DND');

var _usersAvatarUserAvatar = require('./users/avatar/UserAvatar');

var _usersAvatarUserAvatar2 = _interopRequireDefault(_usersAvatarUserAvatar);

var _usersUsersCompleter = require('./users/UsersCompleter');

var _usersUsersCompleter2 = _interopRequireDefault(_usersUsersCompleter);

var _usersTeamCreationForm = require('./users/TeamCreationForm');

var _usersTeamCreationForm2 = _interopRequireDefault(_usersTeamCreationForm);

var _menuButtonMenu = require('./menu/ButtonMenu');

var _menuButtonMenu2 = _interopRequireDefault(_menuButtonMenu);

var _menuContextMenu = require('./menu/ContextMenu');

var _menuContextMenu2 = _interopRequireDefault(_menuContextMenu);

var _menuIconButtonMenu = require('./menu/IconButtonMenu');

var _menuIconButtonMenu2 = _interopRequireDefault(_menuIconButtonMenu);

var _menuToolbar = require('./menu/Toolbar');

var _menuToolbar2 = _interopRequireDefault(_menuToolbar);

var _usersAddressbookAddressBook = require('./users/addressbook/AddressBook');

var _usersAddressbookAddressBook2 = _interopRequireDefault(_usersAddressbookAddressBook);

var _chatChatClient = require('./chat/ChatClient');

var _chatChatClient2 = _interopRequireDefault(_chatChatClient);

var _chatChat = require('./chat/Chat');

var _chatChat2 = _interopRequireDefault(_chatChat);

var _chatChatIcon = require('./chat/ChatIcon');

var _chatChatIcon2 = _interopRequireDefault(_chatChatIcon);

var _policiesResourcePoliciesPanel = require('./policies/ResourcePoliciesPanel');

var _policiesResourcePoliciesPanel2 = _interopRequireDefault(_policiesResourcePoliciesPanel);

var _usersAvatarCellActionsRenderer = require('./users/avatar/CellActionsRenderer');

var _usersAvatarCellActionsRenderer2 = _interopRequireDefault(_usersAvatarCellActionsRenderer);

var PydioComponents = {

    SortableList: _listSortableList2['default'],
    SimpleList: _listSimpleList2['default'],
    NodeListCustomProvider: _listNodeListCustomProvider2['default'],
    ListEntry: _listListEntry.ListEntry,
    ListPaginator: _listListPaginator2['default'],
    MaterialTable: _listMaterialTable2['default'],

    TreeView: _viewsTreeView.TreeView,
    DNDTreeView: _viewsTreeView.DNDTreeView,
    FoldersTree: _viewsTreeView.FoldersTree,
    ClipboardTextField: _elementsClipboardTextField2['default'],
    LabelWithTip: _elementsLabelWithTip2['default'],
    EmptyStateView: _viewsEmptyStateView2['default'],
    SimpleFigureBadge: _elementsSimpleFigureBadge2['default'],
    ModalAppBar: _viewsModalAppBar2['default'],

    ReactEditorOpener: _editorReactEditorOpener2['default'],
    PaperEditorLayout: _editorPaperEditor.PaperEditorLayout,
    PaperEditorNavEntry: _editorPaperEditor.PaperEditorNavEntry,
    PaperEditorNavHeader: _editorPaperEditor.PaperEditorNavHeader,

    DynamicGrid: _dynamicGridDynamicGrid2['default'],
    DynamicGridItemMixin: _dynamicGridGridItemMixin2['default'],
    asGridItem: _dynamicGridAsGridItem2['default'],
    DynamicGridStore: _dynamicGridStore2['default'],

    DND: {
        Types: _utilDND.Types, collect: _utilDND.collect, collectDrop: _utilDND.collectDrop, nodeDragSource: _utilDND.nodeDragSource, nodeDropTarget: _utilDND.nodeDropTarget, DNDActionParameter: _utilDND.DNDActionParameter
    },
    DNDActionParameter: _utilDND.DNDActionParameter,

    UserAvatar: _usersAvatarUserAvatar2['default'],
    UsersCompleter: _usersUsersCompleter2['default'],
    TeamCreationForm: _usersTeamCreationForm2['default'],
    AddressBook: _usersAddressbookAddressBook2['default'],

    ContextMenu: _menuContextMenu2['default'],
    Toolbar: _menuToolbar2['default'],
    ButtonMenu: _menuButtonMenu2['default'],
    IconButtonMenu: _menuIconButtonMenu2['default'],

    Chat: _chatChat2['default'],
    ChatIcon: _chatChatIcon2['default'],
    ChatClient: _chatChatClient2['default'],
    ResourcePoliciesPanel: _policiesResourcePoliciesPanel2['default'],
    CellActionsRenderer: _usersAvatarCellActionsRenderer2['default']
};

exports['default'] = PydioComponents;
module.exports = exports['default'];

},{"./chat/Chat":3,"./chat/ChatClient":4,"./chat/ChatIcon":5,"./dynamic-grid/DynamicGrid":8,"./dynamic-grid/GridItemMixin":10,"./dynamic-grid/Store":11,"./dynamic-grid/asGridItem":12,"./editor/PaperEditor":13,"./editor/ReactEditorOpener":14,"./elements/ClipboardTextField":15,"./elements/LabelWithTip":16,"./elements/SimpleFigureBadge":17,"./list/ListEntry":21,"./list/ListPaginator":23,"./list/MaterialTable":24,"./list/NodeListCustomProvider":25,"./list/SimpleList":26,"./list/SortableList":28,"./menu/ButtonMenu":31,"./menu/ContextMenu":32,"./menu/IconButtonMenu":33,"./menu/Toolbar":37,"./policies/ResourcePoliciesPanel":39,"./users/TeamCreationForm":40,"./users/UsersCompleter":42,"./users/addressbook/AddressBook":43,"./users/avatar/CellActionsRenderer":54,"./users/avatar/UserAvatar":56,"./util/DND":57,"./views/EmptyStateView":59,"./views/ModalAppBar":60,"./views/TreeView":62}],19:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListEntryNodeListenerMixin = require('./ListEntryNodeListenerMixin');

var _ListEntryNodeListenerMixin2 = _interopRequireDefault(_ListEntryNodeListenerMixin);

var _InlineEditor = require('./InlineEditor');

var _InlineEditor2 = _interopRequireDefault(_InlineEditor);

var _ListEntry = require('./ListEntry');

var _materialUi = require('material-ui');

/**
 * Callback based material list entry with custom icon render, firstLine, secondLine, etc.
 */
exports['default'] = _react2['default'].createClass({
    displayName: 'ConfigurableListEntry',

    mixins: [_ListEntryNodeListenerMixin2['default']],

    propTypes: {
        node: _react2['default'].PropTypes.instanceOf(AjxpNode),
        // SEE ALSO ListEntry PROPS
        renderIcon: _react2['default'].PropTypes.func,
        renderFirstLine: _react2['default'].PropTypes.func,
        renderSecondLine: _react2['default'].PropTypes.func,
        renderThirdLine: _react2['default'].PropTypes.func,
        renderActions: _react2['default'].PropTypes.func,
        style: _react2['default'].PropTypes.object
    },

    render: function render() {
        var _this = this;

        var icon = undefined,
            firstLine = undefined,
            secondLine = undefined,
            thirdLine = undefined,
            style = this.props.style || {};
        if (this.props.renderIcon) {
            icon = this.props.renderIcon(this.props.node, this.props);
        } else {
            var node = this.props.node;
            var iconClass = node.getMetadata().get("icon_class") ? node.getMetadata().get("icon_class") : node.isLeaf() ? "icon-file-alt" : "icon-folder-close";
            icon = _react2['default'].createElement(_materialUi.FontIcon, { className: iconClass });
        }

        if (this.props.renderFirstLine) {
            firstLine = this.props.renderFirstLine(this.props.node);
        } else {
            firstLine = this.props.node.getLabel();
        }
        if (this.state && this.state.inlineEdition) {
            firstLine = _react2['default'].createElement(
                'span',
                null,
                _react2['default'].createElement(_InlineEditor2['default'], {
                    node: this.props.node,
                    onClose: function () {
                        _this.setState({ inlineEdition: false });
                    },
                    callback: this.state.inlineEditionCallback
                }),
                firstLine
            );
            style.position = 'relative';
        }
        if (this.props.renderSecondLine) {
            secondLine = this.props.renderSecondLine(this.props.node);
        }
        if (this.props.renderThirdLine) {
            thirdLine = this.props.renderThirdLine(this.props.node);
        }
        var actions = this.props.actions;
        if (this.props.renderActions) {
            actions = this.props.renderActions(this.props.node);
        }

        return _react2['default'].createElement(_ListEntry.DragDropListEntry, _extends({}, this.props, {
            iconCell: icon,
            firstLine: firstLine,
            secondLine: secondLine,
            thirdLine: thirdLine,
            actions: actions,
            style: style
        }));
    }

});
module.exports = exports['default'];

},{"./InlineEditor":20,"./ListEntry":21,"./ListEntryNodeListenerMixin":22,"material-ui":"material-ui","react":"react"}],20:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;
var React = require('react');
var Pydio = require('pydio');
var AjxpNode = require('pydio/model/node');

var _Pydio$requireLib = Pydio.requireLib('boot');

var PydioContextConsumer = _Pydio$requireLib.PydioContextConsumer;

var _require = require('material-ui');

var Paper = _require.Paper;
var TextField = _require.TextField;
var FlatButton = _require.FlatButton;

var InlineEditor = React.createClass({
    displayName: 'InlineEditor',

    propTypes: {
        node: React.PropTypes.instanceOf(AjxpNode),
        callback: React.PropTypes.func,
        onClose: React.PropTypes.func,
        detached: React.PropTypes.bool
    },

    submit: function submit() {
        if (!this.state || !this.state.value || this.state.value === this.props.node.getLabel()) {
            this.setState({ errorString: 'Please use a different value for renaming!' });
            this.props.getPydio().displayMessage('ERROR', 'Please use a different value for renaming!');
        } else {
            this.props.callback(this.state.value);
            this.props.onClose();
        }
    },

    componentDidMount: function componentDidMount() {
        this.refs.text.focus();
    },

    catchClicks: function catchClicks(e) {
        e.stopPropagation();
    },

    onKeyDown: function onKeyDown(e) {
        if (e.key === 'Enter') {
            this.submit();
        }
        this.setState({ errorString: '' });
        e.stopPropagation();
    },

    render: function render() {
        var _this = this;

        return React.createElement(
            Paper,
            { className: "inline-editor" + (this.props.detached ? " detached" : ""), style: { padding: 8 }, zDepth: 2 },
            React.createElement(TextField, {
                ref: 'text',
                defaultValue: this.props.node.getLabel(),
                onChange: function (e, value) {
                    _this.setState({ value: value });
                },
                onClick: this['catch'], onDoubleClick: this.catchClicks,
                tabIndex: '0', onKeyDown: this.onKeyDown,
                errorText: this.state ? this.state.errorString : null
            }),
            React.createElement(
                'div',
                { style: { textAlign: 'right', paddingTop: 8 } },
                React.createElement(FlatButton, { label: 'Cancel', onClick: this.props.onClose }),
                React.createElement(FlatButton, { label: 'Submit', onClick: this.submit })
            )
        );
    }

});

exports['default'] = InlineEditor = PydioContextConsumer(InlineEditor);

exports['default'] = InlineEditor;
module.exports = exports['default'];

},{"material-ui":"material-ui","pydio":"pydio","pydio/model/node":"pydio/model/node","react":"react"}],21:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utilDND = require('../util/DND');

var _reactDnd = require('react-dnd');

var _materialUi = require('material-ui');

var _materialUiStyles = require('material-ui/styles');

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

/**
 * Material List Entry
 */

var ListEntry = (function (_React$Component) {
    _inherits(ListEntry, _React$Component);

    function ListEntry() {
        _classCallCheck(this, ListEntry);

        _React$Component.apply(this, arguments);
    }

    ListEntry.prototype.onClick = function onClick(event) {
        if (this.props.showSelector) {
            if (this.props.selectorDisabled) return;
            this.props.onSelect(this.props.node, event);
            event.stopPropagation();
            event.preventDefault();
        } else if (this.props.onClick) {
            this.props.onClick(this.props.node, event);
        }
    };

    ListEntry.prototype.onDoubleClick = function onDoubleClick(event) {
        if (this.props.onDoubleClick) {
            this.props.onDoubleClick(this.props.node, event);
        }
    };

    ListEntry.prototype.render = function render() {
        var _this = this;

        var selector = undefined,
            icon = undefined,
            additionalClassName = undefined;

        var _props = this.props;
        var node = _props.node;
        var showSelector = _props.showSelector;
        var selected = _props.selected;
        var selectorDisabled = _props.selectorDisabled;
        var firstLine = _props.firstLine;
        var secondLine = _props.secondLine;
        var thirdLine = _props.thirdLine;
        var style = _props.style;
        var actions = _props.actions;
        var iconCell = _props.iconCell;
        var mainIcon = _props.mainIcon;
        var className = _props.className;
        var canDrop = _props.canDrop;
        var isOver = _props.isOver;
        var connectDragSource = _props.connectDragSource;
        var connectDropTarget = _props.connectDropTarget;

        var mainClasses = ['material-list-entry', 'material-list-entry-' + (thirdLine ? 3 : secondLine ? 2 : 1) + '-lines'];
        if (className) mainClasses.push(className);

        if (showSelector) {
            selector = React.createElement(
                'div',
                { className: 'material-list-selector' },
                React.createElement(_materialUi.Checkbox, { checked: selected, ref: 'selector', disabled: selectorDisabled })
            );
        }

        if (iconCell) {
            icon = this.props.iconCell;
        } else if (this.props.mainIcon) {
            var _style = {
                fontSize: 18, color: '#FFF', display: 'inline-block', margin: 16, backgroundColor: 'rgb(189, 189, 189)', padding: '7px 3px', width: 33, height: 33, textAlign: 'center'
            };
            icon = React.createElement(_materialUi.FontIcon, { className: "mui-font-icon " + this.props.mainIcon, style: _style });
        }

        if (canDrop && isOver) {
            mainClasses.push('droppable-active');
        }

        if (node) {
            mainClasses.push('listentry' + node.getPath().replace(/\//g, '_'));
            mainClasses.push('ajxp_node_' + (node.isLeaf() ? 'leaf' : 'collection'));
            if (node.getAjxpMime()) {
                mainClasses.push('ajxp_mime_' + node.getAjxpMime());
            }
        }

        var additionalStyle = {
            /*transition:'background-color 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, color 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'*/
        };
        if (this.state && this.state.hover && !this.props.noHover) {
            additionalStyle = _extends({}, additionalStyle, {
                backgroundColor: 'rgba(0,0,0,0.05)',
                borderBottom: '1px solid transparent'
            });
        }
        if (selected) {
            var selectionColor = this.props.muiTheme.palette.accent2Color;
            var selectionColorDark = _color2['default'](selectionColor).dark();
            additionalStyle = _extends({}, additionalStyle, {
                backgroundColor: selectionColor,
                color: selectionColorDark ? 'white' : 'rgba(0,0,0,.87)'
            });
            mainClasses.push('selected');
            mainClasses.push('selected-' + (selectionColorDark ? 'dark' : 'light'));
        }

        return React.createElement(
            ContextMenuWrapper,
            _extends({}, this.props, {
                ref: function (instance) {
                    var node = _reactDom2['default'].findDOMNode(instance);
                    if (typeof connectDropTarget === 'function') connectDropTarget(node);
                    if (typeof connectDragSource === 'function') connectDragSource(node);
                },
                onClick: this.onClick.bind(this),
                onDoubleClick: showSelector ? null : this.onDoubleClick.bind(this),
                className: mainClasses.join(' '),
                onMouseOver: function () {
                    _this.setState({ hover: true });
                },
                onMouseOut: function () {
                    _this.setState({ hover: false });
                },
                style: _extends({}, style, additionalStyle) }),
            selector,
            React.createElement(
                'div',
                { className: "material-list-icon" + (mainIcon || iconCell ? "" : " material-list-icon-none") },
                icon
            ),
            React.createElement(
                'div',
                { className: 'material-list-text' },
                React.createElement(
                    'div',
                    { key: 'line-1', className: 'material-list-line-1' },
                    firstLine
                ),
                React.createElement(
                    'div',
                    { key: 'line-2', className: 'material-list-line-2' },
                    secondLine
                ),
                React.createElement(
                    'div',
                    { key: 'line-3', className: 'material-list-line-3' },
                    thirdLine
                )
            ),
            React.createElement(
                'div',
                { className: 'material-list-actions' },
                actions
            )
        );
    };

    return ListEntry;
})(React.Component);

var ContextMenuWrapper = function ContextMenuWrapper(props) {
    return React.createElement('div', props);
};
ContextMenuWrapper = PydioHOCs.withContextMenu(ContextMenuWrapper);

ListEntry.propTypes = {
    showSelector: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    selectorDisabled: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    onClick: React.PropTypes.func,
    iconCell: React.PropTypes.element,
    mainIcon: React.PropTypes.string,
    firstLine: React.PropTypes.node,
    secondLine: React.PropTypes.node,
    thirdLine: React.PropTypes.node,
    actions: React.PropTypes.element,
    activeDroppable: React.PropTypes.bool,
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    noHover: React.PropTypes.bool
};

exports.ListEntry = ListEntry = _materialUiStyles.muiThemeable()(ListEntry);

var DragDropListEntry = _reactDnd.flow(_reactDnd.DragSource(_utilDND.Types.NODE_PROVIDER, _utilDND.nodeDragSource, _utilDND.collect), _reactDnd.DropTarget(_utilDND.Types.NODE_PROVIDER, _utilDND.nodeDropTarget, _utilDND.collectDrop))(ListEntry);

exports.DragDropListEntry = DragDropListEntry;
exports.ListEntry = ListEntry;

},{"../util/DND":57,"color":"color","material-ui":"material-ui","material-ui/styles":"material-ui/styles","react-dnd":"react-dnd","react-dom":"react-dom"}],22:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

"use strict";

exports.__esModule = true;
exports["default"] = {

    attach: function attach(node) {
        this._nodeListener = (function () {
            if (!this.isMounted()) {
                this.detach(node);
                return;
            }
            this.forceUpdate();
        }).bind(this);
        this._actionListener = (function (eventMemo) {
            if (!this.isMounted()) {
                this.detach(node);
                return;
            }
            if (eventMemo && eventMemo.type === 'prompt-rename' && eventMemo.callback) {
                this.setState({ inlineEdition: true, inlineEditionCallback: eventMemo.callback });
            }
            return true;
        }).bind(this);
        node.observe("node_replaced", this._nodeListener);
        node.observe("node_action", this._actionListener);
    },

    detach: function detach(node) {
        if (this._nodeListener) {
            node.stopObserving("node_replaced", this._nodeListener);
            node.stopObserving("node_action", this._actionListener);
        }
    },

    componentDidMount: function componentDidMount() {
        this.attach(this.props.node);
    },

    componentWillUnmount: function componentWillUnmount() {
        this.detach(this.props.node);
    }

};
module.exports = exports["default"];

},{}],23:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _utilMessagesConsumerMixin = require('../util/MessagesConsumerMixin');

var _utilMessagesConsumerMixin2 = _interopRequireDefault(_utilMessagesConsumerMixin);

/**
 * Pagination component reading metadata "paginationData" from current node.
 */
exports['default'] = _react2['default'].createClass({
    displayName: 'ListPaginator',

    mixins: [_utilMessagesConsumerMixin2['default']],

    propTypes: {
        dataModel: _react2['default'].PropTypes.instanceOf(PydioDataModel).isRequired,
        node: _react2['default'].PropTypes.instanceOf(AjxpNode)
    },

    componentDidMount: function componentDidMount() {
        var _this = this;

        if (!this.props.node) {
            (function () {
                var dm = _this.props.dataModel;
                _this._dmObserver = (function () {
                    this.setState({ node: dm.getContextNode() });
                }).bind(_this);
                dm.observe("context_changed", _this._dmObserver);
                _this.setState({ node: dm.getContextNode() });
            })();
        }
    },

    componentWillUnmount: function componentWillUnmount() {
        if (this._dmObserver) {
            this.props.dataModel.stopObserving("context_changed", this._dmObserver);
        }
    },

    getInitialState: function getInitialState() {
        return { node: this.props.node };
    },

    changePage: function changePage(event) {
        this.state.node.getMetadata().get("paginationData").set("new_page", event.currentTarget.getAttribute('data-page'));
        this.props.dataModel.requireContextChange(this.state.node);
    },

    onMenuChange: function onMenuChange(event, index, value) {
        this.state.node.getMetadata().get("paginationData").set("new_page", value);
        this.props.dataModel.requireContextChange(this.state.node);
    },

    render: function render() {
        var _this2 = this;

        if (!this.state.node || !this.state.node.getMetadata().get("paginationData")) {
            return null;
        }
        var pData = this.state.node.getMetadata().get("paginationData");
        var current = parseInt(pData.get("current"));
        var total = parseInt(pData.get("total"));
        var pages = [],
            next = undefined,
            last = undefined,
            previous = undefined,
            first = undefined;
        var pageWord = this.context.getMessage ? this.context.getMessage('331', '') : this.props.getMessage('331', '');
        for (var i = 1; i <= total; i++) {
            pages.push(_react2['default'].createElement(_materialUi.MenuItem, {
                value: i,
                primaryText: pageWord + ' ' + i + (i === current ? ' / ' + total : '')
            }));
        }
        if (pages.length <= 1) {
            return null;
        }
        var sep = undefined;
        /*
        if(this.props.toolbarDisplay){
            if(current > 1) previous = <span className="toolbars-button-menu"><ReactMUI.IconButton onClick={this.changePage} data-page={current-1} iconClassName="icon-caret-left" /></span>;
            if(current < total) next = <span className="toolbars-button-menu"><ReactMUI.IconButton onClick={this.changePage} data-page={current+1} iconClassName="icon-caret-right" /></span>;
        }else{
            if(current > 1) previous = <ReactMUI.FontIcon onClick={this.changePage} data-page={current-1} className="icon-angle-left" />;
            if(current < total) next = <ReactMUI.FontIcon onClick={this.changePage} data-page={current+1} className="icon-angle-right" />;
            sep = <span className="mui-toolbar-separator">&nbsp;</span>;
        }
        */
        previous = _react2['default'].createElement(_materialUi.IconButton, { onTouchTap: function () {
                _this2.onMenuChange(null, 0, current - 1);
            }, iconClassName: "mdi mdi-chevron-left", disabled: current === 1 });
        next = _react2['default'].createElement(_materialUi.IconButton, { onTouchTap: function () {
                _this2.onMenuChange(null, 0, current + 1);
            }, iconClassName: "mdi mdi-chevron-right", disabled: current === total, style: { marginLeft: -20 } });

        return _react2['default'].createElement(
            'div',
            { id: this.props.id, style: _extends({ display: 'flex', alignItems: 'center' }, this.props.style) },
            previous,
            _react2['default'].createElement(
                _materialUi.DropDownMenu,
                {
                    style: { width: 150, marginTop: -6 },
                    onChange: this.onMenuChange,
                    value: current,
                    underlineStyle: { display: 'none' }
                },
                pages
            ),
            next
        );
    }

});
module.exports = exports['default'];

},{"../util/MessagesConsumerMixin":58,"material-ui":"material-ui","react":"react"}],24:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _Pydio$requireLib = _pydio2['default'].requireLib("boot");

var moment = _Pydio$requireLib.moment;

/**
 * Simple material table
 * columns are objects of shape {name, label, style, headerStyle}
 */

var MaterialTable = (function (_React$Component) {
    _inherits(MaterialTable, _React$Component);

    function MaterialTable() {
        _classCallCheck(this, MaterialTable);

        _React$Component.apply(this, arguments);
    }

    MaterialTable.prototype.onRowSelection = function onRowSelection(indexes) {
        var _props = this.props;
        var data = _props.data;
        var onSelectRows = _props.onSelectRows;

        if (!onSelectRows) {
            return;
        }
        if (indexes === 'none') {
            onSelectRows([]);
        } else if (indexes === 'all') {
            onSelectRows(data);
        } else {
            (function () {
                var selection = [];
                indexes.map(function (i) {
                    selection.push(data[i]);
                });
                onSelectRows(selection);
            })();
        }
    };

    MaterialTable.prototype.render = function render() {
        var _props2 = this.props;
        var columns = _props2.columns;
        var data = _props2.data;
        var deselectOnClickAway = _props2.deselectOnClickAway;
        var emptyStateString = _props2.emptyStateString;
        var onSelectRows = _props2.onSelectRows;
        var computeRowStyle = _props2.computeRowStyle;
        var showCheckboxes = this.props.showCheckboxes;

        var rows = data.map(function (model) {
            var rowStyle = undefined;
            if (computeRowStyle) {
                rowStyle = computeRowStyle(model);
            }
            return _react2['default'].createElement(
                _materialUi.TableRow,
                { selectable: onSelectRows !== undefined, style: rowStyle },
                columns.map(function (column) {
                    var value = model[column.name];
                    if (column.useMoment && value) {
                        value = moment(new Date(parseInt(value) * 1000)).fromNow();
                    } else if (column.renderCell) {
                        value = column.renderCell(model);
                    }
                    return _react2['default'].createElement(
                        _materialUi.TableRowColumn,
                        { style: column.style || {}, title: value },
                        value
                    );
                })
            );
        });
        var headers = columns.map(function (column) {
            return _react2['default'].createElement(
                _materialUi.TableHeaderColumn,
                { style: column.headerStyle || {} },
                column.label
            );
        });
        if (emptyStateString && !rows.length) {
            showCheckboxes = false;
            rows = [_react2['default'].createElement(
                _materialUi.TableRow,
                null,
                _react2['default'].createElement(
                    _materialUi.TableRowColumn,
                    { colspan: columns.length },
                    emptyStateString
                )
            )];
        }

        return _react2['default'].createElement(
            _materialUi.Table,
            { onRowSelection: this.onRowSelection.bind(this), multiSelectable: showCheckboxes },
            _react2['default'].createElement(
                _materialUi.TableHeader,
                { displaySelectAll: showCheckboxes, adjustForCheckbox: showCheckboxes, enableSelectAll: showCheckboxes },
                _react2['default'].createElement(
                    _materialUi.TableRow,
                    null,
                    headers
                )
            ),
            _react2['default'].createElement(
                _materialUi.TableBody,
                { deselectOnClickaway: deselectOnClickAway, displayRowCheckbox: showCheckboxes },
                rows
            )
        );
    };

    return MaterialTable;
})(_react2['default'].Component);

MaterialTable.PropTypes = {
    data: _react2['default'].PropTypes.array,
    columns: _react2['default'].PropTypes.array,
    onSelectRows: _react2['default'].PropTypes.func,
    emptyStateString: _react2['default'].PropTypes.string
};

exports['default'] = MaterialTable;
module.exports = exports['default'];

},{"material-ui":"material-ui","pydio":"pydio","react":"react"}],25:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _SimpleList = require('./SimpleList');

var _SimpleList2 = _interopRequireDefault(_SimpleList);

/**
 * Simple to use list component encapsulated with its own query mechanism
 * using a set of properties for the remote node provider.
 */
exports["default"] = React.createClass({
    displayName: "NodeListCustomProvider",

    propTypes: {
        nodeProviderProperties: React.PropTypes.object,
        presetDataModel: React.PropTypes.instanceOf(PydioDataModel),
        autoRefresh: React.PropTypes.number,
        actionBarGroups: React.PropTypes.array,
        heightAutoWithMax: React.PropTypes.number,
        elementHeight: React.PropTypes.number.isRequired,
        nodeClicked: React.PropTypes.func,
        reloadOnServerMessage: React.PropTypes.string,
        entryRenderAsCard: React.PropTypes.func
    },

    reload: function reload() {
        if (this.refs.list && this.isMounted()) {
            this.refs.list.reload();
        }
    },

    componentWillUnmount: function componentWillUnmount() {
        if (this._smObs) {
            this.props.pydio.stopObserving("server_message", this._smObs);
            this.props.pydio.stopObserving("server_message:" + this.props.reloadOnServerMessage, this.reload);
        }
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (this.props.nodeProviderProperties && this.props.nodeProviderProperties !== nextProps.nodeProviderProperties) {
            var _state = this.state;
            var dataModel = _state.dataModel;
            var node = _state.node;

            var provider = new RemoteNodeProvider(nextProps.nodeProviderProperties);
            dataModel.setAjxpNodeProvider(provider);
            node.updateProvider(provider);
            this.setState({ dataModel: dataModel, node: node });
        } else if (this.props.presetDataModel !== nextProps.presetDataModel) {
            this.setState({
                dataModel: nextProps.presetDataModel,
                node: nextProps.presetDataModel.getRootNode()
            });
        }
    },

    getInitialState: function getInitialState() {

        var dataModel = undefined;
        if (this.props.presetDataModel) {
            dataModel = this.props.presetDataModel;
        } else {
            dataModel = PydioDataModel.RemoteDataModelFactory(this.props.nodeProviderProperties);
        }
        var rootNode = dataModel.getRootNode();
        if (this.props.nodeClicked) {
            // leaf
            this.openEditor = (function (node) {
                this.props.nodeClicked(node);
                return false;
            }).bind(this);
            // dir
            dataModel.observe("selection_changed", (function (event) {
                var selectedNodes = event.memo.getSelectedNodes();
                if (selectedNodes.length) {
                    this.props.nodeClicked(selectedNodes[0]);
                    event.memo.setSelectedNodes([]);
                }
            }).bind(this));
        }
        if (this.props.reloadOnServerMessage && this.props.pydio) {
            this._smObs = (function (event) {
                if (XMLUtils.XPathSelectSingleNode(event, this.props.reloadOnServerMessage)) this.reload();
            }).bind(this);
            this.props.pydio.observe("server_message", this._smObs);
            this.props.pydio.observe("server_message:" + this.props.reloadOnServerMessage, this.reload);
        }
        return { node: rootNode, dataModel: dataModel };
    },

    render: function render() {
        var legend;
        if (this.props.legend) {
            legend = React.createElement(
                "div",
                { className: "subtitle" },
                this.props.legend
            );
        }
        return React.createElement(
            "div",
            { className: this.props.heightAutoWithMax ? "" : "layout-fill vertical-layout" },
            React.createElement(_SimpleList2["default"], _extends({}, this.props, {
                openEditor: this.openEditor,
                ref: "list",
                style: Object.assign({ height: '100%' }, this.props.style || {}),
                node: this.state.node,
                dataModel: this.state.dataModel,
                actionBarGroups: this.props.actionBarGroups,
                skipParentNavigation: true,
                observeNodeReload: true,
                hideToolbar: true
            }))
        );
    }

});
module.exports = exports["default"];

},{"./SimpleList":26}],26:[function(require,module,exports){
(function (global){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactScrollbar = require('react-scrollbar');

var _reactScrollbar2 = _interopRequireDefault(_reactScrollbar);

var _materialUi = require('material-ui');

var _utilMessagesConsumerMixin = require('../util/MessagesConsumerMixin');

var _utilMessagesConsumerMixin2 = _interopRequireDefault(_utilMessagesConsumerMixin);

var _ListEntry = require('./ListEntry');

var _TableListEntry = require('./TableListEntry');

var _TableListEntry2 = _interopRequireDefault(_TableListEntry);

var _TableListHeader = require('./TableListHeader');

var _TableListHeader2 = _interopRequireDefault(_TableListHeader);

var _ConfigurableListEntry = require('./ConfigurableListEntry');

var _ConfigurableListEntry2 = _interopRequireDefault(_ConfigurableListEntry);

var _SortColumns = require('./SortColumns');

var _SortColumns2 = _interopRequireDefault(_SortColumns);

var _ListPaginator = require('./ListPaginator');

var _ListPaginator2 = _interopRequireDefault(_ListPaginator);

var _viewsSimpleReactActionBar = require('../views/SimpleReactActionBar');

var _viewsSimpleReactActionBar2 = _interopRequireDefault(_viewsSimpleReactActionBar);

var _InlineEditor = require('./InlineEditor');

var _InlineEditor2 = _interopRequireDefault(_InlineEditor);

var _viewsEmptyStateView = require('../views/EmptyStateView');

var _viewsEmptyStateView2 = _interopRequireDefault(_viewsEmptyStateView);

var React = require('react');
var Infinite = require('react-infinite');

var DOMUtils = require('pydio/util/dom');
var LangUtils = require('pydio/util/lang');
var PydioDataModel = require('pydio/model/data-model');
var PeriodicalExecuter = require('pydio/util/periodical-executer');

/**
 * Generic List component, using Infinite for cell virtualization, pagination, various
 * displays, etc... It provides many hooks for rendering cells on-demand.
 */
var SimpleList = React.createClass({
    displayName: 'SimpleList',

    mixins: [_utilMessagesConsumerMixin2['default']],

    propTypes: {
        infiniteSliceCount: React.PropTypes.number,
        filterNodes: React.PropTypes.func,
        customToolbar: React.PropTypes.object,
        tableKeys: React.PropTypes.object,
        autoRefresh: React.PropTypes.number,
        reloadAtCursor: React.PropTypes.bool,
        clearSelectionOnReload: React.PropTypes.bool,
        heightAutoWithMax: React.PropTypes.number,
        containerHeight: React.PropTypes.number,
        observeNodeReload: React.PropTypes.bool,
        defaultGroupBy: React.PropTypes.string,
        defaultGroupByLabel: React.PropTypes.string,

        skipParentNavigation: React.PropTypes.bool,
        skipInternalDataModel: React.PropTypes.bool,
        delayInitialLoad: React.PropTypes.number,

        entryEnableSelector: React.PropTypes.func,
        renderCustomEntry: React.PropTypes.func,
        entryRenderIcon: React.PropTypes.func,
        entryRenderActions: React.PropTypes.func,
        entryRenderFirstLine: React.PropTypes.func,
        entryRenderSecondLine: React.PropTypes.func,
        entryRenderThirdLine: React.PropTypes.func,
        entryHandleClicks: React.PropTypes.func,
        hideToolbar: React.PropTypes.bool,
        computeActionsForNode: React.PropTypes.bool,
        multipleActions: React.PropTypes.array,

        openEditor: React.PropTypes.func,
        openCollection: React.PropTypes.func,

        elementStyle: React.PropTypes.object,
        passScrollingStateToChildren: React.PropTypes.bool,
        elementHeight: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.object]).isRequired

    },

    statics: {
        HEIGHT_ONE_LINE: 50,
        HEIGHT_TWO_LINES: 73,
        CLICK_TYPE_SIMPLE: 'simple',
        CLICK_TYPE_DOUBLE: 'double',
        PARENT_FOLDER_ICON: 'mdi mdi-chevron-left'
    },

    getDefaultProps: function getDefaultProps() {
        return { infiniteSliceCount: 30, clearSelectionOnReload: true };
    },

    clickRow: function clickRow(gridRow, event) {
        var node = undefined;
        if (gridRow.props) {
            node = gridRow.props.data.node;
        } else {
            node = gridRow;
        }
        if (this.props.entryHandleClicks) {
            this.props.entryHandleClicks(node, SimpleList.CLICK_TYPE_SIMPLE, event);
            return;
        }
        if (node.isLeaf() && this.props.openEditor) {
            if (this.props.openEditor(node) === false) {
                return;
            }
            var uniqueSelection = new Map();
            uniqueSelection.set(node, true);
            this.setState({ selection: uniqueSelection }, this.rebuildLoadedElements);
        } else if (!node.isLeaf()) {
            if (this.props.openCollection) {
                this.props.openCollection(node);
            } else {
                this.props.dataModel.setSelectedNodes([node]);
            }
        }
    },

    doubleClickRow: function doubleClickRow(gridRow, event) {
        var node = undefined;
        if (gridRow.props) {
            node = gridRow.props.data.node;
        } else {
            node = gridRow;
        }
        if (this.props.entryHandleClicks) {
            this.props.entryHandleClicks(node, SimpleList.CLICK_TYPE_DOUBLE, event);
        }
    },

    onColumnSort: function onColumnSort(column) {
        var stateSetCallback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        var pagination = this.props.node.getMetadata().get('paginationData');
        if (pagination && pagination.get('total') > 1 && pagination.get('remote_order')) {

            var dir = 'asc';
            if (this.props.node.getMetadata().get('paginationData').get('currentOrderDir')) {
                dir = this.props.node.getMetadata().get('paginationData').get('currentOrderDir') === 'asc' ? 'desc' : 'asc';
            }
            var orderData = new Map();
            orderData.set('order_column', column['remoteSortAttribute'] ? column.remoteSortAttribute : column.name);
            orderData.set('order_direction', dir);
            this.props.node.getMetadata().set("remote_order", orderData);
            this.props.dataModel.requireContextChange(this.props.node, true);
        } else {

            var att = column['sortAttribute'] ? column['sortAttribute'] : column.name;
            var sortingInfo = undefined;
            var _state$sortingInfo = this.state.sortingInfo;
            var attribute = _state$sortingInfo.attribute;
            var direction = _state$sortingInfo.direction;

            if (attribute === att && direction) {
                if (direction === 'asc') {
                    // Switch direction
                    sortingInfo = { attribute: att, sortType: column.sortType, direction: 'desc' };
                } else {
                    // Reset sorting
                    sortingInfo = this.props.defaultSortingInfo || {};
                }
            } else {
                sortingInfo = { attribute: att, sortType: column.sortType, direction: 'asc' };
            }
            this.setState({ sortingInfo: sortingInfo }, (function () {
                this.rebuildLoadedElements();
                if (stateSetCallback) {
                    stateSetCallback();
                }
            }).bind(this));
        }
    },

    computeSelectionFromCurrentPlusTargetNode: function computeSelectionFromCurrentPlusTargetNode(currentSelection, targetNode) {

        var currentIndexStart = undefined,
            currentIndexEnd = undefined,
            nodeBefore = false;
        if (!this.indexedElements) {
            return [];
        }
        var firstSelected = currentSelection[0];
        var lastSelected = currentSelection[currentSelection.length - 1];
        var newSelection = [];
        for (var i = 0; i < this.indexedElements.length; i++) {
            if (currentIndexStart !== undefined) {
                newSelection.push(this.indexedElements[i].node);
            }
            if (this.indexedElements[i].node === targetNode) {
                if (currentIndexStart !== undefined && currentIndexEnd === undefined) {
                    currentIndexEnd = i;
                    break;
                }
                currentIndexStart = i;
                nodeBefore = true;
                newSelection.push(this.indexedElements[i].node);
            }
            if (this.indexedElements[i].node === firstSelected && currentIndexStart === undefined) {
                currentIndexStart = i;
                newSelection.push(this.indexedElements[i].node);
            }
            if (this.indexedElements[i].node === lastSelected && nodeBefore) {
                currentIndexEnd = i;
                break;
            }
        }
        return newSelection;
    },

    onKeyDown: function onKeyDown(e) {
        var currentIndexStart = undefined,
            currentIndexEnd = undefined;
        var contextHolder = window.pydio.getContextHolder();
        var elementsPerLine = this.props.elementsPerLine || 1;
        var shiftKey = e.shiftKey;
        var key = e.key;

        if (contextHolder.isEmpty() || !this.indexedElements) {
            return;
        }
        var downKeys = ['ArrowDown', 'ArrowRight', 'PageDown', 'End'];

        var position = shiftKey && downKeys.indexOf(key) > -1 ? 'first' : 'last';
        var currentSelection = contextHolder.getSelectedNodes();

        var firstSelected = currentSelection[0];
        var lastSelected = currentSelection[currentSelection.length - 1];

        if (key === 'Enter') {
            this.doubleClickRow(firstSelected);
            return;
        }
        if (key === 'Delete' && global.pydio.Controller.fireActionByKey('key_delete')) {
            return;
        }

        for (var i = 0; i < this.indexedElements.length; i++) {
            if (this.indexedElements[i].node === firstSelected) {
                currentIndexStart = i;
            }
            if (this.indexedElements[i].node === lastSelected) {
                currentIndexEnd = i;
                break;
            }
        }
        var selectionIndex = undefined;
        var maxIndex = this.indexedElements.length - 1;
        var increment = key === 'PageDown' || key === 'PageUp' ? 10 : 1;
        if (key === 'ArrowDown' || key === 'PageDown') {
            selectionIndex = Math.min(currentIndexEnd + elementsPerLine * increment, maxIndex);
        } else if (key === 'ArrowUp' || key === 'PageUp') {
            selectionIndex = Math.max(currentIndexStart - elementsPerLine * increment, 0);
        } else if (key === 'Home') {
            selectionIndex = 0;
        } else if (key === 'End') {
            selectionIndex = maxIndex;
        }
        if (elementsPerLine > 1) {
            if (key === 'ArrowRight') {
                selectionIndex = currentIndexEnd + 1;
            } else if (key === 'ArrowLeft') {
                selectionIndex = currentIndexStart - 1;
            }
        }

        if (shiftKey && selectionIndex !== undefined) {
            var min = Math.min(currentIndexStart, currentIndexEnd, selectionIndex);
            var max = Math.max(currentIndexStart, currentIndexEnd, selectionIndex);
            if (min !== max) {
                var selection = [];
                for (var i = min; i < max + 1; i++) {
                    if (this.indexedElements[i]) selection.push(this.indexedElements[i].node);
                }
                contextHolder.setSelectedNodes(selection);
            }
        } else if (this.indexedElements[selectionIndex] && this.indexedElements[selectionIndex].node) {
            contextHolder.setSelectedNodes([this.indexedElements[selectionIndex].node]);
        }
    },

    getInitialState: function getInitialState() {
        this.actionsCache = { multiple: new Map() };
        if (!this.props.skipInternalDataModel) {
            this.dm = new PydioDataModel();
            this.dm.setRootNode(this.props.dataModel.getContextNode());
            this.dm.setContextNode(this.props.dataModel.getContextNode());
        } else {
            this.dm = this.props.dataModel;
        }
        var state = {
            loaded: this.props.node.isLoaded(),
            loading: !this.props.node.isLoaded(),
            showSelector: false,
            elements: this.props.node.isLoaded() ? this.buildElements(0, this.props.infiniteSliceCount) : [],
            containerHeight: this.props.containerHeight ? this.props.containerHeight : this.props.heightAutoWithMax ? 0 : 500,
            sortingInfo: this.props.defaultSortingInfo || null
        };
        if (this.props.elementHeight instanceof Object) {
            state.elementHeight = this.computeElementHeightResponsive();
        }
        state.infiniteLoadBeginBottomOffset = 200;
        return state;
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var _this = this;

        this.indexedElements = null;
        var currentLength = Math.max(this.state.elements.length, nextProps.infiniteSliceCount);
        this.setState({
            loaded: nextProps.node.isLoaded(),
            loading: !nextProps.node.isLoaded(),
            showSelector: false,
            elements: nextProps.node.isLoaded() ? this.buildElements(0, currentLength, nextProps.node) : [],
            infiniteLoadBeginBottomOffset: 200,
            sortingInfo: this.state.sortingInfo || nextProps.defaultSortingInfo || null
        }, function () {
            if (nextProps.node.isLoaded()) _this.updateInfiniteContainerHeight();
        });
        if (!nextProps.autoRefresh && this.refreshInterval) {
            window.clearInterval(this.refreshInterval);
            this.refreshInterval = null;
        } else if (nextProps.autoRefresh && !this.refreshInterval) {
            this.refreshInterval = window.setInterval(this.reload, nextProps.autoRefresh);
        }
        this.patchInfiniteGrid(nextProps.elementsPerLine);
        if (this.props.node && nextProps.node !== this.props.node) {
            this.observeNodeChildren(this.props.node, true);
        }
        if (this._manualScrollPe) {
            this._manualScrollPe.stop();
            this._manualScrollPe = null;
        }
    },

    observeNodeChildren: function observeNodeChildren(node) {
        var stop = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

        if (stop && !this._childrenObserver) return;

        if (!this._childrenObserver) {
            this._childrenObserver = (function () {
                this.indexedElements = null;
                this.rebuildLoadedElements();
            }).bind(this);
        }
        if (!this._childrenActionsObserver) {
            this._childrenActionsObserver = (function (eventMemo) {
                if (eventMemo.type === 'prompt-rename') {
                    this.setState({ inlineEditionForNode: eventMemo.child, inlineEditionCallback: eventMemo.callback });
                }
            }).bind(this);
        }
        if (stop) {
            node.stopObserving("child_added", this._childrenObserver);
            node.stopObserving("child_removed", this._childrenObserver);
            node.stopObserving("child_node_action", this._childrenActionsObserver);
        } else {
            node.observe("child_added", this._childrenObserver);
            node.observe("child_removed", this._childrenObserver);
            node.observe("child_node_action", this._childrenActionsObserver);
        }
    },

    _loadNodeIfNotLoaded: function _loadNodeIfNotLoaded() {
        var node = this.props.node;

        if (!node.isLoaded()) {
            node.observeOnce("loaded", (function () {
                if (!this.isMounted()) return;
                if (this.props.node === node) {
                    this.observeNodeChildren(node);
                    this.setState({
                        loaded: true,
                        loading: false,
                        elements: this.buildElements(0, this.props.infiniteSliceCount)
                    });
                }
                if (this.props.heightAutoWithMax) {
                    this.updateInfiniteContainerHeight();
                }
            }).bind(this));
            node.load();
        } else {
            this.observeNodeChildren(node);
        }
    },

    _loadingListener: function _loadingListener() {
        this.observeNodeChildren(this.props.node, true);
        this.setState({ loaded: false, loading: true });
        this.indexedElements = null;
    },
    _loadedListener: function _loadedListener() {
        var currentLength = Math.max(this.state.elements.length, this.props.infiniteSliceCount);
        this.setState({
            loading: false,
            elements: this.buildElements(0, currentLength, this.props.node)
        });
        if (this.props.heightAutoWithMax) {
            this.updateInfiniteContainerHeight();
        }
        this.observeNodeChildren(this.props.node);
    },

    reload: function reload() {
        if (this.props.reloadAtCursor && this._currentCursor) {
            this.loadStartingAtCursor();
            return;
        }
        if (this.props.clearSelectionOnReload) {
            this.props.dataModel.setSelectedNodes([]);
        }
        this._loadingListener();
        this.props.node.observeOnce("loaded", this._loadedListener);
        this.props.node.reload();
    },

    loadStartingAtCursor: function loadStartingAtCursor() {
        this._loadingListener();
        var node = this.props.node;
        var cachedChildren = node.getChildren();
        var newChildren = [];
        node.observeOnce("loaded", (function () {
            var reorderedChildren = new Map();
            newChildren.map(function (c) {
                reorderedChildren.set(c.getPath(), c);
            });
            cachedChildren.forEach(function (c) {
                reorderedChildren.set(c.getPath(), c);
            });
            node._children = reorderedChildren;
            this._loadedListener();
        }).bind(this));
        node.setLoaded(false);
        node.observe("child_added", function (newChild) {
            newChildren.push(node._children.get(newChild));
        });
        this.props.node.load(null, { cursor: this._currentCursor });
    },

    wireReloadListeners: function wireReloadListeners() {
        this.wrappedLoading = this._loadingListener;
        this.wrappedLoaded = this._loadedListener;
        this.props.node.observe("loading", this.wrappedLoading);
        this.props.node.observe("loaded", this.wrappedLoaded);
    },
    stopReloadListeners: function stopReloadListeners() {
        this.props.node.stopObserving("loading", this.wrappedLoading);
        this.props.node.stopObserving("loaded", this.wrappedLoaded);
    },

    toggleSelector: function toggleSelector() {
        // Force rebuild elements
        this.setState({
            showSelector: !this.state.showSelector,
            selection: new Map()
        }, this.rebuildLoadedElements);
    },

    toggleSelection: function toggleSelection(node) {
        var selection = this.state.selection || new Map();
        if (selection.get(node)) selection['delete'](node);else selection.set(node, true);
        if (this.refs.all_selector) this.refs.all_selector.setChecked(false);
        this.setState({
            selection: selection
        }, this.rebuildLoadedElements);
    },

    selectAll: function selectAll() {
        var _this2 = this;

        if (this.refs.all_selector && !this.refs.all_selector.isChecked()) {
            this.setState({ selection: new Map() }, this.rebuildLoadedElements);
        } else {
            (function () {
                var selection = new Map();
                _this2.props.node.getChildren().forEach((function (child) {
                    if (this.props.filterNodes && !this.props.filterNodes(child)) {
                        return;
                    }
                    if (child.isLeaf()) {
                        selection.set(child, true);
                    }
                }).bind(_this2));
                if (_this2.refs.all_selector) _this2.refs.all_selector.setChecked(true);
                _this2.setState({ selection: selection }, _this2.rebuildLoadedElements);
            })();
        }
    },

    applyMultipleAction: function applyMultipleAction(ev) {
        if (!this.state.selection || !this.state.selection.size) {
            return;
        }
        var actionName = ev.currentTarget.getAttribute('data-action');
        var dm = this.dm || new PydioDataModel();
        dm.setContextNode(this.props.node);
        var selNodes = [];
        this.state.selection.forEach(function (v, node) {
            selNodes.push(node);
        });
        dm.setSelectedNodes(selNodes);
        var a = this.props.pydio.Controller.getActionByName(actionName);
        a.fireContextChange(dm, true, this.props.pydio.user);
        a.apply([dm]);

        ev.stopPropagation();
        ev.preventDefault();
    },

    getActionsForNode: function getActionsForNode(dm, node) {
        if (!this.props.computeActionsForNode) {
            return [];
        }
        var cacheKey = node.isLeaf() ? 'file-' + node.getAjxpMime() : 'folder';
        var selectionType = node.isLeaf() ? 'file' : 'dir';
        var nodeActions = [];
        if (this.actionsCache[cacheKey]) {
            nodeActions = this.actionsCache[cacheKey];
        } else {
            dm.setSelectedNodes([node]);
            window.pydio.Controller.actions.forEach((function (a) {
                a.fireContextChange(dm, true, window.pydio.user);
                if (a.context.selection && a.context.actionBar && a.selectionContext[selectionType] && !a.deny && a.options.icon_class && (!this.props.actionBarGroups || this.props.actionBarGroups.indexOf(a.context.actionBarGroup) !== -1) && (!a.selectionContext.allowedMimes.length || a.selectionContext.allowedMimes.indexOf(node.getAjxpMime()) !== -1)) {
                    nodeActions.push(a);
                    if (node.isLeaf() && a.selectionContext.unique === false) {
                        this.actionsCache.multiple.set(a.options.name, a);
                    }
                }
            }).bind(this));
            this.actionsCache[cacheKey] = nodeActions;
        }
        return nodeActions;
    },

    updateInfiniteContainerHeight: function updateInfiniteContainerHeight() {
        var retries = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

        if (this.props.containerHeight) {
            return this.props.containerHeight;
        }
        if (!this.refs.infiniteParent) {
            return;
        }
        var containerHeight = this.refs.infiniteParent.clientHeight;
        if (this.props.heightAutoWithMax) {
            var number = this.indexedElements ? this.indexedElements.length : this.props.node.getChildren().size;
            var elementHeight = this.state.elementHeight ? this.state.elementHeight : this.props.elementHeight;
            containerHeight = Math.min(number * elementHeight, this.props.heightAutoWithMax);
        }
        if (!containerHeight && !retries) {
            global.setTimeout((function () {
                this.updateInfiniteContainerHeight(true);
            }).bind(this), 50);
        }
        this.setState({ containerHeight: containerHeight });
    },

    computeElementHeightResponsive: function computeElementHeightResponsive() {
        var breaks = this.props.elementHeight;
        if (!(breaks instanceof Object)) {
            breaks = {
                "min-width:480px": this.props.elementHeight,
                "max-width:480px": Object.keys(this.props.tableKeys).length * 24 + 33
            };
        }
        if (window.matchMedia) {
            for (var k in breaks) {
                if (breaks.hasOwnProperty(k) && window.matchMedia('(' + k + ')').matches) {
                    return breaks[k];
                }
            }
        } else {
            var width = DOMUtils.getViewportWidth();
            if (width < 480) return breaks["max-width:480px"];else return breaks["max-width:480px"];
        }
        return 50;
    },

    updateElementHeightResponsive: function updateElementHeightResponsive() {
        var newH = this.computeElementHeightResponsive();
        if (!this.state || !this.state.elementHeight || this.state.elementHeight != newH) {
            this.setState({ elementHeight: newH }, (function () {
                if (this.props.heightAutoWithMax) {
                    this.updateInfiniteContainerHeight();
                }
            }).bind(this));
        }
    },

    patchInfiniteGrid: function patchInfiniteGrid(els) {
        if (this.refs.infinite && els > 1) {
            this.refs.infinite.state.infiniteComputer.__proto__.getDisplayIndexStart = function (windowTop) {
                return els * Math.floor(windowTop / this.heightData / els);
            };
            this.refs.infinite.state.infiniteComputer.__proto__.getDisplayIndexEnd = function (windowBottom) {
                return els * Math.ceil(windowBottom / this.heightData / els);
            };
        }
    },

    componentDidMount: function componentDidMount() {
        var _this3 = this;

        if (this.props.delayInitialLoad) {
            setTimeout(function () {
                _this3._loadNodeIfNotLoaded();
            }, this.props.delayInitialLoad);
        } else {
            this._loadNodeIfNotLoaded();
        }
        this.patchInfiniteGrid(this.props.elementsPerLine);
        if (this.refs.infiniteParent) {
            this.updateInfiniteContainerHeight();
            if (!this.props.heightAutoWithMax && !this.props.externalResize) {
                if (window.addEventListener) {
                    window.addEventListener('resize', this.updateInfiniteContainerHeight);
                } else {
                    window.attachEvent('onresize', this.updateInfiniteContainerHeight);
                }
            }
        }
        if (this.props.autoRefresh) {
            this.refreshInterval = window.setInterval(this.reload, this.props.autoRefresh);
        }
        if (this.props.observeNodeReload) {
            this.wireReloadListeners();
        }
        if (this.props.elementHeight instanceof Object || this.props.tableKeys) {
            if (window.addEventListener) {
                window.addEventListener('resize', this.updateElementHeightResponsive);
            } else {
                window.attachEvent('onresize', this.updateElementHeightResponsive);
            }
            this.updateElementHeightResponsive();
        }
        this.props.dataModel.observe('selection_changed', (function () {
            var _this4 = this;

            if (!this.isMounted()) return;
            var selection = new Map();
            var selectedNodes = this.props.dataModel.getSelectedNodes();
            selectedNodes.map(function (n) {
                selection.set(n, true);
            });
            this.setState({ selection: selection }, function () {
                _this4.rebuildLoadedElements();
                if (selectedNodes.length === 1) {
                    _this4.scrollToView(selectedNodes[0]);
                }
            });
        }).bind(this));
    },

    componentWillUnmount: function componentWillUnmount() {
        if (!this.props.heightAutoWithMax) {
            if (window.removeEventListener) {
                window.removeEventListener('resize', this.updateInfiniteContainerHeight);
            } else {
                window.detachEvent('onresize', this.updateInfiniteContainerHeight);
            }
        }
        if (this.props.elementHeight instanceof Object || this.props.tableKeys) {
            if (window.removeEventListener) {
                window.removeEventListener('resize', this.updateElementHeightResponsive);
            } else {
                window.detachEvent('resize', this.updateElementHeightResponsive);
            }
        }
        if (this.refreshInterval) {
            window.clearInterval(this.refreshInterval);
        }
        if (this.props.observeNodeReload) {
            this.stopReloadListeners();
        }
        if (this.props.node) {
            this.observeNodeChildren(this.props.node, true);
        }
    },

    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        if (prevProps.node && this.props.node && prevProps.node.getPath() === this.props.node.getPath()) {
            return;
        }
        this._loadNodeIfNotLoaded();
    },

    onScroll: function onScroll(scrollTop) {

        if (!this.props.passScrollingStateToChildren) {
            return;
        }
        // Maintains a series of timeouts to set this.state.isScrolling
        // to be true when the element is scrolling.

        if (this.state.scrollTimeout) {
            clearTimeout(this.state.scrollTimeout);
        }

        var that = this,
            scrollTimeout = setTimeout(function () {
            that.setState({
                isScrolling: false,
                scrollTimeout: undefined
            });
        }, 150);

        this.setState({
            isScrolling: true,
            scrollTimeout: scrollTimeout
        });
    },

    scrollToLast: function scrollToLast() {
        if (this.indexedElements && this.indexedElements[this.indexedElements.length - 1].node) {
            this.scrollToView(this.indexedElements[this.indexedElements.length - 1].node);
        }
    },

    scrollToView: function scrollToView(node) {
        var _this5 = this;

        if (!this.indexedElements || !this.refs.infinite || !this.refs.infinite.scrollable) return;
        var scrollable = this.refs.infinite.scrollable;
        var visibleFrame = {
            top: scrollable.scrollTop + this.props.elementHeight / 2,
            bottom: scrollable.scrollTop + this.state.containerHeight - this.props.elementHeight / 2
        };
        var realMaxScrollTop = this.indexedElements.length * this.props.elementHeight - this.state.containerHeight;

        var position = -1;
        this.indexedElements.forEach(function (e, k) {
            if (e.node && e.node === node) position = k;
        });
        if (position === -1) return;
        var elementHeight = this.props.elementHeight;
        var scrollTarget = position * elementHeight;

        if (scrollTarget > visibleFrame.top && scrollTarget < visibleFrame.bottom) {
            // already visible;
            return;
        } else if (scrollTarget >= visibleFrame.bottom) {
            scrollTarget -= this.state.containerHeight - elementHeight * 2;
        }
        scrollTarget = Math.min(scrollTarget, realMaxScrollTop);
        scrollable.scrollTop = scrollTarget;
        if (this._manualScrollPe) this._manualScrollPe.stop();
        if (scrollable.scrollHeight < scrollTarget) {
            this._manualScrollPe = new PeriodicalExecuter(function () {
                scrollable.scrollTop = scrollTarget;
                if (scrollable.scrollHeight >= scrollTarget) {
                    _this5._manualScrollPe.stop();
                    _this5._manualScrollPe = null;
                }
            }, .25);
        }
    },

    buildElementsFromNodeEntries: function buildElementsFromNodeEntries(nodeEntries, showSelector) {

        var components = [],
            index = 0;
        var nodeEntriesLength = nodeEntries.length;
        nodeEntries.forEach((function (entry) {
            var data = undefined;
            if (entry.parent) {
                data = {
                    node: entry.node,
                    key: entry.node.getPath(),
                    id: entry.node.getPath(),
                    mainIcon: SimpleList.PARENT_FOLDER_ICON,
                    firstLine: "..",
                    className: "list-parent-node",
                    secondLine: this.context.getMessage('react.1'),
                    onClick: this.clickRow,
                    onDoubleClick: this.doubleClickRow,
                    showSelector: false,
                    selectorDisabled: true,
                    noHover: false
                };
                if (this.props.entryRenderParentIcon && !this.props.tableKeys) {
                    data['iconCell'] = this.props.entryRenderParentIcon(entry.node, entry);
                } else {
                    data['mainIcon'] = SimpleList.PARENT_FOLDER_ICON;
                }
                if (this.props.elementStyle) {
                    data['style'] = this.props.elementStyle;
                }
                if (this.props.passScrollingStateToChildren) {
                    data['parentIsScrolling'] = this.state.isScrolling;
                }
                components.push(React.createElement(_ListEntry.ListEntry, data));
            } else if (entry.groupHeader) {
                var id = entry.groupHeader,
                    firstLine = entry.groupHeaderLabel;
                if (this.props.entryRenderGroupHeader) {
                    firstLine = this.props.entryRenderGroupHeader(id, firstLine);
                }
                data = {
                    node: null,
                    key: entry.groupHeader,
                    id: id,
                    mainIcon: null,
                    firstLine: firstLine,
                    className: 'list-group-header',
                    onClick: null,
                    showSelector: false,
                    selectorDisabled: true,
                    noHover: true
                };
                if (this.props.passScrollingStateToChildren) {
                    data['parentIsScrolling'] = this.state.isScrolling;
                }
                components.push(React.createElement(_ListEntry.ListEntry, data));
            } else {
                data = {
                    node: entry.node,
                    onClick: this.clickRow,
                    onDoubleClick: this.doubleClickRow,
                    onSelect: this.toggleSelection,
                    key: entry.node.getPath(),
                    id: entry.node.getPath(),
                    renderIcon: this.props.entryRenderIcon,
                    renderFirstLine: this.props.entryRenderFirstLine,
                    renderSecondLine: this.props.entryRenderSecondLine,
                    renderThirdLine: this.props.entryRenderThirdLine,
                    renderActions: this.props.entryRenderActions,
                    showSelector: showSelector,
                    selected: this.state && this.state.selection ? this.state.selection.get(entry.node) : false,
                    actions: React.createElement(_viewsSimpleReactActionBar2['default'], { node: entry.node, actions: entry.actions, dataModel: this.dm }),
                    selectorDisabled: !(this.props.entryEnableSelector ? this.props.entryEnableSelector(entry.node) : entry.node.isLeaf())
                };
                data['isFirst'] = index === 0;
                data['isLast'] = index === nodeEntriesLength - 1;
                index++;
                if (this.props.elementStyle) {
                    data['style'] = this.props.elementStyle;
                }
                if (this.props.passScrollingStateToChildren) {
                    data['parentIsScrolling'] = this.state.isScrolling;
                }
                if (this.props.renderCustomEntry) {

                    components.push(this.props.renderCustomEntry(data));
                } else if (this.props.tableKeys) {

                    if (this.props.defaultGroupBy) {
                        data['tableKeys'] = LangUtils.deepCopy(this.props.tableKeys);
                        delete data['tableKeys'][this.props.defaultGroupBy];
                    } else {
                        data['tableKeys'] = this.props.tableKeys;
                    }
                    components.push(React.createElement(_TableListEntry2['default'], data));
                } else {

                    components.push(React.createElement(_ConfigurableListEntry2['default'], data));
                }
            }
        }).bind(this));

        return components;
    },

    buildElements: function buildElements(start, end, node, showSelector) {
        var _this6 = this;

        var theNode = this.props.node;
        if (node) theNode = node;
        var theShowSelector = this.state && this.state.showSelector;
        if (showSelector !== undefined) theShowSelector = showSelector;

        if (!this.indexedElements || this.indexedElements.length !== theNode.getChildren().size) {
            (function () {
                _this6.indexedElements = [];
                var groupBy = undefined,
                    groupByLabel = undefined,
                    groups = undefined,
                    groupKeys = undefined,
                    groupLabels = undefined;
                if (_this6.props.defaultGroupBy) {
                    groupBy = _this6.props.defaultGroupBy;
                    groupByLabel = _this6.props.groupByLabel || false;
                    groups = {}, groupKeys = [], groupLabels = {};
                }

                if (!_this6.props.skipParentNavigation && theNode.getParent() && (_this6.props.dataModel.getContextNode() !== theNode || _this6.props.skipInternalDataModel)) {
                    _this6.indexedElements.push({ node: theNode.getParent(), parent: true, actions: null });
                }

                theNode.getChildren().forEach((function (child) {
                    if (child.getMetadata().has('cursor')) {
                        var childCursor = parseInt(child.getMetadata().get('cursor'));
                        this._currentCursor = Math.max(this._currentCursor ? this._currentCursor : 0, childCursor);
                    }
                    if (this.props.filterNodes && !this.props.filterNodes(child)) {
                        return;
                    }
                    var nodeActions = this.getActionsForNode(this.dm, child);
                    if (groupBy) {
                        var groupValue = child.getMetadata().get(groupBy) || 'N/A';
                        if (!groups[groupValue]) {
                            groups[groupValue] = [];
                            groupKeys.push(groupValue);
                        }
                        if (groupByLabel && child.getMetadata().has(groupByLabel) && !groupLabels[groupValue]) {
                            groupLabels[groupValue] = child.getMetadata().get(groupByLabel);
                        }
                        groups[groupValue].push({ node: child, parent: false, actions: nodeActions });
                    } else {
                        this.indexedElements.push({ node: child, parent: false, actions: nodeActions });
                    }
                }).bind(_this6));

                if (groupBy) {
                    groupKeys = groupKeys.sort();
                    groupKeys.map((function (k) {
                        var label = k;
                        if (groupLabels[k]) {
                            label = groupLabels[k];
                        } else if (this.props.renderGroupLabels) {
                            label = this.props.renderGroupLabels(groupBy, k);
                        }
                        this.indexedElements.push({
                            node: null,
                            groupHeader: k,
                            groupHeaderLabel: label,
                            parent: false,
                            actions: null
                        });
                        this.indexedElements = this.indexedElements.concat(groups[k]);
                    }).bind(_this6));
                }
            })();
        }

        if (this.state && this.state.sortingInfo && !this.remoteSortingInfo()) {
            (function () {
                var _state$sortingInfo2 = _this6.state.sortingInfo;
                var attribute = _state$sortingInfo2.attribute;
                var direction = _state$sortingInfo2.direction;
                var sortType = _state$sortingInfo2.sortType;

                var sortFunction = undefined;
                if (sortType === 'file-natural') {
                    sortFunction = function (a, b) {
                        if (a.parent) {
                            return -1;
                        }
                        if (b.parent) {
                            return 1;
                        }
                        var nodeA = a.node;
                        var nodeB = b.node;
                        // Recycle always last
                        if (nodeA.isRecycle()) return 1;
                        if (nodeB.isRecycle()) return -1;
                        // Folders first
                        var aLeaf = nodeA.isLeaf();
                        var bLeaf = nodeB.isLeaf();
                        var res = aLeaf && !bLeaf ? 1 : !aLeaf && bLeaf ? -1 : 0;
                        if (res !== 0) return res;
                        res = nodeA.getLabel().localeCompare(nodeB.getLabel());
                        return res;
                    };
                } else {
                    sortFunction = function (a, b) {
                        if (a.parent) {
                            return -1;
                        }
                        var aMeta = a.node.getMetadata().get(attribute) || "";
                        var bMeta = b.node.getMetadata().get(attribute) || "";
                        var res = undefined;
                        if (sortType === 'number') {
                            aMeta = parseFloat(aMeta);
                            bMeta = parseFloat(bMeta);
                            res = direction === 'asc' ? aMeta - bMeta : bMeta - aMeta;
                        } else if (sortType === 'string') {
                            res = direction === 'asc' ? aMeta.localeCompare(bMeta) : bMeta.localeCompare(aMeta);
                        }
                        if (res === 0) {
                            // Resort by label to make it stable
                            var labComp = a.node.getLabel().localeCompare(b.node.getLabel());
                            res = direction === 'asc' ? labComp : -labComp;
                        }
                        return res;
                    };
                }
                _this6.indexedElements.sort(sortFunction);
            })();
        }

        if (this.props.elementPerLine > 1) {
            end = end * this.props.elementPerLine;
            start = start * this.props.elementPerLine;
        }
        return this.indexedElements.slice(start, end);
    },

    rebuildLoadedElements: function rebuildLoadedElements() {
        var newElements = this.buildElements(0, Math.max(this.state.elements.length, this.props.infiniteSliceCount));
        var infiniteLoadBeginBottomOffset = newElements.length ? 200 : 0;
        this.setState({
            elements: newElements,
            infiniteLoadBeginBottomOffset: infiniteLoadBeginBottomOffset
        });
        this.updateInfiniteContainerHeight();
    },

    handleInfiniteLoad: function handleInfiniteLoad() {
        var elemLength = this.state.elements.length;
        var newElements = this.buildElements(elemLength, elemLength + this.props.infiniteSliceCount);
        var infiniteLoadBeginBottomOffset = newElements.length ? 200 : 0;
        this.setState({
            isInfiniteLoading: false,
            elements: this.state.elements.concat(newElements),
            infiniteLoadBeginBottomOffset: infiniteLoadBeginBottomOffset
        });
    },

    /**
     * Extract remote sorting info from current node metadata
     */
    remoteSortingInfo: function remoteSortingInfo() {
        var meta = this.props.node.getMetadata().get('paginationData');
        if (meta && meta.get('total') > 1 && meta.has('remote_order')) {
            var col = meta.get('currentOrderCol');
            var dir = meta.get('currentOrderDir');
            if (col && dir) {
                return {
                    remote: true,
                    attribute: col,
                    direction: dir
                };
            }
        }
        return null;
    },

    renderToolbar: function renderToolbar() {
        var _this7 = this;

        var rightButtons = [React.createElement(_materialUi.FontIcon, {
            key: 1,
            tooltip: 'Reload',
            className: "mdi mdi-reload" + (this.state.loading ? " rotating" : ""),
            onClick: this.reload
        })];
        var i = 2;
        if (this.props.sortKeys) {

            var sortingInfo = undefined,
                remoteSortingInfo = this.remoteSortingInfo();
            if (remoteSortingInfo) {
                sortingInfo = remoteSortingInfo;
            } else {
                sortingInfo = this.state ? this.state.sortingInfo : null;
            }
            rightButtons.push(React.createElement(_SortColumns2['default'], {
                key: i,
                displayMode: 'menu',
                tableKeys: this.props.sortKeys,
                columnClicked: this.onColumnSort,
                sortingInfo: sortingInfo
            }));
            i++;
        }
        if (this.props.additionalActions) {
            rightButtons.push(this.props.additionalActions);
        }

        var leftToolbar = undefined,
            paginator = undefined;
        if (this.props.node.getMetadata().get("paginationData") && this.props.node.getMetadata().get("paginationData").get('total') > 1) {
            paginator = React.createElement(_ListPaginator2['default'], { dataModel: this.dm, node: this.props.node });
        }

        if (this.props.listTitle) {
            leftToolbar = React.createElement(
                _materialUi.ToolbarGroup,
                { key: 0, float: 'left' },
                React.createElement(
                    'div',
                    { className: 'list-title' },
                    this.props.listTitle
                )
            );
        }

        if (this.props.searchResultData) {

            leftToolbar = React.createElement(
                _materialUi.ToolbarGroup,
                { key: 0, float: 'left' },
                React.createElement(
                    'div',
                    { style: { fontSize: 15, fontWeight: 500, color: '#9e9e9e' } },
                    this.context.getMessage('react.3').replace('%s', this.props.searchResultData.term)
                )
            );
            rightButtons = React.createElement(_materialUi.RaisedButton, { key: 1, label: this.context.getMessage('react.4'), primary: true, onTouchTap: this.props.searchResultData.toggleState, style: { marginRight: -10 } });
        } else if (this.actionsCache.multiple.size || this.props.multipleActions) {
            var bulkLabel = this.context.getMessage('react.2');
            var hiddenStyle = {
                transform: 'translateX(-80px)'
            };
            var cbStyle = _extends({ width: 24 }, hiddenStyle);
            var buttonStyle = _extends({}, hiddenStyle);
            if (this.state.showSelector) {
                cbStyle = { width: 24, transform: 'translateX(-12px)' };
                buttonStyle = { transform: 'translateX(-40px)' };
            }
            if (this.state.selection && this.state.showSelector) {
                bulkLabel += " (" + this.state.selection.size + ")";
            }
            leftToolbar = React.createElement(
                _materialUi.ToolbarGroup,
                { key: 0, float: 'left', className: 'hide-on-vertical-layout' },
                React.createElement(_materialUi.Checkbox, { ref: 'all_selector', onClick: this.selectAll, style: cbStyle }),
                React.createElement(_materialUi.FlatButton, { label: bulkLabel, onClick: this.toggleSelector, style: buttonStyle })
            );

            if (this.state.showSelector) {
                (function () {
                    rightButtons = [];
                    var index = 0;
                    var actions = _this7.props.multipleActions || _this7.actionsCache.multiple;
                    actions.forEach((function (a) {
                        rightButtons.push(React.createElement(_materialUi.RaisedButton, {
                            key: index,
                            label: a.options.text,
                            'data-action': a.options.name,
                            onClick: this.applyMultipleAction,
                            primary: true }));
                    }).bind(_this7));
                    rightButtons = React.createElement(
                        'span',
                        null,
                        rightButtons
                    );
                })();
            }
        }

        return React.createElement(
            _materialUi.Toolbar,
            { style: this.props.toolbarStyle },
            leftToolbar,
            React.createElement(
                _materialUi.ToolbarGroup,
                { key: 1, float: 'right' },
                paginator,
                rightButtons
            )
        );
    },

    render: function render() {
        var _this8 = this;

        var containerClasses = "material-list vertical-layout layout-fill";
        if (this.props.className) {
            containerClasses += " " + this.props.className;
        }
        if (this.state.showSelector) {
            containerClasses += " list-show-selectors";
        }
        if (this.props.tableKeys) {
            containerClasses += " table-mode";
        }
        var toolbar = undefined;
        if (this.props.tableKeys) {
            var tableKeys = undefined;
            if (this.props.defaultGroupBy) {
                tableKeys = LangUtils.deepCopy(this.props.tableKeys);
                delete tableKeys[this.props.defaultGroupBy];
            } else {
                tableKeys = this.props.tableKeys;
            }
            var sortingInfo = undefined,
                remoteSortingInfo = this.remoteSortingInfo();
            if (remoteSortingInfo) {
                sortingInfo = remoteSortingInfo;
            } else {
                sortingInfo = this.state ? this.state.sortingInfo : null;
            }
            toolbar = React.createElement(_TableListHeader2['default'], {
                tableKeys: tableKeys,
                loading: this.state.loading,
                reload: this.reload,
                ref: 'loading_indicator',
                dm: this.props.dataModel,
                node: this.props.node,
                additionalActions: this.props.additionalActions,
                onHeaderClick: this.onColumnSort,
                sortingInfo: sortingInfo
            });
        } else {
            toolbar = this.props.customToolbar ? this.props.customToolbar : !this.props.hideToolbar ? this.renderToolbar() : null;
        }

        var inlineEditor = undefined;
        if (this.state.inlineEditionForNode) {
            inlineEditor = React.createElement(_InlineEditor2['default'], {
                detached: true,
                node: this.state.inlineEditionForNode,
                callback: this.state.inlineEditionCallback,
                onClose: function () {
                    _this8.setState({ inlineEditionForNode: null });
                }
            });
        }

        var emptyState = undefined;
        var _props = this.props;
        var emptyStateProps = _props.emptyStateProps;
        var node = _props.node;

        if (emptyStateProps && this.props.node.isLoaded() && !this.props.node.isLoading() && (!this.state.elements.length || this.state.elements.length === 1 && this.state.elements[0].parent)) {

            var actionProps = {};
            if (this.state.elements.length === 1 && this.state.elements[0].parent) {
                (function () {
                    var parentNode = _this8.state.elements[0].node;
                    actionProps = {
                        actionLabelId: 'react.1',
                        actionIconClassName: SimpleList.PARENT_FOLDER_ICON,
                        actionCallback: function actionCallback(e) {
                            if (_this8.props.entryHandleClicks) {
                                _this8.props.entryHandleClicks(parentNode, SimpleList.CLICK_TYPE_DOUBLE, e);
                            }
                        }
                    };
                })();
            }
            emptyState = React.createElement(_viewsEmptyStateView2['default'], _extends({}, emptyStateProps, actionProps));
        } else if (emptyStateProps && emptyStateProps.checkEmptyState && emptyStateProps.checkEmptyState(this.props.node)) {

            emptyState = React.createElement(_viewsEmptyStateView2['default'], emptyStateProps);
        }

        var elements = this.buildElementsFromNodeEntries(this.state.elements, this.state.showSelector);

        return React.createElement(
            'div',
            { className: containerClasses, onContextMenu: this.contextMenuResponder, tabIndex: '0', onKeyDown: this.onKeyDown, style: this.props.style },
            toolbar,
            inlineEditor,
            React.createElement(
                'div',
                { className: this.props.heightAutoWithMax ? "infinite-parent-smooth-height" : emptyState ? "layout-fill vertical_layout" : "layout-fill", ref: 'infiniteParent' },
                !emptyState && !this.props.verticalScroller && React.createElement(
                    Infinite,
                    {
                        elementHeight: this.state.elementHeight ? this.state.elementHeight : this.props.elementHeight,
                        containerHeight: this.state.containerHeight ? this.state.containerHeight : 1,
                        infiniteLoadBeginEdgeOffset: this.state.infiniteLoadBeginBottomOffset,
                        onInfiniteLoad: this.handleInfiniteLoad,
                        handleScroll: this.onScroll,
                        ref: 'infinite'
                    },
                    elements
                ),
                !emptyState && this.props.verticalScroller && React.createElement(
                    _reactScrollbar2['default'],
                    {
                        speed: 0.8,
                        horizontalScroll: false,
                        style: { height: this.state.containerHeight },
                        verticalScrollbarStyle: { borderRadius: 10, width: 6 },
                        verticalContainerStyle: { width: 8 }
                    },
                    React.createElement(
                        'div',
                        null,
                        elements
                    )
                ),
                emptyState
            )
        );
    }

});

exports['default'] = SimpleList;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../util/MessagesConsumerMixin":58,"../views/EmptyStateView":59,"../views/SimpleReactActionBar":61,"./ConfigurableListEntry":19,"./InlineEditor":20,"./ListEntry":21,"./ListPaginator":23,"./SortColumns":27,"./TableListEntry":29,"./TableListHeader":30,"material-ui":"material-ui","pydio/model/data-model":"pydio/model/data-model","pydio/util/dom":"pydio/util/dom","pydio/util/lang":"pydio/util/lang","pydio/util/periodical-executer":"pydio/util/periodical-executer","react":"react","react-infinite":"react-infinite","react-scrollbar":1}],27:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _menuIconButtonMenu = require('../menu/IconButtonMenu');

var _menuIconButtonMenu2 = _interopRequireDefault(_menuIconButtonMenu);

var React = require('react');
var Pydio = require('pydio');

var _Pydio$requireLib = Pydio.requireLib('boot');

var PydioContextConsumer = _Pydio$requireLib.PydioContextConsumer;

var _require = require('material-ui-legacy');

var ToolbarGroup = _require.ToolbarGroup;

var SortColumns = React.createClass({
    displayName: 'SortColumns',

    propTypes: {
        tableKeys: React.PropTypes.object.isRequired,
        columnClicked: React.PropTypes.func,
        sortingInfo: React.PropTypes.object,
        displayMode: React.PropTypes.string
    },

    onMenuClicked: function onMenuClicked(object) {
        this.props.columnClicked(object.payload);
    },

    onHeaderClick: function onHeaderClick(key, callback) {
        var data = this.props.tableKeys[key];
        if (data && data['sortType'] && this.props.columnClicked) {
            data['name'] = key;
            this.props.columnClicked(data, callback);
        }
    },

    getColumnsItems: function getColumnsItems(displayMode) {
        var _this = this;

        var controller = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        var items = [];
        var _callback = function _callback() {
            if (controller) {
                controller.notify('actions_refreshed');
            }
        };

        var _loop = function (key) {
            if (!_this.props.tableKeys.hasOwnProperty(key)) return 'continue';
            var data = _this.props.tableKeys[key];
            var style = data['width'] ? { width: data['width'] } : null;
            var icon = undefined;
            var className = 'cell header_cell cell-' + key;
            if (data['sortType']) {
                className += ' sortable';
                if (_this.props.sortingInfo && (_this.props.sortingInfo.attribute === key || _this.props.sortingInfo.attribute === data['sortAttribute'] || _this.props.sortingInfo.attribute === data['remoteSortAttribute'])) {
                    icon = _this.props.sortingInfo.direction === 'asc' ? 'mdi mdi-arrow-up' : 'mdi mdi-arrow-down';
                    className += ' active-sort-' + _this.props.sortingInfo.direction;
                }
            }
            if (displayMode === 'menu') {
                data['name'] = key;
                items.push({
                    payload: data,
                    text: data['label'],
                    iconClassName: icon
                });
            } else if (displayMode === 'menu_data') {
                items.push({
                    name: data['label'],
                    callback: function callback() {
                        _this.onHeaderClick(key, _callback);
                    },
                    icon_class: icon || '__INSET__'
                });
            } else {
                items.push(React.createElement(
                    'span',
                    {
                        key: key,
                        className: className,
                        style: style,
                        onClick: function () {
                            _this.onHeaderClick(key, _callback);
                        }
                    },
                    data['label']
                ));
            }
        };

        for (var key in this.props.tableKeys) {
            var _ret = _loop(key);

            if (_ret === 'continue') continue;
        }
        return items;
    },

    buildSortingMenuItems: function buildSortingMenuItems(controller) {
        return this.getColumnsItems('menu_data', controller);
    },

    componentDidMount: function componentDidMount() {

        var sortAction = new Action({
            name: 'sort_action',
            icon_class: 'mdi mdi-sort-descending',
            text_id: 450,
            title_id: 450,
            text: this.props.getMessage(450),
            title: this.props.getMessage(450),
            hasAccessKey: false,
            subMenu: true,
            subMenuUpdateImage: true
        }, {
            selection: false,
            dir: true,
            actionBar: true,
            actionBarGroup: 'display_toolbar',
            contextMenu: false,
            infoPanel: false
        }, {}, {}, {
            dynamicBuilder: this.buildSortingMenuItems
        });
        var buttons = new Map();
        buttons.set('sort_action', sortAction);
        this.props.pydio.getController().updateGuiActions(buttons);
    },

    componentWillUnmount: function componentWillUnmount() {
        this.props.pydio.getController().deleteFromGuiActions('sort_action');
    },

    render: function render() {
        if (this.props.displayMode === 'menu') {
            return React.createElement(_menuIconButtonMenu2['default'], { buttonTitle: 'Sort by...', buttonClassName: 'mdi mdi-sort-descending', menuItems: this.getColumnsItems('menu', this.props.pydio.getController()), onMenuClicked: this.onMenuClicked });
        } else {
            return React.createElement(
                ToolbarGroup,
                { float: 'left' },
                this.getColumnsItems('header', this.props.pydio.getController())
            );
        }
    }
});

exports['default'] = SortColumns = PydioContextConsumer(SortColumns);
exports['default'] = SortColumns;
module.exports = exports['default'];

},{"../menu/IconButtonMenu":33,"material-ui-legacy":"material-ui-legacy","pydio":"pydio","react":"react"}],28:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

"use strict";

exports.__esModule = true;

var _utilDND = require('../util/DND');

/***************************/
/* REACT DND SORTABLE LIST
 /**************************/
/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
var sortableItemSource = {
    beginDrag: function beginDrag(props) {
        // Return the data describing the dragged item
        return { id: props.id };
    },
    endDrag: function endDrag(props) {
        props.endSwitching();
    }
};

var sortableItemTarget = {

    hover: function hover(props, monitor) {
        var draggedId = monitor.getItem().id;
        if (draggedId !== props.id) {
            props.switchItems(draggedId, props.id);
        }
    }

};

var sortableItem = React.createClass({
    displayName: "sortableItem",

    propTypes: {
        connectDragSource: React.PropTypes.func.isRequired,
        connectDropTarget: React.PropTypes.func.isRequired,
        isDragging: React.PropTypes.bool.isRequired,
        id: React.PropTypes.any.isRequired,
        label: React.PropTypes.string.isRequired,
        switchItems: React.PropTypes.func.isRequired,
        removable: React.PropTypes.bool,
        onRemove: React.PropTypes.func
    },

    removeClicked: function removeClicked() {
        this.props.onRemove(this.props.id);
    },

    render: function render() {
        // Your component receives its own props as usual
        var id = this.props.id;

        // These two props are injected by React DnD,
        // as defined by your `collect` function above:
        var isDragging = this.props.isDragging;
        var connectDragSource = this.props.connectDragSource;
        var connectDropTarget = this.props.connectDropTarget;

        var remove;
        if (this.props.removable) {
            remove = React.createElement("span", { className: "button mdi mdi-close", onClick: this.removeClicked });
        }
        return React.createElement(
            ReactMUI.Paper,
            {
                ref: function (instance) {
                    connectDropTarget(ReactDOM.findDOMNode(instance));
                    connectDragSource(ReactDOM.findDOMNode(instance));
                },
                zDepth: 1,
                style: { opacity: isDragging ? 0 : 1 }
            },
            React.createElement(
                "div",
                { className: this.props.className },
                this.props.label,
                remove
            )
        );
    }
});

var NonDraggableListItem = React.createClass({
    displayName: "NonDraggableListItem",

    render: function render() {
        var remove;
        if (this.props.removable) {
            remove = React.createElement("span", { className: "button mdi mdi-close", onClick: this.removeClicked });
        }
        return React.createElement(
            ReactMUI.Paper,
            { zDepth: 1 },
            React.createElement(
                "div",
                { className: this.props.className },
                this.props.label,
                remove
            )
        );
    }
});

var DraggableListItem;
if (window.ReactDND) {
    DraggableListItem = ReactDND.flow(ReactDND.DragSource(_utilDND.Types.SORTABLE_LIST_ITEM, sortableItemSource, _utilDND.collect), ReactDND.DropTarget(_utilDND.Types.SORTABLE_LIST_ITEM, sortableItemTarget, _utilDND.collectDrop))(sortableItem);
} else {
    DraggableListItem = NonDraggableListItem;
}

var SortableList = React.createClass({
    displayName: "SortableList",

    propTypes: {
        values: React.PropTypes.array.isRequired,
        onOrderUpdated: React.PropTypes.func,
        removable: React.PropTypes.bool,
        onRemove: React.PropTypes.func,
        className: React.PropTypes.string,
        itemClassName: React.PropTypes.string
    },

    getInitialState: function getInitialState() {
        return { values: this.props.values };
    },
    componentWillReceiveProps: function componentWillReceiveProps(props) {
        this.setState({ values: props.values, switchData: null });
    },

    findItemIndex: function findItemIndex(itemId, data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i]['payload'] == itemId) {
                return i;
            }
        }
    },

    switchItems: function switchItems(oldId, newId) {
        var oldIndex = this.findItemIndex(oldId, this.state.values);
        var oldItem = this.state.values[oldIndex];
        var newIndex = this.findItemIndex(newId, this.state.values);
        var newItem = this.state.values[newIndex];

        var currentValues = this.state.values.slice();
        currentValues[oldIndex] = newItem;
        currentValues[newIndex] = oldItem;

        // Check that it did not come back to original state
        var oldPrevious = this.findItemIndex(oldId, this.props.values);
        var newPrevious = this.findItemIndex(newId, this.props.values);
        if (oldPrevious == newIndex && newPrevious == oldIndex) {
            this.setState({ values: currentValues, switchData: null });
            //console.log("no more moves");
        } else {
                this.setState({ values: currentValues, switchData: { oldId: oldId, newId: newId } });
                //console.log({oldId:oldIndex, newId:newIndex});
            }
    },

    endSwitching: function endSwitching() {
        if (this.state.switchData) {
            // Check that it did not come back to original state
            if (this.props.onOrderUpdated) {
                this.props.onOrderUpdated(this.state.switchData.oldId, this.state.switchData.newId, this.state.values);
            }
        }
        this.setState({ switchData: null });
    },

    render: function render() {
        var switchItems = this.switchItems;
        return React.createElement(
            "div",
            { className: this.props.className },
            this.state.values.map((function (item) {
                return React.createElement(DraggableListItem, {
                    id: item.payload,
                    key: item.payload,
                    label: item.text,
                    switchItems: switchItems,
                    endSwitching: this.endSwitching,
                    removable: this.props.removable,
                    onRemove: this.props.onRemove,
                    className: this.props.itemClassName
                });
            }).bind(this))
        );
    }
});

exports["default"] = SortableList;
module.exports = exports["default"];

},{"../util/DND":57}],29:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ListEntryNodeListenerMixin = require('./ListEntryNodeListenerMixin');

var _ListEntryNodeListenerMixin2 = _interopRequireDefault(_ListEntryNodeListenerMixin);

var _ListEntry = require('./ListEntry');

var _InlineEditor = require('./InlineEditor');

var _InlineEditor2 = _interopRequireDefault(_InlineEditor);

var _require$requireLib = require('pydio').requireLib('boot');

var moment = _require$requireLib.moment;

/**
 * Specific list entry rendered as a table row. Not a real table, CSS used.
 */
exports['default'] = React.createClass({
    displayName: 'TableListEntry',

    mixins: [_ListEntryNodeListenerMixin2['default']],

    propTypes: {
        node: React.PropTypes.instanceOf(AjxpNode),
        tableKeys: React.PropTypes.object.isRequired,
        renderActions: React.PropTypes.func
        // See also ListEntry nodes
    },

    render: function render() {
        var _this = this;

        var actions = this.props.actions;
        if (this.props.renderActions) {
            actions = this.props.renderActions(this.props.node);
        }

        var cells = [];
        var firstKey = true;
        var meta = this.props.node.getMetadata();
        for (var key in this.props.tableKeys) {
            if (!this.props.tableKeys.hasOwnProperty(key)) {
                continue;
            }

            var data = this.props.tableKeys[key];
            var style = data['width'] ? { width: data['width'] } : null;
            var value = undefined,
                rawValue = undefined;
            if (data.renderCell) {
                data['name'] = key;
                value = data.renderCell(this.props.node, data);
            } else if (key === 'ajxp_modiftime') {
                var mDate = moment(parseFloat(meta.get('ajxp_modiftime')) * 1000);
                var dateString = mDate.calendar();
                if (dateString.indexOf('/') > -1) {
                    dateString = mDate.fromNow();
                }
                value = dateString;
            } else {
                value = meta.get(key);
            }
            rawValue = meta.get(key);
            var inlineEditor = undefined;
            if (this.state && this.state.inlineEdition && firstKey) {
                inlineEditor = React.createElement(_InlineEditor2['default'], {
                    node: this.props.node,
                    onClose: function () {
                        _this.setState({ inlineEdition: false });
                    },
                    callback: this.state.inlineEditionCallback
                });
                var _style = this.props.style || {};
                _style.position = 'relative';
                this.props.style = _style;
            }
            cells.push(React.createElement(
                'span',
                { key: key, className: 'cell cell-' + key, title: rawValue, style: style, 'data-label': data['label'] },
                inlineEditor,
                value
            ));
            firstKey = false;
        }

        return React.createElement(_ListEntry.DragDropListEntry, _extends({}, this.props, {
            iconCell: null,
            firstLine: cells,
            actions: actions
        }));
    }

});
module.exports = exports['default'];

},{"./InlineEditor":20,"./ListEntry":21,"./ListEntryNodeListenerMixin":22,"pydio":"pydio"}],30:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilMessagesConsumerMixin = require('../util/MessagesConsumerMixin');

var _utilMessagesConsumerMixin2 = _interopRequireDefault(_utilMessagesConsumerMixin);

var _SortColumns = require('./SortColumns');

var _SortColumns2 = _interopRequireDefault(_SortColumns);

var _ListPaginator = require('./ListPaginator');

var _ListPaginator2 = _interopRequireDefault(_ListPaginator);

/**
 * Specific header for Table layout, reading metadata from node and using keys
 */
exports['default'] = React.createClass({
    displayName: 'TableListHeader',

    mixins: [_utilMessagesConsumerMixin2['default']],

    propTypes: {
        tableKeys: React.PropTypes.object.isRequired,
        loading: React.PropTypes.bool,
        reload: React.PropTypes.func,
        dm: React.PropTypes.instanceOf(PydioDataModel),
        node: React.PropTypes.instanceOf(AjxpNode),
        onHeaderClick: React.PropTypes.func,
        sortingInfo: React.PropTypes.object
    },

    render: function render() {
        var headers = undefined,
            paginator = undefined;
        if (this.props.node.getMetadata().get("paginationData") && this.props.node.getMetadata().get("paginationData").get('total') > 1) {
            paginator = React.createElement(_ListPaginator2['default'], { dataModel: this.props.dm, node: this.props.node });
        }
        return React.createElement(
            ReactMUI.Toolbar,
            { className: 'toolbarTableHeader' },
            React.createElement(_SortColumns2['default'], _extends({ displayMode: 'tableHeader' }, this.props, { columnClicked: this.props.onHeaderClick })),
            React.createElement(
                ReactMUI.ToolbarGroup,
                { float: 'right' },
                paginator,
                React.createElement(ReactMUI.FontIcon, {
                    key: 1,
                    tooltip: this.context.getMessage('149', ''),
                    className: "icon-refresh" + (this.props.loading ? " rotating" : ""),
                    onClick: this.props.reload
                }),
                this.props.additionalActions
            )
        );
    }
});
module.exports = exports['default'];

},{"../util/MessagesConsumerMixin":58,"./ListPaginator":23,"./SortColumns":27}],31:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _MenuItemsConsumer = require('./MenuItemsConsumer');

var _MenuItemsConsumer2 = _interopRequireDefault(_MenuItemsConsumer);

var React = require('react');
var ReactDOM = require('react-dom');

var _require = require('material-ui');

var Menu = _require.Menu;

var Controller = require('pydio/model/controller');

var ButtonMenu = React.createClass({
    displayName: 'ButtonMenu',

    propTypes: {
        buttonTitle: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]).isRequired,
        menuItems: React.PropTypes.array.isRequired,
        className: React.PropTypes.string,
        raised: React.PropTypes.bool,
        direction: React.PropTypes.oneOf(['left', 'right'])
    },

    componentDidMount: function componentDidMount() {
        var _this = this;

        if (this.props.openOnEvent) {
            this.props.pydio.observe(this.props.openOnEvent, function () {
                _this.showMenu();
            });
        }
    },

    getInitialState: function getInitialState() {
        return { showMenu: false };
    },

    showMenu: function showMenu(event) {
        var anchor = undefined;
        if (event) {
            anchor = event.currentTarget;
        } else {
            anchor = this._buttonDOM;
        }
        this.setState({
            showMenu: true,
            anchor: anchor
        });
    },

    menuClicked: function menuClicked(event, index, object) {
        //object.payload();
        this.setState({ showMenu: false });
    },

    render: function render() {
        var _this2 = this;

        var label = React.createElement(
            'span',
            null,
            this.props.buttonTitle,
            ' ',
            React.createElement('span', { className: 'icon-caret-down' })
        );
        var button = undefined;
        var props = {
            primary: this.props.primary,
            secondary: this.props.secondary,
            disabled: this.props.disabeld,
            label: label,
            onTouchTap: this.showMenu,
            onClick: function onClick(e) {
                return e.stopPropagation();
            }
        };
        var menuItems = this.props.menuItems;
        var _state = this.state;
        var showMenu = _state.showMenu;
        var anchor = _state.anchor;

        if (menuItems.length) {
            if (this.props.raised) {
                button = React.createElement(MaterialUI.RaisedButton, _extends({}, props, { style: this.props.buttonStyle, labelStyle: this.props.buttonLabelStyle, ref: function (b) {
                        _this2._buttonDOM = ReactDOM.findDOMNode(b);
                    } }));
            } else {
                button = React.createElement(MaterialUI.FlatButton, _extends({}, props, { style: this.props.buttonStyle, labelStyle: this.props.buttonLabelStyle, ref: function (b) {
                        _this2._buttonDOM = ReactDOM.findDOMNode(b);
                    } }));
            }
        }
        return React.createElement(
            'span',
            { id: this.props.id, className: this.props.className },
            button,
            React.createElement(
                MaterialUI.Popover,
                {
                    className: 'menuPopover',
                    open: showMenu,
                    anchorEl: anchor,
                    anchorOrigin: { horizontal: this.props.direction || 'left', vertical: 'bottom' },
                    targetOrigin: { horizontal: this.props.direction || 'left', vertical: 'top' },
                    onRequestClose: function () {
                        _this2.setState({ showMenu: false });
                    },
                    style: { marginTop: 1 },
                    useLayerForClickAway: false
                },
                _Utils2['default'].itemsToMenu(menuItems, this.menuClicked)
            )
        );
    }

});

exports['default'] = _MenuItemsConsumer2['default'](ButtonMenu);
module.exports = exports['default'];

},{"./MenuItemsConsumer":35,"./Utils":38,"material-ui":"material-ui","pydio/model/controller":"pydio/model/controller","react":"react","react-dom":"react-dom"}],32:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _pydioModelContextMenu = require('pydio/model/context-menu');

var _pydioModelContextMenu2 = _interopRequireDefault(_pydioModelContextMenu);

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _PopupMenu = require('./PopupMenu');

var _PopupMenu2 = _interopRequireDefault(_PopupMenu);

var _require = require('react');

var Component = _require.Component;

var dims = {
    MENU_ITEM_HEIGHT: 32, //48 if not display:compact
    MENU_SEP_HEIGHT: 16,
    MENU_VERTICAL_PADDING: 8,
    MENU_WIDTH: 250,
    OFFSET_VERTICAL: 8,
    OFFSET_HORIZONTAL: 8
};

var ContextMenu = (function (_Component) {
    _inherits(ContextMenu, _Component);

    function ContextMenu() {
        _classCallCheck(this, ContextMenu);

        _Component.apply(this, arguments);
    }

    ContextMenu.prototype.modelOpen = function modelOpen(node) {
        var position = _pydioModelContextMenu2['default'].getInstance().getPosition();
        var items = undefined;
        if (node) {
            var dm = pydio.getContextHolder();
            if (dm.getSelectedNodes().indexOf(node) !== -1) {
                this.openMenu('selectionContext', position);
            } else {
                pydio.observeOnce("actions_refreshed", (function (dataModel) {
                    this.openMenu('selectionContext', position);
                }).bind(this));
                dm.setSelectedNodes([node]);
            }
        } else {
            this.openMenu('genericContext', position);
        }
    };

    ContextMenu.prototype.openMenu = function openMenu(context, position) {
        var items = this.computeMenuItems(context);
        this._items = items;
        var mobile = this.props.pydio.UI.MOBILE_EXTENSIONS;
        if (!mobile) {
            position = this.computeVisiblePosition(position, items);
            this.refs['menu'].showMenu({
                top: position.y,
                left: position.x
            }, items);
        } else {
            this.refs['menu'].showMenu({
                bottom: 0,
                left: 0,
                right: 0,
                height: 200,
                zIndex: 10000,
                overflowY: 'auto'
            }, items);
        }
    };

    ContextMenu.prototype.computeMenuItems = function computeMenuItems(context) {
        var actions = this.props.pydio.Controller.getContextActions(context, ['inline', 'info_panel', 'info_panel_share']);
        return _Utils2['default'].pydioActionsToItems(actions);
    };

    ContextMenu.prototype.computeVisiblePosition = function computeVisiblePosition(position, items) {
        var menuHeight = dims.MENU_VERTICAL_PADDING * 2;
        items.map(function (it) {
            if (it.separator) menuHeight += dims.MENU_SEP_HEIGHT;else menuHeight += dims.MENU_ITEM_HEIGHT;
        });
        var menuWidth = dims.MENU_WIDTH;
        var windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var windowH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if (position.x + menuWidth > windowW) {
            position.x = Math.max(position.x - menuWidth, 10) - dims.OFFSET_HORIZONTAL;
        } else {
            position.x += dims.OFFSET_HORIZONTAL;
        }
        if (position.y + menuHeight > windowH) {
            position.y = Math.max(position.y - menuHeight, 10) - dims.OFFSET_VERTICAL;
        } else {
            position.y += dims.OFFSET_VERTICAL;
        }
        return position;
    };

    ContextMenu.prototype.componentDidMount = function componentDidMount() {
        this._modelOpen = this.modelOpen.bind(this);
        _pydioModelContextMenu2['default'].getInstance().observe("open", this._modelOpen);
    };

    ContextMenu.prototype.componentWillUnmount = function componentWillUnmount() {
        _pydioModelContextMenu2['default'].getInstance().stopObserving("open", this._modelOpen);
    };

    ContextMenu.prototype.render = function render() {
        var mobile = this.props.pydio.UI.MOBILE_EXTENSIONS;
        return React.createElement(_PopupMenu2['default'], {
            ref: 'menu',
            menuItems: this._items || [],
            onMenuClosed: this.props.onMenuClosed,
            menuProps: mobile ? { width: 600, autoWidth: false, desktop: false } : {},
            zDepth: mobile ? 2 : 1
        });
    };

    return ContextMenu;
})(Component);

exports['default'] = ContextMenu;
module.exports = exports['default'];

},{"./PopupMenu":36,"./Utils":38,"pydio/model/context-menu":"pydio/model/context-menu","react":"react"}],33:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _MenuItemsConsumer = require('./MenuItemsConsumer');

var _MenuItemsConsumer2 = _interopRequireDefault(_MenuItemsConsumer);

var React = require('react');

var _require = require('material-ui');

var IconButton = _require.IconButton;
var Popover = _require.Popover;

var IconButtonMenu = (function (_React$Component) {
    _inherits(IconButtonMenu, _React$Component);

    function IconButtonMenu(props, context) {
        _classCallCheck(this, IconButtonMenu);

        _React$Component.call(this, props, context);
        this.state = { showMenu: false };
    }

    IconButtonMenu.prototype.showMenu = function showMenu(event) {
        this.setState({
            showMenu: true,
            anchor: event.currentTarget
        });
    };

    IconButtonMenu.prototype.closeMenu = function closeMenu(event, index, menuItem) {
        this.setState({ showMenu: false });
    };

    IconButtonMenu.prototype.render = function render() {
        var _this = this;

        return React.createElement(
            'span',
            { className: "toolbars-button-menu " + (this.props.className ? this.props.className : '') },
            React.createElement(IconButton, {
                ref: 'menuButton',
                tooltip: this.props.buttonTitle,
                iconClassName: this.props.buttonClassName,
                onTouchTap: this.showMenu.bind(this),
                iconStyle: this.props.buttonStyle
            }),
            React.createElement(
                Popover,
                {
                    open: this.state.showMenu,
                    anchorEl: this.state.anchor,
                    anchorOrigin: { horizontal: this.props.popoverDirection || 'right', vertical: this.props.popoverTargetPosition || 'bottom' },
                    targetOrigin: { horizontal: this.props.popoverDirection || 'right', vertical: 'top' },
                    onRequestClose: function () {
                        _this.setState({ showMenu: false });
                    },
                    useLayerForClickAway: false
                },
                _Utils2['default'].itemsToMenu(this.props.menuItems, this.closeMenu.bind(this), false, this.props.menuProps || undefined)
            )
        );
    };

    return IconButtonMenu;
})(React.Component);

IconButtonMenu.propTypes = {
    buttonTitle: React.PropTypes.string.isRequired,
    buttonClassName: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    popoverDirection: React.PropTypes.oneOf(['right', 'left']),
    popoverPosition: React.PropTypes.oneOf(['top', 'bottom']),
    menuProps: React.PropTypes.object,
    menuItems: React.PropTypes.array.isRequired
};

exports['default'] = _MenuItemsConsumer2['default'](IconButtonMenu);
module.exports = exports['default'];

},{"./MenuItemsConsumer":35,"./Utils":38,"material-ui":"material-ui","react":"react"}],34:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require('material-ui');

var IconButton = _require.IconButton;
var Popover = _require.Popover;

var IconButtonPopover = (function (_React$Component) {
    _inherits(IconButtonPopover, _React$Component);

    function IconButtonPopover(props, context) {
        _classCallCheck(this, IconButtonPopover);

        _React$Component.call(this, props, context);
        this.state = { showPopover: false };
    }

    IconButtonPopover.prototype.showPopover = function showPopover(event) {
        this.setState({
            showPopover: true,
            anchor: event.currentTarget
        });
    };

    IconButtonPopover.prototype.render = function render() {
        var _this = this;

        return React.createElement(
            'span',
            { className: "toolbars-button-menu " + (this.props.className ? this.props.className : '') },
            React.createElement(IconButton, {
                ref: 'menuButton',
                tooltip: this.props.buttonTitle,
                iconClassName: this.props.buttonClassName,
                onTouchTap: this.showPopover.bind(this),
                iconStyle: this.props.buttonStyle
            }),
            React.createElement(
                Popover,
                {
                    open: this.state.showPopover,
                    anchorEl: this.state.anchor,
                    anchorOrigin: { horizontal: this.props.direction || 'right', vertical: 'bottom' },
                    targetOrigin: { horizontal: this.props.direction || 'right', vertical: 'top' },
                    onRequestClose: function () {
                        _this.setState({ showPopover: false });
                    },
                    useLayerForClickAway: false
                },
                this.props.popoverContent
            )
        );
    };

    return IconButtonPopover;
})(React.Component);

IconButtonPopover.propTypes = {
    buttonTitle: React.PropTypes.string.isRequired,
    buttonClassName: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    direction: React.PropTypes.oneOf(['right', 'left']),
    popoverContent: React.PropTypes.object.isRequired
};

exports['default'] = IconButtonPopover;
module.exports = exports['default'];

},{"material-ui":"material-ui","react":"react"}],35:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var React = require('react');
var Controller = require('pydio/model/controller');

exports['default'] = function (Component) {
    var Wrapped = (function (_React$Component) {
        _inherits(Wrapped, _React$Component);

        function Wrapped(props, context) {
            _classCallCheck(this, Wrapped);

            _React$Component.call(this, props, context);
            this.state = {
                menuItems: this.props.menuItems || []
            };
        }

        Wrapped.prototype.componentDidMount = function componentDidMount() {
            var _this = this;

            if (this.props.controller && !this.props.menuItems) {
                this._observer = function () {
                    var actions = _this.props.controller.getContextActions('genericContext', null, _this.props.toolbars);
                    var menuItems = _Utils2['default'].pydioActionsToItems(actions);
                    _this.setState({ menuItems: menuItems });
                };
                if (this.props.controller === this.props.pydio.Controller) {
                    this.props.pydio.observe("actions_refreshed", this._observer);
                } else {
                    this.props.controller.observe("actions_refreshed", this._observer);
                }
                this._observer();
            }
        };

        Wrapped.prototype.componentWillUnmount = function componentWillUnmount() {
            if (this._observer) {
                if (this.props.controller === this.props.pydio.Controller) {
                    this.props.pydio.stopObserving("actions_refreshed", this._observer);
                } else {
                    this.props.controller.stopObserving("actions_refreshed", this._observer);
                }
            }
        };

        Wrapped.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            if (nextProps.menuItems && nextProps.menuItems !== this.props.menuItems) {
                this.setState({ menuItems: nextProps.menuItems });
            }
        };

        Wrapped.prototype.render = function render() {
            return React.createElement(Component, _extends({}, this.props, { menuItems: this.state.menuItems }));
        };

        return Wrapped;
    })(React.Component);

    Wrapped.propTypes = {
        menuItems: React.PropTypes.array,
        toolbars: React.PropTypes.array,
        controller: React.PropTypes.instanceOf(Controller),
        pydio: React.PropTypes.instanceOf(Pydio)
    };

    return Wrapped;
};

module.exports = exports['default'];

},{"./Utils":38,"pydio/model/controller":"pydio/model/controller","react":"react"}],36:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var React = require('react');
var ReactDOM = require('react-dom');

var _require = require('material-ui');

var Menu = _require.Menu;
var Paper = _require.Paper;
exports['default'] = React.createClass({
    displayName: 'PopupMenu',

    propTypes: {
        menuItems: React.PropTypes.array.isRequired,
        onExternalClickCheckElements: React.PropTypes.func,
        className: React.PropTypes.string,
        style: React.PropTypes.object,
        onMenuClosed: React.PropTypes.func
    },

    getInitialState: function getInitialState() {
        return { showMenu: false, menuItems: this.props.menuItems };
    },
    showMenu: function showMenu() {
        var style = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
        var menuItems = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        this.setState({
            showMenu: true,
            style: style,
            menuItems: menuItems ? menuItems : this.state.menuItems
        });
    },
    hideMenu: function hideMenu(event) {
        if (!event) {
            this.setState({ showMenu: false });
            if (this.props.onMenuClosed) this.props.onMenuClosed();
            return;
        }
        // Firefox trigger a click event when you mouse up on contextmenu event
        if (typeof event !== 'undefined' && event.button === 2 && event.type !== 'contextmenu') {
            return;
        }
        var node = ReactDOM.findDOMNode(this.refs.menuContainer);
        if (node.contains(event.target) || node === event.target) {
            return;
        }

        this.setState({ showMenu: false });
        if (this.props.onMenuClosed) this.props.onMenuClosed();
    },
    componentDidMount: function componentDidMount() {
        this._observer = this.hideMenu;
    },
    componentWillUnmount: function componentWillUnmount() {
        document.removeEventListener('click', this._observer, false);
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (nextProps.menuItems) {
            this.setState({ menuItems: nextProps.menuItems });
        }
    },
    componentDidUpdate: function componentDidUpdate(prevProps, nextProps) {
        if (this.state.showMenu) {
            document.addEventListener('click', this._observer, false);
        } else {
            document.removeEventListener('click', this._observer, false);
        }
    },

    menuClicked: function menuClicked(event, index, menuItem) {
        this.hideMenu();
    },
    render: function render() {

        var style = this.state.style || {};
        style = _extends({}, style, { zIndex: 1000 });
        var menu = _Utils2['default'].itemsToMenu(this.state.menuItems, this.menuClicked, false, _extends({ desktop: true, display: 'right', width: 250 }, this.props.menuProps));
        if (this.state.showMenu) {
            return React.createElement(
                Paper,
                { zDepth: this.props.zDepth || 1, ref: 'menuContainer', className: 'menu-positioner', style: style },
                menu
            );
        } else {
            return null;
        }
    }

});
module.exports = exports['default'];

},{"./Utils":38,"material-ui":"material-ui","react":"react","react-dom":"react-dom"}],37:[function(require,module,exports){
(function (global){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _IconButtonMenu = require('./IconButtonMenu');

var _IconButtonMenu2 = _interopRequireDefault(_IconButtonMenu);

var _ButtonMenu = require('./ButtonMenu');

var _ButtonMenu2 = _interopRequireDefault(_ButtonMenu);

var _IconButtonPopover = require('./IconButtonPopover');

var _IconButtonPopover2 = _interopRequireDefault(_IconButtonPopover);

var _materialUi = require('material-ui');

exports['default'] = _react2['default'].createClass({
    displayName: 'Toolbar',

    propTypes: {
        toolbars: _react2['default'].PropTypes.array,
        groupOtherList: _react2['default'].PropTypes.array,
        renderingType: _react2['default'].PropTypes.string,
        controller: _react2['default'].PropTypes.instanceOf(Controller),
        toolbarStyle: _react2['default'].PropTypes.object,
        buttonStyle: _react2['default'].PropTypes.object,
        fabAction: _react2['default'].PropTypes.string,
        buttonMenuNoLabel: _react2['default'].PropTypes.bool
    },

    componentDidMount: function componentDidMount() {
        this._observer = (function () {
            if (!this.isMounted()) return;
            this.setState({
                groups: this.props.controller.getToolbarsActions(this.props.toolbars, this.props.groupOtherList)
            });
        }).bind(this);
        if (this.props.controller === pydio.Controller) {
            pydio.observe("actions_refreshed", this._observer);
        } else {
            this.props.controller.observe("actions_refreshed", this._observer);
        }
    },

    componentWillUnmount: function componentWillUnmount() {
        if (this.props.controller === pydio.Controller) {
            pydio.stopObserving("actions_refreshed", this._observer);
        } else {
            this.props.controller.stopObserving("actions_refreshed", this._observer);
        }
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (nextProps.toolbars !== this.props.toolbars) {
            this.setState({
                groups: this.props.controller.getToolbarsActions(nextProps.toolbars, nextProps.groupOtherList)
            });
        }
    },

    getInitialState: function getInitialState() {
        return {
            groups: this.props.controller.getToolbarsActions(this.props.toolbars, this.props.groupOtherList)
        };
    },

    getDefaultProps: function getDefaultProps() {
        return {
            controller: global.pydio.Controller,
            renderingType: 'button',
            groupOtherList: []
        };
    },

    render: function render() {
        var groups = this.state.groups;

        var actions = [];
        var _props = this.props;
        var toolbars = _props.toolbars;
        var renderingType = _props.renderingType;
        var groupOtherList = _props.groupOtherList;
        var buttonStyle = _props.buttonStyle;
        var tooltipPosition = _props.tooltipPosition;
        var controller = _props.controller;
        var fabAction = _props.fabAction;
        var toolbarStyle = _props.toolbarStyle;
        var buttonMenuNoLabel = _props.buttonMenuNoLabel;
        var buttonMenuPopoverDirection = _props.buttonMenuPopoverDirection;
        var flatButtonStyle = _props.flatButtonStyle;

        var allToolbars = [].concat(toolbars);
        if (groupOtherList.length) {
            allToolbars = allToolbars.concat(['MORE_ACTION']);
        }
        allToolbars.map(function (barName) {
            if (!groups.has(barName)) return;
            groups.get(barName).map(function (action) {
                if (action.deny) return;
                var menuItems = undefined,
                    popoverContent = undefined,
                    menuTitle = undefined,
                    menuIcon = undefined;
                var actionName = action.options.name;

                menuTitle = action.options.text;
                menuIcon = action.options.icon_class;

                if (barName === 'MORE_ACTION') {
                    (function () {
                        var subItems = action.subMenuItems.dynamicItems;
                        var items = [];
                        subItems.map(function (obj) {
                            if (obj.separator) {
                                items.push(obj);
                            } else if (obj.actionId && !obj.actionId.deny) {
                                items.push(obj.actionId.getMenuData());
                            }
                        });
                        menuItems = _Utils2['default'].pydioActionsToItems(items);
                    })();
                } else if (action.subMenuItems.staticItems) {
                    menuItems = _Utils2['default'].pydioActionsToItems(action.subMenuItems.staticItems);
                } else if (action.subMenuItems.dynamicBuilder) {
                    menuItems = _Utils2['default'].pydioActionsToItems(action.subMenuItems.dynamicBuilder(controller));
                } else if (action.subMenuItems.popoverContent) {
                    popoverContent = action.subMenuItems.popoverContent;
                } else {}
                var id = 'action-' + action.options.name;
                if (renderingType === 'button-icon') {
                    menuTitle = _react2['default'].createElement(
                        'span',
                        { className: 'button-icon' },
                        _react2['default'].createElement('span', { className: "button-icon-icon " + menuIcon }),
                        _react2['default'].createElement(
                            'span',
                            { className: 'button-icon-label' },
                            menuTitle
                        )
                    );
                }
                if (menuItems) {
                    if (renderingType === 'button' || renderingType === 'button-icon') {
                        actions.push(_react2['default'].createElement(_ButtonMenu2['default'], {
                            key: actionName,
                            className: id,
                            buttonTitle: buttonMenuNoLabel ? '' : menuTitle,
                            menuItems: menuItems,
                            buttonLabelStyle: buttonStyle,
                            direction: buttonMenuPopoverDirection
                        }));
                    } else {
                        actions.push(_react2['default'].createElement(_IconButtonMenu2['default'], {
                            key: actionName,
                            className: id,
                            onMenuClicked: function (object) {
                                object.payload();
                            },
                            buttonClassName: menuIcon,
                            buttonTitle: menuTitle,
                            menuItems: menuItems,
                            buttonStyle: buttonStyle,
                            popoverDirection: buttonMenuPopoverDirection
                        }));
                    }
                } else if (popoverContent) {
                    actions.push(_react2['default'].createElement(_IconButtonPopover2['default'], {
                        key: actionName,
                        className: id,
                        buttonClassName: menuIcon,
                        buttonTitle: menuTitle,
                        buttonStyle: buttonStyle,
                        popoverContent: popoverContent
                    }));
                } else {
                    var click = function click(synthEvent) {
                        action.apply();
                    };
                    if (fabAction && fabAction === actionName) {
                        actions.push(_react2['default'].createElement(_materialUi.FloatingActionButton, {
                            key: actionName,
                            onTouchTap: click,
                            iconClassName: menuIcon,
                            mini: true,
                            backgroundColor: toolbarStyle.backgroundColor,
                            style: { position: 'absolute', top: -20, left: 10 }
                        }));
                    } else if (renderingType === 'button-icon') {
                        actions.push(_react2['default'].createElement(ReactMUI.FlatButton, {
                            key: actionName,
                            className: id,
                            onTouchTap: click,
                            label: menuTitle,
                            labelStyle: buttonStyle
                        }));
                    } else if (renderingType === 'button') {
                        actions.push(_react2['default'].createElement(_materialUi.FlatButton, {
                            key: actionName,
                            className: id,
                            onTouchTap: click,
                            label: menuTitle,
                            labelStyle: buttonStyle,
                            style: flatButtonStyle
                        }));
                    } else {
                        actions.push(_react2['default'].createElement(_materialUi.IconButton, {
                            key: actionName,
                            iconClassName: menuIcon + ' ' + id,
                            iconStyle: buttonStyle,
                            onTouchTap: click,
                            tooltip: menuTitle,
                            tooltipPosition: tooltipPosition
                        }));
                    }
                }
            });
        });
        var cName = this.props.className ? this.props.className : '';
        cName += ' ' + 'toolbar';
        if (!actions.length) {
            cName += ' empty-toolbar';
        }
        var style = _extends({}, toolbarStyle);
        return _react2['default'].createElement(
            'div',
            { className: cName, style: style, id: this.props.id },
            actions
        );
    }

});
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./ButtonMenu":31,"./IconButtonMenu":33,"./IconButtonPopover":34,"./Utils":38,"material-ui":"material-ui","react":"react"}],38:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = require('material-ui');

var Divider = _require.Divider;
var Menu = _require.Menu;
var MenuItem = _require.MenuItem;
var FontIcon = _require.FontIcon;

function pydioActionsToItems() {
    var actions = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    var items = [];
    var lastIsSeparator = false;
    actions.map((function (action, index) {
        if (action.separator) {
            if (lastIsSeparator) return;
            items.push(action);
            lastIsSeparator = true;
            return;
        }
        lastIsSeparator = false;
        var label = action.raw_name ? action.raw_name : action.name;
        var iconClass = action.icon_class;
        var payload = undefined;
        if (action.subMenu) {
            var subItems = action.subMenuBeforeShow ? pydioActionsToItems(action.subMenuBeforeShow()) : action.subMenu;
            items.push({
                text: label,
                iconClassName: iconClass,
                subItems: subItems
            });
        } else {
            items.push({
                text: label,
                iconClassName: iconClass,
                payload: action.callback
            });
        }
    }).bind(this));
    if (lastIsSeparator) {
        items = items.slice(0, items.length - 1);
    }
    if (items.length && items[0] && items[0].separator) {
        items.shift();
    }
    return items;
}

function itemsToMenu(items, closeMenuCallback) {
    var subItemsOnly = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    var menuProps = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    menuProps = _extends({
        display: 'normal',
        width: 216,
        desktop: true,
        autoWidth: false
    }, menuProps);

    var menuItems = items.map(function (item, index) {

        if (item.separator) return React.createElement(Divider, { key: "divider" + index });

        var subItems = undefined,
            payload = undefined;
        if (item.subItems) {
            subItems = itemsToMenu(item.subItems, closeMenuCallback, true);
        } else if (item.payload) {
            payload = function () {
                item.payload();
                closeMenuCallback();
            };
        }

        var leftIcon = undefined,
            rightIcon = undefined;
        var iconClassName = item.iconClassName;var inset = false;
        if (iconClassName === '__INSET__') {
            iconClassName = '';
            inset = true;
        }

        if (menuProps.display === 'normal') {
            leftIcon = iconClassName ? React.createElement(FontIcon, { className: item.iconClassName + ' menu-icons', style: { fontSize: 16, padding: 5 } }) : null;
        } else if (menuProps.display === 'right') {
            rightIcon = iconClassName ? React.createElement(FontIcon, { className: item.iconClassName + ' menu-icons', style: { fontSize: 16, padding: 5 } }) : null;
        }
        rightIcon = subItems && subItems.length ? React.createElement(FontIcon, { className: 'mdi mdi-menu-right menu-icons' }) : rightIcon;

        return React.createElement(MenuItem, {
            key: item.text,
            primaryText: item.text,
            insetChildren: inset,
            leftIcon: leftIcon,
            rightIcon: rightIcon,
            onTouchTap: payload,
            menuItems: subItems
        });
    });

    if (subItemsOnly) {
        return menuItems;
    } else {
        return React.createElement(
            Menu,
            menuProps,
            menuItems
        );
    }
}

exports['default'] = { pydioActionsToItems: pydioActionsToItems, itemsToMenu: itemsToMenu };
module.exports = exports['default'];

},{"material-ui":"material-ui"}],39:[function(require,module,exports){
/*
 * Copyright 2007-2018 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _materialUiStyles = require('material-ui/styles');

var _pydioHttpPolicies = require('pydio/http/policies');

var _pydioHttpPolicies2 = _interopRequireDefault(_pydioHttpPolicies);

var _pydioHttpUsersApi = require('pydio/http/users-api');

var _pydioHttpRestApi = require('pydio/http/rest-api');

var _pydio2 = require('pydio');

var _pydio3 = _interopRequireDefault(_pydio2);

var _pydioHttpApi = require('pydio/http/api');

var _pydioHttpApi2 = _interopRequireDefault(_pydioHttpApi);

var _usersUsersCompleter = require('../users/UsersCompleter');

var _usersUsersCompleter2 = _interopRequireDefault(_usersUsersCompleter);

var ResourcePoliciesPanel = (function (_React$Component) {
    _inherits(ResourcePoliciesPanel, _React$Component);

    function ResourcePoliciesPanel(props) {
        _classCallCheck(this, ResourcePoliciesPanel);

        if (!props.subjectsDisabled) {
            props.subjectsDisabled = { 'READ': {}, 'WRITE': {} };
        }
        if (props.cellAcls) {
            Object.keys(props.cellAcls).map(function (k) {
                if (props.cellAcls[k].RoleId) {
                    props.subjectsDisabled['READ']["role:" + props.cellAcls[k].RoleId] = true;
                }
            });
        }
        _React$Component.call(this, props);
        this.state = {
            loading: true,
            policies: [],
            diffPolicies: { add: {}, remove: {} }
        };
    }

    ResourcePoliciesPanel.prototype.componentDidMount = function componentDidMount() {
        this.setState({ loading: true });
        this.reload();
    };

    ResourcePoliciesPanel.prototype.reload = function reload() {
        var _this = this;

        var _props = this.props;
        var resourceType = _props.resourceType;
        var resourceId = _props.resourceId;
        var _pydio = pydio;
        var user = _pydio.user;

        var proms = [_pydioHttpPolicies2['default'].loadPolicies(resourceType, resourceId), user.getIdmUser()];
        if (resourceType !== 'team') {
            proms.push(_pydioHttpApi2['default'].getRestClient().getIdmApi().listTeams());
        }
        Promise.all(proms).then(function (result) {
            var policies = result[0];
            var resourceUuid = policies[0].Resource;
            var idmUser = result[1];
            var teams = [];
            if (resourceType !== 'team' && result[2]) {
                teams = result[2].Teams;
            }
            _this.setState({
                policies: policies,
                idmUser: idmUser,
                userTeams: teams,
                loading: false,
                resourceUuid: resourceUuid
            });
        })['catch'](function (error) {
            _this.setState({ error: error.message, loading: false });
        });
    };

    ResourcePoliciesPanel.prototype.revert = function revert() {
        this.setState({ dirtyPolicies: null, diffPolicies: { add: {}, remove: {} } });
    };

    ResourcePoliciesPanel.prototype.save = function save() {
        var _this2 = this;

        var _state = this.state;
        var dirtyPolicies = _state.dirtyPolicies;
        var diffPolicies = _state.diffPolicies;
        var _props2 = this.props;
        var resourceType = _props2.resourceType;
        var resourceId = _props2.resourceId;
        var onSavePolicies = _props2.onSavePolicies;

        _pydioHttpPolicies2['default'].savePolicies(resourceType, resourceId, dirtyPolicies).then(function (result) {
            _this2.setState({ policies: result, dirtyPolicies: null, diffPolicies: { add: {}, remove: {} } });
            if (onSavePolicies) {
                onSavePolicies(diffPolicies);
            }
        })['catch'](function (reason) {
            _this2.setState({ error: reason.message });
        });
        //console.log(dirtyPolicies, diffPolicies);
    };

    ResourcePoliciesPanel.prototype.removePolicy = function removePolicy(action, subject) {
        var _state2 = this.state;
        var policies = _state2.policies;
        var dirtyPolicies = _state2.dirtyPolicies;
        var diffPolicies = _state2.diffPolicies;

        if (dirtyPolicies) {
            policies = dirtyPolicies;
        }
        var newPolicies = [];
        policies.map(function (p) {
            if (p.Action !== action || p.Subject !== subject) {
                newPolicies.push(p);
            }
        });
        diffPolicies.remove[action + '///' + subject] = true;
        if (diffPolicies.add[action + '///' + subject]) {
            delete diffPolicies.add[action + '///' + subject];
        }
        this.setState({ dirtyPolicies: newPolicies, diffPolicies: diffPolicies });
    };

    ResourcePoliciesPanel.prototype.addPolicy = function addPolicy(action, subject) {
        var isPickedUser = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
        var _state3 = this.state;
        var policies = _state3.policies;
        var dirtyPolicies = _state3.dirtyPolicies;
        var resourceUuid = _state3.resourceUuid;
        var diffPolicies = _state3.diffPolicies;

        var newPolicies = dirtyPolicies ? [].concat(dirtyPolicies) : [].concat(policies);
        var newPol = new _pydioHttpRestApi.ServiceResourcePolicy();
        newPol.Resource = resourceUuid;
        newPol.Effect = 'allow';
        newPol.Subject = subject;
        newPol.Action = action;
        newPolicies.push(newPol);

        diffPolicies.add[action + '///' + subject] = true;
        if (diffPolicies.remove[action + '///' + subject]) {
            delete diffPolicies.remove[action + '///' + subject];
        }
        if (isPickedUser) {
            this.setState({ dirtyPolicies: newPolicies, diffPolicies: diffPolicies, pickedUser: null, pickedLabel: null });
        } else {
            this.setState({ dirtyPolicies: newPolicies, diffPolicies: diffPolicies });
        }
    };

    /**
     *
     * @param userSubjects
     * @param policies
     * @return {boolean}
     */

    ResourcePoliciesPanel.prototype.hasOneWrite = function hasOneWrite(userSubjects, policies) {
        for (var i = 0; i < userSubjects.length; i++) {
            for (var j = 0; j < policies.length; j++) {
                if (policies[j].Subject === userSubjects[i] && policies[j].Action === 'WRITE') {
                    return true;
                }
            }
        }
        return false;
    };

    /**
     *
     * @param idmUser
     * @param policies
     * @return {{groupBlocks: Array, hasWrite: boolean}}
     */

    ResourcePoliciesPanel.prototype.listUserRoles = function listUserRoles(idmUser, policies) {
        var crtUserSubject = 'user:' + idmUser.Login;
        var values = {};
        idmUser.Roles.map(function (role) {
            if (!role.GroupRole) {
                return;
            }
            values['role:' + role.Uuid] = role.Label;
        });
        values[crtUserSubject] = 'You';
        var hasWrite = this.hasOneWrite(Object.keys(values), policies);
        // Add other subjects
        values = _extends({}, this.listOtherUsersSubjects(policies, crtUserSubject), values);
        var keys = Object.keys(values);
        // Build Lines
        var groupBlocks = [];
        for (var i = keys.length - 1; i >= 0; i--) {
            var newKey = keys[i];
            var newVal = values[newKey];
            groupBlocks.push(this.renderLine(newKey, newVal, policies, !hasWrite || newKey === crtUserSubject));
        }
        return { groupBlocks: groupBlocks, hasWrite: hasWrite };
    };

    /**
     *
     * @param userTeams
     * @param policies
     * @param disabled
     * @return {XML}[]
     */

    ResourcePoliciesPanel.prototype.listUserTeams = function listUserTeams(userTeams, policies, disabled) {
        var _this3 = this;

        return userTeams.map(function (role) {
            return _this3.renderLine('role:' + role.Uuid, role.Label, policies, disabled);
        });
    };

    ResourcePoliciesPanel.prototype.listOtherUsersSubjects = function listOtherUsersSubjects(policies, currentUserSubject) {
        var _props3 = this.props;
        var resourceId = _props3.resourceId;
        var cellAcls = _props3.cellAcls;

        var subs = {};
        policies.map(function (p) {
            if (p.Subject.indexOf('user:') === 0 && p.Subject !== currentUserSubject && p.Subject !== 'user:' + resourceId) {
                subs[p.Subject] = p.Subject.substr('user:'.length);
            }
            if (cellAcls && p.Subject.indexOf('role:') === 0 && cellAcls[p.Subject.substr('role:'.length)]) {
                var roleId = p.Subject.substr('role:'.length);
                if (cellAcls[roleId].User) {
                    var usr = cellAcls[roleId].User;
                    if (currentUserSubject !== 'user:' + usr.Login) {
                        subs[p.Subject] = usr.Attributes && usr.Attributes['displayName'] ? usr.Attributes['displayName'] : usr.Login;
                    }
                } else if (cellAcls[roleId].Group) {
                    var grp = cellAcls[roleId].Group;
                    subs[p.Subject] = grp.Attributes && grp.Attributes['displayName'] ? grp.Attributes['displayName'] : grp.GroupLabel;
                }
            }
        });
        return subs;
    };

    /**
     *
     * @param userOrRole {{IdmUser,IdmRole}}
     */

    ResourcePoliciesPanel.prototype.pickUser = function pickUser(userOrRole) {
        var subject = undefined,
            label = undefined;
        if (userOrRole.IdmUser) {
            var IdmUser = userOrRole.IdmUser;

            var attributes = IdmUser.Attributes || {};
            if (IdmUser.IsGroup) {
                subject = 'role:' + IdmUser.Uuid;
                label = attributes['displayName'] || IdmUser.GroupLabel;
            } else {
                subject = 'user:' + IdmUser.Login;
                label = attributes['displayName'] || IdmUser.Login;
            }
        } else {
            var IdmRole = userOrRole.IdmRole;

            subject = 'role:' + IdmRole.Uuid;
            label = IdmRole.Label;
        }
        this.setState({ pickedUser: subject, pickedLabel: label });
    };

    /**
     *
     * @param subject
     * @param label
     * @param policies
     * @param disabled
     * @param isPickedUser
     * @return {XML}
     */

    ResourcePoliciesPanel.prototype.renderLine = function renderLine(subject, label, policies, disabled) {
        var _this4 = this;

        var isPickedUser = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];
        var _props4 = this.props;
        var subjectsDisabled = _props4.subjectsDisabled;
        var subjectsHidden = _props4.subjectsHidden;
        var readonly = _props4.readonly;

        if (subjectsHidden && subjectsHidden[subject]) {
            return null;
        }

        var read = false,
            write = false;
        var readChange = function readChange() {
            _this4.addPolicy('READ', subject, isPickedUser);
        };
        var writeChange = function writeChange() {
            _this4.addPolicy('WRITE', subject, isPickedUser);
        };
        policies.map(function (p) {
            if (p.Subject !== subject) {
                return;
            }
            if (p.Action === 'WRITE') {
                write = p.Action === 'WRITE';
                writeChange = function () {
                    _this4.removePolicy('WRITE', subject);
                };
            } else if (p.Action === 'READ') {
                read = p.Action === 'READ';
                readChange = function () {
                    _this4.removePolicy('READ', subject);
                };
            }
        });
        var disableWrite = disabled;
        var disableRead = disabled;
        if (readonly) {
            disableRead = true;
            disableWrite = true;
        } else {
            if (subjectsDisabled && subjectsDisabled['READ'] && subjectsDisabled['READ'][subject]) {
                disableRead = true;
            }
            if (subjectsDisabled && subjectsDisabled['WRITE'] && subjectsDisabled['WRITE'][subject]) {
                disableWrite = true;
            }
        }
        return _react2['default'].createElement(
            'div',
            { style: { display: 'flex', margin: 10, marginRight: 0 } },
            _react2['default'].createElement(
                'div',
                { style: { flex: 1 } },
                label
            ),
            _react2['default'].createElement(_materialUi.Checkbox, { checked: read, disabled: disableRead, style: { width: 40 }, onCheck: readChange }),
            _react2['default'].createElement(_materialUi.Checkbox, { checked: write, disabled: disableWrite, style: { width: 40 }, onCheck: writeChange })
        );
    };

    ResourcePoliciesPanel.prototype.render = function render() {
        var _this5 = this;

        var appBar = this.props.muiTheme.appBar;

        var styles = {
            title: {
                paddingLeft: 10,
                backgroundColor: appBar.color,
                display: 'flex',
                alignItems: 'center',
                fontSize: 16,
                color: appBar.textColor
            },
            subheader: {
                margin: 10,
                fontWeight: 500,
                color: '#9E9E9E',
                display: 'flex'
            },
            subject: {
                margin: 10
            },
            head: {
                display: 'inline-block',
                width: 40,
                textAlign: 'center',
                fontSize: 10
            }
        };
        var _state4 = this.state;
        var policies = _state4.policies;
        var dirtyPolicies = _state4.dirtyPolicies;
        var error = _state4.error;
        var idmUser = _state4.idmUser;
        var userTeams = _state4.userTeams;
        var loading = _state4.loading;
        var pickedUser = _state4.pickedUser;
        var pickedLabel = _state4.pickedLabel;
        var _props5 = this.props;
        var onDismiss = _props5.onDismiss;
        var style = _props5.style;
        var skipTitle = _props5.skipTitle;
        var resourceId = _props5.resourceId;
        var pydio = _props5.pydio;
        var userListExcludes = _props5.userListExcludes;
        var readonly = _props5.readonly;

        var blocks = [];
        if (!loading && !error) {
            var _listUserRoles = this.listUserRoles(idmUser, dirtyPolicies ? dirtyPolicies : policies);

            var groupBlocks = _listUserRoles.groupBlocks;
            var hasWrite = _listUserRoles.hasWrite;

            var teamBlocks = this.listUserTeams(userTeams, dirtyPolicies ? dirtyPolicies : policies, !hasWrite);
            var heads = _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'span',
                    { style: styles.head },
                    'View'
                ),
                _react2['default'].createElement(
                    'span',
                    { style: styles.head },
                    'Edit'
                )
            );
            if (groupBlocks.length) {
                blocks.push(_react2['default'].createElement(
                    'div',
                    { style: styles.subheader },
                    _react2['default'].createElement(
                        'span',
                        { style: { flex: 1 } },
                        'Users'
                    ),
                    heads
                ));
                blocks.push(groupBlocks);
                blocks.push(_react2['default'].createElement(_materialUi.Divider, null));
            }
            if (teamBlocks.length) {
                blocks.push(_react2['default'].createElement(
                    'div',
                    { style: styles.subheader },
                    _react2['default'].createElement(
                        'span',
                        { style: { flex: 1 } },
                        'Your Teams'
                    ),
                    heads
                ));
                blocks.push(teamBlocks);
                blocks.push(_react2['default'].createElement(_materialUi.Divider, null));
            }
            if (pickedUser) {
                blocks.push(_react2['default'].createElement(
                    'div',
                    { style: styles.subheader },
                    'Set visible to...'
                ));
                blocks.push(this.renderLine(pickedUser, pickedLabel, policies, false, true));
                blocks.push(_react2['default'].createElement(
                    'div',
                    { style: { textAlign: 'right' } },
                    _react2['default'].createElement(_materialUi.FlatButton, { label: "Cancel", onTouchTap: function () {
                            _this5.setState({ pickedUser: null, pickedLabel: null });
                        } })
                ));
                blocks.push(_react2['default'].createElement(_materialUi.Divider, null));
            } else if (!readonly) {
                (function () {
                    var crtUserSubject = 'user:' + idmUser.Login;
                    var userSubjects = _this5.listOtherUsersSubjects(dirtyPolicies ? dirtyPolicies : policies, crtUserSubject);
                    var exludes = [];
                    Object.keys(userSubjects).map(function (k) {
                        exludes.push(userSubjects[k]);
                    });

                    // select an arbitrary resource
                    blocks.push(_react2['default'].createElement(
                        'div',
                        { style: styles.subheader },
                        'Set visible to ...'
                    ));
                    blocks.push(_react2['default'].createElement(
                        'div',
                        { style: { margin: '-30px 10px 0' } },
                        _react2['default'].createElement(_usersUsersCompleter2['default'], {
                            className: 'share-form-users',
                            fieldLabel: 'Select user',
                            renderSuggestion: function (userObject) {
                                return _react2['default'].createElement(
                                    'div',
                                    { style: { fontSize: 13 } },
                                    userObject.getExtendedLabel()
                                );
                            },
                            onValueSelected: _this5.pickUser.bind(_this5),
                            usersOnly: true,
                            existingOnly: true,
                            excludes: [resourceId].concat(userListExcludes, exludes),
                            pydio: pydio,
                            showAddressBook: false,
                            usersFrom: 'local'
                        })
                    ));
                    blocks.push(_react2['default'].createElement(_materialUi.Divider, null));
                })();
            }

            blocks.pop();
        }

        return _react2['default'].createElement(
            'div',
            { style: style },
            _react2['default'].createElement(
                'div',
                { style: styles.title },
                _react2['default'].createElement(
                    'span',
                    { style: { flex: 1 } },
                    skipTitle ? '' : 'Visibility'
                ),
                dirtyPolicies && _react2['default'].createElement(_materialUi.IconButton, { iconClassName: "mdi mdi-undo-variant", tooltip: "Revert changes", onTouchTap: this.revert.bind(this), iconStyle: { color: appBar.textColor } }),
                dirtyPolicies && _react2['default'].createElement(_materialUi.IconButton, { iconClassName: "mdi mdi-content-save", tooltip: "Save changes", onTouchTap: this.save.bind(this), iconStyle: { color: appBar.textColor } }),
                !dirtyPolicies && onDismiss && _react2['default'].createElement(_materialUi.IconButton, { iconClassName: "mdi mdi-close", onTouchTap: onDismiss, iconStyle: { color: appBar.textColor } })
            ),
            error && _react2['default'].createElement(
                'div',
                null,
                'Error: ',
                error
            ),
            _react2['default'].createElement(
                'div',
                null,
                blocks
            )
        );
    };

    return ResourcePoliciesPanel;
})(_react2['default'].Component);

ResourcePoliciesPanel.PropTypes = {
    pydio: _react2['default'].PropTypes.instanceOf(_pydio3['default']),
    resourceType: _react2['default'].PropTypes.string.isRequired,
    resourceId: _react2['default'].PropTypes.string.isRequired,
    onSavePolicies: _react2['default'].PropTypes.func,
    userListExcludes: _react2['default'].PropTypes.array,
    subjectsDisabled: _react2['default'].PropTypes.array,
    subjectsHidden: _react2['default'].PropTypes.object,
    readonly: _react2['default'].PropTypes.bool,
    cellAcls: _react2['default'].PropTypes.object,

    onDismiss: _react2['default'].PropTypes.func,
    style: _react2['default'].PropTypes.object,
    skipTitle: _react2['default'].PropTypes.bool

};

exports['default'] = ResourcePoliciesPanel = _materialUiStyles.muiThemeable()(ResourcePoliciesPanel);

exports['default'] = ResourcePoliciesPanel;
module.exports = exports['default'];

},{"../users/UsersCompleter":42,"material-ui":"material-ui","material-ui/styles":"material-ui/styles","pydio":"pydio","pydio/http/api":"pydio/http/api","pydio/http/policies":"pydio/http/policies","pydio/http/rest-api":"pydio/http/rest-api","pydio/http/users-api":"pydio/http/users-api","react":"react"}],40:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _pydioHttpApi = require('pydio/http/api');

var _pydioHttpApi2 = _interopRequireDefault(_pydioHttpApi);

/**
 * Simple form for creating a team
 */

var _require = require('react');

var Component = _require.Component;
var PropTypes = _require.PropTypes;

var _require2 = require('material-ui');

var TextField = _require2.TextField;
var FlatButton = _require2.FlatButton;

var _require$requireLib = require('pydio').requireLib('boot');

var PydioContextConsumer = _require$requireLib.PydioContextConsumer;

var TeamCreationForm = (function (_Component) {
    _inherits(TeamCreationForm, _Component);

    function TeamCreationForm(props, context) {
        _classCallCheck(this, TeamCreationForm);

        _Component.call(this, props, context);
        this.state = { value: '' };
    }

    TeamCreationForm.prototype.onChange = function onChange(e, value) {
        this.setState({ value: value });
    };

    TeamCreationForm.prototype.submitCreationForm = function submitCreationForm() {
        var value = this.state.value;
        _pydioHttpApi2['default'].getRestClient().getIdmApi().saveSelectionAsTeam(value, [], this.props.onTeamCreated);
    };

    TeamCreationForm.prototype.render = function render() {
        var getMessage = this.props.getMessage;

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { style: { padding: 20 } },
                React.createElement(
                    'div',
                    null,
                    getMessage(591)
                ),
                React.createElement(TextField, { floatingLabelText: getMessage(578), value: this.state.value, onChange: this.onChange.bind(this), fullWidth: true })
            ),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { style: { textAlign: 'right', padding: 8 } },
                    React.createElement(FlatButton, { label: getMessage(49), onTouchTap: this.props.onCancel.bind(this) }),
                    React.createElement(FlatButton, { label: getMessage(579), primary: true, onTouchTap: this.submitCreationForm.bind(this) })
                )
            )
        );
    };

    return TeamCreationForm;
})(Component);

TeamCreationForm.propTypes = {
    /**
     * Callback triggered after team creation succeeded
     */
    onTeamCreated: PropTypes.func.isRequired,
    /**
     * Request modal close
     */
    onCancel: PropTypes.func.isRequired
};

exports['default'] = TeamCreationForm = PydioContextConsumer(TeamCreationForm);

exports['default'] = TeamCreationForm;
module.exports = exports['default'];

},{"material-ui":"material-ui","pydio":"pydio","pydio/http/api":"pydio/http/api","react":"react"}],41:[function(require,module,exports){
(function (global){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _pydioHttpApi = require('pydio/http/api');

var _pydioHttpApi2 = _interopRequireDefault(_pydioHttpApi);

var _materialUi = require('material-ui');

var _pydioHttpUsersApi = require('pydio/http/users-api');

var _Pydio$requireLib = _pydio2['default'].requireLib('form');

var Manager = _Pydio$requireLib.Manager;
var FormPanel = _Pydio$requireLib.FormPanel;

var UserCreationForm = (function (_React$Component) {
    _inherits(UserCreationForm, _React$Component);

    UserCreationForm.prototype.getCreateUserParameters = function getCreateUserParameters() {
        var editMode = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

        var basicParameters = [];
        var pydio = this.props.pydio;
        var MessageHash = pydio.MessageHash;

        var prefix = pydio.getPluginConfigs('action.share').get('SHARED_USERS_TMP_PREFIX');
        basicParameters.push({
            IdmUserField: 'Login',
            description: MessageHash['533'],
            readonly: editMode,
            expose: "true",
            label: MessageHash['522'],
            name: editMode ? "existing_user_id" : "new_user_id",
            scope: "user",
            type: "string",
            mandatory: true,
            "default": prefix ? prefix : ''
        }, {
            IdmUserField: 'Password',
            description: MessageHash['534'],
            editable: "true",
            expose: "true",
            label: MessageHash['523'],
            name: "new_password",
            scope: "user",
            type: "valid-password",
            mandatory: true
        });

        var params = global.pydio.getPluginConfigs('auth').get('NEWUSERS_EDIT_PARAMETERS').split(',');
        for (var i = 0; i < params.length; i++) {
            params[i] = "user/preferences/pref[@exposed]|//param[@name='" + params[i] + "']";
        }
        var xPath = params.join('|');
        Manager.parseParameters(this.props.pydio.getXmlRegistry(), xPath).map(function (el) {
            basicParameters.push(el);
        });
        if (!editMode) {
            basicParameters.push({
                description: MessageHash['536'],
                editable: "true",
                expose: "true",
                label: MessageHash['535'],
                name: "send_email",
                scope: "user",
                type: "boolean",
                mandatory: true
            });
        }
        return basicParameters;
    };

    UserCreationForm.prototype.getDefaultProps = function getDefaultProps() {
        return { editMode: false };
    };

    UserCreationForm.prototype.getParameters = function getParameters() {
        if (!this._parsedParameters) {
            this._parsedParameters = this.getCreateUserParameters(this.props.editMode);
        }
        return this._parsedParameters;
    };

    UserCreationForm.prototype.getValuesForPost = function getValuesForPost(prefix) {
        return Manager.getValuesForPOST(this.getParameters(), this.state.values, prefix);
    };

    function UserCreationForm(props, context) {
        var _this = this;

        _classCallCheck(this, UserCreationForm);

        _React$Component.call(this, props, context);

        var _props = this.props;
        var pydio = _props.pydio;
        var newUserName = _props.newUserName;
        var editMode = _props.editMode;
        var userData = _props.userData;

        var userPrefix = pydio.getPluginConfigs('action.share').get('SHARED_USERS_TMP_PREFIX');
        if (!userPrefix || newUserName.startsWith(userPrefix)) userPrefix = '';
        var values = {
            new_password: '',
            send_email: true
        };
        if (editMode && userData && userData.IdmUser) {
            (function () {
                var IdmUser = userData.IdmUser;

                _this.getParameters().forEach(function (param) {
                    var name = param.name;
                    var IdmUserField = param.IdmUserField;
                    var scope = param.scope;
                    var pluginId = param.pluginId;

                    var value = undefined;
                    if (IdmUserField) {
                        value = IdmUser[IdmUserField];
                    } else if (scope === 'user' && IdmUser.Attributes) {
                        value = IdmUser.Attributes[name];
                    } else if (pluginId && IdmUser.Attributes["parameter:" + pluginId + ":" + name]) {
                        value = JSON.parse(IdmUser.Attributes["parameter:" + pluginId + ":" + name]);
                    }
                    if (value !== undefined) {
                        values[name] = value;
                    }
                });
            })();
        } else {
            values['new_user_id'] = userPrefix + newUserName;
            values['lang'] = pydio.currentLanguage;
        }
        this.state = { values: values };
    }

    UserCreationForm.prototype.onValuesChange = function onValuesChange(newValues) {
        this.setState({ values: newValues });
    };

    UserCreationForm.prototype.changeValidStatus = function changeValidStatus(status) {
        this.setState({ valid: status });
    };

    UserCreationForm.prototype.submitCreationForm = function submitCreationForm() {
        var _this2 = this;

        var existingUser = undefined;
        var _props2 = this.props;
        var editMode = _props2.editMode;
        var userData = _props2.userData;

        if (editMode) {
            existingUser = userData.IdmUser;
        }
        _pydioHttpApi2['default'].getRestClient().getIdmApi().putExternalUser(this.state.values, this.getParameters(), existingUser).then(function (idmUser) {
            _this2.props.onUserCreated(_pydioHttpUsersApi.User.fromIdmUser(idmUser));
        });
    };

    UserCreationForm.prototype.cancelCreationForm = function cancelCreationForm() {
        this.props.onCancel();
    };

    UserCreationForm.prototype.render = function render() {
        var _props3 = this.props;
        var pydio = _props3.pydio;
        var editMode = _props3.editMode;
        var newUserName = _props3.newUserName;

        var status = this.state.valid;
        if (!status && editMode && !this.state.values['new_password']) {
            status = true;
        }

        return _react2['default'].createElement(
            _materialUi.Paper,
            { zDepth: this.props.zDepth !== undefined ? this.props.zDepth : 2, style: _extends({ minHeight: 250, display: 'flex', flexDirection: 'column' }, this.props.style) },
            _react2['default'].createElement(FormPanel, {
                className: 'reset-pydio-forms',
                depth: -1,
                parameters: this.getParameters(),
                values: this.state.values,
                onChange: this.onValuesChange.bind(this),
                onValidStatusChange: this.changeValidStatus.bind(this),
                style: { overflowY: 'auto', flex: 1 }
            }),
            _react2['default'].createElement(_materialUi.Divider, { style: { flexShrink: 0 } }),
            _react2['default'].createElement(
                'div',
                { style: { padding: 8, textAlign: 'right' } },
                _react2['default'].createElement(_materialUi.FlatButton, { label: pydio.MessageHash[49], onTouchTap: this.cancelCreationForm.bind(this) }),
                _react2['default'].createElement(_materialUi.FlatButton, { label: this.props.editMode ? pydio.MessageHash[519] : pydio.MessageHash[484], primary: true, onTouchTap: this.submitCreationForm.bind(this), disabled: !status })
            )
        );
    };

    return UserCreationForm;
})(_react2['default'].Component);

UserCreationForm.propTypes = {
    newUserName: _react2['default'].PropTypes.string,
    onUserCreated: _react2['default'].PropTypes.func.isRequired,
    onCancel: _react2['default'].PropTypes.func.isRequired,
    editMode: _react2['default'].PropTypes.bool,
    userData: _react2['default'].PropTypes.object
};

exports['default'] = UserCreationForm;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"material-ui":"material-ui","pydio":"pydio","pydio/http/api":"pydio/http/api","pydio/http/users-api":"pydio/http/users-api","react":"react"}],42:[function(require,module,exports){
(function (global){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydioHttpApi = require('pydio/http/api');

var _pydioHttpApi2 = _interopRequireDefault(_pydioHttpApi);

var _addressbookAddressBook = require('./addressbook/AddressBook');

var _addressbookAddressBook2 = _interopRequireDefault(_addressbookAddressBook);

var _materialUi = require('material-ui');

var _pydioUtilFunc = require('pydio/util/func');

var _pydioUtilFunc2 = _interopRequireDefault(_pydioUtilFunc);

var _UserCreationForm = require('./UserCreationForm');

var _UserCreationForm2 = _interopRequireDefault(_UserCreationForm);

/**
 * Ready to use autocomplete field that will load users/groups/roles from
 * the server (using user_list_authorized_users API).
 * Used for sharing, addressbooks, send email, etc.
 *
 * Can also open a "selector-style" adress book.
 */
var UsersLoader = _react2['default'].createClass({
    displayName: 'UsersLoader',

    propTypes: {

        /**
         * Method called to render a commponent, taking a UserObject as input
         */
        renderSuggestion: _react2['default'].PropTypes.func.isRequired,
        /**
         * Callback when a value is finally selected
         */
        onValueSelected: _react2['default'].PropTypes.func.isRequired,
        /**
         * Floating Label Text displayed on the field
         */
        fieldLabel: _react2['default'].PropTypes.string.isRequired,
        /**
         * Array of values to ignore
         */
        excludes: _react2['default'].PropTypes.array.isRequired,
        /**
         * Display only users, no groups nor roles
         */
        usersOnly: _react2['default'].PropTypes.bool,
        /**
         * Display users from local directory and/or from remote.
         */
        usersFrom: _react2['default'].PropTypes.oneOf(['local', 'remote', 'any']),
        /**
         * Do not propose a "Create user" option
         */
        existingOnly: _react2['default'].PropTypes.bool,
        /**
         * Allow free typing
         */
        freeValueAllowed: _react2['default'].PropTypes.bool,
        /**
         * Will be passed to the root component
         */
        className: _react2['default'].PropTypes.string
    },

    getInitialState: function getInitialState() {
        return {
            dataSource: [],
            loading: false,
            searchText: '',
            minChars: parseInt(global.pydio.getPluginConfigs("core.auth").get("USERS_LIST_COMPLETE_MIN_CHARS"))
        };
    },

    /**
     * Loads values from server
     * @param {string} input Currently searched text
     * @param {Function} callback Called with the values
     */
    suggestionLoader: function suggestionLoader(input, callback) {
        var _this = this;

        var excludes = this.props.excludes;
        //const disallowTemporary = this.props.existingOnly && !this.props.freeValueAllowed;
        this.setState({ loading: this.state.loading + 1 });
        var api = _pydioHttpApi2['default'].getRestClient().getIdmApi();
        var uPromise = api.listUsers('/', input, true, 0, 20);
        var gPromise = api.listGroups('/', input, true, 0, 20);
        var tPromise = api.listTeams(input, 0, 20);
        Promise.all([uPromise, gPromise, tPromise]).then(function (results) {
            _this.setState({ loading: _this.state.loading - 1 });
            var users = results[0];
            var groups = results[1];
            var teams = results[2];

            users = users.Users;
            groups = groups.Groups;
            teams = teams.Teams;
            if (excludes && excludes.length) {
                users = users.filter(function (user) {
                    return excludes.indexOf(user.Login) === -1;
                });
                groups = groups.filter(function (group) {
                    return excludes.indexOf(group.GroupLabel) === -1;
                });
                teams = teams.filter(function (team) {
                    return excludes.indexOf(team.Label === -1);
                });
            }
            callback([].concat(groups.map(function (u) {
                return { IdmUser: u };
            }), teams.map(function (u) {
                return { IdmRole: u };
            }), users.map(function (u) {
                return { IdmUser: u };
            })));
        });
        /*
        PydioUsers.Client.authorizedUsersStartingWith(input, function(users){
            this.setState({loading:this.state.loading - 1});
            if(disallowTemporary){
                users = users.filter(function(user){
                    return !user.getTemporary();
                });
            }
            if(excludes && excludes.length){
                users = users.filter(function(user){
                    return excludes.indexOf(user.getId()) == -1;
                });
            }
            callback(users);
        }.bind(this), this.props.usersOnly, this.props.existingOnly);
        */
    },

    /**
     * Called when the field is updated
     * @param value
     */
    textFieldUpdate: function textFieldUpdate(value) {

        this.setState({ searchText: value });
        if (this.state.minChars && value && value.length < this.state.minChars) {
            return;
        }
        this.loadBuffered(value, 350);
    },

    getPendingSearchText: function getPendingSearchText() {
        return this.state.searchText || false;
    },

    /**
     * Debounced call for rendering search
     * @param value {string}
     * @param timeout {int}
     */
    loadBuffered: function loadBuffered(value, timeout) {

        if (!value && this._emptyValueList) {
            this.setState({ dataSource: this._emptyValueList });
            return;
        }
        var _props = this.props;
        var existingOnly = _props.existingOnly;
        var freeValueAllowed = _props.freeValueAllowed;

        _pydioUtilFunc2['default'].bufferCallback('remote_users_search', timeout, (function () {
            this.setState({ loading: true });
            this.suggestionLoader(value, (function (users) {
                var valueExists = false;
                var values = users.map((function (userObject) {
                    // Todo readapt renderSuggestion(s) calls
                    //let component = (<MenuItem>{this.props.renderSuggestion(userObject)}</MenuItem>);
                    var identifier = undefined,
                        icon = undefined,
                        label = undefined;
                    if (userObject.IdmUser && userObject.IdmUser.IsGroup) {
                        identifier = userObject.IdmUser.GroupLabel;
                        label = userObject.IdmUser.Attributes && userObject.IdmUser.Attributes["displayName"] ? userObject.IdmUser.Attributes["displayName"] : identifier;
                        icon = "mdi mdi-folder";
                    } else if (userObject.IdmUser) {
                        identifier = userObject.IdmUser.Login;
                        label = userObject.IdmUser.Attributes && userObject.IdmUser.Attributes["displayName"] ? userObject.IdmUser.Attributes["displayName"] : identifier;
                        icon = "mdi mdi-account";
                    } else {
                        identifier = userObject.IdmRole.Uuid;
                        label = userObject.IdmRole.Label;
                        icon = "mdi mdi-folder";
                    }

                    valueExists |= label === value;
                    var component = _react2['default'].createElement(_materialUi.MenuItem, { primaryText: label });
                    return {
                        userObject: userObject,
                        text: identifier,
                        value: component
                    };
                }).bind(this));
                if (!value) {
                    this._emptyValueList = values;
                }
                // Append temporary create user
                if (value && !valueExists && (!existingOnly || freeValueAllowed)) {
                    values = [{ text: value, value: _react2['default'].createElement(_materialUi.MenuItem, { primaryText: value + (freeValueAllowed ? '' : ' (create user)') }) }].concat(values);
                }
                this.setState({ dataSource: values, loading: false });
            }).bind(this));
        }).bind(this));
    },

    /**
     * Called when user selects a value from the list
     * @param value
     * @param index
     */
    onCompleterRequest: function onCompleterRequest(value, index) {
        var freeValueAllowed = this.props.freeValueAllowed;

        if (index === -1) {
            this.state.dataSource.map(function (entry) {
                if (entry.text === value) {
                    value = entry;
                }
            });
            if (value && !value.userObject && this.props.freeValueAllowed) {
                this.props.onValueSelected({ FreeValue: value.text });
                this.setState({ searchText: '', dataSource: [] });
                return;
            }
        }
        if (value) {
            if (value.userObject) {
                this.props.onValueSelected(value.userObject);
            } else if (freeValueAllowed) {
                this.props.onValueSelected({ FreeValue: value.text });
            } else {
                this.setState({ createUser: value.text });
            }
            this.setState({ searchText: '', dataSource: [] });
        }
    },

    /**
     * Triggers onValueSelected props callback
     * @param {Pydio.User} newUser
     */
    onUserCreated: function onUserCreated(newUser) {
        this.props.onValueSelected(newUser);
        this.setState({ createUser: null });
    },

    /**
     * Close user creation form
     */
    onCreationCancelled: function onCreationCancelled() {
        this.setState({ createUser: null });
    },

    /**
     * Open address book inside a Popover
     * @param event
     */
    openAddressBook: function openAddressBook(event) {
        this.setState({
            addressBookOpen: true,
            addressBookAnchor: event.currentTarget
        });
    },

    /**
     * Close address book popover
     */
    closeAddressBook: function closeAddressBook() {
        this.setState({ addressBookOpen: false });
    },

    /**
     * Triggered when user clicks on an entry from adress book.
     * @param item
     */
    onAddressBookItemSelected: function onAddressBookItemSelected(item) {
        this.props.onValueSelected(item);
    },

    render: function render() {
        var _this2 = this;

        var _state = this.state;
        var dataSource = _state.dataSource;
        var createUser = _state.createUser;

        var containerStyle = { position: 'relative', overflow: 'visible' };

        return _react2['default'].createElement(
            'div',
            { style: containerStyle, ref: function (el) {
                    _this2._popoverAnchor = el;
                } },
            !createUser && _react2['default'].createElement(_materialUi.AutoComplete, {
                filter: _materialUi.AutoComplete.noFilter,
                dataSource: dataSource,
                searchText: this.state.searchText,
                onUpdateInput: this.textFieldUpdate,
                className: this.props.className,
                openOnFocus: true,
                floatingLabelText: this.props.fieldLabel,
                underlineShow: !this.props.underlineHide,
                fullWidth: true,
                onNewRequest: this.onCompleterRequest,
                listStyle: { maxHeight: 350, overflowY: 'auto' },
                onFocus: function () {
                    _this2.loadBuffered(_this2.state.searchText, 100);
                }
            }),
            createUser && _react2['default'].createElement(_materialUi.TextField, {
                floatingLabelText: this.props.fieldLabel,
                value: global.pydio.MessageHash[485] + ' (' + this.state.createUser + ')',
                disabled: true,
                fullWidth: true,
                underlineShow: !this.props.underlineHide
            }),
            !createUser && _react2['default'].createElement(
                'div',
                { style: { position: 'absolute', right: 4, bottom: 14, height: 20, width: 20 } },
                _react2['default'].createElement(_materialUi.RefreshIndicator, {
                    size: 20,
                    left: 0,
                    top: 0,
                    status: this.state.loading ? 'loading' : 'hide'
                })
            ),
            this.props.showAddressBook && !createUser && _react2['default'].createElement(_addressbookAddressBook2['default'], {
                mode: 'popover',
                pydio: this.props.pydio,
                loaderStyle: { width: 320, height: 420 },
                onItemSelected: this.onAddressBookItemSelected,
                usersFrom: this.props.usersFrom,
                disableSearch: true
            }),
            _react2['default'].createElement(
                _materialUi.Popover,
                {
                    open: createUser,
                    anchorEl: this._popoverAnchor,
                    anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                    targetOrigin: { horizontal: 'left', vertical: 'top' },
                    onRequestClose: this.onCreationCancelled,
                    canAutoPosition: false
                },
                createUser && _react2['default'].createElement(_UserCreationForm2['default'], {
                    onUserCreated: this.onUserCreated.bind(this),
                    onCancel: this.onCreationCancelled.bind(this),
                    style: { width: 350, height: 320 },
                    newUserName: this.state.createUser,
                    pydio: this.props.pydio
                })
            )
        );
    }

});

exports['default'] = UsersLoader;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./UserCreationForm":41,"./addressbook/AddressBook":43,"material-ui":"material-ui","pydio/http/api":"pydio/http/api","pydio/util/func":"pydio/util/func","react":"react"}],43:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _NestedListItem = require('./NestedListItem');

var _NestedListItem2 = _interopRequireDefault(_NestedListItem);

var _UsersList = require('./UsersList');

var _UsersList2 = _interopRequireDefault(_UsersList);

var _RightPanelCard = require('./RightPanelCard');

var _RightPanelCard2 = _interopRequireDefault(_RightPanelCard);

var _SearchPanel = require('./SearchPanel');

var _SearchPanel2 = _interopRequireDefault(_SearchPanel);

var _Loaders = require('./Loaders');

var _Loaders2 = _interopRequireDefault(_Loaders);

var _TeamCreationForm = require('../TeamCreationForm');

var _TeamCreationForm2 = _interopRequireDefault(_TeamCreationForm);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _materialUi = require('material-ui');

var _materialUiStyles = require('material-ui/styles');

var _avatarActionsPanel = require('../avatar/ActionsPanel');

var _avatarActionsPanel2 = _interopRequireDefault(_avatarActionsPanel);

var _UserCreationForm = require('../UserCreationForm');

var _UserCreationForm2 = _interopRequireDefault(_UserCreationForm);

var _pydioHttpApi = require('pydio/http/api');

var _pydioHttpApi2 = _interopRequireDefault(_pydioHttpApi);

/**
 * High level component to browse users, groups and teams, either in a large format (mode='book') or a more compact
 * format (mode='selector'|'popover').
 * Address book allows to create external users, teams, and also to browse trusted server directories if Federated Sharing
 * is active.
 */

var _Pydio$requireLib = _pydio2['default'].requireLib('boot');

var PydioContextConsumer = _Pydio$requireLib.PydioContextConsumer;
var AddressBook = _react2['default'].createClass({
    displayName: 'AddressBook',

    propTypes: {
        /**
         * Main instance of pydio
         */
        pydio: _react2['default'].PropTypes.instanceOf(_pydio2['default']),
        /**
         * Display mode, either large (book) or small picker ('selector', 'popover').
         */
        mode: _react2['default'].PropTypes.oneOf(['book', 'selector', 'popover']).isRequired,
        /**
         * Use book mode but display as column
         */
        bookColumn: _react2['default'].PropTypes.bool,
        /**
         * Callback triggered in 'selector' mode whenever an item is clicked.
         */
        onItemSelected: _react2['default'].PropTypes.func,
        /**
         * Display users only, no teams or groups
         */
        usersOnly: _react2['default'].PropTypes.bool,
        /**
         * Choose various user sources, either the local directory or remote ( = trusted ) servers.
         */
        usersFrom: _react2['default'].PropTypes.oneOf(['local', 'remote', 'any']),
        /**
         * Disable the search engine
         */
        disableSearch: _react2['default'].PropTypes.bool,
        /**
         * Theme object passed by muiThemeable() wrapper
         */
        muiTheme: _react2['default'].PropTypes.object,
        /**
         * Will be passed to the Popover object
         */
        popoverStyle: _react2['default'].PropTypes.object,
        /**
         * Used as a button to open the selector in a popover
         */
        popoverButton: _react2['default'].PropTypes.object,
        /**
         * Will be passed to the Popover container object
         */
        popoverContainerStyle: _react2['default'].PropTypes.object,
        /**
         * Will be passed to the Popover Icon Button.
         */
        popoverIconButtonStyle: _react2['default'].PropTypes.object
    },

    getDefaultProps: function getDefaultProps() {
        return {
            mode: 'book',
            usersOnly: false,
            usersFrom: 'any',
            teamsOnly: false,
            disableSearch: false
        };
    },

    getInitialState: function getInitialState() {
        var _this = this;

        var _props = this.props;
        var pydio = _props.pydio;
        var mode = _props.mode;
        var usersOnly = _props.usersOnly;
        var usersFrom = _props.usersFrom;
        var teamsOnly = _props.teamsOnly;
        var disableSearch = _props.disableSearch;

        var getMessage = function getMessage(id) {
            return _this.props.getMessage(id, '');
        };
        var authConfigs = pydio.getPluginConfigs('core.auth');

        var root = undefined;
        if (teamsOnly) {
            root = {
                id: 'teams',
                label: getMessage(568),
                childrenLoader: _Loaders2['default'].loadTeams,
                _parent: null,
                _notSelectable: true,
                actions: {
                    type: 'teams',
                    create: '+ ' + getMessage(569),
                    remove: getMessage(570),
                    multiple: true
                }
            };
            return {
                root: root,
                selectedItem: root,
                loading: false,
                rightPaneItem: null
            };
        }

        root = {
            id: 'root',
            label: getMessage(592),
            type: 'root',
            collections: []
        };
        if (usersFrom !== 'remote') {
            if (authConfigs.get('USER_CREATE_USERS')) {
                root.collections.push({
                    id: 'ext',
                    label: getMessage(593),
                    icon: 'mdi mdi-account-network',
                    itemsLoader: _Loaders2['default'].loadExternalUsers,
                    _parent: root,
                    _notSelectable: true,
                    actions: {
                        type: 'users',
                        create: '+ ' + getMessage(484),
                        remove: getMessage(582),
                        multiple: true
                    }
                });
            }
            if (!usersOnly) {
                root.collections.push({
                    id: 'teams',
                    label: getMessage(568),
                    icon: 'mdi mdi-account-multiple',
                    childrenLoader: _Loaders2['default'].loadTeams,
                    _parent: root,
                    _notSelectable: true,
                    actions: {
                        type: 'teams',
                        create: '+ ' + getMessage(569),
                        remove: getMessage(570),
                        multiple: true
                    }
                });
            }
            root.collections.push({
                id: 'PYDIO_GRP_/',
                label: getMessage(584),
                icon: 'mdi mdi-account-box',
                childrenLoader: _Loaders2['default'].loadGroups,
                itemsLoader: _Loaders2['default'].loadGroupUsers,
                _parent: root,
                _notSelectable: true
            });
        }

        var ocsRemotes = pydio.getPluginConfigs('core.ocs').get('TRUSTED_SERVERS');
        if (ocsRemotes && !usersOnly && usersFrom !== 'local') {
            var remotes = JSON.parse(ocsRemotes);
            var remotesNodes = {
                id: 'remotes',
                label: getMessage(594),
                //icon:'mdi mdi-server',
                collections: [],
                _parent: root,
                _notSelectable: true
            };
            for (var k in remotes) {
                if (!remotes.hasOwnProperty(k)) continue;
                remotesNodes.collections.push({
                    id: k,
                    label: remotes[k],
                    icon: 'mdi mdi-server-network',
                    type: 'remote',
                    _parent: remotesNodes,
                    _notSelectable: true
                });
            }
            if (remotesNodes.collections.length) {
                root.collections.push(remotesNodes);
            }
        }

        return {
            root: root,
            selectedItem: mode === 'selector' ? root : root.collections[0],
            loading: false,
            rightPaneItem: null
        };
    },

    componentDidMount: function componentDidMount() {
        this.state.selectedItem && this.onFolderClicked(this.state.selectedItem);
    },

    onFolderClicked: function onFolderClicked(item) {
        var _this2 = this;

        var callback = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

        // Special case for teams
        if (this.props.mode === 'selector' && item.IdmRole && item.IdmRole.IsTeam) {
            this.onUserListItemClicked(item);
            return;
        }
        this.setState({ loading: true });

        _Loaders2['default'].childrenAsPromise(item, false).then(function (children) {
            _Loaders2['default'].childrenAsPromise(item, true).then(function (children) {
                _this2.setState({ selectedItem: item, loading: false }, callback);
            });
        });
    },

    onUserListItemClicked: function onUserListItemClicked(item) {
        if (this.props.onItemSelected) {
            var uObject = new PydioUsers.User(item.id, item.label, item.type, item.group, item.avatar, item.temporary, item.external);
            if (item.trusted_server_id) {
                uObject.trustedServerId = item.trusted_server_id;
                uObject.trustedServerLabel = item.trusted_server_label;
            }
            uObject._uuid = item.uuid;
            if (item.IdmUser) uObject.IdmUser = item.IdmUser;
            if (item.IdmRole) uObject.IdmRole = item.IdmRole;
            this.props.onItemSelected(uObject);
        } else {
            this.setState({ rightPaneItem: item });
        }
    },

    onCreateAction: function onCreateAction(item) {
        this.setState({ createDialogItem: item });
    },

    closeCreateDialogAndReload: function closeCreateDialogAndReload() {
        this.setState({ createDialogItem: null });
        this.reloadCurrentNode();
    },

    onCardUpdateAction: function onCardUpdateAction(item) {
        if (item._parent && item._parent === this.state.selectedItem) {
            this.reloadCurrentNode();
        }
    },

    onDeleteAction: function onDeleteAction(parentItem, selection) {
        var _this3 = this;

        var skipConfirm = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

        if (!skipConfirm && !confirm(this.props.getMessage(278))) {
            return;
        }
        switch (parentItem.actions.type) {
            case 'users':
                Promise.all(selection.map(function (user) {
                    if (_this3.state.rightPaneItem === user) {
                        _this3.setState({ rightPaneItem: null });
                    }
                    return _pydioHttpApi2['default'].getRestClient().getIdmApi().deleteIdmUser(user.IdmUser);
                })).then(function () {
                    _this3.reloadCurrentNode();
                });
                break;
            case 'teams':
                Promise.all(selection.map(function (team) {
                    if (_this3.state.rightPaneItem === team) {
                        _this3.setState({ rightPaneItem: null });
                    }
                    return _pydioHttpApi2['default'].getRestClient().getIdmApi().deleteRole(team.IdmRole.Uuid);
                })).then(function () {
                    _this3.reloadCurrentNode();
                });
                break;
            case 'team':
                Promise.all(selection.map(function (user) {
                    return _pydioHttpApi2['default'].getRestClient().getIdmApi().removeUserFromTeam(parentItem.IdmRole.Uuid, user.IdmUser.Login);
                })).then(function () {
                    _this3.reloadCurrentNode();
                });
                break;
            default:
                break;
        }
    },

    openPopover: function openPopover(event) {
        this.setState({
            popoverOpen: true,
            popoverAnchor: event.currentTarget
        });
    },

    closePopover: function closePopover() {
        this.setState({ popoverOpen: false });
    },

    reloadCurrentNode: function reloadCurrentNode() {
        var _this4 = this;

        this.state.selectedItem.leafLoaded = false;
        this.state.selectedItem.collectionsLoaded = false;
        this.onFolderClicked(this.state.selectedItem, function () {
            if (_this4.state.rightPaneItem) {
                (function () {
                    var rPaneId = _this4.state.rightPaneItem.id;
                    var foundItem = null;
                    var leafs = _this4.state.selectedItem.leafs || [];
                    var collections = _this4.state.selectedItem.collections || [];
                    [].concat(leafs, collections).forEach(function (leaf) {
                        if (leaf.id === rPaneId) foundItem = leaf;
                    });
                    _this4.setState({ rightPaneItem: foundItem });
                })();
            }
        });
    },

    reloadCurrentAtPage: function reloadCurrentAtPage(letterOrRange) {
        this.state.selectedItem.leafLoaded = false;
        this.state.selectedItem.collectionsLoaded = false;
        if (letterOrRange === -1) {
            this.state.selectedItem.currentParams = null;
        } else if (letterOrRange.indexOf('-') !== -1) {
            this.state.selectedItem.range = letterOrRange;
        } else {
            this.state.selectedItem.range = null;
            this.state.selectedItem.currentParams = { alpha_pages: 'true', value: letterOrRange };
        }
        this.onFolderClicked(this.state.selectedItem);
    },

    reloadCurrentWithSearch: function reloadCurrentWithSearch(value) {
        if (!value) {
            this.reloadCurrentAtPage(-1);
            return;
        }
        this.state.selectedItem.leafLoaded = false;
        this.state.selectedItem.collectionsLoaded = false;
        this.state.selectedItem.currentParams = { has_search: true, value: value, existing_only: true };
        this.onFolderClicked(this.state.selectedItem);
    },

    render: function render() {
        var _this5 = this;

        var _props2 = this.props;
        var mode = _props2.mode;
        var getMessage = _props2.getMessage;
        var bookColumn = _props2.bookColumn;

        if (mode === 'popover') {

            var popoverStyle = this.props.popoverStyle || {};
            var popoverContainerStyle = this.props.popoverContainerStyle || {};
            var iconButtonStyle = this.props.popoverIconButtonStyle || {};
            var iconButton = _react2['default'].createElement(_materialUi.IconButton, {
                style: _extends({ position: 'absolute', padding: 15, zIndex: 100, right: 0, top: 25, display: this.state.loading ? 'none' : 'initial' }, iconButtonStyle),
                iconStyle: { fontSize: 19, color: 'rgba(0,0,0,0.6)' },
                iconClassName: 'mdi mdi-book-open-variant',
                onTouchTap: this.openPopover
            });
            if (this.props.popoverButton) {
                iconButton = _react2['default'].createElement(this.props.popoverButton.type, _extends({}, this.props.popoverButton.props, { onTouchTap: this.openPopover }));
            }
            return _react2['default'].createElement(
                'span',
                null,
                iconButton,
                _react2['default'].createElement(
                    _materialUi.Popover,
                    {
                        open: this.state.popoverOpen,
                        anchorEl: this.state.popoverAnchor,
                        anchorOrigin: { horizontal: 'right', vertical: 'top' },
                        targetOrigin: { horizontal: 'left', vertical: 'top' },
                        onRequestClose: this.closePopover,
                        style: _extends({ marginLeft: 20 }, popoverStyle),
                        zDepth: 2
                    },
                    _react2['default'].createElement(
                        'div',
                        { style: _extends({ width: 320, height: 420 }, popoverContainerStyle) },
                        _react2['default'].createElement(AddressBook, _extends({}, this.props, { mode: 'selector' }))
                    )
                )
            );
        }

        var _state = this.state;
        var selectedItem = _state.selectedItem;
        var root = _state.root;
        var rightPaneItem = _state.rightPaneItem;
        var createDialogItem = _state.createDialogItem;

        var leftColumnStyle = {
            backgroundColor: _materialUiStyles.colors.grey100,
            width: 256,
            overflowY: 'auto',
            overflowX: 'hidden'
        };
        var centerComponent = undefined,
            rightPanel = undefined,
            leftPanel = undefined,
            topActionsPanel = undefined,
            onEditLabel = undefined;

        if (selectedItem.id === 'search') {

            centerComponent = _react2['default'].createElement(_SearchPanel2['default'], {
                item: selectedItem,
                title: getMessage(583, ''),
                searchLabel: getMessage(595, ''),
                onItemClicked: this.onUserListItemClicked,
                onFolderClicked: this.onFolderClicked,
                mode: mode
            });
        } else if (selectedItem.type === 'remote') {

            centerComponent = _react2['default'].createElement(_SearchPanel2['default'], {
                item: selectedItem,
                params: { trusted_server_id: selectedItem.id },
                searchLabel: getMessage(595, ''),
                title: getMessage(596, '').replace('%s', selectedItem.label),
                onItemClicked: this.onUserListItemClicked,
                onFolderClicked: this.onFolderClicked,
                mode: mode
            });
        } else {

            var emptyStatePrimary = undefined;
            var emptyStateSecondary = undefined;
            var otherProps = {};
            if (selectedItem.id === 'teams') {
                emptyStatePrimary = getMessage(571, '');
                emptyStateSecondary = getMessage(572, '');
            } else if (selectedItem.id === 'ext') {
                emptyStatePrimary = getMessage(585, '');
                emptyStateSecondary = getMessage(586, '');
            } else if (selectedItem.IdmUser && selectedItem.IdmUser.IsGroup || selectedItem.id === 'PYDIO_GRP_/') {
                otherProps = {
                    showSubheaders: true,
                    paginatorType: !(selectedItem.currentParams && selectedItem.currentParams.has_search) && 'alpha',
                    paginatorCallback: this.reloadCurrentAtPage.bind(this),
                    enableSearch: !this.props.disableSearch,
                    searchLabel: getMessage(595, ''),
                    onSearch: this.reloadCurrentWithSearch.bind(this)
                };
            }

            if ((mode === 'book' || bookColumn) && selectedItem.IdmRole && selectedItem.IdmRole.IsTeam) {
                topActionsPanel = _react2['default'].createElement(_avatarActionsPanel2['default'], _extends({}, this.props, {
                    team: selectedItem,
                    userEditable: true,
                    reloadAction: function () {
                        _this5.reloadCurrentNode();
                    },
                    onDeleteAction: function () {
                        if (confirm(_this5.props.getMessage(278))) {
                            (function () {
                                var parent = selectedItem._parent;
                                _this5.setState({ selectedItem: parent }, function () {
                                    _this5.onDeleteAction(parent, [selectedItem], true);
                                });
                            })();
                        }
                    },
                    style: { backgroundColor: 'transparent', borderTop: 0, borderBottom: 0 }
                }));
                onEditLabel = function (item, newLabel) {
                    _pydioHttpApi2['default'].getRestClient().getIdmApi().updateTeamLabel(item.IdmRole.Uuid, newLabel, function () {
                        var parent = selectedItem._parent;
                        _this5.setState({ selectedItem: parent }, function () {
                            _this5.reloadCurrentNode();
                        });
                    });
                };
            }

            centerComponent = _react2['default'].createElement(_UsersList2['default'], _extends({
                item: selectedItem,
                onItemClicked: this.onUserListItemClicked,
                onFolderClicked: this.onFolderClicked,
                onCreateAction: this.onCreateAction,
                onDeleteAction: this.onDeleteAction,
                reloadAction: this.reloadCurrentNode.bind(this),
                onEditLabel: onEditLabel,
                loading: this.state.loading,
                mode: mode,
                bookColumn: bookColumn,
                emptyStatePrimaryText: emptyStatePrimary,
                emptyStateSecondaryText: emptyStateSecondary,
                onTouchTap: this.state.rightPaneItem ? function () {
                    _this5.setState({ rightPaneItem: null });
                } : null,
                actionsPanel: topActionsPanel,
                actionsForCell: this.props.actionsForCell
            }, otherProps));
        }
        var rightPanelStyle = _extends({}, leftColumnStyle, {
            position: 'absolute',
            transformOrigin: 'right',
            backgroundColor: 'white',
            right: 8,
            bottom: 8,
            top: 120,
            zIndex: 2
        });
        if (!rightPaneItem) {
            rightPanelStyle = _extends({}, rightPanelStyle, {
                //transform: 'translateX(256px)',
                transform: 'scale(0)'
            });
        }
        //                width: 0
        rightPanel = _react2['default'].createElement(_RightPanelCard2['default'], {
            pydio: this.props.pydio,
            onRequestClose: function () {
                _this5.setState({ rightPaneItem: null });
            },
            style: rightPanelStyle,
            onCreateAction: this.onCreateAction,
            onDeleteAction: this.onDeleteAction,
            onUpdateAction: this.onCardUpdateAction,
            item: rightPaneItem });
        if (mode === 'book') {
            (function () {
                var nestedRoots = [];
                root.collections.map((function (e) {
                    nestedRoots.push(_react2['default'].createElement(_NestedListItem2['default'], {
                        key: e.id,
                        selected: selectedItem.id,
                        nestedLevel: 0,
                        entry: e,
                        onTouchTap: this.onFolderClicked
                    }));
                    nestedRoots.push(_react2['default'].createElement(_materialUi.Divider, { key: e.id + '-divider' }));
                }).bind(_this5));
                nestedRoots.pop();
                leftPanel = _react2['default'].createElement(
                    MaterialUI.Paper,
                    { zDepth: 1, style: _extends({}, leftColumnStyle, { zIndex: 2 }) },
                    _react2['default'].createElement(
                        MaterialUI.List,
                        null,
                        nestedRoots
                    )
                );
            })();
        }

        var dialogTitle = undefined,
            dialogContent = undefined;
        if (createDialogItem) {
            if (createDialogItem.actions.type === 'users') {
                dialogTitle = getMessage(484, '');
                dialogContent = _react2['default'].createElement(
                    'div',
                    { style: { height: 500 } },
                    _react2['default'].createElement(_UserCreationForm2['default'], {
                        zDepth: 0,
                        style: { height: 500 },
                        newUserName: "",
                        onUserCreated: this.closeCreateDialogAndReload.bind(this),
                        onCancel: function () {
                            _this5.setState({ createDialogItem: null });
                        },
                        pydio: this.props.pydio
                    })
                );
            } else if (createDialogItem.actions.type === 'teams') {
                dialogTitle = getMessage(569, '');
                dialogContent = _react2['default'].createElement(_TeamCreationForm2['default'], {
                    onTeamCreated: this.closeCreateDialogAndReload,
                    onCancel: function () {
                        _this5.setState({ createDialogItem: null });
                    }
                });
            } else if (createDialogItem.actions.type === 'team') {
                var selectUser = function selectUser(item) {
                    _pydioHttpApi2['default'].getRestClient().getIdmApi().addUserToTeam(createDialogItem.IdmRole.Uuid, item.IdmUser.Login).then(function () {
                        _this5.reloadCurrentNode();
                    });
                };
                dialogTitle = null;
                dialogContent = _react2['default'].createElement(AddressBook, {
                    pydio: this.props.pydio,
                    mode: 'selector',
                    usersOnly: true,
                    disableSearch: true,
                    onItemSelected: selectUser
                });
            }
        }

        var style = this.props.style || {};
        return _react2['default'].createElement(
            'div',
            { style: _extends({ display: 'flex', height: mode === 'selector' ? 420 : 450 }, style) },
            leftPanel,
            centerComponent,
            rightPanel,
            _react2['default'].createElement(
                MaterialUI.Dialog,
                {
                    contentStyle: { width: 380, minWidth: 380, maxWidth: 380, padding: 0 },
                    bodyStyle: { padding: 0 },
                    title: _react2['default'].createElement(
                        'div',
                        { style: { padding: 20 } },
                        dialogTitle
                    ),
                    actions: null,
                    modal: false,
                    open: createDialogItem ? true : false,
                    onRequestClose: function () {
                        _this5.setState({ createDialogItem: null });
                    }
                },
                dialogContent
            )
        );
    }

});

exports['default'] = AddressBook = PydioContextConsumer(AddressBook);
exports['default'] = AddressBook = _materialUiStyles.muiThemeable()(AddressBook);
exports['default'] = AddressBook;
module.exports = exports['default'];

},{"../TeamCreationForm":40,"../UserCreationForm":41,"../avatar/ActionsPanel":53,"./Loaders":45,"./NestedListItem":46,"./RightPanelCard":47,"./SearchPanel":49,"./UsersList":52,"material-ui":"material-ui","material-ui/styles":"material-ui/styles","pydio":"pydio","pydio/http/api":"pydio/http/api","react":"react"}],44:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _materialUiStyles = require('material-ui/styles');

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _materialUi = require('material-ui');

/**
 * Alphabet and pages generator to give a first-letter-based pagination
 */

var _Pydio$requireLib = _pydio2['default'].requireLib('boot');

var PydioContextConsumer = _Pydio$requireLib.PydioContextConsumer;

var AlphaPaginator = (function (_Component) {
    _inherits(AlphaPaginator, _Component);

    function AlphaPaginator() {
        _classCallCheck(this, AlphaPaginator);

        _Component.apply(this, arguments);
    }

    AlphaPaginator.prototype.render = function render() {

        var letters = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
        letters = [-1].concat(letters);
        var _props = this.props;
        var item = _props.item;
        var paginatorCallback = _props.paginatorCallback;
        var style = _props.style;
        var getMessage = _props.getMessage;

        var paginator = undefined;
        if (item.pagination) {
            (function () {
                var _item$pagination = item.pagination;
                var start = _item$pagination.start;
                var end = _item$pagination.end;
                var max = _item$pagination.max;
                var interval = _item$pagination.interval;

                var total_pages = Math.ceil(max / interval);
                var current = Math.ceil(start / interval);
                var pages = [];
                for (var i = 0; i < total_pages; i++) {
                    pages.push(i);
                }paginator = React.createElement(
                    _materialUi.SelectField,
                    { floatingLabelText: getMessage(331), style: { width: 60 }, fullWidth: true, value: current, onChange: function (e, i, v) {
                            paginatorCallback(v * interval + '-' + (v + 1) * interval);
                        } },
                    pages.map(function (p) {
                        return React.createElement(_materialUi.MenuItem, { value: p, key: p, primaryText: p + 1 });
                    })
                );
            })();
        }

        var currentPage = item.currentParams && item.currentParams.alpha_pages && item.currentParams.value || -1;

        return React.createElement(
            'div',
            { style: _extends({}, style, { display: 'flex', paddingRight: 8, alignItems: 'center' }) },
            React.createElement(
                'div',
                { style: { flex: 1 } },
                getMessage(249, '')
            ),
            paginator,
            React.createElement(
                _materialUi.SelectField,
                { floatingLabelText: getMessage(625), style: { width: 60, marginLeft: 20 }, fullWidth: true, value: currentPage, onChange: function (e, i, v) {
                        paginatorCallback(v);
                    } },
                letters.map(function (l) {
                    return React.createElement(_materialUi.MenuItem, { value: l, key: l, primaryText: l === -1 ? getMessage(597, '') : l });
                })
            )
        );
    };

    return AlphaPaginator;
})(_react.Component);

AlphaPaginator.propTypes = {
    /**
     * Currently selected Item
     */
    item: _react.PropTypes.object,
    /**
     * When a letter is clicked, function(letter)
     */
    paginatorCallback: _react.PropTypes.func.isRequired,
    /**
     * Main instance of pydio
     */
    pydio: _react.PropTypes.instanceOf(_pydio2['default']),
    /**
     * Display mode, either large (book) or small picker ('selector', 'popover').
     */
    mode: _react.PropTypes.oneOf(['book', 'selector', 'popover']).isRequired
};

exports['default'] = AlphaPaginator = PydioContextConsumer(AlphaPaginator);
exports['default'] = AlphaPaginator = _materialUiStyles.muiThemeable()(AlphaPaginator);

exports['default'] = AlphaPaginator;
module.exports = exports['default'];

},{"material-ui":"material-ui","material-ui/styles":"material-ui/styles","pydio":"pydio","react":"react"}],45:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _pydioHttpApi = require('pydio/http/api');

var _pydioHttpApi2 = _interopRequireDefault(_pydioHttpApi);

var _pydioUtilLang = require('pydio/util/lang');

var _pydioUtilLang2 = _interopRequireDefault(_pydioUtilLang);

var IdmApi = _pydioHttpApi2['default'].getRestClient().getIdmApi();

var Loaders = (function () {
    function Loaders() {
        _classCallCheck(this, Loaders);
    }

    Loaders.childrenAsPromise = function childrenAsPromise(item) {
        var leaf = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
        var childrenLoader = item.childrenLoader;
        var itemsLoader = item.itemsLoader;
        var leafLoaded = item.leafLoaded;
        var collectionsLoaded = item.collectionsLoaded;
        var leafs = item.leafs;
        var collections = item.collections;

        var loader = leaf ? itemsLoader : childrenLoader;
        var loaded = leaf ? leafLoaded : collectionsLoaded;
        return new Promise(function (resolve, reject) {
            if (!loaded && loader) {
                loader(item, function (newChildren) {
                    if (leaf) {
                        item.leafs = newChildren;
                        item.leafLoaded = true;
                    } else {
                        item.collections = newChildren;
                        item.collectionsLoaded = true;
                    }
                    resolve(newChildren);
                });
            } else {
                var res = (leaf ? leafs : collections) || [];
                resolve(res);
            }
        });
    };

    Loaders.computePagination = function computePagination(result) {
        var count = undefined;
        if (result.Users) {
            count = result.Users.length;
        } else if (result.Groups) {
            count = result.Groups.length;
        } else if (result.Teams) {
            count = result.Teams.length;
        }
        if (result.Total > count) {
            return {
                start: result.Offset,
                end: result.Offset + result.Limit,
                max: result.Total,
                interval: result.Limit
            };
        } else {
            return null;
        }
    };

    Loaders.loadTeams = function loadTeams(entry, callback) {
        var offset = 0,
            limit = 50;
        if (entry.range) {
            var _entry$range$split = entry.range.split('-');

            var start = _entry$range$split[0];
            var end = _entry$range$split[1];

            offset = parseInt(start);
            end = parseInt(end);
            limit = end - offset;
        }
        IdmApi.listTeams('', offset, limit).then(function (collection) {
            entry.pagination = Loaders.computePagination(collection);
            var items = collection.Teams.map(function (team) {
                return {
                    _parent: entry,
                    id: team.Uuid,
                    label: team.Label,
                    icon: 'mdi mdi-account-multiple-outline',
                    itemsLoader: Loaders.loadTeamUsers,
                    actions: {
                        type: 'team',
                        remove: '574',
                        multiple: true
                    },
                    _notSelectable: true,
                    IdmRole: team
                };
            });
            callback(items);
        });
    };

    Loaders.loadGroups = function loadGroups(entry, callback) {
        var path = '/',
            filter = '';
        if (entry.IdmUser) {
            path = _pydioUtilLang2['default'].trimRight(entry.IdmUser.GroupPath, '/') + '/' + entry.IdmUser.GroupLabel;
        }
        if (entry.currentParams && entry.currentParams.has_search) {
            filter = entry.currentParams.value;
        }

        IdmApi.listGroups(path, filter, false, 0, 1000).then(function (groups) {
            var items = groups.Groups.map(function (idmUser) {
                return {
                    _parent: entry,
                    id: idmUser.Uuid,
                    label: idmUser.GroupLabel,
                    type: 'group',
                    icon: 'mdi mdi-account-multiple',
                    childrenLoader: entry.childrenLoader ? Loaders.loadGroups : null,
                    itemsLoader: entry.itemsLoader ? Loaders.loadGroupUsers : null,
                    currentParams: entry.currentParams && entry.currentParams.alpha_pages ? _extends({}, entry.currentParams) : {},
                    IdmUser: idmUser
                };
            });
            callback(items);
        });
    };

    Loaders.loadExternalUsers = function loadExternalUsers(entry, callback) {
        var filter = '',
            offset = 0,
            limit = 50;
        if (entry.currentParams && entry.currentParams.alpha_pages) {
            filter = entry.currentParams.value;
        }
        if (entry.range) {
            var _entry$range$split2 = entry.range.split('-');

            var start = _entry$range$split2[0];
            var end = _entry$range$split2[1];

            offset = parseInt(start);
            end = parseInt(end);
            limit = end - offset;
        }
        IdmApi.listUsers('/', filter, true, offset, limit, 'shared').then(function (users) {
            entry.pagination = Loaders.computePagination(users);
            var items = users.Users.map(function (idmUser) {
                return {
                    _parent: entry,
                    id: idmUser.Login,
                    label: idmUser.Attributes && idmUser.Attributes["displayName"] ? idmUser.Attributes["displayName"] : idmUser.Login,
                    avatar: idmUser.Attributes && idmUser.Attributes["avatar"] ? idmUser.Attributes["avatar"] : undefined,
                    type: 'user',
                    external: true,
                    IdmUser: idmUser
                };
            });
            callback(items);
        });
    };

    Loaders.loadGroupUsers = function loadGroupUsers(entry, callback) {
        var path = '/',
            filter = '',
            offset = 0,
            limit = 50;
        if (entry.IdmUser) {
            path = _pydioUtilLang2['default'].trimRight(entry.IdmUser.GroupPath, '/') + '/' + entry.IdmUser.GroupLabel;
        }
        if (entry.currentParams && (entry.currentParams.alpha_pages || entry.currentParams.has_search)) {
            filter = entry.currentParams.value;
        }
        if (entry.range) {
            var _entry$range$split3 = entry.range.split('-');

            var start = _entry$range$split3[0];
            var end = _entry$range$split3[1];

            offset = parseInt(start);
            end = parseInt(end);
            limit = end - offset;
        }
        IdmApi.listUsers(path, filter, false, offset, limit, '!shared').then(function (users) {
            entry.pagination = Loaders.computePagination(users);
            var items = users.Users.map(function (idmUser) {
                return {
                    _parent: entry,
                    id: idmUser.Login,
                    label: idmUser.Attributes && idmUser.Attributes["displayName"] ? idmUser.Attributes["displayName"] : idmUser.Login,
                    avatar: idmUser.Attributes && idmUser.Attributes["avatar"] ? idmUser.Attributes["avatar"] : undefined,
                    type: 'user',
                    IdmUser: idmUser
                };
            });
            callback(items);
        });
    };

    Loaders.loadTeamUsers = function loadTeamUsers(entry, callback) {
        var offset = 0,
            limit = 50;
        if (entry.range) {
            var _entry$range$split4 = entry.range.split('-');

            var start = _entry$range$split4[0];
            var end = _entry$range$split4[1];

            offset = parseInt(start);
            end = parseInt(end);
            limit = end - offset;
        }
        IdmApi.listUsersWithRole(entry.IdmRole.Uuid, offset, limit).then(function (users) {
            entry.pagination = Loaders.computePagination(users);
            var items = users.Users.map(function (idmUser) {
                return {
                    _parent: entry,
                    id: idmUser.Login,
                    label: idmUser.Attributes && idmUser.Attributes["displayName"] ? idmUser.Attributes["displayName"] : idmUser.Login,
                    type: 'user',
                    IdmUser: idmUser
                };
            });
            callback(items);
        });
    };

    return Loaders;
})();

exports['default'] = Loaders;
module.exports = exports['default'];

},{"pydio/http/api":"pydio/http/api","pydio/util/lang":"pydio/util/lang"}],46:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _materialUi = require('material-ui');

/**
 * Left panel of the address book
 * Display treeview hierarchy of users, teams, groups.
 */

var NestedListItem = (function (_Component) {
    _inherits(NestedListItem, _Component);

    function NestedListItem() {
        _classCallCheck(this, NestedListItem);

        _Component.apply(this, arguments);
    }

    /**
     * Triggers this.props.onTouchTap
     */

    NestedListItem.prototype.onTouchTap = function onTouchTap() {
        this.props.onTouchTap(this.props.entry);
    };

    /**
     * Recursively build other NestedListItem
     * @param data
     */

    NestedListItem.prototype.buildNestedItems = function buildNestedItems(data) {
        return data.map((function (entry) {
            return React.createElement(NestedListItem, {
                nestedLevel: this.props.nestedLevel + 1,
                entry: entry,
                onTouchTap: this.props.onTouchTap,
                selected: this.props.selected,
                showIcons: true
            });
        }).bind(this));
    };

    NestedListItem.prototype.render = function render() {
        var _props = this.props;
        var showIcons = _props.showIcons;
        var entry = _props.entry;
        var selected = _props.selected;
        var id = entry.id;
        var label = entry.label;
        var icon = entry.icon;

        var children = entry.collections || [];
        var nested = this.buildNestedItems(children);
        var fontIcon = undefined;
        if (icon && showIcons) {
            fontIcon = React.createElement(_materialUi.FontIcon, { className: icon });
        }
        return React.createElement(_materialUi.ListItem, {
            nestedLevel: this.props.nestedLevel,
            key: id,
            primaryText: label,
            onTouchTap: this.onTouchTap.bind(this),
            nestedItems: nested,
            initiallyOpen: true,
            leftIcon: fontIcon,
            innerDivStyle: { fontWeight: selected === entry.id ? 500 : 400 },
            style: selected === entry.id ? { backgroundColor: "#efefef" } : {}
        });
    };

    return NestedListItem;
})(_react.Component);

NestedListItem.propTypes = {
    /**
     * Keeps track of the current depth level
     */
    nestedLevel: _react.PropTypes.number,
    /**
     * Currently selected node id
     */
    selected: _react.PropTypes.string,
    /**
     * Callback triggered when an entry is selected
     */
    onTouchTap: _react.PropTypes.func
};

exports['default'] = NestedListItem;
module.exports = exports['default'];

},{"material-ui":"material-ui","react":"react"}],47:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _TeamCard = require('./TeamCard');

var _TeamCard2 = _interopRequireDefault(_TeamCard);

var _UserCard = require('./UserCard');

var _UserCard2 = _interopRequireDefault(_UserCard);

var React = require('react');

var _require = require('material-ui');

var Paper = _require.Paper;
var IconButton = _require.IconButton;

/**
 * Container for UserCard or TeamCard
 */

var RightPanelCard = (function (_React$Component) {
  _inherits(RightPanelCard, _React$Component);

  function RightPanelCard() {
    _classCallCheck(this, RightPanelCard);

    _React$Component.apply(this, arguments);
  }

  RightPanelCard.prototype.render = function render() {

    var content = undefined;
    var item = this.props.item || {};
    if (item.type === 'user') {
      content = React.createElement(_UserCard2['default'], this.props);
    } else if (item.IdmRole && item.IdmRole.IsTeam) {
      content = React.createElement(_TeamCard2['default'], this.props);
    }

    return React.createElement(
      Paper,
      { zDepth: 2, style: _extends({ position: 'relative' }, this.props.style) },
      React.createElement(IconButton, { iconClassName: "mdi mdi-close", style: { position: 'absolute', top: 0, right: 0 }, iconStyle: { color: '#e0e0e0' }, onTouchTap: this.props.onRequestClose }),
      content
    );
  };

  return RightPanelCard;
})(React.Component);

RightPanelCard.propTypes = {
  /**
   * Pydio instance
   */
  pydio: React.PropTypes.instanceOf(Pydio),
  /**
   * Selected item
   */
  item: React.PropTypes.object,
  /**
   * Applies to root container
   */
  style: React.PropTypes.object,
  /**
   * Forwarded to child
   */
  onRequestClose: React.PropTypes.func,
  /**
   * Forwarded to child
   */
  onDeleteAction: React.PropTypes.func,
  /**
   * Forwarded to child
   */
  onUpdateAction: React.PropTypes.func
};

exports['default'] = RightPanelCard;
module.exports = exports['default'];

},{"./TeamCard":50,"./UserCard":51,"material-ui":"material-ui","react":"react"}],48:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _materialUi = require('material-ui');

var _lodashDebounce = require('lodash.debounce');

var _lodashDebounce2 = _interopRequireDefault(_lodashDebounce);

/**
 * Ready to use Form + Result List for search users
 */

var SearchForm = (function (_Component) {
    _inherits(SearchForm, _Component);

    function SearchForm(props, context) {
        _classCallCheck(this, SearchForm);

        _Component.call(this, props, context);
        this.state = { value: '' };
        this.search = _lodashDebounce2['default'](this.search.bind(this), 300);
    }

    SearchForm.prototype.search = function search() {
        this.props.onSearch(this.state.value);
    };

    SearchForm.prototype.onChange = function onChange(event, value) {
        this.setState({ value: value });
        this.search();
    };

    SearchForm.prototype.render = function render() {
        var _props = this.props;
        var underlineShow = _props.underlineShow;
        var searchLabel = _props.searchLabel;
        var style = _props.style;
        var value = this.state.value;

        return React.createElement(
            'div',
            { style: _extends({ minWidth: 320 }, style) },
            React.createElement(_materialUi.TextField, {
                fullWidth: true,
                value: value,
                onChange: this.onChange.bind(this),
                hintText: searchLabel,
                underlineShow: underlineShow === undefined ? true : underlineShow
            })
        );
    };

    return SearchForm;
})(_react.Component);

SearchForm.propTypes = {
    /**
     * Label displayed in the search field
     */
    searchLabel: _react.PropTypes.string.isRequired,
    /**
     * Callback triggered to search
     */
    onSearch: _react.PropTypes.func.isRequired,
    /**
     * Will be appended to the root element
     */
    style: _react.PropTypes.object,
    /**
     * To be applied on TextField
     */
    underlineShow: _react.PropTypes.bool
};

exports['default'] = SearchForm;
module.exports = exports['default'];

},{"lodash.debounce":"lodash.debounce","material-ui":"material-ui","react":"react"}],49:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _SearchForm = require('./SearchForm');

var _SearchForm2 = _interopRequireDefault(_SearchForm);

var _UsersList = require('./UsersList');

var _UsersList2 = _interopRequireDefault(_UsersList);

var _Loaders = require('./Loaders');

var _Loaders2 = _interopRequireDefault(_Loaders);

/**
 * Ready to use Form + Result List for search users
 */

var _require = require('react');

var Component = _require.Component;
var PropTypes = _require.PropTypes;

var _require$requireLib = require('pydio').requireLib('boot');

var PydioContextConsumer = _require$requireLib.PydioContextConsumer;

var SearchPanel = (function (_Component) {
    _inherits(SearchPanel, _Component);

    function SearchPanel(props, context) {
        _classCallCheck(this, SearchPanel);

        _Component.call(this, props.context);
        this.state = { items: [] };
    }

    SearchPanel.prototype.onSearch = function onSearch(value) {
        var _this = this;

        if (!value) {
            this.setState({ items: [] });
            return;
        }
        var params = { value: value, existing_only: 'true' };
        if (this.props.params) {
            params = _extends({}, params, this.props.params);
        }
        _Loaders2['default'].listUsers(params, function (children) {
            _this.setState({ items: children });
        });
    };

    SearchPanel.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props;
        var mode = _props.mode;
        var item = _props.item;
        var getMessage = _props.getMessage;

        return React.createElement(
            'div',
            { style: { flex: 1, display: 'flex', flexDirection: 'column' } },
            React.createElement(
                'div',
                { style: { padding: 10, height: 56, backgroundColor: this.state.select ? activeTbarColor : '#fafafa', display: 'flex', alignItems: 'center', transition: DOMUtils.getBeziersTransition() } },
                mode === "selector" && item._parent && React.createElement(MaterialUI.IconButton, { iconClassName: 'mdi mdi-chevron-left', onTouchTap: function () {
                        _this2.props.onFolderClicked(item._parent);
                    } }),
                mode === 'book' && React.createElement(
                    'div',
                    { style: { fontSize: 20, color: 'rgba(0,0,0,0.87)', flex: 1 } },
                    this.props.title
                ),
                React.createElement(_SearchForm2['default'], { style: mode === 'book' ? { minWidth: 320 } : { flex: 1 }, searchLabel: this.props.searchLabel, onSearch: this.onSearch.bind(this) })
            ),
            React.createElement(_UsersList2['default'], {
                mode: this.props.mode,
                onItemClicked: this.props.onItemClicked,
                item: { leafs: this.state.items },
                noToolbar: true,
                emptyStatePrimaryText: getMessage(587, ''),
                emptyStateSecondaryText: getMessage(588, '')
            })
        );
    };

    return SearchPanel;
})(Component);

SearchPanel.propTypes = {
    /**
     * Optional parameters added to listUsers() request
     */
    params: PropTypes.object,
    /**
     * Label displayed in the toolbar
     */
    searchLabel: PropTypes.string,
    /**
     * Callback triggered when a search result is clicked
     */
    onItemClicked: PropTypes.func,
    /**
     * Currently selected item, required for navigation
     */
    item: PropTypes.object,
    /**
     * Callback triggered if the result is a collection
     */
    onFolderClicked: PropTypes.func
};

exports['default'] = SearchPanel = PydioContextConsumer(SearchPanel);
exports['default'] = SearchPanel;
module.exports = exports['default'];

},{"./Loaders":45,"./SearchForm":48,"./UsersList":52,"pydio":"pydio","react":"react"}],50:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _UsersList = require('./UsersList');

var _UsersList2 = _interopRequireDefault(_UsersList);

var _Loaders = require('./Loaders');

var _Loaders2 = _interopRequireDefault(_Loaders);

var _avatarActionsPanel = require('../avatar/ActionsPanel');

var _avatarActionsPanel2 = _interopRequireDefault(_avatarActionsPanel);

var _pydioHttpApi = require('pydio/http/api');

var _pydioHttpApi2 = _interopRequireDefault(_pydioHttpApi);

var React = require('react');

var _require = require('material-ui');

var TextField = _require.TextField;
var FlatButton = _require.FlatButton;
var CardTitle = _require.CardTitle;
var Divider = _require.Divider;

var _require$requireLib = require('pydio').requireLib('boot');

var PydioContextConsumer = _require$requireLib.PydioContextConsumer;

/**
 * Display info about a Team inside a popover-able card
 */

var TeamCard = (function (_React$Component) {
    _inherits(TeamCard, _React$Component);

    function TeamCard(props, context) {
        _classCallCheck(this, TeamCard);

        _React$Component.call(this, props, context);
        this.state = { label: this.props.item.label };
    }

    /**
     * Use loader to get team participants
     * @param item
     */

    TeamCard.prototype.loadMembers = function loadMembers(item) {
        var _this = this;

        this.setState({ loading: true });
        _Loaders2['default'].childrenAsPromise(item, false).then(function (children) {
            _Loaders2['default'].childrenAsPromise(item, true).then(function (children) {
                _this.setState({ members: item.leafs, loading: false });
            });
        });
    };

    TeamCard.prototype.componentWillMount = function componentWillMount() {
        this.loadMembers(this.props.item);
    };

    TeamCard.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.loadMembers(nextProps.item);
        this.setState({ label: nextProps.item.label });
    };

    TeamCard.prototype.onLabelChange = function onLabelChange(e, value) {
        this.setState({ label: value });
    };

    TeamCard.prototype.updateLabel = function updateLabel() {
        var _this2 = this;

        if (this.state.label !== this.props.item.label) {
            _pydioHttpApi2['default'].getRestClient().getIdmApi().updateTeamLabel(this.props.item.IdmRole.Uuid, this.state.label, function () {
                _this2.props.onUpdateAction(_this2.props.item);
            });
        }
        this.setState({ editMode: false });
    };

    TeamCard.prototype.render = function render() {
        var _this3 = this;

        var _props = this.props;
        var item = _props.item;
        var onDeleteAction = _props.onDeleteAction;
        var onCreateAction = _props.onCreateAction;
        var getMessage = _props.getMessage;

        var editProps = {
            team: item,
            userEditable: this.props.item.IdmRole.PoliciesContextEditable,
            onDeleteAction: function onDeleteAction() {
                _this3.props.onDeleteAction(item._parent, [item]);
            },
            onEditAction: function onEditAction() {
                _this3.setState({ editMode: !_this3.state.editMode });
            },
            reloadAction: function reloadAction() {
                _this3.props.onUpdateAction(item);
            }
        };

        var title = undefined;
        if (this.state.editMode) {
            title = React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center', margin: 16 } },
                React.createElement(TextField, { style: { flex: 1, fontSize: 24 }, fullWidth: true, disabled: false, underlineShow: false, value: this.state.label, onChange: this.onLabelChange.bind(this) }),
                React.createElement(FlatButton, { secondary: true, label: getMessage(48), onTouchTap: function () {
                        _this3.updateLabel();
                    } })
            );
        } else {
            title = React.createElement(CardTitle, { title: this.state.label, subtitle: item.leafs && item.leafs.length ? getMessage(576).replace('%s', item.leafs.length) : getMessage(577) });
        }
        var _props2 = this.props;
        var style = _props2.style;

        var otherProps = _objectWithoutProperties(_props2, ['style']);

        return React.createElement(
            'div',
            null,
            title,
            React.createElement(_avatarActionsPanel2['default'], _extends({}, otherProps, editProps)),
            React.createElement(Divider, null),
            React.createElement(_UsersList2['default'], { subHeader: getMessage(575), onItemClicked: function () {}, item: item, mode: 'inner', onDeleteAction: onDeleteAction })
        );
    };

    return TeamCard;
})(React.Component);

TeamCard.propTypes = {
    /**
     * Pydio instance
     */
    pydio: React.PropTypes.instanceOf(Pydio),
    /**
     * Team data object
     */
    item: React.PropTypes.object,
    /**
     * Applied to root container
     */
    style: React.PropTypes.object,
    /**
     * Called to dismiss the popover
     */
    onRequestClose: React.PropTypes.func,
    /**
     * Delete current team
     */
    onDeleteAction: React.PropTypes.func,
    /**
     * Update current team
     */
    onUpdateAction: React.PropTypes.func
};

exports['default'] = TeamCard = PydioContextConsumer(TeamCard);

exports['default'] = TeamCard;
module.exports = exports['default'];

},{"../avatar/ActionsPanel":53,"./Loaders":45,"./UsersList":52,"material-ui":"material-ui","pydio":"pydio","pydio/http/api":"pydio/http/api","react":"react"}],51:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _avatarUserAvatar = require('../avatar/UserAvatar');

var _avatarUserAvatar2 = _interopRequireDefault(_avatarUserAvatar);

var _UserCreationForm = require('../UserCreationForm');

var _UserCreationForm2 = _interopRequireDefault(_UserCreationForm);

/**
 * Card presentation of a user. Relies on the UserAvatar object,
 * plus the PydioForm.UserCreationForm when in edit mode.
 */

var UserCard = (function (_React$Component) {
    _inherits(UserCard, _React$Component);

    function UserCard(props, context) {
        _classCallCheck(this, UserCard);

        _React$Component.call(this, props, context);
        this.state = { editForm: false };
    }

    UserCard.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.item !== this.props.item) {
            this.setState({ editForm: false });
        }
    };

    UserCard.prototype.render = function render() {
        var _this = this;

        var item = this.props.item;

        var editableProps = {},
            editForm = undefined;
        if (item._parent && item._parent.id === 'ext') {
            editableProps = {
                userEditable: item.IdmUser.PoliciesContextEditable,
                onDeleteAction: function onDeleteAction() {
                    _this.props.onDeleteAction(item._parent, [item]);
                },
                onEditAction: function onEditAction() {
                    _this.setState({ editForm: true });
                },
                reloadAction: function reloadAction() {
                    _this.props.onUpdateAction(item);
                }
            };
        }

        if (this.state.editForm) {
            editForm = _react2['default'].createElement(_UserCreationForm2['default'], {
                pydio: this.props.pydio,
                zDepth: 0,
                style: { flex: 1 },
                newUserName: item.id,
                editMode: true,
                userData: item,
                onUserCreated: function () {
                    _this.props.onUpdateAction(item);_this.setState({ editForm: false });
                },
                onCancel: function () {
                    _this.setState({ editForm: false });
                }
            });
            editableProps = _extends({}, editableProps, {
                displayLabel: true,
                displayAvatar: true,
                useDefaultAvatar: true,
                style: { textAlign: 'center', borderBottom: '1px solid #e0e0e0', padding: 10, backgroundColor: '#fafafa' },
                avatarStyle: { marginBottom: 16 }
            });
        }

        return _react2['default'].createElement(
            'div',
            { style: editForm ? { height: '100%', display: 'flex', flexDirection: 'column' } : {} },
            _react2['default'].createElement(_avatarUserAvatar2['default'], _extends({
                userId: this.props.item.id,
                richCard: !editForm,
                pydio: this.props.pydio,
                cardSize: this.props.style.width
            }, editableProps)),
            editForm
        );
    };

    return UserCard;
})(_react2['default'].Component);

UserCard.propTypes = {
    /**
     * Pydio instance
     */
    pydio: _react2['default'].PropTypes.instanceOf(Pydio),
    /**
     * Team data object
     */
    item: _react2['default'].PropTypes.object,
    /**
     * Applied to root container
     */
    style: _react2['default'].PropTypes.object,
    /**
     * Called to dismiss the popover
     */
    onRequestClose: _react2['default'].PropTypes.func,
    /**
     * Delete current team
     */
    onDeleteAction: _react2['default'].PropTypes.func,
    /**
     * Update current team
     */
    onUpdateAction: _react2['default'].PropTypes.func
};

exports['default'] = UserCard;
module.exports = exports['default'];

},{"../UserCreationForm":41,"../avatar/UserAvatar":56,"react":"react"}],52:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _avatarUserAvatar = require('../avatar/UserAvatar');

var _avatarUserAvatar2 = _interopRequireDefault(_avatarUserAvatar);

var _materialUi = require('material-ui');

var _materialUiStyles = require('material-ui/styles');

var _viewsEmptyStateView = require('../../views/EmptyStateView');

var _viewsEmptyStateView2 = _interopRequireDefault(_viewsEmptyStateView);

var _AlphaPaginator = require('./AlphaPaginator');

var _AlphaPaginator2 = _interopRequireDefault(_AlphaPaginator);

var _SearchForm = require('./SearchForm');

var _SearchForm2 = _interopRequireDefault(_SearchForm);

var _pydioUtilDom = require('pydio/util/dom');

var _pydioUtilDom2 = _interopRequireDefault(_pydioUtilDom);

var _avatarCellActionsRenderer = require('../avatar/CellActionsRenderer');

var _avatarCellActionsRenderer2 = _interopRequireDefault(_avatarCellActionsRenderer);

var _require$requireLib = require('pydio').requireLib('boot');

var Loader = _require$requireLib.Loader;
var PydioContextConsumer = _require$requireLib.PydioContextConsumer;

var UsersList = (function (_React$Component) {
    _inherits(UsersList, _React$Component);

    function UsersList(props, context) {
        _classCallCheck(this, UsersList);

        _React$Component.call(this, props, context);
        this.state = { select: false, selection: [], editLabel: false };
    }

    UsersList.prototype.onLabelKeyEnter = function onLabelKeyEnter(e) {
        if (e.key === 'Enter') {
            this.updateLabel();
        }
    };

    UsersList.prototype.onLabelChange = function onLabelChange(e, value) {
        this.setState({ label: value });
    };

    UsersList.prototype.updateLabel = function updateLabel() {
        if (this.state.label !== this.props.item.label) {
            this.props.onEditLabel(this.props.item, this.state.label);
        }
        this.setState({ editLabel: false });
    };

    UsersList.prototype.render = function render() {
        var _this = this;

        var _props = this.props;
        var item = _props.item;
        var mode = _props.mode;
        var paginatorType = _props.paginatorType;
        var loading = _props.loading;
        var enableSearch = _props.enableSearch;
        var showSubheaders = _props.showSubheaders;
        var getMessage = _props.getMessage;
        var actionsPanel = _props.actionsPanel;
        var muiTheme = _props.muiTheme;
        var bookColumn = _props.bookColumn;
        var pydio = _props.pydio;
        var reloadAction = _props.reloadAction;

        var folders = item.collections || [];
        var leafs = item.leafs || [];
        var foldersSubHeader = folders.length && (leafs.length || showSubheaders) ? [{ subheader: getMessage('532') }] : [];
        var usersSubHeader = [];
        if (showSubheaders || paginatorType) {
            usersSubHeader = [{ subheader: paginatorType ? _react2['default'].createElement(_AlphaPaginator2['default'], _extends({}, this.props, { style: { lineHeight: '20px', padding: '14px 0' } })) : getMessage('249') }];
        }
        var items = [].concat(foldersSubHeader, folders, usersSubHeader, leafs);
        var total = items.length;
        var elements = [];
        var toggleSelect = function toggleSelect() {
            _this.setState({ select: !_this.state.select, selection: [] });
        };
        var createAction = function createAction() {
            _this.props.onCreateAction(item);
        };
        var deleteAction = function deleteAction() {
            _this.props.onDeleteAction(item, _this.state.selection);_this.setState({ select: false, selection: [] });
        };

        var accentColor = muiTheme.palette.accent2Color;
        var appBar = muiTheme.appBar;
        var stylesProps = {
            toolbarHeight: mode === 'book' ? 56 : 48,
            toolbarBgColor: mode === 'book' ? this.state.select ? accentColor : '#fafafa' : appBar.color,
            titleFontsize: mode === 'book' ? 20 : 16,
            titleFontWeight: 400,
            titleColor: mode === 'book' ? this.state.select ? 'white' : 'rgba(0,0,0,0.87)' : appBar.textColor,
            titlePadding: 10,
            button: {
                border: '1px solid ' + accentColor,
                borderRadius: '50%',
                margin: '0 4px',
                width: 36,
                height: 36,
                padding: 6
            },
            icon: {
                fontSize: 22,
                color: accentColor
            }
        };
        if (bookColumn) {
            stylesProps.toolbarBgColor = 'transparent';
            stylesProps.titleColor = 'rgba(0,0,0,0.54)';
            stylesProps.titleFontsize = 14;
            stylesProps.titleFontWeight = 500;
            stylesProps.titlePadding = '10px 16px';
            stylesProps.button.border = '0';
            stylesProps.icon.color = muiTheme.palette.primary1Color;
        }

        var label = item.label;
        if (this.props.onEditLabel && !this.state.select) {
            if (this.state.editLabel) {
                label = _react2['default'].createElement(
                    'div',
                    { style: { display: 'flex', alignItems: 'center', flex: 1 } },
                    _react2['default'].createElement(_materialUi.TextField, { style: { fontSize: 20 }, value: this.state.label, onChange: this.onLabelChange.bind(this), onKeyDown: this.onLabelKeyEnter.bind(this) }),
                    _react2['default'].createElement(_materialUi.IconButton, { iconStyle: { color: '#e0e0e0' }, secondary: true, iconClassName: "mdi mdi-content-save", tooltip: getMessage(48), onTouchTap: function () {
                            _this.updateLabel();
                        } })
                );
            } else {
                label = _react2['default'].createElement(
                    'div',
                    { style: { display: 'flex', alignItems: 'center', flex: 1 } },
                    label,
                    _react2['default'].createElement(_materialUi.IconButton, { iconStyle: { color: '#e0e0e0' }, iconClassName: "mdi mdi-pencil", tooltip: getMessage(48), onTouchTap: function () {
                            _this.setState({ editLabel: true, label: item.label });
                        } })
                );
            }
        }
        var createIcon = 'mdi mdi-account-plus';
        if (item.actions && item.actions.type === 'teams') {
            createIcon = 'mdi mdi-account-multiple-plus';
        }
        var toolbar = _react2['default'].createElement(
            'div',
            { style: { padding: stylesProps.titlePadding, height: stylesProps.toolbarHeight, backgroundColor: stylesProps.toolbarBgColor, borderRadius: '2px 2px 0 0', display: 'flex', alignItems: 'center', transition: _pydioUtilDom2['default'].getBeziersTransition() } },
            mode === "selector" && item._parent && _react2['default'].createElement(_materialUi.IconButton, { style: { marginLeft: -10 }, iconClassName: 'mdi mdi-chevron-left', onTouchTap: function () {
                    _this.props.onFolderClicked(item._parent);
                } }),
            mode === 'book' && total > 0 && item.actions && item.actions.multiple && _react2['default'].createElement(_materialUi.Checkbox, { style: { width: 'initial', marginLeft: this.state.select ? 7 : 14 }, checked: this.state.select, onCheck: toggleSelect }),
            _react2['default'].createElement(
                'div',
                { style: { flex: 2, fontSize: stylesProps.titleFontsize, color: stylesProps.titleColor, fontWeight: stylesProps.titleFontWeight } },
                label
            ),
            (mode === 'book' || mode === 'selector' && bookColumn) && item.actions && item.actions.create && !this.state.select && _react2['default'].createElement(_materialUi.IconButton, { style: stylesProps.button, iconStyle: stylesProps.icon, iconClassName: createIcon, tooltipPosition: "bottom-left", tooltip: getMessage(item.actions.create), onTouchTap: createAction }),
            bookColumn && !item._parent && _react2['default'].createElement(_materialUi.IconButton, { style: stylesProps.button, iconStyle: stylesProps.icon, iconClassName: "mdi mdi-window-restore", tooltipPosition: "bottom-left", tooltip: pydio.MessageHash['411'], onTouchTap: function () {
                    pydio.Controller.fireAction('open_address_book');
                } }),
            mode === 'book' && item.actions && item.actions.remove && this.state.select && _react2['default'].createElement(_materialUi.RaisedButton, { secondary: true, label: getMessage(item.actions.remove), disabled: !this.state.selection.length, onTouchTap: deleteAction }),
            !this.state.select && actionsPanel,
            enableSearch && !bookColumn && _react2['default'].createElement(_SearchForm2['default'], { searchLabel: this.props.searchLabel, onSearch: this.props.onSearch, style: { flex: 1, minWidth: 200 } }),
            reloadAction && (mode === 'book' || mode === 'selector' && bookColumn) && _react2['default'].createElement(_materialUi.IconButton, { style: stylesProps.button, iconStyle: stylesProps.icon, iconClassName: "mdi mdi-refresh", tooltipPosition: "bottom-left", tooltip: pydio.MessageHash['149'], onTouchTap: reloadAction, disabled: loading })
        );
        // PARENT NODE
        if (item._parent && mode === 'book' && item._parent._parent && item._parent.id !== 'teams') {
            elements.push(_react2['default'].createElement(_materialUi.ListItem, {
                key: '__parent__',
                primaryText: "..",
                onTouchTap: function (e) {
                    e.stopPropagation();_this.props.onFolderClicked(item._parent);
                },
                leftAvatar: _react2['default'].createElement(_materialUi.Avatar, { icon: _react2['default'].createElement(_materialUi.FontIcon, { className: 'mdi mdi-arrow-up' }), size: 36 })
            }));
            if (total) {
                elements.push(_react2['default'].createElement(_materialUi.Divider, { inset: true, key: 'parent-divider' }));
            }
        }
        // ITEMS
        items.forEach((function (item, index) {
            var _this2 = this;

            if (item.subheader) {
                elements.push(_react2['default'].createElement(
                    _materialUi.Subheader,
                    { key: item.subheader },
                    item.subheader
                ));
                return;
            }
            var fontIcon = _react2['default'].createElement(_avatarUserAvatar2['default'], { avatarSize: 36, pydio: this.props.pydio || pydio,
                userId: item.id,
                userLabel: item.label,
                avatar: item.avatar,
                icon: item.icon,
                idmUser: item.IdmUser,
                avatarOnly: true,
                useDefaultAvatar: true
            });
            var rightIconButton = undefined;
            var touchTap = function touchTap(e) {
                e.stopPropagation();_this2.props.onItemClicked(item);
            };
            if (folders.indexOf(item) > -1 && this.props.onFolderClicked) {
                touchTap = function (e) {
                    e.stopPropagation();_this2.props.onFolderClicked(item);
                };
                if (mode === 'selector' && !item._notSelectable) {
                    rightIconButton = _react2['default'].createElement(_materialUi.IconButton, {
                        iconClassName: "mdi mdi-account-multiple-plus",
                        tooltip: "Select this group",
                        tooltipPosition: 'bottom-left',
                        onTouchTap: function () {
                            _this2.props.onItemClicked(item);
                        }
                    });
                }
            } else if (mode === 'inner' && this.props.onDeleteAction) {
                rightIconButton = _react2['default'].createElement(_materialUi.IconButton, {
                    iconClassName: "mdi mdi-delete",
                    tooltip: getMessage(257),
                    tooltipPosition: 'bottom-left',
                    iconStyle: { color: 'rgba(0,0,0,0.13)', hoverColor: 'rgba(0,0,0,0.53)' },
                    onTouchTap: function () {
                        _this2.props.onDeleteAction(_this2.props.item, [item]);
                    }
                });
            }
            if (bookColumn && this.props.actionsForCell && item.type) {
                var menuItems = new _avatarCellActionsRenderer2['default'](pydio, this.props.actionsForCell, null, item).renderItems();
                if (menuItems.length) {
                    rightIconButton = _react2['default'].createElement(
                        _materialUi.IconMenu,
                        {
                            iconButtonElement: _react2['default'].createElement(_materialUi.IconButton, { iconClassName: 'mdi mdi-dots-vertical', iconStyle: { color: 'rgba(0,0,0,.33)' } }),
                            targetOrigin: { horizontal: 'right', vertical: 'top' },
                            anchorOrigin: { horizontal: 'right', vertical: 'top' }
                        },
                        menuItems
                    );
                }
            }
            var select = function select(e, checked) {
                if (checked) {
                    _this2.setState({ selection: [].concat(_this2.state.selection, [item]) });
                } else {
                    var stateSel = _this2.state.selection;
                    var selection = [].concat(stateSel.slice(0, stateSel.indexOf(item)), stateSel.slice(stateSel.indexOf(item) + 1));
                    _this2.setState({ selection: selection });
                }
            };
            elements.push(_react2['default'].createElement(_materialUi.ListItem, {
                key: item.id,
                primaryText: item.label,
                onTouchTap: touchTap,
                disabled: mode === 'inner',
                leftAvatar: !this.state.select && fontIcon,
                rightIconButton: rightIconButton,
                leftCheckbox: this.state.select && _react2['default'].createElement(_materialUi.Checkbox, { checked: this.state.selection.indexOf(item) > -1, onCheck: select })
            }));
            if (mode !== 'inner' && index < total - 1) {
                elements.push(_react2['default'].createElement(_materialUi.Divider, { inset: true, key: item.id + '-divider' }));
            }
        }).bind(this));

        var emptyState = undefined;
        if (!elements.length) {
            var emptyStateProps = {
                style: { backgroundColor: 'transparent', minHeight: 300 },
                iconClassName: 'mdi mdi-account-off',
                primaryTextId: this.props.emptyStatePrimaryText || getMessage(629),
                secondaryTextId: mode === 'book' ? this.props.emptyStateSecondaryText || null : null
            };
            if (mode === 'book' && item.actions && item.actions.create) {
                emptyStateProps = _extends({}, emptyStateProps, {
                    actionLabelId: getMessage(item.actions.create),
                    actionCallback: createAction
                });
            }
            emptyState = _react2['default'].createElement(_viewsEmptyStateView2['default'], emptyStateProps);
        }

        return _react2['default'].createElement(
            'div',
            { style: { flex: 1, flexDirection: 'column', display: 'flex' }, onTouchTap: this.props.onTouchTap },
            mode !== 'inner' && !this.props.noToolbar && toolbar,
            !emptyState && !loading && _react2['default'].createElement(
                _materialUi.List,
                { style: { flex: 1, overflowY: mode !== 'inner' ? 'auto' : 'initial' } },
                this.props.subHeader && _react2['default'].createElement(
                    _materialUi.Subheader,
                    null,
                    this.props.subHeader
                ),
                elements
            ),
            loading && _react2['default'].createElement(Loader, { style: { flex: 1 } }),
            !loading && emptyState,
            mode === 'selector' && enableSearch && bookColumn && _react2['default'].createElement(_SearchForm2['default'], {
                searchLabel: this.props.searchLabel,
                onSearch: this.props.onSearch,
                style: { padding: '0 20px', minWidth: null, borderTop: '1px solid #e0e0e0' },
                underlineShow: false
            })
        );
    };

    return UsersList;
})(_react2['default'].Component);

UsersList.propTypes = {
    item: _react2['default'].PropTypes.object,
    onCreateAction: _react2['default'].PropTypes.func,
    onDeleteAction: _react2['default'].PropTypes.func,
    onItemClicked: _react2['default'].PropTypes.func,
    onFolderClicked: _react2['default'].PropTypes.func,
    onEditLabel: _react2['default'].PropTypes.func,
    mode: _react2['default'].PropTypes.oneOf(['book', 'selector', 'inner']),
    bookColumn: _react2['default'].PropTypes.bool
};

exports['default'] = UsersList = PydioContextConsumer(UsersList);
exports['default'] = UsersList = _materialUiStyles.muiThemeable()(UsersList);

exports['default'] = UsersList;
module.exports = exports['default'];

},{"../../views/EmptyStateView":59,"../avatar/CellActionsRenderer":54,"../avatar/UserAvatar":56,"./AlphaPaginator":44,"./SearchForm":48,"material-ui":"material-ui","material-ui/styles":"material-ui/styles","pydio":"pydio","pydio/util/dom":"pydio/util/dom","react":"react"}],53:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _addressbookAddressBook = require('../addressbook/AddressBook');

var _addressbookAddressBook2 = _interopRequireDefault(_addressbookAddressBook);

var _policiesResourcePoliciesPanel = require('../../policies/ResourcePoliciesPanel');

var _policiesResourcePoliciesPanel2 = _interopRequireDefault(_policiesResourcePoliciesPanel);

var React = require('react');
var PydioApi = require('pydio/http/api');
var ResourcesManager = require('pydio/http/resources-manager');

var _require = require('material-ui');

var IconButton = _require.IconButton;
var Popover = _require.Popover;

var _require2 = require('material-ui/styles');

var muiThemeable = _require2.muiThemeable;

var _require$requireLib = require('pydio').requireLib('boot');

var PydioContextConsumer = _require$requireLib.PydioContextConsumer;
var AsyncComponent = _require$requireLib.AsyncComponent;

var ActionsPanel = (function (_React$Component) {
    _inherits(ActionsPanel, _React$Component);

    function ActionsPanel(props, context) {
        _classCallCheck(this, ActionsPanel);

        _React$Component.call(this, props, context);
        this.state = {
            showPicker: false, pickerAnchor: null,
            showMailer: false, mailerAnchor: null,
            showPolicies: false, policiesAnchor: null
        };
    }

    ActionsPanel.prototype.onTeamSelected = function onTeamSelected(item) {
        this.setState({ showPicker: false });
        if (item.IdmRole && item.IdmRole.IsTeam) {
            PydioApi.getRestClient().getIdmApi().addUserToTeam(item.IdmRole.Uuid, this.props.userId, this.props.reloadAction);
        }
    };

    ActionsPanel.prototype.onUserSelected = function onUserSelected(item) {
        this.setState({ showPicker: false });
        PydioApi.getRestClient().getIdmApi().addUserToTeam(this.props.team.id, item.IdmUser.Login, this.props.reloadAction);
    };

    ActionsPanel.prototype.openPicker = function openPicker(event) {
        this.setState({ showPicker: true, pickerAnchor: event.currentTarget });
    };

    ActionsPanel.prototype.openPolicies = function openPolicies(event) {
        this.setState({ showPolicies: true, policiesAnchor: event.currentTarget });
    };

    ActionsPanel.prototype.openMailer = function openMailer(event) {
        var _this = this;

        var target = event.currentTarget;
        ResourcesManager.loadClassesAndApply(['PydioMailer'], function () {
            _this.setState({ mailerLibLoaded: true }, function () {
                _this.setState({ showMailer: true, mailerAnchor: target });
            });
        });
    };

    ActionsPanel.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (!this.props.lockOnSubPopoverOpen) {
            return;
        }
        if ((this.state.showPicker || this.state.showMailer) && !(prevState.showPicker || prevState.showMailer)) {
            this.props.lockOnSubPopoverOpen(true);
        } else if (!(this.state.showPicker || this.state.showMailer) && (prevState.showPicker || prevState.showMailer)) {
            this.props.lockOnSubPopoverOpen(false);
        }
    };

    ActionsPanel.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props;
        var getMessage = _props.getMessage;
        var muiTheme = _props.muiTheme;
        var team = _props.team;
        var user = _props.user;
        var userEditable = _props.userEditable;
        var userId = _props.userId;
        var style = _props.style;
        var zDepth = _props.zDepth;

        var styles = {
            button: {
                //backgroundColor: muiTheme.palette.accent2Color,
                border: '1px solid ' + muiTheme.palette.accent2Color,
                borderRadius: '50%',
                margin: '0 4px',
                width: 36,
                height: 36,
                padding: 6
            },
            icon: {
                fontSize: 22,
                //color: 'white'
                color: muiTheme.palette.accent2Color
            }
        };
        var usermails = {};
        var actions = [];
        var resourceType = undefined,
            resourceId = undefined;
        if (user && user.hasEmail) {
            actions.push({ key: 'message', label: getMessage(598), icon: 'email', callback: this.openMailer.bind(this) });
            usermails[user.id] = PydioUsers.User.fromObject(user);
        }
        if (team) {
            resourceType = 'team';
            resourceId = team.id;
            actions.push({ key: 'users', label: getMessage(599), icon: 'account-multiple-plus', callback: this.openPicker.bind(this) });
        } else {
            resourceType = 'user';
            resourceId = userId;
            actions.push({ key: 'teams', label: getMessage(573), icon: 'account-multiple-plus', callback: this.openPicker.bind(this) });
        }
        if (userEditable) {
            if (this.props.onEditAction) {
                actions.push({ key: 'edit', label: this.props.team ? getMessage(580) : getMessage(600), icon: 'pencil', callback: this.props.onEditAction });
            }
            actions.push({ key: 'policies', label: 'Visibility', icon: 'security', callback: this.openPolicies.bind(this) });
            if (this.props.onDeleteAction) {
                actions.push({ key: 'delete', label: this.props.team ? getMessage(570) : getMessage(582), icon: 'delete', callback: this.props.onDeleteAction });
            }
        }

        return React.createElement(
            'div',
            { style: _extends({ textAlign: 'center', paddingTop: 10, paddingBottom: 10, borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' }, style) },
            actions.map(function (a) {
                return React.createElement(IconButton, {
                    key: a.key,
                    style: styles.button,
                    iconStyle: styles.icon,
                    tooltip: a.label,
                    iconClassName: "mdi mdi-" + a.icon,
                    onTouchTap: a.callback
                });
            }),
            React.createElement(
                Popover,
                {
                    open: this.state.showPicker,
                    anchorEl: this.state.pickerAnchor,
                    anchorOrigin: { horizontal: 'right', vertical: 'top' },
                    targetOrigin: { horizontal: 'right', vertical: 'top' },
                    onRequestClose: function () {
                        _this2.setState({ showPicker: false });
                    },
                    useLayerForClickAway: false,
                    style: { zIndex: 2200 }
                },
                React.createElement(
                    'div',
                    { style: { width: 256, height: 320 } },
                    React.createElement(_addressbookAddressBook2['default'], {
                        mode: 'selector',
                        pydio: this.props.pydio,
                        loaderStyle: { width: 320, height: 420 },
                        onItemSelected: this.props.team ? this.onUserSelected.bind(this) : this.onTeamSelected.bind(this),
                        teamsOnly: !this.props.team,
                        usersOnly: !!this.props.team
                    })
                )
            ),
            React.createElement(
                Popover,
                {
                    open: this.state.showMailer,
                    anchorEl: this.state.mailerAnchor,
                    anchorOrigin: { horizontal: 'right', vertical: 'top' },
                    targetOrigin: { horizontal: 'right', vertical: 'top' },
                    useLayerForClickAway: false,
                    style: { zIndex: 2200 }
                },
                React.createElement(
                    'div',
                    { style: { width: 256, height: 320 } },
                    this.state.mailerLibLoaded && React.createElement(AsyncComponent, {
                        namespace: 'PydioMailer',
                        componentName: 'Pane',
                        zDepth: 0,
                        panelTitle: getMessage(598),
                        uniqueUserStyle: true,
                        users: usermails,
                        onDismiss: function () {
                            _this2.setState({ showMailer: false });
                        },
                        onFieldFocus: this.props.otherPopoverMouseOver
                    })
                )
            ),
            React.createElement(
                Popover,
                {
                    open: this.state.showPolicies,
                    anchorEl: this.state.policiesAnchor,
                    anchorOrigin: { horizontal: 'right', vertical: 'top' },
                    targetOrigin: { horizontal: 'right', vertical: 'top' },
                    useLayerForClickAway: false,
                    style: { zIndex: 2000 }
                },
                React.createElement(
                    'div',
                    { style: { width: 256, height: 320 } },
                    React.createElement(_policiesResourcePoliciesPanel2['default'], {
                        pydio: this.props.pydio,
                        resourceType: resourceType,
                        resourceId: resourceId,
                        onDismiss: function () {
                            _this2.setState({ showPolicies: false });
                        }
                    })
                )
            )
        );
    };

    return ActionsPanel;
})(React.Component);

ActionsPanel.propTypes = {

    /**
     * User data, props must pass at least one of 'user' or 'team'
     */
    user: React.PropTypes.object,
    /**
     * Team data, props must pass at least one of 'user' or 'team'
     */
    team: React.PropTypes.object,
    /**
     * For users, whether it is editable or not
     */
    userEditable: React.PropTypes.object

};

exports['default'] = ActionsPanel = PydioContextConsumer(ActionsPanel);
exports['default'] = ActionsPanel = muiThemeable()(ActionsPanel);

exports['default'] = ActionsPanel;
module.exports = exports['default'];

},{"../../policies/ResourcePoliciesPanel":39,"../addressbook/AddressBook":43,"material-ui":"material-ui","material-ui/styles":"material-ui/styles","pydio":"pydio","pydio/http/api":"pydio/http/api","pydio/http/resources-manager":"pydio/http/resources-manager","react":"react"}],54:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _materialUi = require('material-ui');

var _pydioModelIdmObjectHelper = require('pydio/model/idm-object-helper');

var _pydioModelIdmObjectHelper2 = _interopRequireDefault(_pydioModelIdmObjectHelper);

var _pydioModelCell = require('pydio/model/cell');

var _pydioModelCell2 = _interopRequireDefault(_pydioModelCell);

var CellActionsRenderer = (function () {
    function CellActionsRenderer(pydio, cellModel, acl) {
        var addressBookItem = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

        _classCallCheck(this, CellActionsRenderer);

        this.props = { pydio: pydio, cellModel: cellModel, acl: acl, addressBookItem: addressBookItem };
    }

    CellActionsRenderer.prototype.createCell = function createCell() {
        var _props = this.props;
        var addressBookItem = _props.addressBookItem;
        var pydio = _props.pydio;

        var m = pydio.MessageHash;

        var idmObject = undefined;
        if (addressBookItem.IdmUser) {
            idmObject = addressBookItem.IdmUser;
        } else if (addressBookItem.IdmRole) {
            idmObject = addressBookItem.IdmRole;
        }
        if (idmObject) {
            pydio.user.getIdmUser().then(function (loggedUser) {

                var loggedLabel = _pydioModelIdmObjectHelper2['default'].extractLabelFromIdmObject(loggedUser);
                var targetLabel = _pydioModelIdmObjectHelper2['default'].extractLabelFromIdmObject(addressBookItem.IdmUser || addressBookItem.IdmRole);

                var model = new _pydioModelCell2['default']();
                model.setLabel(loggedLabel + ", " + targetLabel);
                model.setDescription("Created by " + loggedLabel);
                model.addUser(idmObject);
                model.save().then(function (res) {
                    pydio.UI.displayMessage('SUCCESS', m['643'].replace('%s', targetLabel));
                })['catch'](function (reason) {
                    pydio.UI.displayMessage('ERROR', m['644'].replace('%s', reason.message));
                });
            });
        }
    };

    CellActionsRenderer.prototype.addToCell = function addToCell() {
        var idmObject = undefined;
        var _props2 = this.props;
        var addressBookItem = _props2.addressBookItem;
        var cellModel = _props2.cellModel;

        if (addressBookItem.IdmUser) {
            idmObject = addressBookItem.IdmUser;
        } else if (addressBookItem.IdmRole) {
            idmObject = addressBookItem.IdmRole;
        }
        if (idmObject) {
            cellModel.addUser(idmObject);
            cellModel.save();
        }
    };

    CellActionsRenderer.prototype.removeFromCell = function removeFromCell() {
        var _props3 = this.props;
        var acl = _props3.acl;
        var cellModel = _props3.cellModel;

        cellModel.removeUser(acl.RoleId);
        cellModel.save();
    };

    CellActionsRenderer.prototype.renderItems = function renderItems() {
        var _props4 = this.props;
        var pydio = _props4.pydio;
        var cellModel = _props4.cellModel;
        var acl = _props4.acl;
        var addressBookItem = _props4.addressBookItem;

        var m = pydio.MessageHash;

        // Check if current user it the logged one
        var isLogged = undefined;
        if (acl) {
            isLogged = acl.User && acl.User.Login === pydio.user.id;
        } else {
            isLogged = userType === 'user' && pydio.user.id === userId;
        }
        var items = [];
        if (isLogged) {
            return items;
        }
        var userId = undefined,
            userType = undefined;
        if (addressBookItem) {
            userId = addressBookItem.id;
            userType = addressBookItem.type;
            if (userType === 'group' && addressBookItem.IdmRole) {
                userId = addressBookItem.IdmRole.Uuid;userType = 'team';
            }
        }
        var label = undefined;
        if (acl) {
            label = _pydioModelIdmObjectHelper2['default'].extractLabel(pydio, acl);
        } else {
            label = addressBookItem.label;
        }
        // Special case cellModel is "TRUE", not a real cell model
        if (cellModel === true) {
            return [React.createElement(_materialUi.MenuItem, { primaryText: m['640'].replace('%s', label), onTouchTap: this.createCell.bind(this) })];
        }

        var canWrite = cellModel.isEditable();
        // Check if current acl or userId/userType is in cell
        var acls = cellModel.getAcls();
        // Check if user is already in the current cell
        var isInCurrent = undefined;
        Object.keys(acls).map(function (k) {
            var cellAcl = acls[k];
            var crt = undefined;
            if (acl) {
                crt = acl.RoleId === cellAcl.RoleId;
            } else {
                crt = userType === 'user' && cellAcl.User && cellAcl.User.Login === userId || userType === 'group' && cellAcl.Group && cellAcl.Group.Uuid === userId || userType === 'team' && cellAcl.Role && cellAcl.Role.Uuid === userId;
            }
            if (crt) {
                isInCurrent = true;
            }
        });

        if (isInCurrent) {
            items.push(React.createElement(_materialUi.MenuItem, { primaryText: m['641'], disabled: !canWrite, onTouchTap: this.removeFromCell.bind(this) }));
        } else {
            items.push(React.createElement(_materialUi.MenuItem, { primaryText: m['642'], disabled: !canWrite, onTouchTap: this.addToCell.bind(this) }));
        }
        items.push(React.createElement(_materialUi.Divider, null), React.createElement(_materialUi.MenuItem, { primaryText: m['640'].replace('%s', label), onTouchTap: this.createCell.bind(this) }));

        return items;
    };

    return CellActionsRenderer;
})();

exports['default'] = CellActionsRenderer;
module.exports = exports['default'];

},{"material-ui":"material-ui","pydio/model/cell":"pydio/model/cell","pydio/model/idm-object-helper":"pydio/model/idm-object-helper"}],55:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _addressbookUsersList = require('../addressbook/UsersList');

var _addressbookUsersList2 = _interopRequireDefault(_addressbookUsersList);

var _require = require('react');

var Component = _require.Component;

var _require2 = require('material-ui');

var Divider = _require2.Divider;

var PydioApi = require('pydio/http/api');

var _require$requireLib = require('pydio').requireLib('boot');

var PydioContextConsumer = _require$requireLib.PydioContextConsumer;

/**
 * Display information about user or team relations
 */

var GraphPanel = (function (_Component) {
    _inherits(GraphPanel, _Component);

    function GraphPanel() {
        _classCallCheck(this, GraphPanel);

        _Component.apply(this, arguments);
    }

    GraphPanel.prototype.render = function render() {
        var _props = this.props;
        var graph = _props.graph;
        var userLabel = _props.userLabel;
        var pydio = _props.pydio;
        var getMessage = _props.getMessage;

        var elements = [];
        if (graph.teams && graph.teams.length) {
            var onDeleteAction = (function (parentItem, team) {
                var _this = this;

                PydioApi.getRestClient().getIdmApi().removeUserFromTeam(team[0].id, this.props.userId, function (response) {
                    if (response.message) {
                        pydio.UI.displayMessage('SUCCESS', response.message);
                    }
                    _this.props.reloadAction();
                });
            }).bind(this);
            elements.push(React.createElement(
                'div',
                { key: 'teams' },
                React.createElement(_addressbookUsersList2['default'], { subHeader: getMessage(581).replace('%s', graph.teams.length), onItemClicked: function () {}, item: { leafs: graph.teams }, mode: 'inner', onDeleteAction: onDeleteAction })
            ));
        }
        if (graph.cells && Object.keys(graph.cells).length) {
            var sentence = undefined;
            if (Object.keys(graph.cells).length === 1) {
                var cellLabel = Object.values(graph.cells).pop();
                sentence = getMessage(601).replace('%1', userLabel).replace('%2', cellLabel);
            } else {
                var cellLabels = '(' + Object.values(graph.cells).join(', ') + ')';
                sentence = getMessage(602).replace('%1', userLabel).replace('%2', Object.keys(graph.cells).length) + ' ' + cellLabels;
            }
            elements.push(React.createElement(
                'div',
                { key: 'source' },
                elements.length ? React.createElement(Divider, null) : null,
                React.createElement(
                    'div',
                    { style: { padding: 16 } },
                    sentence
                )
            ));
        }
        return React.createElement(
            'div',
            null,
            elements
        );
    };

    return GraphPanel;
})(Component);

exports['default'] = GraphPanel = PydioContextConsumer(GraphPanel);
exports['default'] = GraphPanel;
module.exports = exports['default'];

},{"../addressbook/UsersList":52,"material-ui":"material-ui","pydio":"pydio","pydio/http/api":"pydio/http/api","react":"react"}],56:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _GraphPanel = require('./GraphPanel');

var _GraphPanel2 = _interopRequireDefault(_GraphPanel);

var _ActionsPanel = require('./ActionsPanel');

var _ActionsPanel2 = _interopRequireDefault(_ActionsPanel);

var _pydioHttpApi = require("pydio/http/api");

var _pydioHttpApi2 = _interopRequireDefault(_pydioHttpApi);

/**
 * Generic component for display a user and her avatar (first letters or photo)
 */

var debounce = require('lodash.debounce');
var React = require('react');
var Color = require('color');

var _require = require('material-ui');

var FontIcon = _require.FontIcon;
var Popover = _require.Popover;
var Paper = _require.Paper;
var Avatar = _require.Avatar;
var CardTitle = _require.CardTitle;
var Divider = _require.Divider;

var _require2 = require('material-ui/styles');

var muiThemeable = _require2.muiThemeable;

var MetaCacheService = require('pydio/http/meta-cache-service');

var _require3 = require('pydio/http/users-api');

var UsersApi = _require3.UsersApi;

var UserAvatar = (function (_React$Component) {
    _inherits(UserAvatar, _React$Component);

    function UserAvatar(props, context) {
        _classCallCheck(this, UserAvatar);

        _React$Component.call(this, props, context);
        this.state = {
            user: null,
            avatar: null,
            graph: null,
            local: false
        };
    }

    UserAvatar.prototype.componentDidMount = function componentDidMount() {
        this.loadPublicData(this.props.userId, this.props.idmUser);
    };

    UserAvatar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (!this.props.userId || this.props.userId !== nextProps.userId) {
            this.setState({ label: nextProps.userId });
            this.loadPublicData(nextProps.userId, nextProps.idmUser);
        }
    };

    UserAvatar.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this._userLoggedObs) {
            this.props.pydio.stopObserving('user_logged', this._userLoggedObs);
        }
    };

    /**
     *
     * @param userId string
     * @param idmUser {IdmUser}
     */

    UserAvatar.prototype.loadPublicData = function loadPublicData(userId, idmUser) {
        var _this = this;

        var _props = this.props;
        var userType = _props.userType;
        var richCard = _props.richCard;
        var pydio = _props.pydio;

        if (userType === "group" || userType === "team") {
            return;
        }
        UsersApi.getUserPromise(userId, idmUser).then(function (userObject) {
            if (userObject.isLocal()) {
                _this._userLoggedObs = function () {
                    _this._userLoggedObs = null;
                    _this.loadPublicData(userId);
                };
                pydio.observeOnce('user_logged', _this._userLoggedObs);
            }
            _this.setState({
                user: userObject,
                avatar: userObject.getAvatar(),
                local: userObject.isLocal()
            });
        });
        if (richCard) {
            _pydioHttpApi2['default'].getRestClient().getIdmApi().loadUserGraph(userId).then(function (response) {
                var graph = { cells: {}, teams: [] };
                if (response.SharedCells) {
                    response.SharedCells.forEach(function (workspace) {
                        graph.cells[workspace.Uuid] = workspace.Label;
                    });
                }
                if (response.BelongsToTeams) {
                    response.BelongsToTeams.forEach(function (role) {
                        graph.teams.push({
                            id: role.Uuid,
                            label: role.Label,
                            type: 'team',
                            IdmRole: role
                        });
                    });
                }
                _this.setState({ graph: graph });
            });
        }
    };

    UserAvatar.prototype.render = function render() {
        var _this2 = this;

        var _state = this.state;
        var user = _state.user;
        var avatar = _state.avatar;
        var graph = _state.graph;
        var local = _state.local;
        var _props2 = this.props;
        var pydio = _props2.pydio;
        var userId = _props2.userId;
        var userType = _props2.userType;
        var icon = _props2.icon;
        var style = _props2.style;
        var labelStyle = _props2.labelStyle;
        var avatarLetters = _props2.avatarLetters;
        var avatarStyle = _props2.avatarStyle;
        var avatarSize = _props2.avatarSize;
        var className = _props2.className;
        var labelClassName = _props2.labelClassName;
        var displayLabel = _props2.displayLabel;
        var displayLocalLabel = _props2.displayLocalLabel;
        var displayAvatar = _props2.displayAvatar;
        var useDefaultAvatar = _props2.useDefaultAvatar;
        var richCard = _props2.richCard;
        var cardSize = _props2.cardSize;
        var muiTheme = _props2.muiTheme;
        var noActionsPanel = _props2.noActionsPanel;
        var label = this.state.label;

        var userTypeLabel = undefined;
        if (user) {
            label = user.getLabel();
        } else if (!label) {
            label = this.props.userLabel || this.props.userId;
        }
        if (local && displayLocalLabel) {
            label = pydio.MessageHash['634'];
        }

        var avatarContent = undefined,
            avatarColor = undefined,
            avatarIcon = undefined;
        if (richCard) {
            displayAvatar = true;
            useDefaultAvatar = true;
            displayLabel = true;
        }
        if (displayAvatar && !avatar && label && (!displayLabel || useDefaultAvatar)) {
            var avatarsColor = muiTheme.palette.avatarsColor;
            if (userType === 'group' || userType === 'team' || userId.indexOf('PYDIO_GRP_/') === 0 || userId.indexOf('/USER_TEAM/') === 0) {
                avatarsColor = Color(avatarsColor).darken(0.2).toString();
            }
            var iconClassName = undefined;
            switch (userType) {
                case 'group':
                    iconClassName = 'mdi mdi-account-multiple';
                    userTypeLabel = '289';
                    break;
                case 'team':
                    iconClassName = 'mdi mdi-account-multiple-outline';
                    userTypeLabel = '603';
                    break;
                case 'remote':
                    iconClassName = 'mdi mdi-account-network';
                    userTypeLabel = '604';
                    break;
                default:
                    iconClassName = 'mdi mdi-account';
                    userTypeLabel = user ? user.getExternal() ? '589' : '590' : '288';
                    break;
            }
            if (icon) {
                iconClassName = icon;
            }
            if (userTypeLabel) {
                userTypeLabel = pydio.MessageHash[userTypeLabel];
            }
            if (richCard) {
                avatarIcon = React.createElement(FontIcon, { className: iconClassName, style: { color: avatarsColor } });
                avatarColor = '#f5f5f5';
            } else {
                avatarColor = avatarsColor;
                if (iconClassName && !avatarLetters) {
                    avatarIcon = React.createElement(FontIcon, { className: iconClassName });
                } else {
                    avatarContent = label.split(' ').map(function (word) {
                        return word[0];
                    }).join('').substring(0, 2);
                    if (avatarContent.length < 2) {
                        avatarContent = label.substring(0, 2);
                    }
                }
            }
        }
        var reloadAction = undefined,
            onEditAction = undefined,
            onMouseOver = undefined,
            onMouseOut = undefined,
            onClick = undefined,
            popover = undefined;
        if (richCard) {
            (function () {

                displayAvatar = true;
                style = _extends({}, style, { flexDirection: 'column' });
                //avatarSize = cardSize ? cardSize : '100%';
                //avatarStyle = {borderRadius: 0};
                avatarSize = 100;
                avatarStyle = { marginTop: 20 };
                var localReload = function localReload() {
                    MetaCacheService.getInstance().deleteKey('user_public_data-graph', _this2.props.userId);
                    _this2.loadPublicData(_this2.props.userId, _this2.props.idmUser);
                };
                reloadAction = function () {
                    localReload();
                    if (_this2.props.reloadAction) {
                        _this2.props.reloadAction();
                    }
                };
                onEditAction = function () {
                    localReload();
                    if (_this2.props.onEditAction) {
                        _this2.props.onEditAction();
                    }
                };
            })();
        } else if (!local && this.props.richOnHover) {
            (function () {

                onMouseOut = function () {
                    if (!_this2.lockedBySubPopover) {
                        _this2.setState({ showPopover: false });
                    }
                };
                onMouseOut = debounce(onMouseOut, 350);
                onMouseOver = function (e) {
                    _this2.setState({ showPopover: true, popoverAnchor: e.currentTarget });
                    onMouseOut.cancel();
                };
                var onMouseOverInner = function onMouseOverInner(e) {
                    _this2.setState({ showPopover: true });
                    onMouseOut.cancel();
                };

                var lockOnSubPopoverOpen = function lockOnSubPopoverOpen(status) {
                    _this2.lockedBySubPopover = status;
                    onMouseOverInner();
                };
                var _props3 = _this2.props;
                var style = _props3.style;

                var popoverProps = _objectWithoutProperties(_props3, ['style']);

                popover = React.createElement(
                    Popover,
                    {
                        open: _this2.state.showPopover,
                        anchorEl: _this2.state.popoverAnchor,
                        onRequestClose: function (reason) {
                            if (reason !== 'clickAway' || !_this2.lockedBySubPopover) {
                                _this2.setState({ showPopover: false });
                            }
                        },
                        anchorOrigin: { horizontal: "left", vertical: "center" },
                        targetOrigin: { horizontal: "right", vertical: "center" },
                        useLayerForClickAway: false
                    },
                    React.createElement(
                        Paper,
                        { zDepth: 2, style: { width: 220, height: 320, overflowY: 'auto' }, onMouseOver: onMouseOverInner, onMouseOut: onMouseOut },
                        React.createElement(UserAvatar, _extends({}, popoverProps, { richCard: true, richOnHover: false, cardSize: 220, lockOnSubPopoverOpen: lockOnSubPopoverOpen }))
                    )
                );
            })();
        } else if (!local && this.props.richOnClick) {
            (function () {

                onMouseOut = function () {
                    if (!_this2.lockedBySubPopover) {
                        _this2.setState({ showPopover: false });
                    }
                };
                onMouseOut = debounce(onMouseOut, 350);
                onClick = function (e) {
                    _this2.setState({ showPopover: true, popoverAnchor: e.currentTarget });
                    onMouseOut.cancel();
                };
                var onMouseOverInner = function onMouseOverInner(e) {
                    _this2.setState({ showPopover: true });
                    onMouseOut.cancel();
                };

                var lockOnSubPopoverOpen = function lockOnSubPopoverOpen(status) {
                    _this2.lockedBySubPopover = status;
                    onMouseOverInner();
                };
                var _props4 = _this2.props;
                var style = _props4.style;

                var popoverProps = _objectWithoutProperties(_props4, ['style']);

                popover = React.createElement(
                    Popover,
                    {
                        open: _this2.state.showPopover,
                        anchorEl: _this2.state.popoverAnchor,
                        onRequestClose: function (reason) {
                            if (reason !== 'clickAway' || !_this2.lockedBySubPopover) {
                                _this2.setState({ showPopover: false });
                            }
                        },
                        anchorOrigin: { horizontal: "left", vertical: "bottom" },
                        targetOrigin: { horizontal: "left", vertical: "top" },
                        useLayerForClickAway: false
                    },
                    React.createElement(
                        Paper,
                        { zDepth: 2, style: { width: 220, height: 320, overflowY: 'auto' }, onMouseOver: onMouseOverInner, onMouseOut: onMouseOut },
                        React.createElement(UserAvatar, _extends({}, popoverProps, { richCard: true, richOnHover: false, cardSize: 220, lockOnSubPopoverOpen: lockOnSubPopoverOpen }))
                    )
                );
            })();
        }

        if (avatar) {
            avatarIcon = React.createElement(FontIcon, { style: {
                    backgroundImage: "url(" + avatar + ")",
                    backgroundSize: 'cover',
                    margin: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundPosition: 'center'
                } });
        }

        var avatarComponent = React.createElement(
            Avatar,
            {
                icon: avatarIcon,
                size: avatarSize,
                style: this.props.avatarOnly ? this.props.style : avatarStyle,
                backgroundColor: avatarColor
            },
            avatarContent
        );

        if (this.props.avatarOnly) {
            return avatarComponent;
        }

        if (richCard) {
            avatarComponent = React.createElement(
                'div',
                { style: { textAlign: 'center' } },
                avatarComponent
            );
        }

        return React.createElement(
            'div',
            { className: className, style: style, onMouseOver: onMouseOver, onMouseOut: onMouseOut, onClick: onClick },
            displayAvatar && (avatar || avatarContent || avatarIcon) && avatarComponent,
            displayLabel && !richCard && React.createElement(
                'div',
                {
                    className: labelClassName,
                    style: labelStyle },
                label
            ),
            displayLabel && richCard && React.createElement(CardTitle, { style: { textAlign: 'center' }, title: label, subtitle: userTypeLabel }),
            richCard && user && !noActionsPanel && React.createElement(_ActionsPanel2['default'], _extends({}, this.state, this.props, { reloadAction: reloadAction, onEditAction: onEditAction })),
            richCard && graph && !noActionsPanel && React.createElement(_GraphPanel2['default'], _extends({ graph: graph }, this.props, { userLabel: label, reloadAction: reloadAction, onEditAction: onEditAction })),
            this.props.children,
            popover
        );
    };

    return UserAvatar;
})(React.Component);

UserAvatar.propTypes = {
    /**
     * Id of the user to be loaded
     */
    userId: React.PropTypes.string.isRequired,
    /**
     * Pydio instance
     */
    pydio: React.PropTypes.instanceOf(Pydio),
    /**
     * Label of the user, if we already have it (otherwise will be loaded)
     */
    userLabel: React.PropTypes.string,
    /**
     * Type of user
     */
    userType: React.PropTypes.oneOf(['user', 'group', 'remote', 'team']),
    /**
     * Icon to be displayed in avatar
     */
    icon: React.PropTypes.string,
    /**
     * Display a rich card or a simple avatar+label chip
     */
    richCard: React.PropTypes.bool,
    /**
     * If not rich, display a rich card as popover on mouseover
     */
    richOnHover: React.PropTypes.bool,
    /**
     * If not rich, display a rich card as popover on click
     */
    richOnClick: React.PropTypes.bool,

    /**
     * Add edit action to the card
     */
    userEditable: React.PropTypes.bool,
    /**
     * Triggered after successful edition
     */
    onEditAction: React.PropTypes.func,
    /**
     * Triggered after deletion
     */
    onDeleteAction: React.PropTypes.func,
    /**
     * Triggered if a reload is required
     */
    reloadAction: React.PropTypes.func,

    /**
     * Display label element or not
     */
    displayLabel: React.PropTypes.bool,
    /**
     * Display label element or not
     */
    displayLocalLabel: React.PropTypes.bool,
    /**
     * Display avatar element or not
     */
    displayAvatar: React.PropTypes.bool,
    /**
     * Display only avatar
     */
    avatarOnly: React.PropTypes.bool,
    /**
     * Use default avatar
     */
    useDefaultAvatar: React.PropTypes.bool,
    /**
     * Avatar size, 40px by default
     */
    avatarSize: React.PropTypes.number,
    /**
     * If only the default icon is available, will display
     * the first letters of the name instead
     */
    avatarLetters: React.PropTypes.bool,
    /**
     * Do not display ActionsPanel in RichCard mode
     */
    noActionsPanel: React.PropTypes.bool,

    /**
     * Add class name to root element
     */
    className: React.PropTypes.string,
    /**
     * Add class name to label element
     */
    labelClassName: React.PropTypes.string,
    /**
     * Add class name to avatar element
     */
    avatarClassName: React.PropTypes.string,
    /**
     * Add style to root element
     */
    style: React.PropTypes.object,
    /**
     * Add style to label element
     */
    labelStyle: React.PropTypes.object,
    /**
     * Add style to avatar element
     */
    avatarStyle: React.PropTypes.object
};

UserAvatar.defaultProps = {
    displayLabel: true,
    displayAvatar: true,
    avatarSize: 40,
    userType: 'user',
    className: 'user-avatar-widget',
    avatarClassName: 'user-avatar',
    labelClassName: 'user-label'
};

exports['default'] = UserAvatar = muiThemeable()(UserAvatar);

exports['default'] = UserAvatar;
module.exports = exports['default'];

},{"./ActionsPanel":53,"./GraphPanel":55,"color":"color","lodash.debounce":"lodash.debounce","material-ui":"material-ui","material-ui/styles":"material-ui/styles","pydio/http/api":"pydio/http/api","pydio/http/meta-cache-service":"pydio/http/meta-cache-service","pydio/http/users-api":"pydio/http/users-api","react":"react"}],57:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FuncUtils = require("pydio/util/func");
var ResourcesManager = require("pydio/http/resources-manager");

/******************************/
/* REACT DND GENERIC COMPONENTS
 /******************************/
var Types = {
    NODE_PROVIDER: 'node',
    SORTABLE_LIST_ITEM: 'sortable-list-item'
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

function collectDrop(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        canDrop: monitor.canDrop(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true })
    };
}

var DNDActionParameter = (function () {
    function DNDActionParameter(source, target, step) {
        _classCallCheck(this, DNDActionParameter);

        this._source = source;
        this._target = target;
        this._step = step;
    }

    DNDActionParameter.prototype.getSource = function getSource() {
        return this._source;
    };

    DNDActionParameter.prototype.getTarget = function getTarget() {
        return this._target;
    };

    DNDActionParameter.prototype.getStep = function getStep() {
        return this._step;
    };

    return DNDActionParameter;
})();

DNDActionParameter.STEP_BEGIN_DRAG = 'beginDrag';
DNDActionParameter.STEP_END_DRAG = 'endDrag';
DNDActionParameter.STEP_CAN_DROP = 'canDrop';
DNDActionParameter.STEP_HOVER_DROP = 'hover';

var applyDNDAction = function applyDNDAction(source, target, step) {
    var Controller = window.pydio.Controller;

    var dnd = Controller.defaultActions.get("dragndrop");
    if (dnd) {
        var dndAction = Controller.getActionByName(dnd);
        dndAction.enable();
        var params = new DNDActionParameter(source, target, step);
        var checkModule = dndAction.options.dragndropCheckModule;
        if (step === DNDActionParameter.STEP_CAN_DROP && checkModule) {
            if (!FuncUtils.getFunctionByName(checkModule, window)) {
                ResourcesManager.detectModuleToLoadAndApply(checkModule, function () {});
                throw new Error('Cannot find test module, trying to load it');
            }
            FuncUtils.executeFunctionByName(dndAction.options.dragndropCheckModule, window, Controller, params);
        } else {
            dndAction.apply(params);
        }
    } else {
        throw new Error('No DND Actions available');
    }
};

/****************************/
/* REACT DND DRAG/DROP NODES
 /***************************/

var nodeDragSource = {
    beginDrag: function beginDrag(props) {
        // Return the data describing the dragged item
        return { node: props.node };
    },

    endDrag: function endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }
        var item = monitor.getItem();
        var dropResult = monitor.getDropResult();
        try {
            applyDNDAction(item.node, dropResult.node, DNDActionParameter.STEP_END_DRAG);
        } catch (e) {}
    }
};

var nodeDropTarget = {

    hover: function hover(props, monitor) {},

    canDrop: function canDrop(props, monitor) {

        var source = monitor.getItem().node;
        var target = props.node;

        try {
            applyDNDAction(source, target, DNDActionParameter.STEP_CAN_DROP);
        } catch (e) {
            return false;
        }
        return true;
    },

    drop: function drop(props, monitor) {
        var hasDroppedOnChild = monitor.didDrop();
        if (hasDroppedOnChild) {
            return;
        }
        return { node: props.node };
    }

};

exports.Types = Types;
exports.collect = collect;
exports.collectDrop = collectDrop;
exports.nodeDragSource = nodeDragSource;
exports.nodeDropTarget = nodeDropTarget;
exports.DNDActionParameter = DNDActionParameter;

},{"pydio/http/resources-manager":"pydio/http/resources-manager","pydio/util/func":"pydio/util/func"}],58:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

"use strict";

exports.__esModule = true;
exports["default"] = {
    contextTypes: {
        messages: React.PropTypes.object,
        getMessage: React.PropTypes.func
    }
};
module.exports = exports["default"];

},{}],59:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('react');

var Component = _require.Component;
var PropTypes = _require.PropTypes;

var _require2 = require('material-ui');

var FlatButton = _require2.FlatButton;
var FontIcon = _require2.FontIcon;

var _require3 = require('material-ui/styles');

var muiThemeable = _require3.muiThemeable;

var Color = require('color');
var Pydio = require('pydio');

var _Pydio$requireLib = Pydio.requireLib('boot');

var PydioContextConsumer = _Pydio$requireLib.PydioContextConsumer;

var EmptyStateView = (function (_Component) {
    _inherits(EmptyStateView, _Component);

    function EmptyStateView(props, context) {
        _classCallCheck(this, EmptyStateView);

        _Component.call(this, props, context);
    }

    EmptyStateView.prototype.render = function render() {
        var _props = this.props;
        var style = _props.style;
        var iconClassName = _props.iconClassName;
        var primaryTextId = _props.primaryTextId;
        var secondaryTextId = _props.secondaryTextId;
        var actionLabelId = _props.actionLabelId;
        var actionCallback = _props.actionCallback;
        var actionStyle = _props.actionStyle;
        var actionIconClassName = _props.actionIconClassName;
        var getMessage = _props.getMessage;
        var iconStyle = _props.iconStyle;
        var legendStyle = _props.legendStyle;

        var mainColor = Color(this.props.muiTheme.palette.primary1Color);

        var styles = {
            container: _extends({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
                flex: 1,
                backgroundColor: mainColor.lightness(97).rgb().toString()
            }, style),
            centered: {
                maxWidth: 280,
                textAlign: 'center',
                color: mainColor.fade(0.6).toString()
            },
            icon: _extends({
                fontSize: 100
            }, iconStyle),
            primaryText: _extends({
                fontSize: 16,
                fontWeight: 500
            }, legendStyle),
            secondaryText: {
                marginTop: 20,
                fontSize: 13
            },
            buttonContainer: {
                marginTop: 100,
                textAlign: 'center'
            },
            buttonStyle: {
                color: this.props.muiTheme.palette.accent2Color
            }
        };
        var buttonIcon = actionIconClassName ? React.createElement(FontIcon, { className: actionIconClassName }) : null;
        return React.createElement(
            'div',
            { style: styles.container },
            React.createElement(
                'div',
                { style: styles.centered },
                React.createElement('div', { className: iconClassName, style: styles.icon }),
                React.createElement(
                    'div',
                    { style: styles.primaryText },
                    getMessage(primaryTextId)
                ),
                secondaryTextId && React.createElement(
                    'div',
                    { style: styles.secondaryText },
                    getMessage(secondaryTextId)
                ),
                actionLabelId && actionCallback && React.createElement(
                    'div',
                    { style: _extends({}, styles.buttonContainer, actionStyle) },
                    React.createElement(FlatButton, { style: styles.buttonStyle, label: getMessage(actionLabelId), onTouchTap: actionCallback, icon: buttonIcon })
                )
            )
        );
    };

    return EmptyStateView;
})(Component);

EmptyStateView.propTypes = {

    pydio: PropTypes.instanceOf(Pydio).isRequired,
    iconClassName: PropTypes.string.isRequired,
    primaryTextId: PropTypes.string.isRequired,

    secondaryTextId: PropTypes.string,
    actionLabelId: PropTypes.string,
    actionCallback: PropTypes.func,
    actionStyle: PropTypes.object,

    style: PropTypes.object,
    iconStyle: PropTypes.object,
    legendStyle: PropTypes.object,
    getMessage: PropTypes.func

};

exports['default'] = EmptyStateView = PydioContextConsumer(EmptyStateView);
exports['default'] = EmptyStateView = muiThemeable()(EmptyStateView);

exports['default'] = EmptyStateView;
module.exports = exports['default'];

},{"color":"color","material-ui":"material-ui","material-ui/styles":"material-ui/styles","pydio":"pydio","react":"react"}],60:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var ModalAppBar = function ModalAppBar(props) {
    var style = props.style;
    var titleStyle = props.titleStyle;
    var iconStyleRight = props.iconStyleRight;
    var iconStyleLeft = props.iconStyleLeft;

    var otherProps = _objectWithoutProperties(props, ['style', 'titleStyle', 'iconStyleRight', 'iconStyleLeft']);

    var styles = {
        style: _extends({
            flexShrink: 0
        }, style),
        titleStyle: _extends({
            lineHeight: '56px',
            height: 56,
            marginLeft: -8
        }, titleStyle),
        iconStyleRight: _extends({
            marginTop: 4
        }, iconStyleRight),
        iconStyleLeft: _extends({
            marginTop: 4
        }, iconStyleLeft)
    };

    return _react2['default'].createElement(_materialUi.AppBar, _extends({}, otherProps, styles));
};

exports['default'] = ModalAppBar;
module.exports = exports['default'];
/*borderRadius: '2px 2px 0 0',*/

},{"material-ui":"material-ui","react":"react"}],61:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

/**
 * Get info from Pydio controller an build an
 * action bar with active actions.
 * TBC
 */
'use strict';

exports.__esModule = true;
exports['default'] = React.createClass({
    displayName: 'SimpleReactActionBar',

    propTypes: {
        dataModel: React.PropTypes.instanceOf(PydioDataModel).isRequired,
        node: React.PropTypes.instanceOf(AjxpNode).isRequired,
        actions: React.PropTypes.array
    },

    clickAction: function clickAction(event) {
        var actionName = event.currentTarget.getAttribute("data-action");
        this.props.dataModel.setSelectedNodes([this.props.node]);
        var a = window.pydio.Controller.getActionByName(actionName);
        a.fireContextChange(this.props.dataModel, true, window.pydio.user);
        //a.fireSelectionChange(this.props.dataModel);
        a.apply([this.props.dataModel]);
        event.stopPropagation();
        event.preventDefault();
    },

    render: function render() {
        var actions = this.props.actions.map((function (a) {
            return React.createElement('div', {
                key: a.options.name,
                className: a.options.icon_class + ' material-list-action-inline' || '',
                title: a.options.title,
                'data-action': a.options.name,
                onClick: this.clickAction });
        }).bind(this));
        return React.createElement(
            'span',
            null,
            actions
        );
    }
});
module.exports = exports['default'];

},{}],62:[function(require,module,exports){
/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilDND = require('../util/DND');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _Pydio$requireLib = _pydio2['default'].requireLib('hoc');

var withContextMenu = _Pydio$requireLib.withContextMenu;

var ContextMenuWrapper = function ContextMenuWrapper(props) {
    return _react2['default'].createElement('div', props);
};
ContextMenuWrapper = withContextMenu(ContextMenuWrapper);

/**
 * Tree Node
 */
var SimpleTreeNode = _react2['default'].createClass({
    displayName: 'SimpleTreeNode',

    propTypes: {
        collapse: _react2['default'].PropTypes.bool,
        forceExpand: _react2['default'].PropTypes.bool,
        childrenOnly: _react2['default'].PropTypes.bool,
        depth: _react2['default'].PropTypes.number,
        onNodeSelect: _react2['default'].PropTypes.func,
        node: _react2['default'].PropTypes.instanceOf(AjxpNode),
        dataModel: _react2['default'].PropTypes.instanceOf(PydioDataModel),
        forceLabel: _react2['default'].PropTypes.string,
        // Optional currently selected detection
        nodeIsSelected: _react2['default'].PropTypes.func,
        // Optional checkboxes
        checkboxes: _react2['default'].PropTypes.array,
        checkboxesValues: _react2['default'].PropTypes.object,
        checkboxesComputeStatus: _react2['default'].PropTypes.func,
        onCheckboxCheck: _react2['default'].PropTypes.func,
        paddingOffset: _react2['default'].PropTypes.number
    },

    getDefaultProps: function getDefaultProps() {
        return {
            collapse: false,
            childrenOnly: false,
            depth: 0,
            paddingOffset: 0,
            onNodeSelect: function onNodeSelect(node) {}
        };
    },

    listenToNode: function listenToNode(node) {
        this._childrenListener = (function () {
            if (!this.isMounted()) return;
            this.setState({ children: this._nodeToChildren(node) });
        }).bind(this);
        this._nodeListener = (function () {
            if (!this.isMounted()) return;
            this.forceUpdate();
        }).bind(this);
        node.observe("child_added", this._childrenListener);
        node.observe("child_removed", this._childrenListener);
        node.observe("node_replaced", this._nodeListener);
    },

    stopListening: function stopListening(node) {
        node.stopObserving("child_added", this._childrenListener);
        node.stopObserving("child_removed", this._childrenListener);
        node.stopObserving("node_replaced", this._nodeListener);
    },

    componentDidMount: function componentDidMount() {
        this.listenToNode(this.props.node);
    },

    componentWillUnmount: function componentWillUnmount() {
        this.stopListening(this.props.node);
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var oldNode = this.props.node;
        var newNode = nextProps.node;
        if (newNode == oldNode && newNode.getMetadata().get("paginationData")) {
            var remapedChildren = this.state.children.map(function (c) {
                c.setParent(newNode);return c;
            });
            var remapedPathes = this.state.children.map(function (c) {
                return c.getPath();
            });
            var newChildren = this._nodeToChildren(newNode);
            newChildren.forEach(function (nc) {
                if (remapedPathes.indexOf(nc.getPath()) === -1) {
                    remapedChildren.push(nc);
                }
            });
            this.setState({ children: remapedChildren });
        } else {
            this.setState({ children: this._nodeToChildren(newNode) });
        }
        if (newNode !== oldNode) {
            this.stopListening(oldNode);
            this.listenToNode(newNode);
        }
    },

    getInitialState: function getInitialState() {
        return {
            showChildren: !this.props.collapse || this.props.forceExpand,
            children: this._nodeToChildren(this.props.node)
        };
    },

    _nodeToChildren: function _nodeToChildren() {
        var children = [];
        this.props.node.getChildren().forEach(function (c) {
            if (!c.isLeaf() || c.getAjxpMime() === 'ajxp_browsable_archive') children.push(c);
        });
        return children;
    },

    onNodeSelect: function onNodeSelect(ev) {
        if (this.props.onNodeSelect) {
            this.props.onNodeSelect(this.props.node);
        }
        ev.preventDefault();
        ev.stopPropagation();
    },
    onChildDisplayToggle: function onChildDisplayToggle(ev) {
        if (this.props.node.getChildren().size) {
            this.setState({ showChildren: !this.state.showChildren });
        }
        ev.preventDefault();
        ev.stopPropagation();
    },
    nodeIsSelected: function nodeIsSelected(n) {
        if (this.props.nodeIsSelected) return this.props.nodeIsSelected(n);else return this.props.dataModel.getSelectedNodes().indexOf(n) !== -1;
    },
    render: function render() {
        var _this = this;

        var _props = this.props;
        var node = _props.node;
        var childrenOnly = _props.childrenOnly;
        var canDrop = _props.canDrop;
        var isOverCurrent = _props.isOverCurrent;
        var checkboxes = _props.checkboxes;
        var checkboxesComputeStatus = _props.checkboxesComputeStatus;
        var checkboxesValues = _props.checkboxesValues;
        var onCheckboxCheck = _props.onCheckboxCheck;
        var depth = _props.depth;
        var paddingOffset = _props.paddingOffset;
        var forceExpand = _props.forceExpand;
        var selectedItemStyle = _props.selectedItemStyle;
        var getItemStyle = _props.getItemStyle;
        var forceLabel = _props.forceLabel;

        var hasFolderChildrens = this.state.children.length ? true : false;
        var hasChildren;
        if (hasFolderChildrens) {
            hasChildren = _react2['default'].createElement(
                'span',
                { onClick: this.onChildDisplayToggle },
                this.state.showChildren || forceExpand ? _react2['default'].createElement('span', { className: 'tree-icon icon-angle-down' }) : _react2['default'].createElement('span', { className: 'tree-icon icon-angle-right' })
            );
        } else {
            var cname = "tree-icon icon-angle-right";
            if (node.isLoaded()) {
                cname += " no-folder-children";
            }
            hasChildren = _react2['default'].createElement('span', { className: cname });
        }
        var isSelected = this.nodeIsSelected(node) ? 'mui-menu-item mui-is-selected' : 'mui-menu-item';
        var selfLabel;
        if (!childrenOnly) {
            if (canDrop && isOverCurrent) {
                isSelected += ' droppable-active';
            }
            var boxes;
            if (checkboxes) {
                var values = {},
                    inherited = false,
                    disabled = {},
                    additionalClassName = '';
                if (checkboxesComputeStatus) {
                    var status = checkboxesComputeStatus(node);
                    values = status.VALUES;
                    inherited = status.INHERITED;
                    disabled = status.DISABLED;
                    if (status.CLASSNAME) additionalClassName = ' ' + status.CLASSNAME;
                } else if (checkboxesValues && checkboxesValues[node.getPath()]) {
                    values = checkboxesValues[node.getPath()];
                }
                var valueClasses = [];
                boxes = checkboxes.map((function (c) {
                    var selected = values[c] !== undefined ? values[c] : false;
                    var click = (function (event, value) {
                        onCheckboxCheck(node, c, value);
                    }).bind(this);
                    if (selected) valueClasses.push(c);
                    return _react2['default'].createElement(ReactMUI.Checkbox, {
                        name: c,
                        key: c + "-" + (selected ? "true" : "false"),
                        checked: selected,
                        onCheck: click,
                        disabled: disabled[c],
                        className: "cbox-" + c
                    });
                }).bind(this));
                isSelected += inherited ? " inherited " : "";
                isSelected += valueClasses.length ? " checkbox-values-" + valueClasses.join('-') : " checkbox-values-empty";
                boxes = _react2['default'].createElement(
                    'div',
                    { className: "tree-checkboxes" + additionalClassName },
                    boxes
                );
            }
            var itemStyle = { paddingLeft: paddingOffset + depth * 20 };
            if (this.nodeIsSelected(node) && selectedItemStyle) {
                itemStyle = _extends({}, itemStyle, selectedItemStyle);
            }
            if (getItemStyle) {
                itemStyle = _extends({}, itemStyle, getItemStyle(node));
            }
            var icon = 'mdi mdi-folder';
            var ajxpMime = node.getAjxpMime();
            if (ajxpMime === 'ajxp_browsable_archive') {
                icon = 'mdi mdi-archive';
            } else if (ajxpMime === 'ajxp_recycle') {
                icon = 'mdi mdi-delete';
            }
            selfLabel = _react2['default'].createElement(
                ContextMenuWrapper,
                { node: node, className: 'tree-item ' + isSelected + (boxes ? ' has-checkboxes' : ''), style: itemStyle },
                _react2['default'].createElement(
                    'div',
                    { className: 'tree-item-label', onClick: this.onNodeSelect, title: node.getLabel(),
                        'data-id': node.getPath() },
                    hasChildren,
                    _react2['default'].createElement('span', { className: "tree-icon " + icon }),
                    forceLabel ? forceLabel : node.getLabel()
                ),
                boxes
            );
        }

        var children = [];
        var connector = function connector(instance) {
            return instance;
        };
        var draggable = false;
        if (window.ReactDND && this.props.connectDropTarget && this.props.connectDragSource) {
            (function () {
                var connectDragSource = _this.props.connectDragSource;
                var connectDropTarget = _this.props.connectDropTarget;
                connector = function (instance) {
                    connectDragSource(ReactDOM.findDOMNode(instance));
                    connectDropTarget(ReactDOM.findDOMNode(instance));
                };
                draggable = true;
            })();
        }

        if (this.state.showChildren || forceExpand) {
            children = this.state.children.map((function (child) {
                var props = _extends({}, this.props, {
                    forceLabel: null,
                    childrenOnly: false,
                    key: child.getPath(),
                    node: child,
                    depth: depth + 1
                });
                return _react2['default'].createElement(draggable ? DragDropTreeNode : SimpleTreeNode, props);
            }).bind(this));
        }
        return _react2['default'].createElement(
            'li',
            { ref: connector, className: "treenode" + node.getPath().replace(/\//g, '_') },
            selfLabel,
            _react2['default'].createElement(
                'ul',
                null,
                children
            )
        );
    }
});

var DragDropTreeNode;
if (window.ReactDND) {
    DragDropTreeNode = ReactDND.flow(ReactDND.DragSource(_utilDND.Types.NODE_PROVIDER, _utilDND.nodeDragSource, _utilDND.collect), ReactDND.DropTarget(_utilDND.Types.NODE_PROVIDER, _utilDND.nodeDropTarget, _utilDND.collectDrop))(SimpleTreeNode);
} else {
    DragDropTreeNode = SimpleTreeNode;
}

/**
 * Simple openable / loadable tree taking AjxpNode as inputs
 */
var DNDTreeView = _react2['default'].createClass({
    displayName: 'DNDTreeView',

    propTypes: {
        showRoot: _react2['default'].PropTypes.bool,
        rootLabel: _react2['default'].PropTypes.string,
        onNodeSelect: _react2['default'].PropTypes.func,
        node: _react2['default'].PropTypes.instanceOf(AjxpNode).isRequired,
        dataModel: _react2['default'].PropTypes.instanceOf(PydioDataModel).isRequired,
        selectable: _react2['default'].PropTypes.bool,
        selectableMultiple: _react2['default'].PropTypes.bool,
        initialSelectionModel: _react2['default'].PropTypes.array,
        onSelectionChange: _react2['default'].PropTypes.func,
        forceExpand: _react2['default'].PropTypes.bool,
        // Optional currently selected detection
        nodeIsSelected: _react2['default'].PropTypes.func,
        // Optional checkboxes
        checkboxes: _react2['default'].PropTypes.array,
        checkboxesValues: _react2['default'].PropTypes.object,
        checkboxesComputeStatus: _react2['default'].PropTypes.func,
        onCheckboxCheck: _react2['default'].PropTypes.func,
        paddingOffset: _react2['default'].PropTypes.number
    },

    getDefaultProps: function getDefaultProps() {
        return {
            showRoot: true,
            onNodeSelect: this.onNodeSelect
        };
    },

    onNodeSelect: function onNodeSelect(node) {
        if (this.props.onNodeSelect) {
            this.props.onNodeSelect(node);
        } else {
            this.props.dataModel.setSelectedNodes([node]);
        }
    },

    render: function render() {
        return _react2['default'].createElement(
            'ul',
            { className: this.props.className },
            _react2['default'].createElement(DragDropTreeNode, {
                childrenOnly: !this.props.showRoot,
                forceExpand: this.props.forceExpand,
                node: this.props.node ? this.props.node : this.props.dataModel.getRootNode(),
                dataModel: this.props.dataModel,
                onNodeSelect: this.onNodeSelect,
                nodeIsSelected: this.props.nodeIsSelected,
                forceLabel: this.props.rootLabel,
                checkboxes: this.props.checkboxes,
                checkboxesValues: this.props.checkboxesValues,
                checkboxesComputeStatus: this.props.checkboxesComputeStatus,
                onCheckboxCheck: this.props.onCheckboxCheck,
                selectedItemStyle: this.props.selectedItemStyle,
                getItemStyle: this.props.getItemStyle,
                paddingOffset: this.props.paddingOffset
            })
        );
    }
});

var TreeView = _react2['default'].createClass({
    displayName: 'TreeView',

    propTypes: {
        showRoot: _react2['default'].PropTypes.bool,
        rootLabel: _react2['default'].PropTypes.string,
        onNodeSelect: _react2['default'].PropTypes.func,
        node: _react2['default'].PropTypes.instanceOf(AjxpNode).isRequired,
        dataModel: _react2['default'].PropTypes.instanceOf(PydioDataModel).isRequired,
        selectable: _react2['default'].PropTypes.bool,
        selectableMultiple: _react2['default'].PropTypes.bool,
        initialSelectionModel: _react2['default'].PropTypes.array,
        onSelectionChange: _react2['default'].PropTypes.func,
        forceExpand: _react2['default'].PropTypes.bool,
        // Optional currently selected detection
        nodeIsSelected: _react2['default'].PropTypes.func,
        // Optional checkboxes
        checkboxes: _react2['default'].PropTypes.array,
        checkboxesValues: _react2['default'].PropTypes.object,
        checkboxesComputeStatus: _react2['default'].PropTypes.func,
        onCheckboxCheck: _react2['default'].PropTypes.func,
        paddingOffset: _react2['default'].PropTypes.number
    },

    getDefaultProps: function getDefaultProps() {
        return {
            showRoot: true,
            onNodeSelect: this.onNodeSelect
        };
    },

    onNodeSelect: function onNodeSelect(node) {
        if (this.props.onNodeSelect) {
            this.props.onNodeSelect(node);
        } else {
            this.props.dataModel.setSelectedNodes([node]);
        }
    },

    render: function render() {
        return _react2['default'].createElement(
            'ul',
            { className: this.props.className },
            _react2['default'].createElement(SimpleTreeNode, {
                childrenOnly: !this.props.showRoot,
                forceExpand: this.props.forceExpand,
                node: this.props.node ? this.props.node : this.props.dataModel.getRootNode(),
                dataModel: this.props.dataModel,
                onNodeSelect: this.onNodeSelect,
                nodeIsSelected: this.props.nodeIsSelected,
                forceLabel: this.props.rootLabel,
                checkboxes: this.props.checkboxes,
                checkboxesValues: this.props.checkboxesValues,
                checkboxesComputeStatus: this.props.checkboxesComputeStatus,
                onCheckboxCheck: this.props.onCheckboxCheck,
                selectedItemStyle: this.props.selectedItemStyle,
                getItemStyle: this.props.getItemStyle,
                paddingOffset: this.props.paddingOffset
            })
        );
    }

});

var FoldersTree = _react2['default'].createClass({
    displayName: 'FoldersTree',

    propTypes: {
        pydio: _react2['default'].PropTypes.instanceOf(_pydio2['default']).isRequired,
        dataModel: _react2['default'].PropTypes.instanceOf(PydioDataModel).isRequired,
        className: _react2['default'].PropTypes.string,
        onNodeSelected: _react2['default'].PropTypes.func,
        draggable: _react2['default'].PropTypes.bool
    },

    nodeObserver: function nodeObserver() {
        var r = this.props.dataModel.getRootNode();
        if (!r.isLoaded()) {
            r.observeOnce("loaded", (function () {
                this.forceUpdate();
            }).bind(this));
        } else {
            this.forceUpdate();
        }
    },

    componentDidMount: function componentDidMount() {
        var dm = this.props.dataModel;
        this._dmObs = this.nodeObserver;
        dm.observe("context_changed", this._dmObs);
        dm.observe("root_node_changed", this._dmObs);
        this.nodeObserver();
    },

    componentWillUnmount: function componentWillUnmount() {
        if (this._dmObs) {
            var dm = this.props.dataModel;
            dm.stopObserving("context_changed", this._dmObs);
            dm.stopObserving("root_node_changed", this._dmObs);
        }
    },

    treeNodeSelected: function treeNodeSelected(n) {
        if (this.props.onNodeSelected) {
            this.props.onNodeSelected(n);
        } else {
            this.props.dataModel.requireContextChange(n);
        }
    },

    nodeIsSelected: function nodeIsSelected(n) {
        return n === this.props.dataModel.getContextNode();
    },

    render: function render() {
        if (this.props.draggable) {
            return _react2['default'].createElement(PydioComponents.DNDTreeView, {
                onNodeSelect: this.treeNodeSelected,
                nodeIsSelected: this.nodeIsSelected,
                dataModel: this.props.dataModel,
                node: this.props.dataModel.getRootNode(),
                showRoot: this.props.showRoot ? true : false,
                selectedItemStyle: this.props.selectedItemStyle,
                getItemStyle: this.props.getItemStyle,
                className: "folders-tree" + (this.props.className ? ' ' + this.props.className : '')
            });
        } else {
            return _react2['default'].createElement(PydioComponents.TreeView, {
                onNodeSelect: this.treeNodeSelected,
                nodeIsSelected: this.nodeIsSelected,
                dataModel: this.props.dataModel,
                node: this.props.dataModel.getRootNode(),
                selectedItemStyle: this.props.selectedItemStyle,
                getItemStyle: this.props.getItemStyle,
                showRoot: this.props.showRoot ? true : false,
                className: "folders-tree" + (this.props.className ? ' ' + this.props.className : '')
            });
        }
    }

});

exports.TreeView = TreeView;
exports.DNDTreeView = DNDTreeView;
exports.FoldersTree = FoldersTree;

},{"../util/DND":57,"pydio":"pydio","react":"react"}]},{},[18])(18)
});
