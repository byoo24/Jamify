import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// TESTING
// import { getAlbumsFromArtist} from './util/album_api_util';


document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = undefined;
    if (window.user) {

        preloadedState = {
            session: {
                currentUser: window.user.currentUser
            }
        };
    }

    const store = configureStore(preloadedState);


    // Delete user
    // delete window.user;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    
    ReactDOM.render(
        <Root store={ store }/>,
        document.getElementById('root')
    );
})


