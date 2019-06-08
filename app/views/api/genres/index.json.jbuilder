@genres.map do |genre|
    json.set! genre.id do 
         json.extract! genre, :id, :category_name
        #  json.genre_cover url_for(genre.genre_cover)
    end
end