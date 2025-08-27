### ✨ section06을 시작하기 위한 초기세팅 (혼란을 줄이기 위해 배울 내용 빼고 전부 삭제)

- assets 폴더의 react.svg 파일 삭제
- public 폴더의 vite.svg 파일 삭제
- App.jsx의 reactLogo, viteLogo의 import문 삭제
- App.jsx의 const [count, setCount] = useState(0)와 관련 import문, return값도 전부 삭제
- App.css, index.css 파일 내용 전부 삭제
- main.jsx의 <strictMode> 삭제
- eslint.config.js 파일의 rules에서 'no-unused-vars': "off" (실제로 사용하지 않는 변수가 있을 때 오류로 알려주는 옵션), "react/prop-types": "off", 추가