class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def me
    render json: { user: current_user }, status: :accepted
  end

 def create
  @user = User.create!(user_params)
  @token = encode_token({ user_id: @user.id })
  render json: { user: @user, jwt: @token }, status: :created
 end


  private

 def user_params
  params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
 end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end
end
