import { Link } from 'react-router-dom';
import './PostCard.css';
const images = [
    "https://images.pexels.com/photos/16240968/pexels-photo-16240968/free-photo-of-facade-of-the-berlin-cathedral-under-a-cloudy-sky-berlin-germany.jpeg",
    "https://images.pexels.com/photos/21546873/pexels-photo-21546873/free-photo-of-florence.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/20697751/pexels-photo-20697751/free-photo-of-shot-with-oldroll-classic-m.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11170910/pexels-photo-11170910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/21837186/pexels-photo-21837186/free-photo-of-a-narrow-street-with-white-houses-and-telephone-wires.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]
function PostCard({ post }) {
    return (
        <Link to={`/post/${post.id}`} className='post'>
            <img className='postImg' src={images[post.id % 5]} alt={post.title} />
            <h2 className='overLap'>{post.title}</h2>
            <p>{post.body}</p>
        </Link>
    )
}

export default PostCard
