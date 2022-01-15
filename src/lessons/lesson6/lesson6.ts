console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA


// type Person = {
//     name: string;
// }
//
// function Test(this: Person, name: string) {
//     this.name = name;
// }
// let obj:Person = new Test('Evgen'); // JS
// let obj:Person = new (Test as any)('Evgen');


// class Test {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
// }
//
// let obj:Person = new Test('Evgen');

// console.dir(function () {});
// console.dir(class {});



// class Test {
//     name: string;
//     age: number;
//     //sayName: Function;
//     //sayBy: Function;
//
//     constructor(name: string, age: number = 10) {
//         this.name = name;
//         this.age = age;
//         //this.sayName = function () { };
//         //this.sayBy = () => {};
//     }
//
//     //sayName = function () { }
//     //sayName() {}
//
//     sayBy = () => {};
//
// }
//
// let obj = new Test('Evgen');
// let obj2 = new Test('Vlad', 50);

// console.log(obj);
// console.log(obj2);
//console.log(obj.sayName === obj2.sayName);



// class Person {
//     name: string;
//     age: number;
//
//     constructor(name: string, age: number = 10) {
//         this.name = name;
//         this.age = age;
//     }
//
//     sayName() {}
//
//     sayYo() {
//         console.log('YoYoYo');
//     }
// }
//
//
// class PolitePerson extends Person {
//     city:string
//
//     constructor(name: string, age: number, city:string) {
//         super(name, age);
//         this.city = city;
//     }
//
//     greeting() {}
//
//     sayYo() {
//         console.log('Hi Yo!!!!');
//     }
//
//     someMethod()  {
//         super.sayYo()
//     }
//
// }
//
// let politeObj = new PolitePerson('Hanna', 25, 'Minsk');
// let basObj = new Person('Evgen', 33);
// //console.log(politeObj);
// //console.log(basObj);
//
// politeObj.sayYo()
// politeObj.someMethod()


// class Helper {
//     sayName = () => {}
//     sayYo() {}
// }
//
// class SuperHelper extends Helper {
//     someMethod() {}
//     parentMethod() {
//         //super.sayName();
//     }
//
//     sayName = () => {}
//     // toString() {
//     //     return 'Bla';
//     // } // [object Object]
// }
//
// let testObj = new SuperHelper();
// console.log(testObj.toString())

// class Test {
//     name:string
//     constructor(name:string) {
//         this.name = name;
//     }
//
//     sayName() {
//         console.log('Base');
//     }
// }
//
// class Test2 extends Test {
//     age: number
//     constructor(name:string, age: number) {
//         super(name);
//         this.age = age;
//     }
//
//     sayName() {
//         console.log('Extended');
//     }
//
//     parentSayName() {
//         super.sayName();
//     }
// }
//
// class Test3 extends Test2 {
//     city: string;
//     constructor(name:string, age: number, city: string) {
//         super(name, age);
//         this.city = city;
//     }
//     someMethod() {
//         //super.parentSayName()
//         //@ts-ignore
//         //this.__proto__.__proto__.__proto__.sayName();
//     }
// }
//
// let obj = new Test3('E', 20, 'M');
// obj.sayName();
// obj.someMethod();


// class Test {
//     #privateParam = 10;
//
//     getPrivateParam() {
//         return this.#privateParam;
//     }
// }
//
// let obj = new Test();
// console.log(obj);
// console.log(obj.getPrivateParam());


// class Test {
//     #privateParam = 10;
//
//     getPrivateParam() {
//         return this.#privateParam;
//     }
// }
//
// class Test2 extends Test {
//     getChildMethod() {
//         return this.#privateParam; // error
//         //return super.#privateParam; // error приватные свойства и методы не наследуются
//     }
// }
//
// let obj = new Test2();
// console.log(obj.getPrivateParam());

// interface IPerson {
//     name: string;
//     age: number;
//
// }
//
// interface IPersonMixins extends IPerson {
//     sayName: Function;
// }
//
// interface IPerson2 {
//     name: string;
//     sayYo: Function;
//     sayBye: Function;
// }
//
// class Person implements IPersonMixins, IPerson2{
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     sayName() {}
//
//     sayYo() {}
//
//     sayBye() {}
// }




// class Person {
//     private pParam: number = 10;
//     protected ppParam: number = 100;
//     constructor(public name: string, public age: number, private city: string) { }
//     sayName() {}
// }
//
// class Person2 extends Person {
//     constructor(public name: string, public age: number) {
//         super(name, age, 'Minsk');
//     }
//     private getProrParam() {
//         return this.ppParam;
//     }
// }
//
// let obj = new Person2('Evgen', 33);
// console.log(obj.getProrParam());
// console.log(obj.ppParam);


