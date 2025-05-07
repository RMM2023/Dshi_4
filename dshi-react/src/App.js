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
import DepartmentWind from './pages/DepartmentWind';
import DepartmentChoreography from './pages/DepartmentChoreography';
import DepartmentChoralSinging from './pages/DepartmentChoralSinging';

import PhotoGalleryEdit from './pages/gallery/PhotoGalleryEdit';
import VideoGalleryEdit from './pages/gallery/VideoGalleryEdit';
import AdminChoice from './pages/administration/AdminChoice';
import AdminEditing from './pages/administration/AdminEditing';
import Administration from './pages/administration/Administration';
import Poster from './pages/administration/Poster';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/departments/piano' element={<DepartmentPiano/>}/>
          <Route path='/departments/folk' element={<DepartmentFolk/>}/>
          <Route path='/departments/school' element={<DepartmentSchool/>}/>
          <Route path='/departments/stringBowed' element={<DepartmentStringBowed/>}/>
          <Route path='/departments/stringPlucked' element={<DepartmentStringPlucked/>}/>
          <Route path='/departments/theatrical' element={<DepartmentTheatrical/>}/>
          <Route path='/departments/vocal' element={<DepartmentVocal/>}/>
          <Route path='/departments/wind' element={<DepartmentWind/>}/>
          <Route path='/departments/choreography' element={<DepartmentChoreography/>}/>
          <Route path='/departments/choralSinging' element={<DepartmentChoralSinging/>}/>
          
          <Route path='/gallery/photoGalleryEdit' element={<PhotoGalleryEdit/>}/>
          <Route path='/gallery/videoGalleryEdit' element={<VideoGalleryEdit/>}/>
          <Route path='/administration/adminChoice' element={<AdminChoice/>}/>
          <Route path='/administration/adminEditing' element={<AdminEditing/>}/>
          <Route path='/administration/administration' element={<Administration/>}/>
          <Route path='/administration/poster' element={<Poster/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
