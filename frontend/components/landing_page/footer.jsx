import React from 'react';
import Logo from '../logo';

class Footer extends React.Component {
    render() {
        return (
            <footer className="home-footer">
                <div className="home-footer-container">
                    <div className="home-footer-row">
                        <div className="home-footer-col">
                            <Logo />
                            <span className="footer-logo-description">A Spotify Clone</span>
                        </div>
                        <div className="home-footer-col">
                            <h3 className="footer-title">Frontend</h3>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>SCSS</li>
                                <li>Webpack</li>
                            </ul>
                        </div>
                        <div className="home-footer-col">
                            <h3 className="footer-title">Backend</h3>
                            <ul>
                                <li>Rails</li>
                                <li>Ruby</li>
                                <li>JBuilder</li>
                            </ul>
                        </div>
                        <div className="home-footer-col">
                            <h3 className="footer-title">External Sources</h3>
                            <ul>
                                <li>Heroku</li>
                                <li>AWS</li>
                                <li>Fontawesome</li>
                                <li>Google Fonts</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;