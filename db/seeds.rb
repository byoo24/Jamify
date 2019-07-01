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


# pop_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/pop.jpg')
# pop.genre_cover.attach(io: pop_cover, filename:'genre_pop.jpg')

# rb_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/r%26b.jpg')
# rb.genre_cover.attach(io: rb_cover, filename:'genre_rb.jpg')

# hiphop_cover = open('https://jamify-data.s3.amazonaws.com/genre_covers/hip_hop.jpg')
# hiphop.genre_cover.attach(io: hiphop_cover, filename:'genre_hiphop.jpg')







genre_pop = Genre.where(category_name: "Pop").first
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

katy_perry = genre_pop.artists.create(name: "Katy Perry")

# katy_perry_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Katy+Perry/katy_perry.jpeg')
# katy_perry_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Katy+Perry/katy_perry_cover.jpeg')

# katy_perry.artist_images.attach(io: katy_perry_image, filename: 'katy_perry.jpeg')
# katy_perry.artist_images.attach(io: katy_perry_cover, filename: 'katy_perry_cover.jpeg')
# katy_perry.save!

# ====================================

michael_jackson = genre_pop.artists.create(name: "Michael Jackson")

# michael_jackson_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Michael+Jackson/michael_jackson.jpeg')
# michael_jackson_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Michael+Jackson/michael_jackson_cover.jpeg')

# michael_jackson.artist_images.attach(io: michael_jackson_image, filename: 'michael_jackson.jpeg')
# michael_jackson.artist_images.attach(io: michael_jackson_cover, filename: 'michael_jackson_cover.jpeg')
# michael_jackson.save!

# ====================================

taylor_swift = genre_pop.artists.create(name: "Taylor Swift")

# taylor_swift_image = open('https://jamify-data.s3.amazonaws.com/artist_images/Taylor+Swift/taylor_swift.jpeg')
# taylor_swift_cover = open('https://jamify-data.s3.amazonaws.com/artist_images/Taylor+Swift/taylor_swift_cover.jpeg')

# taylor_swift.artist_images.attach(io: taylor_swift_image, filename: 'taylor_swift.jpeg')
# taylor_swift.artist_images.attach(io: taylor_swift_cover, filename: 'taylor_swift_cover.jpeg')
# taylor_swift.save!

# ====================================


































# ALBUM
# ====================================

katy_perry = Artist.find_by(name: "Katy Perry")

prism = katy_perry.albums.create(title: "PRISM")

# prism_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Katy+Perry/PRISM.jpeg')
# prism.cover_image.attach(io: prism_cover, filename: 'prism.jpeg')
# prism.save!



witness = katy_perry.albums.create(title: "Witness")

# witness_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Katy+Perry/witness.jpeg')
# witness.cover_image.attach(io: witness_cover, filename: 'witness.jpeg')
# witness.save!




michael_jackson = Artist.find_by(name: "Michael Jackson")

bad = michael_jackson.albums.create(title: "Bad")

# bad_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Michael+Jackson/Bad.jpeg')
# bad.cover_image.attach(io: bad_cover, filename: 'bad.jpeg')
# bad.save!




this_is_it = michael_jackson.albums.create(title: "This Is It")

# this_is_it_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Michael+Jackson/This+Is+It.jpeg')
# this_is_it.cover_image.attach(io: this_is_it_cover, filename: 'this_is_it.jpeg')
# this_is_it.save!





taylor_swift = Artist.find_by(name: "Taylor Swift")

red = taylor_swift.albums.create(title: "Red")

# red_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Taylor+Swift/red.jpeg')
# red.cover_image.attach(io: red_cover, filename: 'red.jpeg')
# red.save!




reputation = taylor_swift.albums.create(title: "Reputation")

# reputation_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Taylor+Swift/reputation.jpeg')
# reputation.cover_image.attach(io: reputation_cover, filename: 'reputation.jpeg')
# reputation.save!





speak_now = taylor_swift.albums.create(title: "Speak Now")

# speak_now_cover = open('https://jamify-data.s3.amazonaws.com/album_covers/Taylor+Swift/Speak+Now.jpeg')
# speak_now.cover_image.attach(io: speak_now_cover, filename: 'speak_now.jpeg')
# speak_now.save!
















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




# ARTIST: Katy Perry
# ALBUM: PRISM
# =============================


