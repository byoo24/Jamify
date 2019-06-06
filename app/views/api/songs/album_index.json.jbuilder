@songs.map do |song|
    json.set! song.id do
        json.extract! song, :id, :title, :album_id, :featured_id, :genre_id
        json.audio_url url_for(song.audio_file)
    end
end

