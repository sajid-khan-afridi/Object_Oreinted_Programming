class Person {
  name?: string;
}

class student extends Person {
  course?: string;
  rollNumber?: string;
}

class Teacher extends Person {
  course?: string;
  timing?: string;
}
class Course {
  classTeacher?: Teacher;
  students?: student[];
  timings?: string;
}
const student1: student = new student();
student1.name = "Student1";
student1.rollNumber = "1";
const student2: student = new student();
student2.name = "Student2";
student2.rollNumber = "2";
const student3: student = new student();
student3.name = "Student3";
student3.rollNumber = "3";

const teacher: Teacher = new Teacher();
teacher.name = "Teacher 1";
teacher.course = "PIAIC";
teacher.timing = "6-10";

const course: Course = new Course();
course.classTeacher = teacher;
course.timings = teacher.timing;
student1.course = teacher.course;
student2.course = teacher.course;
student3.course = teacher.course;
const stdArray: student[] = [student1, student2, student3];
course.students = stdArray;
export {};
