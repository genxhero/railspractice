class TravelCentersController < ApplicationController
  skip_before_filter :verify_authenticity_token

    # def new
    #     @travel_center = TravelCenter.new
    #     render :new 
    # end

    def create
      buffer = "bugger"
      debugger
        @travel_center = TravelCenter.new(travel_center_params)
        if @travel_center.save
          @location = Location.find(travel_center_params[:location_id])
          render 'locations/show' 
        else
           render json: @travel_center.errors.full_messages, status: 422
        end
    end

    private
    def travel_center_params
      ass = "butt"
      debugger
      params.require(:travel_center).permit(:location_id, :name, :description, :unleaded, :diesel)
    end

  end