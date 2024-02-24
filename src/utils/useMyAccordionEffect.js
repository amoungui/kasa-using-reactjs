// Importation du hook useEffect depuis la bibliothèque React
import { useEffect } from 'react';

// Déclaration de la fonction useMyAccordionEffect
function useMyAccordionEffect() {
    // Appel du hook useEffect
    useEffect(() => {
        // Déclaration de la fonction handleAccordionClick
        function handleAccordionClick(event) {
            // Vérification si l'élément cliqué a la classe .accordion-button
            if (event.target.matches('.accordion-button')) {
                // Bascule de la classe active sur l'élément cliqué
                event.target.classList.toggle('active');
                // Récupération de l'élément suivant dans le DOM
                var panel = event.target.nextElementSibling;
                // Vérification si l'élément panel a une hauteur maximale définie
                if (panel.style.maxHeight) {
                    // Réinitialisation de la hauteur maximale
                    panel.style.maxHeight = null;
                } else {
                    // Définition de la hauteur maximale à la hauteur de défilement de l'élément
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            }
        }

        // Ajout d'un gestionnaire d'événements de clic au document
        document.addEventListener('click', handleAccordionClick);

        // Retour d'une fonction de nettoyage qui sera exécutée lorsque le composant sera démonté
        return () => {
            // Suppression du gestionnaire d'événements de clic du document
            document.removeEventListener('click', handleAccordionClick);
        };
    }, []); // Le tableau vide signifie que l'effet sera exécuté une seule fois après le premier rendu du composant

} // Fin de la fonction useMyAccordionEffect

// Exportation de la fonction useMyAccordionEffect comme exportation par défaut du module
export default useMyAccordionEffect;
