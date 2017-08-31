
// 01 - Filmes de ação lancados entre 2000 e 2003.
db.filmes.find({generos:{$in:["Action"]},data_estreia:{$gte:new Date(2000,1,1),$lte:new Date (2003,12,31)}},{_id:0,titulo:1,data_estreia:1,generos:1})


// 02 - Filmes de comedia ou terror com menos de 2 horas.
db.filmes.find({$or:[{generos:{$in:["Comedy"]}},{generos:{$in:["Horror"]}}],duracao:{$lt:120}}, {_id:0,titulo:1,generos:1,duracao:1})db.filmes.find({$or:[{generos:{$in:["Comedy"]}},{generos:{$in:["Thrille"]}}],duracao:{$lt:120}}, {_id:0,titulo:1,generos:1,duracao:1})


// 03 - Filmes onde bruce willis atuou.
db.filmes.find({atores:{$in:["Bruce Willis"]}},{_id:0,titulo:1,atores:1})


// 04 - Quantos filmes arrecadarão mais de 1 milhao.
db.filmes.count({arrecadacao:{$gt:1000000}})


// 05 - Quais os diretores dos 10 filmes com maior arrecadação.
 db.filmes.find({},{_id:0,titulo:1,diretores:1, arrecadacao:1}).sort({arrecadacao:-1}).limit(10)


// 06 - Filmes dirigidos por Steven Spierlberg na decada de 90.
 db.filmes.find({diretores:{$in:["Steven Spierlberg"]},data_estreia:{$gte:new Date(1990,1,1),$lte: new Date(1990,12,31)}},{_id:0,titulo:1,diretores:1,data_estreia:1})


// 07 - Qual o filmes com mais de 3 horas que teve a maior arrecadação.
db.filmes.find({duracao:{$gt:180}},{_id:0,titulo:1,duracao:1, arrecadacao:1}).sort({arrecadacao:-1}).limit(1)


// 08 - Quantos diretores diferentes tivemos em 2005.
db.filmes.distinct("diretores", {data_estreia:{$gte:new Date(2003,1,1), $lte:new Date(2003,12,30)}})


// 09 - Quais os atores de filmes de ação e comedia de 2010.
db.filmes.distinct("atores", {generos:{$in:["Action"], $in:["Comedy"]}, data_estreia:{$gte:new Date(2005,1,1), $lte:new Date(2005,12,30) }} )


// 10 - Qual o filme com Brad Pitt com maior duração.
db.filmes.find({atores:{$in:["Brad Pitt"]},}, {_id:0, atores:1, arrecadacao:1}).sort({arrecadacao:-1}).limit(1)