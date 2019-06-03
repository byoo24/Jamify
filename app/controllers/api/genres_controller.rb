class GenresController < ApplicationController

    def index
        @genres = Genre.all

        if @genres
            render "api/genres/index"
        end
    end

    def show
        @genre = Genre.find(params[:id])

        if @genre
            render "api/genres/show"
        else
            render json: ['That genre doesn\'t exist.'], status: 422
        end
    end
end