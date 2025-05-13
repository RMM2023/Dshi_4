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
import PhotoGallery from './pages/PhotoGallery';
import VideoGallery from './pages/VideoGallery';
import Poster from './pages/Poster';
import Timetable from './pages/Timetable';
import HistorySchool from './pages/HistorySchool';
import News from './pages/News';
import OurStependiates from './pages/OurStependiates';
import OurLaureates from './pages/OurLaureates';
import Library from './pages/Library';
import LibraryStringBowed from './pages/LibraryStringBowed';

import AdminPhotoGallery from './pages/gallery/AdminPhotoGallery';
import AdminVideoGallery from './pages/gallery/AdminVideoGallery';
import AdminChoice from './pages/administration/AdminChoice';
import AdminEditing from './pages/administration/AdminEditing';
import Administration from './pages/administration/Administration';
import AdminPoster from './pages/administration/AdminPoster';

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
          <Route path='/poster' element={<Poster/>}/>
          <Route path='/photoGallery' element={<PhotoGallery/>}/>
          <Route path='/videoGallery' element={<VideoGallery/>}/>
          <Route path='/timetable' element={<Timetable/>}/>
          <Route path='/hisroryScool' element={<HistorySchool/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/ourStependiates' element={<OurStependiates/>}/>
          <Route path='/ourLaureates' element={<OurLaureates/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/libraryStringBowed' element={<LibraryStringBowed/>}/>
          
          <Route path='/galleryAdminphotoGallery' element={<AdminPhotoGallery/>}/>
          <Route path='/gallery/AdminvideoGalleryEdit' element={<AdminVideoGallery/>}/>
          <Route path='/administration/adminChoice' element={<AdminChoice/>}/>
          <Route path='/administration/adminEditing' element={<AdminEditing/>}/>
          <Route path='/administration/administration' element={<Administration/>}/>
          <Route path='/administration/poster' element={<AdminPoster/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
