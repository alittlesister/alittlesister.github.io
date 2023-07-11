/*
1、声明海葵
高【
x[]
2、初始化
随机0·1*50+200
3、绘制方式
	循环50
	beginPath()
*/
//创建海葵
var aneObj = function(){
	//创建数组保存每一个海葵高度
	this.len=[];
	//创建数组保存每一个海葵X坐标
	this.x = [];
	
	aneObj.prototype.num = 50;
	aneObj.prototype.init=function () {
		for (var i=0;i<this.num;i++) {
			//初始化海葵高度
			this.len[i]=200+Math.random()*50;
			//初始化海葵x = i*16+20随机值
			this.x[i] = i*16+Math.random()*20;
		}
		//console.log(this.len);
		//console.log(this.x);
	};
	aneObj.prototype.draw = function(){
		//保存画笔当前状态
		ctx2.save();
		//描边宽度
		ctx2.lineWidth=20;
		//透明度
		ctx2.globalAlpha=0.6;
		//给线段末尾加圆角
		ctx2.lineCap="round";
		//紫色
		ctx2.strokeStyle="#3b154e";
		//循环50次
		for (var i=0;i<this.num;i++) {
			//开始新路径
			ctx2.beginPath();
			//移动画布最低端
			ctx2.moveTo(this.x[i],canHeight);
			//绘制一条直线	画布高度->海葵高度
			ctx2.lineTo(this.x[i],canHeight-this.len[i]);
			ctx2.stroke();
		}
		
		
		//恢复画笔状态
		ctx2.restore();
	}
	
}
