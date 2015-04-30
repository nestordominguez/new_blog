class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :commit

      t.timestamps null: false
    end
  end
end
