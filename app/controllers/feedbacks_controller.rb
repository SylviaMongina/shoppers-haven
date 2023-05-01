class FeedbacksController < ApplicationController
  # before_action :set_feedback, only: %i[ show update destroy ]
 skip_before_action :authorized, only: [:index, :create]
  # GET /feedbacks
  # GET /feedbacks.json
  def index
    @feedbacks = Feedback.all
    render json: @feedbacks
  end

  # GET /feedbacks/1
  # GET /feedbacks/1.json
  def show
  end

  # POST /feedbacks
  # POST /feedbacks.json

  
def create
    @feedback = Feedback.new(feedback_params)

    if @feedback.save
      # send feedback email
      FeedbackMailer.send_feedback_email(@feedback.email).deliver_now 
    else
      render :new
    end
  end

# def create

#   feedback = Feedback.create!(feedback_params)
#   FeedbackMailer.send_feedback_email(@feedback.email).deliver_now 
#   render json: feedback
# end


  # PATCH/PUT /feedbacks/1
  # PATCH/PUT /feedbacks/1.json
  def update
    if @feedback.update(feedback_params)
      render :show, status: :ok, location: @feedback
    else
      render json: @feedback.errors, status: :unprocessable_entity
    end
  end

  # DELETE /feedbacks/1
  # DELETE /feedbacks/1.json
  def destroy
    @feedback.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_feedback
      @feedback = Feedback.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def feedback_params
      params.permit(:first_name, :last_name, :email, :subject, :message)
    end
    
end
# .require(:feedback)