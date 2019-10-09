#This is a User. It uses things.

class User < ApplicationRecord
    attr_reader :password
    
    after_initialize :ensure_token
    
    validates :password, length: {minimum: 6, allow_nil: true  }
    validates :username, :email, :password_digest, :session_token, presence: true, uniqueness: true
    
    has_many :recommendations,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Recommendation"

    has_many :locations,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: "Location"

    has_many :places, through: :recommendations

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_token
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.correct_password?(password) ? user: nil
    end

    def correct_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
end
