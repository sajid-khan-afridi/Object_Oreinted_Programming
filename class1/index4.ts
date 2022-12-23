export {};
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Student extends Person {
  rollNumber: string;
  constructor(rnum: string, name: string) {
    super(name);
    this.rollNumber = rnum;
  }
}
class Teacher extends Person {
  course: string;
  constructor(course: string, name: string) {
    super(name);
    this.course = course;
  }
}

class University {
  student: Student[];
  teacher: Teacher;
  constructor(stu: Student[], teacher: Teacher) {
    this.student = stu;
    this.teacher = teacher;
  }
}

const sObj1 = new Student("1", "Ali");
const sObj2 = new Student("2", "Sajid");

const tObj = new Teacher("Metaverse", "Sir Zia");

const objArr = [sObj1, sObj2];

const uObj = new University(objArr, tObj);
console.log(uObj);
