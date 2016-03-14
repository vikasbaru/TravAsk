// Preloader //

jQuery(document).ready(function($) {  

$(window).load(function(){
  $('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});


// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
$(document).click(function(event) {
    if (!$(event.target).is("#sidebar-wrapper, #menu-toggle, #menu-toggle .ion-navicon")) {
        $("#sidebar-wrapper").removeClass("active");
    }
});
$('.sidebar-nav li a').click(function(){
  $("#sidebar-wrapper").removeClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    /*$('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });*/
});

// wow

new WOW().init();

// carousel

$(document).ready(function() {
 
  var owls = ['trending', 'jk', 'india', 'international'];
  $.each(owls, function(i, v){
    $("#" + v).owlCarousel({
      autoPlay: false,
      pagination: false,
      lazyLoad : true,
      items: 4,
      autoHeight: true,
      stopOnHover: true,
    });
    
    $("." + v + " .next").click(function(){
      $("#" + v).trigger('owl.next');
    })
    $("." + v + " .prev").click(function(){
      trending.trigger('owl.prev');
    })
    
  });
 
});

// Set Header Background

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

// Team overlay

// $(document).ready(function(){
//   $(".img-overlay").hover(function(){
//     $(".overlay").toggleClass("overlay_hover");
//   });

// });
