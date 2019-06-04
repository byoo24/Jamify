# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  artist_id  :integer          not null
#  title      :string           not null
#  cover_url  :string
#  copyright  :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
    validates :artist_id, :title, presence: true

    belongs_to :artist

    has_one :genre,
        through: :artist,
        source: :genre

    has_many :songs

    has_one_attached :cover_img
end
