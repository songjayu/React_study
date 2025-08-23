// 비동기작업 처리하기 4. Async&amp;Await


// async
// : 비동기 함수로 만들어주고 싶은 함수 앞에 붙이는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

// 서버로부터 유저의 데이터를 받아오는 함수
async function getData(){  // 비동기함수가 되었다.
// --> 객체를 그대로 반환하는 함수가 아니라, 이 객체를 결과값으로 갖는 새로운 Promise 객체를 반환하는 함수로 변환

    return {
        name: "민경",
        cat: "순덕",
    };
}

console.log(getData());




async function getData2(){
    return new Promise((resolve, reject)=>{
        resolve({
            name: "민경",
            cat: "순덕",
        })
        }
    )  // 만약 원래 Promise가 반환되는 함수였다면
       // async가 별다른 기능은 안하고 그냥 프로미스 객체 자체를 반환한다.
       // --> async는 Promise를 반환하지 않는 함수에 붙여서 해당 함수가 비동기로 작동하도록 변환하는 기능을 한다.
}




// await    --> async는 await와 함께 사용했을 때 위력이 발휘된다.
// (async 함수 내부에서만 사용이 가능한 키워드)
// : 비동기 함수가 다 처리되기를 기다리는 역할


// then 메서드를 복잡하게 쓸 필요가 없어진다.
// --> then 메서드를 쓰지 않아도 알아서 getData 함수가 반환하는 promise가 종료되기를 그 라인에서 기다려준다.



// await 안썼을 때
async function printData(){
    getData().then((result)=>{
        console.log(result);
    })
}

printData();



// await 썼을 때
async function printData2(){
    const data = await getData()
    // then 메서드를 쓰지 않아도 알아서 getData 함수가 반환하는 promise가 종료되기를 기다린다.
    // 이후 종료가 되면 결과값(PromiseResult)을 반환한다.

    // --> 비동기 작업을 마치 동기 작업ㅇ르 처리하듯이 간결한 코드로 수행할 수 있다.

    console.log(data);
}

printData2();