import TodayBook from "./TodayBook";
import PopularBooks from "./PopularBooks";

import { SearchContext } from "../Context/SearchContex";
import { useContext, useState } from "react";

const SecondContainer = () => {

	const myContext = useContext(SearchContext)
	const [popularBookState , changePopuarBookState] = useState(myContext.searchStateValue);


	return <div id="secondContainer">
			<TodayBook bookName="Politics" />
			<PopularBooks bookName={popularBookState} />
		</div>
}

export default SecondContainer;