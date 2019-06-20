Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do 

    resource :session, only: [:create, :destroy]
    resources :users, only: [:create] do
      resources :playlists, only: [:index, :show, :create, :update, :destroy]
    end


    resources :genres, only: [:index] 
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :songs, only: [:show]


    # resources :playlist_songs, only: [:create, :destroy]

    # resources :posts, :path => "/admin/posts"

    resources :playlist_songs, :path => '/playlists/:playlist_id/songs/:song_id', only: [:create, :destroy]
    
    # get '/genres/:genre_id/songs', to: 'songs#genre_index'
    # get '/albums/:album_id/songs', to: 'songs#album_index'
    # get '/artists/:artist_id/albums', to: 'artists#album_index'


    # post '/playlists/:playlist_id/songs/:song_id', to: 'playlist_songs#create'
    # delete '/playlists/:playlist_id/songs/:song_id', to: 'playlist_songs#delete'

  end # namespace


end
