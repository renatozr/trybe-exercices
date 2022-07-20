class Subject {
  name: string;

  constructor(name: string) {
    if (this.validateName(name)) this.name = name;
    else throw new Error('Name invalid.');
  }

  private validateName(name: string): boolean {
    if (name.length < 3) return false;

    return true;
  }
}

const matematica = new Subject('matemática');
const historia = new Subject('historia');
const filosofia = new Subject('filosofia');

console.log(matematica, historia, filosofia);

export default Subject;