prismAlbum = Album.find_by(title: "PRISM")

prism1 = prismAlbum.songs.create(
    title: "Deja Vu",
    genre_id: prismAlbum.genre.id,
    duration: "3:18",
    artist_id: katy_perry.id
)

# prism1_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Katy+Perry/PRISM/Katy+Perry+-+Deja+Vu+(Clean).mp3")
# prism1.audio_file.attach(io: prism1_url, filename:'prism1.mp3')
# prism1.save!






prism2 = prismAlbum.songs.create(
    title: "It Takes Two",
    genre_id: prismAlbum.genre.id,
    duration: "3:55",
    artist_id: katy_perry.id
)

# prism2_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Katy+Perry/PRISM/Katy+Perry+-+It+Takes+Two+(Clean).mp3")
# prism2.audio_file.attach(io: prism2_url, filename:'prism2.mp3')
# prism2.save!







prism3 = prismAlbum.songs.create(
    title: "Rise",
    genre_id: prismAlbum.genre.id,
    duration: "3:24",
    artist_id: katy_perry.id
)

# prism3_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Katy+Perry/PRISM/Katy+Perry+-+Rise+(Clean).mp3")
# prism3.audio_file.attach(io: prism3_url, filename:'prism3.mp3')
# prism3.save!






prism4 = prismAlbum.songs.create(
    title: "Walking On Air",
    genre_id: prismAlbum.genre.id,
    duration: "4:21",
    artist_id: katy_perry.id
)

# prism4_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Katy+Perry/PRISM/Katy+Perry+-+Walking+On+Air+(Extended).mp3")
# prism4.audio_file.attach(io: prism4_url, filename:'prism4.mp3')
# prism4.save!







prism5 = prismAlbum.songs.create(
    title: "Swish Swish",
    genre_id: prismAlbum.genre.id,
    duration: "4:02",
    artist_id: katy_perry.id
)

# prism5_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Katy+Perry/PRISM/Katy+Perry+ft+Nicki+Minaj+-+Swish+Swish+(Clean).mp3")
# prism5.audio_file.attach(io: prism5_url, filename:'prism5.mp3')
# prism5.save!




 

prism6 = prismAlbum.songs.create(
    title: "365",
    genre_id: prismAlbum.genre.id,
    duration: "3:02",
    artist_id: katy_perry.id
)

# prism6_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Katy+Perry/PRISM/Zedd+%26+Katy+Perry+-+365+(Clean).mp3")
# prism6.audio_file.attach(io: prism6_url, filename:'prism6.mp3')
# prism6.save!





# ARTIST: Katy Perry
# ALBUM: Witness
# =============================


prism7 = witness.songs.create(
    title: "Hey Hey Hey",
    genre_id: witness.genre.id,
    duration: "3:35",
    artist_id: katy_perry.id
)

# prism7_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Katy+Perry/Witness/Katy+Perry+-+Hey+Hey+Hey+(Clean).mp3")
# prism7.audio_file.attach(io: prism7_url, filename:'prism7.mp3')
# prism7.save!





prism8 = witness.songs.create(
    title: "Never Really Over",
    genre_id: witness.genre.id,
    duration: "3:44",
    artist_id: katy_perry.id
)

# prism8_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Katy+Perry/Witness/Katy+Perry+-+Never+Really+Over+(Clean).mp3")
# prism8.audio_file.attach(io: prism8_url, filename:'prism8.mp3')
# prism8.save!





prism9 = witness.songs.create(
    title: "Pendulum",
    genre_id: witness.genre.id,
    duration: "4:00",
    artist_id: katy_perry.id
)

# prism9_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Katy+Perry/Witness/Katy+Perry+-+Pendulum+(Clean).mp3")
# prism9.audio_file.attach(io: prism9_url, filename:'prism9.mp3')
# prism9.save!




prism10 = witness.songs.create(
    title: "Save As Draft",
    genre_id: witness.genre.id,
    duration: "3:48",
    artist_id: katy_perry.id
)

# prism10_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Katy+Perry/Witness/Katy+Perry+-+Save+As+Draft+(Clean).mp3")
# prism10.audio_file.attach(io: prism10_url, filename:'prism10.mp3')
# prism10.save!





prism11 = witness.songs.create(
    title: "Witness",
    genre_id: witness.genre.id,
    duration: "4:11",
    artist_id: katy_perry.id
)

