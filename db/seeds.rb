%w{action drama comedy}.each do |c|
  Category.create(name: c)
end

%w{spiderman superman batman}.each do |p|
  Movie.create(title: p, text: Faker::Lorem.paragraph, category: Category.all.sample)
end
