
json.playlists do
    @playlists.map do |playlist|
        json.set! playlist.id do 
            json.extract! playlist, :id, :name, :author_id
            json.songIds playlist.songs.pluck(:id)
        end
    end
end

