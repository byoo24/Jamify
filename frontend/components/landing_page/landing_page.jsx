import React from 'react';
import { Link } from 'react-router-dom';


// import Guest from './parts/guest';
import Header from './header_container';
import Footer from './footer';


class LandingPage extends React.Component {

    render() {
        return (
            <>
                <Header />

                <section>
                    <div className="hero-home">
                        <div className="hero-home-bg"></div>
                        <div className="hero-container">
                            <h1>Music for everyone.</h1>
                            <h4>Millions of songs. No credit card needed.</h4>
                            <Link to="/browse/featured">Launch Web Player</Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        );
    }
}


export default LandingPage;
