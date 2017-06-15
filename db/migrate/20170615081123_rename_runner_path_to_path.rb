class RenameRunnerPathToPath < ActiveRecord::Migration[5.1]
  def change
    rename_column "executables", :runner_path, :path
  end
end
