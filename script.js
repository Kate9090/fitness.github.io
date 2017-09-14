
  (function(){
    $(window).scroll(function() {
    $('.mobilenav');
    if ($('body').scrollTop() > 200) {
       $('.mobilenav').css({
             "height": '150px',
             "opacity": "1"
         });
     } else {
         $('.mobilenav').css({
             "height": '70px',
             "opacity": "0.5"
         });
     }
});​
})(jQuery);
