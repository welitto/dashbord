var toggle = document.getElementsByClassName("sidebar-toggle");
var sidebar = document.getElementsByClassName("sidebar-main");
var contentwrapper = document.getElementsByClassName("content-wrapper");
var footer = document.getElementsByClassName("footer-main");

toggle[0].addEventListener("click", function () {
    sidebar[0].classList.toggle("sidebar-margin-left-0");
    contentwrapper[0].classList.toggle("content-wrapper-width-calc");
    footer[0].classList.toggle("footer-main-none");
});



// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {

//     this.classList.toggle("active");

//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }


var accbtn = document.getElementsByClassName("accordion-btn");
var a;

for(a = 0; a < accbtn.length; a++) {
  accbtn[a].addEventListener("click", function() {
    this.lastElementChild.classList.toggle('rotate');
    this.nextElementSibling.classList.toggle('show');
  });
}
