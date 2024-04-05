const arr = [1, 2, 3, 4];
arr.push(1);       // array 뒤에 하나씩 추가
                    // mutator
console.log(arr);

const res = arr.concat(1); // accessor 
console.log(arr);
console.log(res);

// 디스트럭처링 할당
// 기존
var arr2 = [1, 2, 3];

var one   = arr[0];
var two   = arr[1];
var three = arr[2];

console.log(one, two, three); // 1 2 3

// 디스트럭처링
const arr3 = [1, 2, 3];

// ES6 배열 디스트럭처링 할당
// 변수 one, two, three를 선언하고 배열 arr을 디스트럭처링하여 할당한다.
// 이때 할당 기준은 배열의 인덱스다.
const [one1, two2, three3] = arr3;

console.log(one1, two2, three3); // 1 2 3

//
const [x, y] = [1, 2];
console.log([x,y]);

let x2, y2;
[x2, y2] = [1, 2];
console.log([x2,y2]);

//
const [a, b] = [1, 2];
console.log(a, b); // 1 2

const [c, d] = [1];
console.log(c, d); // 1 undefined

const [e, f] = [1, 2, 3];
console.log(e, f); // 1 2

const [g, , h] = [1, 2, 3];
console.log(g, h); // 1 3

//
// 기본값
const [a2, b2, c2 = 3] = [1, 2];
console.log(a2, b2, c2); // 1 2 3

// 기본값보다 할당된 값이 우선한다.
const [e2, f2 = 10, g2 = 3] = [1, 2];
console.log(e2, f2, g2); // 1 2 3

//
const arr4 = [1, 2, 3, 4];
const copy = arr4.slice();
console.log(copy);

const copy2 = [...arr4];
console.log(copy2);
