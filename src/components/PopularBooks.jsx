import { useContext, useEffect, useState } from "react";

import { Fetch } from "../adapters/fetch";
import { SearchContext } from "../Context/SearchContex";

const PopularBooks = (props) => {
    const [books, changeData] = useState([]);

    const searchContextObject = useContext(SearchContext)
    
    useEffect(()=>{
        Fetch(searchContextObject.searchStateValue).then((response)=>{
            changeData(response.data.books)
        })
    })

    
    return <>
        <div id="popularBooks">
            {
                books.map((value, index) => {
                    return <a key={index} target="_blank" rel="noreferrer" href={value.url} className="popularBookName">
                        <span className="bookNumber">{index+1}</span> {value.title}
                    </a>
                })
            }
        </div>
    </>
}

export default PopularBooks;