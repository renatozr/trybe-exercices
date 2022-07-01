import Person from './Person';
import { makeid } from './helpers';

type ExamGrades = [number, number, number, number];
type TaskGrades = [number, number];

class Student extends Person {
  enrollment: string;
  examGrades: ExamGrades;
  taskGrades: TaskGrades;

  constructor(name: string, birthDate: Date, examGrades: ExamGrades, taskGrades: TaskGrades) {
    super(name, birthDate);

    this.enrollment = this.generateEnrollment();
    this.examGrades = examGrades;
    this.taskGrades = taskGrades
  }

  sumGrades(): number {
    let totalGrade = 0;

    this.examGrades.forEach((grade: number) => totalGrade += grade);
    this.taskGrades.forEach((grade: number) => totalGrade += grade);

    return totalGrade;
  }

  calculateAverageGrade(): number {
    const totalGrade = this.sumGrades();
    const gradeQuantity = this.examGrades.length + this.taskGrades.length;

    const averageGrade = totalGrade / gradeQuantity;

    return averageGrade;
  }

  private generateEnrollment(): string {
    return makeid(16);
  }
}

export default Student;