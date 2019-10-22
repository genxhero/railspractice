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

    #TODO: Split into subroutines.
    def places     
        {
            "travelCenters": self.jsonify_travel_centers,
            "restaurants": self.jsonify_restaurants,
            "coffeeShops": self.jsonify_coffee_shops
        }
    end
 
    def jsonify_restaurants
       self.restaurants.map {|restaurant|
            {     
                fields: [
                    {name: "Cuisine", value: restaurant.cuisine},
                    {name: "Variety", value: restaurant.shop_type},
            
                ],
                name: restaurant.name,
                description: restaurant.description
            }
        }
    end

    def jsonify_coffee_shops
         self.coffee_shops.map { |shop| 
            {
                fields: [
                    {name: "Wifi", value: shop.wifi},
                    {name: "Restrooms", value: shop.restrooms},
                    {name: "Couches", value: shop.couches},
                    {name: "Armchairs", value: shop.armchairs},
                    {name: "Variety", value: shop.shop_type},
                ], 
                name: shop.name,
                description: shop.description
            } 
        }
        coffee_shops
    end

    def jsonify_travel_centers
        self.travel_centers.map {|tc| 
        {
            fields: [
                {name: "Unleaded", value: "$#{tc.unleaded}#{(tc.unleaded * 100) % 10 == 0 ? "0" : ""}"},
                {name: "Diesel", value: "$#{tc.diesel}#{(tc.diesel * 100) % 10 == 0 ? "0" : ""}"}
            ],
            name: tc.name,
            description: tc.description
        }
      }
    end

end
