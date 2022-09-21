const Dropdown = ({ options, handleOnClickDropdown, selectedOption }) => {
	return (
		<div className='dropdown my-4'>
			<button
				className='btn btn-secondary dropdown-toggle'
				type='button'
				id='dropdownMenuButton'
				data-toggle='dropdown'
				aria-haspopup='true'
				aria-expanded='false'
			>
				{selectedOption !== "all"
					? options[selectedOption]
					: "Filter By Language"}
			</button>
			<div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
				<span
					onClick={handleOnClickDropdown}
					id='all'
					className='dropdown-item'
				>
					Show All
				</span>
				{Object.entries(options).map(([id, language]) => (
					<span
						key={id}
						onClick={handleOnClickDropdown}
						id={id}
						className='dropdown-item'
					>
						{language}
					</span>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
