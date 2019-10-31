class Createlodgingtable < ActiveRecord::Migration[6.0]
  def change
    create_table :lodgings do |t|
      t.string :name, null: false
      t.text :description, null: true
      t.integer :location_id, null: false
      t.string :lodging_type, null: false
      t.string :breakfast, null: false
      t.boolean :pool, null: false
      t.boolean :gym, null: false
      t.string :channels, array: true, default: []
      t.string :wifi, null: false
      t.timestamps
    end
    add_index :lodgings, :location_id
    add_index :lodgings, :name
  end
end
