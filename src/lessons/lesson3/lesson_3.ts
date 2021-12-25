import axios from 'axios';

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// let pr = new Promise((resolve, reject) => {
//     let a = 10;
//     // some async code
//     //resolve(1);
//     reject(0);
//     //....
//     console.log(a);
// });
//
// console.log(pr);

// let pr = new Promise((resolve, reject) => {
//     // some async code
//     //resolve(1);
//     resolve({ name: 'Evgen', value: 1 });
//     reject(0);
// });
//
// pr
//     .then(res => {
//         console.log('Then res ', res);
//         //throw 'Error from then'
//         return 10;
//     }, err => {
//         console.log('Then err ', err);
//         throw 'Error';
//     })
//     .then( res2 => {
//         console.log('Then res2 ', res2);
//     }, err2 => {
//         console.log('Then err2 ', err2);
//     })
//     .then( () => {
//         // do some code
//     })

////
// let pr = new Promise((resolve, reject) => {
//     // some async code
//     //resolve(1);
//     resolve({ name: 'Evgen', value: 1 });
//     //reject(0);
// });
//
// pr
//     .then(res => {
//         console.log('Then res ', res);
//         //throw 'Error from then'
//         return new Promise((res, rej) => {
//             //...
//         });
//     }, err => {
//         console.log('Then err ', err);
//         throw 'Error';
//     })
//     .then( res2 => {
//         console.log('Then res2 ', res2);
//     }, err2 => {
//         console.log('Then err2 ', err2);
//     })
//     .then( () => {
//         // do some code
//     })

// let pr = new Promise((resolve, reject) => {
//     // some async code
//     //resolve(1);
//     resolve({ name: 'Evgen', value: 1 });
//     //reject(0);
// });
//
// pr
//     .then(res => {
//         console.log('Then res ', res);
//         //throw 'Error from then'
//         return new Promise((res, rej) => {
//             //...
//             res(10);
//         });
//     })
//     .then( res2 => {
//         console.log('Then res2 ', res2);
//         throw 'Some error'
//     })
//     .then( res3 => {
//         console.log('Then res3 ', res3);
//     }, err => {
//         console.log('Then err ', err);
//     })

//
// let pr = new Promise((resolve, reject) => {
//     // some async code
//     resolve(1);
//     //resolve({ name: 'Evgen', value: 1 });
//     //reject(0);
// });

// pr
//     //@ts-ignore
//     .finally( prom => {
//         console.log(' Finally ', prom);
//         throw 'Finally error';
//         return 50;
//     })
//     .then(res => {
//         console.log('Then res ', res);
//         //throw 'Error from then'
//         return new Promise((res, rej) => {
//             //...
//             res(10);
//         });
//     })
//     .catch(err => {
//         console.log('catch err ', err);
//         throw 'Error in catch';
//     })
//     .then( res2 => {
//         console.log('Then res2 ', res2);
//         throw 'Some error'
//     })
//     .catch(err2 => {
//         console.log('catch err2 ', err2);
//     })
//     .then( res3 => {
//         console.log('Then res3 ', res3);
//     })
//     .catch(err3 => {
//         console.log('catch err3 ', err3);
//     })

// let pr1 = new Promise((resolve, reject) => {
//     // some async code
//     resolve(1);
//     //resolve({ name: 'Evgen', value: 1 });
//     //reject(0);
// });
//
// pr1
//     .then(res => {
//         console.log('Then res ', res);
//     })
//
// let pr2 = new Promise((resolve, reject) => {
//     // some async code
//     resolve(1);
//     //resolve({ name: 'Evgen', value: 1 });
//     //reject(0);
// });
//
// pr2
//     .then(res => {
//         console.log('Then res ', res);
//     })
//
// // function f(arg:any) {
// //     try {
// //         throw arg + 50
// //     } catch (e) {
// //         return e;
// //     } finally {
// //         return 0;
// //     }
// // }
//
// //f(10);
//
// setInterval(()=>{}, 2000);

// async function f() {  // let f = async () => {}
//     try {
//         let a = 10;
//         console.log(a);
//         //const response = await somePromise;
//         const response = await Promise.resolve(1000);
//         // throw 50;
//         // return a + a;
//         return response;
//     } catch (e) {
//         return e;
//     } finally {
//
//     }
// }

// console.log('start');
//
// f().then(console.log);
//
// console.log('End');

/*axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Andrei',
    body: 'Andrei body',
    userId: 1
}).then(res => console.log(res.data))

axios.get('https://jsonplaceholder.typicode.com/posts').then(res => console.log(res.data))

axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    id: 1,
    title: 'Andrei Yan',
    body: 'Body ne body',
    userId: 1
}).then(res => console.log(res.data))

axios.delete('https://jsonplaceholder.typicode.com/posts/1').then(res => console.log(res.data))*/


// just a plug
export default ()=>{};