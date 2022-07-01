class Person {
  name: string;
  birthDate: Date;

  constructor(name: string, birthDate: Date) {
    if (this.validateName(name)) this.name = name;
    else throw new Error('Name invalid.');

    if (this.validateBirthDate(birthDate)) this.birthDate = birthDate;
    else throw new Error('Birth date invalid.');
  }

  validateName(name: string): boolean {
    if (name.length < 3) return false;

    return true;
  }

  validateBirthDate(birthDate: Date): boolean {
    const nowDate = new Date();

    if (
      nowDate.getTime() < birthDate.getTime()
      || nowDate.getFullYear() - birthDate.getFullYear() > 120
    ) return false;

    return true;
  }
}

export default Person;