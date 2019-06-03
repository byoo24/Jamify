class UpdateTables < ActiveRecord::Migration[5.2]
  def change
    remove_index :albums, :genre_id
    remove_column :albums, :genre_id
    
    remove_index :songs, :artist_id
    remove_column :songs, :artist_id

    add_column :users, :country, :string
    add_column :users, :phone_number, :string
  end
end
