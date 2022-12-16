import {useLocation, useNavigate} from "react-router-dom";


export default function Detail() {
    const location = useLocation()
    const {char} = location.state
    const navigate = useNavigate();

    return (
        <section>
            <h1>{char}</h1>
            <button className={"section-btn"} onClick={() => {
                navigate("/")
            }
            }>Back</button>
        </section>
    )
}