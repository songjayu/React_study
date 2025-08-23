// math 모듈

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

// 모듈이라는 내장 객체에 exports라는 프로퍼티의 값으로 객체를 저장한다.
// 이러면 CommonJS 모듈 시스템에 의해서 이 두 개의 값이 Math 모듈로부터 내보내지게 된다.
// 내보내진 값들은 index 같은 다른 모듈에서 내장 함수인 require을 이용해서 이 모듈의 경로를 인수로 전달하면서 불러와서 사용할 수 있다.
module.exports = {
    add: add,  // add 라고만 해도 알아먹음
    sub: sub,  // 얘도 sub
}
