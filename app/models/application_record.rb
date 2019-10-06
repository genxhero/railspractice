class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  helper_methods :default_type

  def default_type 
    @type ||= "Unspecified"
  end
  
end
