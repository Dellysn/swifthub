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

//  Custom Ajax Loader
var $loading = $("#loadingDiv").hide();
$(document)
  .ajaxStart(function() {
    $loading.show();
  })
  .ajaxStop(function() {
    $loading.hide();
  });

// Dropdown Hover function
$("ul.navbar-nav li.dropdown").hover(
  function() {
    $(this)
      .find(".dropdown-menu")
      .stop(true, true)

      .slideDown(500);
  },
  function() {
    $(this)
      .find(".dropdown-menu")
      .stop(true, true)

      .slideUp(500);
  }
);
