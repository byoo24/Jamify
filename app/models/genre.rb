# == Schema Information
#
# Table name: genres
#
#  id            :bigint           not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  category_name :string
#

class Genre < ApplicationRecord
    validates :category_name, presence: true

    has_many :songs

    has_many :artists
    has_many :albums,
        through: :artists,
        source: :albums


    # has_one_attached :genre_cover
end
