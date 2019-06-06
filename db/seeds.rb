# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

Genre.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all




pop = Genre.create(category_name: "Pop")
rb = Genre.create(category_name: "R&B")
hiphop = Genre.create(category_name: "Hip Hop")


pop_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/pop.jpg')
pop.genre_cover.attach(io: pop_cover, filename:'genre_pop.jpg')

rb_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/r%26b.jpg')
rb.genre_cover.attach(io: rb_cover, filename:'genre_rb.jpg')

hiphop_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/hip_hop.jpg')
hiphop.genre_cover.attach(io: hiphop_cover, filename:'genre_hiphop.jpg')







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





bruno_mars = Artist.find_by(name: "Bruno Mars")

magic24k = bruno_mars.albums.create(title: "24K Magic")

magic24k_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Bruno+Mars/24k_magic.jpeg')
magic24k.cover_image.attach(io: magic24k_cover,filename: '24k_magic.jpeg')
magic24k.save!


jukebox = bruno_mars.albums.create(title: "Unorthodox Jukebox")

jukebox_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Bruno+Mars/unorthodox_jukebox.jpeg')
jukebox.cover_image.attach(io: jukebox_cover, filename: "unorthodox_jukebox.jpeg")
jukebox.save!


# =========================







# ARTIST: BRUNO MARS
# ALBUM: 24K MAGIC
# =============================
magic = Album.find_by(title: "24K Magic")

bruno1 = magic.songs.create(
    title: "Marshmallows (Clean) (Short Edit)",
    genre_id: magic.genre.id
)

bruno1_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Furlan+%26+Kyle+Watson+-+Marshmallows+(Clean)+(Short+Edit).mp3')
bruno1.audio_file.attach(io: bruno1_url, filename:'magic_bruno1.mp3')
bruno1.save!


bruno2 = magic.songs.create(
    title: "24K Magic (Dirty)",
    genre_id: magic.genre.id
)

bruno2_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+24K+Magic+(Dirty).mp3')
bruno2.audio_file.attach(io: bruno2_url, filename:'magic_bruno2.mp3')
bruno2.save!



bruno3 = magic.songs.create(
    title: "Chunky (Dirty)",
    genre_id: magic.genre.id
)

bruno3_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+Chunky+(Dirty).mp3')
bruno3.audio_file.attach(io: bruno3_url, filename:'magic_bruno3.mp3')
bruno3.save!



bruno4 = magic.songs.create(
    title: "Finesse (Dirty)",
    genre_id: magic.genre.id
)

bruno4_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+Finesse+(Dirty).mp3')
bruno4.audio_file.attach(io: bruno4_url, filename:'magic_bruno4.mp3')
bruno4.save!



bruno5 = magic.songs.create(
    title: "Perm (Clean)",
    genre_id: magic.genre.id
)

bruno5_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+Perm+(Clean).mp3')
bruno5.audio_file.attach(io: bruno5_url, filename:'magic_bruno5.mp3')
bruno5.save!



bruno6 = magic.songs.create(
    title: "Straight Up & Down (Clean)",
    genre_id: magic.genre.id
)

bruno6_url = open('https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+Straight+Up+%26+Down+(Clean).mp3')
bruno6.audio_file.attach(io: bruno6_url, filename:'magic_bruno6.mp3')
bruno6.save!



bruno7 = magic.songs.create(
    title: "That's What I Like (Dirty)",
    genre_id: magic.genre.id
)

bruno7_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+That's+What+I+Like+(Dirty).mp3")
bruno7.audio_file.attach(io: bruno7_url, filename:'magic_bruno7.mp3')
bruno7.save!


bruno8 = magic.songs.create(
    title: "Versace On The Floor (Clean)",
    genre_id: magic.genre.id
)

bruno8_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Bruno+Mars+-+Versace+On+The+Floor+(Clean).mp3")
bruno8.audio_file.attach(io: bruno8_url, filename:'magic_bruno8.mp3')
bruno8.save!


bruno9 = magic.songs.create(
    title: "Please Me (Dirty)",
    genre_id: magic.genre.id
)

bruno9_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/24K+Magic/Cardi+B+%26+Bruno+Mars+-+Please+Me+(Dirty).mp3")
bruno9.audio_file.attach(io: bruno9_url, filename:'magic_bruno9.mp3')
bruno9.save!





# ARTIST: BRUNO MARS
# ALBUM: Unorthodox Jukebox
# =============================
jukebox = Album.find_by(title: "Unorthodox Jukebox")

bruno10 = jukebox.songs.create(
    title: "Nothin' On You (Clean)",
    genre_id: jukebox.genre.id
)

bruno10_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/Unorthodox+Jukebox/B.O.B+ft+Bruno+Mars+-+Nothin'+On+You+(Clean).mp3")
bruno10.audio_file.attach(io: bruno10_url, filename:'jukebox_bruno10.mp3')
bruno10.save!



bruno11 = jukebox.songs.create(
    title: "Locked Out Of Heaven (Clean)",
    genre_id: jukebox.genre.id
)

bruno11_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/Unorthodox+Jukebox/Bruno+Mars+-+Locked+Out+Of+Heaven+(Clean).mp3")
bruno11.audio_file.attach(io: bruno11_url, filename:'jukebox_bruno11.mp3')
bruno11.save!




bruno12 = jukebox.songs.create(
    title: "Marry You (Clean)",
    genre_id: jukebox.genre.id
)

bruno12_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/Unorthodox+Jukebox/Bruno+Mars+-+Marry+You+(Clean).mp3")
bruno12.audio_file.attach(io: bruno12_url, filename:'jukebox_bruno12.mp3')
bruno12.save!



bruno13 = jukebox.songs.create(
    title: "Moonshine (Main)",
    genre_id: jukebox.genre.id
)

bruno13_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/Unorthodox+Jukebox/Bruno+Mars+-+Moonshine+(Main).mp3")
bruno13.audio_file.attach(io: bruno13_url, filename:'jukebox_bruno13.mp3')
bruno13.save!



bruno14 = jukebox.songs.create(
    title: "Rest For The Rest Of My Life (Clean)",
    genre_id: jukebox.genre.id
)

bruno14_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/Unorthodox+Jukebox/Bruno+Mars+-+Rest+For+The+Rest+Of+My+Life+(Clean).mp3")
bruno14.audio_file.attach(io: bruno14_url, filename:'jukebox_bruno14.mp3')
bruno14.save!



bruno15 = jukebox.songs.create(
    title: "Runaway Baby (Clean)",
    genre_id: jukebox.genre.id
)

bruno15_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Bruno+Mars/Unorthodox+Jukebox/Bruno+Mars+-+Runaway+Baby+(Clean).mp3")
bruno15.audio_file.attach(io: bruno15_url, filename:'jukebox_bruno15.mp3')
bruno15.save!




# ====================================================================