class AlterMtime < ActiveRecord::Migration[5.1]
  def change
    remove_column :executables, :path_mtime
    add_column :executables, :path_mtime, :integer
  end
end
