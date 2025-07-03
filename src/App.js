import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={
      <Home 
        scrollOptions={{ behavior: 'smooth', block: 'start' }}
      />
    } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;