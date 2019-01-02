class JobsController < ApplicationController

	def new
		@job = current_user.jobs.build
	end

	def create
		@job = current_user.jobs.build(job_params)
		if @job.save
			redirect_to job_board_path
		else
			render 'new'
		end
	end

	private

	def job_params

		params.require(:job).permit(:title, :description, :location, :phone)

	end

end
