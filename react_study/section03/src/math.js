// math 모듈

export function add(a, b){ // 함수 앞에 export 키워드를 붙여도 동작(ESM에서)
    return a + b;
}

export function sub(a, b){ // 함수 앞에 export 키워드를 붙여도 동작(ESM에서)
    return a - b;
}

export default function multiply(a, b){ // export 뒤에 default를 붙이면 multiply라는 함수는 default로서 내보내져서 math 모듈을 대표하는 단 하나의 기본값이 된다. 불러올 때 중괄호 없이 혼자 불러와야 함.
    return a + b;
}

function div(a, b){
    return a / b;
}

// commonJS
// 모듈이라는 내장 객체에 exports라는 프로퍼티의 값으로 객체를 저장한다.
// 이러면 CommonJS 모듈 시스템에 의해서 이 두 개의 값이 Math 모듈로부터 내보내지게 된다.
// 내보내진 값들은 index 같은 다른 모듈에서 내장 함수인 require을 이용해서 이 모듈의 경로를 인수로 전달하면서 불러와서 사용할 수 있다.

//module.exports = {
//    add: add,  // add 라고만 해도 알아먹음
//    sub: sub,  // 얘도 sub
//}





// ESM
// json 파일에 "type": "module"을 넣으면 패키지가 ES 모듈시스템을 사용하게 된다.
// export {add, sub};