class RemovePublicFromPlaylists < ActiveRecord::Migration[5.2]
  def change
    remove_column :playlists, :public
  end
end
