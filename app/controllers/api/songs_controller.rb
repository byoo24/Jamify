class Api::SongsController < ApplicationController

    def show
        @song = Song.includes(:album, :artist).with_attached_audio_file.find(params[:id])

        if @song
            render :song
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    # def genre_index
    # end

    # def album_index
    #     album_id = params[:album_id]
    #     @songs = Album.find(album_id).songs.with_attached_audio_file
    #     # @songs = Album.find(album_id).songs

    #     if @songs
    #         render :album_index
    #     else
    #         render json: @songs.errors.full_messages, status: 422
    #     end
    # end
end
