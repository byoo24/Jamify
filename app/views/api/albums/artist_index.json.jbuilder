@albums.map do |album|
    json.set! album.id do
        json.extract! album, :id, :title, :artist_id, :copyright
        json.cover_image url_for(album.cover_image)
    end
end