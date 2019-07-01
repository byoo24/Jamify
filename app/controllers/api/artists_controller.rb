class Api::ArtistsController < ApplicationController

    def index
        # @artists = Artist.includes(:albums, :songs).with_attached_artist_images
        @artists = Artist.includes(:albums, :songs).all
        if @artists
            render :index
        else
            render json: @artists.errors.full_messages, status: 422
        end
    end
# @artist = Artist.includes(:albums, :songs).with_attached_cover_image.find(params[:id])


    def show
        @artist = Artist.includes(:albums, :songs).with_attached_artist_images.find(params[:id])
        # @artist = Artist.includes(:albums, :songs).find(params[:id])

        if @artist
            @albums = @artist.albums.includes(:songs).with_attached_cover_image
            # @albums = @artist.albums.includes(:songs)
            render :show
        else
            render json: ['That artist doesn\'t exist.'], status: 422
        end
    end


end

