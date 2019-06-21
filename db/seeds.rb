# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

# Genre.destroy_all
# Artist.destroy_all
# Album.destroy_all
# Song.destroy_all




# pop = Genre.create(category_name: "Pop")
# rb = Genre.create(category_name: "R&B")
# hiphop = Genre.create(category_name: "Hip Hop")


# pop_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/pop.jpg')
# pop.genre_cover.attach(io: pop_cover, filename:'genre_pop.jpg')

# rb_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/r%26b.jpg')
# rb.genre_cover.attach(io: rb_cover, filename:'genre_rb.jpg')

# hiphop_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/hip_hop.jpg')
# hiphop.genre_cover.attach(io: hiphop_cover, filename:'genre_hiphop.jpg')







# genre_pop = Genre.where(category_name: "Pop").first
# genre_hiphop = Genre.where(category_name: "Hip Hop").first
# genre_rb = Genre.where(category_name: "R&B").first


# ARTIST
# ====================================

# bruno_mars = genre_pop.artists.create(name: "Bruno Mars")

# bruno_mars_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Bruno+Mars/bruno_mars.jpeg')
# bruno_mars_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Bruno+Mars/bruno_mars_cover.jpeg')

# bruno_mars.artist_images.attach(io: bruno_mars_image, filename: 'bruno_mars.jpeg')
# bruno_mars.artist_images.attach(io: bruno_mars_cover, filename: 'bruno_mars_cover.jpeg')
# bruno_mars.save!

# ====================================

# camila_cabello = genre_pop.artists.create(name: "Camila Cabello")

# camila_cabello_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Camila+Cabello/camila_cabello.jpeg')
# camila_cabello_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Camila+Cabello/camila_cabello_cover.jpeg')

# camila_cabello.artist_images.attach(io: camila_cabello_image, filename: 'camila_cabello.jpeg')
# camila_cabello.artist_images.attach(io: camila_cabello_cover, filename: 'camila_cabello_cover.jpeg')
# camila_cabello.save!

# ====================================

# ed_sheeran = genre_pop.artists.create(name: "Ed Sheeran")

# ed_sheeran_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Ed+Sheeran/ed_sheeran.jpeg')
# ed_sheeran_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Ed+Sheeran/ed_sheeran_cover.jpeg')

# ed_sheeran.artist_images.attach(io: ed_sheeran_image, filename: 'ed_sheeran.jpeg')
# ed_sheeran.artist_images.attach(io: ed_sheeran_cover, filename: 'ed_sheeran_cover.jpeg')
# ed_sheeran.save!

# ====================================

# justin_bieber = genre_pop.artists.create(name: "Justin Bieber")

# justin_bieber_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Justin+Bieber/justin_bieber.jpeg')
# justin_bieber_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Justin+Bieber/justin_bieber_cover.jpeg')

# justin_bieber.artist_images.attach(io: justin_bieber_image, filename: 'justin_bieber.jpeg')
# justin_bieber.artist_images.attach(io: justin_bieber_cover, filename: 'justin_bieber_cover.jpeg')
# justin_bieber.save!

# ====================================

# katy_perry = genre_pop.artists.create(name: "Katy Perry")

# katy_perry_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Katy+Perry/katy_perry.jpeg')
# katy_perry_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Katy+Perry/katy_perry_cover.jpeg')

# katy_perry.artist_images.attach(io: katy_perry_image, filename: 'katy_perry.jpeg')
# katy_perry.artist_images.attach(io: katy_perry_cover, filename: 'katy_perry_cover.jpeg')
# katy_perry.save!

# ====================================

# michael_jackson = genre_pop.artists.create(name: "Michael Jackson")

# michael_jackson_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Michael+Jackson/michael_jackson.jpeg')
# michael_jackson_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Michael+Jackson/michael_jackson_cover.jpeg')

# michael_jackson.artist_images.attach(io: michael_jackson_image, filename: 'michael_jackson.jpeg')
# michael_jackson.artist_images.attach(io: michael_jackson_cover, filename: 'michael_jackson_cover.jpeg')
# michael_jackson.save!

# ====================================

# taylor_swift = genre_pop.artists.create(name: "Taylor Swift")

