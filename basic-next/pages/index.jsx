// '/' 경로를 가지는 페이지

// import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/router"

const App = () => {
    const [ name, setName ] = useState("");
    const router = useRouter();
    return (
        <div>
            <button type="button" onClick={() => router.push("/tomato")}>
                tomato로 가기
            </button>
            <p>이름</p>
            <input
                value={name}
                onChange={(e)=> setName(e.target.value)}
                style={{marginRight: "12px"}}
            />
            <button type="button" onClick={()=> router.push(`/vegetable/${name}`)}>
                {name}으로 가기
            </button>
        </div>
    )
}

export default App;

//?는 필수 값이 아님을 뜻한다.

//href: string 값으로 이동할 경로 또는 URL
//as?: string 값으로 브라우저의 URL에 표시될 값
//replace?: boolean값으로 브라우저의 history 스택에 url을 추가하지않고 현재 상태를 변경함
//scroll?: boolean값으로 스크롤을 맨 위로 이동할지 설정하는 값 기본값은 true
//shallow?: boolean 값으로 서버에서 데이터를 불러오는 작업을 스킵 할 때 사용한다. 기본값 false
//passHref?: boolean값으로 자식에게 href를 전달하게 된다. 리액트 컴포넌트에 href를 전달할 수 있게 됨
//prefetch?: boolean 값으로 백그라운드에서 페이지를 미리 가져오게 된다. 브라우저 화면의 Link컴포넌트 페이지들을 미리 가져오게 되며 기본값은 true