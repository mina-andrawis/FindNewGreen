import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyTrips from './pages/my-trips';
import MyAccount from './pages/my-account';
import Home from './pages/home';

const App = () => {
  
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/my-trips' element={<MyTrips/>} />
          <Route path='/my-account' element={<MyAccount/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
