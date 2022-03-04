import { useContext, useState } from "react";

import { SearchContext } from "../Context/SearchContex";

const SearchBar = () => {
    
    const[searchBook , updateSearchBook] = useState("");

    const searchContextObject = useContext(SearchContext);

    const update = ()=>{
        searchContextObject.changeSearchStateValue(searchBook);
    }

    return <div id="searchBar">
        <input type="text" onChange={(e)=>{updateSearchBook(e.target.value)}} value={searchBook} placeholder="Search book" />
    <button onClick={update}><i className='bx bx-search-alt-2'></i></button>
</div>
}

export default SearchBar;