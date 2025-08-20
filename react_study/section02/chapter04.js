// 1. spread 연산자
// -> spred : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c : 3,
    d : 4,
};

// function funcA(p1, p2, p3) {
//     console.log(p1, p2, p3);
// }

// funcA(...arr1);




// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

// one에는 인자의 첫 값이 저장되고, 이후 나머지 인자들이 rest에 저장됨(2, 3, 4, ...)
function funcB(one, ...rest){ // 1. rest 매개변수 뒤에는  ,four 못함
                                // 2. ...rest 말고 ...(아무말) 써도 됨
    console.log(rest);
}

funcB(...arr1);



let obj3 = (...rest) => {
    console.log(rest);
}


obj3([1,2,3,4,5,6,7])