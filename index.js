//Manipulacion del DOM.
//Ejercicio 1. Dado el siguiente HTML, crea una función que, a través de la manipulación delDOM, cambie el color de fondo de los párrafos, cada uno con colores diferentes.

function changeColors() {
    const paragraph1 = document.querySelector(".p1"),
        paragraph2 = document.querySelector(".p2");
    
    paragraph1.style.backgroundColor = "blue";
    paragraph2.style.backgroundColor = "red";
}

const myButton = document.querySelector(".btn");
myButton.addEventListener("click", changeColors);

//Ejercicio 2. Dado el siguiente array de objetos, manipula el DOM para imprimir en el html comoun h1 los valores de cada una de las propiedades del objeto.Tip: debes hacer uso deappendChild().

const dogsList = document.querySelector(".dogs-list");
const dogs = [
    { name: "balto", type: "chihuahua" },
    {name: "loli", type: "puddle"},
]

for (let i = 0; i < dogs.length; i++){
    //seleccionar perro y guardarlo en una variable
    const dog = dogs[i];

    const dogData = document.createElement("h1");
    dogData.innerText = `${dog.name} es un ${dog.type}`//template strings
    dogsList.appendChild(dogData);
}
////////////////////////////////////////////////////////////

//Crea una función que tome como parámetro un número. Si es un número entero (sin
//decimales) muestra por consola true. Si no, muestra por consola false

function isInteger(num) {
    return Number.isInteger(num);
}
console.log(isInteger(6));



//Crea una función que tome como parámetros dos strings, puedes llamarlos a y b. Si a contiene b, añade b al principio de a. Si no, añade b al final.

function wordsTogether(a, b) {
    if (a.includes (b)) {
        return b + " " + a;
    }else
        return a + b;
}

console.log(wordsTogether("think, therefore I am", "I"));


//Crea una función que tome como parámetro un número y lo divida en dígitos individuales dentro de un array. Tip: puedes usar el método split();

function toArray(num) {
    
   const newArr = String(num).split('');
    console.log(newArr);

    const arr = [];
    newArr.forEach((item) => {
        arr.push(Number(item));
    });
    console.log(arr);
}

toArray(1234);

//Crea una función que tome como parámetro un array. Si todos los elementos del array son estrictamente iguales, muestra por consola true, de lo contrario muestra false. Por ejemplo:([true, true, true, true]) => output: true(['10',10,10,10]) => output: false

function areEqual(array) {
    for (let i = 1; i < array.length; i++){
        if (array[0] === array[i]) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(areEqual(["10", 10, 10]));

//Dado un array de números, muestra por consola un array con dichos números ordenados en forma descendente.

function orderedNumbers(array) {
    return array.sort(function (a, b) {
        return b - a;
    });
}

console.log(orderedNumbers([2, 87, 1, 98, 200]));

//////////////////////////////////////////////////////////

myNumbersArray = [4, 89, -9, 0, 2000];

myNumbersArray.sort(function (a, b) {
    return b - a;
});

console.log(myNumbersArray);



//Dado un array de strings, muestra por consola un array con sus valores ordenados alfabéticamente.Por ejemplo: ['b', 'c', 'd', 'a'] => output: ['a', 'b', 'c', 'd']

const letters = ['b', 'c', 'd', 'a'];

console.log(letters.sort());


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

function joinArr(arr1, arr2) {
    spread operator
   const newArr = [...arr1, ...arr2];

    filter() crea un nuevo array con todos los elementos de un array base que cumplan una condición

   return newArr.sort().filter(function (item, index, arr) {
       return !index || item != arr[index - 1];
   });
}

console.log(joinArr([1, 2, 3], [1, 2, 3, 4,5,6]));

//Crea una función que tome un objeto como parámetro. Remueve la propiedad “country” y su valor y muestra el resultado por consola. Por ejemplo: const myObj = { city: 'Sacramento', state: 'California', country: 'USA', continent: 'NorthAmerica' }=> output: { city: 'Sacramento', state: 'California', continent: 'North America' }

const myObj = {
    city: 'Sacramento',
    state: 'California',
    country: 'USA',
    continent: 'NorthAmerica'
};

function deleteKey(object){
    delete object.country;
    console.log(object);
}

deleteKey(myObj);

//Trabajando con el mismo array anterior, muestra por consola el valor de la propiedad “city”

const myObj = {
    city: 'Sacramento',
    state: 'California',
    country: 'USA',
    continent: 'NorthAmerica'
}

console.log(myObj.city);


// Algunas de las propiedades de los siguientes objetos son strings vacíos. Reemplazalos por el valor “null”, empleando para ello una función que tome como parámetro dichos objetos. Muestra por consola el objeto resultante{ a: 'a', b: 'b', c: '' }{ a: '', b: 'b', c: ' ', d: 'd' }{ a: 'a', b: 'b ', c: ' ', d: '' }=> output: { a: 'a', b: 'b', c: null }

const myObj = {
    a: "",
    b: "b",
    c: " ",
    d: "d"
}

function replaceKey(obj) {
    for (const key in obj) {
        if (obj[key] === "" || obj[key] === " ") {
            obj[key] = null;
        }
    }
    console.log(obj);
}

replaceKey(myObj);

//Crea una función que tome como parámetros un array de objetos y un string. Agrega a cada uno de los objetos la propiedad “continent” que tome como valor el parámetro de string. Muestra por consola el nuevo array.
//([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')=> output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')=> output: [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

function addKey(arr, newValue) {
    const newKey = "continent";
    for (let i = 0; i < arr.length; i++){
        arr[i][newKey] = newValue;
    }
    console.log(arr);
}

addKey(
    [
        { city: 'Tokyo', country: 'Japan' },
        { city: 'Bangkok', country: 'Thailand' },
    ],
    'Asia'
);



