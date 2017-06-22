/* init size of header section */
document.getElementById('header').style.height=screen.height+"px";
document.getElementById('headerText').style.padding=screen.availHeight/2 - 50+"px 0px 0px 0px";

/* collapse navbar when clicked outside */
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});

/* init opacity of arbre des debats */
$(document).ready(function(){
  $('svg#debate').find("g#everything").css('opacity', "0.2");
  $('svg#debate').find("g#everything").css('pointer-events', "none");
  $('svg#debate').click(function () {
    $('svg#debate').find("g#everything").css('pointer-events', "auto");
    $('svg#debate').find("g#everything").css('opacity', "1");
    $('svg#debate').find("g#beginning").css('opacity', "0");
  });
});
