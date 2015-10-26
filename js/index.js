$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$("#target3").addClass("animated fadeOut");

$("nav a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 500, 'easeOutCubic', function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});