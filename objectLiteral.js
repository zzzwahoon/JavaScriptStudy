// 객체랑 0개이상의 property로 이루어져있다.
// property 간의 순서는 상관없다

// const todo = [
//   { id: 3, content: 'Javascript', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'HTML', completed: false }
// ];
const todo = { id: 3, content: 'Javascript', completed: false };

console.log(todo.id);
console.log(todo.completed);

// 배열은 순서가 상관 있다

const arr = [1, 2, 3, 4];

console.log(arr[1]); // 2


// 배열 arr을 순회한다.
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  // sum = sum + arr[i];
}
console.log(sum);