$(function () {
  var str = "СПЕЦПРЕДЛОЖЕНИЯ ДЕЙСТВУЮЩИЕ ТОЛЬКО НА СТЕНДЕ:";

  function enternum() {
    var val = prompt("Введи число от 1 до 4");
    swi(+val);
  }

  var Man = function (name, years, sex) {
    this.name = name;
    this.years = years;
    this.sex = sex;
  };

  var Man1 = new Man("Николай", 13, "men");

//    enternum();

  function swi(e) {
    switch (e) {
      case 1:
        alert("One");
        enternum();
        break;
      case 2:
        alert("Two");
        enternum();
        break;
      case 3:
        alert("Three");
        enternum();
        break;
      case 4:
        alert("Four");
        enternum();
        break;
    }
  }

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
    //$("#news").load("ajax.php");
    $.get(
      "ajax.php",
      {
        jokk: "Петр"
      },
      onAjaxSuccess
    );
  });

  function onAjaxSuccess(data) {
    $("#news").html(data);
  }


  ;(function ($) {
    var app = $.sammy(function () {

      this.get('#/vsevolozhsk', function () {
        $("#arealtextid").load('htmlmaps/vsevolozhsk.html').animateCss('fadeInUp');
      });

      this.get('#/romanovka', function () {
        $("#arealtextid").load('htmlmaps/romanovka.html').animateCss('fadeInUp');
      });

    });

    $(function () {
      app.run()
    }); })(jQuery);



  //var el = document.getElementsByClassName('section-3');
  //user = el[0].dataset.name;
  //el[0].dataset.sec = "Хер";
  //alert(user);
  //alert(document.URL);
});