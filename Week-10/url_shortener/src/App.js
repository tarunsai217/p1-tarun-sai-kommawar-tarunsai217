import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Feautures from './Pages/Feautures/Feautures';
import Resources from './Pages/Resources/Resources';
import Pricing from './Pages/Pricing/Pricing';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/feautures" element={<Feautures/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/pricing" element={<Pricing/>} />
      </Routes>
      <Footer/>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </div>
  );
}

export default App;
