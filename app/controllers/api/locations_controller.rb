class Api::LocationsController < ApplicationController
    def show
        @location  = Location.eager_load([:coffee_shops, :restaurants, :travel_centers]).find_by(url_key: params[:id])
        @user = current_user
        #render :show 
        #TODO json jbuilder.
        if @location 
            render json: { location: @location, places: @location.places, currentUser: @user }
        else
            render json: {status: "error", code: 4000, message: "Location #{params[:id]} didn't turn up any results."}
        end
    end
end