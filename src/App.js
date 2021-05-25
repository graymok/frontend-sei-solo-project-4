import './App.css';
import { UserContext } from './Context/UserContext'
import { useContext, useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Landing from './Pages/Landing'
import Registration from './Pages/Registration'
import HeroImage from './Components/HeroImage'
import HeroItem from './Components/HeroItem'

function App() {
  const {userState, verifyUser} = useContext(UserContext)
  const [user] = userState

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const landingBanner = "https://lumiere-a.akamaihd.net/v1/images/databank_lightsabercrystal_01_169_6d843285.jpeg?region=0%2C98%2C1560%2C780"
  const landingRey = "https://www.slashfilm.com/wp/wp-content/images/star-wars-the-rise-of-skywalker-21-e1589815385179.jpg"
  const landingQuote = "Anyone can use a blaster or a fusion cutter... but to use a lightsaber well was a mark of someone a cut above the ordinary."

  return (
    <div className="main-container">
      <NavBar setName={setName} setEmail={setEmail} setPassword={setPassword} />
      <Landing />
    </div>
  );
}

export default App;
