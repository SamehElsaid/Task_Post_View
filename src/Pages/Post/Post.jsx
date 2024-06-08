import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../../Redux/postSlice/postByIdSlice';
import './Post.css';
import Comments from '../../Components/Comments/Comments';
import Error from '../../Components/Error/Error';
import PostSkeleton from '../../Components/Skeleton/PostSkeleton';
import CommentSkelton from '../../Components/Skeleton/CommentSkelton';



const images = [
  "https://images.pexels.com/photos/16240968/pexels-photo-16240968/free-photo-of-facade-of-the-berlin-cathedral-under-a-cloudy-sky-berlin-germany.jpeg",
  "https://images.pexels.com/photos/21546873/pexels-photo-21546873/free-photo-of-florence.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/20697751/pexels-photo-20697751/free-photo-of-shot-with-oldroll-classic-m.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/11170910/pexels-photo-11170910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/21837186/pexels-photo-21837186/free-photo-of-a-narrow-street-with-white-houses-and-telephone-wires.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]
function Post() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [loadingComments, setLoadingComments] = useState(false);
  const { data, comments, loading, error } = useSelector((state) => state.postById);
  const refToComments = useRef(null);
  const [page, setPage] = useState(0);
  console.log({ data, loading, error });
  useEffect(() => {
    if (postId) {
      dispatch(fetchPostById(postId));
    }
  }, [dispatch, postId]);
  if (loading) {
    return (
      <PostSkeleton />
    );
  }
  if (error) {
    return <Error error={error} />;
  }
  return (
    <div className='post-container || container'>
      <div className='post-container'>
        <img src={images[data.id % 5]} className='post-img' alt={data.title} />
        <h1 className='post-title'>{data.title}</h1>
        <p className='post-body'>{data.body}</p>
      </div>
      <div ref={refToComments} style={{ margin: "20px 0" }}></div>
      {loadingComments ?
        Array.from({ length: 5 }).map((_, i) => (
          <CommentSkelton key={i} />
        )) :
        <Comments refToComments={refToComments} loadingComments={loadingComments} setLoadingComments={setLoadingComments} comments={comments} page={page} setPage={setPage} />
      }
    </div>
  );
}

export default Post
