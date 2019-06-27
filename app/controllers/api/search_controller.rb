class Api::SearchController < ApplicationController

    def index
        input = search_params[:input]

        if input.empty?
            render json: {}
            return
        end

        @artists = Artist.includes(:albums, :songs).where("name LIKE (?)", "%#{input}%").with_attached_artist_images
        @albums = Album.includes(:artist, :songs).where("title LIKE (?)", "%#{input}%").with_attached_cover_image
    
        render :index
    end


    private
    
    def search_params
        params.require(:search).permit(:input)
    end
end