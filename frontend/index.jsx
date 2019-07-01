import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';


if (process.env.NODE_ENV !== 'production') {
    console.log('Entered development mode!');
}

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = undefined;
    if (window.user) {

        preloadedState = {
            session: {
                currentUser: window.user.currentUser
            }
        };

        // Delete user
        delete window.user;
    }

    const store = configureStore(preloadedState);

    ReactDOM.render(
        <Root store={ store }/>,
        document.getElementById('root')
    );
})