# taylor_swift_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Taylor+Swift/taylor_swift.jpeg')
# taylor_swift_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Taylor+Swift/taylor_swift_cover.jpeg')

# taylor_swift.artist_images.attach(io: taylor_swift_image, filename: 'taylor_swift.jpeg')
# taylor_swift.artist_images.attach(io: taylor_swift_cover, filename: 'taylor_swift_cover.jpeg')
# taylor_swift.save!

# ====================================


































# ALBUM
# ====================================


# bruno_mars = Artist.find_by(name: "Bruno Mars")

# magic24k = bruno_mars.albums.create(title: "24K Magic")

# magic24k_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Bruno+Mars/24k_magic.jpeg')
# magic24k.cover_image.attach(io: magic24k_cover,filename: '24k_magic.jpeg')
# magic24k.save!


# jukebox = bruno_mars.albums.create(title: "Unorthodox Jukebox")

# jukebox_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Bruno+Mars/unorthodox_jukebox.jpeg')
# jukebox.cover_image.attach(io: jukebox_cover, filename: "unorthodox_jukebox.jpeg")
# jukebox.save!


# ====================================




camila_cabello = Artist.find_by(name: "Camila Cabello")

camila = camila_cabello.albums.create(title: "Camila")

camila_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Camila+Cabello/camila.jpeg')
camila.cover_image.attach(io: camila_cover, filename: 'camila.jpeg')
camila.save!







ed_sheeran = Artist.find_by(name: "Ed Sheeran")

deluxe = ed_sheeran.albums.create(title: "Deluxe")

deluxe_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Ed+Sheeran/divide.jpeg')
deluxe.cover_image.attach(io: deluxe_cover, filename: 'deluxe.jpeg')
deluxe.save!


plus = ed_sheeran.albums.create(title: "Plus")

plus_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Ed+Sheeran/plus_album.jpeg')
plus.cover_image.attach(io: plus_cover, filename: 'plus.jpeg')
plus.save!



x = ed_sheeran.albums.create(title: "X")

x_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Ed+Sheeran/x_album.jpeg')
x.cover_image.attach(io: x_cover, filename: 'x.jpeg')
x.save!






justin_bieber = Artist.find_by(name: "Justin Bieber")

believe = justin_bieber.albums.create(title: "Believe")

believe_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Justin+Bieber/believe.jpeg')
believe.cover_image.attach(io: believe_cover, filename: 'believe.jpeg')
believe.save!


love_yourself = justin_bieber.albums.create(title: "Love Yourself")

love_yourself_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Justin+Bieber/lover_yourself.jpeg')
love_yourself.cover_image.attach(io: love_yourself_cover, filename: 'love_yourself.jpeg')
love_yourself.save!



purpose = justin_bieber.albums.create(title: "Purpose")

purpose_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Justin+Bieber/purpose.jpeg')
purpose.cover_image.attach(io: purpose_cover, filename: 'purpose.jpeg')
purpose.save!










# ARTIST: BRUNO MARS
# ALBUM: 24K MAGIC
# =============================
# magic = Album.find_by(title: "24K Magic")

# bruno1 = magic.songs.create(
#     title: "Marshmallows (Clean) (Short Edit)",
#     genre_id: magic.genre.id
# )

# bruno1_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Furlan+%26+Kyle+Watson+-+Marshmallows+(Clean)+(Short+Edit).mp3')
# bruno1.audio_file.attach(io: bruno1_url, filename:'magic_bruno1.mp3')
# bruno1.save!


# bruno2 = magic.songs.create(
#     title: "24K Magic (Dirty)",
#     genre_id: magic.genre.id
# )

# bruno2_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+24K+Magic+(Dirty).mp3')
# bruno2.audio_file.attach(io: bruno2_url, filename:'magic_bruno2.mp3')
# bruno2.save!



# bruno3 = magic.songs.create(
#     title: "Chunky (Dirty)",
#     genre_id: magic.genre.id
# )

# bruno3_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+Chunky+(Dirty).mp3')
# bruno3.audio_file.attach(io: bruno3_url, filename:'magic_bruno3.mp3')
# bruno3.save!



# bruno4 = magic.songs.create(
#     title: "Finesse (Dirty)",
#     genre_id: magic.genre.id
# )

