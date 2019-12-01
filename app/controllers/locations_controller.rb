class LocationsController < ApplicationController
    def show
        @location  = Location.eager_load([:coffee_shops, :restaurants, :travel_centers]).find_by(url_key: params[:id])
        @user = current_user
        debugger
        render :show
    end
end