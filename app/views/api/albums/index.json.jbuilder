@albums.map do |album|
    json.set! album.id do
        json.extract! album, :title, :artist_id, :cover_url, :copyright
    end
end