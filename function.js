// 함수의 정의
// 함수 선언문
function add1 (a, b){
  return a + b;
}

// 함수의 호출
const result = add1(1,2);
console.log(result); // 3

// 함수 표현식
const add2 = function (a, b) {
  return a + b;
};
const result2 = add2(1, 2);
console.log(result2);

// 화살표 함수
const add3 = (a, b) => a + b;
const result3 = add3(1, 2);
console.log(result3);

const result4 = add1(1);  // 만약에 (a, b)중에 한 값만 넣어준다면?
console.log(result4);     // NaN
                          // 이런 경우가 나타나지 않게 인수를 부족하게 기입할시 에러를 발생시키는 if문을 추가해주는게 좋다

function add5 (a, b) {
  // if (typeof a === 'number' || typeof b === 'number') {}
  return a + b;
}
console.log(add5('a', 'b'));

function add6(a, b) {
  const x = 1;
  return a + b;
}
// console.log(x);

const x = 100;

function add7(a, b) {
  return x + a + b;
}
function sub1(a,b) {
  return x - a - b;
}
console.log(add7(1, 2));  // 103

// 조건문
const num = 0;

if (num === 0) {
  console.log('Zero');
} else if (num % 2 === 0) {
  console.log('Even');
} else {
  console.log('Odd');
}

console.log(num % 2 === 0 ? 'Even' : 'Odd'); // 삼항조건
console.log(num === 0 ? 'Zero' : num % 2 === 0 ? 'Even' : 'Odd')

// 반복문 (for, while)
// for = 얼마나 반복하는지 알고있을때
// while = 반복은 하지만 몇번 도는지 모를때
// 주어진 횟수만큼 인사하는 함수 호출
function sayHi(n) {
  // i = 0, n = 3
  for (let i = 0; i < n; i++) {
    console.log(i);     // 0, 1, 2
    console.log('Hi');
  }
}
sayHi(3)

