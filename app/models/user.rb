class User < ApplicationRecord
  validates_presence_of :email, :password
  validates :email, uniqueness: true
end
