import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './Components/Menu';
import BookTable from './Components/BookTable';
import ReserveTable from './Components/pages/ReserveTable';
import ReachOut from './Components/ReachOut';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/reserve-table/:id" element={<ReserveTable />} />
        <Route path="/contact" element={<ReachOut />} />
      </Routes>
    </Router>
  );
}

export default App;
