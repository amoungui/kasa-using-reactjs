import PropTypes from 'prop-types'

function Card({ label, title, url }) {
    return (        
        <article className="card">
            <a href="http://localhost:3000/article">
                <img src={url} alt={label} height={80} width={80} />
            </a>                                
            <div className="card-content">
                <div className="card-txt">
                    <p className="card-title">{title}</p>
                </div>
            </div>
        </article>
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
