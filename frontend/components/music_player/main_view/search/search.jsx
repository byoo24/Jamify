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
            albums: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e){
        this.setState({search: {input: e.target.value}})
    }

    handleSubmit(e){
        e.preventDefault();
        
        this.props.fetchSearchResults(this.state.search)
            .then(({artists, albums}) => {
                if (artists) this.setState({ artists });
                if (albums) this.setState({ albums });
            });


            
        // console.log(this.state.input);
    }


    render() {
        debugger
        const artists = Object.values(this.state.artists);
        const albums = Object.values(this.state.albums);
        // debugger

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
            return (
                <Media
                    key={album.id}
                    media={album}
                    type='album'
                    size='medium'
                    view='index'
                    thumbnail_url={album.cover_image}
                    songIds={album.songIds}
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
        
        debugger

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
                            <h1>Search Spotify</h1>
                            <p>Your search results will appear here.</p>
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
                                <form onSubmit={this.handleSubmit}>
                                    <input 
                                        type="text" 
                                        className="SearchInputBox" 
                                        placeholder="Start typing..." 
                                        onChange={this.handleChange}/>
                                </form>
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