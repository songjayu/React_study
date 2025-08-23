// 비동기작업 처리하기 2. Promise


function add10(num){  // add10 함수 안에서 Promise가 생성
    const promise = new Promise((resolve, reject)=>{ // executor 함수에는 이 두 가지 매개변수가 전달됨
    // resolve에는 성공 상태로 바꾸는 함수가, reject는 실패 상태로 바꾸는 함수가 들어있음.
    // 그래서 executor에서 실행하는 비동기 작업이 성공했다고 알리고 싶으면 이후 resolve() 함수를 호출

    // 비동기 작업을 실행할 콜백함수(=executor)가 들어감
    // 프로미스 객체를 생성하면서 인수로 전달되는 콜백 함수를 executor 함수라고 부름

    setTimeout(() => {
        //console.log("ㅎㅇ");
        //resolve("하이");   //  이거 해야 Promise 상태가 fulfilled로 바뀜
                           // resolve() 안에 인수 넣으면 PromiseResult에 "하이" 들어감

        //reject("왜 실패했는지 이유...")   // Promise 상태가 rejected 됨

        if (typeof num === "number"){
            resolve(num + 10);
        } else {
            reject("num이 숫자가 아닙니다.");
        }
    }, 2000);

});
    return promise;  // add10이 promise를 반환
}







// Promise 객체의 값을 이용하자.
// --> Promise 객체의 메서드인 then이라는 메서드를 호출해야 함 (then == "그후에")

promise
.then((value)=>{
    // execute 함수에서 resolve를 호출하면 그후에 then 메서드에 저장한 콜백 함수를 실행함
    // 그러면서 동시에 resolve의 인수로 전달한 '결과값(PromiseResult에 있는 것)을 매개변수'로까지 제공해줌.

    console.log(value);

    // then 메서드를 이용하면 "fulfilled일 때" 프로미스로 관리하는 비동기 작업의 결과값을 불러와서 이용할 수 있다.
})
.catch((value)=>{
    //"rejected"일 때 결과값을 사용할 수 있는 메서드
    console.log(value);

    // then, catch 메서드의 호출 결과는 "프로미스를 반환"한다.
    // 그래서 then(catch) 뒤에 catch(then)을 붙여쓸 수 있음
})
// 이렇게 then과 catch를 연달아서 사용하는 문법 == Promise chaining


// console.log(promise); // promise를 출력해서 속성을 보면 PromiseState가 pending이라고 쓰여있음.





const p = add10(0);  // 함수 내부에서 새로운 프로미스 객체가 생성되면서
                     // 비동기 작업이 실행되고 해당하는 프로미스 객체가 반환됨

p.then((result)=>{   // 그냥 add10(10).then() 해도 됨
    console.log(result); // 10 출력

    const newP = add10(result);
    //newP.then((result)=>{     // 이 안에 then이 들어가면 콜백지옥 시작 모양
    //    console.log(result);  // 20 출력 (10+10) --> 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 넣었다.
    // });
    return newP;  // 원래는 아무것도 반환하지 않지만, 
    // then 안에서 새롭게 then이 된 비동기 작업이 있다면 전체 then 메서드의 값에서(p.then()))
    // 그걸 리턴했을 때 새로운 프로미스의 값으로 반환된다.
    // p.then().then() 모양 가능 --> 콜백지옥을 방지하기 위함!
}).then((result)=>{
    console.log(result);
})




// 리팩토링
add10(0)
.then((result)=>{
    console.log(result);
    return add10(result);
})
.then((result)=>{
    console.log(result);
    return add10(result);
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{  // 에러 날 가능성이 있으니 rejected 분기도 넣어줌
    console.log(error);
})