# prism11_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Katy+Perry/Witness/Katy+Perry+-+Witness+(Dirty).mp3")
# prism11.audio_file.attach(io: prism11_url, filename:'prism11.mp3')
# prism11.save!







# ARTIST: Michael Jackson
# ALBUM: Bad
# =============================


bad1 = bad.songs.create(
    title: "I Just Can't Stop Loving You",
    genre_id: bad.genre.id,
    duration: "4:13",
    artist_id: michael_jackson.id
)

# bad1_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Michael+Jackson/Bad/Michael+Jackson+-+I+Just+Can't+Stop+Loving+You+(Clean).mp3")
# bad1.audio_file.attach(io: bad1_url, filename:'bad1.mp3')
# bad1.save!





bad2 = bad.songs.create(
    title: "I Wanna Be Where You Are",
    genre_id: bad.genre.id,
    duration: "3:05",
    artist_id: michael_jackson.id
)

# bad2_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Michael+Jackson/Bad/Michael+Jackson+-+I+Wanna+Be+Where+You+Are+(Clean)+(Extended).mp3")
# bad2.audio_file.attach(io: bad2_url, filename:'bad2.mp3')
# bad2.save!





bad3 = bad.songs.create(
    title: "Rock With You",
    genre_id: bad.genre.id,
    duration: "3:22",
    artist_id: michael_jackson.id
)

# bad3_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Michael+Jackson/Bad/Michael+Jackson+-+Rock+With+You+(Clean).mp3")
# bad3.audio_file.attach(io: bad3_url, filename:'bad3.mp3')
# bad3.save!






bad4 = bad.songs.create(
    title: "Speed Demon",
    genre_id: bad.genre.id,
    duration: "5:13",
    artist_id: michael_jackson.id
)

# bad4_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Michael+Jackson/Bad/Michael+Jackson+-+Spead+Demon+(Extended).mp3")
# bad4.audio_file.attach(io: bad4_url, filename:'bad4.mp3')
# bad4.save!







bad5 = bad.songs.create(
    title: "Wanna Be Startin' Somethin'",
    genre_id: bad.genre.id,
    duration: "6:00",
    artist_id: michael_jackson.id
)

# bad5_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Michael+Jackson/Bad/Michael+Jackson+-+Wanna+Be+Startin'+Somethin'+(Clean).mp3")
# bad5.audio_file.attach(io: bad5_url, filename:'bad5.mp3')
# bad5.save!




bad6 = bad.songs.create(
    title: "Say Say Say",
    genre_id: bad.genre.id,
    duration: "3:50",
    artist_id: michael_jackson.id
)

# bad6_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Michael+Jackson/Bad/Paul+McCartney+ft+Michael+Jackson+-+Say+Say+Say+(Clean).mp3")
# bad6.audio_file.attach(io: bad6_url, filename:'bad6.mp3')
# bad6.save!






# ARTIST: Michael Jackson
# ALBUM: This is it
# =============================



this_is_it1 = this_is_it.songs.create(
    title: "Blood On The Dancefloor",
    genre_id: this_is_it.genre.id,
    duration: "4:06",
    artist_id: michael_jackson.id
)

# this_is_it1_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Michael+Jackson/This+is+It/Michael+Jackson+-+Blood+On+The+Dancefloor+(Clean).mp3")
# this_is_it1.audio_file.attach(io: this_is_it1_url, filename:'this_is_it1.mp3')
# this_is_it1.save!





this_is_it2 = this_is_it.songs.create(
    title: "Human Nature",
    genre_id: this_is_it.genre.id,
    duration: "4:03",
    artist_id: michael_jackson.id
)

# this_is_it2_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Michael+Jackson/This+is+It/Michael+Jackson+-+Human+Nature+(Clean).mp3")
# this_is_it2.audio_file.attach(io: this_is_it2_url, filename:'this_is_it2.mp3')
# this_is_it2.save!





this_is_it3 = this_is_it.songs.create(
    title: "Maria (You Were The Only One)",
    genre_id: this_is_it.genre.id,
    duration: "3:42",
    artist_id: michael_jackson.id
)

