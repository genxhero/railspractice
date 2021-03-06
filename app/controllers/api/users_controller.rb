#For the creation of users and show page for users.

class Api::UsersController < ApplicationController

    def new
      @user = User.new
      render :new
    end
  
    def create
      @user = User.new(user_params)
      if @user.save
        login(@user)
        # render :show
        render json: @user
        #TOdo: find out if i can render "current page" from
      else
         render json: @user.errors.full_messages, status: 422
      end
    end
  
    def show
      @user = User.find(params[:id].to_i)
    end
  
  private
      def user_params
        params.require(:user).permit(:username, :email, :first_name, :last_name, :password, :confirm)
      end
  end