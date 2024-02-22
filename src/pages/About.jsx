import { useEffect } from 'react'
function About() {
    useEffect(() => {
        function handleAccordionClick(event) {
            if (event.target.matches('.accordion-button')) {
                event.target.classList.toggle('active');
                var panel = event.target.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            }
        }

        document.addEventListener('click', handleAccordionClick);

        // On supprimer le gestionnaire d'événements lorsque le composant est démonté
        return () => {
            document.removeEventListener('click', handleAccordionClick);
        };
    }, []);


    return (
        <main className="about-main-container">
            <div id="apropos-banner" className="banner">
                <img className="banner-img" src={process.env.PUBLIC_URL + '/assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash2.jpg'} alt="Banner kasa" />
            </div>
            <div className="apropos-cards">
                <div className="cards">
                    <div className="accordion fiabilite-accordion">
                        <button className="accordion-button">Fiabilité <i className="fa-solid fa-chevron-up"></i></button>
                        <div className="accordion-content">
                            <ul className="accordion-list">
                                <li>Climatisation</li>
                                <li>Wi-Fi</li>
                                <li>Cuisine</li>
                                <li>Espace de travail</li>
                                <li>Fer à repasser</li>
                                <li>Sèche-cheveux</li>
                                <li>Cintres</li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion respect-accordion">
                        <button className="accordion-button">Respect <i className="fa-solid fa-chevron-up"></i></button>
                        <div className="accordion-content">
                            <ul className="accordion-list">
                                <li>Climatisation</li>
                                <li>Wi-Fi</li>
                                <li>Cuisine</li>
                                <li>Espace de travail</li>
                                <li>Fer à repasser</li>
                                <li>Sèche-cheveux</li>
                                <li>Cintres</li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion service-accordion">
                        <button className="accordion-button">Service <i className="fa-solid fa-chevron-up"></i></button>
                        <div className="accordion-content">
                            <ul className="accordion-list">
                                <li>Climatisation</li>
                                <li>Wi-Fi</li>
                                <li>Cuisine</li>
                                <li>Espace de travail</li>
                                <li>Fer à repasser</li>
                                <li>Sèche-cheveux</li>
                                <li>Cintres</li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion securite-accordion">
                        <button className="accordion-button">Sécurité <i className="fa-solid fa-chevron-up"></i></button>
                        <div className="accordion-content">
                            <ul className="accordion-list">
                                <li>Climatisation</li>
                                <li>Wi-Fi</li>
                                <li>Cuisine</li>
                                <li>Espace de travail</li>
                                <li>Fer à repasser</li>
                                <li>Sèche-cheveux</li>
                                <li>Cintres</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About;
