class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.references :product, null: false, foreign_key: true
      t.references :ecommerce_websites, null: false, foreign_key: true
      t.decimal :rating

      t.timestamps
    end
  end
end
