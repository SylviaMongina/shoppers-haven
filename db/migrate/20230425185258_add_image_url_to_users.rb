class AddImageUrlToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :Image_url, :string
  end
end
