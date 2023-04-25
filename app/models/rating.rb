class Rating < ApplicationRecord
  belongs_to :product
  belongs_to :ecommerce_website
end
