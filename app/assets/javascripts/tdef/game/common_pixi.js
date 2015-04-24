//objects gragging hack
var dragObj;
function incredibleHack(){
	if (this.children)
		for (var i in this.children)
			incredibleHack.call(this.children[i]);
	if (this.dragging && this!=dragObj)
		this.dragging=false;
}

function startDragging(data) {
	//hack for dragging objects with dragging parents
	if (!dragObj || dragObj==this.parent)
		dragObj=this;
	
	if (this.actions.indexOf("drag")>-1 ){
		if (!this.mousePressPoint)
			this.mousePressPoint={};
		this.mousePressPoint.x = data.getLocalPosition(this.parent).x -
				this.position.x;
		this.mousePressPoint.y = data.getLocalPosition(this.parent).y -
				this.position.y;
		//start dragging
		if (dragObj==this)
			this.dragging = true;
	}
	//set point for click check
	if (!this.screenPressPoint)
		this.screenPressPoint={};
	var stage=this.stage || getEngine().stage;
	this.screenPressPoint.x = data.getLocalPosition(stage).x;
	this.screenPressPoint.y = data.getLocalPosition(stage).y;
	
	incredibleHack.call(this.stage);
}

function stopDragging(data) {
		if (this.actions.indexOf("press")>-1){
			if (!this.screenPressPoint)
				this.screenPressPoint={};
			var screenPressPoint={};
			var engine=getEngine();
			var stage=this.stage || engine.stage;
			screenPressPoint.x = data.getLocalPosition(stage).x;
			screenPressPoint.y = data.getLocalPosition(stage).y;
			if (Math.abs(this.screenPressPoint.x-screenPressPoint.x)<engine.settings.clickAreaSize && 
					Math.abs(this.screenPressPoint.y-screenPressPoint.y)<engine.settings.clickAreaSize){
				if (this.pressAction)
					this.pressAction();
			}
		}
		this.dragging = false;
		dragObj=false;
}

function proceedDragging(data){
	if (this.moveAction)
		this.moveAction(data);
	if(this.dragging){
		var position = data.getLocalPosition(this.parent);
		this.position.x = position.x - this.mousePressPoint.x;
		this.position.y = position.y - this.mousePressPoint.y;
		if (this.transformCorrection)
			this.transformCorrection();
	}
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

