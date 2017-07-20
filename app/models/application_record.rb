class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.dump_fixture
    fixture_file = "#{Rails.root}/test/fixtures/#{self.table_name}.yml"
    File.open(fixture_file, "w") do |f|
      self.all.each do |x|
        f.puts({ "#{self.table_name.singularize}_#{x.id}" => x.attributes }.to_yaml.sub!(/---\s?/, "\n"))
      end
    end
  end
end
