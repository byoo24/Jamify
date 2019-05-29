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

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
