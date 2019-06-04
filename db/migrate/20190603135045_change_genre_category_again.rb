class ChangeGenreCategoryAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :genres, :category
    add_column :genres, :category_name, :string
  end
end
