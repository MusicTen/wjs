/**
 * Created by Jepson on 2018/6/19.
 */
// 需求:
// 1. 检测屏幕大小变化
// 2. 如果宽度 >= 640, 加载大图片
// 3. 如果宽度 < 640, 加载小图片
$(function(){
  var $imgs = $(".carousel img")
  $(window).on('resize',function(){
    var pageWidth = $(window).width();
    if ( pageWidth>=640 ) {
      $imgs.each(function(){
        var src = $(this).data('psrc');
        $(this).attr('src',src);
      });
    } else {
      $imgs.each(function(){
        var src = $(this).data('msrc');
        $(this).attr('src',src);
      });
    } 
  })
  $(window).trigger('resize');
})
// 轮播图手指滑动
;(function(){
  // 找到轮播图
  var $carousel = $('.wjs_banner .carousel');
  var startX = 0;
  var startTime = 0;
  $carousel.on('touchstart',function(e){
    startX = e.originalEvent.touches[0].clientX;
    startTime = new Date();
  })
  $carousel.on('touchend',function(e){
    var distanceX = e.originalEvent.changedTouches[0].clientX - startX;
    var time = new Date() - startTime;
    if (distanceX > 50 && time > 200){
      $carousel.carousel('prev')
    } else if (distanceX < -50 && time > 200) {
      $carousel.carousel('next')
    }
  })
})()

//实现区域滚动
;(function(){
  var $ul = $(".wjs_product .nav-tabs");
  var lis = $ul.children();
  var lisWidth = 0;
  lis.each(function(){
    lisWidth += $(this).width();
  })
  // console.log( lisWidth );
  // $ul.css('width',lisWidth);
  $ul.width(lisWidth);
  new IScroll(".tab_wrapper",{
    scrollX:true,
    scrollY:false
  });
}())




















