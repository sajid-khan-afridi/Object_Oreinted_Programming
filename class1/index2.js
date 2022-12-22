"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
}
class student extends Person {
}
class Teacher extends Person {
}
class Course {
}
const student1 = new student();
student1.name = "Student1";
// student1.rollNumber = "1";
const student2 = new student();
student2.name = "Student2";
// student2.rollNumber = "2";
const student3 = new student();
student3.name = "Student3";
// student3.rollNumber = "3";
const teacher = new Teacher();
teacher.name = "Teacher 1";
teacher.course = "PIAIC";
teacher.timing = "6-10";
const course = new Course();
course.classTeacher = teacher;
course.timings = teacher.timing;
student1.course = teacher.course;
student2.course = teacher.course;
student3.course = teacher.course;
const stdArray = [student1, student2, student3];
course.students = stdArray;
