class CreateFollowerPlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :follower_playlists do |t|
      t.integer :follower_id
      t.integer :playlist_id
    end
    add_index :follower_playlists, :follower_id
    add_index :follower_playlists, :playlist_id
  end
end
