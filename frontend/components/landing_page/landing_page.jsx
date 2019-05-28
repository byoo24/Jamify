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
                            <Link to="/browse">Launch Web Player</Link>
                        </div>
                    </div>
                </section>

                <section id="site-info">
                    <div className="info-container">
                        <div className="info-header">
                            <h1>Spotify Clone</h1>
                            <h4>a/A Fullstack Project</h4>
                            <Link to="/browse">Launch Web Player</Link>
                        </div>
                        <div className="info-items">
                            <ul>
                                <li>
                                    <figure className="icon react-icon">
                                    </figure>
                                    <figcaption></figcaption>
                                </li>
                                <li>
                                    <figure className="icon redux-icon">
                                    </figure>
                                    <figcaption></figcaption>
                                </li>
                                <li>
                                    <figure className="icon ruby-icon">
                                    </figure>
                                    <figcaption></figcaption>
                                </li>
                                <li>
                                    <figure className="icon rails-icon">
                                    </figure>
                                    <figcaption></figcaption>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>
                <Footer />
            </>
        );
    }
}


export default LandingPage;
