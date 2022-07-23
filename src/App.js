import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Registration from './components/Authentication/Registration/Registration';
import Login from './components/Authentication/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';
import Showuser from './components/admin/Showuser';
import Createpackage from './components/admin/Createpackage'
import RequireAuth from './components/RequireAuth';
import Warning from './components/Warning';
import Review from './components/User/Review';
import Packages from './components/Packages';
import Confirm from './components/Confirm';
import Footer from './components/Shared/Footer/Footer';
import ClientReview from './components/ClientReview';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registartion" element={<Registration />} />
        <Route path="/login" element={< Login />} />
        <Route path="/show" element={
          <RequireAuth>
            < Showuser />
          </RequireAuth>

        } />
        <Route path="/create" element={< Createpackage />} />
        <Route path="/warning" element={< Warning />} />
        <Route path="/package" element={< Packages />} />
        <Route path="/confirm" element={< Confirm />} />
        <Route path="/client" element={< ClientReview />} />
        <Route path="/review" element={<RequireAuth>
          < Review />
        </RequireAuth>} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
