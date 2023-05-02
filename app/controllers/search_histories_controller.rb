class SearchHistoriesController < ApplicationController
  # before_action :set_search_history, only: %i[ show create update destroy ]

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_response_unprocessable_entity
  # GET /search_histories
  def index
    # @search_histories = SearchHistory.all
    @search_histories = @user.search_histories.all
    render json: @search_histories
  end

  # GET /search_histories/1
  def show
    search_histories = @user.search_histories.find([:id])
    render json: @search_history
  end

  # POST /search_histories
 def create
 
  @search_history = @user.search_histories.create!(search_history_params)
  render json: @search_history, status: :created, location: @search_history
end
  

  # PATCH/PUT /search_histories/1
  def update
    @search_history = @user.search_histories.update!(search_history_params)
  render json: @search_history, location: @search_history
  end

  # DELETE /search_histories/1
  def destroy
    @search_histories = SearchHistory.find([:id])
    @search_history.destroy
    head :no_content

    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_search_history
      @search_history = SearchHistory.find(params[:id])
    end

    def render_not_found_response
      render json: { error: "Target not found" }, status: :not_found
    end

    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    # Only allow a list of trusted parameters through.
   def search_history_params
  params.permit(:query, :user_id)
end
end
# require(:search_history).