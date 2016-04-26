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
  //$("#news").load("ajaxload.php");

  $.get(
    "ajaxload.php", toJson
  );

  function toJson(data) {
    jsonobj = $.parseJSON(data);
    toJsonnext(jsonobj);
    //alert(jsonobj);
    //jsonobjstr = JSON.stringify(jsonobj, "", 2);
    //alert(jsonobjstr);
    //alert(jsonobj[0][2]);
    //alert(jsonobj.length);
  }

  function toJsonnext(obj) {
    //alert(obj);
    var i = 0;
    for (; i < obj.length; i++) {
      $("#news").append("<button>");

      //$("#news").append("<button>").attr("href", obj[i][0]);
    }
      i = 0;
      $("#news button").each(function() {
      $(this).text(obj[i][1]);
        i++
    });
      //$("#news").append("<button>").attr("href", obj[i][0]);
    //$("#news button").html(function(index, oldhtml){
    //  $this
    //});
  }

  //var el = document.getElementsByClassName('section-3');
  //user = el[0].dataset.name;
  //el[0].dataset.sec = "Хер";
  //alert(user);
  //alert(document.URL);

  ;(function ($) {
    var app = $.sammy(function () {
      var i = 0;
      for (; i < jsonobj.length; i++) {
      this.get('#/'+jsonobj[i][0], function () {
        $.get(
          "ajaxloadtext.php",
          {
            nameen: jsonobj[i][0]
          },
          onAjaxSuccess
        );
      });
    }

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


