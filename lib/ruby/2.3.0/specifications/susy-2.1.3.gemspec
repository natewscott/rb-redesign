# -*- encoding: utf-8 -*-
# stub: susy 2.1.3 ruby lib

Gem::Specification.new do |s|
  s.name = "susy".freeze
  s.version = "2.1.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.2".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Eric Suzanne".freeze, "Tsachi Shlidor".freeze, "Aaron Gray".freeze, "Rachel Nabors".freeze, "Jina Bolton".freeze, "Danny Palmer".freeze]
  s.date = "2014-02-18"
  s.description = "Susy is a toolkit for building layouts of all types with a simple, natural syntax.".freeze
  s.email = ["eric@oddbird.net".freeze, "tsi.shlidor@gmail.com".freeze, "aaron@hellometa.com".freeze, "rachelnabors@gmail.com".freeze, "jina@sushiandrobots.com".freeze, "danny@dannyprose.com".freeze]
  s.extra_rdoc_files = ["docs/changelog.rst".freeze, "LICENSE.txt".freeze, "README.md".freeze, "lib/susy.rb".freeze]
  s.files = ["LICENSE.txt".freeze, "README.md".freeze, "docs/changelog.rst".freeze, "lib/susy.rb".freeze]
  s.homepage = "http://susy.oddbird.net/".freeze
  s.licenses = ["BSD-3-Clause".freeze]
  s.rdoc_options = ["--line-numbers".freeze, "--inline-source".freeze, "--title".freeze, "Susy".freeze, "--main".freeze, "README.md".freeze]
  s.rubyforge_project = "susy".freeze
  s.rubygems_version = "2.5.2.3".freeze
  s.summary = "Responsive layout toolkit for Sass.".freeze

  s.installed_by_version = "2.5.2.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<sass>.freeze, ["< 3.5", ">= 3.3.0"])
    else
      s.add_dependency(%q<sass>.freeze, ["< 3.5", ">= 3.3.0"])
    end
  else
    s.add_dependency(%q<sass>.freeze, ["< 3.5", ">= 3.3.0"])
  end
end