# bruno4_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+Finesse+(Dirty).mp3')
# bruno4.audio_file.attach(io: bruno4_url, filename:'magic_bruno4.mp3')
# bruno4.save!



# bruno5 = magic.songs.create(
#     title: "Perm (Clean)",
#     genre_id: magic.genre.id
# )

# bruno5_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+Perm+(Clean).mp3')
# bruno5.audio_file.attach(io: bruno5_url, filename:'magic_bruno5.mp3')
# bruno5.save!



# bruno6 = magic.songs.create(
#     title: "Straight Up & Down (Clean)",
#     genre_id: magic.genre.id
# )

# bruno6_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+Straight+Up+%26+Down+(Clean).mp3')
# bruno6.audio_file.attach(io: bruno6_url, filename:'magic_bruno6.mp3')
# bruno6.save!



# bruno7 = magic.songs.create(
#     title: "That's What I Like (Dirty)",
#     genre_id: magic.genre.id
# )

# bruno7_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+That's+What+I+Like+(Dirty).mp3")
# bruno7.audio_file.attach(io: bruno7_url, filename:'magic_bruno7.mp3')
# bruno7.save!


# bruno8 = magic.songs.create(
#     title: "Versace On The Floor (Clean)",
#     genre_id: magic.genre.id
# )

# bruno8_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+Versace+On+The+Floor+(Clean).mp3")
# bruno8.audio_file.attach(io: bruno8_url, filename:'magic_bruno8.mp3')
# bruno8.save!


# bruno9 = magic.songs.create(
#     title: "Please Me (Dirty)",
#     genre_id: magic.genre.id
# )

# bruno9_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Cardi+B+%26+Bruno+Mars+-+Please+Me+(Dirty).mp3")
# bruno9.audio_file.attach(io: bruno9_url, filename:'magic_bruno9.mp3')
# bruno9.save!







# ARTIST: BRUNO MARS
# ALBUM: Unorthodox Jukebox
# =============================
# jukebox = Album.find_by(title: "Unorthodox Jukebox")

# bruno10 = jukebox.songs.create(
#     title: "Nothin' On You (Clean)",
#     genre_id: jukebox.genre.id
# )

# bruno10_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/Unorthodox+Jukebox/B.O.B+ft+Bruno+Mars+-+Nothin'+On+You+(Clean).mp3")
# bruno10.audio_file.attach(io: bruno10_url, filename:'jukebox_bruno10.mp3')
# bruno10.save!



# bruno11 = jukebox.songs.create(
#     title: "Locked Out Of Heaven (Clean)",
#     genre_id: jukebox.genre.id
# )

# bruno11_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/Unorthodox+Jukebox/Bruno+Mars+-+Locked+Out+Of+Heaven+(Clean).mp3")
# bruno11.audio_file.attach(io: bruno11_url, filename:'jukebox_bruno11.mp3')
# bruno11.save!




# bruno12 = jukebox.songs.create(
#     title: "Marry You (Clean)",
#     genre_id: jukebox.genre.id
# )

# bruno12_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/Unorthodox+Jukebox/Bruno+Mars+-+Marry+You+(Clean).mp3")
# bruno12.audio_file.attach(io: bruno12_url, filename:'jukebox_bruno12.mp3')
# bruno12.save!



# bruno13 = jukebox.songs.create(
#     title: "Moonshine (Main)",
#     genre_id: jukebox.genre.id
# )

# bruno13_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/Unorthodox+Jukebox/Bruno+Mars+-+Moonshine+(Main).mp3")
# bruno13.audio_file.attach(io: bruno13_url, filename:'jukebox_bruno13.mp3')
# bruno13.save!



# bruno14 = jukebox.songs.create(
#     title: "Rest For The Rest Of My Life (Clean)",
#     genre_id: jukebox.genre.id
# )

# bruno14_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/Unorthodox+Jukebox/Bruno+Mars+-+Rest+For+The+Rest+Of+My+Life+(Clean).mp3")
# bruno14.audio_file.attach(io: bruno14_url, filename:'jukebox_bruno14.mp3')
# bruno14.save!



# bruno15 = jukebox.songs.create(
#     title: "Runaway Baby (Clean)",
#     genre_id: jukebox.genre.id
# )

