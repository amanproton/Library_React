
// Styles
import '../styles/style.css';
import '../styles/secondContainer.css';
import '../styles/thirdContainer.css';
import '../styles/footer.css';

import { SearchContext } from "../Context/SearchContex";
import { useEffect, useState } from "react";


// Components
import Header from './Header';
import SecondContainer from './SecondContainer';
import ThirdContainer from './ThirdContainer';
import Footer from './Footer';



const App = () => {

    const [searchStateValue , changeSearchStateValue] = useState("Science");

    return <>
        <SearchContext.Provider value={{searchStateValue , changeSearchStateValue}}>
            <Header />
            <SecondContainer />
            <ThirdContainer />
            <div className="boxHeading">Contact Details</div>
            <Footer />
            <div style={{ height: "200px" }}></div>
        </SearchContext.Provider>

    </>
}

export default App;