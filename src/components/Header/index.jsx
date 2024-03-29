import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Header() {
    useEffect(()=>{
        // recuperation de l'ensemble des élèment de class btn-link
        // convertir l'objet HTMLCollection en tableau js
        let links = Array.from(document.getElementsByClassName('btn-link'));
        // parcourir le tableau links
        links.forEach((link) => {
            // Ecouter l'évenement de click sur chaque élèment link
            link.addEventListener('click', (e) => {
                // Suppression de la classe active de tous les liens
                links.forEach((link) => {
                    link.classList.remove("active");
                });
                // Ajout de la classe active au lien cliqué
                e.currentTarget.classList.add("active");
            });
        });
    }, []);
    

    return (
        <header>
            <Link to="/">
                <img src={process.env.PUBLIC_URL + '/assets/img/logo-header.jpg'} className="header-logo btn-link" alt="Logo kasa"/>
            </Link>
            <nav className="menu-nav">
                <Link to="/" className="btn-link btn-home active">Accueil</Link>
                <Link to="/about/" className="btn-link btn-about">A propos</Link>
            </nav>
        </header>
    )
}

export default Header