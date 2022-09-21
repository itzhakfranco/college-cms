import { useSelector } from "react-redux";

export const LecturerItem = ({ lecturerDetails }) => {
	const { languagesByIdHash } = useSelector((state) => state.lecturers);

	return (
		<div className='col-md-6 col-lg-4 mb-4'>
			<div className='card'>
				<div className='card-header'>
					<i className='fa fa-user'></i>
					<strong className='card-title pl-2'>{lecturerDetails.name}</strong>
				</div>
				<div className='card-body'>
					<div className='mx-auto d-block'>
						<img
							className='rounded-circle mx-auto d-block'
							style={{ width: "75px", height: "75px" }}
							src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
							alt='lecturer'
						/>
						<hr />
						<h6 className='text-sm-center'>Languages</h6>
						<div className='d-flex justify-content-center'>
							{lecturerDetails.languages.map((language) => (
								<div key={languagesByIdHash[language]}>
									<span className='badge badge-pill badge-primary mx-4 p-2 m-2'>
										{languagesByIdHash[language]}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LecturerItem;
