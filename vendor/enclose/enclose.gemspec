# coding: utf-8
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "enclose/version"

Gem::Specification.new do |spec|
  spec.name          = "enclose"
  spec.version       = Enclose::VERSION
  spec.authors       = ["Minqi Pan"]
  spec.email         = ["pmq2001@gmail.com"]

  spec.summary       = %q{CLI Installer for Enclose.IO}
  spec.description   = %q{CLI Installer for Enclose.IO, the cloud-based service that compiles your application into a single executable with auto-update.}
  spec.homepage      = "http://enclose.io/"
  spec.license       = "MIT"
  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.15"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
end
