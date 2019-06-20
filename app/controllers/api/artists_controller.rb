class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.includes(:albums, :songs).limit(8)
        # @artists = Artist.includes(:albums, :songs).limit(8).with_attached_artist_images
        if @artists
            render :index
        else
            render json: @rand_artists.errors.full_messages, status: 422
        end
    end
# @artist = Artist.includes(:albums, :songs).with_attached_cover_image.find(params[:id])


    def show
        @artist = Artist.includes(:albums, :songs).find(params[:id])
        
        # @artist = Artist.with_attached_artist_images.find(params[:id])
        if @artist
            # @albums = @artist.albums.includes(:songs)
            render :show
        else
            render json: ['That artist doesn\'t exist.'], status: 422
        end
    end

    # def album_index
    #     @albums = Artist.includes(:albums).with_attached_cover_image.find(params[:id])

    # end

    def album_index
        artist_id = params[:artist_id]
        @albums = Artist.find(artist_id).albums
        # @albums = Artist.find(artist_id).albums.with_attached_cover_image
        if @albums
            render :album_index
        else
            render json: ['That artist doesn\'t exist'], status: 422
        end
    end

end

