class CreateMaps < ActiveRecord::Migration
  def change
    create_table :maps do |t|
      t.string :name
      t.text :data
      t.text :grafics
      t.integer :players

      t.timestamps
    end
  end
end
