require "test_helper"

class EcommerceWebsitesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ecommerce_website = ecommerce_websites(:one)
  end

  test "should get index" do
    get ecommerce_websites_url, as: :json
    assert_response :success
  end

  test "should create ecommerce_website" do
    assert_difference("EcommerceWebsite.count") do
      post ecommerce_websites_url, params: { ecommerce_website: { access_token: @ecommerce_website.access_token, name: @ecommerce_website.name, url: @ecommerce_website.url } }, as: :json
    end

    assert_response :created
  end

  test "should show ecommerce_website" do
    get ecommerce_website_url(@ecommerce_website), as: :json
    assert_response :success
  end

  test "should update ecommerce_website" do
    patch ecommerce_website_url(@ecommerce_website), params: { ecommerce_website: { access_token: @ecommerce_website.access_token, name: @ecommerce_website.name, url: @ecommerce_website.url } }, as: :json
    assert_response :success
  end

  test "should destroy ecommerce_website" do
    assert_difference("EcommerceWebsite.count", -1) do
      delete ecommerce_website_url(@ecommerce_website), as: :json
    end

    assert_response :no_content
  end
end
