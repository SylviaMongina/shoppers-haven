require "test_helper"

class SearchHistoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @search_history = search_histories(:one)
  end

  test "should get index" do
    get search_histories_url, as: :json
    assert_response :success
  end

  test "should create search_history" do
    assert_difference("SearchHistory.count") do
      post search_histories_url, params: { search_history: { query: @search_history.query, user_id: @search_history.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show search_history" do
    get search_history_url(@search_history), as: :json
    assert_response :success
  end

  test "should update search_history" do
    patch search_history_url(@search_history), params: { search_history: { query: @search_history.query, user_id: @search_history.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy search_history" do
    assert_difference("SearchHistory.count", -1) do
      delete search_history_url(@search_history), as: :json
    end

    assert_response :no_content
  end
end
