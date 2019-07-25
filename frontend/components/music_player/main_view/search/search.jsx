import React from 'react';

import Media from '../media';



class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: {
                input: "",
            },
            artists: {},
            albums: {},
            myDebounce: this.myDebounce(250)
        }

        this.handleChange = this.handleChange.bind(this);
        this.myDebounce = this.myDebounce.bind(this);
    }

    // myDebounce
    handleChange(e){
        const {myDebounce, search} = this.state;

        this.setState({ search: { input: e.target.value } }, (res) => {
            myDebounce(this.state.search);
        });
    }


    myDebounce(interval) {
        let timeout;
        const that = this;

        return (arg) => {

            const fnCall = () => {
                
                timeout = null;
                this.props.fetchSearchResults(arg)
                    .then(({ artists, albums }) => {
                        
                        if (artists) {
                            this.setState({ artists });
                        } else {
                            this.setState({ artists: {} });
                        }

                        if (albums) {
                            this.setState({ albums });
                        } else {
                            this.setState({ albums: {} });
                        }
                    });
            }

            clearTimeout(timeout);
            timeout = setTimeout(fnCall, interval);
        }
    }

    render() {
        
        const artists = Object.values(this.state.artists);
        const albums = Object.values(this.state.albums);

        const listArtists = artists[0] ? artists.map((artist) => {
            let albumId = artist.albumIds !== undefined ? artist.albumIds[0] : null;

            return (
                <Media
                    key={artist.id}
                    media={artist}
                    type='artist'
                    size='medium'
                    view='index'
                    thumbnail_url={artist.image_url}
                    albumId={albumId}
                    path={`/artist/${artist.id}`}
                />
            )
        }) : null;



        const listAlbums = albums[0] ? albums.map((album) => {
            let songIds = album.songIds ? album.songIds : [];
            return (
                <Media
                    key={album.id}
                    media={album}
                    type='album'
                    size='medium'
                    view='index'
                    thumbnail_url={album.cover_image}
                    songIds={songIds}
                    path={`/album/${album.id}`}
                />
            )
        }) : null;



        const resultAlbums = listAlbums ? (
                <div className="media-index-root">
                    <div className="media-index-container">
                        <h1 className="media-index-label">Albums</h1>
                        <div className="media-index">
                            {listAlbums}
                        </div>

                    </div>
                </div>
            ) : null;



        const resultArtists = listArtists ? (
            <div className="media-index-root">
                <div className="media-index-container">
                    <h1 className="media-index-label">Artists</h1>
                    <div className="media-index">
                        {listArtists}
                    </div>
                </div>
            </div>
        ) : null;
        
        

        const displayResults = resultArtists || resultAlbums ? (
            <>
                <div className="media-index-root search-results">
                    <div className="media-index-container">
                        { resultArtists }
                        { resultAlbums }
                    </div>
                </div>
            </>
        ) : (
            <>
                <div className="search-content">
                    <div className="search-content-container">
                        <div className="no-search">
                            <h1>Search Results Appear Here.</h1>
                            <p>The Search uses a debound function so you don't have to press enter</p>
                        </div>
                    </div>
                </div>
            </>
        )

        return (
            <>
                <div className="search">
                    <div className="search-header">
                        <div className="search-input">
                            <div className="search-input-container">
                                    <input 
                                        type="text" 
                                        className="SearchInputBox" 
                                        placeholder="Start typing..." 
                                        onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>

                    { displayResults }

                </div>


            </>
        );
    }
}


export default Search;