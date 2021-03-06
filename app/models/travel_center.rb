#A travel center is a big store attached to a gasoline station, such as a Love's,
#a Pilot, or a Flying J. Usually will have a wide variety of adveturing gear, coffee,
#and souvenirs. 

class TravelCenter < ApplicationRecord
    attr_accessor :address
    validates :name, :description, presence: true
    validates :unleaded, presence:true, numericality: {only_float: true}
    validates :diesel, presence:true, numericality: {only_float: true}
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
    
    #TODO: Make this function available to all models somehow. Maybe add it to ApplicationRecord?
    def get_coords(address)
        coords = Geocoder.search(address)
        if coords.length === 0 
            coords = Geocoder.search(self.name)
        end
        debugger
        self.lat ||= coords.first.coordinates[0]
        self.lng ||= coords.first.coordinates[1]
    end

end
