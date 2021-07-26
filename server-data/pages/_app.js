//app 컴포넌트는 모든 페이지의 공통페이지 역할
/*
1. 페이지들의 공통된 레이아웃
2. 페이지를 탐색할 때 상태 유지
3. 추가 데이터를 페이지에 주입
4. 글로벌 CSS 추가
*/

import Header from './components/Header';
//에러페이지를 위한 useEffect!
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   throw Error;
  // },[])
  return (
    <>
      <Header />    
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          margin: 0;
          font-family: Noto Sans, Noto Sans KR;
        }
      `}</style>
    </>    
  )
}

export default MyApp
