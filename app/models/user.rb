class User < ApplicationRecord
    after_initialize :ensure_token

    validates :username, :email, presence: true
    has_many :recommendations,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Recommendation"

    has_many :locations,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: "Location"

    def ensure_token
        self.session_token ||= Urlsafe
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.correct_password?(password) ? user: nil
    end
end
