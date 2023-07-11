/*
大鱼小鱼程序js入口程序
控制游戏整个流程
核心函数
game		入口函数->页面加载成功调用
init		初始化游戏角色(加载图片，坐标，速度)
gameloop	循环绘制游戏的角色
*/
document.body.onload = game;
// 1、创建变量保存各种不同数据 
	// 1.1、创建变量保存画布
	var c1 = null;//前面画布[大鱼，小鱼]
	var c2 = null;//后面画布[背景，海葵，食物]
	// 1.2、创建变量保存画笔
	var ctx1 = null;
	var ctx2 = null;
	// 1.3、创建变量保存画布宽度和高度
	var canWidth=null;
	var canHeight=null;
	//创建两个变量保存上一帧和当前帧时间间隔
var lastTime = null;  //上一帧被执行时间
var deltaTime = null; //二帧间隔时间
	// 1.4、创建变量保存背景图片对象
	var bgPic=new Image();
	//1.5	创建变量保存海葵对象
	var ane = null;
	//食物对象创建
	var fruit = null;
	//大鱼对象创建
	var mom = null;
	//小鱼对象创建
	var baby = null;
	// 创建变量保存鼠标位置
	var mx = 0;
	var my = 0;
/*游戏入口*/
function game(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}
/*游戏初始化*/
function init(){
	c1 = document.querySelector("#canvas1");//第一个画布
	c2 = document.querySelector("#canvas2");//第二个画布
	ctx1 = c1.getContext("2d");//第一个画笔[大鱼，小鱼]
	ctx2 = c2.getContext("2d");//第二个画笔[背景，海葵，食物]
	canWidth = c1.width;	//画布宽
	canHeight = c1.height;	//画布高
	bgPic.src = "src/background.jpg";//画布背景
	//console.log(canWidth,canHeight);
	// bg和time
	lastTime = Date.now();
	deltaTime=0;
	//海葵对象,初始化海葵方法,绘制海葵
	ane = new aneObj();			
	ane.init();
	
	fruit = new fruitObj();
	fruit.init();
	
	mom = new momObj();
	mom.init();
	// 初始化鼠标位置画布中心
	mx = canWidth*0.5;
	my = canHeight*0.5;
	c1.addEventListener("mousemove",onMouseMove,false);//false:捕获还是冒泡的时候
	baby = new babyObj();
	baby.init();
	
}
/*游戏定时绘制游戏色*/
function gameloop(){
	//清空画布原有的内容
	ctx1.clearRect(0,0,canWidth,canHeight);
	//创建定时器，循环调用调用gameloop
	requestAnimFrame(gameloop);
	deltaTime = Date.now() - lastTime;
	if(deltaTime>30){
		deltaTime=30;
	}
	//console.log(deltaTime);
	//console.log("gameloop……");
	//绘制背景
	drawBackground();
	//绘制海葵
	ane.draw();
	// 绘制食物
	fruit.draw();
	//监听画布果实
	fruitMonitor();
	mom.draw();
	//食物碰撞检测
	momFruitsCollision();
	//小鱼大鱼碰撞检测
	momBabyCollision();
	baby.draw();
}
// 创建函数监听鼠标位置
function onMouseMove(e){
	// 兼容
	if(e.offsetX || e.layerX){
		mx = e.offsetX == undefined?e.layerX:e.offsetX;
	}
	if(e.offsetY || e.layerY){
		my = e.offsetY == undefined?e.layerY:e.offsetY;
	}
}

