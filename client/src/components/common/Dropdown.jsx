import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { searchByLanguage } from "../../store/lectures.slice";

const Dropdown = () => {
	const dispatch = useDispatch();
	const { languages } = useSelector((state) => state.lecturers);
	const [languageId, setLanguageId] = useState(null);

	const handleOnClick = (event) => {
		console.log(event.target.id);
		dispatch(searchByLanguage(Number(event.target.id)));
		setLanguageId(Number(event.target.id));
	};

	return (
		<div className='col-lg-2'>
			<div className='dropdown'>
				<button
					className='btn btn-secondary dropdown-toggle'
					type='button'
					id='dropdownMenuButton'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'
				>
					{languageId ? languages[languageId].name : "Choose a language"}
				</button>
				<div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
					<span onClick={() => setLanguageId(null)} className='dropdown-item'>
						Show All
					</span>

					{Object.values(languages).map((language) => (
						<span
							key={language.name}
							onClick={handleOnClick}
							id={language.id}
							className='dropdown-item'
						>
							{language}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
