const salarios = [];
function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

function agregarSalario() {
    const valores = document.getElementById("mediaNumeros")
    const value = parseInt(valores.value);
    salarios.push(value);
    document.getElementById('mediaIngresosForm').reset();
    console.log(salarios);
}

function calcularPromedio() {
    const salariosSorted = salarios.sort(function(salaryA, salaryB){
        return salaryA - salaryB;
    });
    const medianaGeneral = medianaSalarios(salariosSorted);
    const resultadoTexto = document.getElementById("resultadoMedia");
    resultadoTexto.innerText = "El promedio de los ingresos es de: $" + medianaGeneral;
    while (salariosSorted.length > 0) {
        salariosSorted.pop();
    }
}





