(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{274:function(t,i,h){},323:function(t,i,h){"use strict";h(274)},370:function(t,i,h){"use strict";h.r(i);h(91);class s{constructor(t,i){this.x=t,this.y=i}}class e{constructor(t,i){this.options=i,this.canvas=document.querySelector(t),this.ctx=this.canvas.getContext("2d"),this.init(i)}init(t){const{width:i,height:h,cellWidth:s,cellHeight:e,scrollBar:o}=t,a=this.canvas;a.width=i,a.height=h,this.width=i,this.height=h,this.lastTranslateX=0,this.lastTranslateY=0,this.cellWidth=s||100,this.cellHeight=e||30,this.scrollBar=o,a.addEventListener("mousedown",this.mousedown.bind(this)),a.addEventListener("mousemove",this.mousemove.bind(this)),a.addEventListener("mouseup",this.mouseup.bind(this)),window.addEventListener("mouseup",()=>{this.touched=!1}),this.scrollBar&&(this.scrollBarSize=10,this.drawScrollBar())}drawRoundRect(t,i,h=!1,e="#000"){const{ctx:o}=this,{x:a,y:c,width:l,height:n}=t,r=new s(a+i,c),d=new s(a+l,c),u=new s(a+l,c+n),v=new s(a,c+n),w=new s(a,c);o.beginPath(),o.save(),o.moveTo(r.x,r.y),o.arcTo(d.x,d.y,u.x,u.y,i),o.arcTo(u.x,u.y,v.x,v.y,i),o.arcTo(v.x,v.y,w.x,w.y,i),o.arcTo(w.x,w.y,r.x,r.y,i),o.closePath(),h?(o.fillStyle=e,o.fill()):(o.strokeStyle=e,o.stroke()),o.restore()}drawScrollBar(){const{scrollBarSize:t,ctx:i}=this,{maxWidth:h,maxHeight:s,width:e,height:o}=this,a=o-t;i.save();const c=e/(h/e);this.horizontalBarWidth=c,this.xBarRect={x:0+(this.touchBarMoveX||0),y:a,width:c,height:t},this.drawRoundRect(this.xBarRect,8,!0,"#ddd");const l=o/(s/o);this.horizontalBarHeight=l,this.yBarRect={x:e-t,y:0+(this.touchBarMoveY||0),width:t,height:1===l?0:l},this.drawRoundRect(this.yBarRect,8,!0,"#ddd"),i.restore()}windowPositionToCanvasPosition(t,i,h){const s=h.getBoundingClientRect(),{left:e,top:o}=s;return{x:t-e,y:i-o}}handleScrollDistance(t,i,h){const{maxWidth:s,maxHeight:e,width:o,height:a}=h;return t<=-(s-o)?t=-(s-o):t>=0&&(t=0),i<=-(e-a)?i=-(e-a):i>=0&&(i=0),[t,i]}inPath(t,i,h){return t>h.x&&t<h.x+h.width&&i>h.y&&i<h.y+h.height}mousedown(t){this.touched=!0;const{clientX:i,clientY:h}=t;this.touchStartX=i,this.touchStartY=h;const s=this.windowPositionToCanvasPosition(i,h,this.canvas),{xBarRect:e,yBarRect:o}=this;this.isTouchXBar=this.inPath(s.x,s.y,e),this.isTouchYBar=this.inPath(s.x,s.y,o)}mousemove(t){if(!this.touched)return;const{touchStartX:i,touchStartY:h,ctx:s}=this,{clientX:e,clientY:o}=t;let a=e-i,c=o-h;if(this.isTouchXBar){this.touchBarMoveX=a+(this.lastTouchBarMoveX||0);let t=(this.lastMoveDistanceX||0)-a/this.width*this.maxWidth;this.moveDistanceX=t}else if(this.isTouchYBar){this.touchBarMoveY=c+(this.lastTouchBarMoveY||0);let t=(this.lastMoveDistanceY||0)-c/this.height*this.maxHeight;this.moveDistanceY=t}else{const t=a+(this.lastMoveDistanceX||0),i=c+(this.lastMoveDistanceY||0),[h,s]=this.handleScrollDistance(t,i,this);this.moveDistanceX=h,this.moveDistanceY=s;let e=(this.lastTouchBarMoveX||0)-a/this.maxWidth*this.width,o=(this.lastTouchBarMoveY||0)-c/this.maxHeight*this.height;this.touchBarMoveX=e,this.touchBarMoveY=o}const[l,n]=this.handleScrollDistance(this.moveDistanceX,this.moveDistanceY,this);this.moveDistanceX=l,this.moveDistanceY=n,this.touchBarMoveX+this.horizontalBarWidth>=this.width?this.touchBarMoveX=this.width-this.horizontalBarWidth:this.touchBarMoveX<=0&&(this.touchBarMoveX=0),this.touchBarMoveY+this.horizontalBarHeight>=this.height?this.touchBarMoveY=this.height-this.horizontalBarHeight:this.touchBarMoveY<=0&&(this.touchBarMoveY=0),s.save(),this.draw(),s.restore()}mouseup(t){this.touched=!1,this.lastTouchBarMoveX=this.touchBarMoveX,this.lastTouchBarMoveY=this.touchBarMoveY,this.lastMoveDistanceX=this.moveDistanceX,this.lastMoveDistanceY=this.moveDistanceY}drawCell({x:t,y:i,text:h,width:s=this.cellWidth,height:e=this.cellHeight,backgroundColor:o}){const a=this.ctx;a.save(),a.translate(this.moveDistanceX,this.moveDistanceY),a.beginPath(t,i),a.fillStyle=o,a.fillRect(t,i,s,e),a.lineWidth=.5,a.strokeRect(t,i,s,e);const{width:c}=a.measureText(h),l=t+(s-c)/2,n=i+20;a.fillStyle="#000",a.font="bold 16px serif",a.fillText(h,l,n),a.restore()}initCells(){this.cells=[],this.maxWidth=Math.max(20*this.cellWidth,this.width),this.maxHeight=Math.max(20*this.cellHeight,this.height);for(let t=0;t<20;t++){const i=[];for(let h=0;h<20;h++){const s={x:100*h,y:30*t,width:this.cellWidth,height:this.cellHeight,backgroundColor:t%2==0?"#87ceeb":"#ffffff",text:t+","+h};i.push(s)}this.cells.push(i)}}draw(){this.ctx.clearRect(0,0,this.width,this.height),this.cells&&this.cells.length||this.initCells(),this.cells.forEach(t=>{t.forEach(t=>{this.drawCell(t)})}),this.drawScrollBar()}}var o={mounted(){const t=new e("#canvas-sheet",{width:800,height:500,cellWidth:100,cellHeight:30,scrollBar:!0});t.draw(),window.sheet=t}},a=(h(323),h(14)),c=Object(a.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",[t("canvas",{attrs:{id:"canvas-sheet"}})])}],!1,null,"b3831464",null);i.default=c.exports}}]);