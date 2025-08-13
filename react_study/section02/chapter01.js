// 참(거짓) boolean은 아니지만 조건문 내에서 참(거짓)으로 평가되는 값
// JS의 모든 값은 Truthy하거나 Falsy함

// 1. Falsy한 값
let f1 = undefined
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f4){
    console.log('Falsy');
}

// 2. Truthy 한 값
// -> 7개의 falsy한 값 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};


// 3.활용 사례
function printName(person){
    if (!person){   //좋다
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name)
}

let person = {name : "주영상"};
printName(person)