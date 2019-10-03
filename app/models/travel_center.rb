class TravelCenter < ApplicationRecord
    validates :name, presence: true
    validates :location_id, presence: true
    validates :name, uniqueness: { scope: :location_id,
    message: "record already exists " }

    belongs_to :location,
    primary_key: :id, 
    foreign_key: :location_id,
    class_name: "Location"

    has_many :recommendations as :place,
    primary_key: :id,
    foreign_key: :place_id,
    class_name: "Recommendation"

end
