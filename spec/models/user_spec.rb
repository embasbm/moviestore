require 'rails_helper'

RSpec.describe User, type: :model do
  describe '#email' do
    it 'fails on empty email' do
      record = User.new
      record.email = ''
      record.valid?
      expect(record.errors[:email]).to include("can't be blank")
    end

    it 'success when email present' do
      record = User.new
      record.email = Faker::Internet.email
      record.valid?
      expect(record.errors[:email]).not_to include("can't be blank")
    end

    it 'fails on empty email' do
      email = Faker::Internet.email
      record_a = User.create(email: email)
      record_b = User.new(email: email)
      record_b.valid?
      expect(record_b.errors[:email]).to include("has already been taken")
    end
  end

  it { is_expected.to have_many(:movies) }
end
