Rails.application.routes.draw do
  resources :products
  resources :ecommerce_websites
  resources :search_histories
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
