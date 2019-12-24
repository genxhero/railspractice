class Addaddresscolumntotravelcenters < ActiveRecord::Migration[6.0]
  def change
    add_column :travel_centers, :lat, :float
    add_column :travel_centers, :lng, :float
    add_column :restaurants, :lat, :float
    add_column :restaurants, :lng, :float
    add_column :lodgings, :lat, :float
    add_column :lodgings, :lng, :float
    add_column :coffee_shops, :lat, :float
    add_column :coffee_shops, :lng, :float
  end
end
