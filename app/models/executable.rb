class Executable < ApplicationRecord
  belongs_to :project
  belongs_to :runner
  has_one :log
  enum phase: [ :pending, :running, :uploading, :done, :failed ]
  enum arch: [ :x64 ]
  enum os: [ :windows, :mac, :linux ]
end
