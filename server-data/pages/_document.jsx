//html ,body태그 보강
/*
<title>,<description>,<meta> 등 프로젝트의 정보를 제공하는 HTML 코드를 작성할 수 있다.
폰트나 외부 api,cdn 등을 불러오도록 할 수 있다.
CSS-in-JS의 서버사이드 렌더링을 위한 설정을 할 때 사용한다.
*/

import Document, { Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render(){
        return (
            <Html lang="ko">
                <Head>
                    <meta name="title" content="깃허브 레파지토리" />
                    <meta name="description" content="깃허브 레파지토리 리스트입니다." />
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,700;1,400&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;