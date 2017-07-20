class RemovePathMtime < ActiveRecord::Migration[5.1]
  def change
    remove_column :executables, :path_mtime
  end
end
