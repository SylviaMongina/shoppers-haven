require 'action_mailer'

class ApplicationMailer < ActionMailer::Base

  default from: 'brianmwita13@gmail.com'

  layout 'mailer'
end