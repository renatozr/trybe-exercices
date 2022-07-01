import Person from "./Person";
import IEmployee from "./IEmployee";
import Subject from './Subject';
import { makeid } from './helpers';

class Teacher extends Person implements IEmployee {
  registration: string;
  salary: number;
  admissionDate: Date;
  subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);

    this.registration = this.generateRegistration();

    if (this.validateSalary(salary)) this.salary = salary;
    else throw new Error('Salary invalid.');

    this.admissionDate = new Date();
    this.subject = subject;
  }

  validateSalary(salary: number): boolean {
    return salary >= 0;
  }

  generateRegistration(): string {
    return makeid(16);
  }
}

const professora1 = new Teacher('Carla', new Date('07/15/1990'), 2000, new Subject('Português'));

console.log(professora1);

export default Teacher;