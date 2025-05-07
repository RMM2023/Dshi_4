import logo from './logo.svg';
import './styles/styles.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import DepartmentPiano from './pages/DepartmentPiano';
import DepartmentFolk from './pages/DepartmentFolk';
import DepartmentSchool from './pages/DepartmentSchool';
import DepartmentStringBowed from './pages/DepartmentStringBowed';
import DepartmentStringPlucked from './pages/DepartmentStringPlucked';
import DepartmentTheatrical from './pages/DepartmentTheatrical';
import DepartmentVocal from './pages/DepartmentVocal';
import DepartmenHoreography from './pages/DepartmenHoreography';
import DepartmenChoralSinging from './pages/DepartmenChoralSinging';

import PhotoGalleryEdit from './Photo/PhotoGalleryEdit';
import VideoGalleryEdit from './Photo/VideoGalleryEdit';
import AdminChoice from './Photo/AdminChoice';
import AdminEditing from './Photo/AdminEditing';
import Administration from './Photo/Administration';
import Poster from './Photo/Poster';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/departments/piano' element={<DepartmentPiano/>}/>
          <Route path='/departments/folk' element={<DepartmentFolk/>}/>
          <Route path='/depsrtments/school' element={<DepartmentSchool/>}/>
          <Route path='/departments/stringBowed' element={<DepartmentStringBowed/>}/>
          <Route path='/departments/stringPlucked' element={<DepartmentStringPlucked/>}/>
          <Route path='/departments/theatrical' element={<DepartmentTheatrical/>}/>
          <Route path='/departments/vocal' element={<DepartmentVocal/>}/>
          <Route path='/departments/wind' element={<DepartmenWind/>}/>
          <Route path='/departments/choreography' element={<DepartmenHoreography/>}/>
          <Route path='/departments/choralSinging' element={<DepartmenChoralSinging/>}/>
          
          <Route path='/gallery/photoGalleryEdit' element={<PhotoGalleryEdit/>}/>
          <Route path='/Administration/videoGalleryEdit' element={<VideoGalleryEdit/>}/>
          <Route path='/Administration/adminChoise' element={<AdminChoice/>}/>
          <Route path='/Administration/adminEditing' element={<AdminEditing/>}/>
          <Route path='/Administration/administration' element={<Administration/>}/>
          <Route path='/Poster/poster' element={<Poster/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
