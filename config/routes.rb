Rails.application.routes.draw do
  root 'site#index', to: 'site#index', as: :index
  get 'tweets', to: 'tweets#get_tweets'
end
