

import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import Customers from './views/CustomersList';
import CustomersList from './views/CustomersList';

import Example from './views/Example';
import Example_2 from './views/Example_2';
import Signup from './views/Signup';
import Form from './views/Signup';
import AppRoutes from './routes/AppRoutes';



function App() {
  return (
    <div className="App">
      {/* <Customers/> */}
      {/* <Example_2/> */}
      {/* <Signup/>; */}

      {/* <Router >
        <Route path="/customersList" component={CustomersList}/>
        <Route path="/signup" element={Signup}/>
      </Router> */}
      {/* <Routes/> */}
      <AppRoutes/>
    
    </div>
  );
}

export default App;
