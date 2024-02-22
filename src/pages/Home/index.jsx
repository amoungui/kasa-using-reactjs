import Card from '../../components/Card'
import React, { useState, useEffect } from 'react';


function App() {
    const [articles, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/logements')
          .then(response => response.json())
          .then(data => setData(data));
      }, []);          

    return (
        <main>
            <div className="banner">
                <img className="banner-img" src={process.env.PUBLIC_URL + 'assets/img/banner-img.jpg'} alt="Banner kasa"/>
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <section className="logements-cards">
                {articles.map((article, index) => (
                    <Card
                        key={`${article.id}-${index}`}
                        label={article.title}
                        url={article.cover}
                        title={article.title}
                        id={article.id}
                    />
                ))}
            </section>
        </main>

    )
}

export default App
