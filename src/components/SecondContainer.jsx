import TodayBook from "./TodayBook";
import PopularBooks from "./PopularBooks";

import { SearchContext } from "../Context/SearchContex";
import { useContext} from "react";

const SecondContainer = () => {

	const myContext = useContext(SearchContext)
	const popularBook = myContext.searchStateValue;


	return <div id="secondContainer">
			<TodayBook bookName="Politics" />
			<PopularBooks bookName={popularBook} />
		</div>
}

export default SecondContainer;