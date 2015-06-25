Types={}
Types.fps=20;
Types.lines=12;	
Types.images={};

Types.canvas_init =function (shift){
	var lines=Types.lines
	cnv=document.createElement('canvas');
	cnv.height=shift*lines;
	cnv.width=shift*lines;
	ctx = cnv.getContext('2d');
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, cnv.width, cnv.height);
	ctx.strokeStyle = "#000000";
	for(var i=0;i<lines;i++){
		ctx.beginPath();
		ctx.moveTo(0, shift*i);
		ctx.lineTo(cnv.height, shift*i);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(shift*i, 0);
		ctx.lineTo(shift*i,cnv.width);
		ctx.stroke();
	}
	return cnv;
}


Types.move_map=function (){
	var style=window.getComputedStyle(Types.cnv)
	style={width: parseInt(style.width),height: parseInt(style.height)}
	var length=Math.sqrt(Types.direction.x*Types.direction.x+Types.direction.y*Types.direction.y)
	var scale=(style.width)/Types.background.width;
	var shift=Types.shift*scale;
	var size={width:Types.background.width*scale,height:Types.background.height*scale}
	var speed=Types.speed//need to set speed multiplier
	Types.cnv.width=style.width
	Types.cnv.height=style.height
//	console.log(Types.position)
	if (length){
		Types.position.x+=Types.direction.x*speed*shift/Types.fps/length;
		Types.position.y+=Types.direction.y*speed*shift/Types.fps/length;
	}
	if (Types.position.x<0)
		Types.position.x=shift;
	if (Types.position.x>shift)
		Types.position.x=0;
	if (Types.position.y>shift)
		Types.position.y=0;
	if (Types.position.y<0)
		Types.position.y=shift;
	Types.ctx.drawImage(Types.background,Types.position.x-shift,Types.position.y-shift,size.height+shift,size.width+shift)
}


Types.setSpeed= function (s){
	Types.speed=s;
}