class StatTest {
    static param = 10;

    constructor(public name: string, public age: number) {
    }

    sayName() {
        StatTest.param
    }

    static classMethod() {
        console.log(this.param === StatTest.param);
    }
}
let obj = new StatTest('Evgen', 33);
console.log(obj);

StatTest.classMethod();

let testObj = {
    name: 'Evgen',
    f() {
        //console.log(this.name);
        console.log(testObj.name);
    }
}

testObj.f()


// // Task 01
// // Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// // Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// // Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
//
// interface IStudent {
//     name: string;
//     surname: string;
//     groupNumber: number;
//     progress: number[];
//     averageMark: number;
// }
//
// class Student implements IStudent {
//     name: string;
//     surname: string;
//     groupNumber: number;
//     progress: number[];
//     averageMark: number;
//
//     constructor(name: string, surname: string, groupNumber: number, progress: number[]) {
//         this.name = name;
//         this.surname = surname;
//         this.groupNumber = groupNumber;
//         this.progress = progress;
//         this.averageMark = this.progress.reduce((sum, mark) => sum + mark) / this.progress.length;
//     }
//
//     private static sortStudent(s1: IStudent, s2: IStudent) {
//         if (s1.averageMark > s2.averageMark) {
//             return 1;
//         } else if (s1.averageMark < s2.averageMark) {
//             return -1;
//         } else {
//             return 0;
//         }
//     }
//
//     static sort(arr: Array<IStudent>) {
//         const temp = [...arr];
//         return temp.sort(this.sortStudent);
//     }
//
//     private static isAllMarksEqualFour(marks: number[]) {
//         return marks.every(mark => mark === 4);
//     }
//
//     private static isAllMarksEqualFive(marks: number[]) {
//         return marks.every(mark => mark === 5);
//     }
//
//     private static filterStudent(arr: Array<IStudent>) {
//         const result: Array<IStudent> = [];
//         arr.forEach(item => {
//             if (item.averageMark === 4 || item.averageMark === 5) result.push(item);
//         });
//         // arr.forEach(item => {
//         //     if (this.isAllMarksEqualFour(item.progress) || this.isAllMarksEqualFive(item.progress)) result.push(item);
//         // });
//         return result;
//     }
//
//     static printGoodStudent(arr: Array<IStudent>) {
//         this.filterStudent(arr).forEach(s => {
//             console.log(`Student - ${s.surname}, Group - ${s.groupNumber};`)
//         });
//     }
// }
//
// let students = [];
// students.push(new Student('Eugene', 'Sheuchuk', 1, [4,4,4,4,4]));
// students.push(new Student('Vlad', 'Bizin', 2, [5,5,5,5,5]));
// students.push(new Student('Hanna', 'Kicel', 3, [4,5,4,5,5]));
// students.push(new Student('Nick', 'Stone', 4, [3,4,3,5,3]));
// students.push(new Student('Alex', 'Page', 5, [3,4,3,3,4]));
// students.push(new Student('Test', 'Testovich', 6, [3,5,3,5]));
//
// console.log(students);
//
// console.log(Student.sort(students));
//
// Student.printGoodStudent(students);
//
//
//
// // Task 02
// // Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// // Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// // Можно ли создать метод класса который будет удалять экземпляр класса?
//
// class Test {
//     param1: any;
//     param2: any;
//
//     constructor(param1: any = 10, param2: any = null) {
//         this.param1 = param1;
//         this.param2 = param2;
//     }
// }
//
//
//
//
//
//
//
// // Task 03
// // Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// // полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// // Создать методы изменения времени на заданное количество часов, минут и секунд.
// // Создать метод выводящий время в строке формата HH:MM:SS
// // Создать класс по вышеуказанному описанию
//
//
//
// interface ITime {
//     hours: number;
//     minutes: number;
//     seconds: number;
//     setHours: (h: number) => void | Error;
//     setMinutes: (m: number) => void | Error;
//     setSeconds: (s: number) =>  void | Error;
// }
//
// class Time implements ITime {
//     hours: number;
//     minutes: number;
//     seconds: number;
//
//     constructor(hours: number, minutes: number, seconds: number) {
//         this.hours = this.checkHours(hours);
//         this.minutes = this.checkMinutes(minutes);
//         this.seconds = this.checkSeconds(seconds);
//     }
//
//     private checkHours(h: number) {
//         if (h < 0 || h >= 24) throw new Error('incorrect value of an hour');
//         return h;
//     }
//
//     setHours(h: number) {
//         this.hours = this.checkHours(h);
//     }
//
//     private checkMinutes(h: number) {
//         if (this.isLessZeroOrMoreThanSixty(h)) throw new Error('incorrect value of minutes');
//         return h;
//     }
//
//     setMinutes(m: number) {
//         this.minutes = this.checkMinutes(m);
//     }
//
//     private checkSeconds(s: number) {
//         if (this.isLessZeroOrMoreThanSixty(s)) throw new Error('incorrect value of seconds');
//         return s;
//     }
//
//     setSeconds(s: number) {
//         this.seconds = this.checkSeconds(s);
//     }
//
//     private isLessZeroOrMoreThanSixty(n: number) {
//         return n < 0 || n >= 60;
//     }
//
//     getTime() {
//         return `${this.formatNumber(this.hours)}:${this.formatNumber(this.minutes)}:${this.formatNumber(this.seconds)}`;
//     }
//     private formatNumber(n:number) {
//         return n >= 10 ? n : '0' + n;
//     }
// }
//
//
//
// // Task 04
// // Класс Покупатель: Фамилия, Имя, Отчество, Адрес, Номер кредитной карточки, Номер банковского счета; Конструктор;
// // Методы: установка значений атрибутов, получение значений атрибутов, вывод информации. Создать массив объектов данного класса.
// // Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.
//
//
// interface ICustomer {
//     name: string;
//     surname: string;
//     address: string;
//     account: number;
// }
//
// class Customer implements ICustomer {
//     private _name: string;
//     private _surname: string;
//     private _address: string;
//     private _account: number;
//
//     constructor(name: string, surname: string, address: string, account: number) {
//         this._name = name;
//         this._surname = surname;
//         this._address = address;
//         this._account = account;
//     }
//     get name() {
//         return this._name;
//     }
//
//     set name(n: string) {
//         this._name = n;
//     }
//
//     get surname() {
//         return this._name;
//     }
//
//     set surname(s) {
//         this._surname = s;
//     }
//
//     get address() {
//         return this._address;
//     }
//
//     set address(a) {
//         this._address = a;
//     }
//
//     get account() {
//         return this._account;
//     }
//
//     set account(acc) {
//         this._account = acc;
//     }
//
//     print() {
//         console.log(`${this.name} ${this.surname}, Address - ${this.address}, Account - ${this.account}`);
//     }
//
//     static sort(c1: ICustomer, c2: ICustomer) {
//         if (c1.name > c2.name) {
//             return 1;
//         } else if (c1.name < c2.name) {
//             return -1;
//         } else {
//             return 0;
//         }
//     }
// }
//
// let custs = [];
// custs.push(new Customer('Eugene', 'Sheuchuk', 'Minks, Nemiga str, 58 - 29', 5896578));
// custs.push(new Customer('Vlad', 'Bizin', 'Minks, Independent str, 38 - 46', 8792541));
// custs.push(new Customer('Hanna', 'Black', 'Minks, Red str, 4 - 45', 9142365));
// custs.push(new Customer('Nick', 'Ivanov', 'Minks, Brick str, 3 - 78', 2456789));
//
// [...custs].sort(Customer.sort).forEach(c => c.print());
//
// custs.filter(item => item.account > 6000 && item.account < 6000000).forEach(c => c.print());
//
//
// // Task 05
// // Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор, деструктор и функцию печати.
// // Создать производный класс – грузовик, имеющий грузоподъемность кузова. Определить конструкторы по умолчанию и с разным числом параметров.
// // Определить функции переназначения марки и грузоподъемности.
//
//
//
// interface ICar {
//     brand: string;
//     cylinderCount: number;
//     power: number;
// }
//
// class Car implements ICar {
//     brand: string;
//     cylinderCount: number;
//     power: number;
//
//     constructor(brand: string, cylinderCount: number, power: number) {
//         this.brand = brand;
//         this.cylinderCount = cylinderCount;
//         this.power = power;
//     }
//
//     print() {
//         console.log(`Brand - ${this.brand}, cylinderCount - ${this.cylinderCount}, power - ${this.power}`);
//     }
// }
//
// class Truck extends Car {
//     carrying: number;
//     constructor(brand: string, cylinderCount: number, power: number, carrying: number) {
//         super(brand, cylinderCount, power);
//         this.carrying = carrying;
//     }
//
//     setBrand(b: string) {
//         this.brand = b;
//     }
//
//     setCarrying(c: number) {
//         this.carrying = c;
//     }
// }


// just a plug
export default () => {};