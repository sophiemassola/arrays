console.log('Array con objetos');


// Objeto ↓↓
class Ganancias {
    constructor(a,b){
        this.day = a;
        this.income = b;
    }
}

//Función ↓↓
const division = (a,b) => a/b;
const ganancianeta = a => a*0.33;

//Arrays ↓↓
const week = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const incomes = [];

//Variables ↓↓
let contador = 0;
let i = 0;

//Ciclo For ↓↓
for (const x of week){ //acá recorremos todo el array de subjects. La x representa los distintos dias de la semana.
    let ingreso = parseInt(prompt(`Ingresos del día ${x}`));
    incomes.push(new Ganancias(x,ingreso)); //acá estoy haciendo un array de objetos de tipo Ganancia.
    contador = contador + ingreso;
    i=i+1;
}

console.log(incomes);

//Llamado de funciones y display de resultados ↓↓
let promedio = division (contador,i);
let earnings = ganancianeta(promedio);
alert(`El promedio de los ingresos de la semana es ${promedio}, de los cuales la ganancia neta de su negocio es ${earnings}`);


