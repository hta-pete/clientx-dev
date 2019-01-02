class PagesController < ApplicationController

	before_action :authenticate!


	def index
		
	end

	def job_board

		@jobs = Job.order('created_at DESC')
		
	end

	def landing_pages
		
	end

	protected 

	def authenticate!

		if !user_signed_in?
			redirect_to new_user_session_path
		end

	end
	
end
