class AlterNameOfRunners < ActiveRecord::Migration[5.1]
  def change
    change_column :runners, :name, :string, null: false, unique: true
    add_index :runners, :name, unique: true
  end
end
