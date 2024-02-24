// Importation des hooks nécessaires depuis les bibliothèques React et react-router-dom
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Importation de la fonction useMyAccordionEffect depuis un fichier utilitaire
import useMyAccordionEffect from '../utils/useMyAccordionEffect';

// Déclaration de la fonction Article
function Article() {
    // Utilisation du hook useParams pour récupérer le numéro d'article depuis l'URL
    const { articleNumber } = useParams();
    // Déclaration d'un état pour l'article avec le hook useState
    const [article, setArticle] = useState(null);
    // Appel de la fonction useMyAccordionEffect
    useMyAccordionEffect();

    // Appel du hook useEffect pour récupérer les données de l'article depuis une API
    useEffect(() => {
        fetch(`http://localhost:3000/logements/${articleNumber}`)
            .then(response => response.json())
            .then(data => setArticle(data)) // Mise à jour de l'état de l'article avec les données récupérées
            .catch(error => console.error('Error:', error)); // Gestion des erreurs
            // Le tableau de dépendances contient articleNumber, 
            // donc l'effet sera exécuté à chaque fois que articleNumber change
    }, [articleNumber]); 

    // Appel du hook useEffect pour gérer l'affichage des images de l'article
    useEffect(() => {
        // Vérification si l'article a été chargé
        if (article) {
            // Récupération des URLs des images de l'article
            var imgUrls = article.pictures;

            // Conversion du tableau d'URLs en un tableau d'objets
            var imgObjects = imgUrls.map((url, index) => {
                return { id: index, url: url };
            });

            // Calcul du nombre de diapositives
            var slidesSize = imgObjects.length;
            // Initialisation de la diapositive courante à 0
            var currentSlide = 0;
            // Récupération de l'élément du DOM pour le contenu du slider
            var sliderContent = document.getElementById('slider-content'); 
            imgObjects.forEach((imgObject) => { // Pour chaque objet d'image
                let img = document.createElement('img'); // Création d'un nouvel élément img
                img.src = imgObject.url; // Attribution de l'URL de l'image à l'attribut src de l'élément img
                img.classList.add('article-banner-img'); // Ajout de la classe CSS à l'élément img
                img.style.display = imgObject.id === 0 ? 'block' : 'none'; // Affichage de la première image et masquage des autres
                sliderContent.appendChild(img); // Ajout de l'élément img au contenu du slider
            });

            let images = document.querySelectorAll('.article-banner-img'); // Sélection de toutes les images du slider

            document.getElementById('current-slide').textContent = `${currentSlide + 1}/${slidesSize}`; // Affichage du numéro de la diapositive courante

            // Ajout d'un gestionnaire d'événements pour le bouton précédent
            document.getElementById('prev').addEventListener('click', () => {
                images[currentSlide].style.display = 'none'; // Masquage de l'image courante
                currentSlide = currentSlide - 1 < 0 ? slidesSize - 1 : currentSlide - 1; // Décrémentation de la diapositive courante ou retour à la dernière diapositive si on est à la première
                images[currentSlide].style.display = 'block'; // Affichage de la nouvelle image courante
                document.getElementById('current-slide').textContent = `${currentSlide + 1}/${slidesSize}`; // Mise à jour de l'affichage du numéro de la diapositive courante
            });

            // Ajout d'un gestionnaire d'événements pour le bouton suivant
            document.getElementById('next').addEventListener('click', () => {
                images[currentSlide].style.display = 'none'; // Masquage de l'image courante
                currentSlide = (currentSlide + 1) % slidesSize; // Incrémentation de la diapositive courante ou retour à la première diapositive si on est à la dernière
                images[currentSlide].style.display = 'block'; // Affichage de la nouvelle image courante
                document.getElementById('current-slide').textContent = `${currentSlide + 1}/${slidesSize}`; // Mise à jour de l'affichage du numéro de la diapositive courante
            });

            // Si il n'y a qu'une seule diapositive, masquage des boutons précédent et suivant et suppression de l'affichage du numéro de la diapositive
            if (slidesSize === 1) {
                document.getElementById('prev').style.display = 'none';
                document.getElementById('next').style.display = 'none';
                document.getElementById('current-slide').textContent = ` `;
            }
        }
    }, [article]); // Le tableau de dépendances contient article, donc l'effet sera exécuté à chaque fois que article change

    // Si l'article n'a pas encore été chargé, affichage d'un message de chargement
    if (!article) return 'Loading...';

    return (
        <main id="main">
            <article className="card">
                <div id="slider-content">
                    <div className="dots">
                        <span id="current-slide"></span>
                    </div>
                    <i id="prev" className="fa-solid fa-chevron-left"></i>
                    <i id="next" className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="card-content">
                    <div className="card-txt">
                        <p className="card-title">{article.title}</p>
                        <p className="card-subtitle">{article.location}</p>
                        <div className="card-tags">
                            <span className="card-tag">Cozy</span>
                            <span className="card-tag">Canal</span>
                            <span className="card-tag">Paris 10</span>
                        </div>
                    </div>
                    <div className="card-host">
                        <div className="card-host-name">
                            <p>Alexandre Dumas</p>
                            <div className="card-avatar"></div>
                        </div>
                        <div className="card-rating">
                            <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                            <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                            <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                            <i className="fa-xs fa-solid fa-star fa-start-grey" aria-hidden="true"></i>
                            <i className="fa-xs fa-solid fa-star neutral-star fa-start-grey" aria-hidden="true"></i>
                            <span className="sr-only">Note de 4 sur 5</span>
                        </div>
                    </div>
                </div>
                <div className="card-accordions">
                    <div className="accordion description-accordion">
                        <button className="accordion-button">
                            Description <i className="fa-solid fa-chevron-up"></i>
                        </button>
                        <div className="accordion-content">
                            <ul className="accordion-list">
                                <li>Climatisation</li>
                                <li>Wi-Fi</li>
                                <li>Cuisine</li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion equipements-accordion">
                        <button className="accordion-button">
                            Équipements <i className="fa-solid fa-chevron-up"></i>
                        </button>
                        <div className="accordion-content">
                            <ul className="accordion-list">
                                <li>Climatisation</li>
                                <li>Wi-Fi</li>
                                <li>Cuisine</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}

export default Article;
