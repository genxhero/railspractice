#Controller for the travel center, when a tc is created it re renders the parent location


class TravelCentersController < ApplicationController
  # Temporary until i figure out the rack cors problem
  skip_before_action :verify_authenticity_token

    # def new
    #     @travel_center = TravelCenter.new
    #     render :new 
    # end

    def create
        @travel_center = TravelCenter.new(travel_center_params)
        if @travel_center.save
          @location = Location.find(travel_center_params[:location_id])
          render json:   {
            fields: [
                {name: "Unleaded", value: "$#{@travel_center.unleaded}#{(@travel_center.unleaded * 100) % 10 == 0 ? "0" : ""}"},
                {name: "Diesel", value: "$#{@travel_center.diesel}#{(@travel_center.diesel * 100) % 10 == 0 ? "0" : ""}"}
            ],
            name: @travel_center.name,
            description: @travel_center.description,
            lat: @travel_center.lat,
            lng: @travel_center.lng
        }
          # render 'locations/show' 
        else
           render json: @travel_center.errors.full_messages, status: 422
        end
    end

    private
    def travel_center_params
      params.require(:travel_center).permit(:location_id, :name, :description, :unleaded, :diesel)
    end

  end