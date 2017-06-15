class AddFileTimeToExecutables < ActiveRecord::Migration[5.1]
  def change
    add_column :executables, :path_mtime, :datetime
  end
end
