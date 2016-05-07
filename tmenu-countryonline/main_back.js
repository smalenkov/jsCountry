(function () {

  $(".top-menu-item").mouseenter(
    function (e) {
      var idPrevElem = e.relatedTarget.id;
      var classPrevElem = e.relatedTarget.className;
      //$("#helper").text(classPrevElem);
      //alert(idPrevElem);
      if (classPrevElem == 'main-menu_subcats-box') {
        $(this).children(".main-menu_subcats-box").css("top", "100%");
        $(this).children("..mainmenu_subcat").css("opacity", "1");
        $(this).children(".main-menu_subcats").css("opacity", "1");
      } else {
        $(this).children(".main-menu_subcats-box").animate({
          'top': '100%'
        }, {
          duration: 100
        });
        $("#top-menu-box").animate({
          'border-bottom': '0px'
        }, {
          duration: 100
        });
        $(this).children(".mainmenu_subcat").animate({
          'opacity': '1'
        }, {
          duration: 100
        });
        $(this).children(".main-menu_subcats").animate({
          'opacity': '1'
        }, {
          duration: 240
        });
      }
    });

  $(".top-menu-item").mouseleave(
    function (e) {
      var idElem = e.relatedTarget.id;
      var classElem = e.relatedTarget.className;
      if (classElem == 'main-menu_subcats-box') {
        $(this).children(".main-menu_subcats-box").css("top", "100%");
        $(this).children(".mainmenu_subcat").css("opacity", "1");
        $(this).children(".main-menu_subcats").css("opacity", "1");
      } else {
        $(this).children(".main-menu_subcats-box").css("top", "0");
        $("#top-menu-box").css("border-bottom", "1px solid #646668");
        $(this).children(".mainmenu_subcat").css("opacity", "0");
        $(this).children(".main-menu_subcats").css("opacity", "0");
      }
    });

  //$("#main-menu_subcats-box").hover(
  //  function () {
  //    $("#main-menu_subcats-box").css("top", "100%");
  //    $(".mainmenu_subcat").css("opacity", "1");
  //    $(".main-menu_subcats").css("opacity", "1");
  //  },
  //  function () {
  //    $("#main-menu_subcats-box").css("top", "0");
  //    $(".mainmenu_subcat").css("opacity", "0");
  //    $(".main-menu_subcats").css("opacity", "0");
  //  });

  //var target = $('#map-icon');
  //var targetPos = target.offset().top;
  //var winHeight = $(window).height();
  //var scrollToElem = targetPos - winHeight;
  //$(window).scroll(function () {
  //  var winScrollTop = $(this).scrollTop();
  //  if (winScrollTop > scrollToElem) {
  //    target.addClass('animated pulse');
  //    //сработает когда пользователь доскроллит к элементу с классом .elem
  //  }
  //});

  $('#map-icon, #rub-icon').bind('inview', function (event, visible) {
    if (visible) {
      $(this).css('opacity', '1').addClass('animated flipInX');
    }
  });

})();