import React from 'react';


export default () => {
    return (
        <>
            <div className="search">
                <div className="search-header">
                    <div className="search-input">
                        <div className="search-input-container">
                            <input type="text" className="SearchInputBox" placeholder="Start typing..." />
                        </div>
                    </div>
                </div>

                <div className="search-content">
                    <div className="search-content-container">
                        <div className="no-search">
                            <h1>Search Spotify</h1>
                            <p>Find your favorite songs, artists, albums, podcasts and playlists.</p>
                        </div>
                    </div>
                </div>

            </div>

            
        </>
    );
};