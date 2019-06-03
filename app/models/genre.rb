# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  category   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ApplicationRecord
    validates :category, presence: true

    has_many :songs

    has_many :artists
    has_many :albums,
        through: :artists,
        source: :albums
end
