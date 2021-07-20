$(function() {
//トップから100px以降、画面右下にページトップボタンを配置
   var toPagetop = $(".toPagetop");
   toPagetop.hide();
   $(window).scroll(function() {
      if($(this).scrollTop() > 100) {
         toPagetop.fadeIn(200);
      } else {
         toPagetop.fadeOut(200);
      }
   });
   toPagetop.click(function() {
      $("body, html").animate({scrollTop : 0}, 500);
      return false;
   });

//クリック後、formへスクロール
   $(".header-right, .header-right-w769, .toContact-btn").on("click", function() {
      var adjust = -50;
      var speed = 600;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top + adjust;
      $("body, html").animate({scrollTop : position}, speed, "swing");
      return false;
   });

//アコーディオンメニュー
   $(".flow-acod02").not("#flow-acod02").css("display", "none");
   $("#flow-acod01").addClass("active");
   $(".flow-acod01").on("click", function() {
      $(".flow-acod01").not(this).removeClass("active");
      $(".flow-acod01").not(this).next().slideUp(300);
      $(this).next(".flow-acod02").slideToggle(300);
      $(this).toggleClass("active");
      return false;
   });

   $(".faq-a:not(:first-of-type)").css("display", "none");
   $(".faq-q:first-of-type").addClass("active");
   $(".faq-q").on("click", function() {
      $(this).next(".faq-a").slideToggle(300);
      $(this).toggleClass("active");
      return false;
   });
});
