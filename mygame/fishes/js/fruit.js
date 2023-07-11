console.log("食物");
//食物类又称为果实类
var fruitObj = function(){
    //console.log(1);
    this.alive = [];   //是否活动状态 true false
    this.x = [];       //果实位置
    this.y = [];
    this.l = [];       //果实长度(大小)
    this.spd = [];     //果实速度(生长，漂浮)
    this.orange = new Image();
    this.blue = new Image();
    this.fruitType = [];  //果实当前类型

}
//果实数量
fruitObj.prototype.num = 30;
//果实初始化方法
fruitObj.prototype.init = function(){
    //console.log(2);
    for(var i=0;i<this.num;i++){
        //以下三个数据测试
        this.alive[i] = false;//默认果实不活动
        this.x[i] = 0;        //x  出生时指定
        this.y[i] = 0;        //y  出生时指定
        this.spd[i] = Math.random()*0.017+0.003;
        this.fruitType[i] = "";
        this.l[i] = 0;
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
}
//果实绘制方法
fruitObj.prototype.draw = function(){
    //console.log(3);
    for(var i=0;i<this.num;i++){
        //判断当前果实是否活动状态
        if(this.alive[i]){
            //从小变大 2 ~ 14
            if(this.l[i]<14){
                //变大
                this.l[i]+=this.spd[i]*deltaTime;
            }else{
                //后向上漂浮动
                this.y[i]-=this.spd[i]*3*deltaTime;
            }
            //当前类型黄色蓝色
            if(this.fruitType[i]=="blue"){
                //创建变量保存图片
                var pic = this.blue;
            }else{
                var pic = this.orange;
            }
            //console.log(this.l[i]+":"+this.y[i]+":"+pic);
            //绘制食物
            ctx2.drawImage(pic,
                this.x[i]-this.l[i]*0.5,
                this.y[i]-this.l[i]*0.5
                ,this.l[i],this.l[i]);

            //如果当前果实漂出屏幕状态false
			if(this.y[i]<10){
				this.alive[i]=false;
			}
        }
    }
}

//添加食物出生方法
//食物攻到一个随机海葵，获取海葵位置，产生食物,i,每个果实出生
fruitObj.prototype.born = function(i){
	/*
	随机找到一个海葵，获取海葵位置x,y,赋值果实，设置果实宽度0，状态活动，随机设置果实颜色
	*/
	   var aneId = Math.floor(Math.random()*ane.num);
	   this.x[i]=ane.x[aneId];
	   this.y[i]=ane.x[aneId];
	   this.y[i]=canHeight - ane.len[aneId];
	   this.l[i]=0;
	   this.alive[i]=true;
	   this.fruitType[i] = Math.random()<0.9?"blue":"orange";
   
}


//添加监听食物数量函数

function fruitMonitor(){
	var num = 0;
	for (var i = 0;i<fruit.num;i++) {
		if(fruit.alive[i]){
			num++;
		}
	}
	if(num<15){
		sendFruit();
		return;//每次出生一个果实
	}
}
//食物30个,要求游戏15个成绩食物,一旦少于这个数量,就要出生新食物
function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}

//食物状态修改方法
fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
}