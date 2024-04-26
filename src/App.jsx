import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage";
import OfficePage from "./pages/OfficePage";
import AddOfficePage from "./pages/AddOfficePage";
import EditOfficePage from "./pages/EditOfficePage";
import NotFoundPage from "./pages/NotFoundPage";
import { AppProvider } from './AppContext';

function App() {
  return (

    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/office/:id" element={<OfficePage />} />
          <Route path='/add-office' element={<AddOfficePage />} />
          <Route path='/edit-office/:id' element={<EditOfficePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <ToastContainer />
      </AppProvider>
    </Router>

  );
};

export default App;