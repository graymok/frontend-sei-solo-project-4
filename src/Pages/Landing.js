import HeroImage from '../Components/HeroImage'
import HeroItem from '../Components/HeroItem'

const Landing = () => {

    const landingRey = "https://www.slashfilm.com/wp/wp-content/images/star-wars-the-rise-of-skywalker-21-e1589815385179.jpg"
    const landingKylo = "https://starwarsblog.starwars.com/wp-content/uploads/2014/12/kylo-ren-2400x1200-689099462190.jpg"

    const landingQuote = `Not as clumsy or random as a blaster: an elegant weapon for a more civilized age.`
    const landingQuoteAuthor = `Obi-Wan Kenobi`


    return (
        <>
            <HeroImage imageSrc={landingRey} imageAlt={"Hero Image 1"} />
            <HeroItem quote={landingQuote} author={landingQuoteAuthor} />
            <HeroImage imageSrc={landingKylo} imageAlt={"Hero Image 2"} />            
        </>
    )
}


export default Landing