class LocationsController < ApplicationController
    def show
        ass = "balls"
        debugger
        @location  = Location.find_by(url_key, params[:id])
        render :show
    end
end