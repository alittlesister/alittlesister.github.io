/*  */
var momObj = function(){
	// 大鱼位置
	this.x = [];
	this.y = [];
	//大鱼游动角度
	this.angle = [];
	//大鱼眼睛、身体、尾巴
	this.bigEye = [];
	this.bigBody = [];
	this.bigTail = [];
	//大鱼眼睛图片变量切换
	this.bigEyeIndex = 0;
	this.bigEyeStart = 1;//切换图片计时开始
	this.bigEyeEnd = 2000;//切换图片计时结束
	//大鱼身体图片变量切换
	this.bigBodyIndex = 0;
	this.bigBodyStart = 1;//切换图片计时开始
	this.bigBodyEnd = 1000;//切换图片计时结束
	//大鱼尾巴图片变量切换
	this.bigTailIndex = 0;
	this.bigTailStart = 1;//切换图片计时开始
	this.bigTailEnd = 1000;//切换图片计时结束
}
momObj.prototype.init = function(){
	// 初始化大鱼位置在画布中间
	this.x = canWidth*0.5;//大鱼位置
	this.y = canHeight*0.5;
	this.angle = 0;//初始化角度0
	// 加载大鱼眼睛的两张图片
	for(var i=0;i<2;i++){
		this.bigEye[i] = new Image();
		this.bigEye[i].src = "./src/bigEye"+i+".png";	
	}
	// 加载大鱼身体8张图片
	for(var i=0;i<8;i++){
		this.bigBody[i] = new Image();
		this.bigBody[i].src = "./src/bigSwim"+i+".png";	
		
	}
	// 加载大鱼尾巴8张图片
	for(var i=0;i<8;i++){
		this.bigTail[i] = new Image();
		this.bigTail[i].src = "./src/bigTail"+i+".png";	
	}
	
}
momObj.prototype.draw = function(){
	// 绘制大鱼，在前面的画布
	// 使用全局变量mx,my鼠标位置驱动大鱼移动
	//驱向移动
	this.x = lerpDistance(mx,this.x,0.98);
	this.y = lerpDistance(my,this.y,0.99);
	
	//获取鼠标与大鱼坐标差
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	//获取鼠标与大鱼角度差
	var beta = Math.atan2(deltaY,deltaX)+Math.PI;
	//获取鼠标趋向鼠标角度
	this.angle = lerpAngle(beta,this.angle,0.9);

	// 切换大鱼的尾巴
	this.bigTailStart = this.bigTailStart+deltaTime;
	if(this.bigTailStart>this.bigTailEnd){
		// 计时开始,赋值初始,(重新开始计数)
		this.bigTailStart = 1;
		this.bigTailIndex = (this.bigTailIndex+1)%8;
	}
	// 切换大鱼的身体
	this.bigBodyStart = this.bigBodyStart+deltaTime;
	if(this.bigBodyStart>this.bigBodyEnd){
		// 计时开始,赋值初始,(重新开始计数)
		this.bigBodyStart = 1;
		this.bigBodyIndex = (this.bigBodyIndex+1)%8;
		if(this.bigBodyIndex>=7){
			this.bigBodyIndex = 7;
		}
	}
	// 切换大鱼的眼睛
	this.bigEyeStart = this.bigEyeStart+deltaTime;
	if(this.bigEyeStart>this.bigEyeEnd){
		// 计时开始,赋值初始,(重新开始计数)
		this.bigEyeStart = 1;
		this.bigEyeIndex = (this.bigEyeIndex+1)%2;
		if(this.bigEyeIndex==1){
			this.bigEyeEnd = 200;
		}
		if(this.bigEyeIndex==0){
			this.bigEyeEnd = 2000;
		}
	}
	ctx1.save();//绘制大鱼之前保存所有状态信息
	/* 
	设置原点
	设置旋转角度
	绘制大鱼身体
	绘制大鱼尾巴
	绘制大鱼眼睛
	 */
	//绘制身体
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(
	this.bigBody[this.bigBodyIndex],
	-this.bigBody[this.bigBodyIndex].width*0.5,
	-this.bigBody[this.bigBodyIndex].height*0.5,
	);
	//绘制尾巴
	ctx1.drawImage(
	this.bigTail[this.bigTailIndex],
	-this.bigTail[this.bigTailIndex].width*0.5+30,
	-this.bigTail[this.bigTailIndex].height*0.5
	);
	// 绘制眼睛
	ctx1.drawImage(
	this.bigEye[this.bigEyeIndex],
	-this.bigEye[this.bigEyeIndex].width*0.5,
	-this.bigEye[this.bigEyeIndex].height*0.5
	);
	
	
	
	ctx1.restore();//绘制结束后恢复
}










