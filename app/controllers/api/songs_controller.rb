class Api::SongsController < ApplicationController

    def show
        @song = Song.find(params[:id])

        if @song
            render "api/songs/show"
        else
            render json: ['That song doesn\'t exist.'], status: 422
        end
    end
end