# bruno15_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/Unorthodox+Jukebox/Bruno+Mars+-+Runaway+Baby+(Clean).mp3")
# bruno15.audio_file.attach(io: bruno15_url, filename:'jukebox_bruno15.mp3')
# bruno15.save!




# ====================================================================








# ARTIST: CAMILA CABELLO
# ALBUM: Camila
# =============================
camilaAlbum = Album.find_by(title: "Camila")

camila1 = camilaAlbum.songs.create(
    title: "All These Years",
    genre_id: camilaAlbum.genre.id
)

camila1_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Camila+Cabello/Camila/Camila+Cabello+-+All+These+Years+(Official+Audio).mp3')
camila1.audio_file.attach(io: camila1_url, filename:'camila_camila1.mp3')
camila1.save!



camila2 = camilaAlbum.songs.create(
    title: "Consequences",
    genre_id: camilaAlbum.genre.id
)

camila2_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Camila+Cabello/Camila/Camila+Cabello+-+Consequences+(Official+Audio).mp3')
camila2.audio_file.attach(io: camila2_url, filename:'camila_camila2.mp3')
camila2.save!



camila3 = camilaAlbum.songs.create(
    title: "In The Dark",
    genre_id: camilaAlbum.genre.id
)

camila3_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Camila+Cabello/Camila/Camila+Cabello+-+In+the+Dark+(Official+Audio).mp3')
camila3.audio_file.attach(io: camila3_url, filename:'camila_camila3.mp3')
camila3.save!



camila4 = camilaAlbum.songs.create(
    title: "Inside Out",
    genre_id: camilaAlbum.genre.id
)

camila4_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Camila+Cabello/Camila/Camila+Cabello+-+Inside+Out+(Official+Audio).mp3')
camila4.audio_file.attach(io: camila4_url, filename:'camila_camila4.mp3')
camila4.save!



camila5 = camilaAlbum.songs.create(
    title: "Never Be the Same",
    genre_id: camilaAlbum.genre.id
)

camila5_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Camila+Cabello/Camila/Camila+Cabello+-+Never+Be+the+Same+(Official+Audio).mp3')
camila5.audio_file.attach(io: camila5_url, filename:'camila_camila5.mp3')
camila5.save!



camila6 = camilaAlbum.songs.create(
    title: "Real Friends",
    genre_id: camilaAlbum.genre.id
)

camila6_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Camila+Cabello/Camila/Camila+Cabello+-+Real+Friends+(Official+Audio).mp3')
camila6.audio_file.attach(io: camila6_url, filename:'camila_camila6.mp3')
camila6.save!



camila7 = camilaAlbum.songs.create(
    title: "She Loves Control",
    genre_id: camilaAlbum.genre.id
)

camila7_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Camila+Cabello/Camila/Camila+Cabello+-+She+Loves+Control+(Official+Audio).mp3')
camila7.audio_file.attach(io: camila7_url, filename:'camila_camila7.mp3')
camila7.save!



camila8 = camilaAlbum.songs.create(
    title: "Havana (Remix)",
    genre_id: camilaAlbum.genre.id
)

camila8_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Camila+Cabello/Camila/Camila+Cabello%2C+Daddy+Yankee+-+Havana+(Remix)+(Official+Audio).mp3')
camila8.audio_file.attach(io: camila8_url, filename:'camila_camila8.mp3')
camila8.save!








deluxeAlbum = Album.find_by(title: "Deluxe")

deluxe1 = deluxeAlbum.songs.create(
    title: "Barcelona",
    genre_id: deluxeAlbum.genre.id
)

deluxe1_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Deluxe/Ed+Sheeran+-+Barcelona+(Clean).mp3')
deluxe1.audio_file.attach(io: deluxe1_url, filename:'deluxe1.mp3')
deluxe1.save!




deluxe2 = deluxeAlbum.songs.create(
    title: "Galway Girl",
    genre_id: deluxeAlbum.genre.id
)

deluxe2_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Deluxe/Ed+Sheeran+-+Galway+Girl+(Clean).mp3')
deluxe2.audio_file.attach(io: deluxe2_url, filename:'deluxe2.mp3')
deluxe2.save!



deluxe3 = deluxeAlbum.songs.create(
    title: "Happier",
    genre_id: deluxeAlbum.genre.id
)

