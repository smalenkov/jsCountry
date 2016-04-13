$(window).load(function () {
    var str = "hello world";

    function enternum() {
        var val = prompt("Введи число от 1 до 4");
        swi(+val);
    }

    var Man = function (name, years, sex) {
        this.name = name;
        this.years = years;
        this.sex = sex;
    }

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
    if (Man1.name) {
        $("#mainp > strong").html(Man1.name);
        $("#mainp > strong").css({"font-size": "24px", "margin-bottom": "10px", "display": "block"});
    } else {
        $("#mainp > strong").html("Хер");
    }
});