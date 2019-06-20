json.set! song.id do 
    json.extract! song, :id, :title, :album_id, :artist_id, :featured_id, :genre_id, :duration  
end
