
function Footer() {

    return (
        <footer>
            <img className="footer-img" src={process.env.PUBLIC_URL + '/assets/img/LOGO.png'} alt="footer kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer