console.log(1 + 2);           // 더하기
console.log(2 * 5);           // 곱하기
console.log(1 / 3);           // 나누기
console.log(1 / 2);

console.log(0.1 + 0.2);       // 프로그램언어의 오류 (2진수로 바꾸면서 발생하는)

console.log(11 % 2);          // 나눈 뒤 나머지

// 단항 산술 연산자
// ++ 증가
// -- 감소
// + 어떤 효과도 없다
// - 양수를 음수로, 음수를 양수로 반전한다
let a = 1;
let b = 1;
let c = 1;
a++;
console.log(a)
b = b + 1;
console.log(b)
c += 1;
console.log(c)

const n = '123';
console.log(typeof n);
console.log(typeof +n); // string을 number로

console.log(1 + 2);     // 3 
console.log(1 + '2');   // 12
                        // +는 좌항과 우항중 하나라도 문자열일때 문자열 연결 연산자로 작동한다

// 비교
console.log(1 == '1')   // true
                        // == 는 좌항과 우항을 같은 타입으로 만든후 비교한다
console.log(1 === '1')  // fasle
                        // == 는 사용하지 말고 ===를 사용해라


const x = NaN
console.log(1 * '2');           // 2
console.log(1 * 'a');           // NaN
console.log(1 * x);             // NaN
// console.log(x === Nan);
console.log(Number.isNaN(x));   // true

// truthy / falsy values
// falsy value = 0, '', null, undefined, NaN, false 
//             = boolean 값이 false
// falsy value 이외의 모든 값은 truthy value

// 논리 연산자
// || = 논리합(OR)
// && = 논리곱(AND)
// ! = 부정(NOT)

// 타입 변환
// 문자열 타입으로 변환
// string => number
const str = '123';

console.log(+str);
console.log(Number(str));
console.log(str * 1);
console.log(parseInt(str, 10));

// number => string
const num = 123;
console.log(num + '');
console.log(String(n));
console.log(n.toString());
