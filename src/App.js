// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Update from './components/Update';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Crud Application in MERN</h1>
      <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='update/:id' element={<Update/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
