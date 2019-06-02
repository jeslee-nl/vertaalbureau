import '../styles/MAIN.scss'

import Meta from '../components/meta'
import Header from '../components/header'
import Footer from '../components/footer'

export default ({ children }) => (
    <div className='container-fluid'>
        <Meta />
        <Header />
        <div id='content' className='row'>
            <div className='col'>
                {children}
            </div>
        </div>
        <Footer />
    </div>
)