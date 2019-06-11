json.artist do
    json.extract! @artist, :id, :name, :genre_id
    # json.image_url url_for(@artist.artist_images[0])
    # json.cover_url url_for(@artist.artist_images[1])
end


json.albums do 
    @artist.albums.map do |album|
        
        json.set! album.id do
            json.extract! album, :id, :title, :artist_id
            # json.cover_image url_for(album.cover_image)
            json.songIds album.songs.pluck(:id)
        end
    end

end