import { useEffect } from 'react';

function useMyAccordionEffect() {
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
}

export default useMyAccordionEffect;
