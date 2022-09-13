import LecturerItem from "./LecturerItem";
import { useSelector } from "react-redux";

const LecturersList = () => {
	const { lecturers, filteredLecturers, loading } = useSelector(
		(state) => state.lecturers
	);

	if (loading === "pending") {
		return <h1>loading</h1>;
	}
	return (
		<div className='container'>
			<div className='row'>
				{filteredLecturers.length > 0
					? filteredLecturers.map((lecturer) => (
							<LecturerItem key={lecturer.name} lecturerDetails={lecturer} />
					  ))
					: lecturers.map((lecturer) => (
							<LecturerItem key={lecturer.name} lecturerDetails={lecturer} />
					  ))}
			</div>
		</div>
	);
};

export default LecturersList;
