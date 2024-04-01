// 변수 선언

// var a = 1; // 사용금지
let a;          // let : 변수 선언 키워드
                // a : 변수 이름 === 식별자(identifier)
// let a;       // 변수(식별자, identifier)의 중복 선언 에러 
                // 식별자, identifier는 중복될 수 없다.
                //SyntaxError: Identifier 'a' has already been declared

let b = 1;      // 초기화
console.log(b);

b = 2; // 재할당
console.log(b);

const c = 3;    // const로 변수 선언을 우선시!
                // 추후 재할당이 필요할떄 let으로 변경
// c = 2;       // 재할당 금지
console.log(b);

// const 123 = 1;       // 변수 이름은 숫자시작 불가

const _a = 1;           // 특수 기호는 _ 와 $만 가능
const $a = 1;

// const return = 1;    // return(예약어)또한 불가

const 가격 = 1;          // 한글도 가능은 하다

const firstName = 1;    // 카멜 케이스 (camelCase) - 가장 일반적인 케이스
const first_name = 1;   // 스네이크 케이스 (snake_case)
const FirstName = 1;    // 파스칼 케이스 (PascalCase)
                        // 하지만 회사마다 정해진 가이드라인이 존재

