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

    if (!article) return 'Loading...';

    return (
        <div>
            <h1>Article 🧮</h1>
            <h2>{article.title}</h2>
        </div>
    );
}

export default Article;
