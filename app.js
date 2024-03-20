
$(document).ready(function(){

    $('#mobile_btn').on('click', function(){

        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');

    });
});

document.addEventListener("DOMContentLoaded", function() {
    var navItems = document.querySelectorAll(".nav-item a");

    navItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            // Remover classe 'active' de todos os itens
            navItems.forEach(function(navItem) {
                navItem.classList.remove("active");
            });

            // Adicionar classe 'active' ao item clicado
            event.target.classList.add("active");
        });
    });
});


window.addEventListener('scroll', function() {
    var menuSection = document.getElementById('menu');
    var distanceToTop = menuSection.getBoundingClientRect().top;

    if (distanceToTop < window.innerHeight * 0.75) {
        menuSection.classList.add('fade-in');
    }
});


/*slider*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}