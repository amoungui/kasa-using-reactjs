import { useParams } from 'react-router-dom'
 
function Article() {
    const { articleNumber } = useParams()
 
    return (
        <div>
            <h1>Article 🧮</h1>
            <h2>Article {articleNumber}</h2>
        </div>
    )
}

export default Article