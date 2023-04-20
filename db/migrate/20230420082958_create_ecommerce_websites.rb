class CreateEcommerceWebsites < ActiveRecord::Migration[7.0]
  def change
    create_table :ecommerce_websites do |t|
      t.string :name
      t.string :url
      t.string :access_token

      t.timestamps
    end
  end
end
