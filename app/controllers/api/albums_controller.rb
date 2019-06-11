class Api::AlbumsController < ApplicationController

    def index
        # @rand_albums = Album.limit(8).with_attached_cover_image
        @albums = Album.limit(8)
        
        if @albums
            render :index
        else
            render json: @albums.errors.full_messages, status: 422
        end
    end

    

    def show
        @album = Album.find(params[:id])
        

        if @album
            # @songs = @album.songs.with_attached_audio_file
            render :show
        else
            render json: ['That album doesn\'t exist.'], status: 422
        end
    end
end