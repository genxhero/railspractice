class AddDesiredZoomColumnToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :zoom, :integer
  end
end
#TODO add default value of 11