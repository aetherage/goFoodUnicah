use gofood
var usuario ={"idUsuario": 01,"nombreUsuario" :"Prueba","contraseña" : "Prueba","tipoUsuario": "01","favoritos":[{"idEstablecimiento": " ","nombreEstablecimiento": " "},],"correoElectronico": "Prueba@prueba.com","puntos": 1,"estado": 01}
db.usuario.insert(usuario)

use gofood
var premium ={"idUsuario": 02,"nombreUsuario": "Usuario Premium de Prueba","correoElectronico": "CorreoPremium@prueba.net","telefono": 11223344,"contraseña": "pswPremium","tipoUsuario": 02,"puntos" : 0,"estado" : 0,"favoritos":[{"idEstablecimiento": 010203,"nombreEstablecimiento": "OtraComida"},],"establecimiento":{"nombreEstablecimiento": "Carnitas","urlEstablecimientoJPG": " */img/002/Carnitas/imagenLocal.jpg ","comentarioSobreEstablecimiento":[{"idUsuario": 0,"comentarioDeCliente": " ","estrellasPorUsuario": 1},],"promociones":[{"nombrePromocion": "CarneCombo","precioPromocion": 79.99,"horaInicial": 1000,"horaFinal": 1300,"descripcion": "Combo de Carne con papas y refresco","urlImagen": " */img/002/Carnitas/imagenPromo.jpg"},],"estrellasEstablecimiento": 4}}
db.premium.insert(premium)

use gofood
var admin ={"idUsuario": 03,"nombreUsuario": "Admin","contraseña": "Admin"}
db.admin.insert(administrador)
