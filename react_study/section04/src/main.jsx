import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(  // 인수로 전달받은 HTML 요소를 리액트의 루트(뿌리)로 만들어주는 역할 --> HTML의 root ID가 뿌리가 됨
                                          // .render <-- <App />이라는 컴퍼넌트 렌더링한다고 설정
// App.jsx 파일의 App() 함수, 즉 App 컴퍼넌트는 HTML 태그들을 리턴하고 있음
// --> 현재 HTML 태그들이 main.jsx에서 불러와져서 렌더 메서드를 통해 렌더링되고 있다.

  <StrictMode>
    <App />  
  </StrictMode>,
)
