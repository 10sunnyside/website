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
 /* var navbarCollapse = function() {
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
*/
})(jQuery); // End of use strict
//바로 시작 되는 함수, header 배경 변경하는 함수인데, 흰색이 좋아서 막겟음,



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

$(document).ready(function() {
  /* 1 */
  $(window).scroll( function(){
      /* 2 */
      $('.bg-primary').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* 3 */
          if( bottom_of_window > bottom_of_object/2 ){
              $(this).animate({'opacity':'1'},500);
          }
      }); 
  });
});


$('.bgmj').hover(function(){
  $(this).css('opacity','0.5');
  //$(this).find('.mhover').css('display','block');
  $(this).prev('.mhover').css('display','block');
},
function(){
  $(this).css('opacity','1');
  //$(this).find('.mhover').css('display','none');
  $(this).prev('.mhover').css('display','none');
});
$('.bgsy').hover(function(){
  $(this).css('opacity','0.5');
  //$(this).find('.mhover').css('display','block');
  $(this).prev('.mhover').css('display','block');
},
function(){
  $(this).css('opacity','1');
  //$(this).find('.mhover').css('display','none');
  $(this).prev('.mhover').css('display','none');
});
$('.bgts').hover(function(){
  $(this).css('opacity','0.5');
  //$(this).find('.mhover').css('display','block');
  $(this).prev('.mhover').css('display','block');
},
function(){
  $(this).css('opacity','1');
  //$(this).find('.mhover').css('display','none');
  $(this).prev('.mhover').css('display','none');
});
$('.bgjh').hover(function(){
  $(this).css('opacity','0.5');
  //$(this).find('.mhover').css('display','block');
  $(this).prev('.mhover').css('display','block');
},
function(){
  $(this).css('opacity','1');
  //$(this).find('.mhover').css('display','none');
  $(this).prev('.mhover').css('display','none');
});
$('.bgmk').hover(function(){
  $(this).css('opacity','0.5');
  //$(this).find('.mhover').css('display','block');
  $(this).prev('.mhover').css('display','block');
},
function(){
  $(this).css('opacity','1');
  //$(this).find('.mhover').css('display','none');
  $(this).prev('.mhover').css('display','none');
});



$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height()+$(window).height()/2;
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
             /* 
              $(this).animate({'opacity':'1'},1000, function() {
                $( this ).animate( {
                  'top': '200px'
                }, 1000 );
              });
               */   
              $(this).animate({'opacity':'1'}, 1500);
          }
          
      }); 
  
  });
  
});


$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hideme2').each( function(i){
          
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height()-$(window).height()/2;
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
             /* 
              $(this).animate({'opacity':'1'},1000, function() {
                $( this ).animate( {
                  'top': '200px'
                }, 1000 );
              });
               */   
              $(this).animate({'opacity':'1', 'top': '175px'},1500);
          }
          
      }); 
  
  });
  
});

$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hideme3').each( function(i){
          
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height()-$(window).height()/2;
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
             /* 
              $(this).animate({'opacity':'1'},1000, function() {
                $( this ).animate( {
                  'top': '200px'
                }, 1000 );
              });
               */   
              $(this).animate({'opacity':'1', 'margin-top': '0px'},1500);
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




function popup(){
  var url = "bond.html";
  var name = "popup test";
  var option = "width = 640, height = 480, top = 10, left = 200, location = no"
  window.open(url, name, option);
}