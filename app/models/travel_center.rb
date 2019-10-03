class TravelCenter < ApplicationRecord
    validates :name, presence: true
    validates :location_id, presence: true
    # validate self.unique_per_location
    validates :name, uniqueness: { scope: :location_id,
    message: "record already exists for #{name} in #{:location.name}" }

    belongs_to :location,
    primary_key: :id, 
    foreign_key: :location_id,
    class_name: "Location"

    private 

    def unique_per_location
        if self.class.exists?(:location_id => location_id, :name => name)
            errors.add :travel_center, "#{name} already exists"
        end
    end
end
