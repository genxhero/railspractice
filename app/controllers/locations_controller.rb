class LocationsController < ApplicationController
    def show
        ass = "balls"
        debugger
        @location  = Location.find(params[:id])
        render :show
    end
end