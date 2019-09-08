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

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.scrollspy');
//   var instances = M.ScrollSpy.init(elems, options);
// });

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
