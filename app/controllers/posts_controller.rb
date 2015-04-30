class PostsController < ApplicationController
  respond_to :json, :html
  def index
    @posts = Post.all
    respond_with(@posts) do |format|
      format.json { render :json => @posts.as_json }
      format.html
    end
  end

  def create
  end

  def new
  end

  def show
  end

  def update
  end

  def edit
  end

  def destroy
  end
end
