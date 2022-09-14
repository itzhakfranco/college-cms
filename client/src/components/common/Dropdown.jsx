const Dropdown = ({ options, handleOnClickDropdown, selectedOption }) => {
  return (
    <div className="col-lg-2 col-md-12">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {selectedOption !== "all" ? selectedOption : "Filter By Language"}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <span
            onClick={handleOnClickDropdown}
            id="all"
            className="dropdown-item"
          >
            Show All
          </span>
          {Object.keys(options).map((language) => (
            <span
              key={language}
              onClick={handleOnClickDropdown}
              id={language}
              className="dropdown-item"
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
