require 'action_mailer'

class ApplicationMailer < ActionMailer::Base
  default from: 'ochiengolu@gmail.com'
  layout 'mailer'
end
