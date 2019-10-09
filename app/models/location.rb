# Location refers to a town, hamlet, or outpost somewhere close to a major highway.


class Location < ApplicationRecord
    before_validation :set_url_key

    validates :name, presence: true
    validates :state, presence: true
    validates :zip, presence: true
    validates :name, uniqueness:  { scope: :zip,
    message: "only one town exists by that name within #{:zip}" }

    has_many :travel_centers, dependent: :destroy,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: "TravelCenter"
    
    belongs_to :user, 
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

    def set_url_key
        self.url_key = "#{self.name}#{self.state}".downcase.gsub(" ", "")
    end
end
