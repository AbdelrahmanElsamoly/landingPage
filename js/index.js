// let x = $("#servo").offset().top;
// $(window).scroll(function () {
//   let y = $(window).scrollTop();
//   if (y > x - 100) {
//     $("#navo1").css("background", "rgba( 74, 144, 226, 0.55 )");
//   } else {
//     $("#navo1").css("background", "transparent");
//   }
// });
let navo1 = document.getElementById("navo1");
console.log(navo1);
function changeBg() {
  navo1.classList.toggle("bg", window.scrollY > 700);
}
window.addEventListener("scroll", changeBg);
$("a").click(function (e) {
  let attr = $(e.target).attr("href");
  console.log(attr);
});
$(document).ready(function () {
  $("#loading").fadeOut(1000, function () {
    $("#loading").remove();
    $("body").css("overflow-y", "auto");
  });
});
