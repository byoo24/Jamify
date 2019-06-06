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
    
    get '/genres/:genre_id/songs', to: 'songs#genre_index'
    get '/albums/:album_id/songs', to: 'songs#album_index'
    get '/artists/:artist_id/albums', to: 'artists#album_index'

  end # namespace

end
