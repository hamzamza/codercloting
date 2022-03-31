import data from './data';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark ps-3 bg-amazon">
        <a className="navbar-brand" href="./">
          amazona <label style={{ color: 'yellow' }}>²</label>
        </a>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
