class Executable < ApplicationRecord
  belongs_to :project, counter_cache: true, touch: true
  belongs_to :runner, optional: true, counter_cache: true, touch: true

  enum phase: [ :pending, :running, :uploading, :done, :failed ]
  enum arch: [ :x64, :x86 ]
  enum os: [ :windows, :macos, :linux ]
  
  def fullname
    case os
    when 'windows'
      "#{name}-#{version}-#{arch}.exe"
    when 'linux'
      "#{name}-#{version}-linux-#{arch}"
    when 'macos'
      "#{name}-#{version}-darwin-#{arch}"
    end
  end

  def extname
    windows? ? '.exe' : ''
  end
  
  def updated_at_i
    updated_at.to_i
  end
  
  def self.os_filter
    os.map do |k, v|
      {
        text: k,
        value: "os.#{k}"
      }
    end
  end
  
  def self.arch_filter
    arches.map do |k, v|
      {
        text: k,
        value: "arch.#{k}"
      }
    end
  end
end
