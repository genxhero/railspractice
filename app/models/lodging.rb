# t.string :name, null: false
# t.text :description, null: true
# t.integer :location_id, null: false
# t.string :lodging_type, null: false
# t.string :breakfast, null: false
# t.boolean :pool, null: false
# t.boolean :gym, null: false
# t.string :channels, array: true, default: []
# t.string :wifi, null: false

class Lodging < ApplicationRecord
end