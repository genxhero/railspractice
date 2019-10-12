class Removetypecolumnfromcoffeeshops < ActiveRecord::Migration[6.0]
  def change
    remove_column :coffee_shops, :type
    add_column :coffee_shops, :shop_type, :string, default: 'Unspecified'
  end
end
