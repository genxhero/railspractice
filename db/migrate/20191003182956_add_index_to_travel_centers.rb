class AddIndexToTravelCenters < ActiveRecord::Migration[6.0]
  def change
        add_index :travel_centers, :name
  end
end
