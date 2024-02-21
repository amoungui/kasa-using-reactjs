var acc = document.getElementsByClassName("accordion-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


let imageUrls = [
  '../assets/img/Background.jpg', 
  '../assets/img/banner-img.jpg', 
  '../assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash2.jpg'
]; // Ajoutez vos URL d'images ici

let totalSlides = imageUrls.length;
let currentSlide = 0;

let sliderContent = document.getElementById('slider-content');

imageUrls.forEach((url, index) => {
    let img = document.createElement('img');
    img.src = url;
    img.classList.add('article-banner-img');
    img.style.display = index === 0 ? 'block' : 'none';
    sliderContent.appendChild(img); // Utilisez appendChild au lieu de insertBefore
});

let images = document.querySelectorAll('.article-banner-img');

document.getElementById('current-slide').textContent = `${currentSlide + 1}/${totalSlides}`;

document.getElementById('prev').addEventListener('click', () => {
    images[currentSlide].style.display = 'none';
    currentSlide = currentSlide - 1 < 0 ? totalSlides - 1 : currentSlide - 1;
    images[currentSlide].style.display = 'block';
    document.getElementById('current-slide').textContent = `${currentSlide + 1}/${totalSlides}`;
});

document.getElementById('next').addEventListener('click', () => {
    images[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % totalSlides;
    images[currentSlide].style.display = 'block';
    document.getElementById('current-slide').textContent = `${currentSlide + 1}/${totalSlides}`;
});

if (totalSlides === 1) {
    document.getElementById('prev').style.display = 'none';
    document.getElementById('next').style.display = 'none';
}
