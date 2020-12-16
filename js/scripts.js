var toggle = document.getElementsByClassName("sidebar-toggle");
var sidebar = document.getElementsByClassName("sidebar-main");
var contentwrapper = document.getElementsByClassName("content-wrapper");
var sidebarmenu = document.getElementsByClassName("sidebar-menu");

toggle[0].addEventListener("click", function () {
    if(sidebar[0].style.width === "" || sidebar[0].style.width === "0px"){

        sidebar[0].style.width = "230px";
        contentwrapper[0].style.marginLeft = "230px";
        sidebarmenu[0].style.display = "block";
    }
    else {
        sidebar[0].style.width = "0px";
        contentwrapper[0].style.marginLeft = "0px";
        sidebarmenu[0].style.display = "none";
    }
});



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}