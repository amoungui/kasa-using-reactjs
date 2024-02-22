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

var imgUrls = [
  '../assets/img/Background.jpg', 
  '../assets/img/banner-img.jpg', 
  '../assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash2.jpg'
]; // Ajoutez vos URL d'images ici

// Convertir le tableau en un tableau d'objets
var imgObjects = imgUrls.map((url, index) => {
  return {id: index, url: url};
});

var slidesSize = imgObjects.length;
var currentSlide = 0;

var sliderContent = document.getElementById('slider-content');

imgObjects.forEach((imgObject) => {
    let img = document.createElement('img');
    img.src = imgObject.url;
    img.classList.add('article-banner-img');
    img.style.display = imgObject.id === 0 ? 'block' : 'none';
    sliderContent.appendChild(img);
});

let images = document.querySelectorAll('.article-banner-img');

document.getElementById('current-slide').textContent = `${currentSlide + 1}/${slidesSize}`;

document.getElementById('prev').addEventListener('click', () => {
    images[currentSlide].style.display = 'none';
    currentSlide = currentSlide - 1 < 0 ? slidesSize - 1 : currentSlide - 1;
    images[currentSlide].style.display = 'block';
    document.getElementById('current-slide').textContent = `${currentSlide + 1}/${slidesSize}`;
});

document.getElementById('next').addEventListener('click', () => {
    images[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slidesSize;
    images[currentSlide].style.display = 'block';
    document.getElementById('current-slide').textContent = `${currentSlide + 1}/${slidesSize}`;
});

if (slidesSize === 1) {
    document.getElementById('prev').style.display = 'none';
    document.getElementById('next').style.display = 'none';
}
