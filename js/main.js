AOS.init();
$(".slicky").slick({
  adaptiveHeight: true
});

var slider = tns({
  container: ".my-slider",
  items: 1,
  autoplay: true,
  autoplayButtonOutput: false,
  controls: false
});
