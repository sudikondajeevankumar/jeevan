import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form from './components/form';
import Login from './components/login';
import Login2 from './components/login2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Form/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/login2' element={<Login2/>}/>

       
      </Routes>
    </div>
  );
}

export default App;
