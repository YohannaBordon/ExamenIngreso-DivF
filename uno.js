
function mostrar()
{let tipo;
 let precio;
 let cantidad;
 let categoria;
 let fabricante;



 let contAlcohol=0;
 let acumAlcohol;
 let contIac=0;
 let acumIac;
 let contQuat=0;
 let acumQuat;
 let promedio;
 let contAlcohol=0;
 let acumAlcohol;
 let acumDesinfectante;
 let acumBactericida;
 let acumDetergente;
let contDesinfectante=0;

let contBactericida=0;
let acumBactericida;
let contDetergente=0;
let acumDetergente;

 let promedioCantidad;
 let mayorCantidad; 
 let flagDetergentemenos =0;
 let mensajeDetergente;

 

// declaro bucle de repeticion 5
for (let i =0; i < 5; i++){

 // pido validacion de tipo, precio, cantidad, marca, fabricante y valido
   tipo (prompt ('Ingrese tipo "ALCOHOL", "IAC" , "QUACT" : '));
   while (tipo != "ALCOHOL" && tipo != "IAC"  &&  tipo != "QUAT"){
	   tipo (prompt ('Tipo invalido. Ingrese tipo "ALCOHOL", "IAC", " IAC", "QUAT :  '));
   }
	
   precio = parseFloat (prompt ('Ingrese precio " (100 -300"):  '));
  while (precio <100 || precio> 300 || isNaN (precio)) {
  precio= parseFloat (prompt ("Ingrese precio $ (100- 300):   "));

 }

  cantidad =  parseInt(prompt ("Ingrese cantidad max 1000: ")); 
while  (! (cantidad >0 && cantidad <=1000)) {
  cantidad =parseInt (prompt ("Error ingrese cantidad max 1000:  "));
}

categoria = prompt ("ingrese categoria:  ");
fabricante = prompt ("Ingrese fabricante:  ");

/// 



switch (tipo) {
  case "alcohol":
	  acumAlcohol += cantidad;
	  contAlcohol++;
	  break;

  case "IAC":
	  acumIac +=  cantidad;
	  contIac++;
	  break;

	  case "QUAT ":
		  acumQuat += cantidad; 
		 contQuat++;
		   break;

		   
} 
} }
// a)


// b) promedio de cantidad por tipo de producto
 if (acumAlcohol > acumIac && acumIac > acumQuat ) {
   mayorCantidad = "alcohol";
   promedioCantidad =acumAlcohol / contAlcohol;

}

else if (acumAlac > acumAlcohol &&  acumIac >= acumQuat){
  mayorCantidad = "IAC";
 promedioCantidad =acumIac / contIac;
}

else{
 mayorCantidad = "Quat";
 promedioCantidad  =acumQuat / conQuat;
}


//categoria con mas cantidad en total 

switch (categoria) {
	case  "desinfectante":
     acumDesinfectante += cantidad;
	 contDesinfectante++;

	break;

	case  "bactericida":
     acumBactericida += cantidad;
	 contBactericida++;
	 break;


	 case "detergente":

     acumDetergente += cantidad;
      contDetergente++;
		 break; 



}



if (flagDetergentemenos == 0 || cantidad < precio){
contDetergente ++;
flag==1;
}

mensajeb= "B- Tipo con mas cantidad: " + mayorCantidad + "Promedio:  " + promedioCantidad;
mensajeDetergente = "C- Unidades de detergente menores:  " + acumDetergente;


}

