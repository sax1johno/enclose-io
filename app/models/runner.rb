class Runner < ApplicationRecord
  has_many :executables
  enum arch: [ :x64 ]
  enum os: [ :windows, :mac, :linux ]
end
