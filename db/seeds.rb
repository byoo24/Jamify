# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

Genre.destroy_all

pop = Genre.create!(category_name: "Pop")
rb = Genre.create(category_name: "R&B")
hiphop = Genre.create(category_name: "Hip Hop")


pop_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/pop.jpg')
pop.genre_cover.attach(io: pop_cover, filename:'pop.jpg')
pop.save!

rb_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/r%26b.jpg')
rb.genre_cover.attach(io: rb_cover, filename:'r%26b.jpg')
rb.save!

hiphop_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/hip_hop.jpg')
hiphop.genre_cover.attach(io: hiphop_cover, filename:'hip_hop.jpg')
hiphop.save!


