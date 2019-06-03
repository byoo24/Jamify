# == Schema Information
#
# Table name: follower_playlists
#
#  id          :bigint           not null, primary key
#  follower_id :integer
#  playlist_id :integer
#

class FollowerPlaylist < ApplicationRecord
    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: :User

    belongs_to :playlist

end
