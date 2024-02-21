import { Link } from 'react-router-dom'
 
function Header() {

    return (
        <header>
            <Link to="/">
                <img src={process.env.PUBLIC_URL + '/assets/img/logo-header.jpg'} className="header-logo" alt="Logo kasa"/>
            </Link>
            <nav className="menu-nav">
                <Link to="/" className="btn-link btn-home  active">Accueil</Link>
                <Link to="/about/" className="btn-link btn-about">A propos</Link>
            </nav>
        </header>
    )
}

export default Header