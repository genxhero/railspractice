class CreateRecommendations < ActiveRecord::Migration[6.0]
  def change
    create_table :recommendations do |t|
      t.integer :user_id, null: false
      t.integer :place_id, null: false
      t.string :place_type, null: false
      t.text :message, null: true
      t.timestamps
    end
    add_index :recommendations, :user_id
    add_index :recommendations, :place_id
  end
end
