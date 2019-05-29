class ChangeSongs < ActiveRecord::Migration[5.2]
  def change
    remove_index :songs, :author_id
    remove_column :songs, :author_id
    add_column :songs, :artist_id, :integer, null: false
    add_index :songs, :artist_id
  end
end
