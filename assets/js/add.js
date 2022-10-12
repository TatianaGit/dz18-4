let m = +prompt('Масса вещества(кг.)');
console.log(`Масса вещества ${m} кг.`);
let v = +prompt('Объем вещества (м. куб.)');
console.log(`Объем вещества ${v} м.куб.`);
let p = m / v;
p = Math.round(p*100) / 100;
console.log(`Плотность материала: ${p} кг/м.куб.`);




