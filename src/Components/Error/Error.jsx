import './Error.css'
function Error({ error }) {
    return (
        <div className="container">
            <div className="error-message">Error: {error}</div>
        </div>
    )
}

export default Error
