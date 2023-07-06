import { BrowserRouter as Router , Route,Routes} from 'react-router-dom';
import Homepage from './Components/HomepageRelated/Homepage';
import RegisterPage from './Components/HomepageRelated/RegisterPage'
import LoginComponent from './Components/HomepageRelated/LoginComponent';
function App() {
  return (
      <Router>
           <Routes>
            <Route path='/homepage/*' element={<Homepage/>}/>       
            <Route path='/' element={<LoginComponent/>}/> 
            <Route path='/register' element={<RegisterPage/>}/>
          </Routes>
      </Router>
  )
  }

export default App;
