json.set! @song.id do 
    json.extract! @song, :title, :artist_id, :album_id, :featured_id, :genre_id, :performed_by, :written_by, :produced_by
    json.audio_url url_for(@song.audio_file)
end