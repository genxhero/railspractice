class LocationsController < ApplicationController
    def show
        @location  = Location.find_by(url_key: params[:id])
        render :show
    end
end