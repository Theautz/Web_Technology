for (let i = 1; i <= 10; i++) {
  console.log(`count number ${i}`);
}

const numArr = [1, 2, 3, 4, 5];

for (let i = 0; i < numArr.length; i++) {
  console.log(`ยกน้ำหนัก ครั้งที่ ${numArr[i]}`);
}

let count = 0;
while (count < numArr.length) {
  console.log(`count #${numArr[count]}`);
  count++;
}

//foreach
numArr.forEach(function (num) {
  console.log(`Show num ${num}`);
});

numArr.forEach((num) => console.log(`num => ${num}`));

numArr.forEach((v, i, a) => console.log(`${v},${i},${a}`));

const person = {
  name: "James",
  age: 28,
  gender: "male",
};

//forin
for (const key in person) {
  console.log(`${key} => ${person[key]}`);
}

//forof
for (const num of numArr) {
  console.log(num);
}

const numArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumfor = 0;
let sumforeach = 0;
let sumforin = 0;
let sumforof = 0;

for (let i = 0; i < numArr1.length; i++) {
  numArr1[i] % 3 === 0 ? (sumfor += numArr1[i]) : null;
}

numArr1.forEach((num) => (num % 3 === 0 ? (sumforeach += num) : null));

for (const i in numArr1) {
  numArr1[i] % 3 === 0 ? (sumforin += numArr1[i]) : null;
}

for (const num of numArr1) {
  num % 3 === 0 ? (sumforof += num) : null;
}

console.log(`sumFor: ${sumfor},
            \nsumForEach: ${sumforeach},
            \nsumForIn: ${sumforin},
            \nsumForOf: ${sumforof}`);

//Map,Reduce,Sort,Filter
//สร้าง sqrNumbers[] ที่เอาแต่ละคำใน numbers(numArr1) มายกกำลัง

const sqrNumbers = [];

for (let i = 0; i < numArr1.length; i++) {
  sqrNumbers[i] = numArr1[i] * numArr1[i];
  console.log(sqrNumbers[i]);
  // sqrNumbers.push(numArr1[i]*numArr1[i])
}

/*
const sqrNumbers=numArr1.Map((num) => { 
     return num*num;
})*/

//หาผลรวมของ numbers
const SumNum = numArr1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sqrNumbers.reduce((acc, cur) => acc + cur));

const rndNumber = [1, 2, 4, 9, 5, 6, 3, 8, 7];
const sortedNum = rndNumber.sort((a, b) => a - b);

console.log(sortedNum);

const evenNum = sortedNum.filter((num) => num % 2 === 0);

console.log(evenNum);
