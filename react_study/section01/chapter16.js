// 1. 상수 객체
const animal = {
    type: "고양이",
    name: '순덕이',
    color: '그레이',
};

animal.age = 2; // 추가
animal.name = "잉키"; // 수정
delete animal.color; // 삭제

// 2. 메서드
//      -> 값이 함수인 프로퍼티임

const person = {
    name: "민경",
    
    //메서드 선언
    sayHi() {
        console.log("안녕!");
    },
}

person.sayHi();
person["sayHi"]();


// 연습
let funcs = {
    sayhello1: () => {
        console.log("sayhello1");
    },
    sayhello2(){
        console.log("sayhello2");
    }
}

funcs.sayhello1();
funcs.sayhello2();