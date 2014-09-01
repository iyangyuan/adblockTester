adblockTester通过js检测用户浏览器是否安装了AdBlock
=============
  
adblockTester 介绍
-------------
  
adblockTester 是站长们苦苦寻求的一款jQuery插件，它可以检测用户浏览器是否安装并激活了AdBlock插件，如果检测到激活了AdBlock，站长就可以做一些事情，比如，告诉用户你挡我财路了。  
  
当然，不仅仅是AdBlock，其他的广告屏蔽插件99%能检测到。为什么呢？因为adblockTester的原理是模拟插入一段广告，然后测试会不会被拦截，这样一来，我们无需关心到底是什么插件拦截了广告，只要被拦截了，结果都是一致的。用来模拟的广告仅仅是模拟，并不是真正的广告，不会对网站产生任何影响。  
  
adblockTester 使用说明
-------------
  
1.引入adblockTester的js文件  
  
    <script id="adblockTesterJs" src="adblockTester.js" type="text/javascript"></script>
  
2.调用adblockTester  
  
    /*
    * 您可以在任意位置调用jQuery().adblockTester(fn);,不需要等待网页加载完成。
    * adblockTester(fn)方法参数是一个回调函数，回调时会传入一个布尔型参数，true表示检测到AdBlock，反之为false。
    * 在回调函数中，根据检测结果，您可以做一些自己的处理。
    */
    jQuery().adblockTester(function(param){
          if(param){
            //do something...
            alert("广告被屏蔽了！");
          }else{
            //do something...
            alert("广告正常显示！");
          }
    });
  
adblockTester 注意事项
-------------
  
引入adblockTester时，只需要引入adblockTester.js即可，script标签必须有id属性，而且值不能修改。  
advertisement.js虽然不需要显式引用，但也是必须的，必须与adblockTester.js放在同一目录下，不可更改文件名称。  
  
adblockTester 演示链接
-------------
  
[adblockTester演示链接](http://www.kpdown.com/at/ "adblockTester演示链接")  
 