require 'action_mailer'

class ApplicationMailer < ActionMailer::Base
  default from: 'shopersshaven@gmail.com'
  layout 'mailer'
end