deluxe3_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Deluxe/Ed+Sheeran+-+Happier+(Clean).mp3')
deluxe3.audio_file.attach(io: deluxe3_url, filename:'deluxe3.mp3')
deluxe3.save!



deluxe4 = deluxeAlbum.songs.create(
    title: "How Would You Feel",
    genre_id: deluxeAlbum.genre.id
)

deluxe4_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Deluxe/Ed+Sheeran+-+How+Would+You+Feel+(Paean)+(Clean).mp3')
deluxe4.audio_file.attach(io: deluxe4_url, filename:'deluxe4.mp3')
deluxe4.save!





deluxe5 = deluxeAlbum.songs.create(
    title: "I'm a Mess",
    genre_id: deluxeAlbum.genre.id
)

deluxe5_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Deluxe/Ed+Sheeran+-+I'm+a+Mess+(Clean).mp3")
deluxe5.audio_file.attach(io: deluxe5_url, filename:'deluxe5.mp3')
deluxe5.save!






deluxe6 = deluxeAlbum.songs.create(
    title: "One",
    genre_id: deluxeAlbum.genre.id
)

deluxe6_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Deluxe/Ed+Sheeran+-+One+(Clean).mp3")
deluxe6.audio_file.attach(io: deluxe6_url, filename:'deluxe6.mp3')
deluxe6.save!





deluxe7 = deluxeAlbum.songs.create(
    title: "Perfect",
    genre_id: deluxeAlbum.genre.id
)

deluxe7_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Deluxe/Ed+Sheeran+-+Perfect+(Clean).mp3")
deluxe7.audio_file.attach(io: deluxe7_url, filename:'deluxe7.mp3')
deluxe7.save!




deluxe8 = deluxeAlbum.songs.create(
    title: "Photograph",
    genre_id: deluxeAlbum.genre.id
)

deluxe8_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Deluxe/Ed+Sheeran+-+Photograph+(Clean).mp3")
deluxe8.audio_file.attach(io: deluxe8_url, filename:'deluxe8.mp3')
deluxe8.save!



deluxe9 = deluxeAlbum.songs.create(
    title: "Save Myself",
    genre_id: deluxeAlbum.genre.id
)

deluxe9_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Deluxe/Ed+Sheeran+-+Save+Myself+(Clean).mp3")
deluxe9.audio_file.attach(io: deluxe9_url, filename:'deluxe9.mp3')
deluxe9.save!







plusAlbum = Album.find_by(title: "Plus")

plus1 = plusAlbum.songs.create(
    title: "Afire Love",
    genre_id: plusAlbum.genre.id
)

plus1_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Plus/Ed+Sheeran+-+Afire+Love+(Clean).mp3')
plus1.audio_file.attach(io: plus1_url, filename:'plus1.mp3')
plus1.save!




plus2 = plusAlbum.songs.create(
    title: "Castle On The Hill",
    genre_id: plusAlbum.genre.id
)

plus2_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Plus/Ed+Sheeran+-+Castle+On+The+Hill+(Clean).mp3')
plus2.audio_file.attach(io: plus2_url, filename:'plus2.mp3')
plus2.save!




plus3 = plusAlbum.songs.create(
    title: "Lego House",
    genre_id: plusAlbum.genre.id
)

plus3_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Plus/Ed+Sheeran+-+Lego+House+(Clean).mp3')
plus3.audio_file.attach(io: plus3_url, filename:'plus3.mp3')
plus3.save!



plus4 = plusAlbum.songs.create(
    title: "Supermarket Flowers",
    genre_id: plusAlbum.genre.id
)

plus4_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Plus/Ed+Sheeran+-+Supermarket+Flowers+(Clean).mp3')
plus4.audio_file.attach(io: plus4_url, filename:'plus4.mp3')
plus4.save!




plus5 = plusAlbum.songs.create(
    title: "The Man",
    genre_id: plusAlbum.genre.id
)

plus5_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/Plus/Ed+Sheeran+-+The+Man+(Clean).mp3')
plus5.audio_file.attach(io: plus5_url, filename:'plus5.mp3')
plus5.save!









xAlbum = Album.find_by(title: "X")

x1 = xAlbum.songs.create(
    title: "I Don't Care",
    genre_id: xAlbum.genre.id
)

