// AOS.init();
// $(".slicky").slick({
//   adaptiveHeight: true
// });

// var slider = tns({
//   container: ".my-slider",
//   items: 1,
//   autoplay: true,
//   autoplayButtonOutput: false,
//   controls: false
// });

document.querySelector("#open").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".side-nav").style.width = "100%";
  document.getElementById("main").style.marginRight = "550px";
});
document.querySelector("#close").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".side-nav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
});
