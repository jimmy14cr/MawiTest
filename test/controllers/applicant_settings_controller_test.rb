require "test_helper"

class ApplicantSettingsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get applicant_settings_index_url
    assert_response :success
  end
end
