
function ASprite(textures,params){
	PIXI.Sprite.call(this, texture[0]);
	params=params || {}
	this.engine=getEngine() || {frameTime:1000/30};
	this.current_frame=params.current_frame || 0
	this.frames=textures
	this.loop = params.loop || true
	this.updateFrame();
	this.count=params.count || 1;
	this.countStep=params.countStep || 13*this.engine.frameTime/1000;//0.2;
	this.counter=0;
	this.callbacks=params.callbacks || {obj:{}}
	this.callbacks.actions= this.callbacks.actions || {}
	if (params.width)
		this.width=params.width;
	if (params.height)
		this.height=params.height;
	if (params.anchor)
		this.anchor=params.anchor;
}
ASprite.prototype=new PIXI.Sprite()
ASprite.prototype.constructor= ASprite

ASprite.prototype.getTexture= function (i){
	if (i)
		return this.frames[i];
	else
		return this.texture;
}
ASprite.prototype.setFrame= function (n,texture){
	this.frames[n]=texture
	if (this.current_frame==n)
		this.updateFrame()
}

ASprite.prototype.updateFrame= function (){
//	this.texture=this.frames[this.current_frame]
	this.setTexture(this.frames[this.current_frame])
}

ASprite.prototype.chooseFrame= function (n){
	this.current_frame=n
	this.updateFrame()
}

ASprite.prototype.upFrame= function (n){
	this.counter+=this.countStep;
	if (this.counter>=this.count){
		this.counter=0;
		this.nextFrame();
	}
}

ASprite.prototype.nextFrame= function (n){
	this.current_frame++
	if (this.current_frame==this.frames.length){
		if (this.loop)
			this.current_frame=0
		else{
			this.current_frame--
			if (this.callbacks.obj[this.callbacks.actions.endAnimation])
				this.callbacks.obj[this.callbacks.actions.endAnimation]();
		}
	}
	this.updateFrame()
}

ASprite.prototype.prevFrame= function (n){
	if (this.current_frame>0){
		this.current_frame--
		this.updateFrame()
	}
}

ASprite.prototype.setHeight= function (height){

}

function getTextureFrames(opt){
	var a=[];
//	for (var i in opt){
		var base=new PIXI.BaseTexture.fromImage(opt.src);
		var height=opt.height || base.height;
		var width=opt.width || height;
		var frames=opt.frames || base.width/size;
//		a[i]=[];
		for(var j=0;j<frames;j++){
			a.push(new PIXI.Texture(base, new PIXI.Rectangle(width*j, 0, width, height)));
		}
//	}
	return a;
}

