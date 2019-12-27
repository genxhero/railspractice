class RestaurantsController < ApplicationController
    # Temporary until i figure out the rack cors problem
    skip_before_action :verify_authenticity_token
  
  
      def create
          @restaurant = Restaurant.new(restaurant_params)
          if @restaurant.save
            @location = Location.find(restaurant_params[:location_id])
            render json:  {     
              fields: [
                  {name: "Cuisine", value: @restaurant.cuisine},
                  {name: "Variety", value: @restaurant.shop_type},
          
              ],
              name: @restaurant.name,
              description: @restaurant.description,
              lat: @restaurant.lat,
              lng: @restaurant.lng
          }
            # render 'locations/show' 
          else
             render json: @restaurant.errors.full_messages, status: 422
          end
      end
  
      private
      def restaurant_params
        params.require(:restaurant).permit(:location_id, :name, :description, :cuisine, :shop_type)
      end
  
    end