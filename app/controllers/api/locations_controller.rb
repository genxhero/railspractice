class Api::LocationsController < ApplicationController
    def show
        @location  = Location.eager_load([:coffee_shops, :restaurants, :travel_centers]).find_by(url_key: params[:id])
        @user = current_user
        #render :show 
        #TODO json jbuilder.
        if @location 
            render json: { location: @location, places: @location.places, currentUser: @user }
        else
            render json: @location.errors.full_messages
        end
    end
end