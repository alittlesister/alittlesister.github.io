//baby——小鱼
function babyObj(){  }
babyObj.prototype.init = function(){
	// 小鱼位置
	this.x = [];
	this.y = [];
	this.angle = [];
	this.babyEye = [];
	this.babyBody = [];
	this.babyTail = [];
	// 身体图片[20]
	this.babyBodyIndex = 0;
	this.babyBodyStart = 1;
	this.babyBodyEnd = 2000;
	// 眼睛图片[2]
	this.babyEyeIndex = 0;
	this.babyEyeStart = 1;
	this.babyEyeEnd = 3000;
	// 尾巴图片[8]
	this.babyTailIndex = 0;
	this.babyTailStart = 1;
	this.babyTailEnd = 1000;
	//
	this.x = canWidth*0.5;
	this.y = canHeight*0.5;
	this.angle=0;
	for(var i=0;i<20;i++){
		this.babyBody[i] = new Image();
		this.babyBody[i].src = "./src/babyFade"+i+".png";
	}
	for(var i=0;i<2;i++){
		this.babyEye[i] = new Image();
		this.babyEye[i].src = "./src/babyEye"+i+".png";
	}
	
	for(var i=0;i<8;i++){
		this.babyTail[i] = new Image();
		this.babyTail[i].src = "./src/babyTail"+i+".png";
	}
}
babyObj.prototype.draw = function(){
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	//小鱼趋向大鱼距离
	this.x = lerpDistance(mom.x,this.x,0.98);
	this.y = lerpDistance(mom.y,this.y,0.99);
	//小鱼趋向大鱼角度
	
	//小鱼趋向大鱼坐标差
	var deltaY = mom.y-this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle = lerpAngle(beta,this.angle,0.6);
	//切换小鱼身体
	this.babyBodyStart+=deltaTime;
	if(this.babyBodyStart>this.babyBodyEnd){
		this.babyBodyIndex = (this.babyBodyIndex+1);
		this.babyBodyStart = 0;
		if(this.babyBodyIndex>=19){
			this.babyBodyIndex=19;
		}
	}
	//切换小鱼尾巴
	this.babyTailStart = this.babyTailStart+deltaTime;
	if(this.babyTailStart>this.babyTailEnd){
		// 计时开始,赋值初始,(重新开始计数)
		this.babyTailStart = 1;
		this.babyTailIndex = (this.babyTailIndex+1)%8;
	}
	// 切换小鱼的眼睛
	this.babyEyeStart = this.babyEyeStart+deltaTime;
	if(this.babyEyeStart>this.babyEyeEnd){
		// 计时开始,赋值初始,(重新开始计数)
		this.babyEyeStart = 1;
		this.babyEyeIndex = (this.babyEyeIndex+1)%2;
		if(this.babyEyeIndex==1){
			this.babyEyeEnd = 200;
		}
		if(this.babyEyeIndex==0){
			this.babyEyeEnd = 3000;
		}
	}
	//绘制小鱼的身体
	ctx1.drawImage(
		this.babyBody[this.babyBodyIndex],
		-this.babyBody[this.babyBodyIndex].width*0.5,
		-this.babyBody[this.babyBodyIndex].height*0.5
	);
	//绘制小鱼的尾巴
	ctx1.drawImage(
		this.babyTail[this.babyTailIndex],
		-this.babyTail[this.babyTailIndex].width*0.5+23,
		-this.babyTail[this.babyTailIndex].height*0.5
	);
	//绘制小鱼的眼睛
	ctx1.drawImage(
		this.babyEye[this.babyEyeIndex],
		-this.babyEye[this.babyEyeIndex].width*0.5,
		-this.babyEye[this.babyEyeIndex].height*0.5
	);
	ctx1.restore();
}