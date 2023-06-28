const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map para duplicar cada elemento
const arr_map = arr.map((elem) => elem * 2);
console.log(arr_map); // [2, 4, 6, 8, 10, 12]

// utilizar el método filter para filtrar los números pares
const arr_filter = arr.filter((elem) => elem % 2 === 0);
console.log(arr_filter); // [2, 4, 6]

// utilizar el método reduce para sumar todos los elementos
const arr_reduce = arr.reduce((acc, elem) => acc + elem, 0);
console.log(arr_reduce); // 21