@rand_artists.map do |artist|
    json.set! artist.id do 
        json.extract! artist, :id, :name, :genre_id
        json.image_url url_for(artist.artist_images[0])
    end
end