// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr){
    console.log(idx, item*2);
})
// 매개변수 = (현재 요소의 값, 현재 반복 카운트, 전체 배열의 값)
// 콜백함수는 배열의 요소의 개수만큼 호출됨 (총 3회)
// (1, 0, arr), (2, 1, arr), (3, 2, arr)


let doubledArr = [];

arr1.forEach((item, index, arr)=>{
    doubledArr.push(item*2);
    console.log(doubledArr);
})



// 2. includes
// : 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

console.log(isInclude);



// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

console.log(index);
// 만약 해당 값이 중복된다면 앞에서부터 탐색하기에 가장 앞의 인덱스를 반환
// 만약 값이 존재하지 않으면 -1을 반환



// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// '가장 먼저 발견된' 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];

const findedIndex = arr4.findIndex(
    (item)=>item % 2 !== 0)

    // 조건 만족안하면 -1 반환

console.log(findedIndex);



///// indexOf vs findIndex
// indexOf는 얕은 비교라서 참조값을 기준으로 비교되어서
// 프로퍼티를 기준으로는 비교가 x (특히 원시 타입이 아닌 객체 타입일 때는 찾기 힘들겠지)


// 정리
// indexO는 얕은 비교라서 객체 값은 못찾고
// findIndex는 콜백함수를 이용해서 특정 프로퍼티의 값을 기준으로 비교할 수 있음
// 그래서 복잡한 객체 값도 조건식만 잘 만들어주면 쉽게 찾아낼 수 있는 장점이 있다.

// --> 원시 타입의 값을 찾을 때 : indexOf
// --> 복잡한 객체 타입의 값을 찾을 때 : findIndex



// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    { name: '민경'},
    { name: '순덕'},
];

const finded = arr5.find((item) => item.name === "민경");
// 인덱스가 아니라 값 자체를 반환합니다.

console.log(finded);