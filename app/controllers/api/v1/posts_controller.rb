class Api::V1::PostsController < Api::V1::CoreController
  def permitted_params
    params.permit(post: [:comment])
  end
end
