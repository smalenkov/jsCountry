(function () {

  $("#internet-link").mouseenter(
    function (e) {
      var idPrevElem = e.relatedTarget.id;
      var classPrevElem = e.relatedTarget.className;
      //$("#helper").text(classPrevElem);
      //alert(idPrevElem);
      if (idPrevElem == 'main-menu_subcats-box') {
        $("#main-menu_subcats-box").css("top", "100%");
        $(".mainmenu_subcat").css("opacity", "1");
        $(".main-menu_subcats").css("opacity", "1");
      } else {
        $("#main-menu_subcats-box").animate({
          'top': '100%'
        }, {
          duration: 100
        });
        $(".mainmenu_subcat").animate({
          'opacity': '1'
        }, {
          duration: 100
        });
        $(".main-menu_subcats").animate({
          'opacity': '1'
        }, {
          duration: 240
        });
      }
    });

  $("#internet-link").mouseleave(
    function (e) {
      var idElem = e.relatedTarget.id;
      var classElem = e.relatedTarget.className;
      if (idElem == 'main-menu_subcats-box') {
        $("#main-menu_subcats-box").css("top", "100%");
        $(".mainmenu_subcat").css("opacity", "1");
        $(".main-menu_subcats").css("opacity", "1");
      } else {
        $("#main-menu_subcats-box").css("top", "0");
        $(".mainmenu_subcat").css("opacity", "0");
        $(".main-menu_subcats").css("opacity", "0");
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