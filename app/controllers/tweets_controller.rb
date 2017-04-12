class TweetsController < ApplicationController
  def get_tweets
    test = { test: "testing" }
    render json: test
  end
end
