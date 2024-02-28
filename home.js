document.getElementById('search-icon').addEventListener('click', function() {
  var searchInput = document.getElementById('search-input');
  if (searchInput.style.display === 'none') {
      searchInput.style.display = 'block';
  } else {
      searchInput.style.display = 'none';
  }
});

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".menu-mb button");
  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const isActive = this.parentElement.classList.contains("menu-active");
      buttons.forEach(btn => {
        btn.parentElement.classList.remove("menu-active");
        btn.querySelector('.fa-angle-up').style.display = "none";
        btn.querySelector('.fa-angle-down').style.display = "inline-block";
        btn.nextElementSibling.style.display = "none";
      });
      
      if (!isActive) {
        this.parentElement.classList.add("menu-active");
        this.querySelector('.fa-angle-down').style.display = "none";
        this.querySelector('.fa-angle-up').style.display = "inline-block";
        this.nextElementSibling.style.display = "flex";
      }
    });
  });
});

window.addEventListener('scroll', function() {
  var headerMenu = document.getElementById('header-menu');
  if (window.scrollY > 50) {
    headerMenu.classList.add('header-menu');
  } else {
    headerMenu.classList.remove('header-menu');
  }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
  const colors = ['#08382C', '#492919', '#DFD3C2'];
  const productBlocks = document.querySelectorAll(".products");

  productBlocks.forEach(function(productBlock) {
    const colorElements = productBlock.querySelectorAll('.color');
    colorElements.forEach((element, index) => {
      element.style.backgroundColor = colors[index];
    });
    const colorBarks = productBlock.querySelectorAll(".color-bark");
    const productImages = productBlock.querySelectorAll("img");
    colorBarks.forEach(function(colorBark, index) {
      colorBark.addEventListener("click", function() {
        colorBarks.forEach(function(bark) {
          bark.classList.remove("focus");
        });
        colorBark.classList.add("focus");
        productImages.forEach(function(img) {
          img.style.display = "none";
        });
        productImages[index].style.display = "block";
      });
    });
  });
});