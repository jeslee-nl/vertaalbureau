export default () => (
    <div id='header' className="row">

        <div className="col-4 logo-content">
            <img className='logo' src="/static/Logo-Vertaalbureau-Jeslee.png" />
        </div>


        <nav id="menu" className="col-8" role="navigation">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/home/"><span>Startpagina</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/kopie-van-mijn-werk/"><span>Ons diensten</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/over-mij/"><span>Over mij</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact/"><span>Contact</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/prijzenlijst/"><span>Prijzenlijst</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/referenties/"><span>Referenties</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/prijzenlijst/"><span>Prijzenlijst</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/referenties/"><span>Referenties</span></a>

                </li>
            </ul>
        </nav>
    </div>
)