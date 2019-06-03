# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  genre_id   :integer          not null
#  bio        :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
    validates :name, :genre_id, presence: true

    belongs_to :genre

    has_many :albums
    has_many :songs,
        through: :albums,
        source: :songs

    has_many :featured_songs,
        foreign_key: :featured_id,
        class_name: :Song
end
