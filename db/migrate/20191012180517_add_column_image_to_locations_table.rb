class AddColumnImageToLocationsTable < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :image_url, :string
  end
end
