function Error() {
    return (
        <main className="noexist-page">
            <span className="noexist-page-info">404</span>
            <p className="noexist-page-msg">Oups! La page que vous demandez n'existe pas.</p>
            <a href="index.html" className="noexist-page-link">Retourner sur la page d’accueil</a>
        </main>
    )
}
 
export default Error