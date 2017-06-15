class CreateRunners < ActiveRecord::Migration[5.1]
  def change
    create_table :runners do |t|
      t.string  :name,              null: false
      t.integer :arch,              null: false
      t.integer :os,                null: false
      t.integer :executables_count, null: false, default: 0
      t.timestamps
    end
  end
end
