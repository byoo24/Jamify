json.album do
    json.partial! 'api/albums/album', album: @album
end

json.artist do
    json.extract! @album.artist, :id, :name, :genre_id
end

json.songs do
    # @album.songs.map do |song|
    @songs.map do |song|
        json.partial! 'api/songs/song', song: song

    end
end
