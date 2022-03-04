const BookDiv = (props) => {
    return <>
        <div className="bookDiv">
            <img className="commonBookImg" src={props.book.image} alt="" />
            <div className="bookDescription">
                <div className="bookTitle">{props.book.title}</div>
                <div className="bookWriter">{props.book.authors}</div>
                <div className="bookContent">{props.book.subtitle}</div>
                <div className="buttonContainer">
                    <a target="_blank" href={props.book.url}>Read</a>
                    <a target="_blank" href={props.book.url}>Download</a>
                </div>
            </div>
        </div>
    </>
}

export default BookDiv;