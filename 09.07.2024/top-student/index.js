// const arr = [1, 2, 3];
// // console.log(arr);
import { User } from './user.js';
import { Student } from './student.js';

const user = new User(1, 'John', 'Doe');

console.log(user);
user.setIsAdmin = true;
user.setIsAdmin = 1;
console.log(user);

console.log(user.getIsAdmin);

console.log(user.getId);

const student = new Student(2, 'Jane', 'Doe', 'FE', 100);
console.log(student);

const getTopStudent = students => {
  // // v1
  // const res = students
  //   .filter(student => student.getIsActive)
  //   .reduce((topStudent, curStudent) => {
  //     if (curStudent.points > topStudent.points) {
  //       return curStudent;
  //     }
  //     return topStudent;
  //   }, students[0]);
  // const id = res.id;
  // const firstName = res.firstName;
  // const lastName = res.lastName;
  // return { id, firstName, lastName };

  const { id, firstName, lastName } = students
    .filter(student => student.getIsActive)
    .reduce((topStudent, curStudent) => {
      if (curStudent.points > topStudent.points) {
        return curStudent;
      }
      return topStudent;
    }, students[0]);
  return { id, firstName, lastName };
};

// testing

const student1 = new Student(1, 'John', 'Doe', 'FE', 80);
const student2 = new Student(2, 'Ann', 'Joo', 'FE', 100);

console.log(getTopStudent([student1, student2]));
