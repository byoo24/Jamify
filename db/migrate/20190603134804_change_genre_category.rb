class ChangeGenreCategory < ActiveRecord::Migration[5.2]
  def change
    remove_column :genres, :category
    add_column :genres, :category, :string
  end
end
