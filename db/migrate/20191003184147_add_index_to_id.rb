class AddIndexToId < ActiveRecord::Migration[6.0]
  def change
    add_index :locations, :name
    add_index :locations, :id
  end
end
