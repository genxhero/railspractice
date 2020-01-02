# t.string :name, null: false
# t.integer :location_id, null: false
# t.string :cuisine, null: false
# t.text :description, null: true
# t.string :shop_type, null: false
# t.timestamps

#A restaurant is what you would expect, an establishment meant primarily for eating at.
# A subset of restaurant is the diner, which I may implement later.


class Restaurant < ApplicationRecord
    attr_accessor :address
    validates :name, :cuisine, :shop_type, presence: true
    validates :location_id, presence: true
    validates :name, uniqueness: { scope: :location_id,
    message: "record already exists " }

    belongs_to :location,
    primary_key: :id, 
    foreign_key: :location_id,
    class_name: "Location"

    has_many :recommendations, as: :place, dependent: :destroy,
    primary_key: :id,
    foreign_key: :place_id,
    class_name: "Recommendation"

    has_many :users, through: :recommendations

    #TODO: Make this function available to all models somehow. Maybe add it to ApplicationRecord?
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
