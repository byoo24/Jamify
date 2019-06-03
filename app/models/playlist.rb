# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
    validates :name, :author_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :follower_playlists
    has_many :followers,
        through: :follower_playlists,
        source: :follower

    has_many :playlist_songs
    has_many :songs,
        through: :playlist_songs,
        source: :song

end
