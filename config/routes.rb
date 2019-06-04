Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create] do
      resources :playlists, only: [:index, :show, :create, :update, :destroy]
    end

    resources :songs, only:[:show]

    resources :genres, only: [:index] do
      resources :artists, only: [:index]
      resources :albums, only: [:index]
      resources :songs, only: [:index]
    end

    resources :artists, only: [:show] do 
      resources :albums, only: [:index]
    end

    resources :albums, only:[:show] do
      resources :songs, only:[:index]
    end


  end
end
