class Api::AlbumsController < ApplicationController

    def index
        # @rand_albums = Album.limit(8).with_attached_cover_image
        @rand_albums = Album.limit(8)
        
        if @rand_albums
            render :index
        else
            render json: @rand_albums.errors.full_messages, status: 422
        end
    end

    

    def show
        @album = Album.find(params[:id])
        
        if @album
            render :show
        else
            render json: ['That album doesn\'t exist.'], status: 422
        end
    end
end