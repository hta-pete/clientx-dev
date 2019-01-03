class AddFieldsToJobs < ActiveRecord::Migration[5.2]
  def change
    add_column :jobs, :category, :string
    add_column :jobs, :referral, :string
  end
end
