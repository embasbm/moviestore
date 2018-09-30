FactoryBot.define do
  factory :movie do
    title { Faker::Lorem.sentence }
    text { Faker::Lorem.paragraph }
    association :category
  end
end
