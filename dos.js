function mostrar()
{
  let nombre;
  let situacionLaboral;
  let cantidad;
  let sexo;
  let notaPromedio;
  let notaMax;
  let edad;
  let nombreViejoEstudiante;
  let promedioSl;
  let cursaMenos;
  let buscaTrabajo;
  let cantidadMaterias;
  let notaPromedioMax;
  let flagPromedio=0;
  let nombrePromedio;
   let flagNota=0;

  let acumDesempleado;
  let contDesempleado=0;
  let acumTrabajando;
  let contTrabajando=0;
  let acumEstudiante;
  let contEstudiante=0;
  let flagViejo=0;
  let mayorEdad;
  let nombreViejo;
  let acumSituacionLaboral;
  let contSituacionLaboral =0;
  let acumBuscando;
  let contBuscando=0;


  do{ 

//pido datos
 nombre = prompt ("Ingrese nombre:  ");

 situacionLaboral = prompt ("Ingrese situación laboral buscando/trabajando/ estudiante:    ");
  
 cantidadMaterias = parseInt( prompt( " Ingrese materias mas de 0 y menos de 8 :  "));
 sexo= prompt ('Ingrese sexo "femenino", "masculino", "no binario:    ');

 //valido nota de 0 a 10
  nota = parseInt( prompt ("Ingrese nota promedio entre 0 y 10:      ")); {
 while  (isNaN(nota) || nota < 0 || nota > 10){
 nota= parseInt (prompt ("Error. Reingre un numero entre 0 y 10 :  "));
 }
 
 edad = parseInt (prompt ("Ingrese su edad:  ")); 
 } while (isNaN (edad)) {
     edad= parseInt (prompt ("Error esa edad no existe. Reingrese edad :   "));
   }          
 

   // el nombre del mejor promedio de los que no trabajan o estan buscando
   
   if ((flagNota == 0 || notamax < notaPromedio) && !(situacionLaboral == "buscando")){
    notamax = notaPromedio;
    nombrePromedio = nombre;
    flagNota = 1;
    //  b 
  }
  if((flagViejo == 0 || mayorEdad > edad) && situacionLaboral == "estudiante"){
    mayorEdad = edad;
    nombreViejo = nombre;
    flagViejo = 1;
  
  }

  // Promedio
  if(situacionLaboral == "Desempleado"){
    acumSituacionLaboral += notaPromedio;
    contSituacionLaboral ++;
  }
  else if(situacionLaboral == "Solo estudiante"{
   acumEstudiante += notaPromedio;
   contEstudiante++;
  }
   else{
   acumBuscando += notaPromedio;
   contBuscando++;
  }
  
 
  seguir = prompt("Desea agregar algun dato?: ");
 }while(seguir == 's');
  

 



}