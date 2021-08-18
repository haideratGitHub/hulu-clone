import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
//for flipmove to work, our result must have valid key

function Results({ results }) {
	return (
		<FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
			{results.map((result) => (
				<Thumbnail key={result.id} result={result}></Thumbnail>
			))}
		</FlipMove>
	);
}

export default Results;
