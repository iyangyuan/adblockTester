(function($,exports){
  $.fn.extend({
    adblockTester: function(callback){
      //获取模拟文件路径
      var jsPath = $("#adblockTesterJs").attr("src").replace(/adblockTester\.js.*$/i,"");
      
      //模拟插入广告代码
      document.write("<script type='text/javascript' src='"+jsPath+"advertisement.js?_t="+new Date().getTime()+"'></script>");
      
      $(document).ready(function(){
        //判断模拟的广告是否插入成功
        if(document.getElementById("adblockTester") != undefined){
          callback(false);
        }else{
          callback(true);
        }
      });
    }
  });
})(jQuery,this);


