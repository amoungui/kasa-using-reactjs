// Importation des hooks nécessaires depuis les bibliothèques React et react-router-dom
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Importation des fonctions hook personnalisés depuis un fichier utilitaire
import useMyAccordionEffect from '../utils/useMyAccordionEffect';
import {
    useImageSliderEffect,
    useTagsEffect,
    useAccordionForEquipmentEffect,
    useCardRatingEffect
} from '../utils/useMyArticleEffect';

// Déclaration de la fonction Article
function Article() {
    // Utilisation du hook useParams pour récupérer le numéro d'article depuis l'URL
    const { articleNumber } = useParams();
    // Déclaration d'un état pour l'article avec le hook useState
    const [article, setArticle] = useState(null);

    // Appel du hook useEffect pour récupérer les données de l'article depuis une API
    useEffect(() => {
        fetch(`http://localhost:3000/logements/${articleNumber}`)
            .then(response => response.json())
            .then(data => setArticle(data)) // Mise à jour de l'état de l'article avec les données récupérées
            .catch(error => console.error('Error:', error)); // Gestion des erreurs
        // Le tableau de dépendances contient articleNumber, 
        // donc l'effet sera exécuté à chaque fois que articleNumber change
    }, [articleNumber]);

    // Appel des Hooks personnalisés
    useMyAccordionEffect();
    useImageSliderEffect(article, 'slider-content', 'prev', 'next', 'current-slide');
    useTagsEffect(article, 'card-tags', 'card-tag');
    useAccordionForEquipmentEffect(article, 'js-equipements-accordion-list');
    useCardRatingEffect(article, 'card-rating', 'fa-xs fa-solid fa-star', 'fa-xs fa-solid fa-star fa-start-grey');

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
            </article>
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
        </main>
    );
}

export default Article;
