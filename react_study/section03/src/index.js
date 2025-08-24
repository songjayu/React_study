// CommonJS
// const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// console.log(moduleData);


// 브라우저가 아닌 Node.js로 실행하려면 터미널에 'node (실행할 파일 이름)' 입력
// 근데 파일경로명이 복잡해질 수 있으니까 package.json에 있는 패키지 스크립트를 이용한다.
// "start라는 이름을 'node (파일 경로)'에 매칭" --> start만 입력하면 'node (파일 경로)' 실행
// npm run start 입력


// const {add, sub} = require("./math");    // 객체의 구조분해할당 사용 가능

// console.log(add(1, 2));
// console.log(sub(1, 2));





// ESM
// ESM에서는 모듈의 확장자(.js)까지 명시해야 한다.
import mul, {add, sub} from "./math.js";  // math 모듈의 default 함수 (그냥 불러와도 어떤 함수를 지칭하는지 아니까, 불러올 때 이름 마음대로 설정 가능 --> mul)

import randomColor from "randomcolor";  // 라이브러리를 쓸 때는 경로를 명시하는 게 아니라 from 뒤에 라이브러리 이름만 명시하면 된다.

const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(3, 2));

