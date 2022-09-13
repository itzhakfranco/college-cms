import Dropdown from "./Dropdown";
import { searchByName } from "../../store/lectures.slice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(searchByName(searchTerm));
	}, [searchTerm, dispatch]);

	const changeSearchTerm = (e) => {
		setSearchTerm(e.target.value);
	};
	return (
		<>
			<div className='container my-5'>
				<div className='row'>
					<div className='col-lg-10'>
						<div className='input-group mb-3'>
							<input
								type='text'
								className='form-control'
								placeholder='Search Lecturers By Name'
								onChange={changeSearchTerm}
								value={searchTerm}
							/>
						</div>
					</div>
					<div className='col-lg-2'>
						<Dropdown />
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
