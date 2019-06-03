json.set! @album.id do
    json.extract! @album, :id, :title, :cover_url, :copyright, :artist_id
end