class CreateTravelCenters < ActiveRecord::Migration[6.0]
  def change
    create_table :travel_centers do |t|
      t.integer :location_id, null: false
      t.string :name
      t.text :description
      t.integer :unleaded
      t.integer :diesel
      t.timestamps
    end

    add_index :travel_centers, :location_id
  end
end
