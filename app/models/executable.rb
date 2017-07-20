class Executable < ApplicationRecord
  validates :project_id, presence: true
  validates :name, presence: true
  validates :version, presence: true
  validates :arch, presence: true
  validates :os, presence: true
  validates :phase, presence: true

  belongs_to :project, counter_cache: true, touch: true
  belongs_to :runner, optional: true, counter_cache: true, touch: true

  enum phase: [ :pending, :running, :uploading, :done, :failed, :cancelled, :timeout ]
  # Be careful about the following enum
  # the content of them determine whether a version is complete or not
  # cf. Project#version_complete?
  enum arch: [ :x64 ]
  enum os: [ :windows, :darwin, :linux ]
  
  def fullname(sep = '-')
    case os
    when 'windows'
      "#{name}#{sep}#{version}#{sep}#{arch}.zip"
    when 'linux'
      "#{name}#{sep}#{version}#{sep}linux#{sep}#{arch}.gz"
    when 'darwin'
      "#{name}#{sep}#{version}#{sep}darwin#{sep}#{arch}.gz"
    end
  end
  
  # Ant Design Table:
  # Each record in table should have a unique `key` prop
  # or set `rowKey` to an unique primary key
  def key
    id
  end

  def extname
    windows? ? '.exe' : ''
  end
  
  def updated_at_i
    updated_at.to_i
  end

  def phase_i
    Executable.phases[phase]
  end

  def permalink
    "http://enclose.io/#{project.token}/#{fullname}"
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
