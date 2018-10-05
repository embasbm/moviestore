Rails.application.routes.draw do
  root 'home#index'
  namespace :api do
    namespace :v1 do
      resources :movies
      resources :categories, only: [:index]
    end
  end
end
