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
	
	
		
				
				//更改颜色文本
				var ll=$(this).attr("txt");
				
				$("#ys").text(ll);
				})
			
			})
			
		
					/*添加购物车*/
					$(function(){
						$("#cart").click(function(){
	                        var ys=$(".ys").text();
						
							var sl=$("#sl").val();
							var dv8=$("#dv8").text();
							
							var str="感谢您的购买\n您购买的\n产品是:免烫高职棉条文衬衫\n颜色是:"+ys+"\n数量是:"+sl+"\n总价是："+dv8;
							//确认框
							if(confirm(str)){
								alert("您已下单");
								}
							})
						
						})