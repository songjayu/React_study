// 1. Date 객체를 생성하는 방법
let date1 = new Date();  // new라는 키워드와 함께 새 객체를 생성하는 Date같은 내장함수를 생성자라고 한다.
// Date() 생성자 안에 아무것도 안넣으면 현재 시간을 저장하는 Date 객체로 생성된다.
console.log(date1);

let date2 = new Date("2001-12-10/10:10:10");  // 2001.12.10, 2001/12/10로도 쓴다
console.log(date2);



// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초(협정세계시-UTC)"로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();  // Date 객체 안에 저장된 시간의 타임스탬프를 계산해서 반환한다.
console.log(ts1);


// 타임스탬프는 새로운 Date 객체를 생성하는 데에도 이용될 수 있다.
let date4 = new Date(ts1);
// 타임스탬프에 해당하는 시간으로 객체가 생성된다.

console.log(date1, date4);



// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth()+1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year,
    month,  // +1 안하면 0부터 시작하기에 8월이지만 7로 나온다. 
    date,
    hour,
    minute,
    seconds,
);



// 4. 시간 수정하기
date1.setFullYear(2024);
date1.setMonth(2);   // 0부터 시작하는 인덱스라서 실제로는 3월임을 유의
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);  // 변경됨



// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());   // 시분초를 제거
console.log(date1.toLocaleString());  // 우리나라에 맞게 현지화된 형태로 시간이 문자열로 출력