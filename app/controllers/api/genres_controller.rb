class Api::GenresController < ApplicationController

    def index
        @genres = Genre.limit(4)
        # @genres = Genre.limit(4).with_attached_genre_cover
        if @genres
            render :index
        end
    end

end