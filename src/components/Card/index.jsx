import PropTypes from 'prop-types'

function Card({ label, title, url }) {
    return (        
        <article class="card">
            <a href="http://localhost:3000/article">
                <img src={url} alt={label} height={80} width={80} />
            </a>                                
            <div class="card-content">
                <div class="card-txt">
                    <p class="card-title">{title}</p>
                </div>
            </div>
        </article>
    )
}
 
Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
}

export default Card
