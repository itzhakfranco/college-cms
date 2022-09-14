import LecturersPage from "./components/pages/Lecturers/LecturersPage";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <>
      <header >
        <Navbar title="Lecturers CMS" />
      </header>
      <main>
        <LecturersPage  />
      </main>
    </>
  );
}

export default App;
