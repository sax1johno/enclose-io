Rails.application.routes.draw do
  resources :executables
  resources :projects
  root 'welcome#index'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get '*token', :to => 'projects#token_show'
end
