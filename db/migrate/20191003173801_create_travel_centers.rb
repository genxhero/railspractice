class CreateTravelCenters < ActiveRecord::Migration[6.0]
  def change
    create_table :travel_centers do |t|
      t.integer :location_id
      t.string :name
      t.text :description
      t.integer :unleaded
      t.integer :diesel

      t.timestamps
    end
  end
end
