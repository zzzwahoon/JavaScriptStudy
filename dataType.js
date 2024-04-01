// 데이터 타입

// 원시값(primitive)
// 원시 값은 불변한다(상수)
// 1. 숫자 타입
const a = 10 + 1;   // 11, 표현식 === 값

1       // 정수
1.1     // 실수
        // 하지만 javaScript는 정수 type는 없고 실수 type만 존재한다. 
console.log(1 === 1.0); // true

// 2. 문자열 타입
console.log('abc' === "abc");   // true
                                // 'abc' 과 "abc" 같지만 한가지로 일관성 있게 통일하자

const n = 10;
console.log('n은 ' + n + '입니다.');
console.log(`n은 ${n}입니다.`);

// 3. 불리언 타입
const b = true;
const c = false; 
console.log(b || c);

// 4. undefined 타입
let d;              // 초기화 하지않고 변수 선언
console.log(d);     // undefined

// 5. null 타입
const e = null;     // null : 비어있다, 아무것도없다.

// 6. symbol 타입
const f = {
    // color = 'red';
}

// 7. Bigint
//const num = 11111111111111111;    // 2^53 보다 큰 수는 작성할 수없다.
const num = 11111111111111111n;     // 갑 뒤에 n을 붙인다.

// 객체 타입 (원시값이 아닌 값)
// 배열
const arr = [1, 2];     // 배열은 순서대로 "여러 값"을 가지고 있다
arr[0] = 3;             // 
console.log(arr);