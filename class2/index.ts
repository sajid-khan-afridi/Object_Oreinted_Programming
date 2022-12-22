// // Class Heritage
// interface Checkable {
//   check(name: string): boolean;
// }

// class NameChecker implements Checkable {
//   check(s) {
//     // Parameter 's' implicitly has an 'any' type.
//     // Notice no error here
//     return s.toLowercse() === "ok";

//     // any;
//   }
// }
// interface A {
//   x: number;
//   y?: number;
// }
// class C implements A {
//   x = 0;
//   y = 5;
//   z = 7;
// }
// const c = new C();
// c.y = 10;
// c.z = 20;

// class Animal {
//   move() {
//     console.log("Moving along!");
//   }
// }

// class Dog extends Animal {
//   woof(times: number) {
//     for (let i = 0; i < times; i++) {
//       console.log("woof!");
//     }
//   }
// }

// const d = new Dog();
// // Base class method
// d.move();
// // Derived class method
// d.woof(3);

// class Base {
//   greet() {
//     console.log("Hello, world!");
//   }
// }

// class Derived extends Base {
//   greet(name?: string) {
//     if (name === undefined) {
//       super.greet();
//     } else {
//       console.log(`Hello, ${name.toUpperCase()}`);
//     }
//   }
// }

// const d = new Derived();
// d.greet();
// d.greet("reader");

// const b: Base = new Derived();
// // Crashes because "name" will be undefined
// b.greet();

// class Base {
//   protected m = 10;
// }
// class Derived extends Base {
//   // No modifier, so default is 'public'
//   m = 15;
// }
// const d = new Derived();
// console.log(d.m); // OK

// class A {
//   private x = 10;

//   public sameAs(other: A) {
//     // No error
//     return other.x === this.x;
//   }
// }
// // const obj = new A();
// // console.log(obj.sameAs());
