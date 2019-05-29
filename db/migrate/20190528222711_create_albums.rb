class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.integer :artist_id, null: false
      t.integer :genre_id, null: false
      t.string :title, null: false
      t.string :cover_url
      t.text :copyright

      t.timestamps
    end
    add_index :albums, :artist_id
    add_index :albums, :genre_id
  end
end
