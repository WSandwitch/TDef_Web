class User::Profile < ActiveRecord::Base
	belongs_to :user, touch: true
	has_one :image, as: :imageable, dependent: :destroy
	serialize :properties, JSON
	
	
	PROPERTIES=["name","surname","birthday"]
	SHORT_PROPERTIES=["name","surname"]
end
