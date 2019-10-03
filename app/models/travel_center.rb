class TravelCenter < ApplicationRecord
    validates :name, presence: true
    validates :name, uniqueness: { scope: :location,
    message: "record already exists for #{name} in #{:location.name}" }

    belongs_to :location,
    primary_key :id, 
    foreign_key :location_id,
    class_name "Location"
end
