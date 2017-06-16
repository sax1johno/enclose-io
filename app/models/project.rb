class Project < ApplicationRecord
  has_many :executables, dependent: :destroy

  enum language: [ :ruby, :nodejs ]
  enum source: [ :npm, :rubygems, :github ]

  def permalink
    "http://enclose.io/#{token}"
  end
end
