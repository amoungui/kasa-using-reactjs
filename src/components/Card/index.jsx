import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Card({ label, title, url, id }) {
    const link = `/article/${id}`;
    return (
        <Link to={link}>
            <article className="card">            
                    <img src={url} alt={label} height={80} width={80} />          
                <div className="card-content">
                    <div className="card-txt">
                    <p className="card-title">{title}</p>
                    </div>
                </div>
            </article>
        </Link>        

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
