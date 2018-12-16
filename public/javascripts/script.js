/*导航效果*/
var i = 0;
$(".hw1_nav_left li").mouseover(function(){
  i=$(this).index(); 
  $(".hw1_menu_section").eq(i).css({"top":"48px","z-index":"1"})
  .siblings().css({"top":"-500px","z-index":"-1"});
})
$(".hw1_nav_left li").mouseout(function(){
  $(".hw1_menu_section").eq(i).css({"top":"-500px","z-index":"-1"});
},function(){  
})
/*banner 自动切换*/
var a = 0;
var s = 1;
var time = 0;
var time1 = 0;
junmper();
clearInterval(time1);
function junmper(){
  s = a*-1500;
  $(".banner_conter_navdiv ul li").eq(a).addClass("bg").siblings().removeClass("bg");
 	$(".banner_conter_pic li").animate({left:s+'px'},1000);
	a++;
	if(a==3)
	a=0;
}
function showp(){
  $(".banner_conter_pic li img").fadeOut(500).fadeIn(500);
  $(".banner_conter_pic li h1").fadeOut(500).fadeIn(500);
  $(".banner_conter_pic li h2").fadeOut(500).fadeIn(500);
  $(".banner_conter_pic .hw1_btn").fadeOut(300).fadeIn(300);
  $(".banner_conter_pic .hw1_btn_t").fadeOut(500).fadeIn(500); 
}
time=setInterval("junmper()",2500);
time1=setInterval("showp()",1500);
/*点击左右切换*/
var z = 0;
var d = 0;
$(".prev").click(function(){
  clearInterval(time);
  clearInterval(time1);
$(".banner_conter_navdiv ul li").eq(a).addClass("bg").siblings().removeClass("bg");
  d=$(this).index();
  $(".banner_conter_pic ul li").eq(z).animate({left:"-1500px"},300);
  $(".banner_conter_pic ul li").eq(d).css("left","1500px");
  $(".banner_conter_pic ul li").eq(d).animate({left:"0px"},300);
  z=d;
});

$(".next").click(function(){
  clearInterval(time);
  clearInterval(time1);
  $(".banner_conter_navdiv ul li").eq(a).addClass("bg").siblings().removeClass("bg");
  $(".banner_conter_pic ul li").eq(z).animate({left:"1500px"},300);
  $(".banner_conter_pic ul li").eq(d).css("left","-1500px");
  $(".banner_conter_pic ul li").eq(d).animate({left:"0px"},300); 
  z=d;
});
/*鼠标放上左右箭头消失效果*/
$(".banner_conter_pic ").hover(function(){
  $(".prev").css("display","block");
  $(".next").css("display","block");
},function(){
  $(".prev").css("display","none");
  $(".next").css("display","none");
});
/*鼠标放上字 和图片移动效果*/
for(var i=0;i<$(".content_inner_box").length;i++){
	$(".content_inner_box").eq(i).mouseover(function(){
    $(this).find("img").animate({"background":"rgba(0,0,0,0.5)"},100);
    $(this).find("p").animate({bottom:"23px"},500);
    $(this).find("h3").animate({bottom:"90px"},300);
  })
}



























