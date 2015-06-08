$(function() {

  // function setHeroHeight() {
  //   var windowHeight = $(window).height();
  //   $('.hero').css("height", windowHeight);
  // }

  $( ".hero__city-select" ).change(function() {
    var selectedCity = $(this).find(":selected").data("city");
    window.location.href = "/" + selectedCity;
  })

  $().ready(function() {
    // setHeroHeight();
  })

  $(window).resize(function() {
    // setHeroHeight();
  })
})