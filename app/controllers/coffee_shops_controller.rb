class CoffeeShopsController < ApplicationController
    # Temporary until i figure out the rack cors problem
    skip_before_action :verify_authenticity_token
  
  
      def create
          @coffee_shop = TravelCenter.new(coffee_shop_params)
          if @coffee_shop.save
            @location = Location.find(coffee_shop_params[:location_id])
            render json: @coffee_shop
            # render 'locations/show' 
          else
             render json: @coffee_shop.errors.full_messages, status: 422
          end
      end
  
      private
      def coffee_shop_params
        params.require(:coffee_shop).permit(:location_id, :name, :description, :couches, :armchairs, :restrooms, :wifi, :shop_type)
      end
  
    end