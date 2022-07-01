class Person {
  name: string;
  birthDate: Date;

  constructor(name: string, birthDate: Date) {
    if (this.validateName(name)) this.name = name;
    if (this.validateBirthDate(birthDate)) this.birthDate = birthDate;
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