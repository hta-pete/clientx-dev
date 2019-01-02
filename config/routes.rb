Rails.application.routes.draw do
  
  devise_for :users

  resources :jobs

  root to: "pages#index"

  get "job-board", to: "pages#job_board"
  get "landing-pages", to: "pages#landing_pages"
  
end
