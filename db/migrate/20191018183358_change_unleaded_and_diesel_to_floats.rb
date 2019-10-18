class ChangeUnleadedAndDieselToFloats < ActiveRecord::Migration[6.0]
  def change
    change_column :travel_centers, :unleaded, :float
    change_column :travel_centers, :diesel, :float
  end
end
