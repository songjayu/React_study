## JSX란?

- 원래 **JS**는 HTML을 리턴하는 게 문법적 오류
- **React.js**에서는 **JSX 문법**을 사용하므로 적법하다고 판단한다.

##### `JSX`(Java Script eXtentions) : 확장된 자바스크립트의 문법

- JS와 HTML을 혼용할 수 있게 된다.

```react
const Footer = () => {
    const myCat = "순덕이"

    return (
        <footer>
            <h1>{myCat}는 귀여워~</h1>
        </footer>
    );
};

export default Footer;

// 이런 게 가능해짐
```

```react
const Main = () => {
    const number = 10;

    return (
        <main>
            <h1>main</h1>
            <h2>{number % 2 === 0? "짝수" : "홀수"}</h2>
        </main>
    )
}

export default Main;

// 삼항연산자 활용 가능
```

---

## 🤔 JSX 주의 사항

#### 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.

- {} 안에 if문이나 for문 넣으면 안되고 **한 줄 자체로서 평가될 수 있는 값**을 넣어야 함.



#### 2. 숫자, 문자열, 배열 값만 렌더링 된다.

- **{true}, {undefined}, {null}** 같은 거 렌더링은 가당치도 않다.

- **객체값은 그대로 렌더링할 수 없고**, 안의 특정한 값을 명시해야 렌더링할 수 있다.

  ```react
  // 예시
  const Main = () => {
      const obj = {a : 1};
  
      return (
          <main>
              <h1>main</h1>
              <h2>{obj.a}</h2>  // 점 표기법으로 객체 내부의 값을 명시함.
          </main>
      )
  }
  
  export default Main;
  ```



#### 3. 모든 태그는 닫혀있어야 한다.

- HTML과 다르게 **이미지 태그도 닫혀있어야 함** <img>
  - </img> 처럼 **셀프 클로징**하는 방법도 있음.



#### 4. 최상위 태그는 반드시 하나여야만 한다.

- ```react
  // 이러면 오류 --> 최상위 태그가 <div>, <main> 2개
  const Main = () => {
      return (
          <div></div>
          <main>
              <h1>main</h1>
          </main>
      )
  }
  ```

- 감쌀만한 최상위 태그가 없다면 **빈 태그**로 감싸도 된다.

  - ```react
    const Main = () => {
    
        return (
            <>
                <h1>main</h1>
            </>
        )
    }
    ```

  - 이러면 문법상에서는 최상위태그가 하나 있다고 판단하지만, **렌더링될 때는 최상위 태그가 없는 것처럼** 렌더링 된다.

---

## ✨ 실습

```react
const Main = () => {
    const user = {
        name: "민경",
        isLogin: "true",
    } // 현재 접속한 유저의 상태를 저장하는 변수
    return (
        <>
            {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
        </>
    )
}
```

✅ isLogin이 true면 로그아웃 버튼이 보이고, false면 로그인을 해야 하니 로그인 버튼이 보인다.

---

## ✨ DOM 요소에 스타일을 적용하는 방법

#### JSX에서 스타일을 설정하는 방법

- 1️⃣ : **요소에 직접** 스타일 속성을 설정하는 방법

  - ```react
    const Main = () => {
        const user = {
            name: "민경",
            isLogin: "true",
        } // 현재 접속한 유저의 상태를 저장하는 변수
        return (
            <>
                {user.isLogin ? <div style={{
                    backgroundColor: "red",  // 
                    borderBottom: "5px solid blue",
                }}>로그아웃</div> : <div>로그인</div>}
            </>
    // 스타일 속성을 쓸 때는 css식으로 border-bottom처럼 안쓰고, 카멜케이스로 적어야 한다.
        )
    }
    ```

- 2️⃣ : **별도의 CSS 파일**을 만들어서 스타일링을 적용하는 방법

  - components 폴더에 해당 컴포넌트(ex. **Main.jsx**)를 위한 CSS 파일(**Main.css**)을 만든다.

  - ```css
    .logout{
        background-color: red;
        border-bottom: 5px solid green;
    }
    ```

  - Main.css를 Main.jsx에 모듈시스템으로 불러온다. (import)

  - ```react
    import "./Main.css";
    
    const Main = () => {
        const user = {
            name: "민경",
            isLogin: "true",
        } // 현재 접속한 유저의 상태를 저장하는 변수
        return (
            <>
                {user.isLogin ? <div className="logout">로그아웃</div> : <div>로그인</div>}
            </>
        )
    }
    ```

  - 원래 **HTML**에서는 클래스를 부여하는 속성의 이름이 **class**인데 **JSX는 className**