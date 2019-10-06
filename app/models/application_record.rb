class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  helper_methods :defaults

  def defaults
    default_type
  end
    private 
  def default_type 
    @type ||= "Unspecified"
  end

end
