const SearchBar = ({ searchTerm, updateSearchTerm }) => {
	return (
		<div className='input-group my-4'>
			<input
				type='text'
				className='form-control'
				placeholder='Search By Lecturer Name'
				onChange={updateSearchTerm}
				value={searchTerm}
			/>
		</div>
	);
};

export default SearchBar;
