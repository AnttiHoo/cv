$(window).scroll(function() {
      $('#animated-bar-one').each(function(){
      var imagePos = $(this).offset().top;
      
      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
          $(this).addClass("bar-html");
        }
      });

      $('#animated-label-one').each(function(){
      var imagePos = $(this).offset().top;
      
      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
          $(this).addClass("html-percentage");
        }
      });

      $('#animated-bar-two').each(function(){
      var imagePos = $(this).offset().top;
      
      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
          $(this).addClass("bar-css");
        }
      });

      $('#animated-bar-three').each(function(){
      var imagePos = $(this).offset().top;
      
      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
          $(this).addClass("bar-js");
        }
      });

      $('#animated-bar-four').each(function(){
      var imagePos = $(this).offset().top;
      
      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
          $(this).addClass("bar-wp");
        }
      });

      $('#animated-bar-five').each(function(){
      var imagePos = $(this).offset().top;
      
      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
          $(this).addClass("bar-ps");
        }
      });
         
                

    });

$(document).ready(function(){
  $('.bxslider').bxSlider({
    pager: false
  });
});

$(function () {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 750, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationSpeed: 200, // Animation speed (ms)
        scrollImg: true, // Set true to use image
    });
});


$(document).ready(function() {
  $('nav#main-navigation').waypoint('sticky',{
    stuckClass: 'stuck'
  });
});


$(document).ready(function() {
  $('.site-navigation li a').smoothScroll({
    speed: 750
  });
});




