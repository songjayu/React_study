
const moduleData = require("./math");


console.log(moduleData);

// 브라우저가 아닌 Node.js로 실행하려면 터미널에 'node (실행할 파일 이름)' 입력
// 근데 파일경로명이 복잡해질 수 있으니까 package.json에 있는 패키지 스크립트를 이용한다.
// "start라는 이름을 'node (파일 경로)'에 매칭" --> start만 입력하면 'node (파일 경로)' 실행
// npm run start 입력