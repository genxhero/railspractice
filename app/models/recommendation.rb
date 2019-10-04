class Recommendation < ApplicationRecord
    validates :user_id, presence: true
    validates :place_id, presence: true
    validates :place_id, uniqueness: {scope: :user_id}

    belongs_to :place, polymorphic: true,
    primary_key: :id,
    foreign_key: :place_id

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

end
