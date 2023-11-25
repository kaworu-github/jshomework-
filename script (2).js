const takingArra = [3, 1, 5, 4, 8, 12]


for (let i = 0; i < takingArra.length; i++) {
    if (takingArra[i] % 2 == 0 ) {
        console.log(takingArra[i] +  " -> " + "парне число");
    }
}



console.log(" ");







console.log("завдання 1");

function sumNumbers(a, b) {
    return a + b
}

sumNumbers(2, 6)
console.log(sumNumbers(2, 6));

console.log(" ");

console.log("завдання 2");
function kvadrat(c) {
    return c ** 2
}
kvadrat(12);
console.log(kvadrat(12));

console.log(" ");

console.log("завдання 3");

function parniChisla() {
    for (let i = 0; i < 32; i += 2) {
        console.log(i);
        
    }
}

parniChisla();


console.log(" ");


console.log("завдання 4");

function unitedStr(str1, str2) {
    str1 
    str2
    return str1 + str2
}
unitedStr("Hello,", "World!")
console.log(unitedStr("Hello,", "World!"));

console.log(" ");

console.log("завдання 5");

function maxValue(a, b, c, maximum) {
    a = 12;
    b = 11;
    c= 18
    maximum = Math.max(a, b, c)
    console.log(maximum);
}
maxValue()

console.log(" ");


console.log("завдання 6");


function vysokosYear(v, nv) {
    v = 365
    nv = 366
    if (v == 365) {
        console.log("це не високосний рік");
    }else{
        console.log("цей рік високосний");
    }
}
vysokosYear();

console.log(" ");


console.log("завдання 7");




function factorialNumb(f, n1, n2, n3, n4, n5) {
    f = 120
    n1 = 1;
    n2 = 2;
    n3 = 3;
    n4 = 4;
    n5 = 5
    if (f == n1 * n2 * n3 * n4 * n5) {
        console.log(true);
    }else{
        console.log(false);
    }
}

factorialNumb();

console.log(" ");


console.log("завдання 9");

function randomNumb(r, rr) {
    r = Math.random() * 20;
    rr = Math.round(r);
    console.log(rr);
}
randomNumb();
console.log(" ");



console.log(" ");

console.log("завдання 11");

function returnArr(myArr) {
    for (let i = 0; i < myArr.length; i++) {
        console.log(myArr[i]);        
    }
}
const myArr = [1, "Hello", false, null]
returnArr(myArr)


console.log(" ");




console.log("завдання 12");


function returNmyObj(myObj) {
    for (const key in myObj) {
        console.log(key + ":" + myObj[key]);
    }
}

const myObj = {
    name: "dinia",
    age: 14,
    city:"kyiv"
}
returNmyObj(myObj)

console.log(" ");


console.log("завдання 13");

function kvadratNumb(arrForKv) {
    for (let i = 0; i < arrForKv.length; i++) {
        console.log(arrForKv[i] ** 2);        
    }
}
const arrForKv = [1, 32, 2, 5, 8, 13]
kvadratNumb(arrForKv)

console.log(" ");


console.log("завдання 14");

/* function returnMyArr(nRandomaRR) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }   
}
let randomArr = Math.random() * 50;
let nRandomaRR = Math.round(randomArr) */


console.log(" ");



console.log("завдання 15");


/* function checkName(obj) {
    for (const key in obj) {
        if (obj[key] == obj[key.name = 0]) {
            console.log(obj[key.name] = "dinia");
        }else if (obj[key] == obj[key.name != 0]) {
            console.log(obj[key.name]);
        }else if (obj[key.name] != obj[key.name]) {
            console.log(obj[key.name] = "dinia");
        }
    }
}
const obj = {
    name:"dinia",
    age:14,
    city:"kyiv"
}
checkName(obj) */


console.log(" ");


console.log("завдання 16");

function filterArr(arr){
    const beforeFilterArr = []
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] > 6) {
            beforeFilterArr.push(arr[i])
        }        
    }
    return beforeFilterArr
}

const arr = [1, 31, 4, 88, 5, 7, 12];
const resaultArr = filterArr(arr)
console.log(resaultArr);

console.log(" ");


console.log("завдання 17");

/* const numbArr = [1, 3, 5, 2, 6];

function numbFilterArr(numbArr) {
    const arr = []
    for (let i = 0; i < numbArr.length; i++) {
        
        
    }
} */


console.log(" ");

console.log("домашня робота ");


function takeAndEx() {
    for (let i = 0; i <= 15; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i, "FizzBuzz");
        }else if (i % 5 == 0) {
            console.log( i, "Buzz");
        }else if (i % 3 == 0) {
            console.log( i, "Fizz");
        }else{
            console.log(i);
        }
    }
}
takeAndEx()

console.log(" ");


console.log("завдання 2");

const takingArr = [3, 1, 5, 4, 8, 12]
function takeArra(takingArr) {
    for (let i = 0; i < takingArr.length; i++) {
        if (takingArr[i] % 2 == 0 ) {
            console.log(takingArr[i], " ", "парне число");
        }
    }
}
takeArra([3, 1, 5, 4, 8, 12])

console.log(" ");

console.log("завдання 3");
function takeArrObj(arrObj) {
    if (!arrObj || arrObj.length === 0) {
        return 0
    }
    let sumAge = 0;
    for (let i = 0; i < arrObj.length; i++) {
        sumAge += arrObj[i].age
        
    }
    const midle = sumAge / arrObj.length
    return midle
}

const midlresoult = midle(arrObj)
const arrObj = [
    {age : 14},
    {age: 22},
    {age: 42}
]
takeArrObj()
console.log(midlresoult);