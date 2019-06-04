Artist.destroy_all


genre_pop_id = Genre.where(category_name: "Pop")
genre_hiphop_id = Genre.where(category_name: "Hip Hop")
genre_rb_id = Genre.where(category_name: "R&B")


# POP

brunoMars = Artist.create(
    name: "Bruno Mars",
    genre_id: genre_pop_id
)


camilaCabello = Artist.create(
    name: "Camila Cabello",
    genre_id: genre_pop_id
)


edSheeran = Artist.create(
    name: "Ed Sheeran",
    genre_id: genre_pop_id
)


justinBieber = Artist.create(
    name: "Justin Bieber",
    genre_id: genre_pop_id
)


michaelJackson = Artist.create(
    name: "Michael Jackson",
    genre_id: genre_pop_id
)


taylorSwift = Artist.create(
    name: "Taylor Swift",
    genre_id: genre_pop_id
)


brunoMars_thumb = open('https://jamify-data.s3.amazonaws.com/artist_images/Bruno+Mars/bruno_mars.jpeg')
brunoMars..attach(io: brunoMars_cover, filename:'genre_brunoMars.jpg')
brunoMars_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Bruno+Mars/bruno_mars_cover.jpeg')
brunoMars.genre_cover.attach(io: brunoMars_cover, filename:'genre_brunoMars.jpg')

rb_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/r%26b.jpg')
rb.genre_cover.attach(io: rb_cover, filename:'genre_rb.jpg')

hiphop_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/hip_hop.jpg')
hiphop.genre_cover.attach(io: hiphop_cover, filename:'genre_hiphop.jpg')
