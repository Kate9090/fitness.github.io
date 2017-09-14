jQuery(function(f){
    var element = f('div.mobile-nav');
    f(window).scroll(function(){
        element['fade'+ (f(window).scrollTop() >150 ? 'In': 'Out')](500);
    });
});

 //       $(window).scroll(function(){
 //             var bo = $(this).scrollTop(),
 //               a = $("#hid").css('opacity'),
 //              $("#hid").html(bo);
 //            if( bo >= 100)  {
 //              $("#hid").show('slow'
 //            };
 // if ( bo >= 100 && a == 0) {$("#hid").stop().animate({
 //   'opacity':'1'},500)
 // } else if ( bo < 200 && a == 1) {
 //   $("#hid").stop().animate({
 //     'opacity':'0'},500)
 //   };
 //       });
//  $(function(){
//  var menuElem = document.getElementById('avatar');
//
//    var avatarSourceBottom = menuElem.getBoundingClientRect().bottom + window.pageYOffset;
//
//    window.onscroll = function() {
//      if (menuElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
//        menuElem.classList.remove('fixed');
//      } else if (window.pageYOffset > avatarSourceBottom) {
//        menuElem.classList.add('fixed');
//      }
//    };
// });
