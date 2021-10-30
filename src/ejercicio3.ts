/// Se crea una funcion, que toma como valor la letra ingresada
function tablaDel9(letraIngresada: string) {
  console.clear();
  /// Si la letra esta en mayuscula, se para a minuscula
  let letra: string = letraIngresada.toLowerCase();
  /// Se establece que si son las letras a,b,c o d, se escribe la tabla del 9
  if (letra === "a" || letra === "b" || letra === "c" || letra === "d") {
    /// Ciclo para generar la tabla del 9
    let suma: string = "";
    for (let i: number = 1; i <= 10; i++) {
      suma = suma + ("9x" + i + "=" + 9 * i + " ");
    }
    /// devuelve por consola la tabla del 9
    return console.log(suma);
  } else {
    /// Si no se ingresaron las letras correspondientes, entonces lo informa por consola
    return console.log("No se ingreso la letra A,B,C o D");
  }
}

let btn = document.getElementById("ejercicio3");

btn.addEventListener("click", () => {
  /// Muestra un prompt para que el usuario ingrese una letra
  let letraPrompt: string = String(
    prompt("Ingrese la letra A,B,C o D para escribir la tabla del 9")
  );
  //// Se establece la letra ingresada como parametro para la funcion
  /// La funcion decidira si la letra ingresada es la correcta para mostrar la tabla del 9
  tablaDel9(letraPrompt);
});
