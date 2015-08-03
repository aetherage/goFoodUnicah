# Proyecto GoFoodUnicah Seminario de Software
Proyecto mobil de comidas de la unicah

# INFORMACION

Tipo de usuario maneja :
*	00 = Usuario Normal
*	01 = Usuario Premium
*	02 = Administrador

Estados son:
*	00 = Pendiente de Aceptacion.
*	01 = Habilitado.
*	02 = Inhabilitado o Bloqueado.

las rutas para cada una de las collecciones serian:
*	db.usuario.<funcion>
*	db.premium.<funcion>
*	db.admin.<funcion>

las imagenes las guardariamos en una carpeta llamada imagenes que estaria ubicada en public.
La ruta seria algo como "/public/images/<id_del_usuario>/<nombre_establecimiento>/<nombre_de_la_imagen.jpg>"

-----------------------------------------------------------
## ESTRUCTURA


### Usuario:

		"idUsuario": " ", ----- Numerico
		"nombreUsuario" :" ", ---- string
		"contraseña" : " ", ---- string masked
		"tipoUsuario": " ", ---- Numerico
		"favoritos":
				[
					{
					"idEstablecimiento": " ",  ------ Esto deberia ser un arreglo.
					"nombreEstablecimiento": " ", ----- esto tambien un arreglo.
					},
				],
		"correoElectronico": "   ", ------ string
		"puntos": "    ", ------- numerico
		"estado": "  " ------- numerico.
		}

####Premium

	{
		"idUsuario": " ", ----- numerico
		"nombreUsuario": " ", ---- string
		"correoElectronico": " ", ----- string
		"telefono": " ", ------ numerico
		"contraseña" : " " , ----- string masked
		"establecimiento":
				{
					"nombreEstablecimiento": " ", ----- string
					"urlEstablecimientoJPG": " ",  ------ string
					"estrellasEstablecimiento": " ", ------ numerico boleano
					"comentarioSobreEstablecimiento":
								[
									{
									"idUsuario": 23856752, ---- numerico
									"comentarioDeCliente": "texto", --- big string
									"estrellasPorUsuario": " " ------ Numerico y arreglo.
									},

									{
									"idUsuario": 1233222, ---- numerico
									"comentarioDeCliente": "texto", --- big string
									"estrellasPorUsuario": " " ------ Numerico y arreglo.
									},
								],

### Promociones


					"promociones":
								{
									"nombrePromocion" : " " , -----string
									"precioPromocion" : "  ", ----- decimal
									"horaInicial": " ", ------ hora... numerico
									"horaFinal": " ", ------- hora ... numerico
									"descripcion": " ", ------ string
									"urlImagen": " " ------- string
								}
				}
		"tipoUsuario": "  ", ---- numerico
		"favoritos":
				[
					{
					"idEstablecimiento": " ",  ---- arreglo
					"nombreEstablecimiento": " " ----- arreglo
					},
				],
		"puntos" : " ", ---- numerico
		"estado" : " " ------ numerico
	}

###Administrador

	{
		"idUsuario": " ", ---- numerico
		"nombreUsuario": " ",  ----- string
		"contraseña": " " -----string masked
	}
