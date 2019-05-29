# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  artist_id  :integer          not null
#  genre_id   :integer          not null
#  title      :string           not null
#  cover_url  :string
#  copyright  :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
    validates :artist_id, :genre_id, :title, presence: true

    belongs_to :artist
    belongs_to :genre

    has_many :songs
    
    
end
