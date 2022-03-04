import { useState } from "react";
import SearchBar from "./SearchBar";

import { SearchContext } from "../Context/SearchContex";

const Nav = () => {
    


    return <>
        <nav>
            <div id="logo">
                Union Library
            </div>

            <SearchBar />
    
        </nav>
    </>
}

export default Nav;