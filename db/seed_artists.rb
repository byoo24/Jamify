genre_pop = Genre.where(category_name: "Pop").first
genre_hiphop = Genre.where(category_name: "Hip Hop").first
genre_rb = Genre.where(category_name: "R&B").first


# POP
# ====================================

bruno_mars = genre_pop.artists.create(name: "Bruno Mars")



bruno_mars_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Bruno+Mars/bruno_mars.jpeg')
bruno_mars_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Bruno+Mars/bruno_mars_cover.jpeg')

bruno_mars.artist_images.attach(io: bruno_mars_image, filename: 'bruno_mars.jpeg')
bruno_mars.artist_images.attach(io: bruno_mars_cover, filename: 'bruno_mars_cover.jpeg')
bruno_mars.save!

# ====================================

camila_cabello = genre_pop.artists.create(name: "Camila Cabello")

camila_cabello_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Camila+Cabello/camila_cabello.jpeg')
camila_cabello_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Camila+Cabello/camila_cabello_cover.jpeg')

camila_cabello.artist_images.attach(io: camila_cabello_image, filename: 'camila_cabello.jpeg')
camila_cabello.artist_images.attach(io: camila_cabello_cover, filename: 'camila_cabello_cover.jpeg')
camila_cabello.save!

# ====================================

ed_sheeran = genre_pop.artists.create(name: "Ed Sheeran")

ed_sheeran_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Ed+Sheeran/ed_sheeran.jpeg')
ed_sheeran_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Ed+Sheeran/ed_sheeran_cover.jpeg')

ed_sheeran.artist_images.attach(io: ed_sheeran_image, filename: 'ed_sheeran.jpeg')
ed_sheeran.artist_images.attach(io: ed_sheeran_cover, filename: 'ed_sheeran_cover.jpeg')
ed_sheeran.save!

# ====================================

justin_bieber = genre_pop.artists.create(name: "Justin Bieber")

justin_bieber_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Justin+Bieber/justin_bieber.jpeg')
justin_bieber_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Justin+Bieber/justin_bieber_cover.jpeg')

justin_bieber.artist_images.attach(io: justin_bieber_image, filename: 'justin_bieber.jpeg')
justin_bieber.artist_images.attach(io: justin_bieber_cover, filename: 'justin_bieber_cover.jpeg')
justin_bieber.save!

# ====================================

katy_perry = genre_pop.artists.create(name: "Katy Perry")

katy_perry_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Katy+Perry/katy_perry.jpeg')
katy_perry_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Katy+Perry/katy_perry_cover.jpeg')

katy_perry.artist_images.attach(io: katy_perry_image, filename: 'katy_perry.jpeg')
katy_perry.artist_images.attach(io: katy_perry_cover, filename: 'katy_perry_cover.jpeg')
katy_perry.save!

# ====================================

michael_jackson = genre_pop.artists.create(name: "Michael Jackson")

michael_jackson_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Michael+Jackson/michael_jackson.jpeg')
michael_jackson_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Michael+Jackson/michael_jackson_cover.jpeg')

michael_jackson.artist_images.attach(io: michael_jackson_image, filename: 'michael_jackson.jpeg')
michael_jackson.artist_images.attach(io: michael_jackson_cover, filename: 'michael_jackson_cover.jpeg')
michael_jackson.save!

# ====================================

taylor_swift = genre_pop.artists.create(name: "Taylor Swift")

taylor_swift_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Taylor+Swift/taylor_swift.jpeg')
taylor_swift_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Taylor+Swift/taylor_swift_cover.jpeg')

taylor_swift.artist_images.attach(io: taylor_swift_image, filename: 'taylor_swift.jpeg')
taylor_swift.artist_images.attach(io: taylor_swift_cover, filename: 'taylor_swift_cover.jpeg')
taylor_swift.save!

# ====================================


