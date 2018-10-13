require 'sprockets/es6'

# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :livereload

activate :autoprefixer do |prefix|
  prefix.browsers = 'last 3 versions'
end

activate :sprockets do |c|
  c.imported_asset_path = ->(sprockets_asset) do
    if sprockets_asset.logical_path =~ /\.js$/
      # all files ending with .js get put in /vendor-js
      File.join('vendor-js', sprockets_asset.logical_path)
    else
      # other assets head to /imported
      File.join('imported', sprockets_asset.logical_path)
    end
  end

  c.supported_output_extensions << '.es6'
end

set :css_dir, 'assets/stylesheets'
set :fonts_dir, 'assets/fonts'
set :images_dir, 'assets/images'
set :js_dir, 'assets/javascripts'

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :asset_hash
  activate :minify_html
  activate :minify_css, inline: true
  activate :minify_javascript, inline: true
  activate :relative_assets
  activate :imageoptim
end
