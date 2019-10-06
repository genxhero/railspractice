class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.integer :location_id, null: false
      t.string :cuisine, null: false
      t.text :description, null: true
      t.string :type, null: false

      t.timestamps
    end
    add_index :restaurants, :location_id
    add_index :restaurants, :name
  end
end
