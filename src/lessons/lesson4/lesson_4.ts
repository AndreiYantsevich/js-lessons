console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

//Task 1
// setTimeout(() => console.log(1), 0);
// console.log(2);
// (() => console.log(3))();
// Promise.resolve(console.log(4));
// 2 3 4 1

//Task 2
// new Promise((res, rej) => {
//     console.log(1);
// })
// new Promise((res, rej) => {
//     setTimeout(() => console.log(2), 0);
// })
// Promise.resolve(setTimeout(() => console.log(3), 0));
// console.log(4);
// Promise.reject(console.log(5));
// 1 4 5 2 3

//Task 3
// (function() {
//     setTimeout(() => console.log(1), 100);
// })();
// console.log(2);
// let i = 0;
// while (i < 5000000000) {
//     i++
// }
// new Promise((res, rej) => {
//     setTimeout(() => console.log(3), 50);
// })
// function f() {
//     console.log(4);
// }
// Promise.resolve(console.log(5));
//2 5 1 3

//Task 4
// function f(num: number) {
//     console.log(num)
// }
// Promise.resolve(1)
//     .then(f);
// (function() {
//     console.log(2);
// })();
// console.log(3);
// new Promise((res, rej) => {
//     console.log(4);
// })
// setTimeout(f, 0, 5);
//2 3 4 1 5

// async function sleep(ms: number) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(ms);
//             res();
//         }, ms*100)
//     });
// }
//
// async function show() {
//     await sleep(3)
//     await sleep(2)
//     await sleep(1)
// }
//
// show();

// Task 5
// let pr1 = new Promise((res) => {
//     res(10);
// });
// let pr2 = new Promise((res) => {
//     res(0)
// });
// pr1
//     .then((res: any) => {
//         console.log(res);
//         return res + 2;
//     })
//     .then((res: any) => {
//         console.log(res);
//         return res + 2;
//     })
//     .then(console.log);
// pr2
//     .then((res: any) => {
//         console.log(res);
//         return res + 1;
//     })
//     .then((res: any) => {
//         console.log(res);
//         return res + 1;
//     })
//     .then(console.log);
// 10 0 12 1 14 2

//Task 6
// setTimeout(() => console.log(1), 0);
// console.log(2);
// new Promise((resolve, reject) => {
//     setTimeout(() => reject(console.log(3)), 1000);
// }).catch(() => console.log(4));
// console.log(5);
// 2 5 1 3 4

//Task 7
// console.log(1);
// function f() {
//     console.log(2);
// }
// setTimeout(()=>{
//     console.log(3);
//     let p = new Promise((res, rej) => {
//         console.log(4);
//         res();
//     });
//     p.then(() => f())
// },0);
// let l = new Promise((res, rej) => {
//     console.log(5);
//     rej();
// });
// l.then(res => console.log(res)).catch(() => console.log(6));
// console.log(7);
// 1 5 7 6 3 4 2


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

/*let p = new Promise((res, rej) => {
    console.log('Promise is created')
})
console.log(p);*/


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// new Promise((res, rej) => {
//     res("Promise Data");
// }).then((res) => console.log("This is the " + res))


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// new Promise((res, rej) => {
//     rej("Promise Error");
// })
//     .then((res) => console.log(res))
//     .catch((rej) => console.log("This is the " + rej))


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise Data'), 3000);
// }).then((resolve) => console.log(resolve));


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type promiseType = {
    promise: null | Promise<any>
    resolve: null | Function
    reject: null | Function
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}

const handlePromise: promiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string) => {
        console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError: (paramName: string) => {
        console.log(`Promise is rejected with error: ${paramName}`)
    }
}

export const createPromise = () => {
    handlePromise.promise = new Promise((resolve, reject) => {
        handlePromise.resolve = resolve;
        handlePromise.reject = reject;
    })
    handlePromise.promise
        .then(handlePromise.onSuccess)
        .catch(handlePromise.onError)
    //@ts-ignore
    window.hndlprom = handlePromise;
}

export const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve('1')
}

export const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject('0')
}


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve('My name is '), 1000)
// }).then((resolve) => onSuccess(resolve))
//     .then((resolve) => print(resolve))
//
// const onSuccess = (param: any) => {
//     return param + 'Andrei'
// }
//
// const print = (param: any) => {
//     console.log(param)
// }


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve({name: 'Anna'}), 2000)
})
const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve({age: 16}), 3000)
})
const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve({city: ''}), 4000)
})
Promise.all([pr1, pr2, pr3])
    .then((res) => {
        let obj = res.reduce((acc, el) => Object.assign(acc, el), {})
        console.log(obj)
    })


// just a plug
export default () => {
};