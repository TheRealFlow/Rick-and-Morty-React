import {useLocation, useNavigate} from "react-router-dom";


export default function Hello() {
    const location = useLocation()
    const {name} = location.state
    const navigate = useNavigate();

    return (
        <>
            <h1>Hello {name}</h1>
            <button onClick={() => {
                navigate("/")
            }
            }>Back</button>
        </>
    )
}