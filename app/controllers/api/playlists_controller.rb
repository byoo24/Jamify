class Api::PlaylistsController < ApplicationController

    def show
        @playlist = current_user.playlists.find(params[:id])

        if @playlist
            render :show
        else
            render json: ['That playlist doesn\'t exist.'], status: 422
        end
    end


    def index
        @playlists = current_user.playlists

        if @playlists
            render :index
        else
            render json: ['Error with retrieving playlists'], status: 422
        end
    end


    def create
        @playlist = current_user.playlists.new(playlist_params)
        if @playlist.save!
            render :show
        else
            render json: @playlist.errors.full_messages
        end
    end

    # def update
    #     @playlist = current_user.playlists.find(params[:id])
        
    #     if @playlist.update(playlist_params)
    #         render json: 'api/playlists/create'
    #     else
    #         render json: @playlist.errors.full_messages
    #     end
    # end

    # def destroy
    #     @playlist = current_user.playlists.find(params[:id])
    #     @playlist.destroy()
    #     render json: @playlist.id
    # end

    private

    def playlist_params
        params.require(:playlist).permit(:name, :author_id)
    end

end

