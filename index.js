//Crea una función que tome como parámetro un número. Si es un número entero (sin
//decimales) muestra por consola true. Si no, muestra por consola false

function esEntero(x) {
    if (Number.isInteger(x)) {
      return true;
    }
    return false;
  }
  
console.log(esEntero(6));



//Crea una función que tome como parámetros dos strings, puedes llamarlos a y b. Si a contiene b, añade b al principio de a. Si no, añade b al final.

function strings(a, b) {
    if (a.includes (b)) {
        return (b + a);
    }else
        return (a + b);
}

console.log(strings("Alfredo", "Gómez"));


//Crea una función que tome como parámetro un número y lo divida en dígitos individuales dentro de un array. Tip: puedes usar el método split();

function dividirNumero(numero) {
    
   let resultado = numero.toString().split('');
    return resultado;
}

console.log(dividirNumero(1546));



//Crea una función que tome como parámetro un array. Si todos los elementos del array son estrictamente iguales, muestra por consola true, de lo contrario muestra false. Por ejemplo:([true, true, true, true]) => output: true(['10',10,10,10]) => output: false

const arrayNumeros = (a, b, c, d) =>{
    if (a === b && b === c && c === d) {
        return true;
    }
    return false;
}

console.log(arrayNumeros("15", "12", "2", "1"));


//Dado un array de números, muestra por consola un array con dichos números ordenados en forma descendente.

myNumbersArray = [4, 89, -9, 0, 2000];

myNumbersArray.sort(function (a, b) {
    return b - a;
});

console.log(myNumbersArray);



//Dado un array de strings, muestra por consola un array con sus valores ordenados alfabéticamente.Por ejemplo: ['b', 'c', 'd', 'a'] => output: ['a', 'b', 'c', 'd']

arrayLetras = ['b', 'c', 'd', 'a'];

arrayLetras.sort();

console.log(arrayLetras);


//Crea una función que tome como parámetro un array de strings y muestra por consola el string más largo.Por ejemplo: (['help', 'me']) => output: “help”

words = ["help", "me"];
 
function longestWord(w) {
    let longWord = "";
    for (let i = 0; i < w.length; i++){
        if (longWord.length < w[i].length) {
            longWord = w[i];
        }
    }
    return longWord;
}

console.log(longestWord(words));


//Crea una función que tome dos arrays de números como parámetros. Une ambos arrays, remueve valores duplicados (si hay alguno) y ordena los números en orden ascendente.

const array1 = [13, 11, 9];
const array2 = [9, 7, 5];


const array3 = array1.concat(array2);

console.log(array3);

array3.splice(3,1);
console.log(array3);

console.log(array3.sort((a, b) => a - b));



//Crea una función que tome un objeto como parámetro. Remueve la propiedad “country” y su valor y muestra el resultado por consola. Por ejemplo: const myObj = { city: 'Sacramento', state: 'California', country: 'USA', continent: 'NorthAmerica' }=> output: { city: 'Sacramento', state: 'California', continent: 'North America' }

const myObj = {
    city: 'Sacramento',
    state: 'California',
    country: 'USA',
    continent: 'NorthAmerica'
};

function deleteObject(object){
    delete object.country;
    console.log(object);
}

deleteObject(myObj);

//Trabajando con el mismo array anterior, muestra por consola el valor de la propiedad “city”

const myObj = {
    city: 'Sacramento',
    state: 'California',
    country: 'USA',
    continent: 'NorthAmerica'
}

console.log(myObj.city);


