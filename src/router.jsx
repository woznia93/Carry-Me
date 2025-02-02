import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import RankInfoSelect from './RankInfoSelect/RankInfoSelect';
import BotScreen from './BotScreen/BotScreen';
import GoodScreen from './GoodScreen/GoodScreen';
import FindTeam from './FindTeam/FindTeam';
import Leaderboard from './Leaderboard/Leaderboard';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/select/:user" element={<RankInfoSelect/>}/>
        <Route path="/badrank" element={<BotScreen/>}/>
        <Route path="/goodrank/:user" element={<GoodScreen/>}/>
        <Route path="/findteam/:user/:rank" element={<FindTeam/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
