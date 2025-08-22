// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    { name: "민경", hobby: "애니"},
    { name: "주영", hobby: "애니"},
    { name: "순덕", hobby: "공물어오기"},
]

const animePeople = arr1.filter((item) => item.hobby == "애니");

console.log("arr1", animePeople);


// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
    // 이렇게 반환값을 설정하면 새 배열로 반환할 수 있다.
})

console.log("arr2", mapResult1);


// 객체 키만 반환받은 배열
let names = arr1.map((item) => item.name);
console.log(names);



// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log("arr3", arr3);


// 그러나, 숫자로 이루어진 배열은 sort 메서드 x (대소비교 x 사전순 o 메서드)
arr3 = [10, 3, 5];
arr3.sort();

console.log("숫자 arr3", arr3);


// 비교하고 싶다면 sort를 호출하면서 비교 기준을 설정하는 callback 함수를 함께 넘겨줘야 한다.
arr3 = [10, 3, 5];
arr3.sort((a, b)=>{
    // 2개의 배열 요소 a, b를 받아서 요소들을 비교할 때 뭐가 더 크고 작은 값인지 설정해줌

    if (a > b) {
        // 오름차순일 때 == b가 a 앞에 와라
        return 1;
        // return 양수   <-- 더 작은 값이 앞에 온다 -> b, a 배치
    }
    else if (a < b){
        // 오름차순일 때 == a가 b 앞에 와라
        return -1; // -> a, b 배치
    }
    else {
        // 두 값의 자리를 바꾸지 마라
        return 0; // -> a, b 자리를 그대로 유지
    }
    })



// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드 (sort랑 기능은 같으나 sort는 원본 배열을 수정)
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);     // 원본 그대로
console.log(sorted);   // 새로 반환된 배열



// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "min", "gyeong"];
const joined = arr6.join("-");
console.log(joined);