json.playlist do
    json.extract! @playlist, :id, :name, :author_id
    json.songIds @playlist.songs.pluck(:id)
end


json.songs do
    @playlist.songs.each do |song|
        json.partial! 'api/songs/song', song: song
    end
end