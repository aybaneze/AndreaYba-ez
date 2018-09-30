document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit(); 
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
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
