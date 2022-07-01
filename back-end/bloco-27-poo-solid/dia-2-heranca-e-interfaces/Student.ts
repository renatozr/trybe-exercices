type ExamGrades = [number, number, number, number];
type TaskGrades = [number, number];

class Student {
  enrollment: string;
  name: string;
  examGrades: ExamGrades;
  taskGrades: TaskGrades;

  constructor(enrollment: string, name: string, examGrades: ExamGrades, taskGrades: TaskGrades) {
    this.enrollment = enrollment;
    this.name = name;
    this.examGrades = examGrades;
    this.taskGrades = taskGrades
  }

  calculateTotalGrade(): number {
    let totalGrade = 0;

    this.examGrades.forEach((grade: number) => totalGrade += grade);
    this.taskGrades.forEach((grade: number) => totalGrade += grade);

    return totalGrade;
  }

  calculateAverageGrade(): number {
    const totalGrade = this.calculateTotalGrade();
    const gradeQuantity = this.examGrades.length + this.taskGrades.length;

    const averageGrade = totalGrade / gradeQuantity;

    return averageGrade;
  }
}