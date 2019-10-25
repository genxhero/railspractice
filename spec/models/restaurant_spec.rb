require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

  it "is invalid if the same name has been used for the same location" do 
    dupe = Restaurant.new(name: "Bob's Burgers", location_id: 1, description: "this is a dupe")
    expect(dupe).to_not be_valid
end
end
