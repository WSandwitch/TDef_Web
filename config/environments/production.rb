TDefWeb::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # Code is not reloaded between requests.
  config.preload_frameworks = true
  config.cache_classes = true
  config.cache_template_loading = true
  config.dependency_loading = false
  config.allow_concurrency = true
  # Eager load code on boot. This eager loads most of Rails and
  # your application in memory, allowing both thread web servers
  # and those relying on copy on write to perform better.
  # Rake tasks automatically ignore this option for performance.
  config.eager_load = true

  # Full error reports are disabled and caching is turned on.
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true

  # Enable Rack::Cache to put a simple HTTP cache in front of your application
  # Add `rack-cache` to your Gemfile before enabling this.
  # For large-scale production use, consider using a caching reverse proxy like nginx, varnish or squid.
  # config.action_dispatch.rack_cache = true

  # Disable Rails's static asset server (Apache or nginx will already do this).
  config.serve_static_assets = true

  # Compress JavaScripts and CSS.
#  config.assets.js_compressor = :uglifier
  config.assets.css_compressor = :sass
#  config.assets.css_compressor = :yui
  config.assets.js_compressor = :uglify

  config.assets.configure do |env|
    env.cache = ActiveSupport::Cache.lookup_store(:memory_store,{size: 64.megabytes})
  end

  # Do not fallback to assets pipeline if a precompiled asset is missed.
  config.assets.compile = false

  # Generate digests for assets URLs.
  config.assets.digest = true

  # Version of your assets, change this if you want to expire all your assets.
  config.assets.version = '1.1'

  # Specifies the header that your server uses for sending files.
  # config.action_dispatch.x_sendfile_header = "X-Sendfile" # for apache
   config.action_dispatch.x_sendfile_header = 'X-Accel-Redirect' # for nginx

  # Force all access to the app over SSL, use Strict-Transport-Security, and use secure cookies.
  # config.force_ssl = true

  # Set to :debug to see everything in the log.
  config.log_level = :info

  # Prepend all log lines with the following tags.
  # config.log_tags = [ :subdomain, :uuid ]

  # Use a different logger for distributed setups.
  # config.logger = ActiveSupport::TaggedLogging.new(SyslogLogger.new)

  # Use a different cache store in production.
	if (!ENV['REDIS_HOST'].nil? || !ENV['REDIS_PORT'].nil?) then
		config.cache_store = :redis_store, { :host => ENV['REDIS_HOST'] || "localhost", :port => ENV['REDIS_PORT'].nil? ? 6379 : ENV['REDIS_PORT'].to_i , :db => 0, :expires_in => 90.minutes }
	else
		config.cache_store = :memory_store, { size: (ENV['MEMSTORE_SIZE'].nil? ? 256 : ENV['MEMSTORE_SIZE'].to_i).megabytes }
	end
  # Enable serving of images, stylesheets, and JavaScripts from an asset server.
  # config.action_controller.asset_host = "http://assets.example.com"

  # Precompile additional assets.
  # application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
  # config.assets.precompile += %w( search.js )
  config.assets.precompile += ['*.js', '*.css', '*.css.erb']

  # Ignore bad email addresses and do not raise email delivery errors.
  # Set this to true and configure the email server for immediate delivery to raise delivery errors.
  # config.action_mailer.raise_delivery_errors = false

  # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
  # the I18n.default_locale when a translation can not be found).
  config.i18n.fallbacks = true

  # Send deprecation notices to registered listeners.
  config.active_support.deprecation = :notify

  # Disable automatic flushing of the log to improve performance.
  # config.autoflush_log = false

   config.assets.debug = false

  # Use default logging formatter so that PID and timestamp are not suppressed.
	config.log_formatter = ::Logger::Formatter.new
  #mail
	config.action_mailer.perform_deliveries = true
	config.action_mailer.raise_delivery_errors = true
	config.action_mailer.delivery_method = :smtp
	config.action_mailer.smtp_settings = {
		address:              'smtp.yandex.ru',
		port:                 '587',
		domain:               'wsstudio.tk',
		user_name:            'test@wsstudio.tk',
		password:             'testtest',
		authentication:       'login',
		enable_starttls_auto: true  }
	config.action_mailer.default_options = {from: 'test@wsstudio.tk'}
#	Rails.application.routes.default_url_options[:host] = 'wsstudio.tk'
	config.action_mailer.default_url_options = { host: 'wsstudio.tk', port: 3000 }
end
