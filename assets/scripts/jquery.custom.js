$(function() {

  var cityNumber;
  var selectedCity;
  var city = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');

  $(".hero__city-select").change(function() {
    selectedCity = $(this).find(":selected").data("city");
    window.location = "/" + selectedCity;
  })

  $().ready(function() {
    if (city === 'milwaukee') {
      cityNumber = 334408;
      $("#fieldjyuim").val(cityNumber);
    } else {
      return;
    }
  })
})