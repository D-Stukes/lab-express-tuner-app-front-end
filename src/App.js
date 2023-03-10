// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// SONGS PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
// import New from "./Pages/NewOrEdit";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
// import NewOrEdit from "./Pages/NewOrEdit";

//ARTISTS PAGES
// import Artists from "./Components/Artists";
// import Artist from "./Components/Artist"

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
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route exact path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
