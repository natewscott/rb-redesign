# -*- encoding: utf-8 -*-
# stub: hologram 1.2.0 ruby lib

Gem::Specification.new do |s|
  s.name = "hologram".freeze
  s.version = "1.2.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["JD Cantrell".freeze, "August Flanagan".freeze]
  s.date = "2014-07-22"
  s.description = "Build doc type things".freeze
  s.email = ["jcantrell@trulia.com".freeze]
  s.executables = ["hologram".freeze]
  s.files = ["bin/hologram".freeze]
  s.homepage = "http://trulia.github.io/hologram".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.5.2.3".freeze
  s.summary = "Build document type things.".freeze

  s.installed_by_version = "2.5.2.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<redcarpet>.freeze, ["< 4.0", ">= 2.2"])
      s.add_runtime_dependency(%q<rouge>.freeze, [">= 1.5"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.3"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 2.14"])
    else
      s.add_dependency(%q<redcarpet>.freeze, ["< 4.0", ">= 2.2"])
      s.add_dependency(%q<rouge>.freeze, [">= 1.5"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.3"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 2.14"])
    end
  else
    s.add_dependency(%q<redcarpet>.freeze, ["< 4.0", ">= 2.2"])
    s.add_dependency(%q<rouge>.freeze, [">= 1.5"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.3"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 2.14"])
  end
end
