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
    validates :name, presence: true
    validates :location_id, presence: true
    validates :name, uniqueness: { scope: :location_id,
    message: " already exists for this location" }

    belongs_to :location,
    primary_key: :id, 
    foreign_key: :location_id,
    class_name: "Location"

    has_many :recommendations, as: :place, dependent: :destroy,
    primary_key: :id,
    foreign_key: :place_id,
    class_name: "Recommendation"

    has_many :users, through: :recommendations

    def get_coords(address)
        coords = Geocoder.search(address)
        location = self.location
        if coords.length === 0 
            coords = Geocoder.search(self.name)
        end
        debugger
        self.lat ||= coords.first.coordinates[0]
        self.lng ||= coords.first.coordinates[1]
    end
end