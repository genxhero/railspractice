class CreateCoffeeShops < ActiveRecord::Migration[6.0]
  def change
    create_table :coffee_shops do |t|
      t.string :name
      t.integer :location_id
      t.string :description
      t.string :type
      t.boolean :couches
      t.boolean :armchairs
      t.boolean :restrooms
      t.boolean :wifi

      t.timestamps
    end
  end
end
