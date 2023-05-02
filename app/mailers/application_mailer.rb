require 'action_mailer'

class ApplicationMailer < ActionMailer::Base

  default from: 'dennomaz@gmail.com'

  layout 'mailer'
end