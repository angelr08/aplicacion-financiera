const bolivar = 5;
function convertirBolivares() {
    const dolares = document.getElementById("dinero");
    const value = dolares.value;
    const resultado = ((value * 1) / bolivar).toFixed(2);
    
    const resultadoTexto = document.getElementById("resultadoDolares");
    resultadoTexto.innerText = "El valor en dolares es de: $" + resultado;
}
function convertirDolares() {
    const bolivares = document.getElementById("dinero");
    const value = bolivares.value;
    const resultado = (value * bolivar).toFixed(2);
    const resultadoTexto = document.getElementById("resultadoDolares");
    resultadoTexto.innerText = "El valor en bolivares es de: Bs." + resultado;
}