// 碰撞检测
// 大鱼、食物碰撞
// 大鱼、小鱼碰撞
/*
大鱼和某个食物距离 小于等于30像素
食物被大鱼吃了
将食物alive[i]=false
*/
var collisionNum = 900;
var babyColMom = 900;
function momFruitsCollision(){
	// 判断所有事物
	//判断当前是无状态
	//当前食物和大鱼之间距离
	//小于等于30像素，吃了
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			var len = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			if(len<collisionNum){
				fruit.dead(i);
			}
		}
	}
	
}
//检查大鱼与小鱼是否发生碰撞
//如果发生碰撞，让小鱼身体的图片下标变成1
function momBabyCollision(){
	var len = calLength2 (mom.x,mom.y,baby.x,baby.y);
	if(len<babyColMom){
		baby.babyBodyIndex = 0;
	}
}

