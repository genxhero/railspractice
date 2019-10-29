#A travel center is a big store attached to a gasoline station, such as a Love's,
#a Pilot, or a Flying J. Usually will have a wide variety of adveturing gear, coffee,
#and souvenirs. 

class TravelCenter < ApplicationRecord
    validates :name, :description, presence: true
    validates :unleaded, presence:true, numericality: {only_float: true}
    validates :diesel, presence:true, numericality: {only_float: true}
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

end
