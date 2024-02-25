import { useEffect } from 'react';

export function useImageSliderEffect(article, sliderContentId, prevButtonId, nextButtonId, currentSlideId) {
    useEffect(() => {
        if (article) {
            var imgUrls = article.pictures;
            var imgObjects = imgUrls.map((url, index) => {
                return { id: index, url: url };
            });
            var slidesSize = imgObjects.length;
            var currentSlide = 0;
            var sliderContent = document.getElementById(sliderContentId); 
            imgObjects.forEach((imgObject) => {
                let img = document.createElement('img');
                img.src = imgObject.url;
                img.classList.add('article-banner-img');
                img.style.display = imgObject.id === 0 ? 'block' : 'none';
                sliderContent.appendChild(img);
            });
            let images = document.querySelectorAll('.article-banner-img');
            document.getElementById(currentSlideId).textContent = `${currentSlide + 1}/${slidesSize}`;
            document.getElementById(prevButtonId).addEventListener('click', () => {
                images[currentSlide].style.display = 'none';
                currentSlide = currentSlide - 1 < 0 ? slidesSize - 1 : currentSlide - 1;
                images[currentSlide].style.display = 'block';
                document.getElementById(currentSlideId).textContent = `${currentSlide + 1}/${slidesSize}`;
            });
            document.getElementById(nextButtonId).addEventListener('click', () => {
                images[currentSlide].style.display = 'none';
                currentSlide = (currentSlide + 1) % slidesSize;
                images[currentSlide].style.display = 'block';
                document.getElementById(currentSlideId).textContent = `${currentSlide + 1}/${slidesSize}`;
            });
            if (slidesSize === 1) {
                document.getElementById(prevButtonId).style.display = 'none';
                document.getElementById(nextButtonId).style.display = 'none';
                document.getElementById(currentSlideId).textContent = ` `;
            }
        }
    }, [article, currentSlideId, nextButtonId, prevButtonId, sliderContentId]);
}

export function useTagsEffect(article, TagsClass, TagClass) {
    useEffect(() => {
        // Vérification si l'article existe
        if (article) {
            // Récupération de tous les éléments avec la classe 'card-tags'
            let tagsElements = document.getElementsByClassName(TagsClass);
            // Vider le contenu de chaque élément avec la classe 'card-tags'
            Array.from(tagsElements).forEach(tagsElement => {
                tagsElement.innerHTML = '';
            });
            // Parcours de chaque tag de l'article
            article.tags.forEach(tag => {
                // Création d'un nouvel élément span
                let span = document.createElement('span');
                // Ajout de la classe 'card-tag' à l'élément span
                span.className = TagClass;
                // Ajout du texte du tag à l'élément span
                span.textContent = tag;
                // Ajout de l'élément span à chaque élément avec la classe 'card-tags'
                Array.from(tagsElements).forEach(tagsElement => {
                    tagsElement.appendChild(span);
                });
            })
        } 
    // Le tableau de dépendances contient 'article', donc l'effet sera exécuté 
    // à chaque fois que 'article' change
    }, [article, TagsClass, TagClass]);    
}

export function useAccordionForEquipment(article, accordionClass){
    useEffect(() => {
        // Vérification si l'article existe
        if (article) {
            // Récupération de tous les éléments avec la classe 'js-equipements-accordion-list'
            let accordionElements = document.getElementsByClassName(accordionClass);
            // Vider le contenu de chaque élément avec la classe 'js-equipements-accordion-list'
            Array.from(accordionElements).forEach(Element => {
                Element.innerHTML = '';
            });
            // Parcours de chaque équipement de l'article
            article.equipments.forEach(tag => {
                // Création d'un nouvel élément li
                let li = document.createElement('li');
                // Ajout du texte de l'équipement à l'élément li
                li.textContent = tag;
                // Ajout de l'élément li à chaque élément avec la classe 'js-equipements-accordion-list'
                Array.from(accordionElements).forEach(Element => {
                    Element.appendChild(li);
                });
            })
        }
        // Le tableau de dépendances contient 'article', donc l'effet sera exécuté 
        // à chaque fois que 'article' change
    }, [article, accordionClass]);    
}

