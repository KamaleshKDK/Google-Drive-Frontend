import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './authentication/Login';
import Register from './authentication/Register';
import Dashboard from './Dashboard';
import Computer from './navigation/Computer';
import MyDrive from './navigation/MyDrive';
import Shared from './navigation/Shared';
import Recent from './navigation/Recent';
import Starred from './navigation/Starred';
import Trash from './navigation/Trash';
import Newfolder from './Newfolder';
import Forgotpassword from './authentication/Forgotpassword';
import Cloneheading from './Cloneheading';



function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clone-heading" element={<Cloneheading />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/mydrive" element={<MyDrive />} />
          <Route path="/computer" element={<Computer />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/newfolder" element={<Newfolder />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}



export default App;
