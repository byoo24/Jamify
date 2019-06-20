class Api::PlaylistsController < ApplicationController

    # GOOD
    def index
        @playlists = current_user.playlists.includes(:songs)

        if @playlists
            # @songs = @playlists.songs.with_attached_audio_file
            render :index
        else
            render json: ['Error with retrieving playlists'], status: 422
        end
    end


# Song.with_attached_###.joins(:playlist).where(playlist.id=?)


    def show
        @playlist = current_user.playlists.includes(:songs).find(params[:id])

        if @playlist
            @songs = @playlist.songs.with_attached_audio_file
            # @songs = Song.joins(:playlists).where('playlist_songs.playlist_id = :ids', ids: @playlist.id).with_attached_audio_file
            render :show
        else
            render json: ['That playlist doesn\'t exist.'], status: 422
        end
    end



    # videos = Video.with_attached_video_file.all
    # ids = playlist.song_ids = [4,6,3]
    # where('playlist_id == :id1 || playlist_id == :id2 || playlist_id == id3', id: ids[0], ids2[1], id3[2].with_attached_audio_file)




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

