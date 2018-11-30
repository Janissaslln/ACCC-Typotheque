$(document).ready(function() {
  $('div').click(function () {
    /*TROUVER COMMENT DESIGNER LE CHILD*/
    $(this).animate({height:'300px'}, 1000);
    $(this).css('whiteSpace', 'initial');
    $(this).css('whiteSpace', 'initial');
  	$(this).css('overflowY', 'auto');
    $(this).css('overflowX', 'hidden');
    $('.bande').show();
    /*$(this > '.infos' > 'p:last').append("Si la Plain est si fluide, c'est grâce à un dessin qui n'est ni contrainte pas une approche géométrique ni structurée par la singularité de la ligne. Les glyphes sont designés optiquement, comme des surfaces pleines et, sous l'apparence d'une moderne simplicité, leur interaction dynamique crée une indentité distincte.");*/
  });
});

/*

jQuery(function() {

var firstPage = $(".polices > div:first").index(); // index of the first page
var lastPage = $(".polices > div:last").index(); // index of the last page
var currentPage = $('.polices > div.show').index() || firstPage;  // default to 0

$('.news > .right').stop().click(function() {
    if (currentPage == lastPage) {
        currentPage = $('.post-preview > div:eq(' + lastPage + ')')
           .hide()
           .removeClass('show')
           .siblings('div:first')  // first DIV
           .fadeIn(300)
           .addClass('show')
           .index();  // should be 0... but we never know
    } else {
        // note : will receive the next element index
        currentPage = $('.post-preview > div:eq(' + currentPage + ')')
           .hide()
           .removeClass('show')
           .next('div')             // get next DIV element
           .fadeIn(300)
           .addClass('show')
           .index();
    }
 });

 $('.news > .left').stop().click(function() {
     if (currentPage == firstPage) {
        currentPage = $('.post-preview > div:eq(' + currentPage + ')')
           .hide()
           .removeClass('show')
           .siblings('div:last')  // last DIV
           .fadeIn(300)
           .addClass('show')
           .index();
    } else {
        currentPage = $('.post-preview > div:eq(' + currentPage + ')')
           .hide()
           .removeClass('show')
           .prev('div')
           .fadeIn(300)
           .addClass('show')
           .index();
    }
});

});

$('.modifiable').mouseenter(function() {
  $(this).animate({
    color: '#ff0000'
  }, 1000);
}).mouseout(function() {
  $(this).animate({
    color: '#000000'
  }, 1000);
});

$("#introduction").click(function(){
    $("#introduction").hide();
});



var keys = [37, 38, 39, 40];
function preventDefault(e) {
e = e || window.event;
if (e.preventDefault)
e.preventDefault();
e.returnValue = false;
}
function keydown(e) {
for (var i = keys.length; i--;) {
if (e.keyCode === keys[i]) {
  preventDefault(e);
  return;
}
}
}
function wheel(e) { preventDefault(e); }
function disableScroll() {
if (window.addEventListener) {
window.addEventListener('DOMMouseScroll', wheel, false);
}
window.onmousewheel = document.onmousewheel = wheel;
document.onkeydown = keydown;
}
function enableScroll() {
if (window.removeEventListener) {
window.removeEventListener('DOMMouseScroll', wheel, false);
}
window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}

$(disableScroll(){

});
*/
