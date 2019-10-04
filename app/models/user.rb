class User < ApplicationRecord
    has_many :recommendations,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Recommendation"

    has_many :locations,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: "Location"
end
