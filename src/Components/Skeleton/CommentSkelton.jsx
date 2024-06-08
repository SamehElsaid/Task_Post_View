import React from 'react'

function CommentSkelton() {
    return (
        <div className='skeleton' style={{ width: '100%', height: '100px', marginTop: '20px' }}>
            <div className='skeleton-title' style={{ width: '40%', height: '1rem' }}></div>
            <div className='skeleton-body' style={{ width: '90%', height: '50px' }}></div>
        </div>
    )
}

export default CommentSkelton
