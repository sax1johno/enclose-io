class RemoveOutFromExecutables < ActiveRecord::Migration[5.1]
  def change
    remove_column :executables, :out
  end
end
