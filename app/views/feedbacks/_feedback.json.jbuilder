json.extract! feedback, :id, :first_name, :last_name, :email, :phone, :subject, :message, :created_at, :updated_at
json.url feedback_url(feedback, format: :json)
