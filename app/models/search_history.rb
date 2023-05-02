class SearchHistory < ApplicationRecord
  belongs_to :user

  validates :query, presence: true, uniqueness: true
end
