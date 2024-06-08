
import './HomeSkeleton.css'

function HomeSkeleton() {
    return (
        <div className="home-container || container">
            
            <h1 className='title'>Posts</h1>
            <div className="posts-grid">
                {Array.from({ length: 20 }).map((_, index) => (
                    <div key={index} className="post skeleton">
                        <div className="skeleton-img"></div>
                        <div className="skeleton-title"></div>
                        <div className="skeleton-body"></div>
                    </div>
                ))}
            </div>
            <div className='pagination '>
                {Array.from({ length: 3 }, (_, i) => i + 1).map(num => (
                    <button key={num} className="skeleton || skeleton-btn">
                        <span className="skeleton-pagination">{num}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default HomeSkeleton
