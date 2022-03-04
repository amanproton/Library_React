import { useEffect, useState } from "react";
import axios from "axios";

import {Fetch} from "../adapters/fetch";

const TodayBook = (props) => {
    const [book, changeData] = useState({});


    useEffect(()=>{
        Fetch(props.bookName).then((response)=>{
            changeData(response.data.books[0])
        })
    } , []);

    
    
    return <>

        <div id="todayBook">
            <div className="bookDiv">
                <img src={book.image} alt="" />
                <div className="bookDescription">
                    <div className="bookTitle">{book.title}</div>
                    <div className="bookWriter">{book.authors}</div>
                    <div className="bookContent">{book.subtitle}</div>
                    <div className="buttonContainer">
                        <a target="_blank" href={book.url}>Read</a>
                        <a target="_blank" href={book.url}>Download</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TodayBook;


