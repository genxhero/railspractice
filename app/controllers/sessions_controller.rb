#Controls the session, used for logging in and out.

class SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
          params[:user][:email],
          params[:user][:password]
        )
        if @user
          login(@user)
          render json: @user
          # debugger
          # redirect_to params[:url]
        else
         render json: ["Invalid Credentials"], status: 422
        end
    end

    def destroy
        logout
        render json: {}
      end
      
end