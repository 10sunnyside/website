(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict



//var plist = ['센트럴파크에 SunnySide길 조성','40살부터 일안하기','국가 산업에 채택되기','예쁜 빛을 우리집으로','30대에 포르쉐를'];
var plist = [];
//for (var i=0;i<plist.length;i++){
//  $('#toptitle').text('테스트');
//}


var i = 0;
/*function slideshow(){
  $('#1p').text(plist[i]);

  if(i<plist.length){
    i++;
  }
  else{
    i=0;
  }
}*/

/*
$(document).ready(function() {
  $(window).scroll( function(){
      $('.bg-primary').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object/2 ){
              $(this).animate({'opacity':'1'},500);
          }
      }); 
  });
});
*/

$(document).ready(function() {
  $(window).scroll( function(){
      $('.bg-primary').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-left':'0px'},1000);
          }
          
      }); 
  });
});



setInterval(function(){
  $('#1p').text(plist[i]);

  if(i<plist.length){
    i++;
  }
  else{
    i=0;
  }
}, 5000);