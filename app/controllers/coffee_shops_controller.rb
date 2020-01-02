class CoffeeShopsController < ApplicationController
    # Temporary until i figure out the rack cors problem
    skip_before_action :verify_authenticity_token
  
  
      def create
          @coffee_shop = CoffeeShop.new(coffee_shop_params)
          @coffee_shop.get_coords
          if @coffee_shop.save
            @location = Location.find(coffee_shop_params[:location_id])
            render json:  {
              fields: [
                  {name: "Wifi", value: @coffee_shop.wifi},
                  {name: "Restrooms", value: @coffee_shop.restrooms},
                  {name: "Couches", value: @coffee_shop.couches},
                  {name: "Armchairs", value: @coffee_shop.armchairs},
                  {name: "Variety", value: @coffee_shop.shop_type},
              ], 
              name: @coffee_shop.name,
              description: @coffee_shop.description,
              lat: @coffee_shop.lat,
              lng: @coffee_shop.lng
          } 
            # render 'locations/show' 
          else
             render json: @coffee_shop.errors.full_messages, status: 422
          end
      end
  
      private
      def coffee_shop_params
        params.require(:coffee_shop).permit(:location_id, :name, :description, :couches, :armchairs, :restrooms, :wifi, :shop_type, :address)
      end
  
    end