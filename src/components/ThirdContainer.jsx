import { useState } from 'react';
import axios from 'axios';

import BookDiv from './BookDiv'

const ThirdContainer = (props) =>{
    
    const [bookList, changeData] = useState([]);

    async function fetch(bookName) {
        let actualData = await axios.get(`https://www.dbooks.org/api/search/${bookName}`);
        if (actualData.status == 200) {
            if (actualData.data.books.length == 0) {
                alert("No books Found !")
            }
            else {
                if(actualData.data.books.length>6)
                    changeData(actualData.data.books.splice(0,6))
                else
                    changeData(actualData.data.books)

            }
        }
        else {
            alert("INTERNER ERR -!")
        }
    }

    fetch("History")


    return<div id="thirdContainer">

        <div className="boxHeading">Common Books</div>

        <div id="commonBooksContainer">

            {

                bookList.map( (value , index)=>{
                    return <BookDiv key={index} book={value} />
                })
            }

        </div>

    </div>
}

export default ThirdContainer;