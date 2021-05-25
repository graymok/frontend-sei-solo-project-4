import './App.css';
import { UserContext } from './Context/UserContext'
import { useContext, useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from './Components/NavBar'
import NavFooter from './Components/NavFooter'
import Landing from './Pages/Landing'
import Registration from './Pages/Registration'


function App() {
  const {userState, verifyUser} = useContext(UserContext)
  const [user] = userState

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className="main-container">
      <NavBar setName={setName} setEmail={setEmail} setPassword={setPassword} />
      <Route exact path='/' render={() => {
          if ( user.name !== null ) {
            return <Redirect to='/landing' />
          } else {
            return <Landing />
          }
        }} />
        <Route path='/landing' render={() => {
          return <Landing />
        }} />
        <Route path='/login' render={() => {
          if ( user.name !== null ) {
            return <Redirect to='/landing' />
          } else {
            return <Registration />
          }
        }} />      
      <NavFooter />
    </div>
  );
}

export default App;
