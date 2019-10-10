class LocationsController < ApplicationController
    def show
        @location  = Location.eager_load([:coffee_shops, :restaurants, :travel_centers]).find_by(url_key: params[:id])
        render :show
    end
end