import { useState, useEffect } from "react";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import OfficePage from "./pages/OfficePage";
import AddOfficePage from "./pages/AddOfficePage";
import EditOfficePage from "./pages/EditOfficePage";
import NotFoundPage from "./pages/NotFoundPage";

import offices from './offices.json';

function App() {

  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffices = async () => {
      try {
        const res = await fetch("/api/offices");
        const data = await res.json();
        setOffices(data)
      } catch (error) {
        console.log("Error fetching data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchOffices();
  }, [])



  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage offices={offices} loading={loading} />} />
        <Route path="/office/:id" element={<OfficePage />} />
        <Route path='/add-office' element={<AddOfficePage />} />
        <Route path='/edit-office/:id' element={<EditOfficePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;