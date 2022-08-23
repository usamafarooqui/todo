import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"  exact element={<Landingpage />} />
        <Route path="/adduser"  exact element={<AddUser />} />
        <Route path="/alluser"  exact element={<AllUsers />} />
        <Route path="/edit/:id"  exact element={<Edit />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
