//鼠标点击输入框变色
  $(".user").click(function(){
    $(this).addClass("user-active").siblings().removeClass("user-active");
  })

$(".password1").click(function(){
    $(this).addClass("password1-active").siblings().removeClass("password1-active");
  })

//登录验证 validate.js start...
  $("#reg").validate();
   /* rules:{
      use:{
        required:true,
        minlength:2,
      },
      password1:{
        required:true,
        minlength:6,
      },
    },
    massages:{
      use:{
        required : "账号不得为空",
        minlength: "账号不得少于2位",
        remote:'账号被占用！',
      },
      password1:{
        required:"密码不得为空!",
        minlength:"长度不得少于6位!",
     },
    },
});
*/
//登录验证 validate.js ending..

//邮箱自动补全 start...

   //数据源的使用
    $("#reg").autocomplete({
      delay:0,//延迟出现
      autoFocus:true,//默认选中第一个
      source:function(request,response){
      var hosts = ['qq.com','163.com','263.com','sina.com.cn','gmail.com','hotmail.com'],
      term = request.term,//获取用户输入的内容
      name = term,//邮箱的用户名
      host = '',//域名
      ix = term.indexOf('@'),//@的位置
      result = [];//最终出现的邮箱列表

    //当有@的时候重新分配用户名和域名
      result.push(term);//不在数据源中的重新加上去
        if(ix > -1){
        name = term.slice(0,ix);
        host = term.slice(ix + 1);
      }
        if(name){
        //如果用户输入@以及后面的域名则提示相对于的域名
        //如果还没有输入@以及后面的域名则提示全部域名
        var findedHosts = [];

        if(host){

        findedHosts = $.grep(hosts,function(value,index){

        return value.indexOf(host) > -1

        });

        }else{

          findedHosts = hosts;
        }

        var findedResult = $.map(findedHosts,function(value,index){

          return name + '@' + value;

        });

        result = result.concat(findedResult);//避免与前面的result覆盖
        
        }

         response(result);
      },
 }); 
//邮箱自动补全 ending....  
