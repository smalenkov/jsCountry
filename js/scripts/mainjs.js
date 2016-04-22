$(function () {
  var str = "СПЕЦПРЕДЛОЖЕНИЯ ДЕЙСТВУЮЩИЕ ТОЛЬКО НА СТЕНДЕ:";

  var Man = function (name, years, sex) {
    this.name = name;
    this.years = years;
    this.sex = sex;
  };

  var Man1 = new Man("Николай", 13, "men");

//  $("strong", "#mainp").html(Oleg.name);
  function printif() {
    if (Man1.name) {
      $("#mainp > strong").html(Man1.name);
      $("#mainp > strong").css({"font-size": "24px", "margin-bottom": "10px", "display": "block"});
    } else {
      $("#mainp > strong").html(str.toLowerCase());
    }
  }

  $("button").bind("click", function () {
    printif();
    $(this).remove();
    //$("#newstext").load('html/page.html');
    //$("#news").load("ajax.php");
    //  $.get(
    //    "ajax.php",
    //    {
    //      jokk: "Петр"
    //    },
    //    onAjaxSuccess
    //  );
    //});
    //
    //function onAjaxSuccess(data) {
    //  $("#news").html(data);
  });

  //$("#news").load("html/page.html");
  $("#news").load("ajaxload.php");

  //var el = document.getElementsByClassName('section-3');
  //user = el[0].dataset.name;
  //el[0].dataset.sec = "Хер";
  //alert(user);
  //alert(document.URL);

  ;(function ($) {
    var app = $.sammy(function () {

      this.get('#/vse', function () {
        $("#newstext").load('html/page.html');
      });

      this.get('#/voronezh', function () {
        $.get(
          "ajaxloadtext.php",
          {
            nameen: "voronezh"
          },
          onAjaxSuccess
        );
      });

      this.get('#/vorkuta', function () {
        $.get(
          "ajaxloadtext.php",
          {
            nameen: "vorkuta"
          },
          onAjaxSuccess
        );
      });

      this.get('#/vladimir', function () {
        $.get(
          "ajaxloadtext.php",
          {
            nameen: "vladimir"
          },
          onAjaxSuccess
        );
      });

      function onAjaxSuccess(data) {
        $("#newstext").html(data);
      }

    });

    $(function () {
      app.run()
    });
  })(jQuery);

});


