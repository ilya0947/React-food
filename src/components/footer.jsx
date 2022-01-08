export default function Footer() {
    return <footer className="page-footer pink lighten-4">
                <div className="footer-copyright">
                    <div className="container  black-text">
                    © {new Date().getFullYear()}
                        <a className="right  black-text" href="#!">Repo</a>
                    </div>
                </div>
            </footer>
}      