# this_is_it3_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Michael+Jackson/This+is+It/Michael+Jackson+-+Maria+(You+Were+The+Only+One)+(Clean).mp3")
# this_is_it3.audio_file.attach(io: this_is_it3_url, filename:'this_is_it3.mp3')
# this_is_it3.save!




this_is_it4 = this_is_it.songs.create(
    title: "Smooth Criminal",
    genre_id: this_is_it.genre.id,
    duration: "4:04",
    artist_id: michael_jackson.id
)

# this_is_it4_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Michael+Jackson/This+is+It/Michael+Jackson+-+Smooth+Criminal+(Ummet+Ozcan+Remix)+(Clean+Extended).mp3")
# this_is_it4.audio_file.attach(io: this_is_it4_url, filename:'this_is_it4.mp3')
# this_is_it4.save!




this_is_it5 = this_is_it.songs.create(
    title: "Thriller",
    genre_id: this_is_it.genre.id,
    duration: "5:57",
    artist_id: michael_jackson.id
)

# this_is_it5_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Michael+Jackson/This+is+It/Michael+Jackson+-+Thriller+(Clean).mp3")
# this_is_it5.audio_file.attach(io: this_is_it5_url, filename:'this_is_it5.mp3')
# this_is_it5.save!




this_is_it6 = this_is_it.songs.create(
    title: "Somebody's Watching Me",
    genre_id: this_is_it.genre.id,
    duration: "3:28",
    artist_id: michael_jackson.id
)

# this_is_it6_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Michael+Jackson/This+is+It/Rockwell+ft+Michael+Jackson+-+Somebody's+Watching+Me+(BPM+Supreme+Halloween+Slam+Edit)+(Clean+Extended).mp3")
# this_is_it6.audio_file.attach(io: this_is_it6_url, filename:'this_is_it6.mp3')
# this_is_it6.save!




this_is_it7 = this_is_it.songs.create(
    title: "We Are The World",
    genre_id: this_is_it.genre.id,
    duration: "6:59",
    artist_id: michael_jackson.id
)

# this_is_it7_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Michael+Jackson/This+is+It/USA+For+Africa+-+We+Are+The+World+(Clean).mp3")
# this_is_it7.audio_file.attach(io: this_is_it7_url, filename:'this_is_it7.mp3')
# this_is_it7.save!




# ARTIST: Taylor Swift
# ALBUM: Red
# =============================

red1 = red.songs.create(
    title: "All Too Well",
    genre_id: red.genre.id,
    duration: "5:29",
    artist_id: taylor_swift.id
)

# red1_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Red/Taylor+Swift+-+All+Too+Well+(Clean).mp3")
# red1.audio_file.attach(io: red1_url, filename:'red1.mp3')
# red1.save!




red2 = red.songs.create(
    title: "All You Had To Do Was Stay",
    genre_id: red.genre.id,
    duration: "3:13",
    artist_id: taylor_swift.id
)

# red2_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Red/Taylor+Swift+-+All+You+Had+To+Do+Was+Stay+(Clean).mp3")
# red2.audio_file.attach(io: red2_url, filename:'red2.mp3')
# red2.save!






red3 = red.songs.create(
    title: "Back To December",
    genre_id: red.genre.id,
    duration: "4:10",
    artist_id: taylor_swift.id
)

# red3_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Red/Taylor+Swift+-+Back+To+December+(Clean).mp3")
# red3.audio_file.attach(io: red3_url, filename:'red3.mp3')
# red3.save!






red4 = red.songs.create(
    title: "Change",
    genre_id: red.genre.id,
    duration: "4:40",
    artist_id: taylor_swift.id
)

# red4_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Red/Taylor+Swift+-+Change+(Clean).mp3")
# red4.audio_file.attach(io: red4_url, filename:'red4.mp3')
# red4.save!






red5 = red.songs.create(
    title: "Delicate",
    genre_id: red.genre.id,
    duration: "4:25",
    artist_id: taylor_swift.id
)

# red5_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Red/Taylor+Swift+-+Delicate+(BPM+Supreme+ReDrum)+(Clean+Extended).mp3")
# red5.audio_file.attach(io: red5_url, filename:'red5.mp3')
# red5.save!





red6 = red.songs.create(
    title: "Eyes Open",
    genre_id: red.genre.id,
    duration: "4:05",
    artist_id: taylor_swift.id
)

