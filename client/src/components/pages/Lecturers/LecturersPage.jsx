import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../../common/SearchBar";
import LecturersList from "./LecturersList";
import Dropdown from "../../common/Dropdown";
import { fetchLecturers } from "../../../store/lectures.slice";

const LecturersPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchLecturers());
	}, [dispatch]);

	const { lecturersByLanguageHash, languagesByIdHash, lecturers, loading } =
		useSelector((state) => state.lecturers);

	const [filteredLecturers, setFilteredLecturers] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedOption, setSelectedOption] = useState("all");

	const searchByName = (searchTerm) => {
		const filteredLecturers = lecturers.filter((lecturer) =>
			lecturer.name.toLowerCase().includes(searchTerm)
		);
		setFilteredLecturers(filteredLecturers);
	};

	const updateSearchTerm = ({ target }) => {
		const searchTerm = target.value;

		if (searchTerm.length > 0) {
			searchByName(searchTerm);
		} else {
			setFilteredLecturers([]);
		}
		setSelectedOption("all");
		setSearchTerm(target.value);
	};

	const handleOnClickDropdown = ({ target }) => {
		setSearchTerm("");
		const selectedOption = target.id;
		if (selectedOption !== "all") {
			setFilteredLecturers(
				lecturersByLanguageHash[languagesByIdHash[selectedOption]]
			);
			setSelectedOption(selectedOption);
		} else {
			setFilteredLecturers([]);
			setSelectedOption(selectedOption);
		}
	};

	if (loading === "pending") {
		return <h1>loading</h1>;
	}

	return (
		<>
			<div className='container my-4'>
				<div className='row'>
					<div className='col-lg-10'>
						<SearchBar
							searchTerm={searchTerm}
							updateSearchTerm={updateSearchTerm}
						/>
					</div>
					<div className='col-lg-2 col-md-6'>
						<Dropdown
							options={languagesByIdHash}
							selectedOption={selectedOption}
							handleOnClickDropdown={handleOnClickDropdown}
						/>
					</div>
				</div>
				<div className='row'>
					<LecturersList
						selectedOption={selectedOption}
						searchTerm={searchTerm}
						lecturers={lecturers}
						filteredLecturers={filteredLecturers}
					/>
				</div>
			</div>
		</>
	);
};

export default LecturersPage;
