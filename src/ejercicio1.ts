let btn = document.getElementById("ejercicio1");

btn.addEventListener("click", () => {
  console.clear();
  /// Se muestra un prompt consultando por un numero de mes y se convierte a numero
  let mes: number = Number(prompt("Ingrese el numero de un mes (1 a 12)"));
  /// Se crea un switch para los dias de cada mes
  switch (mes) {
    case 1:
      alert("El mes Enero tiene 31 dias");
      break;
    case 2:
      alert("El mes Febrero tiene 28 dias");
      break;
    case 3:
      alert("El mes Marzo tiene 31 dias");
      break;
    case 4:
      alert("El mes Abril tiene 30 dias");
      break;
    case 5:
      alert("El mes Mayo tiene 31 dias");
      break;
    case 6:
      alert("El mes Junio tiene 30 dias");
      break;
    case 7:
      alert("El mes Julio tiene 31 dias");
      break;
    case 8:
      alert("El mes Agosto tiene 31 dias");
      break;
    case 9:
      alert("El mes Septiembre tiene 30 dias");
      break;
    case 10:
      alert("El mes Octubre tiene 31 dias");
      break;
    case 11:
      alert("El mes Noviembre tiene 30 dias");
      break;
    case 12:
      alert("El mes Diciembre tiene 31 dias");
      break;

    //// Si se ingresa un numero que no este entre el 1 y el 12, se da un mensaje de error
    default:
      alert("Ingrese un numero del 1 al 12");
      break;
  }
});
