# t.string :name, null: false
# t.integer :location_id, null: false
# t.string :description, null: false
# t.string :shop_type, null: false
# t.boolean :couches, null: false
# t.boolean :armchairs, null: false
# t.boolean :restrooms, null: false
# t.boolean :wifi, null: false
# t.timestamps

#A Coffee shop is defined as an establishment that largely serves coffee and pastries and not enough 
# Food options to qualify as a diner
class CoffeeShop < ApplicationRecord
    after_initialize :defaults

    validates :name, presence: true
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

    def defaults
        self.couches ||= false
        self.armchairs ||= false
        self.restrooms ||= false
        self.wifi ||= false
    end
end
