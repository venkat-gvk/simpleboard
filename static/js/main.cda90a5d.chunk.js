(this.webpackJsonpcrystal=this.webpackJsonpcrystal||[]).push([[0],{20:function(A,e,C){},25:function(A,e,C){"use strict";C.r(e);var g=C(2),E=C.n(g),t=C(15),o=C.n(t),n=(C(20),C(6)),r=C(4),c=C(5),B=C(7),a={black:"#000000",red:"#DC2626",blue:"#2563EB",green:"#059669",yellow:"#D97706",purple:"#7C3AED"},s=C(1),i=function(){var A=Object(g.useState)([]),e=Object(r.a)(A,2),C=e[0],E=e[1],t=Object(g.useState)([]),o=Object(r.a)(t,2),i=o[0],w=o[1],k=Object(g.useState)("none"),I=Object(r.a)(k,2),S=I[0],Q=I[1],d=Object(g.useState)([]),J=Object(r.a)(d,2),u=J[0],j=J[1],f=Object(g.useContext)(l),b=f.tool,D=f.setTool,v=f.setIsModal,h=f.strokeSize,m=f.drawingColor,O=f.shapeTool,x=f.setShapeTool;Object(g.useEffect)((function(){"clear"===b&&(D("draw"),E([]),w([]),x("none"),v(!1))}),[b,v]),console.log(b,O,S);var p=function(A){var e=A.target.getStage().getPointerPosition();"drag"!==b?"draw"===b||"eraser"===b?(E([].concat(Object(c.a)(C),[{erase:"eraser"===b,color:a[m],strokeWidth:Number(h),points:[e.x,e.y]}])),Q("eraser"===b?"erase":"write")):"rectangle"===O?(w([].concat(Object(c.a)(i),[{tool:O,color:a[m],strokeWidth:Number(h),x:e.x,y:e.y,width:0,height:0}])),Q("write")):"circle"===O?(w([].concat(Object(c.a)(i),[{tool:O,color:a[m],strokeWidth:Number(h),x:e.x,y:e.y,radius:10}])),Q("write")):"line"!==O&&"arrow"!==O||(j([{tool:O,color:a[m],strokeWidth:Number(h),points:[e.x,e.y,e.x,e.y]}]),Q("write")):Q("drag")},y=function(A){var e=A.target.getStage().getPointerPosition(),g=C.length-1,t=i.length-1;if("write"===S||"erase"===S)if("eraser"===b||"none"===O){var o=C[g];o.points=o.points.concat([e.x,e.y]),C.splice(g,1,o),E(Object(c.a)(C))}else if("rectangle"===O){var r=i[t],B=e.x-r.x,a=e.y-r.y;i.splice(t,1,Object(n.a)(Object(n.a)({},r),{},{width:B,height:a})),w(Object(c.a)(i))}else if("circle"===O){var s=i[t],k=Math.pow(e.y-s.y,2),I=Math.pow(e.x-s.x,2),l=Math.sqrt(k+I);l<5&&(l=5),i.splice(t,1,Object(n.a)(Object(n.a)({},s),{},{radius:l})),w(Object(c.a)(i))}else if("line"===O||"arrow"===O){var Q=u[u.length-1];Q.points[2]=e.x,Q.points[3]=e.y,j([Q])}},G=function(A){if("write"===S&&("line"===O||"arrow"===O)){var e=A.target.getStage().getPointerPosition(),C=u.length-1,g=u[C];g.points[2]=e.x,g.points[3]=e.y,w([].concat(Object(c.a)(i),[g])),j([])}Q("none")};return Object(s.jsx)("div",{children:Object(s.jsx)(B.g,{width:window.innerWidth,height:window.innerHeight-90,onMouseDown:p,onMouseMove:y,onMouseUp:G,onTouchStart:p,onTouchMove:y,onTouchEnd:G,children:Object(s.jsxs)(B.d,{children:[C.map((function(A,e){return Object(s.jsx)(B.e,{points:A.points,stroke:A.color,strokeWidth:A.strokeWidth,lineCap:"round",lineJoin:"round",draggable:"drag"===b,globalCompositeOperation:A.erase?"destination-out":"source-over"},e)})),Object(s.jsxs)(B.c,{children:[i.map((function(A,e){return"rectangle"===A.tool?Object(s.jsx)(B.f,{x:A.x,y:A.y,width:A.width,height:A.height,stroke:A.color,strokeWidth:A.strokeWidth,draggable:"drag"===b},A.x+"-"+A.y):"circle"===A.tool?Object(s.jsx)(B.b,{x:A.x,y:A.y,f:!0,radius:A.radius,stroke:A.color,strokeWidth:A.strokeWidth,draggable:"drag"===b},A.x+"-"+A.y):void 0})),u.map((function(A,e){if("line"===A.tool){var C=Object(c.a)(A.points);return Object(s.jsx)(B.e,{points:C,stroke:A.color,fill:A.color,strokeWidth:A.strokeWidth,tension:.5,lineCap:"round",lineJoin:"round",draggable:"drag"===b},e)}if("arrow"===A.tool){var g=Object(c.a)(A.points);return Object(s.jsx)(B.a,{points:g,stroke:A.color,fill:A.color,strokeWidth:A.strokeWidth,tension:1,lineCap:"round",lineJoin:"round",draggable:"drag"===b},e)}})),i.map((function(A,e){if("line"===A.tool){var C=Object(c.a)(A.points);return Object(s.jsx)(B.e,{points:C,stroke:A.color,fill:A.color,strokeWidth:A.strokeWidth,tension:.1,lineCap:"round",lineJoin:"round",draggable:"drag"===b},e)}if("arrow"===A.tool){var g=Object(c.a)(A.points);return Object(s.jsx)(B.a,{points:g,stroke:A.color,fill:A.color,strokeWidth:A.strokeWidth,tension:1,lineCap:"round",lineJoin:"round",draggable:"drag"===b},e)}}))]})]})})})},w=function(A){var e=A.setDrawingColor,C="w-8 h-8 rounded-full border-2 border-gray-500 focus:outline-none focus:border-4";return Object(s.jsxs)("div",{className:"flex justify-between items-center absolute w-full bg-gray-100 inset-x-0 rounded-xl mx-auto p-3 bottom-16",children:[Object(s.jsx)("button",{onClick:function(){return e("black")},className:"".concat(C," bg-black focus:border-gray-600 hover:bg-gray-800")}),Object(s.jsx)("button",{onClick:function(){return e("red")},className:"".concat(C," bg-red-600 focus:border-red-200 hover:bg-red-800")}),Object(s.jsx)("button",{onClick:function(){return e("blue")},className:"".concat(C," bg-blue-600 focus:border-blue-200 hover:bg-blue-800")}),Object(s.jsx)("button",{onClick:function(){return e("green")},className:"".concat(C," bg-green-600 focus:border-green-200 hover:bg-green-800")}),Object(s.jsx)("button",{onClick:function(){return e("yellow")},className:"".concat(C," bg-yellow-600 focus:border-yellow-200 hover:bg-yellow-800")}),Object(s.jsx)("button",{onClick:function(){return e("purple")},className:"".concat(C," bg-purple-600 focus:border-purple-200 hover:bg-purple-800")})]})},k=C.p+"static/media/circle.4478e008.png",I=function(A){var e=A.setShapeTool,C=A.setTool,g=function(){C("none")};return Object(s.jsxs)("div",{className:"flex justify-between items-center absolute w-full bg-gray-100 inset-x-0 rounded-xl mx-auto p-3 bottom-16",children:[Object(s.jsx)("button",{onClick:function(){e("rectangle"),g()},className:"w-7 h-7 hover:bg-gray-400 hover:rounded-md hover:shadow",children:Object(s.jsx)("img",{className:"w-6 h-6 mx-auto",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAqISURBVHic7d2hjiVlHofhX3UQGDTJiLHcAIarIGQ14QYQCPyyaASCGyBoQuYqMNwAdkQnY3fMKGpF9wADDJDNdp+deZ8nOaqqc/7ue7uqzlfHeZ4DAFquLj0AAHD/BAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABL3xd046juNq23vb3t/27rYHt5+37m40AOAvPN12ffv5Ydujbd+f5/nTX/3hcZ7nyw8ex5vbPt726ba3/yejAgB36cm2L7Z9dZ7ns5ed9NIAOI7jg21fbnt4J+MBAHfp8bZPzvP87o8O/u4ZgOPGZ9u+ncUfAF5VD7d9exzHZ8dxHL89+MIVgNsTvt724f3NBwDcsW+2fXT+atH/7RWAf87iDwCvmw93s8b/7OcrALf3/L/d9rvLBADAK+/c9o/nzwQc53k+f9r/x7nnDwCvs8fb3jnP89nzWwAfz+IPAK+7h7tZ83fs5jmA6/mdPwAUPNn24PkOfxZ/AGh4e9t7V7vZ3hcA6Hj/ajd7+wMAHe9e7ealPgBAx4Nj27/nrX4AUPL02M3GAABAyO9eBgQAvP4EAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQNAbl/ri8zyPS303APy/OI7jvMT3ugIAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQdGw7Lz0EAHC/XAEAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAEHS17emlhwAA7tXTq23Xl54CALhX1wIAAHqur7b9cOkpAIB79cPVtkeXngIAuFePjt08CHi97e0LDwMA3L0n2x5cnef507YvLj0NAHAvvjjP86fjPM8dx/Hmth+3Pbz0VADAnXm87Z3zPJ9dbdt5ns+2fbLtvOhYAMBdObd9crvm/7IT4Hme3237/FJTAQB36vPbtX7bdpznL//0H8dxbPt624cXGAwAuBvfbPvo/NWi/8K7AG4PfLTtX3M7AABededu1vQXFv/tN1cAXjhwHB9s+3IeDASAV9Hj3dzz/+6PDr40ALY9/3XAx9s+nX0CAOBV8GQ3P+//6vkDf3/kTwPg55OO42rbe9ve3/butge3n7f+J6MCAP+Np7vZzO96N1v7P9r2/e0eP3/qbwUAAPB6ufrrUwCA140AAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAICg/wDr6LduLuvnuQAAAABJRU5ErkJggg==",alt:"rectangle"})}),Object(s.jsx)("button",{onClick:function(){e("circle"),g()},className:"w-7 h-7 hover:bg-gray-400 hover:rounded-md hover:shadow",children:Object(s.jsx)("img",{className:"w-6 h-6 mx-auto",src:k,alt:"circle"})}),Object(s.jsx)("button",{onClick:function(){e("line"),g()},className:"w-7 h-7 hover:bg-gray-400 hover:rounded-md hover:shadow",children:Object(s.jsx)("img",{className:"w-6 h-6 mx-auto",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAKi7AACouwE+dhOwAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlQTFRF////AAAAAAAAflGpXQAAAAJ0Uk5TADBQSv2UAAAAbUlEQVR4nO3XMQEAMBCEsDNZk1X5MlgSBaxsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1F5sPyZAgAABAgQIECBAgIA+IB8TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAagfDtE15bvStUQAAAABJRU5ErkJggg==",alt:"line"})}),Object(s.jsx)("button",{onClick:function(){e("arrow"),g()},className:"w-7 h-7 hover:bg-gray-400 hover:rounded-md hover:shadow",children:Object(s.jsx)("img",{className:"w-6 h-6 mx-auto",src:"data:image/png;base64,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",alt:"arrow"})})]})},S=function(){var A=Object(g.useContext)(l),e=A.strokeSize,C=A.handleStrokeSize;return Object(s.jsxs)("div",{className:"flex justify-between items-center absolute w-full bg-gray-100 inset-x-0 rounded-xl mx-auto p-3 bottom-16",children:[Object(s.jsx)("label",{htmlFor:"stroke",children:"stroke width"}),Object(s.jsx)("input",{type:"range",id:"stroke",min:"0",max:"10",step:"1",value:e,onChange:C,className:"rounded-lg overflow-hidden appearance-none bg-gray-400 h-8 w-10/12 "})]})},l=E.a.createContext(),Q=function(){var A=Object(g.useState)(2),e=Object(r.a)(A,2),C=e[0],E=e[1],t=Object(g.useState)(!1),o=Object(r.a)(t,2),c=o[0],B=o[1],a=Object(g.useState)("draw"),k=Object(r.a)(a,2),Q=k[0],d=k[1],J=Object(g.useState)("black"),u=Object(r.a)(J,2),j=u[0],f=u[1],b=Object(g.useState)("none"),D=Object(r.a)(b,2),v=D[0],h=D[1],m=Object(g.useState)({color:!1,stroke:!1,shape:!1}),O=Object(r.a)(m,2),x=O[0],p=O[1],y=function(A){(x.color||x.stroke||x.shape)&&p({color:!1,stroke:!1,shape:!1}),c&&B(!1)},G=function(A){p({color:!1,stroke:!1,shape:!1}),"move"===A.target.id?d("drag"):"draw"===A.target.id?(d("draw"),h("none")):"eraser"===A.target.id&&(d("eraser"),h("none"))};return Object(g.useEffect)((function(){var A=function(A){switch(A.key){case"z":B(!0);break;case"v":d("drag");break;case"d":d("draw");break;case"Escape":B(!1);break;case"Enter":d("clear")}};return document.addEventListener("keypress",A),function(){return document.removeEventListener("keypress",A)}}),[c]),Object(s.jsx)(g.Fragment,{children:Object(s.jsxs)(l.Provider,{value:{strokeSize:C,handleStrokeSize:function(A){E(A.target.value)},tool:Q,setTool:d,setIsModal:B,drawingColor:j,shapeTool:v,setShapeTool:h},children:[c&&Object(s.jsxs)("div",{className:"flex flex-col items-center justify-evenly bg-white z-10 shadow-md border border-gray-100 rounded-lg inset-0 m-auto absolute w-9/12 sm:w-3/12 h-32",children:[Object(s.jsx)("p",{className:"text-md md:text-lg",children:"This will clear everything"}),Object(s.jsxs)("div",{className:"flex justify-center w-full space-x-7 items-center text-center",children:[Object(s.jsx)("button",{onClick:function(){return d("clear")},className:"px-5 w-20 py-1 bg-indigo-800 text-white hover:bg-indigo-500 rounded-md",children:"Ok"}),Object(s.jsx)("button",{onClick:function(){return B(!1)},className:"px-5 py-1 w-20 bg-red-500 text-white hover:bg-red-400 rounded-md",children:"Cancel"})]})]}),Object(s.jsx)(i,{}),(x.color||x.stroke||c||x.shape)&&Object(s.jsx)("button",{className:"bg-black opacity-0 fixed inset-0 w-full  cursor-default",onClick:y,tabIndex:-1,onKeyDown:y,onTouchStart:y}),Object(s.jsxs)("section",{className:"fixed bottom-5 w-11/12 rounded-xl bg-gray-100 inset-x-0 mx-auto p-3 flex justify-between items-center",children:[Object(s.jsx)("button",{onClick:function(){return p(Object(n.a)(Object(n.a)({},x),{},{stroke:!x.stroke,color:!1,shape:!1}))},children:Object(s.jsx)("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",className:"w-7 h-6 hover:rounded-md hover:bg-gray-400 ".concat(x.stroke&&"bg-gray-400 rounded-md shadow"),children:Object(s.jsx)("line",{x1:"0",y1:"100",x2:"100",y2:"0",style:{stroke:"rgb(0,0,0)",strokeWidth:4}})})}),x.stroke&&Object(s.jsx)(S,{}),Object(s.jsx)("button",{onClick:G,children:Object(s.jsx)("img",{src:"https://img.icons8.com/ios-filled/100/000000/move.png",id:"move",alt:"drag",className:"w-7 h-7 hover:rounded-md hover:bg-gray-400 ".concat("drag"===Q&&"bg-gray-400 rounded-md shadow")})}),Object(s.jsx)("button",{className:"w-8 h-7 flex justify-center items-center hover:rounded-md hover:bg-gray-400 ".concat(x.shape&&"bg-gray-400 rounded-md shadow"),onClick:function(){return p(Object(n.a)(Object(n.a)({},x),{},{shape:!x.shape,stroke:!1,color:!1}))},children:Object(s.jsx)("img",{src:"https://img.icons8.com/windows/96/000000/shape.png",alt:"shape"})}),x.shape&&Object(s.jsx)(I,{setShapeTool:h,setTool:d}),Object(s.jsx)("button",{onClick:G,children:Object(s.jsx)("svg",{id:"draw",xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-8 hover:rounded-md hover:bg-gray-400 ".concat("draw"===Q&&"bg-gray-400 rounded-md shadow"),viewBox:"0 0 20 20",fill:"currentColor",children:Object(s.jsx)("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})})}),Object(s.jsx)("button",{onClick:function(){return p(Object(n.a)(Object(n.a)({},x),{},{color:!x.color,stroke:!1,shape:!1}))},children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 hover:rounded-md hover:bg-gray-400 ".concat(x.color&&"bg-gray-400 rounded-md shadow"),viewBox:"0 0 20 20",fill:"currentColor",children:Object(s.jsx)("path",{fillRule:"evenodd",d:"M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z",clipRule:"evenodd"})})}),x.color&&Object(s.jsx)(w,{setDrawingColor:f}),Object(s.jsx)("button",{onClick:G,children:Object(s.jsx)("img",{id:"eraser",src:"data:image/png;base64,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",alt:"eraser",className:"w-7 h-7 hover:rounded-md hover:bg-gray-400 ".concat("eraser"===Q&&"bg-gray-400 rounded-md shadow")})}),Object(s.jsx)("button",{onClick:function(){return B(!c)},children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 hover:rounded-md hover:bg-gray-400 ".concat(c&&"bg-gray-400 rounded-md shadow"),viewBox:"0 0 20 20",fill:"currentColor",children:Object(s.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})]})})},d=function(A){A&&A instanceof Function&&C.e(3).then(C.bind(null,26)).then((function(e){var C=e.getCLS,g=e.getFID,E=e.getFCP,t=e.getLCP,o=e.getTTFB;C(A),g(A),E(A),t(A),o(A)}))};o.a.render(Object(s.jsx)(E.a.StrictMode,{children:Object(s.jsx)(Q,{})}),document.getElementById("root")),d()}},[[25,1,2]]]);
//# sourceMappingURL=main.cda90a5d.chunk.js.map