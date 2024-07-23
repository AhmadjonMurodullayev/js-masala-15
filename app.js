// 1.Berilgan foydalanuvchilar massividan yoshiga 
// ko'ra foydalanuvchilarni filtrlash
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 15 }
];

function filterAdultUsers(users) {
let users2 = users.filter(user => user.age >= 18)
return users2
}
console.log(filterAdultUsers(users));
 // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]

// 2.Berilgan ikki o'lchovli massiv (matritsa) 
// ichidagi nol elementlarning indekslarini toping.

function findZeroIndices(matrix) {
    let sum= []
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix.length; j++) {
        if(matrix[i][j] == 0){
            sum.push([i,j])
        }
 }
}
return sum
}

 console.log(findZeroIndices([
     [1, 0, 3],
     [4, 5, 0],
     [7, 0, 9]
 ])); 
 // Output: [[0, 1], [1, 2], [2, 1]]



//  3.Berilgan sonli massivdagi eng ko'p takrorlangan
//   elementni toping. Agar bir nechta element teng takrorlangan
//    bo'lsa, ulardan birini qaytaring.

  function mostFrequentElement(arr) {
    let map = arr.reduce((map, current) => {
        map[current] = (map[current] || 0) + 1;
        return map;
      }, {});
      let num = 0;
      let max = 0;
      for (let key in map) {
        if (map[key] > max) {
          max = map[key];
          num = key;
        }
      }
      return Number(num);
    
 }
 console.log(mostFrequentElement([1, 3, 3, 2, 1, 1, 4, 4, 4, 4, 5, 6, 6])); // 4


//  4.Berilgan ikki o'lchovli massivni (matritsa)
//   90 daraja o'ngga burang.
function rotateMatrix(matrix) {
    let res = [];

    for (let i = 0; i < matrix.length; i++) {
      let sum = [];
      for (let j = 0; j < matrix.length; j++) {
        sum.push(matrix[j][i]);
      }
      sum.reverse()
      res.push(sum);
    }
    return res;    

}

console.log(rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])); 
// Output: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

// 5.Berilgan massivdagi faqat bir marta 
// uchraydigan elementlarni qaytaring.

function filterUniqueElements(arr) {
    let arr5 = arr.filter((item) => {
        return arr.indexOf(item) === arr.lastIndexOf(item);
      });
      return arr5; 
 }
 
 // Test case
 console.log(filterUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 3, 5]


// 6.Berilgan sonlar qatorini k qadamga
//  o'ngga rotatsiya qiling.
 function rotateArray(nums, k) {
    for(let i = 0; i < k; i++){
        nums.unshift(nums.pop())
    }
    return nums
}

// Test case
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); 
// Output: [5, 6, 7, 1, 2, 3, 4]