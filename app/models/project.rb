class Project < ApplicationRecord
  has_many :executables
  enum language: [ :ruby, :nodejs ]
  enum source: [ :npm, :rubygems, :github ]
end
