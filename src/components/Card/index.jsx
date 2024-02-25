import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

function Card({ label, title, url, id }) {
    useEffect(() => {
        // Récupération de tous les éléments avec la classe 'js-card-link'
        const links = document.getElementsByClassName('js-card-link');
        // Conversion de l'objet HTMLCollection en tableau JavaScript
        let navLinks = Array.from(document.getElementsByClassName('btn-link'));
        // Parcours de chaque lien
        for (let link of links) {
            // Ajout d'un écouteur d'événements de clic à chaque lien
            link.addEventListener('click', () => {
                // Suppression de la classe active de tous les liens
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
            });
        }
    }, []);
    
    const link = `/article/${id}`;
    return (
        <Link to={link} className='js-card-link'>
            <article className="card">            
                    <img src={url} alt={label} height={80} width={80} />          
                <div className="card-content">
                    <div className="card-txt">
                    <p className="card-title">{title}</p>
                    </div>
                </div>
            </article>
        </Link>        
    )
}


Card.defaultProps = {
    title: 'Mon titre par défaut',
}

Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Card
