-------------------------------------------------------------
User:

_id:
usuario:
correo: (electronico)
contraseña:
cuenta: (tipo de cuenta)
puntaje: (por compras)
estado: (Bloqueado o Habilitado) 

Favoritos:	{Arreglo de favoritos
			_id vendedor:
			Nombre vendedor:
		}

--------------------------------------------------------------


Vendedor:

_id:
usuario:
correo: (electronico)
contraseña:
cuenta: (tipo de cuenta)
estado: (habilitado{1},deshabilitado{2} o pendiente{3}) 
puntaje: (por estrellas 5)
ubicacion: ( edificio y numero de cubiculo donde esta ubicado)

promociones: { Arreglo de promociones

		id?: ( no creemos si necesita )
		Nombre:
		hora inicial:
		hora final:
		precio:
		img: (Buscariamos como agregar una imagen a la base de datos.)		
}

-----------------------------------------------------------------------------

Administrador:

_id:
usuario:
correo:(electronico)
contraseña:
cuenta: (tipo de cuenta) * 1 es administrador, 2 es vendedor , 3 es usuario
estado: (habilitado o deshabilitado)

------------------------------------------------------------------------------

comentarios:
_id:
_id vendedor:
nombre vendedor:
_id cliente:
comentario: "" (Limitado a 140 caracteres. estilo twitter)

-----------------------------------------------------------------------------