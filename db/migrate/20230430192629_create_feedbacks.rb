class CreateFeedbacks < ActiveRecord::Migration[7.0]
  def change
    create_table :feedbacks do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :subject
      t.text :message

      t.timestamps
    end
  end
end
