require "rails_helper" 

describe TravelCenter do 
    it "is invalid if given no name" do 
        no_name = TravelCenter.new(name: nil, location_id: 1, description: "Nondescript")
        expect(no_name).to_not be_valid 
    end

    it "is invalid if not given a location id" do 
        nowhere = TravelCenter.new(name: "Nowhere", location_id: nil, description: "Nondescript")
        expect(nowhere).to_not be_valid 
    end
end