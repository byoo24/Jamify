json.album do
    json.extract! @album, :id, :title, :artist_id
    # json.cover_image url_for(@album.cover_image)
    json.songIds @album.songs.pluck(:id)
end


json.artist do
    json.extract! @album.artist, :id, :name, :genre_id
end


json.songs do
    @album.songs.map do |song|
        json.set! song.id do
            json.extract! song, :id, :title, :album_id, :artist_id, :featured_id, :genre_id, :duration
        end
    end
end
