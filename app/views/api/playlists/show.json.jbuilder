# json.set! @playlist.id do
    json.extract! @playlist, :id, :name, :author_id
# end