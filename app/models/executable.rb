class Executable < ApplicationRecord
  belongs_to :project
  belongs_to :runner, optional: true
  has_one :log
  enum phase: [ :pending, :running, :uploading, :done, :failed ]
  enum arch: [ :x64 ]
  enum os: [ :windows, :macos, :linux ]
end
