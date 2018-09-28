require 'rails_helper'

RSpec.describe Movie, type: :model do
  describe '#title' do
    record = Movie.new
    record.title = ''
    record.valid?
    record.errors[:title].should include("can't be blank")

    record.title = Faker::Lorem.sentence
    record.valid?
    record.errors[:title].should_not include("can't be blank")
  end
end
