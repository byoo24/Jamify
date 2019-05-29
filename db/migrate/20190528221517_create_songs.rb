class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :album_id, null: false
      t.integer :author_id, null: false
      t.integer :featured_id
      t.integer :genre_id, null: false
      t.string :performed_by
      t.string :written_by
      t.string :produced_by

      t.timestamps
    end
    add_index :songs, :album_id
    add_index :songs, :author_id
    add_index :songs, :genre_id
  end
end
