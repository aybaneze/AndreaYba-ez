document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit(); 
});

$('.dropdown-trigger').dropdown();
$(document).ready(function(){
  $('.slider').slider();
});

// $('.pushpin-demo-nav').each(function() {
//   var $this = $(this);
//   var $target = $('#' + $(this).attr('data-target'));
//   $this.pushpin({
//     top: $target.offset().top,
//     bottom: $target.offset().top + $target.outerHeight() - $this.height()
//   });
// });


$(document).ready(function(){
  $('.pushpin').pushpin();
});

$(document).ready(function(){
  $('.sidenav').sidenav();
 
});

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

// $(document).ready(function(){
//   $('.parallax').parallax();
// });

// $(document).ready(function(){
//   $('.carousel').carousel();
// });
