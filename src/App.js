import './App.css';
import { UserContext } from './Context/UserContext'
import { useContext, useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from './Components/NavBar'
import NavFooter from './Components/NavFooter'
import Landing from './Pages/Landing'
import Registration from './Pages/Registration'
import UserAccount from './Pages/UserAccount'


function App() {
  const {userState, verifyUser} = useContext(UserContext)
  const [user] = userState

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    verifyUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [])

  return (
    <div className="main-container">
      <NavBar setName={setName} setEmail={setEmail} setPassword={setPassword} />
      <Route exact path='/' render={() => {
          return <Landing />
      }} />
      <Route path='/login' render={() => {
        if ( user.name !== null ) {
          return <Redirect to='/' />
        } else {
          return <Registration name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        }
      }} />
      <Route path='/account' render={() => {
        if ( user.name !== null ) {
          return <UserAccount setName={setName} setEmail={setEmail} setPassword={setPassword} />
        } else {
          return <Redirect to='/' />
        }
      }} />            
      <NavFooter />
    </div>
  );
}

export default App;
