class AddTokenToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :token, :string
    Project.reset_column_information
    Project.first.update_attribute(:token, 'nodec')
    change_column :projects, :token, :string, unique: true, null: false
  end
end
