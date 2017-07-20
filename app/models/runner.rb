class Runner < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :arch, presence: true
  validates :os, presence: true

  has_many :executables, dependent: :restrict_with_exception

  enum arch: [ :x64, :x86 ]
  enum os: [ :windows, :mac, :linux ]
end
