/* -----------------------load----------------------- */
$(window).load(function(){
  $(".loading-container").delay(2000).fadeOut();
});

var flipbookEL = document.getElementById('flipbook');
window.addEventListener('resize', function (e) {
  flipbookEL.style.width = '';
  flipbookEL.style.height = '';
  $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
});

