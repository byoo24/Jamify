export const fetchAlbum = albumId => (
    $.ajax({
        method: 'GET',
        url: `/api/albums/${albumId}`
    })
);


export const fetchAlbums = () => (
    $.ajax({
        method: 'GET',
        url: '/api/albums'
    })
)





export const fetchAlbumsFromArtist = (artist_id) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/artists/${artist_id}/albums`
        })
    )
}

