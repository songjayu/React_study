// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4);
// push 메서드는 메서드 수행 이후 반환된 배열의 길이를 반환

console.log(arr1);
console.log(newLength);


// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 제거된 요소를 반환
let arr2 = [1, 2, 3, 4];
const poppedItem = arr2.pop();

console.log(poppedItem);
console.log(arr2);


// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(shiftedItem);


// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드, 변경된 길이 반환
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

console.log(arr4);
console.log(newLength2);



// 3, 4의 shift와 unshift는 push와 pop보다 느리게 동작함
// pop, push는 뒤에 붙여주면 되는데
// shift, unshift는 인덱스를 하나씩 당겨줘야(shift) 하기 때문



// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5];
let sliced1 = arr5.slice(2, 5); // 2번 인덱스(3)부터 5-1번 인덱스(5)까지
let sliced2 = arr5.slice(2,);
let sliced3 = arr5.slice(-3);

console.log(sliced3);
console.log(arr5); // 원본 배열은 바뀌지 않는다


// 6. concat
// 두 개의 서로다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = ["안", "녕"];
let arr7 = ["하세", "요"];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);