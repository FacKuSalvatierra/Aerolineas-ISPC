select usuarioregistrado.Nombre, datosdetarjeta.tipoTarjeta from
usuarioregistrado inner join datosdetarjeta on usuarioregistrado.idUsuariosRegistrados=datosdetarjeta.idDatosdeTarjeta;
