class Api::ArtistsController < ApplicationController

    def show
        @artist = Artist.find(params[:id])

        if @artist
            render json: "api/artists/show"
        else
            render json: ['That artist doesn\'t exist.'], status: 422
        end
    end

end

