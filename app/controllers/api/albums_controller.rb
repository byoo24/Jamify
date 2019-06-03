class Api::AlbumsController < ApplicationController

    def index
        @artist_id = params[:artist_id]

        if @artist_id
            @albums = Album.all.where(artist_id: @artist_id)
            render "api/albums/index"
        else
            render json: ['That artist deson\'t exist'], status: 422
        end
    end

    def show
        @album = Album.find(params[:id])
        
        if @album
            render "api/albums/show"
        else
            render json: ['That album doesn\'t exist.'], status: 422
        end
    end
end