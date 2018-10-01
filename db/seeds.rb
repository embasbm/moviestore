Category.destroy_all
Movie.destroy_all

%w{Action Drama Comedy}.each do |c|
  Category.create(name: c)
end

%w{Spiderman Superman Batman Robocop Aquaman}.each do |p|
  Movie.create(title: p, text: Faker::Lorem.paragraph(10), category: Category.all.sample)
end
