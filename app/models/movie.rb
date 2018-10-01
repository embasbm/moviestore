class Movie < ApplicationRecord
  validates :title, presence: true

  belongs_to :category, optional: true
  belongs_to :user, optional: true
end
