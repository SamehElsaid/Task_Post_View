import './ButtonPagination.css'
function ButtonPagination({ loadingPagination, page, num, setLoadingPagination, setPage }) {
    return (
        <button className='button-pagination' disabled={loadingPagination || page === num - 1} onClick={() => {
            if (loadingPagination) return;
            setLoadingPagination(true);
            window.scrollTo(0, 0);
            setPage(num - 1)
            setTimeout(() => {
                setLoadingPagination(false);
            }, 1000);
        }}>{num}</button>
    )
}

export default ButtonPagination