# red6_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Red/Taylor+Swift+-+Eyes+Open.mp3")
# red6.audio_file.attach(io: red6_url, filename:'red6.mp3')
# red6.save!






red7 = red.songs.create(
    title: "I Know Places",
    genre_id: red.genre.id,
    duration: "3:16",
    artist_id: taylor_swift.id
)

# red7_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Red/Taylor+Swift+-+I+Know+Places+(Clean).mp3")
# red7.audio_file.attach(io: red7_url, filename:'red7.mp3')
# red7.save!




red8 = red.songs.create(
    title: "I Wish You Would",
    genre_id: red.genre.id,
    duration: "3:27",
    artist_id: taylor_swift.id
)

# red8_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Red/Taylor+Swift+-+I+Wish+You+Would+(Clean).mp3")
# red8.audio_file.attach(io: red8_url, filename:'red8.mp3')
# red8.save!








red9 = red.songs.create(
    title: "New Romantics",
    genre_id: red.genre.id,
    duration: "3:49",
    artist_id: taylor_swift.id
)

# red9_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Red/Taylor+Swift+-+New+Romantics+(Clean).mp3")
# red9.audio_file.attach(io: red9_url, filename:'red9.mp3')
# red9.save!




red10 = red.songs.create(
    title: "Out Of The Woods",
    genre_id: red.genre.id,
    duration: "3:52",
    artist_id: taylor_swift.id
)

# red10_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Red/Taylor+Swift+-+Out+Of+The+Woods+(Clean).mp3")
# red10.audio_file.attach(io: red10_url, filename:'red10.mp3')
# red10.save!



# ARTIST: Taylor Swift
# ALBUM: Speak Now
# =============================

speak_now1 = speak_now.songs.create(
    title: "Begin Again",
    genre_id: speak_now.genre.id,
    duration: "3:56",
    artist_id: taylor_swift.id
)

# speak_now1_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Speak+Now/Taylor+Swift+-+Begin+Again+(Main).mp3")
# speak_now1.audio_file.attach(io: speak_now1_url, filename:'speak_now1.mp3')
# speak_now1.save!




speak_now2 = speak_now.songs.create(
    title: "Delicate",
    genre_id: speak_now.genre.id,
    duration: "3:39",
    artist_id: taylor_swift.id
)

# speak_now2_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Speak+Now/Taylor+Swift+-+Delicate+(Sawyr+%26+Ryan+Tedder+Mix)+(Clean+Extended).mp3")
# speak_now2.audio_file.attach(io: speak_now2_url, filename:'speak_now2.mp3')
# speak_now2.save!





speak_now3 = speak_now.songs.create(
    title: "How You Get The Girl",
    genre_id: speak_now.genre.id,
    duration: "4:08",
    artist_id: taylor_swift.id
)

# speak_now3_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Speak+Now/Taylor+Swift+-+How+You+Get+The+Girl+(Clean).mp3")
# speak_now3.audio_file.attach(io: speak_now3_url, filename:'speak_now3.mp3')
# speak_now3.save!





speak_now4 = speak_now.songs.create(
    title: "I'm Only Me When I'm With You",
    genre_id: speak_now.genre.id,
    duration: "3:33",
    artist_id: taylor_swift.id
)

# speak_now4_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Speak+Now/Taylor+Swift+-+I'm+Only+Me+When+I'm+With+You+(Clean).mp3")
# speak_now4.audio_file.attach(io: speak_now4_url, filename:'speak_now4.mp3')
# speak_now4.save!






speak_now5 = speak_now.songs.create(
    title: "Ready For It",
    genre_id: speak_now.genre.id,
    duration: "3:28",
    artist_id: taylor_swift.id
)

# speak_now5_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Speak+Now/Taylor+Swift+-+Ready+For+It+(Clean).mp3")
# speak_now5.audio_file.attach(io: speak_now5_url, filename:'speak_now5.mp3')
# speak_now5.save!




speak_now6 = speak_now.songs.create(
    title: "Welcome To New York",
    genre_id: speak_now.genre.id,
    duration: "3:33",
    artist_id: taylor_swift.id
)

# speak_now6_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Speak+Now/Taylor+Swift+-+Welcome+To+New+York+(Clean).mp3")
# speak_now6.audio_file.attach(io: speak_now6_url, filename:'speak_now6.mp3')
# speak_now6.save!






