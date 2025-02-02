import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import RankInfoSelect from './RankInfoSelect/RankInfoSelect';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/select" element={<RankInfoSelect/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
