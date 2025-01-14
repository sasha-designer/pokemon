import { useSearchParams } from "react-router-dom"


export default function Search() {

    const [searchParams] = useSearchParams()
    const param = searchParams.get('pokemon')
    console.log(param)
    return (
        <div>
            <h1>Search</h1>
        </div>
    )
}