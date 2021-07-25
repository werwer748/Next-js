import Link from "next/link";
import { useRouter } from "next/router";

const name = () => {
    // const router = useRouter();
    const { query } = useRouter();
    // console.log(router)
    return(
    <div>
        <h2>Hello!! {query.name}</h2>
        <Link href="/">Move to '/'</Link>
    </div>
    )
}

export default name;