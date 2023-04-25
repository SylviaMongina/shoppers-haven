class Product < ApplicationRecord
  belongs_to :ecommerce_website
  has_many :ratings
end
