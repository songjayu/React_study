// 비동기작업 처리하기 1. Callback 함수


function add(a, b, callback){
    setTimeout(()=>{
        const sum = a + b;
        callback(sum);
    }, 3000);
}

add(1, 2, (value)=>{
    console.log(value);  // 함수를 인수로 넣음
});


// 비동기 처리의 결과값인 sum이라는 변수를 add 함수 바깥에서도 사용할 수 있게 만들자
// --> 비동기 처리의 결과를 또 다른 비동기 작업의 인수로 활용하는 방법.



// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    }, 3000);
}


function cooldownFood(food, callback){
    setTimeout(()=>{
        const cooldownFood = `식은 ${food}`;
        callback(cooldownFood);
    }, 2000)
}

function freezeFood(food, callback){
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}


orderFood((food)=>{
    console.log(food);

    cooldownFood(food, (cooldownedFood)=>{
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood)=>{
            console.log(freezedFood);
        });
    });
});

// 위 코드처럼 콜백함수 안에 콜백함수를 계속 넣으면 인덴트가 계속 깊어지는 '콜백지옥'을 마주하게 된다.
// 이를 개선하기 위해 사용하는 것이 비동기작업을 도와주는 Promise 객체