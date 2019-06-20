class Api::PlaylistSongsController < ApplicationController


    def create
        @playlist_song = PlaylistSong.new()
        @playlist_song.playlist_id = params[:playlist_id]
        @playlist_song.song_id = params[:song_id]
        
        if @playlist_song.save
            render json: ['Track was added to your playlist.']
        else
            render json: ['Sorry something went wrong. Can\'t add duplicate songs.'], status: 422
        end
    end


    private

    # def playlist_songs_params
    #     params.require(:playlistSong).permit(:playlist_id, :song_id)
    # end

end