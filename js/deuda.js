function calcularDeuda() {
    const ingresos = document.getElementById("ingresos");
    const ingresosValue = ingresos.value;
    const gastos = document.getElementById("gastos");
    const gastosValue = gastos.value;
    const resultado = (ingresosValue - gastosValue) * 0.40;
    const resultadoTexto = document.getElementById("ahorroResultado");
    resultadoTexto.innerText = "La capacidad de deuda es de: $" + resultado;
}