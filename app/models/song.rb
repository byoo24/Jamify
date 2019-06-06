# == Schema Information
#
# Table name: songs
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  album_id     :integer          not null
#  featured_id  :integer
#  genre_id     :integer          not null
#  performed_by :string
#  written_by   :string
#  produced_by  :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Song < ApplicationRecord
    validates :title, :album_id, :genre_id, presence: true

    belongs_to :genre

    belongs_to :album
    has_one :artist,
        through: :album,
        source: :artist

    belongs_to :featured_artist,
        foreign_key: :featured_id,
        class_name: :Artist,
        optional: true

    has_many :playlist_songs
    has_many :playlists,
        through: :playlist_songs,
        source: :playlist

    has_one_attached :audio_file
end
