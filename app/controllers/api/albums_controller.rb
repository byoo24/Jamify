class Api::AlbumsController < ApplicationController

    def index
        # @albums = Album.includes(:artist, :songs).limit(8)
        @albums = Album.includes(:artist, :songs).with_attached_cover_image.sample(10)
        
        if @albums
            render :index
        else
            render json: @albums.errors.full_messages, status: 422
        end
    end

    

    def show
        # @album = Album.includes(:artist, :songs).find(params[:id])
        @album = Album.includes(:artist, :songs).with_attached_cover_image.find(params[:id])
        

        if @album
            @songs = @album.songs.with_attached_audio_file
            render :show
        else
            render json: ['That album doesn\'t exist.'], status: 422
        end
    end
end