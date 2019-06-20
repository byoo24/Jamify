json.extract! album, :id, :title, :artist_id
# json.cover_image url_for(album.cover_image)

json.songIds album.songs.pluck(:id)
