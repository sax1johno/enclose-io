class Executable < ApplicationRecord
  belongs_to :project, counter_cache: true, touch: true
  belongs_to :runner, optional: true, counter_cache: true, touch: true

  enum phase: [ :pending, :running, :uploading, :done, :failed ]
  enum arch: [ :x86_64, :x86 ]
  enum os: [ :windows, :macos, :linux ]
end
