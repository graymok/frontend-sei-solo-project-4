import './App.css';
import { UserContext } from './Context/UserContext'
import { useContext, useState, useEffect } from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
import NavBar from './Components/NavBar'
import NavFooter from './Components/NavFooter'
import Landing from './Pages/Landing'
import Registration from './Pages/Registration'
import UserAccount from './Pages/UserAccount'
import AllProducts from './Pages/AllProducts'
import SingleProduct from './Pages/SingleProduct'
import About from './Pages/About'
import ShoppingCart from './Pages/ShoppingCart'


function App() {
  const {userState, verifyUser} = useContext(UserContext)
  const [user] = userState

  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    verifyUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [])

  return (
    <div>
      <div className="main-container">
        <NavBar setName={setName} setEmail={setEmail} setPassword={setPassword} />
        <Route exact path='/' render={() => {
            return <Landing />
        }} />
        <Route path='/about' render={() => {
            return <About />
        }} />        
        <Route path='/signin' render={(routingProps) => {
          if ( user.name !== null ) {
            return history.goBack()
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
        <Route exact path='/single/light' render={(routingProps) => {
            return <AllProducts backEnd={routingProps.match.path} />
        }} />
        <Route exact path='/single/dark' render={(routingProps) => {
            return <AllProducts backEnd={routingProps.match.path} />
        }} />
        <Route exact path='/double/light' render={(routingProps) => {
            return <AllProducts backEnd={routingProps.match.path} />
        }} />
        <Route exact path='/double/dark' render={(routingProps) => {
            return <AllProducts backEnd={routingProps.match.path} />
        }} />
        <Route exact path='/products/:id' render={(routingProps) => {
            return <SingleProduct id={routingProps.match.params.id} />
        }} />
        <Route path='/cart' render={() => {
          if ( user.name !== null ) {
            return <ShoppingCart />
          } else {
            return <Redirect to='/' />
          }
        }} />                                    
      </div>
      <NavFooter />
    </div>
  );
}

export default App;
