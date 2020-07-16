(function($) {
  $('.carousel-item', '.show-neighbors').each(function(){
    var next = $(this).next();
    if (! next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }).each(function(){
    var prev = $(this).prev();
    if (! prev.length) {
      prev = $(this).siblings(':last');
    }
    prev.children(':nth-last-child(2)').clone().prependTo($(this));
  });

  // $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  //   var next = $(this).next();
  //   if (!next.length) {
  //     next = $(this).siblings(':first');
  //   }
  //   next.children(':first-child').clone().appendTo($(this));
  
  //   for (var i=0;i<4;i++) {
  //     next=next.next();
  //     if (!next.length) {
  //       next=$(this).siblings(':first');
  //     }
  //     next.children(':first-child').clone().appendTo($(this));
  //   }
  // });
  })(jQuery);
  