import HeroImage from '../Components/HeroImage'
import HeroItem from '../Components/HeroItem'

const Landing = () => {

    const landingBanner = "https://lumiere-a.akamaihd.net/v1/images/databank_lightsabercrystal_01_169_6d843285.jpeg?region=0%2C98%2C1560%2C780"
    const landingRey = "https://www.slashfilm.com/wp/wp-content/images/star-wars-the-rise-of-skywalker-21-e1589815385179.jpg"
    const landingQuote = `Not as clumsy or random as a blaster: an elegant weapon for a more civilized age.`
    const landingQuoteAuthor = `Obi-Wan Kenobi`


    return (
        <>
            <HeroImage imageSrc={landingRey} />
            <HeroItem landingQuote={landingQuote} landingQuoteAuthor={landingQuoteAuthor} />
        </>
    )
}


export default Landing