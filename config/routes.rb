Rails.application.routes.draw do
  root 'welcome#index'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
end
