
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/navbar';
import { Inventories } from './pages/Inventories/inventories';
import { Sales } from './pages/Sales/sales';
import { Reports } from './pages/Reports/reports';
import { Home } from './pages/Home/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="inventories" element={<Inventories />} />
        <Route path="sales" element={<Sales />} />
        <Route path="reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default App;
