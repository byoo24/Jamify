json.extract! artist, :id, :name, :genre_id

images = artist.artist_images
    json.image_url url_for(images[0])
    json.cover_url url_for(images[1])

json.albumIds artist.albums.pluck(:id)