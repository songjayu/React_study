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

export default Main;