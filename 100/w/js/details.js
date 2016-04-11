// JavaScript Document
/*切换大图s*/
$(function(){
	$(".piclist li").click(function(){
		var path=$(this).children("img").attr("src");
		//获取最后一个点
		var index=path.lastIndexOf(".");
		//截取字符串到点之前
		var str=path.substring(0,index);
		//更改属性
		$(".jqzoom img").attr("src",str+"_small.jpg").attr("jqimg",str+"_big.jpg");
		
		})
	
	
	})
	
	//切换
	$(function(){
		$("#aa li").click(function(){
			//var text=$(this).text();
			$(this).addClass("cc");
			$(this).siblings("li").removeClass("cc");
			var cc=$(this).attr("num");
			$("#bb .hi:eq("+cc+")").show().siblings().hide();
			//if(text=="产品属性"){
				//$("#bb .hi").hide();
				//$("#bb .hi:first").show();
				//}
			//else if(text=="产品尺码表"){
			//$("#bb .hi").hide();
				//$("#bb .hi:eq(1)").show();
				//
				//}
				//else if(text=="产品介绍"){
			//$("#bb .hi").hide();
				//$("#bb .hi:eq(2)").show();
				//}
			})
		
		})
		
		
		/*切换颜色*/
		
		$(function(){
			$("#dv4 li").click(function(){
				var path=$(this).children("img").attr("src");
				
				var index=path.lastIndexOf(".");
				
				var str=path.substring(0,index);
				
				$("#piclist img:eq(0)").attr("src",str+"_one.jpg");
				
				$("#piclist img:eq(1)").attr("src",str+"_two.jpg");
				
				$("#piclist img:eq(2)").attr("src",str+"_three.jpg");
				$(".jqzoom img").attr("src",str+"_one_small.jpg").attr("jqimg",str+"_one_big.jpg");
				
				$(".lb").attr("href",str+"_one_small.jpg");
				
				//更改颜色文本
				var ll=$(this).attr("txt");
				
				$("#ys").text(ll);
				})
			
			})
			
			
			/*尺寸*/
			
			$(function(){
				$("#dv5 li").hover(function(){
					$(this).addClass("gai").siblings().removeClass("gai")},
					function(){
						$(this).removeClass("gai")
						})
						$("#dv5 li").click(function(){
							var lll=$(this).text();
							
							$("#cc").text(lll)
							})
				})
				
				
				$(function(){
					$("#sl").change(function(){
						var ccc=$(this).val();
						var sum=parseInt(ccc)*200;
						$("#dv8").text(sum);
						})
					
					})
					
					/*打分*/
					
					$(function(){
						$("#xx li").click(function(){
							var tt=$(this).text();
							alert("你对商品的评价是:"+tt);
							
							var st=$(this).attr("st");
							
							$("#xx").removeClass().addClass(st);
							
							})
						
						
						
						})
					$(function(){
						$("#xx li").hover(function(){
							var st=$(this).attr("st")
							$("#xx").addClass("h"+st);
							},function(){
								var st=$(this).attr("st")
							$("#xx").removeClass("h"+st);
								})
						
						})
					/*添加购物车*/
					$(function(){
						$("#cart").click(function(){
							var ys=$("#ys").text();
							var cc=$("#cc").text();
							var sl=$("#sl").val();
							var dv8=$("#dv8").text();
							
							var str="感谢您的购买\n您购买的\n产品是:免烫高职棉条文衬衫\n尺寸是:"+cc+"\n颜色是:"+ys+"\n数量是:"+sl+"\n总价是："+dv8;
							//确认框
							if(confirm(str)){
								alert("您已下单");
								}
							})
						
						})