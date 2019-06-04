class Api::GenresController < ApplicationController

    def index
        @genres = Genre.all
        if @genres
            render :index
        end
    end

end