
json.currentUser do
    json.extract! user, :id, :username, :email, :dob_month, :dob_day, :dob_year
    # json.favorite_benches user.favorite_benches.pluck(:id)
end

