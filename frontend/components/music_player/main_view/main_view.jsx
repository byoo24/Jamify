import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Browse
import Browse from './sub_views/browse/browse';

// Search
import Recent from './sub_views/search/recent';

// Collection
import Collection from './sub_views/collection/collection';


class MainView extends React.Component {
    render() {

        return (
            <div className="Root__main_view">
                <Switch>
                    <Route path="/browse" component={Browse} />
                    <Route path="/collection" component={Collection} />
                    <Route path="/search" component={Recent} />
                </Switch>
            </div>
        )
    }
}


export default MainView;
