class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.integer :highway, null: true
      t.text :description, null: true
      t.timestamps
    end
  end
end
