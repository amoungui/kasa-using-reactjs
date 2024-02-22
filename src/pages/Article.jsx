import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Article() {
    const { articleNumber } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/logements/${articleNumber}`)
            .then(response => response.json())
            .then(data => setArticle(data))
            .catch(error => console.error('Error:', error));
    }, [articleNumber]);

    useEffect(() => {
        if (article) {
            var imgUrls = article.pictures;
        
            // Convertir le tableau en un tableau d'objets
            var imgObjects = imgUrls.map((url, index) => {
                return { id: index, url: url };
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
        }
    }, [article]);
    
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
                        <p className="card-title">Cozy loft on the Canal Saint-Martin</p>
                        <p className="card-subtitle">Paris, Île-de-France</p>
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
