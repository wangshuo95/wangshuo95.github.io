var i=0; //记录第几张图片
var inter;//存放计时器
//切换图片
function pic(){
  if(i==4){
	  i=0;
	  $(".tupian").animate({left:"0"},800,function(){$(".num li:first").addClass("cur").siblings().removeClass("cur");})
	  }
	else{
		$(".tupian").animate({left:"-=320"},800,function(){
			$(".num li:eq("+i+")").addClass("cur").siblings().removeClass("cur");
		})
	i++;
		}
	}
	//当悬停在li上的时候切换图片
	function cs(){
		var k=i*320;
		$(".tupian").stop(true,true).animate({left:"-"+k},800)
		
		}
	//加载函数
$(function(){
	inter=setInterval(pic,3000);
	$(".num li").hover(function(){
		//停止计时器
		clearInterval(inter);
		var a=$(this).text();
		//转换类型
		i=parseInt(a)-1;
	cs();
	$(this).addClass("cur").siblings().removeClass("cur");
		},function(){
			
		inter=setInterval(pic,3000);
			
	})
	})
