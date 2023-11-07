const botones = [
    document.getElementById("sumar"),
    document.getElementById("restar"),
    document.getElementById("multi"),
    document.getElementById("divi")
];

botones.forEach((boton, index) =>{
    boton.addEventListener("click", () => {
        const numero1 = parseFloat(document.getElementById("numero1").value);
        const numero2 = parseFloat(document.getElementById("numero2").value);
        const resultado = document.getElementById("resultado");
        console.log(`Haz hecho clic en el botón ${index}`);

        switch (index) {
            case 0:
                resultado.value = sumar(numero1, numero2);
                break;
            case 1:
                resultado.value = restar(numero1, numero2);
                break;
            case 2:
                resultado.value = multiplicar(numero1, numero2);
                break;
            case 3:
                resultado.value = dividir(numero1, numero2);
                break;
            default:
               console.log("bien");
        }
        console.log(numero1+numero2);
    });
});

    
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    alert("No se puede dividir por cero");
    return NaN;
  }
  return a / b;
}