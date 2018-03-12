/*导航效果
var i = 0;

$(".hw1_nav_left li").mouseover(function(){

   i=$(this).index();

   $(".hw1_menu_section").eq(i).animate({"top":"48px","z-index":"1"},100,function(){

     $(".hw1_menu_section").eq(i).siblings().animate({"top":"-500px","z-index":"-1"},1000,function(){
      
      $(".hw1_box_warp").hover(function(){
       
       $(this).css("background-color"," #e5e5e5").siblings().css("background-color","#f1f1f1");
      
      },function(){
       
        $(".hw1_box_warp").css("background-color","#f1f1f1");

      })

    });
   
   });

   });
$(".hw1_nav_left li").mouseout(function(){

    $(".hw1_menu_section").css({"top":"-500px","z-index":"-1"});

})*/
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
		/*$(this).find("p").css("display","block");

		$(this).find("p").animate({bottom:"23px"},500);

	})
	$(".content_inner_box").eq(i).mouseout(function(){

		$(this).find("p").animate({bottom:"43px"},300,function(){

			$(this).find("h3").animate({bottom:"90px"},300);
		})*/




  /*第一张图片效果


$(".content_inner_box_a").hover(function(){

       $(".content_inner_box_a").find("h3").animate({bottom:"110px"},500,function(){

         $(".content_inner_box_a").find("p").css("display","block");

         $(".content_inner_box_con_txt_a p").animate({bottom:"43px"},500);
});

},function(){

      $(".content_inner_box_a").find("p").animate({bottom:"23px"},300,function(){

      $(".content_inner_box_a").find("h3").animate({bottom:"90px"},300);

});

});*/

  /*第二张图片效果
$(".content_inner_box_b").hover(function(){

       $(".content_inner_box_b").find("h3").animate({bottom:"110px"},500,function(){

         $(".content_inner_box_b").find("p").css("display","block");

         $(".content_inner_box_con_txt_b p").animate({bottom:"43px"},500);
});

},function(){

      $(".content_inner_box_b").find("p").animate({bottom:"23px"},300,function(){

      $(".content_inner_box_b").find("h3").animate({bottom:"90px"},300);

});

});*/

  /*第三张图片效果

$(".content_inner_box_c").hover(function(){

       $(".content_inner_box_c").find("h3").animate({bottom:"110px"},500,function(){

         $(".content_inner_box_c").find("p").css("display","block");

         $(".content_inner_box_con_txt_c p").animate({bottom:"43px"},500);
});

},function(){

      $(".content_inner_box_c").find("p").animate({bottom:"23px"},300,function(){

      $(".content_inner_box_c").find("h3").animate({bottom:"90px"},300);

});

});*/
  /*第四张图片效果

$(".content_inner_box_d").hover(function(){

       $(".content_inner_box_d").find("h3").animate({bottom:"110px"},500,function(){

         $(".content_inner_box_d").find("p").css("display","block");

         $(".content_inner_box_con_txt_d p").animate({bottom:"43px"},500);
});

},function(){

      $(".content_inner_box_d").find("p").animate({bottom:"23px"},300,function(){

      $(".content_inner_box_d").find("h3").animate({bottom:"90px"},300);

});

});*/
  /*第五张图片效果

$(".content_inner_box_e").hover(function(){

       $(".content_inner_box_e").find("h3").animate({bottom:"110px"},500,function(){

         $(".content_inner_box_e").find("p").css("display","block");

         $(".content_inner_box_con_txt_e p").animate({bottom:"43px"},500);
});

},function(){

      $(".content_inner_box_e").find("p").animate({bottom:"23px"},300,function(){

      $(".content_inner_box_e").find("h3").animate({bottom:"90px"},300);

});

});
*/


























