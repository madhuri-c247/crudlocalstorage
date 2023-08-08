import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Update from './components/Updat'
import Nav from './components/Nav';
import Error from './components/Error';
import Edit from './components/Edit';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
   <>
   <BrowserRouter>
      {/* <Nav/> */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/update' element={<Update/>}></Route>
      <Route path='/add' element={<Update/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
   </BrowserRouter>
    
   </>
  );
}

export default App;
