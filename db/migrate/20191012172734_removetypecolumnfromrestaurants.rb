class Removetypecolumnfromrestaurants < ActiveRecord::Migration[6.0]
  def change
    remove_column :restaurants, :type
    add_column :restaurants, :shop_type, :string, default: 'Unspecified'
  end
end
