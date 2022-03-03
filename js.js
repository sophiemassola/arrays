console.log('Array con objetos');

class Grade {
    constructor(nombre, nota){
        this.name = nombre;
        this.score = nota;
    }
}

const subjects = ['Matemática', 'Física', 'Química', 'Arte'];
const grades = [];

let contador = 0;
let i = 0;

for (const x of subjects){ //acá recorremos todo el array de subjects. La x representa las distintas materias.
    let score = parseInt(prompt(`Calificación de ${x}`));
    grades.push(new Grade(x,score)); //acá estoy haciendo un array de objetos de tipo Grade.
    contador = contador + score;
    i=i+1;
}

console.log(grades);
const division = (a,b) => a/b;
let promedio = division (contador,i);
alert(`El promedio del alumno es ${promedio}`);
