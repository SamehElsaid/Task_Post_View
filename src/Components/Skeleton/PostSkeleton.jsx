import CommentSkelton from "./CommentSkelton"

function PostSkeleton() {
    return (
        <div className='post-container container skeleton'>
            <div className='skeleton-img' style={{ height: '300px' }}></div>
            <div className='skeleton-title' style={{ width: '60%', height: '2rem' }}></div>
            <div className='skeleton-body' style={{ width: '80%', height: '150px' }}></div>
            {Array.from({ length: 5 }).map((_, i) => (
                <CommentSkelton key={i} />
            ))}
        </div>
    )
}

export default PostSkeleton
