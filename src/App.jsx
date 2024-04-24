import { useState } from "react";



import { IoCloseCircleOutline } from "react-icons/io5";



import { MdMarkEmailRead } from "react-icons/md";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import OfficePage from "./pages/OfficePage";
import AddOfficePage from "./pages/AddOfficePage";
import EditOfficePage from "./pages/EditOfficePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {



  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path='/' element={<HomePage />}></Route>
  //       <Route path='/office' element={<OfficePage />} />
  //       <Route path='/add-office' element={<AddOfficePage />} />
  //       <Route path='/edit-office' element={<EditOfficePage />} />
  //       {/* <Route
  //         path='/edit-job/:id'
  //         element={<EditJobPage updateJobSubmit={updateJob} />}
  //         loader={jobLoader}
  //       />
  //       <Route
  //         path='/jobs/:id'
  //         element={<JobPage deleteJob={deleteJob} />}
  //         loader={jobLoader}
  //       /> */}
  //       <Route path='*' element={<NotFoundPage />} />
  //     </Route>
  //   )
  // );

  // return <RouterProvider router={router} />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/office" element={<OfficePage />} />
        <Route path='/add-office' element={<AddOfficePage />} />
        <Route path='/edit-office' element={<EditOfficePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;