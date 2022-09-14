import LecturerItem from "./LecturerItem";

const LecturersList = ({
  lecturers,
  filteredLecturers,
  searchTerm,
  selectedOption,
}) => {
  if (
    (selectedOption !== "all" && filteredLecturers.length === 0) ||
    (searchTerm.length > 0 && filteredLecturers.length === 0)
  ) {
    return "no match";
  }
  return (
    <>
      {filteredLecturers.length !== 0
        ? filteredLecturers.map((lecturer) => (
            <LecturerItem key={lecturer.name} lecturerDetails={lecturer} />
          ))
        : lecturers.map((lecturer) => (
            <LecturerItem key={lecturer.name} lecturerDetails={lecturer} />
          ))}
    </>
  );
};

export default LecturersList;
