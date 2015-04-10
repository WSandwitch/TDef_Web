class RegistrationsController < Devise::RegistrationsController
	
	private
	def sign_up_params
		params.require(:user).permit(:name, :email, :password, :password_confirmation,:current_password, :locale, :time_zone)
	end

	def account_update_params
		params.require(:user).permit(:name, :email, :password, :password_confirmation,:current_password, :locale, :time_zone)
	end
=begin
	def create
        if verify_recaptcha
          super
        else
          build_resource(sign_up_params)
          clean_up_passwords(resource)
          flash.now[:alert] = "There was an error with the recaptcha code below. Please re-enter the code."      
          flash.delete :recaptcha_error
          render :new
        end
      end
=end
end