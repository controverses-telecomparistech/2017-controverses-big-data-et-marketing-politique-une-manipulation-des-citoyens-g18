/* display timeline modal */

var modalImg = document.getElementById("timelineModal-content");
$('#timelineImg').click(function(){
    $("#timelineModal").fadeIn();
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    $('#caption').html(this.alt);
    $('body').css('overflow','hidden'); /* prevent body to scroll */
});

var timelineSpan = document.getElementsByClassName("close")[0];
$('#close'[0]).click(function() {
    $("#timelineModal").fadeOut();
    $('body').css('overflow','scroll');
});

/* display source modal */
$('#displaySource').click(function(){
    $("#sourceModal").fadeIn();
    $('body').css('overflow','hidden');
});

$('#close'[1]).click(function() {
    $("#sourceModal").fadeOut();
    $('body').css('overflow','scroll');
});


/* display mentions légales modal */
$('#displayMentions').click(function(){
    $("#mentionsModal").fadeIn();
    $('body').css('overflow','hidden');
});

$('#close'[2]).click(function() {
    $("#mentionsModal").fadeOut();
    $('body').css('overflow','scroll');
});

/* display à propos modal */
$('#displayPropos').click(function(){
    $("#proposModal").fadeIn();
    $('body').css('overflow','hidden');
});

$('#close'[3]).click(function() {
    $("#proposModal").fadeOut();
    $('body').css('overflow','scroll');
});

/* display intro modal */
$('#displayIntro').click(function(){
    $("#introModal").fadeIn();
    $('body').css('overflow','hidden');
});

$('#close'[4]).click(function() {
    $("#introModal").fadeOut();
    $('body').css('overflow','scroll');
});

/* hide/fade out modal when clicked outside */
mouse_is_inside=false;
$(document).ready(function()
{
    $('.background').hover(function(){
        mouse_is_inside=true;
    }, function(){
        mouse_is_inside=false;
    });

    $('.background-green').hover(function(){
        mouse_is_inside=true;
    }, function(){
        mouse_is_inside=false;
    });

    $('body').mouseup(function(){
        if(!mouse_is_inside){
          $('.modal').fadeOut();
          $('body').css('overflow','scroll');
        }
    });
});
