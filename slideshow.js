let slideIndex = 1;
let slideIndex2 = 1;
showSlides(slideIndex);
showSlides2(slideIndex2);

// Next/previous controls for first slideshow
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls for first slideshow
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display slides for first slideshow
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Next/previous controls for second slideshow
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls for second slideshow
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

// Function to display slides for second slideshow
function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2 fade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex2 = 1; }
  if (n < 1) { slideIndex2 = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
}
