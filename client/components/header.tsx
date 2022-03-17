import Link from 'next/link'

const Header = () => {
    return (
        <div id="Header">
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <Link href="/">
                        <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <span className="fs-4">ModCreation</span>
                        </a>
                    </Link>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link href="mods">
                                <a  className="nav-link">Mods</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="ownmods">
                                <a  className="nav-link">Own Mods</a>
                            </Link>
                        </li>
                    </ul>
                </header>
            </div>
        </div>
    )
}

export default Header;