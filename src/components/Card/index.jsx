import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Card({ label, title, url, id }) {
    const link = `/article/${id}`; 
    console.log('id: ', id)
    return (        
        <article className="card">
            <Link to={link}>
                <img src={url} alt={label} height={80} width={80} />
            </Link>                                
            <div className="card-content">
                <div className="card-txt">
                    <Link to={link} >
                        <p className="card-title">{title}</p>
                    </Link>
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
