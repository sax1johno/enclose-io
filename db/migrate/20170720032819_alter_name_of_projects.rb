class AlterNameOfProjects < ActiveRecord::Migration[5.1]
  def change
    change_column :projects, :name, :string, null: false, unique: true
    add_index :projects, :name, unique: true
    change_column :projects, :token, :string, null: false, unique: true
    add_index :projects, :token, unique: true
  end
end
