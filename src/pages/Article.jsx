// Importation des hooks nécessaires depuis les bibliothèques React et react-router-dom
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Importation de la fonction useMyAccordionEffect depuis un fichier utilitaire
import useMyAccordionEffect from '../utils/useMyAccordionEffect';
import { useImageSliderEffect, useTagsEffect } from '../utils/useMyArticleEffect';

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

    useImageSliderEffect(article, 'slider-content', 'prev', 'next', 'current-slide');
    useTagsEffect(article, 'card-tags', 'card-tag');

    // Premier useEffect

    // Deuxième useEffect
    useEffect(() => {
        // Vérification si l'article existe
        if (article) {
            // Récupération de tous les éléments avec la classe 'js-equipements-accordion-list'
            let accordionElements = document.getElementsByClassName('js-equipements-accordion-list');
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
    }, [article]);

    // Troisième useEffect
    useEffect(() => {
        // Vérification si l'article existe
        if (article) {
            // Récupération de tous les éléments avec la classe 'card-rating'
            let ratingsElements = document.getElementsByClassName('card-rating');
            // Vider le contenu de chaque élément avec la classe 'card-rating'
            Array.from(ratingsElements).forEach(Element => {
                Element.innerHTML = '';
            });
            // Définition du nombre total de notes
            const totalRating = 5;
            // Récupération de la note de l'article
            let ratings = article.rating;
            // Parcours de chaque note
            for (let i = 0; i < totalRating; i++) {
                // Création d'un nouvel élément i
                let tag = document.createElement('i');
                // Ajout de l'attribut 'aria-hidden' à l'élément i
                tag.setAttribute("aria-hidden", true);
                // Si la note est inférieure à la note de l'article, ajout de la classe 'fa-xs fa-solid fa-star' à l'élément i
                if (i < ratings) {
                    tag.className = "fa-xs fa-solid fa-star";
                } else {
                    // Sinon, ajout de la classe 'fa-xs fa-solid fa-star fa-start-grey' à l'élément i
                    tag.className = "fa-xs fa-solid fa-star fa-start-grey";
                }
                // Ajout de l'élément i à chaque élément avec la classe 'card-rating'
                Array.from(ratingsElements).forEach(Element => {
                    Element.appendChild(tag.cloneNode(true));
                });
            }
        }
        // Le tableau de dépendances contient 'article', donc l'effet sera exécuté 
        // à chaque fois que 'article' change
    }, [article]);




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
                        </div>
                    </div>
                    <div className="card-host">
                        <div className="card-host-name">
                            <p>{article.host.name}</p>
                            <img src={article.host.picture} className="card-avatar" alt={article.host.name} />
                        </div>
                        <div className="card-rating">

                            <span className="sr-only">Note de {article.rating} sur 5</span>
                        </div>
                    </div>
                </div>
                <div className="card-accordions">
                    <div className="accordion description-accordion">
                        <button className="accordion-button">
                            Description <i className="fa-solid fa-chevron-up js-accordion-button"></i>
                        </button>
                        <div className="accordion-content">
                            {article.description}
                        </div>
                    </div>
                    <div className="accordion equipements-accordion">
                        <button className="accordion-button">
                            Équipements <i className="fa-solid fa-chevron-up js-accordion-button"></i>
                        </button>
                        <div className="accordion-content">
                            <ul className="accordion-list js-equipements-accordion-list">
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}

export default Article;
