class CreateExecutables < ActiveRecord::Migration[5.1]
  def change
    create_table :executables do |t|
      t.integer :project_id, null: false
      t.string :name, null: false
      t.string :version, null: false
      t.integer :arch, null: false
      t.integer :os, null: false
      t.integer :phase, null: false, default: 0
      t.integer :runner_id
      t.string :runner_path
      t.timestamps
    end
  end
end
