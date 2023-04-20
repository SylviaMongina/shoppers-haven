class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.decimal :rating
      t.decimal :delivery_cost
      t.string :mode
      t.references :ecommerce_website, null: false, foreign_key: true

      t.timestamps
    end
  end
end
