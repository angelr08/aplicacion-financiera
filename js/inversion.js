function calcularRentabilidad() {
    const ganancias = document.getElementById("ganancias");
    const gananciasValue = ganancias.value;
    const inversion = document.getElementById("inversion");
    const inversionValue = inversion.value;
    const resultado = ((gananciasValue / inversionValue) * 100).toFixed(2);
    const resultadoTexto = document.getElementById("inversionTexto");
    resultadoTexto.innerText = "Tu promedio de retorno es de: %" + resultado;
}
