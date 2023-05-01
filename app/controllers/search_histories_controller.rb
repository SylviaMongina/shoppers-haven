class SearchHistoriesController < ApplicationController
  before_action :set_search_history, only: %i[ show update destroy ]
  # skip_before_action :authorized, only: [:create]

  # GET /search_histories
  # def index
  #   @search_histories = SearchHistory.all

  #   render json: @search_histories
  # end

  def index
    search_histories = @user.search_histories
    render json: search_histories
  end


  # GET /search_histories/1
  def show
    render json: @search_history
  end

  # POST /search_histories
 def create
  @search_history = SearchHistory.new(search_history_params)
  if @search_history.save
    render json: @search_history, status: :created, location: @search_history
  else
    render json: @search_history.errors, status: :unprocessable_entity
  end
end

# def create
#   search_history = SearchHistory.create!(search_history_params.merge(user_id: @user.id )[:query])
#   # search_history = @user.search_histories.create!(params[:query])
  
#   render json: search_history, status: :created
# end
  

  # PATCH/PUT /search_histories/1
  def update
    if @search_history.update(search_history_params)
      render json: @search_history
    else
      render json: @search_history.errors, status: :unprocessable_entity
    end
  end

  # DELETE /search_histories/1
  def destroy
    @search_history.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_search_history
      @search_history = SearchHistory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
   def search_history_params
  params.permit(:user_id, :query)
end
end
# require(:search_history).