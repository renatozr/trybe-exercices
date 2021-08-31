const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addPropObj = (obj, key, value) => {
  obj[key] = value;
}
addPropObj(lesson2, 'turno', 'noite');
console.log(lesson2);

const objKeys = obj => Object.keys(obj);
console.log(objKeys(lesson1));

const objLength = obj => Object.keys(obj).length;
console.log(objLength(lesson1));

const objValues = obj => Object.values(obj);
console.log(objValues(lesson1));

const ls1Assign = {
  lesson1: Object.assign({}, lesson1)
};
const ls2Assign = {
  lesson2: Object.assign({}, lesson2)
};
const ls3Assign = {
  lesson3: Object.assign({}, lesson3)
};
const allLessons = Object.assign({}, ls1Assign, ls2Assign, ls3Assign);
console.log(allLessons);

