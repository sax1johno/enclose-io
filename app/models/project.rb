class Project < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :language, presence: true
  validates :source, presence: true
  validates :url, presence: true
  validates :token, presence: true, uniqueness: true

  has_many :executables, dependent: :destroy

  enum language: [ :ruby, :nodejs, :c, :cc ]
  enum source: [ :npm, :rubygems, :github ]

  def permalink
    "http://enclose.io/#{token}"
  end
  
  def versions
    executables.group(:version).pluck(:version)
  end
  
  def versions_filter
    versions.map do |x|
      {
        text: x,
        value: "version.#{x}"
      }
    end + [
      {
        text: 'OS',
        value: 'os',
        children: Executable.os_filter,
      }, {
        text: 'Arch',
        value: 'arch',
        children: Executable.arch_filter,
      }
    ]
  end

  def version_complete?(version)
    Executable.arches.keys.each do |arch|
      Executable.os.keys.each do |os|
        return false unless executables.find_by(
            version: version,
            arch: arch,
            os: os,
            phase: :done
          )
      end
    end
    true
  end

  def latest_version
    versions.sort.reverse.each do |x|
      return x if version_complete?(x)
    end
    nil
  end
end
