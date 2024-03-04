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
  menu.classList.toggle("menu-mb-active");
}

function subMenu(clickedElement) {
  const parentElement = clickedElement.parentElement;
  const isActive = parentElement.classList.contains("menu-active");
  const menuList = parentElement.querySelector(".menu-mb-list");
  const buttons = document.getElementsByClassName("menu-mb-content-list");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].parentElement.classList.remove("menu-active");
    const nextMenuList = buttons[i].nextElementSibling;
    if (nextMenuList) {
      nextMenuList.style.left = "-100%";
    }
  }
  if (!isActive) {
    parentElement.classList.add("menu-active");
    if (menuList) {
      menuList.style.left = "0";
    }
  }
}

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

var touchstartX = 0;
var touchendX = 0;

const slider = document.querySelector('.slideshow-container');

slider.addEventListener('touchstart', function(event) {
  touchstartX = event.changedTouches[0].screenX;
}, false);

slider.addEventListener('touchend', function(event) {
  touchendX = event.changedTouches[0].screenX;
  handleGesture();
}, false); 

function handleGesture() {
  if (touchendX < touchstartX) {
    plusSlides(1); 
  }
  
  if (touchendX > touchstartX) {
    plusSlides(-1); 
  }
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