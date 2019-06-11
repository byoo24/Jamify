class Api::PlaylistSongs < ApplicationController

    def create
        @playlist_song = PlaylistSong.new(playlist_songs_params)

        if @playlist_song.save
            render json: ['Song successfully added']
        else
            render json: @playlist_song.errors.full_messages, status: 422
        end
    end


    private

    def playlist_songs_params
        params.require(:playlistSong).permit(:playlist_id, :song_id)
    end

end