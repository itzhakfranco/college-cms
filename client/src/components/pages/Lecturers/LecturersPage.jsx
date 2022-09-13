import SearchBar from "../../common/SearchBar";
import LecturersList from "./LecturersList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLecturers } from "../../../store/lectures.slice";

const LecturersPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchLecturers());
	}, [dispatch]);

	return (
		<>
			<SearchBar />
			<LecturersList />
		</>
	);
};

export default LecturersPage;
