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

    has_many :coffee_shops, dependent: :destroy,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: "CoffeeShop"


    has_many :restaurants, dependent: :destroy,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: "Restaurant"

    
    belongs_to :user, 
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

    def set_url_key
        self.url_key = "#{self.name}#{self.state}".downcase.gsub(" ", "")
    end

    #TODO: Deprecate this function, eager load all three at the controller level
    def places
        coffee_shops = self.coffee_shops.map { |shop| 
        {
            fields: [
            {name: "Name", value: shop.name}, 
            {name: "Description", value: shop.description}, 
            {name: "Wifi", value: shop.wifi},
            {name: "Restrooms", value: shop.restrooms},
            {name: "Couches", value: shop.couches},
            {name: "Armchairs", value: shop.armchairs},
            {name: "Variety", value: shop.shop_type},

            ], 
            name: shop.name
        } 
    }
        
        {
            "travelCenters": self.travel_centers,
            "restaurants": self.restaurants,
            "coffeeShops": coffee_shops
        }
    end

    # #travelCenter {
    #     props: [
    #   {
    #     name: name
    #     value: value
    #     }
    #]
    # }
end
