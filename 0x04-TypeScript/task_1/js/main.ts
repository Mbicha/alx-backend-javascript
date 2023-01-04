// Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [anyObj: string]: any;
}

// Director Interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
}
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
}
console.log(director1);

// Function to print first lette of firstname and full lastname
function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher('Dora', 'Montero'));

interface classInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// constructor description interface
interface classConstructor {
  new (firstName: string, lastName: string): classInterface;
}

// Creating class and constructor through interfaces 
class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// creating instance of StudentClass
const studentClass: StudentClass = new StudentClass('sofia', 'cheung');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());
