require 'rails_helper'

RSpec.describe Movie, type: :model do
  describe '#title' do
    it 'fails on empty title' do
      record = Movie.new
      record.title = ''
      record.valid?
      expect(record.errors[:title]).to include("can't be blank")
    end

    it 'success when title present' do
      record = Movie.new
      record.title = Faker::Lorem.sentence
      record.valid?
      expect(record.errors[:title]).not_to include("can't be blank")
    end
  end

  it { is_expected.to belong_to(:category) }
end
