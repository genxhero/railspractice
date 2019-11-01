Rails.application.routes.draw do
  resources :welcome, only: [:index]
  resources :locations
  resources :travel_centers
  resources :restaurants
  resources :lodgings
  resources :coffee_shops
end
