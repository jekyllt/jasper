source "https://rubygems.org"

require "json"
require "open-uri"
versions = JSON.parse(open("https://pages.github.com/versions.json").read)

ruby versions["ruby"]

gem "rdiscount", "~> 2.1.7"
gem "pygments.rb", "~> 0.5.0"
gem "github-pages", versions["github-pages"]
gem "rake", "~> 10.1.1"
