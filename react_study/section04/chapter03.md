##### `npm run dev`를 통해 나온 로컬호스트 주소는 어디서 나온 걸까? 또 우리는 어떻게 이 주소로 리액트앱에 접속할 수 있을까?

: vite를 통해 생성한 리액트앱에는 사실 웹서버가 내장되어 있었음. 그리고 리액트앱을 가동하기 위해 사용했었던 **npm run dev는 이런 리액트 내부의 웹서버를 가동시키는 명령어**였다.

- localhost:XXXX라는 주소는 내 컴퓨터에서 현재 실행 중인 리액트 웹 서버에 접속할 수 있는 주소

- **localhost** : 내가 쓰고 있는 컴퓨터

- (숫자) : 포트번호 (하나의 컴퓨터 내에서 여러 대의 서버를 동작시키기 위해 필요한 주소 체계)
  - 하나의 PC에서 여러 개의 서버가 동작하고 있을 때 주소로만 요청을 받게 되면 어떤 서버의 요청에 응답해야 되는지 모르기에 이걸 막기 위해서 컴퓨터는 모든 프로그램이 실행될 때마다 자동으로 고유한 포트 번호를 붙여줌
    - ex) 리액트 서버 –> 5173, PHP 서버 –> 3344
    - localhost:5173이라는 요청이 들어오면 리액트 서버로 온 요청임을 파악할 수 있다.



-----

##### `createRoot()` 메서드 : 인수로 전달받은 HTML 요소를 리액트의 루트(뿌리)로 만들어주는 역할

`.render` : <App />이라는 컴퍼넌트 렌더링한다고 설정

- App.jsx 파일의 App() 함수, 즉 App 컴퍼넌트는 HTML 태그들을 리턴하고 있음

- 현재 HTML 태그들이 main.jsx에서 불러와져서 렌더 메서드를 통해 렌더링되고 있다.



##### 📝 main.jsx

```react
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

```

##### 📝 App.jsx

```react
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {   // HTML 태그들을 리턴하고 있음
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

```





---



### ✨ 리액트가 작동하는 방식 정리

리액트는 **index.html**에서 **main.jsx**라는 자바스크립트 파일을 실행하는데 이 자바스크립트 파일에서는 **app.jsx** 파일에 저장되어 있는 **App 함수**가 리턴하는 **html 요소들을** **화면에 렌더링** 시켜주고 있다.