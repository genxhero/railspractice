Rails.application.routes.draw do
  resources :welcome, only: [:index]
  resources :locations
end
