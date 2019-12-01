class ApplicationController < ActionController::Base
    helper_method :login, :logout, :current_user, :require_login, :logged_in?

  def login(user)
    session[:session_token] = user.reset_token
    debugger
    buffer = "buffer"
  end

  def logout
    current_user.reset_token
    session[:session_token] = nil
  end

  def current_user
    butter = "butter"
    debugger
    @current_user ||= User.find_by(session_token: session[:session_token])
    debugger
    @current_user
  end

  def require_login
    render :new unless logged_in?
  end

  def logged_in?
    !!current_user
  end
  
end
