class CreateCoffeeShops < ActiveRecord::Migration[6.0]
  def change
    create_table :coffee_shops do |t|
      t.string :name, null: false
      t.integer :location_id, null: false
      t.string :description, null: false
      t.string :type, null: false
      t.boolean :couches, null: false
      t.boolean :armchairs, null: false
      t.boolean :restrooms, null: false
      t.boolean :wifi, null: false
      t.timestamps
    end
    add_index :coffee_shops, :location_id
    add_index :coffee_shops, :type
  end
end
