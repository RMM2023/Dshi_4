import logo from './logo.svg';
import './styles/styles.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import DepartmentPiano from './pages/DepartmentPiano';
import DepartmentFolk from './pages/DepartmentFolk';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/departments/piano' element={<DepartmentPiano/>}/>
          <Route path='/departments/folk' element={<DepartmentFolk/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
