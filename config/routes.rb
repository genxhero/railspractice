Rails.application.routes.draw do
  resources :welcome, only: [:index]
  resources :locations, only: [:index, :show]
  resources :travel_centers
  resources :restaurants
  resources :lodgings
  resources :coffee_shops
  resources :sessions, only: [:create, :destroy]
end
