# 반복문으로 배열과 객체 순회하기

## 순회(iteration)란?

: 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함.



**ex) 배열 순회**

```
let numbers = [1, 2, 3];
```



**ex) 객체 순회**

```
let person = {
name: "민경",
age: 25,
cat: "순덕",
};
```



```
// 1. 배열 순회
let arr = [1, 2, 3];

// 1. 배열 인덱스
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


let arr2 = [4, 5, 6, 7, 8];
for (let i=0; i<arr2.length; i++){
    console.log(arr2[i]);
}


// 1.2 for of 반복문
for (let item of arr){
    console.log("for of 반복문",item);
}





// 2. 객체 순회
let person = {
    name: "민경",
    age: 25,
    cat: "순덕"
};


// 2.1 Object.keys 사용
// 객체에서 키 값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);
console.log("Object.keys",keys);


// 방법 1.
for (let i=0; i<keys.length; i++){
    console.log("방법1",keys[i]);
}

// 방법 2.
for (let key of keys){
    console.log("방법2", key);
}


// key, value 모두
for (let key of keys){
    let value = person[key];
    console.log(key, value);
}


for (let i=0; i<keys.length; i++){
    let value = person[keys[i]]
    console.log(keys[i], value);
}




// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values){
    console.log("Object.values", value);
}



// 2.3 for in
for (let 키 in person){
    console.log("for in",키);
}
```







## 주의

- **for of** : 배열에만 씀 (값 중심)
- **for in** : 객체에만 씀 (key 중심)

**파이썬은 for in으로 배열 순회할 수 있어서 헷갈렸음.**