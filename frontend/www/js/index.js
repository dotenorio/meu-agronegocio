new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationClickable: true
});

function getSwapper () {
  return document.querySelector('.swiper-container').swiper
}

function slideNext() {
  var firstLoginSwaper = getSwapper()
  firstLoginSwaper.slideNext()
}

function slidePrev() {
  var firstLoginSwaper = getSwapper()
  firstLoginSwaper.slidePrev()
}

$(function() {
  $("#datepicker").datepicker()
})