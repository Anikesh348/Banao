$('.small').click(function() {
  $(".discover a").removeClass("size1");
});

if ($(window).width() > 700 && $(window).width() < 1350) {
  swal("Please use our site in desktop or in mobile phones");
}