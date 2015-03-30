source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.2'

# Use sqlite3 as the database for Active Record
gem 'sqlite3'

#gem "pg"

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
#gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
#gem 'turbolinks'

gem "sprockets-rails"

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.1.2'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
gem 'capistrano', group: :development

#creating simple forms
gem 'simple_form'

# Use debugger
# gem 'debugger', group: [:development, :test]

gem 'rack-mini-profiler', group: :development

gem "twitter-bootstrap-rails"

gem "devise", "3.2.4"


gem "mail"

gem 'rails-i18n' , "4.0.3"

#gem 'webrick', '1.3.1', group: :development

#for creating png
gem 'chunky_png' , '1.3.3'

gem 'rqrcode'

#compressor
#gem "ruby-lzma"

#redis
gem 'redis-rails'


#for use C code in ruby
gem 'RubyInline'	
	
if RUBY_PLATFORM=~ /mingw/ 
	#fast webserver
	gem "thin"
else
	#fast webserver
	gem 'puma', '2.11.1'

	#for resising images
	#sudo apt-get install libgd2-noxpm-dev
	gem 'fastimage_resize' , "2.0.3"
end

