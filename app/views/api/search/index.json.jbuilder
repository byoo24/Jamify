unless @artists.empty?
    json.partial! 'api/artists/index', artists: @artists
end


unless @albums.empty?
    json.partial! 'api/albums/index', albums: @albums
end
