var express = require('express');
var apirouter = express.Router();

function api(db){
    //Colecciones
    //http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html
    var usuario = db.collection("usuario");
    var promociones = db.collection("premium");
    var favoritos = db.collection("favoritos");
    //Rutas
    apirouter.get("/obtenerusuarios",
        function(req, res){
            var query = {};
            usuario.find(query).toArray(function(err, vUsuario){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"usuario":vUsuario});
                }
            }) // usuarios.find toarray
        }
    ) // obtenerusuarios

    apirouter.get("/obtenerPromos",
        function(req, res){
            var query = {};
            promociones.find(query).toArray(function(err, vPromos){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"promociones":vPromos});
                }
            }) // Promos.find toarray
        }
    ) // obtenerPromos





    apirouter.get("/obtenerFavoritos/:idUsuario",
        function(req, res){
            var query = {"idUsuario": req.params.idUsuario};
            favoritos.find(query).toArray(function(err, vFavoritos){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"favoritos":vFavoritos});
                }
            }) // usuarios.find toarray
        }
    ) // obtenerusuarios


    apirouter.post("/modificarPerfilUsuario/:nombreUsuario",
        function(req, res){
            var query = {"nombreUsuario": req.params.nombreUsuario};
            var upd = {"$set":{"contraseña":req.body.contraseña}};

            usuario.updateOne(query,upd,{w:1},function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"usuario":doc});
                }
            });
        }
    ) // modificarLibro



    apirouter.get("/obtenerUsuario/:nombreUsuario",
        function(req, res){
            var query = {"nombreUsuario": req.params.nombreUsuario};
            usuario.findOne(query, function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"usuario":doc});
                }
            });

        }
    ) // obtenerLibro

    apirouter.post("/modificarLibro/:isbn",
        function(req, res){
            var query = {"isbn": req.params.isbn};
            var upd = {"$set":{"titulo":req.body.titulo}};

            libros.updateOne(query,upd,{w:1},function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"libro":doc});
                }
            });
        }
    ) // modificarLibro

    // apirouter.post("/modificarUsuario/:nombreUsuario",
    //     function(req, res){
    //         var query = {"nombreUsuario": req.params.isbn};
    //         var upd = {"$set":{"nombreUsuario":req.body.nombreUsuario}};
    //
    //         usuario.updateOne(query,upd,{w:1},function(err, doc){
    //             if(err){
    //                 res.status(500).json({"error":err});
    //             }else{
    //                 res.status(200).json({"usuario":doc});
    //             }
    //         });
    //     }
    // ) // modificarLibro


    apirouter.put("/agregarUsuario",
        function(req, res){
            console.log(req.body);
            var newUsuario = {};
            newUsuario.idUsuario = req.body.idUsuario;
            newUsuario.nombreUsuario = req.body.nombreUsuario;
            newUsuario.contraseña = req.body.contraseña;
            newUsuario.tipoUsuario = 1;
            newUsuario.correoElectronico = req.body.correoElectronico;
            newUsuario.puntos = 0;
            newUsuario.estado = 0;
            usuario.insertOne(newUsuario, function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"usuario":doc});
                }
            });
        }
    ) // agregarLibro
    //eliminarLibro/089373546718
    //req.parms.isbn
    apirouter.delete("/eliminarLibro/:isbn",
        function(req, res){
            var query = {"isbn": req.params.isbn};
            libros.deleteOne(query,{w:1},function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"libro":doc});
                }
            } );
        }
    ) // eliminarLibro
    return apirouter;
}

module.exports = api;
