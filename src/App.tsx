import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail';
import Home from './pages/Home';
import theme from './theme';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '200px', height: '100vh', backgroundColor: '#f0f0f0' }}>
            <nav>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '10px' }}>
                  <Link to="/" style={{ textDecoration: 'none', color: 'black', display: 'block' }}>
                    Home
                  </Link>
                </li>
                <li style={{ padding: '10px' }}>
                  <Link to="/about" style={{ textDecoration: 'none', color: 'black', display: 'block' }}>
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pokemon/:pokemonName" element={<PokemonDetail />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

