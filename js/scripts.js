var toggle = document.getElementsByClassName("sidebar-toggle");
var sidebar = document.getElementsByClassName("sidebar-main");
var contentwrapper = document.getElementsByClassName("content-wrapper");
var footer = document.getElementsByClassName("footer-main");
var accbtn = document.getElementsByClassName("accordion-btn");

//pdvFullScreen();

//botao de menu, no elemento header
toggle[0].addEventListener("click", function () {

    //verifica se esta a tela está com medida de 800px
    if(window.matchMedia("(max-width: 800px)").matches) {
      sidebar[0].classList.toggle("sidebar-responsive");
      contentwrapper[0].classList.toggle("content-wrapper-responsive");
      footer[0].classList.toggle("footer-main-none");
    }
    else {
      sidebar[0].classList.toggle("pdv-form-full");
      contentwrapper[0].classList.toggle("pdv-content-full");
    }
    
});

var a;
for(a = 0; a < accbtn.length; a++) {
  accbtn[a].addEventListener("click", function() {
    this.lastElementChild.classList.toggle('rotate');
    this.nextElementSibling.classList.toggle('show');
  });
}

function pdvFullScreen()
{
    sidebar[0].classList.toggle("pdv-form-full");
    contentwrapper[0].classList.toggle("pdv-content-full");
}