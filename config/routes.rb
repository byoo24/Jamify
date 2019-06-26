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

    resources :search, only: [:index]

    resources :playlist_songs, :path => '/playlists/:playlist_id/songs/:song_id', only: [:create, :destroy]
    

  end # namespace


end
