Rails.application.routes.draw do
  resources :welcome, only: [:index]
  namespace :api, defaults: { format: :json } do
      resources :locations, only: [:index, :show]
  end
  resources :travel_centers
  resources :restaurants
  resources :lodgings
  resources :coffee_shops
  resource :session, only: [:create, :destroy]
  root :to => 'welcome#index'
  get '*path', to: 'welcome#index'
end
