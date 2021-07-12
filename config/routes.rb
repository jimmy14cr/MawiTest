Rails.application.routes.draw do
  get 'applicant_settings/index'
  get 'evaluation_settings/index'
  get 'welcome/index'
  root "welcome#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
