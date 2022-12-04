function Ball( x, y, r, color ){
  this.x = x || 0;
  this.y = y || 0;
  this.radius = r || 20;
  this.color = color || '#09f';
}
Ball.prototype = {
  constructor : Ball,
  stroke : function( cxt ){
      cxt.strokeStyle = this.color;
      cxt.beginPath();
      cxt.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
      cxt.closePath();
      cxt.stroke();
  },
  fill : function( cxt ){
      cxt.fillStyle = this.color;
      cxt.beginPath();
      cxt.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
      cxt.closePath();
      cxt.fill();
  }
}