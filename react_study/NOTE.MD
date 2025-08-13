# 콜백함수
## : 함수 뭐 실행되면 그 다음번에 이후에 따라서 오는 함수
그래서 콜백함수다.
```
//1. 콜백함수
function main(value){
    console.log(value);
}


main(() => {
    console.log('난 익명함수')
})


// 2. 콜백함수의 활용
function repeat(count, callback){
    for (let idx = 1; idx <= count; idx++){
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx * 3);
});
```
<br><br><br>

# 스코프
에서 배운 것<br>
### --> 함수도 전역 함수랑 지역 함수가 있는데 한 번 감싸면 전역 함수고 2번 감싸면 그 안에 있는 것은 지역 함수임.<br>
### -> 근데 전역 범위에서 호출할 수 있는 건(존재를 알고 있는 건) 전역 함수임. 즉 `전역 범위에서 지역 함수는 불어올 수 없음,`