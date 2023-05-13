import './App.css';
import Nav from "./components/Nav";
import Home from "./containers/Home";
import Leaderboard from "./containers/Leaderboard";
import Battles from "./containers/Battles";
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <header className="App-header">
        <h1>Scopely</h1>
        <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/leaderboard" element={<Leaderboard />} />
            <Route exact path="/battles" element={<Battles />} />
          </Routes>
      </header>
      </Router>
    </div>
  );
}

export default App;
