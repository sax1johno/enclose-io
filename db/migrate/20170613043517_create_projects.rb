class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.integer :language, null: false
      t.integer :source, null: false
      t.string :url, null: false
      t.timestamps
    end
  end
end
