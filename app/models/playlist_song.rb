# == Schema Information
#
# Table name: playlist_songs
#
#  id          :bigint           not null, primary key
#  playlist_id :integer
#  song_id     :integer
#

class PlaylistSong < ApplicationRecord
    belongs_to :playlist
    belongs_to :song
end
