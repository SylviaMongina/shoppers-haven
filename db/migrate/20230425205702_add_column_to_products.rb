class AddColumnToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :Image_url, :string
  end
end
