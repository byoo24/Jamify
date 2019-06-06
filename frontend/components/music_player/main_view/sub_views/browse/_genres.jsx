import React from 'react';
import { fetchGenres } from '../../../../../actions/genre_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import artistReducer from '../../../../../reducers/artists/artists_reducer';


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

        const allGenres = genres.map((genre) => {
            const coverStyle = this.setCoverStyle(genre);

            return (
                <li key={genre.id}>
                    <div className="album-wrap">
                        <Link to="/browse/genre" className="album-medium">
                            <div className="icon-container box-shadow">
                                <div className="icon icon-music"></div>
                                <div className="album-cover-medium" style={coverStyle}></div>
                            </div>
                        </Link>

                        <div className="mo-info">
                            <span className="playlist-title">
                                {genre.category_name}
                            </span>
                        </div>
                    </div>
                </li>
            )
        });

        return (
            <div className="playlist-index">
                <ul className="playlist-index-container">
                    {allGenres}
                </ul>
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