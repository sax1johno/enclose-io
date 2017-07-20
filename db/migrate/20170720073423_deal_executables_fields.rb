class DealExecutablesFields < ActiveRecord::Migration[5.1]
  def change
    remove_column :executables, :path
    remove_column :executables, :cmd
    remove_column :executables, :ret
    add_column :executables, :log, :string
  end
end
