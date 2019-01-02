class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :title
      t.text :description
      t.string :phone
      t.string :location

      t.timestamps
    end
  end
end
