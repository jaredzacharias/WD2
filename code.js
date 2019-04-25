$(document).ready(function() {
      $('.toggleNav').click(function() {
        $('#flex-nav ul').toggleClass('open');
    });
      $(.'call').click(function() {
        $('.phone').slideToggle('slow')       
});
      $('button').click(function(){
        $(this).removeClass('shadow');
   }),
      $('.button').mouseleave(function(){
         $(this).addClass('shadow');
      });
});
