## Snippets

Since we want to use react as frontend framework, will make the rails app api:

* ```rails new moviestore --api -d postgresql -T --no-rdoc --no-ri```
* whithin the main folder: ```create-react-app client```, this will create the client (our front end) worksapce.
* Some gems for testing:
  ```ruby
  group :development, :test do
    gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
    gem 'faker'
    gem 'database_cleaner'
    gem 'rspec-rails'
    gem 'factory_bot_rails'
    gem 'foreman'
  end
  ```

