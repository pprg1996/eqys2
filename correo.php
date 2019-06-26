<?php
  $nombre=$_POST["nombre"];
  $apellido=$_POST["apellido"];
  $correo=$_POST["correo"];
  $marca=$_POST["marca"];
  $modelo=$_POST["modelo"];
  $year=$_POST["year"];
  $cantidad=$_POST["cantidad"];
  $flota=$_POST["flota"];
  
  $mensaje="Nombre: {$nombre}\r\n\r\nApellido: {$apellido}\r\n\r\nCorreo: {$correo}\r\n\r\nMarca: {$marca}\r\n\r\nModelo: {$modelo}\r\n\r\nAño: {$year}\r\n\r\nCantidad: {$cantidad}\r\n\r\nFlota Mixta: {$flota}\r\n\r\n";
  
  mail("pprg1996@gmail.com",$_POST["asunto"],$mensaje);
?>