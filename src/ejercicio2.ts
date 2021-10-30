let btn = document.getElementById("ejercicio2");

btn.addEventListener("click", () => {
  console.clear();

  /// Se establece una variable para suma, la cual empieza en cero
  let suma: number = 0;
  /// Se muestra por primera vez el prompt
  let numeroPrompt = Number(prompt("Ingrese un numero del 1 al 10"));

  //// Si el numero del primer prompt esta entre 1 y 10, entonces se entra en el ciclo
  while (numeroPrompt > 0 && numeroPrompt < 11) {
    /// Se suma el valor del primer prompt, y tambien se van a ir sumando los demas
    suma = suma + numeroPrompt;
    /// Se muestra el segundo prompt
    numeroPrompt = Number(prompt("Ingrese un numero del 1 al 10"));
  }

  //// Si la suma da 0, significa que no se realizo ninguna operacion
  //// Ya sea porque se ingreso un 0 o un numero mayor a 10
  if (suma === 0) {
    console.log(
      "No se ha realizado la operacion, asegurese de ingresar numeros entre 1 y 10"
    );
  } else {
    //// Se muestra el resultado de la suma
    console.log("El resultado de la suma es:" + suma);
  }
});
