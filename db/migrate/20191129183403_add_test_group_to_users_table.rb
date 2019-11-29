class AddTestGroupToUsersTable < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :test group, :string
  end
  add_index :users, :test_group
end
