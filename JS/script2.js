//สร้างarrที่มีแต่ value จากนั้นให้กรองเฉพาะค่าที่ หารด้วย 3 ลงตัวแล้วจึงหาผลรวมของผลที่ได้
const data = [
  { id: 1, value: 10 },
  { id: 2, value: 5 },
  { id: 3, value: 9 },
  { id: 4, value: 12 },
  { id: 5, value: 6 },
];

const arr = data.map((item) => item.value);
console.log(arr);

const mod3 = arr.filter((value) => value % 3 === 0);
console.log(mod3);

const sumMod = mod3.reduce((acc, cur) => acc + cur, 0);
console.log(sumMod);

const result = data
  .map((item) => item.value)
  .filter((value) => value % 3 === 0)
  .reduce((acc, cur) => acc + cur);
console.log(`result => ${result}`);
