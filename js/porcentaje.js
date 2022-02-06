function calcularPorcentaje() {
    const monto = document.getElementById("monto");
    const montoValue = monto.value;
    const porcentaje = document.getElementById("porcentaje");
    const porcentajeValue = porcentaje.value;
    const resultado = (montoValue * porcentajeValue) / 100;
    const resultadoTexto = document.getElementById("porcentajeTexto");
    resultadoTexto.innerText = "El valor del porcentaje es: " + resultado;
}