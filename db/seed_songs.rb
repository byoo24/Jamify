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