//Dashboard
import Dashboard from './Pages/Dashboard/Dashboard';

//Users
import Users from './Pages/Dashboard/Users/Users';
import CreateUser from './Pages/Dashboard/Users/CreateUser';
import UpdateUser from './Pages/Dashboard/Users/UpdateUser';

//Website
import Home from './Pages/Website/Home';
//Auth
import SignUp from './Pages/Website/Auth/SignUp';
import Login from './Pages/Website/Auth/Login';


import { Route, Routes } from 'react-router-dom';

export default function App() {

  return(
    <div>
      <Routes>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='users' element={<Users/>} />
          <Route path='users/:id' element={<UpdateUser/>}/>
          <Route path='user/create' element={<CreateUser/>}/>
        </Route>
      </Routes>
    </div>
  )
}

