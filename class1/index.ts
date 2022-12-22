export {};
class Human {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Teacher extends Human {
  course: string;
  constructor(name: string, course: string) {
    super(name);
    this.course = course;
  }
}
class Student extends Human {
  rollnumber: string;
  constructor(rollnumber: string, name: string) {
    super(name);
    this.rollnumber = rollnumber;
  }
}

class University {
  student: Student[];
  teacher: Teacher;
  constructor(student: Student[], teacher: Teacher) {
    this.student = student;
    this.teacher = teacher;
  }
  // two Arrays each have many teachers and student
}
// class Section {
//   // timing
//   // each section contains students and teacher
// }
const stu_obj1 = new Student("1", "Ali");
const stu_obj2 = new Student("2", "Basit");
const stu_arr = [stu_obj1, stu_obj2];

const t_obj = new Teacher("Zia", "Metaverse");

const u_obj = new University(stu_arr, t_obj);
console.log(u_obj);