x1_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/X/Ed+Sheeran+%26+Justin+Bieber+-+I+Don't+Care+(Clean).mp3")
x1.audio_file.attach(io: x1_url, filename:'x1.mp3')
x1.save!





x2 = xAlbum.songs.create(
    title: "Dive",
    genre_id: xAlbum.genre.id
)

x2_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/X/Ed+Sheeran+-+Dive+(Clean).mp3")
x2.audio_file.attach(io: x2_url, filename:'x2.mp3')
x2.save!




x3 = xAlbum.songs.create(
    title: "I See Fire",
    genre_id: xAlbum.genre.id
)

x3_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/X/Ed+Sheeran+-+I+See+Fire+(Clean).mp3")
x3.audio_file.attach(io: x3_url, filename:'x3.mp3')
x3.save!





x4 = xAlbum.songs.create(
    title: "Shape Of You",
    genre_id: xAlbum.genre.id
)

x4_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/X/Ed+Sheeran+-+Shape+Of+You+(Clean).mp3")
x4.audio_file.attach(io: x4_url, filename:'x4.mp3')
x4.save!





x5 = xAlbum.songs.create(
    title: "Cross Me",
    genre_id: xAlbum.genre.id
)

x5_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Ed+Sheeran/X/Ed+Sheeran+ft+Chance+The+Rapper+%26+PnB+Rock+-+Cross+Me+(Dirty).mp3")
x5.audio_file.attach(io: x5_url, filename:'x5.mp3')
x5.save!












believeAlbum = Album.find_by(title: "Believe")

believe1 = believeAlbum.songs.create(
    title: "All In It",
    genre_id: believeAlbum.genre.id
)

believe1_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Believe/Justin+Bieber+-+All+In+It+(Clean).mp3")
believe1.audio_file.attach(io: believe1_url, filename:'believe1.mp3')
believe1.save!






believe2 = believeAlbum.songs.create(
    title: "Alone",
    genre_id: believeAlbum.genre.id
)

believe2_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Believe/Justin+Bieber+-+Alone+(Clean).mp3")
believe2.audio_file.attach(io: believe2_url, filename:'believe2.mp3')
believe2.save!






believe3 = believeAlbum.songs.create(
    title: "Memphis",
    genre_id: believeAlbum.genre.id
)

believe3_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Believe/Justin+Bieber+-+Memphis+(Clean).mp3")
believe3.audio_file.attach(io: believe3_url, filename:'believe3.mp3')
believe3.save!





believe4 = believeAlbum.songs.create(
    title: "What Do You Mean",
    genre_id: believeAlbum.genre.id
)

believe4_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Believe/Justin+Bieber+-+What+Do+You+Mean+(Clean).mp3")
believe4.audio_file.attach(io: believe4_url, filename:'believe4.mp3')
believe4.save!





believe5 = believeAlbum.songs.create(
    title: "Fairytale",
    genre_id: believeAlbum.genre.id
)

believe5_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Believe/Justin+Bieber+feat+Jaden+Smith+-+Fairytale+(Main).mp3")
believe5.audio_file.attach(io: believe5_url, filename:'believe5.mp3')
believe5.save!





believe6 = believeAlbum.songs.create(
    title: "Baby",
    genre_id: believeAlbum.genre.id
)

believe6_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Believe/Justin+Bieber+ft+Ludacris+-+Baby+(Clean).mp3")
believe6.audio_file.attach(io: believe6_url, filename:'believe6.mp3')
believe6.save!












lyAlbum = Album.find_by(title: "Love Yourself")

love_yourself1 = lyAlbum.songs.create(
    title: "Friends",
    genre_id: lyAlbum.genre.id
)

love_yourself1_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Lover+Yourself/Justin+Bieber+%26+Bloodpop+-+Friends+(Clean).mp3")
love_yourself1.audio_file.attach(io: love_yourself1_url, filename:'love_yourself1.mp3')
love_yourself1.save!





love_yourself2 = lyAlbum.songs.create(
    title: "Been You",
    genre_id: lyAlbum.genre.id
)

love_yourself2_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Lover+Yourself/Justin+Bieber+-+Been+You+(Clean).mp3")
love_yourself2.audio_file.attach(io: love_yourself2_url, filename:'love_yourself2.mp3')
love_yourself2.save!




