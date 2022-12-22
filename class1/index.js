"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name) {
        this.name = name;
    }
}
class Teacher extends Human {
    constructor(name, course) {
        super(name);
        this.course = course;
    }
}
class Student extends Human {
    constructor(rollnumber, name, course) {
        super(name);
        this.course = course;
        this.rollnumber = rollnumber;
    }
}
class University {
    constructor(student, teacher) {
        this.student = student;
        this.teacher = teacher;
    }
}
// class Section {
//   // timing
//   // each section contains students and teacher
// }
const stu_obj1 = new Student("1", "Ali", "Metaverse");
const stu_obj2 = new Student("2", "Basit", "Metaverse");
const stu_arr = [stu_obj1, stu_obj2];
const t_obj = new Teacher("Zia", "Metaverse");
const u_obj = new University(stu_arr, t_obj);
console.log(u_obj);
