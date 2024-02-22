import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Card({ label, title, url, id }) {
    const link = `/article/${id}`; 
    console.log('id: ', id)
    return (
        <Link to={link}>
            <article className="card">            
                    <img src={url} alt={label} height={80} width={80} />          
                <div className="card-content">
                    <div className="card-txt">
                        <Link to={link} className='card-link'>
                            <p className="card-title">{title}</p>
                        </Link>
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
