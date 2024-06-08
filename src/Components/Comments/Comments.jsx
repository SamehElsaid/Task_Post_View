import { FaUser } from "react-icons/fa";
import "./Comment.css";

export default function Comments({ comments, setLoadingComments, refToComments, page, setPage }) {
    const pageSize = 10;
    console.log(page)
    const handleChangePage = (page) => {
        setPage(page);
        refToComments.current.scrollIntoView();
        setLoadingComments(true);
        setTimeout(() => {
            setLoadingComments(false);
        }, 1000);
    }

    return (
        <div className="comments-container">
            {comments.slice(page * pageSize, (page + 1) * pageSize).map((comment) => (
                <div key={comment.id} className="comment">
                    <div className="user-icon">
                        <FaUser />
                    </div>
                    <div className="comment-content">
                        <h3 className="comment-author">{comment.name}</h3>
                        <p className="comment-email">{comment.email}</p>
                        <p className="comment-body">{comment.body}</p>
                    </div>
                </div>
            ))}
            <div className="pagination">
                <button className="button-change-page" onClick={() => handleChangePage(Math.max(page - 1, 0))} disabled={page === 0}>
                    Previous
                </button>
                <span>Page {page + 1}</span>
                <button className="button-change-page" onClick={() => handleChangePage(page + 1)} disabled={comments.length < pageSize}>
                    Next
                </button>
            </div>


        </div >
    )
}
