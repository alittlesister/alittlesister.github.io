$(document).ready(function () {
	fir();
	sec();
	thir();
	four();
	toggle();
	retu();
	
	
	
})

	var video = document.querySelector(".video1 video");
	var video2 = document.querySelector(".video2 video");
	
	function fir(){
			$(".start").click(function () {
				$(".actOne").fadeOut(100);
				$(".actTwo").fadeIn(1000);
				$(".video1").fadeIn(1000);
				video.play();
			//2
					setTimeout(function () {
						video.pause();
						$(".video1").fadeOut("slow");
						$(".video2").fadeIn("slow");
						video2.play();
						video2.loop = true;
						video.load();
						$(".show").fadeIn(1000);
						
							$(".controller1").fadeIn(2000);
							$(".controller2").fadeIn(4000);
							$(".controller3").fadeIn(6000);
							$(".return").fadeIn(8000);
								
							
						},28000);
			})
	}

	function sec(){
				//3
			$(".controller1").click(function () {
				$(".intro2").fadeOut(1);
				$(".intro3").fadeOut(1);
				$(".intro1").fadeIn(1000);
				$(".education2_part1").fadeOut(1000);
				$(".education2_part2").fadeOut(1000);
				$(".education2_part3").fadeOut(1000);
			})
			$(".controller2").click(function () {
				$(".intro1").fadeOut(1);
				$(".intro3").fadeOut(1);
				$(".intro2").fadeIn(1000);
				$(".education2_part1").fadeOut(1000);
				$(".education2_part2").fadeOut(1000);
				$(".education2_part3").fadeOut(1000);
			})
			$(".controller3").click(function () {
				$(".intro2").fadeOut(1);
				$(".intro1").fadeOut(1);
				$(".intro3").fadeIn(1000);
				$(".part1").fadeIn(2000);
				$(".part2").fadeOut(1);
				$(".part3").fadeOut(1);
				$(".part1 img").fadeIn(2000);
			})
			
			
			$(".close1").click(function () {
				$(".intro1").fadeOut(1000);
			})
			$(".close2").click(function () {
				$(".intro2").fadeOut(1000);
			})
			$(".close3").click(function () {
				$(".intro3").fadeOut(1000);
				$(".part1").fadeOut(1000);
				$(".education2_part1").fadeOut(1000);
				$(".education2_part2").fadeOut(1000);
				$(".education2_part3").fadeOut(1000);
				
				
			})
			
	}

	function thir(){
		$(".controller1_1").click(function(){
				$(".part1").fadeIn("slow");
				$(".part1 img").fadeIn("slow");
				$(".part2").fadeOut(1);
				$(".part3").fadeOut(1);
				$(".education2_part1").fadeOut(1000);
				$(".education2_part2").fadeOut(1000);
				$(".education2_part3").fadeOut(1000);
				
			})
			$(".controller1_2").click(function(){

				$(".part1").fadeOut(1);
				$(".part3").fadeOut(1);
				$(".part2").fadeIn("slow");
				$(".education2_part1").fadeOut(1000);
				$(".education2_part2").fadeOut(1000);
				$(".education2_part3").fadeOut(1000);
				
			})
			$(".controller1_3").click(function(){
				$(".part1").fadeOut(1);
				$(".part2").fadeOut(1);
				$(".part3").fadeIn("slow");
				$(".education2_part1").show("slow");
				$(".education2_part2").hide(1);
				$(".education2_part3").hide(1);
			})
	}


		function four(){
			$(".education1_con1").click(function(){

						$(".education2_part2").hide(1);
						$(".imm").fadeOut(1);
						$(".education2_part3").hide(1);
						$(".education2_part1").show(500);
						
					})
					$(".education1_con2").click(function(){

						$(".education2_part1").hide(1);
						$(".education2_part3").hide(1);
						$(".education2_part2").show(500);
						$(".imm").eq(c).fadeIn(1).siblings(".imm").hide(1);
						
					})
					
					$(".education1_con3").click(function(){

						$(".education2_part2").hide(1);
						$(".education2_part1").hide(1);
						$(".imm").hide(1);
						$(".education2_part3").show(500);
						
					})
			
		}
			var c=1;
		function toggle(){
					
							$(".left").click(function () {
						        c++;
						        c=c==4?0:c;
						        $(".imm").eq(c).fadeIn(1).siblings(".imm").hide(1);
							})
								$(".right").click(function () {
						        c++;
						        c=c==4?0:c;
						        $(".imm").eq(c).fadeIn(1).siblings(".imm").hide(1);
							})
		}
		
		function retu(){
			$(".return").click(function(){
				$(".actOne").fadeIn(1000);
				$(".actTwo").fadeOut(100);
				$(".video2").fadeOut(100);
				$(".show").fadeOut(100);
				$(".intro1").fadeOut(100);
				$(".intro2").fadeOut(100);
				$(".intro3").fadeOut(100);
			})
			
			//2
		}
