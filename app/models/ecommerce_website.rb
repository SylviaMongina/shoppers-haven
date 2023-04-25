class EcommerceWebsite < ApplicationRecord
  has_many :products
  has_many :ratings
end