love_yourself3 = lyAlbum.songs.create(
    title: "New One",
    genre_id: lyAlbum.genre.id
)

love_yourself3_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Lover+Yourself/Justin+Bieber+-+New+One+(Dirty).mp3")
love_yourself3.audio_file.attach(io: love_yourself3_url, filename:'love_yourself3.mp3')
love_yourself3.save!





love_yourself4 = lyAlbum.songs.create(
    title: "Backpack",
    genre_id: lyAlbum.genre.id
)

love_yourself4_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Lover+Yourself/Justin+Bieber+ft+Lil+Wayne+-+Backpack+(Clean).mp3")
love_yourself4.audio_file.attach(io: love_yourself4_url, filename:'love_yourself4.mp3')
love_yourself4.save!





love_yourself5 = lyAlbum.songs.create(
    title: "Let Me Love You vs Rock The Boat",
    genre_id: lyAlbum.genre.id
)

love_yourself5_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Lover+Yourself/Justin+Bieber+vs+Aaliyah+-+Let+Me+Love+You+vs+Rock+The+Boat+(Hype+Intro+Kerry+Glass+Edit+V1)+(Clean).mp3")
love_yourself5.audio_file.attach(io: love_yourself5_url, filename:'love_yourself5.mp3')
love_yourself5.save!






purposeAlbum = Album.find_by(title: "Purpose")

purpose1 = purposeAlbum.songs.create(
    title: "Heartbreaker",
    genre_id: purposeAlbum.genre.id
)

purpose1_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Purpose/Justin+Bieber+-+Heartbreaker+(Clean).mp3")
purpose1.audio_file.attach(io: purpose1_url, filename:'purpose1.mp3')
purpose1.save!






purpose2 = purposeAlbum.songs.create(
    title: "Mark My Words",
    genre_id: purposeAlbum.genre.id
)

purpose2_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Purpose/Justin+Bieber+-+Mark+My+Words+(Clean).mp3")
purpose2.audio_file.attach(io: purpose2_url, filename:'purpose2.mp3')
purpose2.save!




purpose3 = purposeAlbum.songs.create(
    title: "Purpose",
    genre_id: purposeAlbum.genre.id
)

purpose3_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Purpose/Justin+Bieber+-+Purpose+(Clean).mp3")
purpose3.audio_file.attach(io: purpose3_url, filename:'purpose3.mp3')
purpose3.save!




purpose4 = purposeAlbum.songs.create(
    title: "Recovery",
    genre_id: purposeAlbum.genre.id
)

purpose4_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Purpose/Justin+Bieber+-+Recovery+(Clean).mp3")
purpose4.audio_file.attach(io: purpose4_url, filename:'purpose4.mp3')
purpose4.save!






purpose5 = purposeAlbum.songs.create(
    title: "The Feeling",
    genre_id: purposeAlbum.genre.id
)

purpose5_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Purpose/Justin+Bieber+-+The+Feeling+(Clean).mp3")
purpose5.audio_file.attach(io: purpose5_url, filename:'purpose5.mp3')
purpose5.save!





purpose6 = purposeAlbum.songs.create(
    title: "What's Hatnin'",
    genre_id: purposeAlbum.genre.id
)

purpose6_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Purpose/Justin+Bieber+ft+Future+-+What's+Hatnin'+(Clean).mp3")
purpose6.audio_file.attach(io: purpose6_url, filename:'purpose6.mp3')
purpose6.save!





purpose7 = purposeAlbum.songs.create(
    title: "Never Say Never",
    genre_id: purposeAlbum.genre.id
)

purpose7_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Purpose/Justin+Bieber+ft+Jaden+Smith+-+Never+Say+Never+(Clean).mp3")
purpose7.audio_file.attach(io: purpose7_url, filename:'purpose7.mp3')
purpose7.save!




purpose8 = purposeAlbum.songs.create(
    title: "That Should Be Me",
    genre_id: purposeAlbum.genre.id
)

purpose8_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Justin+Bieber/Purpose/Justin+Bieber+ft+Rascal+Flatts+-+That+Should+Be+Me+(Clean).mp3")
purpose8.audio_file.attach(io: purpose8_url, filename:'purpose8.mp3')
purpose8.save!