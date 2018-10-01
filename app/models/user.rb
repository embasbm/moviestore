class User < ApplicationRecord
  validates_presence_of :email, :password
  validates :email, uniqueness: true

  has_many :movies
end
