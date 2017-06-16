class Runner < ApplicationRecord
  has_many :executables, dependent: :restrict_with_exception

  enum arch: [ :x64, :x86 ]
  enum os: [ :windows, :mac, :linux ]
end
