function returnFalse(){
    console.log("false 함수")
    return undefined; //falsy한 값
}

function returnTrue(){
    console.log("true 함수");
    return 10; //truthy한 값
}

console.log(returnFalse() && returnFalse());
console.log(returnTrue() || returnTrue());


// 단락 평가 활용 사례

function printName(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({name:"순덕이"})