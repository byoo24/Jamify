json.albums do
    @albums.map do |album|
        
        json.set! album.id do
            json.extract! album, :id, :title, :artist_id, :copyright
            # json.cover_image url_for(album.cover_image)
            
            json.songIds album.songs.pluck(:id)
        end
    end
end


json.songs do
    @albums.map do |album|
        album.songs.map do |song|
            json.set! song.id do
                json.extract! song, :id, :title, :album_id, :artist_id, :featured_id, :genre_id, :duration
            end
        end
    end
end