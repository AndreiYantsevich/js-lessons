console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     c: 50,
//     a: 100,
// };
// let a = 10;
//
// function f(arg: any) {
//     let fScope = {
//         outerScope: globalScope,
//         arg: 1050,
//         innerA: 100,
//         func: 'Function',
//     }
//     var innerA = 100;
//     console.log(a);
//     a = innerA;
//     console.log(arg);
//
//     function f1() {
//         let f1Scope = {
//             outerScope: fScope,
//         };
//         console.log(a);
//         console.log(arg);
//         arg += 1000;
//         return arg;
//     }
//
//     return f1;
// }
//
// var c = 50;
// let func = f(c);
// func();
// console.log(a);

//Recursion
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function sumTo(arg: number) {
//     let result = 0;
//     for (let i=0; i<=arg; i++) {
//         result += i;
//     }
//     return result;
// }

// function sumTo(arg: number): number {
//     if (arg === 1) return arg;
//     return arg + sumTo(arg - 1);
// }

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sum(arg1: number) {
//     return function(arg2: number) {
//         return arg1 + arg2;
//     }
// }
// console.log(sum(3)(6));

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// function makeCounter () {
//     let result = 1;
//     return function () {
//         return result++;
//     }
// }
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:

// function makeCounter (num: number) {
//     let result = num;
//     return {
//         increase: function () {
//             return result + 1;
//         },
//         decrease: function () {
//             return result - 1;
//         },
//         reset: function () {
//             result = 0;
//         },
//         set: function (value: number) {
//             result = value;
//         }
//     }
// }
// const counter = makeCounter(2);
// console.log(counter.increase());
// console.log(counter.decrease());
// counter.set(10);
// console.log(counter.increase());
// counter.reset();
// console.log(counter.increase());
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// function superSum(num: number) {
//     if (num === null || num === undefined || num <= 0) return 0;
//     if (num === 1) return (n: number) => n;
//
//     let _arguments: number[] = [];
//
//     function helper(...args: number[]) {
//         _arguments = [..._arguments, ...args];
//         if (_arguments.length >= num) {
//             _arguments.length = num;
//             return _arguments.reduce((acc, elem) => acc + elem);
//         } else {
//             return helper;
//         }
//     }
//     return helper;
// }
//
// //@ts-ignore
// console.log(superSum(3)(2)(5)(3));
// //@ts-ignore
// console.log(superSum(3)(2)(5,3));
// //@ts-ignore
// console.log(superSum(3)(2,5,3));
// //@ts-ignore
// console.log(superSum(3)(2,5)(3));
// //@ts-ignore
// console.log(superSum(3)(2,5)(3,9));

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

function factorial (n: number): number {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));

function fibonatchi(n: number): number {
    return n <= 1 ? n : fibonatchi(n - 1) + fibonatchi(n - 2);
}

console.log(fibonatchi(3))

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};