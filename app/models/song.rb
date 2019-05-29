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
#  artist_id    :integer          not null
#

class Song < ApplicationRecord
    validates :title, :album_id, :artist_id, :genre_id, presence: true

    belongs_to :album
    belongs_to :artist

    belongs_to :featured_artist,
        foreign_key: :featured_id,
        class_name: :Artist

    belongs_to :genre
end
