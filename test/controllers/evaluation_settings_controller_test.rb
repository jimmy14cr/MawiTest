require "test_helper"

class EvaluationSettingsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get evaluation_settings_index_url
    assert_response :success
  end
end
