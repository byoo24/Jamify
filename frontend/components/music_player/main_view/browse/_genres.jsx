import React from 'react';
import { fetchGenres } from '../../../../actions/genre_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Media from '../media';

class Genres extends React.Component {
    constructor(props) {
        super(props);
        this.setCoverStyle = this.setCoverStyle.bind(this);
    }

    componentDidMount() {
        this.props.changeBg('red-gradient');
        this.props.fetchGenres();
    }

    setCoverStyle(genre) {
        return {
            backgroundImage: `url(${genre.genre_cover})`
        }
    }

    render() {
        const { genres } = this.props;

        const genreList = genres.map((genre) => {
        const coverStyle = this.setCoverStyle(genre);

            return (
                <Media 
                    key={genre.id}
                    media={genre}
                    icon="genre"
                    size='medium'
                    view='index'
                    path={``}
                />
            )
        });

        return (
            <div className="media-index-root">
                <div className="media-index-container">
                    <div className="media-index">
                        {genreList}
                    </div>
                </div>
            </div>
        )
    }
}






const msp = state => ({
    genres: Object.values(state.entities.genres)
});


const mdp = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres())
});


export default connect(msp, mdp)(Genres);