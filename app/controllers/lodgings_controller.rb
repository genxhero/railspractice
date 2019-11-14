# t.string :name, null: false
# t.text :description, null: true
# t.integer :location_id, null: false
# t.string :lodging_type, null: false
# t.string :breakfast, null: false
# t.boolean :pool, null: false
# t.boolean :gym, null: false
# t.string :channels, array: true, default: []
# t.string :wifi, null: false



class LodgingsController < ApplicationController
    skip_before_action :verify_authenticity_token
  
  
    def create
        @lodging = TravelCenter.new(lodging_params)
        if @lodging.save
          @location = Location.find(lodging_params[:location_id])
          render json: @lodging
          # render 'locations/show' 
        else
           render json: @lodging.errors.full_messages, status: 422
        end
    end

    private
    def lodging_params
        params.require(:lodging).permit(:location_id, :name, :description, :lodging_type, :breakfast, :pool, :gym, :channels, :wifi)
    end
end