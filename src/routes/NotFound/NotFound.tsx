import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>NotFound</h1>
            <button onClick={() => navigate('/', { replace: true })}>Back</button>
        </div>
    )
}

export default NotFound