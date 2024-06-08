import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsData } from '../../Redux/postSlice/postSlice';
import './Home.css';
import PostCard from '../../Components/PostCard/PostCard';
import ButtonPagination from '../../Components/ButtonPagination/ButtonPagination';
import HomeSkeleton from '../../Components/Skeleton/HomeSkelton.jsx/HomeSkeleton';
import Error from '../../Components/Error/Error';
function Home() {
    const { data, loading, error } = useSelector((state) => state.posts);
    const [loadingPagination, setLoadingPagination] = useState(false);
    const [page, setPage] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPostsData());
    }, [dispatch]);
    if (loading || loadingPagination) {
        return (
           <HomeSkeleton />
        );
    }
    if (error) {
        return <Error error={error} />;
    }
    return (
        <div className='home-container || container'>
            <h1 className='title'>Posts</h1>
            <div className='posts-grid'>
                {data.slice(page * 20, (page + 1) * 20).map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
            <div className='pagination'>
                {Array.from({ length: Math.ceil(data.length / 20) }, (_, i) => i + 1).map(num => (
                    <ButtonPagination key={num} loadingPagination={loadingPagination} page={page} num={num} setLoadingPagination={setLoadingPagination} setPage={setPage} />
                ))}
            </div>
        </div>
    )
}

export default Home
