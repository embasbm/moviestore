require 'rails_helper'

RSpec.describe Category, type: :model do
  describe '#name' do
    it 'fails on empty name' do
      record = Category.new
      record.name = ''
      record.valid?
      expect(record.errors[:name]).to include("can't be blank")
    end

    it 'success when name present' do
      record = Category.new
      record.name = Faker::Lorem.word
      record.valid?
      expect(record.errors[:name]).not_to include("can't be blank")
    end
  end

  it { is_expected.to have_many(:movies) }
end
