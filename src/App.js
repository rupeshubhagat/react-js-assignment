import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddEmp from "./components/AddEmp";
import EditEmp from "./components/EditEmp";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import TopNav from "./components/TopNav";

function App() {
  return (
   <>
      <div className="">
      <Router>
        <TopNav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-emp" element={<AddEmp />} />
          <Route path="/edit-emp/:id" element={<EditEmp />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
   </>
  );
}

export default App;
