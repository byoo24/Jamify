# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  gender          :string
#  dob_month       :string
#  dob_day         :integer
#  dob_year        :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  country         :string
#  phone_number    :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
