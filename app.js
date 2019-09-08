document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit(); 
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

$('document').ready(function() {
  $('a.link-rel').click(function(e){
      e.preventDefault();
      var enlace = $(this).attr('href');
      // alert(enlace);
      $('html, body').animate({
          scrollTop: $(enlace).offset().top
      }, 1000);
  });
});


if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
	var delta = 0;
	if (event.wheelDelta) delta = event.wheelDelta / 120;
	else if (event.detail) delta = -event.detail / 3;

	handle(delta);
	if (event.preventDefault) event.preventDefault();
	event.returnValue = false;
}

function handle(delta) {
	var time 	= 500;
	var distance 	= 200;

	$('html, body').stop().animate({
		scrollTop: $(window).scrollTop() - (distance * delta)
	}, time );
}

// $('.dropdown-trigger').dropdown();
// $(document).ready(function(){
//   $('.slider').slider();
// });

// $(document).ready(function(){
//   $('.pushpin').pushpin();
// });

$('.scrollspy').scrollSpy({
  scrollOffset: $('section').height()    
})
