class Location < ApplicationRecord
    validates :name, presence: true
    validates :state, presence: true
    validates :zip, presence: true
    validates :name, uniqueness:  { scope: :zip,
    message: "only one town exists by that name within #{zip}" }

    has_many :travel_centers, dependent: :destroy,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: "TravelCenter"
end
