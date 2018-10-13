require 'sprockets/es6'

activate :livereload

activate :autoprefixer do |prefix|
  prefix.browsers = 'last 2 versions'
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

# Asset folders

set :css_dir,    'assets/stylesheets'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml',  layout: false
page '/*.json', layout: false
page '/*.txt',  layout: false

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_html
  activate :minify_css,        inline: true
  activate :minify_javascript, inline: true
  activate :relative_assets
  activate :imageoptim
end
