class Api::SearchController < ApplicationController

    def index
        input = search_params[:input]

        @artists = Artist.includes(:albums, :songs).where("name LIKE (?)", "%#{input}%").with_attached_artist_images
        @albums = Album.includes(:artist, :songs).where("title LIKE (?)", "%#{input}%").with_attached_cover_image
    
        render :index
        # debugger
        puts @artists
        puts @albums
        abc = 32
    end


    private
    
    def search_params
        params.require(:search).permit(:input)
    end
end