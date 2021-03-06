#This is a User. It uses things.

class User < ApplicationRecord
    attr_reader :password
    
    after_initialize :ensure_token
    before_save :assign_test_group
    
    validates :password, length: {minimum: 6, allow_nil: true  }
    validates :username, :email, :password_digest, :session_token, presence: true, uniqueness: true
    validate :password_content
    
    has_many :recommendations,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Recommendation"

    has_many :locations,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: "Location"

    has_many :places, through: :recommendations

    def password_content 
        if password
             self.errors.add(:password, " is not a valid password! Go stand in a corner!") if password.downcase == "password"
        end
    end
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def assign_test_group
        self.test_group ||= ["A", "B", "C"].sample
    end

    def reset_token
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.correct_password?(password) ? user : nil
    end

    def correct_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.shuffle_test_groups
        User.all.each do |user| 
            user.test_group = ["A", "B", "C"].sample
            user.save!
        end
    end

    def defaults
        self.first_name ||= "Anonymous"
        self.last_name ||= "McSomeguy"
    end
end
