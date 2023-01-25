// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// SONGS PAGES
import Home from "./Pages/Home";
import SongsIndex from "./Pages/SongsIndex";
import New from "./Pages/New";
import ShowOneSong from "./Pages/ShowOneSong";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";

//ARTISTS PAGES
import Artists from "./Components/Artists";

// COMPONENTS
import Navbar from "./Components/Navbar";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists/>} />
            <Route path="/songs" element={<SongsIndex />} />
            <Route path="/songs/new" element={<New />} />
            <Route exact path="/songs/:id" element={<ShowOneSong />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
