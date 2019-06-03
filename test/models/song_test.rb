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

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
