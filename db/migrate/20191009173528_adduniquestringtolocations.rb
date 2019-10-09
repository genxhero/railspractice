class Adduniquestringtolocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :url_key, :string, null: false
  end
end
