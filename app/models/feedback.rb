class Feedback < ApplicationRecord

  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  # validates :phone, presence: true, format: { with: /\A[0-9]{10}\z/, message: "must be a 10 digit number" }


end
