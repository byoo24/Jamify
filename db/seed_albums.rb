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