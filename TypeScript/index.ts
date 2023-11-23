// ---------------------------------------- Basic Types ----------------------------------------
// const myString: string = "TypeScript";
// const myNumber1: number = 10;
// const myNumber2: number = -10;
// const myNumber3: number = 10.1;
// const myBoolean: boolean = true;
// const myNull: null = null;
// const myUndefined: undefined = undefined;
// const temp: any = {};

// ---------------------------------------- Type Inference ----------------------------------------
// let myString = "TypeScript";
// // myString = 10; // => error
// myString = "Asp.net";

// let value;
// if (true) {
//   value = "TypeScript";
// } else {
//   value = 10;
// }
// value = false;

// ---------------------------------------- TS with Functions ----------------------------------------
// const add = (a: number, b: number): number => {
//   return a + b;
// };

// const joinStrings = (a: string, b: string): string => {
//   return a + b;
// };

// function newAdd(a: number, b: number): number {
//   return a + b;
// }

// const newJoinStrings = function (a: string, b: string): string {
//   return a + b;
// };

// ---------------------------------------- Difficulties with Objects ----------------------------------------
// const post: { title: string; daysOld: number; published: boolean } = {
//   title: "Latest TypeScript News",
//   daysOld: 10,
//   published: true,
// };
// // post.color; // => error
// // post.isPublished(); // => error

// const printPost = (postToPrint: {
//   title: string;
//   daysOld: number;
//   published: boolean;
// }) => {
//   return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
// };

// ---------------------------------------- Introducing Interfaces ----------------------------------------
// interface Post {
//   title: string;
//   daysOld: number;
//   published: boolean;
// }

// const post: Post = {
//   title: "Latest TypeScript News",
//   daysOld: 10,
//   published: true,
// };
// const printPost = (postToPrint: Post) => {
//   return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
// };
// console.log(printPost(post));

// ---------------------------------------- Classes and Properties ----------------------------------------
// class Car {
//   color: string;
//   year: number;

//   constructor(color: string, year: number) {
//     this.color = color;
//     this.year = year;
//   }

//   drive() {
//     console.log("driving...");
//   }
// }

// const myCar = new Car("red", 2020);
// myCar.drive();
// myCar.color = "blue";
// console.log(myCar.color, myCar.year);

// ---------------------------------------- Public and Private ----------------------------------------
// class Car {
//   public color: string;
//   private year: number;

//   constructor(color: string, year: number) {
//     this.color = color;
//     this.year = year;
//   }

//   public drive() {
//     console.log("driving...");
//   }
// }

// const myCar = new Car("red", 2020);
// myCar.drive();
// myCar.color = "blue";
// // myCar.year = 2000; // => error

// ---------------------------------------- Property Assignment Shortcut ----------------------------------------
// class Car {
//   constructor(public color: string, private year: number) {}

//   public drive() {
//     console.log("driving...");
//   }
// }

// const myCar = new Car("red", 2020);
// myCar.drive();
// myCar.color = "blue";
// console.log(myCar.color);
// // myCar.year = 2000; // => error

// ---------------------------------------- Decorators ----------------------------------------
// const Component = (target: any) => {
//   console.log(target);
// };

// @Component
// class Car {
// //   @Decorator
//   name: string;

// //   @Decorator
//   drive(/* @Decorator */ speed: number) {}

// //   @Decorator
//   get Name(): string {
//     return this.name;
//   }
// }

// ---------------------------------------- The Module System ----------------------------------------
// import { Car } from "./Car";

// const myCar = new Car();

// ---------------------------------------- Combining Interfaces and Classes ----------------------------------------
// interface Drivable {
//   speed: number;
//   drive(): string;
// }

// class Car implements Drivable {
//   speed: number = 10;

//   drive(): string {
//     console.log(`I am driving at ${this.speed} km/h`);
//     return `I am driving at ${this.speed} km/h`;
//   }
// }

// const startDriving = (vehicle: Drivable) => {
//   vehicle.drive();
// };

// const myCar = new Car();
// startDriving(myCar);

// ---------------------------------------- Class Generics ----------------------------------------
// class ValueHolder<T> {
//   value: T;
// }

// const numberHolder = new ValueHolder<number>();
// numberHolder.value = 10;

// const stringHolder = new ValueHolder<string>();
// stringHolder.value = "My String";

// ---------------------------------------- Function Generics ----------------------------------------
// const valueWrapper = <T>(value: T): T[] => {
//   return [value];
// };

// const value = valueWrapper(false);
// valueWrapper<number>(10);
// valueWrapper<string>('My String');