speak_now7 = speak_now.songs.create(
    title: "End Game",
    genre_id: speak_now.genre.id,
    duration: "4:05",
    artist_id: taylor_swift.id
)

# speak_now7_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Speak+Now/Taylor+Swift+ft+Future+%26+Ed+Sheeran+-+End+Game+(Clean).mp3")
# speak_now7.audio_file.attach(io: speak_now7_url, filename:'speak_now7.mp3')
# speak_now7.save!




speak_now8 = speak_now.songs.create(
    title: "The Last Time",
    genre_id: speak_now.genre.id,
    duration: "4:59",
    artist_id: taylor_swift.id
)

# speak_now8_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/Speak+Now/Taylor+Swift+ft+Gary+Lightbody+-+The+Last+Time+(Clean).mp3")
# speak_now8.audio_file.attach(io: speak_now8_url, filename:'speak_now8.mp3')
# speak_now8.save!






# ARTIST: Taylor Swift
# ALBUM: reputation
# =============================

reputation1 = reputation.songs.create(
    title: "American Girl",
    genre_id: reputation.genre.id,
    duration: "4:12",
    artist_id: taylor_swift.id
)

# reputation1_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/reputation/Taylor+Swift+-+American+Girl+(Clean).mp3")
# reputation1.audio_file.attach(io: reputation1_url, filename:'reputation1.mp3')
# reputation1.save!





reputation2 = reputation.songs.create(
    title: "Gorgeous",
    genre_id: reputation.genre.id,
    duration: "3:30",
    artist_id: taylor_swift.id
)

# reputation2_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/reputation/Taylor+Swift+-+Gorgeous+(Clean).mp3")
# reputation2.audio_file.attach(io: reputation2_url, filename:'reputation2.mp3')
# reputation2.save!





reputation3 = reputation.songs.create(
    title: "I Did Something Bad",
    genre_id: reputation.genre.id,
    duration: "3:58",
    artist_id: taylor_swift.id
)

# reputation3_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/reputation/Taylor+Swift+-+I+Did+Something+Bad+(Dirty).mp3")
# reputation3.audio_file.attach(io: reputation3_url, filename:'reputation3.mp3')
# reputation3.save!






reputation4 = reputation.songs.create(
    title: "Look What You Made Me Do",
    genre_id: reputation.genre.id,
    duration: "3:31",
    artist_id: taylor_swift.id
)

# reputation4_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/reputation/Taylor+Swift+-+Look+What+You+Made+Me+Do+(Clean).mp3")
# reputation4.audio_file.attach(io: reputation4_url, filename:'reputation4.mp3')
# reputation4.save!







reputation5 = reputation.songs.create(
    title: "New Year's Day",
    genre_id: reputation.genre.id,
    duration: "3:56",
    artist_id: taylor_swift.id
)

# reputation5_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/reputation/Taylor+Swift+-+New+Year's+Day+(Clean).mp3")
# reputation5.audio_file.attach(io: reputation5_url, filename:'reputation5.mp3')
# reputation5.save!






reputation6 = reputation.songs.create(
    title: "Picture To Burn",
    genre_id: reputation.genre.id,
    duration: "2:55",
    artist_id: taylor_swift.id
)

# reputation6_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/reputation/Taylor+Swift+-+Picture+To+Burn+(Clean).mp3")
# reputation6.audio_file.attach(io: reputation6_url, filename:'reputation6.mp3')
# reputation6.save!






reputation7 = reputation.songs.create(
    title: "Tim McGraw",
    genre_id: reputation.genre.id,
    duration: "3:51",
    artist_id: taylor_swift.id
)

# reputation7_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/reputation/Taylor+Swift+-+Tim+McGraw+(Clean).mp3")
# reputation7.audio_file.attach(io: reputation7_url, filename:'reputation7.mp3')
# reputation7.save!







reputation8 = reputation.songs.create(
    title: "You Are In Love",
    genre_id: reputation.genre.id,
    duration: "4:26",
    artist_id: taylor_swift.id
)

# reputation8_url = open("https://jamify-data.s3.amazonaws.com/audio_files/Taylor+Swift/reputation/Taylor+Swift+-+You+Are+In+Love+(Clean).mp3")
# reputation8.audio_file.attach(io: reputation8_url, filename:'reputation8.mp3')
# reputation8.save!




