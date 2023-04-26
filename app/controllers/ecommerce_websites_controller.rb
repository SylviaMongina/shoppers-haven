class EcommerceWebsitesController < ApplicationController
  before_action :set_ecommerce_website, only: %i[ show update destroy ]

  # GET /ecommerce_websites
  def index
    @ecommerce_websites = EcommerceWebsite.all

    render json: @ecommerce_websites
  end

  # GET /ecommerce_websites/1
  def show
    render json: @ecommerce_website
  end

  # POST /ecommerce_websites
  def create
    @ecommerce_website = EcommerceWebsite.new(ecommerce_website_params)

    if @ecommerce_website.save
      render json: @ecommerce_website, status: :created, location: @ecommerce_website
    else
      render json: @ecommerce_website.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ecommerce_websites/1
  def update
    if @ecommerce_website.update(ecommerce_website_params)
      render json: @ecommerce_website
    else
      render json: @ecommerce_website.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ecommerce_websites/1
  def destroy
    @ecommerce_website.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ecommerce_website
      @ecommerce_website = EcommerceWebsite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ecommerce_website_params
      params.require(:ecommerce_website).permit(:name, :url, :access_token)
    end
end
