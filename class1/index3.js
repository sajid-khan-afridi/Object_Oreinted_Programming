"use strict";
// class Person {
//   // Properties of a person
//   name: string;
//   age: number;
//   // Constructor function to create a new person
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class Student extends Person {
//   // Properties specific to a student
//   studentId: number;
//   courses: Course[];
//   // Constructor function to create a new student
//   constructor(name: string, age: number, studentId: number) {
//     super(name, age);
//     this.studentId = studentId;
//     this.courses = [];
//   }
//   // Method to add a course to a student's list of courses
//   addCourse(course: Course): void {
//     this.courses.push(course);
//   }
// }
// class Professor extends Person {
//   // Properties specific to a professor
//   facultyId: number;
//   courses: Course[];
//   // Constructor function to create a new professor
//   constructor(name: string, age: number, facultyId: number) {
//     super(name, age);
//     this.facultyId = facultyId;
//     this.courses = [];
//   }
//   // Method to add a course to a professor's list of courses
//   addCourse(course: Course): void {
//     this.courses.push(course);
//   }
// }
// class Course {
//   // Properties of a course
//   name: string;
//   code: string;
//   professors: Professor[];
//   students: Student[];
//   // Constructor function to create a new course
//   constructor(name: string, code: string) {
//     this.name = name;
//     this.code = code;
//     this.professors = [];
//     this.students = [];
//   }
//   // Method to add a professor to a course's list of professors
//   addProfessor(professor: Professor): void {
//     this.professors.push(professor);
//   }
//   // Method to add a student to a course's list of students
//   addStudent(student: Student): void {
//     this.students.push(student);
//   }
// }
// class Classroom {
//   // Properties of a classroom
//   roomNumber: string;
//   capacity: number;
//   courses: Course[];
//   // Constructor function to create a new classroom
//   constructor(roomNumber: string, capacity: number) {
//     this.roomNumber = roomNumber;
//     this.capacity = capacity;
//     this.courses = [];
//   }
//   // Method to add a course to a classroom's list of courses
//   addCourse(course: Course): void {
//     this.courses.push(course);
//   }
// }
// // Example usage:
// const student1 = new Student('Alice', 20, 12345);
// const student2 = new Student('Bob', 21, 12346);
// const professor1 = new Professor('Carol', 45, 54321);
// const professor2 = new Professor('Dave', 50, 5
