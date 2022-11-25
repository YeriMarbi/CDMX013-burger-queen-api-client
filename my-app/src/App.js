import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './noauth/Login'
import Admin from './auth/adminPage/Admin'

function App() {
  return (
    <Router>
      <div>
       <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='admin' element={<Admin/>} />
       </Routes>
       </div>
    </Router>
  );
}

export default App;
